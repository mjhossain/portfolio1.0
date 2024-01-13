FROM nginx:latest
WORKDIR /docker-image/
COPY public/ /docker-image/public
COPY src/ /docker-image/src
COPY package.json /docker-image/
RUN npm install
CMD ["npm", "start"]