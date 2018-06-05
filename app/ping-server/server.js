var http = require('http');

const PORT = 8080; // Non-standard HTTP port
//const PORT 80; // Standard HTTP port

function handleRequest(request, response) {
  console.log(request.headers);
  response.end('It Works!! Path Hit: ' + request.url + '\n');
}

var server = http.createServer(handleRequest);
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});
