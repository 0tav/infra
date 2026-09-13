#!/bin/sh

echo "[ENTRYPOINT] Start checking infrastructure"

if [ "${NODE_ENV}" = "production" ] || [ "$NODE_ENV" = "production" ]; then
    echo "--- Berjalan di Cloud Production: Melewati pengecekan database lokal ---"
    exec "$@"
fi

set -e

DB_HOST="postgres_db"
DB_PORT="5432"

echo "[ENTRYPOINT] Waiting PostgreSQL at ${DB_HOST}:${DB_PORT} ready to connect"

until nc -z -w 2 "$DB_HOST" "$DB_PORT"; do
    echo "[ENTRYPOINT] Database not ready yet. Try again after 2 seconds"
    sleep 2
done

echo "[ENTRYPOINT] PostgreSQL active and ready to use"
echo "[ENTRYPOINT] Running Prisma Database Migration"

npx prisma migrate deploy --schema=prisma/schema.prisma

echo "[ENTRYPOINT] Database schema successfully updated. Running backend server"

exec "$@"
