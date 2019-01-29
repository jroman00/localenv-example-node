FROM node:10.15.0-alpine

# Current app version
ENV APP_VERSION 0.0.1

# Copy package.json to temp folder
COPY package*.json /tmp/

# Install node dependencies
RUN cd /tmp && npm install

# Set working directory and copy source
WORKDIR /var/www
COPY . /var/www

# Move compiled node modules back
RUN mv /tmp/node_modules node_modules

# Compile source code
RUN npm run build

# Expose application port
EXPOSE 9876

# Run start command
CMD ["npm", "run", "start"]
