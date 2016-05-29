FROM suse/sles12sp1:latest
RUN zypper --quiet --non-interactive update && \
 zypper --quiet --non-interactive install wget tar xz
RUN zypper --quiet --non-interactive clean

ENV APPDIR /APP

WORKDIR ${APP}
RUN wget --quiet https://nodejs.org/dist/v4.4.4/node-v4.4.4-linux-x64.tar.xz -O /tmp/node.tar.xz && \
 tar -Jxf /tmp/node.tar.xz --strip-components=1 >/dev/null 2>&1
#
# Not using git ...
#
 
#RUN wget --quiet https://raw.githubusercontent.com/frjaraur/docker-simplest-nodeapp/master/simpleapp.js && \
# wget --quiet https://raw.githubusercontent.com/frjaraur/docker-simplest-nodeapp/master/package.json
ADD simpleapp.js simpleapp.js
ADD package.json package.json

ENV PATH $PATH:/${APPDIR}/bin
RUN npm install 
CMD ["node","simpleapp.js","3000"]
EXPOSE 3000
