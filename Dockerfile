FROM node:10.15.1-alpine

# Set up environment variables
ENV APP_NAME localenv-example-node
ENV APP_VERSION 0.0.1

# Install node dependencies
RUN npm install

# Set working directory and copy source
WORKDIR /var/www
COPY . /var/www

# Expose application port
EXPOSE 8081

# Run start command
CMD ["npm", "run", "start"]
