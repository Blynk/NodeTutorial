var http = require('http')

http.get(process.argv[2], function(response) {
	var body = ""
	response.setEncoding('utf8')
	response.on('data', function(data) {
		body += data
	})
	response.on('end', function() {
		console.log(body.length)
		console.log(body)
	})
	response.on('error', console.error)
}).on('error', console.error)
