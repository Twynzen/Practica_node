const fs = require('fs');

//hacer que el SISTEMA OPERATIVO pueda crear un archivo de texto la funcion es un colbag
//Al ser tarea del SISTEMA OPERATIVO se queda ejecutando mientras node.js hace otras cosas
//Crear un archivo
fs.writeFile('./texto.txt', 'Codigo no asincrono', function(err){
  if (err) {
    console.log(err);
  }
  console.log('Archivo creado');
});
console.log('Ultima linea de3 codigo');
