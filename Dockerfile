FROM node:latest

WORKDIR /app

COPY ./dist/ /app

CMD ["node", "bundle.js"]
