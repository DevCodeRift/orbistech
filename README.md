# ObisTech - Politics and War Alliance Management

A comprehensive web application and Discord bot for managing alliances in the game **Politics and War**.

## 🚀 Features

### Web Application
- **Admin Panel**: Configure module access per alliance
- **Alliance Management**: Leaders can manage their alliances through a streamlined interface
- **Discord Integration**: Seamless synchronization between web and Discord
- **Member Authentication**: Discord OAuth + Politics and War API key verification

### Discord Bot
- **Module System**: Recruitment, Membership, War, Banking modules
- **Permission Control**: Role-based access per alliance
- **Real-time Sync**: Changes made in web reflect in Discord and vice versa

### Modules
- 🎯 **Recruitment**: Application management and interview tracking
- 👥 **Membership**: Member management and role assignments  
- ⚔️ **War**: War declarations, target assignments, damage tracking
- 💰 **Banking**: Alliance bank management with P&W API integration
- 📊 **Taxes**: Tax collection and management

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Frontend  │    │  Discord Bot    │    │  Admin Panel    │
│   (Next.js)     │    │  (Discord.js)   │    │   (React)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
         ┌─────────────────────────────────────────────────┐
         │           Backend API Server                    │
         │              (Node.js/Express)                  │
         └─────────────────────────────────────────────────┘
                                 │
         ┌─────────────────────────────────────────────────┐
         │              Database Layer                     │
         │              (PostgreSQL)                       │
         └─────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Discord OAuth2

**Backend:**
- Node.js with TypeScript
- Discord.js for bot functionality
- Politics and War GraphQL API integration

**Database:**
- PostgreSQL for user data and configurations

**Deployment:**
- **Web App**: Vercel (automatic GitHub deployments)
- **Discord Bot**: Railway/Render (containerized deployment)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Discord Application (Bot Token + OAuth2)
- Politics and War API access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevCodeRift/orbistech.git
   cd orbistech
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Setup**
   
   **Web App** (`web/.env.local`):
   ```env
   NEXTAUTH_SECRET=your_nextauth_secret
   DISCORD_CLIENT_ID=your_discord_client_id
   DISCORD_CLIENT_SECRET=your_discord_client_secret
   DATABASE_URL=your_database_url
   PNW_API_URL=https://api.politicsandwar.com/graphql/api
   ```

   **Discord Bot** (`bot/.env`):
   ```env
   DISCORD_TOKEN=your_discord_bot_token
   DISCORD_CLIENT_ID=your_discord_client_id
   DATABASE_URL=your_database_url
   PNW_API_URL=https://api.politicsandwar.com/graphql/api
   JWT_SECRET=your_jwt_secret
   WEB_APP_URL=http://localhost:3000
   ```

4. **Development**
   ```bash
   # Run both web app and bot in development
   npm run dev
   
   # Or run individually
   npm run dev:web    # Web app on http://localhost:3000
   npm run dev:bot    # Discord bot
   ```

## 📦 Deployment

### Web Application (Vercel)
The web application automatically deploys to Vercel when pushed to the `main` branch.

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Discord Bot (Railway/Render)
```bash
# Build and deploy to Railway
npm run build:bot
# Follow Railway deployment instructions
```

## 🔧 Development Workflow

**VS Code Optimized:**
- All development can be done within VS Code
- Integrated terminal support
- TypeScript IntelliSense across projects
- Shared types and utilities

**Project Structure:**
```
orbistech/
├── web/                 # Next.js web application
├── bot/                 # Discord.js bot
├── shared/              # Shared types and utilities
├── .github/             # GitHub workflows and configs
├── vercel.json          # Vercel deployment config
├── railway.toml         # Railway deployment config
└── package.json         # Root package with scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, join our Discord server or create an issue on GitHub.

---

**Built with ❤️ for the Politics and War community**
