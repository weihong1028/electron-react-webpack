const fs = require('fs');
const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8001); // See (†)
//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied! Reply from Proxy server!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
