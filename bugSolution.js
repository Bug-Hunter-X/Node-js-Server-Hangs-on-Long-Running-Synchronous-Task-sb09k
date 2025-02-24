const http = require('http');

const server = http.createServer((req, res) => {
  // Use asynchronous operations
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 0); // Simulate an async task
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});