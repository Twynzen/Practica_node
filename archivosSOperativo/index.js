//Utilizar el protocolo http recibe peticiones y da respuestas
const http = require('http');
//request = req = la petición al servidor
//respont = res = la respuesta del servidor
http.createServer(function(req, res){0
  res.write('<h1>Hola pues desde el nodejs</h1>');
  //importante terminar la respuesta
  res.end();
  //metodo listen se coloca el puerto que va a escuchar el servidor
}).listen(3000);
