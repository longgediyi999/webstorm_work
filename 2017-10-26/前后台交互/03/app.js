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
  } else if (req.url.startsWith("/login") && req.method == "Get") {
    let urlObj = url.parse(req.url, true);
    let formobj = urlObj.query;

    res.writeHead(200, {
      "content-type": "text/html;charset=utf-8"
    });

    if (formobj.username == "1" && formobj.password == "1") {
      res.end(
        JSON.stringify({
          code: "001",
          msg: "登陆成功"
        })
      );
    } else {
      res.end(
        JSON.stringify({
          code: "002",
          msg: "用户名或者密码不对狗屎1"
        })
      );
    }
  } else {
    res.end(JSON.stringify({
        code: "002",
        msg: "用户名或者密码不对狗屎2"
      }));
  }
});

server.listen(9999,()=>{
    console.log('1');
})