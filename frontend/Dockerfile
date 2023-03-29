FROM node:18.15.0

WORKDIR /var/jenkins_home/workspace/Frontend/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]