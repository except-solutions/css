run-dev-db:
	docker-compose up

run-test-db:
	docker-compose -f docker-compose-test.yml up

create-admin-user:
	node commands/createAdminUser.js --email $(EMAIL) --password $(PASSWORD) --level $(LEVEL)

