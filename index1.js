/*
const http = require ('http');
const colors = require('colors');

const handleServer = function (req, res){
  res.writeHead(200, {'Content-type':'text/plain'});
  res.write('Este es un servidor más organizado');
  res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
  console.log('Server on port 3000'.red);
});
*/
// aprendere NPM para la proxima
//Instale el modulo colors con npm install, y se creo el node_modules que se encarga de administrar eso
//el pacakage.json se crea para indicar de donde saco el modulo instalado
//con el npm install instala las dependencias automaticamente al leer el package.json

//lo mismo pero con express
const express = require('express');
const server = express();
const color = require('colors');

server.get('/', function(req, res){
  res.send('<h1>Hola pues con express y node</h1>');
  res.end(); 
})

server.listen(3000, function(){
  console.log('Server on port 3000'.red);
});
