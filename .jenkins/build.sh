#!/bin/bash

### Settings

# Timestamp
CURRENT_DATE=$(date "+%Y%m%d-%H%M%S")

# Define variables
DOCKER_CONTAINER_TAG="node:18-alpine"
EXPOSE_PORT="30007"
APP_NAME="onlyoffice.com"
APP_DIR="/app/$APP_NAME"
BUILD_DIR="/app/${APP_NAME}_BUILD"
SOURCE_ARCHIVE_PATH="/home/ubuntu/deploy/.jenkins/$APP_NAME.tar.gz"
BACKUP_DIR="/app/backups"
BACKUP_NAME="$APP_NAME-$CURRENT_DATE.tar.gz"

### BUILD STAGE

# Create folder with sources and extract sources to it
mkdir -p "$BUILD_DIR"
tar -xzf "$SOURCE_ARCHIVE_PATH" -C "$BUILD_DIR"
find "$BUILD_DIR" -type d -exec chmod 755 {} \;
find "$BUILD_DIR" -type f -exec chmod 644 {} \;
cd "$BUILD_DIR"

# Build application with error handling
echo "Starting application build..."
docker run --rm -v "$BUILD_DIR":"$APP_DIR" -w "$APP_DIR" "$DOCKER_CONTAINER_TAG" sh -c "npm i && npm run build"
if [ $? -ne 0 ]; then
    echo "Error: Application build failed. Cleaning up build directory and exiting."
    rm -rf "$BUILD_DIR"
    exit 1
fi
echo "Application build completed successfully."

### DEPLOY STAGE

# Archive the folder with date-time stamp
tar -czf "$BACKUP_DIR/$BACKUP_NAME" -C "$APP_DIR" .

# Cleanup other www-cms-marketplace backups to leave only 7 latest
cd "$BACKUP_DIR"
ls -1t $APP_NAME-*.tar.gz | tail -n +8 | xargs -I {} rm -- {}

# Stop application container if it exists
if docker ps -a | grep -wq "$APP_NAME"; then
    docker stop "$APP_NAME"
fi

# Remove the original /app/www-cms-marketplace folder
rm -rf "$APP_DIR"

# Copy built app to app dir
mv $BUILD_DIR $APP_DIR

# Start container if it exists or build and start it
if docker ps -a | grep -wq "$APP_NAME"; then
    # Get the image tag of the existing container
    CONTAINER_IMAGE_TAG=$(docker inspect "$APP_NAME" -f '{{.Config.Image}}')
    
    # Check if the container image tag matches $DOCKER_CONTAINER_TAG
    if [ "$CONTAINER_IMAGE_TAG" == "$DOCKER_CONTAINER_TAG" ]; then
        docker start "$APP_NAME"
    else
        # Build and run a new container if the image tag does not match
        docker rm "$APP_NAME"
        docker run -d --name "$APP_NAME" --publish "0.0.0.0:$EXPOSE_PORT:$EXPOSE_PORT" -v "$APP_DIR:$APP_DIR" -w "$APP_DIR" --restart always "$DOCKER_CONTAINER_TAG" npm run start
    fi
else
    # Build and run a new container if it doesn't exist
    docker run -d --name "$APP_NAME" --publish "0.0.0.0:$EXPOSE_PORT:$EXPOSE_PORT" -v "$APP_DIR:$APP_DIR" -w "$APP_DIR" --restart always "$DOCKER_CONTAINER_TAG" npm run start
fi
