'use strict'

const path = require('path')
let p1 = 'C:/唐僧';
let p2 = '//白龙马';
let p3 = '猪八戒/';
let p4 = '///孙悟空.txt';

const str = path.join(p1,p2,p3,p4)
console.log(str);

let pathObj = path.parse(str)
console.log(pathObj);

pathObj.base = '沙悟净.js'
console.log(pathObj);

let absPath = path.resolve('./abc/def/e.txt')
console.log(absPath);

let newStr = path.format(pathObj)
console.log(newStr);

