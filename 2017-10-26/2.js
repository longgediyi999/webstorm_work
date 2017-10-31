'use strict'

const http = require('http')
let server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    
}
)

server.listen(8889, '127.0.0.1', () => {
    console.log('启动8889');
})