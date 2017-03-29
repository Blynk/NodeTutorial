var split = require('split');
var thr = require('through2')
var lineCount = 1;

process.stdin
	.pipe(split())
	.pipe(thr(function (line, _, next) {
		if(lineCount++ % 2 == 0)
			this.push(line.toString().toUpperCase() + '\n');
		else
			this.push(line.toString().toLowerCase() + '\n');
		next();
	}))
	.pipe(process.stdout)
;
