## Docker Nginx Client IP Test

This is a small project to debug getting client user IP addresses through an nginx proxy within docker.

## Requirements

1. Docker
2. `mkcert`

## Setup

1. Clone this repository
2. Run `mkcert -key-file dev-certs/ssl.key -cert-file dev-certs/ssl.crt localhost` to generate an SSL certificate
3. Run `docker-compose up` to start the docker compose setup
4. Visit https://localhost:5000/api` and see what IP address is listed in the JSON response
5. Compare to headers when visiting `https://localhost:5001/api` which is the raw node server

## Error?

So far the IP address returned (and the associated headers set by nginx) say that the client IP is always the IP address of the running docker container rather than the actual incoming client.
