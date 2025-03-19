# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm@latest

# Install dependencies
RUN pnpm install --force

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@latest

# Copy necessary files from builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the application
CMD ["node", "node_modules/next/dist/bin/next", "start"] 