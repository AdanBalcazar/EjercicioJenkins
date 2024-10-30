FROM node:21-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm config set strict-ssl false

RUN npm install

COPY app.js .

CMD ["node", "app.js"]

