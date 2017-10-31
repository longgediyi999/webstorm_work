'use strict'
const path = require('path')
const fs = require('fs')
//核心对象引入完毕

let myPath = path.join(__dirname,'./readme.txt')

let fileData = fs.readFileSync(myPath,'utf8')
console.log(fileData);


