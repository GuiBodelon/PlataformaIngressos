# develop stage
FROM node:16.17-alpine3.15 as develop-stage
WORKDIR /app
COPY package*.json ./
COPY src/css/fonts/mulish-v12-latin-regular.ttf ./
RUN npm i -g @quasar/cli@latest
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
#RUN quasar build -m ssr
RUN quasar build --envPath=test.env

# test stage
#FROM build-stage as test-stage
#WORKDIR /app/source/dist/ssr
#RUN mv * ../../../
#WORKDIR /app
#RUN rm -r -f source
#RUN yarn
#CMD ["node", "index.js"]
FROM nginx:1.23-alpine as test-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
RUN cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.orig
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 8080
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
