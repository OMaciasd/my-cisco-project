#!/bin/sh

# Mensaje de inicialización
echo "Iniciando contenedor y cargando configuraciones iniciales..."

# Copia de datos si es necesario
cp -r /usr/share/nginx/html/data.json /usr/share/nginx/html/data-backup.json

# Iniciar el servidor
exec "$@"
