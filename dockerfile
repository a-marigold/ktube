FROM oven/bun:latest




WORKDIR /app



COPY . .





WORKDIR /app/shared
RUN bun install 
RUN bun run build


WORKDIR /app/backend
RUN bun install
RUN bun run build

ENV NODE_ENV=production

CMD ["bun", "run", "start"]





