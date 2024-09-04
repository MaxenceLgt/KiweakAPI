FROM node:21.7.0

WORKDIR /usr/src/app

COPY . .

RUN npm i -g pnpm

RUN pnpm i

RUN npx prisma generate

EXPOSE 3000

CMD ["pnpm", "run", "start:dev"]