FROM node:7.1.0-alpine

RUN apk --no-cache add python bash build-base ca-certificates

WORKDIR /home/bundle
COPY . /home/bundle

RUN npm i -g yarn
RUN yarn