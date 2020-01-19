FROM node:13
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
