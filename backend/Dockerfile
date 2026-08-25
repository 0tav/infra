# === STAGE 1: Base Setup ===
FROM node:20-alpine AS base
RUN apk add --no-cache openssl libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# === STAGE 2: Dependencies Installation ===
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --config.node-linker=hoisted

# === STAGE 3: Build & Generate ===
FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV DATABASE_URL="postgresql://rand:random@localhost:5432/mydb?schema=public"
RUN pnpm prisma generate
RUN pnpm build

# === STAGE 4: Clean node modules for production ===
FROM base AS production-deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile --config.node-linker=hoisted
COPY --from=builder /app/src/generated ./src/generated
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# === STAGE 5: Runtime Production ===
FROM node:20-alpine AS runner
RUN apk add --no-cache openssl libc6-compat netcat-openbsd dos2unix
WORKDIR /app
ENV NODE_ENV=production

COPY --from=production-deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src/generated ./src/generated
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

COPY entrypoint.sh ./entrypoint.sh
RUN dos2unix ./entrypoint.sh && chmod +x ./entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "dist/server.js"]
