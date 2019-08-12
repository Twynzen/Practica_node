const fs = require('fs');

//hacer que el SISTEMA OPERATIVO pueda crear un archivo de texto la funcion es un colbag
//Al ser tarea del SISTEMA OPERATIVO se queda ejecutando mientras node.js hace otras cosas
fs.writeFile('./texto.txt', 'Linea uno', function(err){
  if (err) {
    console.log(err);
  }
  console.log('Archivo creado');
});
console.log('Ultima linea de3 codigo');
