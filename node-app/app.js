
const http = require('http');

http.createServer((req, res) => {
  res.end(" Node App");
}).listen(3000);

