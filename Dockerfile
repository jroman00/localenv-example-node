FROM node:14.21.3-buster-slim

# Set up environment variables
ENV APP_NAME localenv-example-node
ENV APP_VERSION 0.1.0

# Set working directory and copy source
WORKDIR /var/www
COPY . /var/www

# Install node dependencies
RUN npm ci

# Expose application port
EXPOSE 8080

# Run start command
CMD ["npm", "run", "start"]
