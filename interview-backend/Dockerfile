FROM node:18-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM node:18-alpine
COPY --from=builder /app ./
EXPOSE 3000
CMD [ "node", "dist/main" ]