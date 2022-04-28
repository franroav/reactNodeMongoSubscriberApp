FROM node:alpine

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

# npm continuous integration 
RUN npm ci

# Bundle app source 
COPY . .

# Build
RUN npm run build

# PORT 
EXPOSE 5000 

# Run npm Istall 
CMD ["npm", "run", "start:dev"]
#CMD ["node", "dist/main"]