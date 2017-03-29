var http = require('http');
var through = require('through2');

function toUpper(buf, encoding, next) {
	this.push(buf.toString().toUpperCase());
	next();
}

var server = http.createServer(function (req, res) {
	if(req.method == 'POST')
		req.pipe(through(toUpper)).pipe(res);
	else
		res.end("Send a POST request\n");
});

server.listen(process.argv[2]);
