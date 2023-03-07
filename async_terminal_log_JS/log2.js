const fs = require('fs');
const path = require('path');

// If you do not want to hardcode a file path, use the PATH extension
fs.readFile(path.join(__dirname,'starter.txt'), 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('Hello...');

fs.writeFile(path.join(__dirname,'reply.txt'), 'Hello World, this is Meta',(err) => {
    if (err) throw err;
    console.log('Write complete');

    fs.appendFile(path.join(__dirname,'reply.txt'), '\n\n\nYes it is.',(err) => {
        if (err) throw err;
        console.log('Append complete');
    });
});