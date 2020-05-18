<!-- omit in toc -->
# jroman00/localenv-example-node

A simple Node.js application built as an example for localenv [`localenv`](https://github.com/jroman00/localenv)

- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Features](#features)
- [Scripts](#scripts)
  - [Running a Shell](#running-a-shell)

## Getting Started

This application is not intended to be used on its own and should only be used as part of the [`localenv`](https://github.com/jroman00/localenv) ecosystem. See the [localenv installation instructions](https://github.com/jroman00/localenv/blob/master/README.md) to get started

## Technologies

* [Node.js 10.15](https://nodejs.org/en/)
* [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
* [Express](https://www.npmjs.com/package/express)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [Nodemon](https://nodemon.io/)
* [EditorConfig](https://editorconfig.org/)

## Features

* Simple web framework
* Example routes:
  * `Hello world` home endpoint
  * Health endpoints (i.e. `health`, `ready`, and `version` endpoints)
* Example helper library (i.e. `RedisHelper`)
* Unit tests
* Linting
* Application auto-reloading on source code save

## Scripts

### Running a Shell

Once running via [`localenv`](https://github.com/jroman00/localenv), connect to a new container instance via:

```bash
make shell
```

Once connected to the running container, you can run commands directly via `npm` (e.g. `npm run lint`, `npm run test`). See the `scripts` section of `package.json` for the full list of available scripts
