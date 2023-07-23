# Use an official Go runtime as the base image
FROM golang:latest

# Set the working directory in the container
WORKDIR /app

# Copy the source code to the container
COPY . .

# Build the Go application
RUN go build -o backend cmd/main.go

# Expose port 9000 for incoming traffic
EXPOSE 9000

# Command to run the application
CMD ["./backend"]