.DEFAULT_GOAL := help

## help (default): Show the help docs
.PHONY: help
help:
	@echo "Options:\n"
	@sed -n 's|^##||p' ${PWD}/Makefile

## init: Initialize the local env, install dependencies, and build all containers
.PHONY: init
init:
	bash ./bin/local-init.sh

## log: Tail container logs
.PHONY: log
log:
	docker-compose logs -f localenv-example-node

## shell: Start a shell session in a new container
.PHONY: shell
shell:
	docker-compose run --rm localenv-example-node bash

## start: Start containers and run the application
.PHONY: start
start:
	bash ./bin/local-start.sh

## stop: Stop containers and the application
.PHONY: stop
stop:
	bash ./bin/local-stop.sh
