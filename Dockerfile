FROM node:14-alpine AS build
ARG GITHUB_TOKEN
WORKDIR /application
ENV NODE_ENV=production
RUN apk add --no-cache --virtual devtools build-base linux-headers udev python3
COPY package.json ./
COPY example.npmrc .npmrc
RUN npm install && npm install node-red --unsafe-perm

FROM node:14-alpine
RUN apk add --no-cache tzdata
WORKDIR /application
RUN chown node:node /application
USER node
ENV NODE_ENV=production \
    FLOWS=flows.json \
    APPLICATION_NAME=company-nodered-messanger
COPY --from=build --chown=node:node /application /application
COPY --chown=node:node . .
ARG PORT=1880
ENV PORT=${PORT}
EXPOSE ${PORT}/tcp
CMD node /application/node_modules/node-red/red.js $FLOWS --userDir /application
