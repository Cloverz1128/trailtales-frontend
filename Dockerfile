FROM node:lts-alpine

WORKDIR /app

# install git
RUN apk add --no-cache git

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000