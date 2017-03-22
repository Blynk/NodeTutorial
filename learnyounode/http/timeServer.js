var net = require('net')

function zeroFill(value) {
	return (value < 10 ? '0' : '') + value
}

function dateString() {
	var date = new Date()
	return date.getFullYear() + "-" +
		zeroFill(date.getMonth() + 1) + "-" +
		zeroFill(date.getDate()) + " " +
		zeroFill(date.getHours()) + ":" +
		zeroFill(date.getMinutes()) + "\n"
}

var server = net.createServer(function (socket) {
	socket.end(dateString())
})
server.listen(process.argv[2])
