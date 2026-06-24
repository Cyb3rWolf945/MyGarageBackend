#!/bin/sh
set -e

echo "🔄 Waiting for PostgreSQL to be ready..."

# Parse DATABASE_URL to extract host, port, user
# Format: postgresql://user:password@host:port/dbname?...
DB_URL="${DATABASE_URL}"
DB_HOST=$(echo "$DB_URL" | sed -n 's|.*://.*@\([^:/]*\).*|\1|p')
DB_PORT=$(echo "$DB_URL" | sed -n 's|.*://.*@[^:/]*:\([0-9]*\).*|\1|p')
DB_PORT="${DB_PORT:-5432}"
DB_USER=$(echo "$DB_URL" | sed -n 's|.*://\([^:]*\):.*@.*|\1|p')

echo "   Host: $DB_HOST, Port: $DB_PORT, User: $DB_USER"

# Wait until pg_isready succeeds (max 30 tries, 2s apart)
ATTEMPTS=0
MAX_ATTEMPTS=30
until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" > /dev/null 2>&1; do
  ATTEMPTS=$((ATTEMPTS + 1))
  if [ "$ATTEMPTS" -ge "$MAX_ATTEMPTS" ]; then
    echo "❌ PostgreSQL did not become ready in time. Exiting."
    exit 1
  fi
  echo "   Waiting... (${ATTEMPTS}/${MAX_ATTEMPTS})"
  sleep 2
done

echo "✅ PostgreSQL is ready."

# Run Prisma migrations (safe for production — uses existing migration files)
echo "🔧 Running database migrations..."
npx prisma migrate deploy

echo "🚗 Starting MyGarage API..."
exec node dist/server.js
