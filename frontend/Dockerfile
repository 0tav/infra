# === STAGE 1: install all dependencies (Dev + Prod) ===
FROM node:20-alpine AS base
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# === STAGE 2: Compile TypeScript & Generate Prisma ===
FROM base AS builder
WORKDIR /app
COPY . .
ARG NEXT_PUBLIC_API_URL
ARG NEXT_SERVER_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_SERVER_API_URL=$NEXT_SERVER_API_URL

RUN pnpm build

# === STAGE 3: Runtime production ===
FROM node:20-alpine AS runner
WORKDIR /app

# Setup environment to production
ENV NODE_ENV=production
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

# Standalone Next.js need static folder and public copied manually
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3001
CMD ["node", "server.js"]
