const http = require ('http');

const handleServer = function (req, res){
  res.writeHead(200, {'Content-type':'text/plain'});
  res.write('Este es un servidor más organizado');
  res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
  console.log('Server on port 3000');
});
// aprendere NPM para la proxima
