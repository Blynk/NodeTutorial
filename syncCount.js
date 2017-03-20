var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2]);
var fileAsString = fileBuffer.toString();
var stringArray = fileAsString.split('\n');

// Need to count newlines, not text lines!
console.log(stringArray.length - 1);
