'use strict'
const http = require('http')

let server = http.createServer((req,res) =>{
    res.end('ok')
})

server.listen(8888, '127.0.0.1', () => {
    console.log('服务器启动 8888 port');
})