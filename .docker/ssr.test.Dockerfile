# develop stage
FROM node:16.17-alpine3.15 as develop-stage
WORKDIR /app
COPY package*.json ./
COPY src/css/fonts/mulish-v12-latin-regular.ttf ./
RUN npm i -g @quasar/cli@latest
RUN npm i -g pm2@latest
COPY . .

# local-deps
FROM develop-stage as local-deps-stage
RUN ls
RUN rm -r -f .quasar
RUN rm -r -f dist
RUN rm -r -f node_moduless
RUN rm -f yarn.lock
RUN mkdir -p /usr/share/fonts/truetype/
RUN install -m644 mulish-v12-latin-regular.ttf  /usr/share/fonts/truetype/
RUN rm ./mulish-v12-latin-regular.ttf
RUN yarn

# build stage
FROM local-deps-stage as build-stage
#ENV API_CLIENT_URL=https://api.qpanc.tobiasmesquita.dev/
#ENV API_SERVER_URL=https://api.qpanc.tobiasmesquita.dev/
RUN quasar build -m ssr --envPath=test.env
#RUN quasar build --envPath=test.env
EXPOSE 3000
CMD ["pm2-runtime", "dist/ssr/index.js"]
