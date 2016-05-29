var args = process.argv.slice(2);
var http=require('http');
var myip=require('my-local-ip')()
var hostname=require('os').hostname();

// Port must be define .... :| will try do it better...
var port=args[0];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(myip+' - '+hostname+'\n');
  console.log("Request received from " + req.connection.remoteAddress);
}).listen(port);

console.log(myip+' - '+hostname)
console.log('Server running at http://localhost:'+port+'/');
