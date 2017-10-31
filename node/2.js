'use strict'
const fs = require('fs')
const path = require('path')

let readFilePath = path.resolve('./readme.txt')

let writeFilePath = path.resolve('./readme.txt')
//option中有一个 flag:a  append  追加写入
fs.writeFile(writeFilePath, 'asdfasdfhah1112哈哈', { flag:'a'  }, err => {
    console.log('数据写完了');
})