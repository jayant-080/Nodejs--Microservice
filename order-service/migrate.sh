#!/bin/bash
set -e

# Check for PostgreSQL readiness using psql
echo "Waiting for PostgreSQL to be ready..."
while ! PGPASSWORD=password psql -h postgres -U postgres -d microtwo-order-db -c '\q' >/dev/null 2>&1; do
  echo "PostgreSQL is not ready yet. Waiting..."
  sleep 1
done

echo "PostgreSQL is ready."

echo "Generating Prisma client..."
npx prisma generate

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Starting the application..."
exec "$@"
