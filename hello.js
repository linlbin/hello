var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type': 'text/plain;charset=UTF-8'});
	
	res.end('Hello ZWY, Fuck you草有');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');