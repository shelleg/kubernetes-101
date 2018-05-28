FROM node:9-alpine

EXPOSE 8081
WORKDIR /opt/app/

ADD package.json /opt/app/
RUN npm install

ADD client.js /opt/app/
CMD [ "node", "client.js" ]
