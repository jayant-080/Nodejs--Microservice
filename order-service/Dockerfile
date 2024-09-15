# Use a base Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Install netcat and PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Serverless Framework globally
RUN npm install -g serverless@3.38.0

# Copy the rest of the application code
COPY . .

# Copy the migration script
COPY migrate.sh .

# Ensure migrate.sh has executable permissions
RUN chmod +x migrate.sh


# Build the project
RUN npm run build

# Expose the application port
EXPOSE 3001

# Set the environment variable for MongoDB URI
ENV DATABASE_URL=postgresql://postgres:password@postgres:5432/microtwo-order-db?schema=public&connect_timeut=300&pool_timeout=30&socket_timeout=30

# Set the entrypoint to the migration script
ENTRYPOINT ["/usr/src/app/migrate.sh"]

# Command to run the Serverless application
CMD ["npx", "serverless", "offline"]
