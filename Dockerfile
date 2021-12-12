FROM node:16-slim as BUILDER
LABEL maintainer="Arthur Nogueira"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install 

COPY src ./src


# Node server

FROM node:16-alpine 

WORKDIR /usr/src/app

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app ./

EXPOSE 3000

CMD ["npm", "start"]
