## Multi-stage Dockerfile: build app with dev deps, then create minimal runtime image
FROM node:18-alpine AS builder
WORKDIR /app

# install all deps (including dev) to build the app
COPY package*.json ./
RUN npm ci

# copy source and build
COPY . .
RUN npm run build
RUN npx prisma generate || true

FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# only install production deps
COPY package*.json ./
RUN npm ci --only=production

# copy built output and prisma client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["node", "dist/main"]