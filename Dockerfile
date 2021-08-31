#STEP 1 BUILD OF REACT PROJECT
from node:12-alphine3.12 AS build 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

