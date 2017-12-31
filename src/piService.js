const http = require('http');
const pi = require('./pi.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let n = req.url.substring(1);
    if(parseInt(n, 10) >= 0) {
        res.end('PI digit of '+n+'='+pi.calcN(n)+'\n');
    } else {
        res.end(`usage: http://host:port/{n} `+n+' is not a number')
    }
});

server.listen(port, () => {
    let baseUrl = `http://localhost:${port}/`;
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`usage: ${baseUrl}{n}`);
    console.log(`example: ${baseUrl}0`);
});
