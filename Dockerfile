FROM node:7.1.0-alpine

RUN apk --no-cache add python bash build-base ca-certificates

RUN npm i -g yarn

WORKDIR /home/bundle
COPY . /home/bundle

RUN yarn