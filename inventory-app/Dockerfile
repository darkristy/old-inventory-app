FROM node:12.18-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn

COPY . .

EXPOSE 5000

CMD yarn dev