#!/bin/bash

# Function to create topics
create_topics() {
  kafka-topics.sh --create --topic order-placed --bootstrap-server kafka:9092 --partitions 1 --replication-factor 1
}

# Wait for Kafka to start and be ready
echo "Waiting for Kafka to start..."
until kafka-topics.sh --list --bootstrap-server kafka:9092 >/dev/null 2>&1; do
  echo "Kafka is not ready yet, retrying..."
  sleep 5
done

# Retry creating topics if Kafka is not available yet
until create_topics; do
  echo "Failed to create Kafka topics, retrying..."
  sleep 5
done

echo "Kafka topics created successfully"
