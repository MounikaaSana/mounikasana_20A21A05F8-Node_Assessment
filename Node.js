var mymodule = require('./Node.js');
var directory = process.argv[2]  
var ext = process.argv[3];
mymodule(directory, ext, (err, files)=> {
    if (err) {
        return console.error(err);
    }
    
    files.forEach((file)=> {
        console.log(file);
    });
});