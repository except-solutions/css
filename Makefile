run-dev-db:
	docker-compose up

run-test-db:
	docker-compose -f docker-compose-test.yml up
