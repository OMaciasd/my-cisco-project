up:
	docker-compose up -d

down:
	docker-compose down

rebuild:
	docker-compose down && docker-compose build && docker-compose up -d
