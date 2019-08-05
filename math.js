function add(x1, x2) {
  return x1+x2;
}
function substract(x1, x2) {
  return x1-x2;
}
function multiply(x1, x2) {
  return x1*x2;
}
function divide(x1, x2) {
  if (x2 == 0) {
    console.log('No se puede dividir por 0');
  }else {
      return x1/ x2;
    }
  }

//exporto el la funcion cuando se pida con un punto
exports.multiply = multiply;


/*
console.log("Suma: "+add(3, 2));
console.log("Multiplicacion: "+substract(3, 2));
console.log("Resta: "+multiply(3, 2));
console.log("Division: "+divide(3, 0));
*/
