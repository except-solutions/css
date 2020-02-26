FROM node:13.8.0-alpine

WORKDIR /app

RUN apk add yarn

COPY . /app

RUN ls deploy/bot

CMD ["sh", "/app/deploy/bot/entrypoint.sh"]
