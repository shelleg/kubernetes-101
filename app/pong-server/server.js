var http = require('http');
const express = require('express')
const app = express()
const PING_PORT = process.env.PING_PORT || 8081;
const PONG_HOST = process.env.PONG_HOST || 'app.example.com';
const PONG_PORT = process.env.PONG_PORT || 8080;

// API Endpoints
app.get('/', function (req, res) {
  res.send('Hello World!\n')
})

app.get('/isAlive', function (req, res) {
  res.send('It\'s aaaalive!\n')
})

// Metrics endpoint
app.get('/ping', (req, res) => {
  var options = {
    host: PONG_HOST,
    method: 'GET',
    path: '/pong',
    port: PONG_PORT
  }

  console.log(req.headers);

  var request = http.request(options, (response) => {
    res.send('pong\n');
  });

  request.end();
});

process.on('SIGINT', function() {
    console.log("Caught interrupt signal\n");
    process.exit();
});

// Start app
app.listen(PING_PORT, function () {
  console.log(`App listening on port ${PING_PORT}...`)
})
