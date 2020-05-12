.DEFAULT_GOAL := help

init:
	bash ./bin/local-init.sh

lint:
	docker-compose run --rm localenv-example-node composer run lint

lint-fix:
	docker-compose run --rm localenv-example-node composer run lint-fix

log:
	docker-compose logs -f localenv-example-node

run:
	docker-compose run --rm localenv-example-node $(cmd)

shell:
	docker-compose run --rm localenv-example-node bash

start:
	bash ./bin/local-start.sh

stop:
	bash ./bin/local-stop.sh

test:
	docker-compose run --rm localenv-example-node composer run test

test-coverage:
	docker-compose run --rm localenv-example-node composer run test-coverage

#############################################################
# Help Documentation
#############################################################

help:
	@echo "  Application Commands"
	@echo "  |"
	@echo "  |_ help (default)        - Show this message"
	@echo "  |_ init                  - Initialize the local env, install dependencies, and build all containers"
	@echo "  |_ lint                  - Run lint checks"
	@echo "  |_ lint-fix              - Run lint checks and fix issues"
	@echo "  |_ log                   - Tail container logs"
	@echo "  |_ run                   - Run an arbitrary command in the web container. Ex usage: make run cmd=\"your command\""
	@echo "  |_ shell                 - Start a shell session in a new container"
	@echo "  |_ start                 - Start containers and run the application"
	@echo "  |_ stop                  - Stop containers and the application"
	@echo "  |_ test                  - Run application tests"
	@echo "  |_ test-coverage         - Run application tests with a coverage report"
	@echo "  |__________________________________________________________________________________________"
	@echo " "

.PHONY:
	init
	lint
	lint-fix
	log
	run
	shell
	start
	stop
	test
	test-coverage
