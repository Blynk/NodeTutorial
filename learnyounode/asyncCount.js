var fs = require('fs')

function finishedReading(err, data) {
	if(err) return console.error(err)
	console.log(data.split('\n').length-1)
}

fs.readFile(process.argv[2], 'utf-8', finishedReading)
	
