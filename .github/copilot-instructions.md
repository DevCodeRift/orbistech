# GitHub Copilot Instructions

## Project Overview

This project is a comprehensive webapp and Discord bot for the game "Politics and War". The system provides alliance management tools with modular permissions and seamless integration between web and Discord interfaces.

**Core Functionality:**
- Admin can configure module access per alliance (Recruitment, Membership, War, etc.)
- Alliance leaders can manage their alliances through both web and Discord
- Streamlined processes for banking and other alliance operations
- Discord OAuth + P&W API key verification for members
- Integration with Politics and War API for alliance bank, taxes, and other controls

## Coding Standards

- Use TypeScript for type safety
- Follow REST API conventions for web endpoints
- Use async/await for asynchronous operations
- Implement proper error handling and logging
- Use environment variables for sensitive configuration
- Follow Discord.js best practices for bot development

## Architecture Guidelines

**Multi-tier Architecture:**
- Frontend: React/Next.js webapp
- Backend: Node.js/Express API server
- Database: PostgreSQL for user data and configurations
- Bot: Discord.js bot with shared database
- External: Politics and War API integration

**Modular Design:**
- Separate modules for Recruitment, Membership, War, Banking
- Permission-based access control per alliance
- Shared authentication between web and Discord

## Dependencies and Technologies

**Core Stack:**
- Node.js with TypeScript
- Discord.js for bot functionality
- Express.js for web API
- PostgreSQL for database
- Discord OAuth2 for authentication
- Politics and War API integration

**Frontend:**
- React/Next.js
- Tailwind CSS for styling
- Axios for API calls

**Infrastructure:**
- Vercel deployment for web app/admin panel
- Railway/Render/Heroku for Discord bot hosting
- Monorepo structure with separate deployment configs
- Environment-based configuration

## Testing Guidelines

- Unit tests for core business logic
- Integration tests for API endpoints
- Mock Politics and War API for testing
- Test Discord bot commands in development server

## Additional Context

**Politics and War Integration:**
- Alliance leaders have extensive API access (banking, taxes, etc.)
- Member verification through API keys
- Real-time data synchronization where needed

**Security Considerations:**
- Secure API key storage
- Rate limiting for external API calls
- Proper permission validation
- Audit logging for sensitive operations

## Development Workflow

**Critical Priorities:**
- All development and updates must be manageable through VS Code
- Web app/admin panel deploys automatically to Vercel via GitHub
- Discord bot hosted separately (Railway/Render) but same repository
- Monorepo structure with clear separation of concerns
---
applyTo: '**'
---
1. Whenever you run a command in the terminal, pipe the output to a file, output.txt, that you can read from.
2. You should read the output.txt file to see the results of your commands.
3. Make sure to overwrite each time so that it doesn't grow too big.
4. There is a bug in the current version of Copilot that causes it to not read the output of commands correctly.
5. This workaround allows you to read the output from the temporary file instead.