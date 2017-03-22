var http = require('http')
var url = require('url')


function isoTime(dateString) {
	var date = new Date(dateString)
	var dateObj = {}
	dateObj["hour"] = date.getHours()
	dateObj["minute"] = date.getMinutes()
	dateObj["second"] = date.getSeconds()
	return JSON.stringify(dateObj)
}

function unixTime(dateString) {
	var date = new Date(dateString).getTime()
	var dateObj = {}
	dateObj["unixtime"] = date
	return JSON.stringify(dateObj)
}

var server = http.createServer(function (req, res) {
	if(req.method !== 'GET') res.end('send GET request\n')
	res.writeHead(200, { 'Content-Type' :  'application/json' })
	var requestPath = url.parse(req.url, true)
	var dateTime = requestPath['query']['iso']
	if(requestPath["pathname"] == '/api/parsetime')
		res.end(isoTime(dateTime))
	else
		res.end(unixTime(dateTime))
})

server.listen(Number(process.argv[2]))
