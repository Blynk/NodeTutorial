var mymodule = require('./myModule.js')

mymodule(process.argv[2], process.argv[3], function (err, files) {
	if(err)
		return console.error(err)
	files.forEach(function(file) {
		console.log(file)
	})
})
