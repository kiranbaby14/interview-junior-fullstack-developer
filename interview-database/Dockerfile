FROM node:18-alpine
WORKDIR /app
COPY cities.json /app/cities.json
RUN npm install -g json-server
EXPOSE 8000

# Start JSON Server when the container starts
CMD ["json-server", "--watch", "cities.json", "--port", "8000", "--host", "0.0.0.0"]
