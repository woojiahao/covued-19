FROM node:13.10.1-stretch

ENV NODE_END production

EXPOSE 8080

RUN npm install --no-optional -g http-server

WORKDIR /app

COPY package*.json ./
RUN npm install --no-optional

COPY . .
RUN npm run build

CMD http-server dist
