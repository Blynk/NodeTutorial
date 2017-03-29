var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loudStream = tr.select('.loud').createStream();
loudStream.pipe(through(function (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
})).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);
