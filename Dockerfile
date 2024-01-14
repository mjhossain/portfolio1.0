#Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json .
CMD ["npm", "install", "-g", "npm@10.3.0"]
COPY . .
CMD ["npm", "run", "build"]

#Stage 2
FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]