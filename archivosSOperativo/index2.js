const fs = require('fs');

//leer un archivo
fs.readFile('./texto.txt',function (err, data) {
  if (err) {
    console.log(err);
  }
  //envia un buffer datos en crudo, se deben convertir los datos a string
console.log(data.toString());
});
