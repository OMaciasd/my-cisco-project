#!/bin/bash

docker-compose down --volumes && docker-compose build && docker-compose --profile development up -d

curl http://localhost:3000

docker-compose ps

docker-compose logs -f app

docker inspect app | jq '.[0].Mounts'

docker exec -it app cat /var/log/nginx/access.log

docker run --rm --volumes-from webdev-class-db-1 -v $(pwd):/backup ubuntu \
tar cvf /backup/db_data.tar /var/lib/postgresql/data

docker run --rm --volumes-from webdev-class-db-1 -v $(pwd):/backup ubuntu \
tar xvf /backup/db_data.tar -C /

find /backups -type f -mtime +7 -exec rm {} \;

docker volume ls

docker volume inspect postgres-data

docker volume rm postgres-data
