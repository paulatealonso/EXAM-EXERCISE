

/*Escribe una función que acepte un número y un substractor (otro número). Mientras que el número sea mayor que 0, debes restarle el substractor. Debes devolver el número tal y como ha quedado despues de las restas. No puedes usar un bucle for:

substract(10, 3) // -2
substract(5, 1) // 0
*/

function substract(num, num2) {
  let counter = 0
  while (num > 0) {
  num -= num2
  counter++  
  console.log(counter);
  }
  console.log(num);
}

substract(10, 3);


