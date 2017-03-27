FROM node:boron

WORKDIR /home/node

COPY . .

RUN npm install

CMD ["node", "index.js"]

