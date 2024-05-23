FROM node:21.7.0

WORKDIR /usr/src/app

COPY . .

RUN npm i -g pnpm

RUN pnpm i

EXPOSE 3000

CMD ["pnpm", "run", "start:dev"]