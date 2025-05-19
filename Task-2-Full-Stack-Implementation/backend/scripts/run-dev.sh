#!/bin/sh
set -e

echo "Running migrations."
npm run migrate

echo "Seeding the database."
npm run seed

echo "Generating GraphQL types."
npm run generate-graphql-schema

echo "Starting backend server..."
npm run dev