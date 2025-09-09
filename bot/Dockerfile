# Dockerfile for Discord Bot (alternative deployment option)
FROM node:18-alpine

WORKDIR /app

# Copy shared dependencies first
COPY shared/ ./shared/
COPY bot/package*.json ./bot/

# Install dependencies
RUN cd bot && npm ci --only=production

# Copy bot source
COPY bot/ ./bot/

# Build the bot
RUN cd bot && npm run build

# Expose port (if needed for health checks)
EXPOSE 3001

# Start the bot
CMD ["npm", "start", "--prefix", "bot"]
