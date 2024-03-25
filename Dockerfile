from node:20.9.0-alpine
WORKDIR /usr/src/products
COPY package*.json ./
RUN npm i
COPY . .