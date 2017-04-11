FROM node:latest

RUN apt-get update -qq && apt-get install -y build-essential

RUN mkdir -p /var/www/app/
WORKDIR /var/www/app/
RUN cd /var/www/app/

EXPOSE 8888
EXPOSE 35729

