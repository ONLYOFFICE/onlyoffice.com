#!/bin/bash
source /etc/ci_env.sh

### Settings

# Timestamp
CURRENT_DATE=$(date "+%Y%m%d-%H%M%S")

# Define variables
DOCKER_CONTAINER_TAG="node:18.20.8-bookworm"
EXPOSE_PORT="30015"
APP_NAME="onlyoffice.com"
APP_DIR="/app/$APP_NAME"
BUILD_DIR="/app/${APP_NAME}_BUILD"
SOURCE_ARCHIVE_PATH="/home/ubuntu/deploy/.jenkins/$APP_NAME.tar.gz"
BACKUP_DIR="/app/backups"
BACKUP_NAME="$APP_NAME-$CURRENT_DATE.tar.gz"
BUILD_LOG="/home/ubuntu/deploy/site_deploy.log"
NOTIFICATION_APP_NAME="var_notification_app_name"

### TELEGRAM NOTIFICATION FUNCTION

# Function to send Telegram notification
send_telegram_notification() {
    local status="$1"
    
    # Check if Telegram environment variables are set
    if [[ -z "$TELEGRAM_BOT_TOKEN" || -z "$TELEGRAM_CHAT_ID" ]]; then
        echo "Telegram notification skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set"
        return 0
    fi
    
    # Prepare the message
    local full_message=""
    if [[ $status == "FAILED" ]]; then
        full_message="❌ $NOTIFICATION_APP_NAME build failed."
    fi
    if [[ $status == "SUCCESS" ]]; then
        full_message="✅ $NOTIFICATION_APP_NAME build and deploy completed successfully."
    fi

    # Send log file with message as caption if it exists, otherwise send text message
    if [[ -f "$BUILD_LOG" ]]; then
        curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendDocument" \
            -F "chat_id=$TELEGRAM_CHAT_ID" \
            -F "document=@$BUILD_LOG" \
            -F "caption=$full_message" \
            -F "parse_mode=HTML" > /dev/null
    else
        # Fallback to text message if no log file exists
        curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
            -d "chat_id=$TELEGRAM_CHAT_ID" \
            -d "text=$full_message" \
            -d "parse_mode=HTML" > /dev/null
    fi
    
    echo "Telegram notification sent: $status"
}

### BUILD STAGE

# Create folder with sources and extract sources to it
mkdir -p "$BUILD_DIR"
tar -xzf "$SOURCE_ARCHIVE_PATH" -C "$BUILD_DIR"
find "$BUILD_DIR" -type d -exec chmod 755 {} \;
find "$BUILD_DIR" -type f -exec chmod 644 {} \;
cd "$BUILD_DIR"

# Build application with error handling
echo "Starting application build..."
docker run --rm -e NODE_OPTIONS="--max-old-space-size=4096" -v "$BUILD_DIR":"$APP_DIR" -w "$APP_DIR" "$DOCKER_CONTAINER_TAG" sh -c "npm i && npm run build"
if [ $? -ne 0 ]; then
    echo "Error: Application build failed. Cleaning up build directory and exiting."
    send_telegram_notification "FAILED"
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
        docker run -d --name "$APP_NAME" --publish "0.0.0.0:$EXPOSE_PORT:3000" -v "$APP_DIR:$APP_DIR" -w "$APP_DIR" --restart always "$DOCKER_CONTAINER_TAG" npm run start
    fi
else
    # Build and run a new container if it doesn't exist
    docker run -d --name "$APP_NAME" --publish "0.0.0.0:$EXPOSE_PORT:3000" -v "$APP_DIR:$APP_DIR" -w "$APP_DIR" --restart always "$DOCKER_CONTAINER_TAG" npm run start
fi

# Send success notification
send_telegram_notification "SUCCESS"

echo "Build and deployment process completed successfully."
