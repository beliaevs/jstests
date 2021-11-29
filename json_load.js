// reading JSON files with 

const myconf = require('./conf');
const fs = require('fs');
fs.readFile('test.json', function(err, data){
    if(err) throw err;
    const test = JSON.parse(data);
    console.log('test.json:');
    console.log(test);
})
console.log('conf.json:');
console.log(myconf);
