FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/XAlanWalkerX/RCD-MD.git /root/RCD

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/RCD/node_modules

# Install dependencies
WORKDIR /root/RCD
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS RUN rm -rf /root/Itxxwasi/node_modules
