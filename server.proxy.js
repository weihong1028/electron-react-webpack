const fs = require('fs');
const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: 'https://rap.dev.iquantex.com',
  secure: false,
  changeOrigin: true
}).listen(8001);
