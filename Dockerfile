FROM nginx:latest
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY /dist /usr/share/nginx/html/
COPY /nginx/404.html /usr/share/nginx/html/