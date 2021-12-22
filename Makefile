.DEFAULT_GOAL := help

init:
	bash ./bin/local-init.sh

log:
	docker-compose logs -f localenv-example-node

shell:
	docker-compose run --rm localenv-example-node bash

start:
	bash ./bin/local-start.sh

stop:
	bash ./bin/local-stop.sh

#############################################################
# Help Documentation
#############################################################

help:
	@echo "  Application Commands"
	@echo "  |"
	@echo "  |_ help (default)        - Show this message"
	@echo "  |_ init                  - Initialize the local env, install dependencies, and build all containers"
	@echo "  |_ log                   - Tail container logs"
	@echo "  |_ shell                 - Start a shell session in a new container"
	@echo "  |_ start                 - Start containers and run the application"
	@echo "  |_ stop                  - Stop containers and the application"
	@echo "  |__________________________________________________________________________________________"
	@echo " "

.PHONY:
	init
	log
	shell
	start
	stop
