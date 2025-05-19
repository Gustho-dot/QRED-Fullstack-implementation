# Use Node.js 22 LTS Alpine
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm ci

# Copy Prisma schema and generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy the rest of the code
COPY . .

# Install tsx globally
RUN npm install -g tsx

# Make sure the shell script is executable
RUN chmod +x ./scripts/run-dev.sh

EXPOSE 4000

CMD ["./scripts/run-dev.sh"]