FROM node:8-alpine

# Create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY package.json /home/node/app
COPY yarn.lock /home/node/app

RUN chown -R node:node /home/node/app

USER node
RUN yarn

# Bundle app source
COPY . /home/node/app
EXPOSE 8000
CMD [ "npm", "start" ]
