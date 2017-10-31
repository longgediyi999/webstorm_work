"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const url = require("url");
let server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(path.resolve("./index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
      });
      res.end(data);
    });
  } else if (req.url.startsWith("/login.php")) {
    let urlObj = url.parse(req.url, true);
    let formobj = urlObj.query;

    res.writeHead(200, {
         'content-type': 'text/html;charset=UTF-8'
    });

    if (formobj.isagree != "on") {
      res.end("1234");
    } else {
      if (formobj.username == "abc" && formobj.pwd == "123") {
        res.end("登陆成功");
      } else {
        res.end("登陆失败");
      }
    }
  }
});

server.listen(8888, () => {
  console.log("服务器启动了");
});
