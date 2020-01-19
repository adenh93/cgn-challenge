FROM node:13 AS builder
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:13
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]