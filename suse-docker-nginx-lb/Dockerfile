
FROM suse/sles12sp1:latest
RUN  zypper --quiet addrepo -G -t yum -c 'http://nginx.org/packages/sles/12' nginx && \
 zypper --quiet --non-interactive update && \
 zypper --quiet --non-interactive install nginx
RUN zypper --quiet --non-interactive clean

#We well ensure that errors and access go to standard error/ouput
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
