'use strict'
const http = require('http')

let server = http.createServer((req, res) => {
   /*  res.write('hehe')
    res.write('hah')
    res.end() */
    res.writeHead(200, {
        'content-type':'text/html;charset=utf-8'
    })
    res.end()
})   

server.listen(8890, () => {
    console.log('启动');
})