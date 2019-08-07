FROM node:alpine

WORKDIR /usr/app

COPY *.json ./
RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "run", "start"]
