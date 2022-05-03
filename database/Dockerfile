FROM node:alpine
RUN mkdir -p /app
WORKDIR /app

COPY ./package.json /app/

RUN npm install
RUN npm install --global pm2

COPY . /app/

EXPOSE 5500
CMD [ "pm2-runtime", "npm", "--", "start" ]