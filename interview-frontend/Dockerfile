FROM node:18-alpine as builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:1.21.1-alpine
# Copy the built Angular application from the builder stage to the Nginx server
COPY --from=builder ./app/dist/interview-frontend /usr/share/nginx/html

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

