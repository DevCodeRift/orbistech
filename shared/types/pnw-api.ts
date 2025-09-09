export interface PoliticsAndWarAPI {
  // GraphQL endpoint for P&W API
  endpoint: string;
  apiKey?: string;
}

export interface GraphQLQuery {
  query: string;
  variables?: Record<string, any>;
}

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
    path?: Array<string | number>;
  }>;
}

// P&W API Response types
export interface PnwNation {
  id: number;
  nation_name: string;
  leader_name: string;
  continent: string;
  war_policy: string;
  domestic_policy: string;
  color: string;
  alliance_id?: number;
  alliance?: PnwAlliance;
  cities: number;
  score: number;
  population: number;
  flag: string;
  vacation_mode_turns: number;
  beige_turns: number;
  espionage_available: boolean;
  last_active: string;
}

export interface PnwAlliance {
  id: number;
  name: string;
  acronym: string;
  score: number;
  color: string;
  date: string;
  accept_members: boolean;
  flag: string;
  forum_link?: string;
  discord_link?: string;
  wiki_link?: string;
  nations?: PnwNation[];
}

export interface PnwBankRecord {
  id: number;
  date: string;
  sid: number;
  rid: number;
  pid: number;
  note: string;
  money: number;
  coal: number;
  oil: number;
  uranium: number;
  iron: number;
  bauxite: number;
  lead: number;
  gasoline: number;
  munitions: number;
  steel: number;
  aluminum: number;
  food: number;
}
