FROM node:6.9.2
WORKDIR /app
EXPOSE 3000
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

ADD . /app
RUN npm i -g yarn
RUN yarn

CMD [ "npm", "start" ]
