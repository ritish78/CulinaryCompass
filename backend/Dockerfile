# Using alpine version of nodejs 18
FROM node:18-alpine

# Selecting Workdir
WORKDIR /usr/src/app/backend

# Copying package.json and package-lock.json file
COPY package*.json .

# Installing the dependencies
RUN npm install

# Copying rest of the files
COPY . .

#Making new user without root permission
RUN adduser -D culinarycompassuser && echo "culinarycompassuser:MBrcFRcgHyM/gXTMBjL4CA==" | chpasswd