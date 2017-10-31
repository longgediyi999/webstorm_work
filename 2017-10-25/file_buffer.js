'use strict'

const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve('./1.js'), (err,data)=>{
    if(err) throw err
    for(let i = data.length-1; i >=0 ; i--) {
        data[i] = data[i] ^5201314
        console.log(1);
        
    }

   // fs.writeFile(path.resolve('./加密'), data, options, callback)
    

})