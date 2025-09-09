import axios, { AxiosResponse } from 'axios';
import { GraphQLQuery, GraphQLResponse, PoliticsAndWarAPI } from '../types/pnw-api';

export class PnwApiClient {
  private apiConfig: PoliticsAndWarAPI;

  constructor(config: PoliticsAndWarAPI) {
    this.apiConfig = config;
  }

  async query<T = any>(query: GraphQLQuery): Promise<GraphQLResponse<T>> {
    try {
      const response: AxiosResponse<GraphQLResponse<T>> = await axios.post(
        this.apiConfig.endpoint,
        {
          query: query.query,
          variables: query.variables || {}
        },
        {
          headers: {
            'Content-Type': 'application/json',
            ...(this.apiConfig.apiKey && { 'X-Api-Key': this.apiConfig.apiKey })
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error('P&W API Error:', error);
      throw new Error(`Failed to query P&W API: ${error}`);
    }
  }

  async getNation(nationId: number) {
    const query: GraphQLQuery = {
      query: `
        query GetNation($id: Int!) {
          nations(id: [$id]) {
            data {
              id
              nation_name
              leader_name
              continent
              war_policy
              domestic_policy
              color
              alliance_id
              cities
              score
              population
              flag
              vacation_mode_turns
              beige_turns
              espionage_available
              last_active
            }
          }
        }
      `,
      variables: { id: nationId }
    };

    return this.query(query);
  }

  async getAlliance(allianceId: number) {
    const query: GraphQLQuery = {
      query: `
        query GetAlliance($id: Int!) {
          alliances(id: [$id]) {
            data {
              id
              name
              acronym
              score
              color
              date
              accept_members
              flag
              forum_link
              discord_link
              wiki_link
            }
          }
        }
      `,
      variables: { id: allianceId }
    };

    return this.query(query);
  }

  async validateApiKey(apiKey: string): Promise<boolean> {
    try {
      const client = new PnwApiClient({
        endpoint: this.apiConfig.endpoint,
        apiKey: apiKey
      });

      const query: GraphQLQuery = {
        query: `
          query ValidateKey {
            me {
              nation {
                id
                nation_name
              }
            }
          }
        `
      };

      const response = await client.query(query);
      return !response.errors && !!response.data?.me?.nation;
    } catch {
      return false;
    }
  }
}
