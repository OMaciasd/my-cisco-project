#!/bin/bash
# Configuración
BACKUP_DIR="/path/to/backups"
TIMESTAMP=$(date +%F_%H-%M-%S)
CONTAINER_NAME="webdev-class-db"

# Backup de la base de datos
docker exec -t $CONTAINER_NAME pg_dumpall -c -U admin > $BACKUP_DIR/db_backup_$TIMESTAMP.sql

# Limpieza de backups antiguos
find $BACKUP_DIR -type f -mtime +7 -exec rm {} \;
