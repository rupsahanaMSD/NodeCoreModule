const fs = require('fs');

fs.writeFileSync('myFile.txt', 'Hello programmers');
fs.appendFileSync('myFile.txt', '  How are you?');