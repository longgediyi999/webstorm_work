"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(path.resolve("./index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "content-type": "text/html;charset=uft-8"
      });
      res.end(data);
    });
  } else if (req.url.startsWith("/login")) {
    req.on("data", data => {
      let dataStr = data.toString();

      let formObj = querystring.parse(dataStr);
      let username = formObj.username;
      let pwd = formObj.pwd;
      let isagree = formObj.isagree;

      res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
      });

      if (isagree != "on") {
        res.end("必须确认傻吊");
      }

      if (username == "1" && pwd == "1") {
        res.end("成功");
      } else {
        res.end("失败");
      }
    });
  }
});

server.listen(8889, () => {
  console.log("1");
});
