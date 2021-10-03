FROM node:alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

RUN npm install

RUN rm -Rf defaultValues.js
RUN mv defaultValues.js.prod defaultValues.js

RUN npm run build
EXPOSE 3000
CMD npm run start