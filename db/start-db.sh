#!/bin/sh

set -e

./db/stop-db.sh

export POSTGRES_PASSWORD=postgrespassword
export POSTGRES_HOST=localhost
export POSTGRES_PORT=3003
export POSTGRES_USER=postgres
export POSTGRES_DB=postgres
export DATABASE_URL="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT"
export REDIS_HOST=cache
export REDIS_PORT=6379
export REDIS_PASSWORD=

docker-compose -f db/docker-compose.yml up -d --remove-orphans