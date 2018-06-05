# demo ping-ping app

### 1. run the ping server
* run the ping server locally just to make sure it works
```
cd ./server
node server.js
```

### 2. build the ping-server container

* `docker build -t shelleg/ping-server:latest`
* `docker push shelleg/ping-server:latest`

### 3. run the pong server
* run the pong server locally just to make sure it works
```
cd ./client
export PONG_HOST=127.0.0.1 node server.js
```
### 4. build the pong-server container
* `docker build -t shelleg/pong-server:latest`
* `docker push shelleg/pong-server:latest`
