FROM node:8.10-alpine

WORKDIR /usr/app

COPY package.json package.json

RUN npm install

COPY app.js app.js

EXPOSE 3000

CMD node app.js