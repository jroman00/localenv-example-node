# @jroman00/node-example

The purpose of this project is to demonstrate how to set up a small and simple Node.js project for local development via Docker Compose

Technologies include:

* [Node.js 10.15](https://nodejs.org/en/)
* [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
* [Express](https://www.npmjs.com/package/express)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [Nodemon](https://nodemon.io/)
* [EditorConfig](https://editorconfig.org/)

Features includes:

* Simple web framework
* Example routes:
  * `Hello World` home endpoint
  * Health endpoints (i.e. `health`, `ready`, and `version` endpoints)
* Example helper library (i.e. `RedisHelper`)
* Unit tests
* Linting
* Application auto-reloading on source code save

## Getting Started

These instructions will get you a copy of this example project up and running on your local machine for development

## Prerequisites

The following programs are required in order for this project to work as expected

  - [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

The following installation steps will get the example application up and running without any additional configuration on your part

### 1. Clone the Repo

```bash
git clone https://github.com/jroman00/node-example
```

### 2. Change Directory

Enter into the newly created `node-example` directory:

```bash
cd node-example
```

### 3. Initialize

```bash
bin/local-init
```

### 4. Enjoy!

The example application should now be running. To access it, please point your browser to [http://localhost:8080/](http://localhost:8080/)

## Connect to Container

To connect to the running Docker container, by running the following:

```bash
docker-compose exec node-example sh
```

## Scripts

In order to run the following scripts, you will need to connect to the running container outlined above

### Running Tests

To run the test suite:

```bash
npm run test
```

To run the test suite with coverage report:

```bash
npm run test-coverage
```

### Running Linting

To run the linting suite:

```bash
npm run lint
```

To run the linting suite with auto-fix:

```bash
npm run-lint-fix
```

## Customization

### Avoiding the Use of localhost

During local development, you may want to avoid using `localhost` and instead use custom URLs. If that is the case, simply update your `/etc/hosts` file. For example:

```bash
127.0.0.1 node-example.it
```

Remember that you will still need to include the port. In this case, you can visit [http://node-example.it:9876/](http://node-example.it:9876/)
