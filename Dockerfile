FROM node:12.2.0

WORKDIR /usr/src/whatToBuy

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]