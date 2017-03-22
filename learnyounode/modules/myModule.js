var fs = require('fs')
var path = require('path');

function filterLS(dirname, ext, callback) {
	var dotExt = '.' + ext
	fs.readdir(dirname, function (err, list) {
		var fileList = []
		if(err)
			return callback(err)
		//filter can be used instead to edit array in place
		list.forEach(function (file) {
			if(path.extname(file) == dotExt)
				fileList.push(file)	
		})
		callback(null, fileList)
	})
}

module.exports = filterLS;
