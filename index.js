const dns = require('dns');
console.log('name servers: ' + JSON.stringify(dns.getServers()));
dns.lookup('consul', (res) => {
  console.log('looking up consul:' + JSON.stringify(res))
});
dns.lookup('consul.service.consul', (res) => {
  console.log('looking up consul.service.consul: ' + JSON.stringify(res))
});
dns.resolve('consul', (res) => {
  console.log('resolving consul:' + JSON.stringify(res))
});
dns.resolve('consul.service.consul', (res) => {
  console.log('resolving consul.service.consul: ' + JSON.stringify(res))
});

dns.lookup('google.com', (res) => {
  console.log('looking up google.com:' + JSON.stringify(res))
});
dns.lookup('docs.google.com', (res) => {
  console.log('looking up docs.google.com: ' + JSON.stringify(res))
});
dns.resolve('google.com', (res) => {
  console.log('resolving google.com:' + JSON.stringify(res))
});
dns.resolve('docs.google.com', (res) => {
  console.log('resolving docs.google.com: ' + JSON.stringify(res))
});

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("test output");
}).listen(3002);
