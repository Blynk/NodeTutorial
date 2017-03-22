var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, resp) {
	var readStream = fs.createReadStream(process.argv[3])
	readStream.pipe(resp)
})

server.listen(Number(process.argv[2]))
