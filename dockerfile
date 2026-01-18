FROM oven/bun:1.0




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

