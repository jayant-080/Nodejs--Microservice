# Use a base Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Serverless Framework globally
RUN npm install -g serverless@3.38.0

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Expose the application port
EXPOSE 3000

# Set the environment variable for MongoDB URI
ENV MONGO_URI=mongodb://mongodb:27017/microtwo-product-db

# Command to run the Serverless application
CMD ["npx", "serverless", "offline"]
