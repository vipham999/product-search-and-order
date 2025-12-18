## Single-stage Dockerfile for React + Vite app (serve with Node)

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.* ./
COPY eslint.config.js ./
COPY index.html ./
COPY public ./public
COPY src ./src

RUN npm install --legacy-peer-deps

# Build production bundle
RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]

