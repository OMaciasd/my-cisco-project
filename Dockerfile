FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

CMD ["node", "server.js"]

HEALTHCHECK --interval=30s --timeout=10s \
  CMD curl -f http://localhost:3000/health || exit 1
