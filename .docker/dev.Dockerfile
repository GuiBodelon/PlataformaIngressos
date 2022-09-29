# develop stage
FROM node:14.17-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli@latest
COPY . . 
