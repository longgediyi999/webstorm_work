'use strict'
const path = require('path')
const fs = require('fs')

fs.readFile(path.resolve('./readme.txt'),(err,data)=>{
    if(err) throw err
    console.log(data);

})