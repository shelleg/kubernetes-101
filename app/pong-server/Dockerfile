FROM node:9-alpine

EXPOSE 8081
WORKDIR /opt/app/

ADD package.json /opt/app/
RUN npm install

ADD server.js /opt/app/
CMD [ "node", "server.js" ]
