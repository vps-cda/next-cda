FROM node:18

WORKDIR /app

COPY . .

EXPOSE 3000

CMD npm install && npm run build