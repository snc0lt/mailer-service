FROM node:12.16.3

LABEL Name=nodemailer-service Version=1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD npm start