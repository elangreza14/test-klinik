FROM node:14-slim

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

run yarn install

EXPOSE 9000

CMD ["yarn", "start:dev"]



