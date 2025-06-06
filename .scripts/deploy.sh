#!/bin/bash
set -e

# Print timestamp and start message
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployment started..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Error: PM2 is not installed. Please install it first using 'npm install -g pm2'"
    exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Installing Dependencies..."
if ! npm install --yes; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Creating Production Build..."
if ! npm run build; then
    echo "Error: Failed to create production build"
    exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Reloading PM2..."
if ! pm2 reload ecosystem.config.cjs; then
    echo "Error: Failed to reload PM2"
    exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployment completed successfully!"
exit 0