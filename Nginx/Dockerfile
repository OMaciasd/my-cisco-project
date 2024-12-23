FROM nginx:latest

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./ /usr/share/nginx/html

RUN apk add certbot

RUN certbot certonly --standalone -d tu-dominio.com

EXPOSE 80

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
