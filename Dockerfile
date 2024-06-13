FROM node:18

WORKDIR /app

RUN npm install

COPY . .

CMD npm run dev