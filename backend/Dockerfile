FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

RUN apt-get update && apt-get install -y nginx
RUN rm /etc/nginx/sites-enabled/default
COPY nginx.conf /etc/nginx/sites-available/default
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/

EXPOSE 80
CMD ["sh", "-c", "nginx && npm run start:prod"]
