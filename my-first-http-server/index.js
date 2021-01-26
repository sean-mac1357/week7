const HTTP = require('http');

const HOSTNAME = '127.0.0.1'; // points directly to local machine
const PORT = 3333;

const SERVER = HTTP.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World!")
});

SERVER.listen(PORT, HOSTNAME, function() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
});