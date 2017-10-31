/* 'use strict';
let tmp = '/login.php?username=aaa&pwd=bbb&isagree=on';
const url = require('url');

// let obj = url.parse(tmp); //这么写query属性是一个字符串
let obj = url.parse(tmp,true); //在第二个参数加上true,代表对query进行对象的转换
// query: { uname: 'aaa', pwd: 'bbb', isagree: 'on' },
console.log(obj); */