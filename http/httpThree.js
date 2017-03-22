/* I had some trouble with this one, so I got help here:
 * https://github.com/nodeschool/discussions/issues/69
 */
var http = require('http')

var complete = 0
var pages = []
var urls = process.argv.slice(2)

/* It was mentioned that using map would be more efficient that using a for loop,
 * so I decided to try it out. You also get an index for free here!
 */
urls.map(function(url, index) {
	http.get(url, function(resp) {
		resp.setEncoding('utf8')
		var body = ""
		resp.on('data', function(chunk) {
			body += chunk
		})
		resp.on('end', function() {
		/* Using the map index, you can queue the results for each response,
		 * then output the results in order of the requests.
		 * This doesn't work when using a loop iterator directly, as the iterator
		 * may increment before the 'end' event is emitted. You can use a loop
		 * as part of a solution but need to pass the iterator value into a function
		 * to preserve that value before the next get request is called.
		 */
			pages[index] = body
			complete++
			if(complete == 3)
				pages.map(function(page) {console.log(page)})
		})
		resp.on('error', console.error)
	}).on('error', console.error)
})
