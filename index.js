const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Ok from my dummy server')
})

server.listen(3000, () => console.log('server is running'));