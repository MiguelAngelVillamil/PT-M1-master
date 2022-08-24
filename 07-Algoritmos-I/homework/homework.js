//'use strict'
// No cambies los nombres de las funciones.

function factorear(num, contador = 2, resultado = [1]) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // Declaramos las variables que en cada scope van a modificarse.
  let c = contador; 
  let result = resultado; 
  let number = num;

  // La condición de corte.
  if (number === 1) {
    return result;
  }

  // Mientras que el resto del numero actual dividido por nuestro contador de 0 (number sea primo de c).
  while(number % c === 0){

    // Decrementamos nuestro número porque encontramos su primo
    number /= c;

    // Guardamos el numero primo en nuestro array.
    result.push(c); 
  }

  // Lo hayamos encontrado o no tenemos que seguir factoreando, así que buscamos el siguiente primo.
  c++;

  factorear(number, c, result);

  // Cuando todos los eventos se resuelvan nuestro array estará completo.
  return result;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0 ; i < array.length ; i++) {
    
    for (let j = 0 ; j < array.length - i ; j++) {
      
      let saver = array[j];

      if(array[j] > array[j + 1]){

        array[j] = array[j + 1];
        array[j + 1] = saver;

      }
    }
  }

  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0 ; i < array.length ; i++) {
    
    for(let j = i + 1 ; j < array.length ; j++){

      let saver = array[i];

      if(array[j] < array[i]){

        array[i] = array[j];
        array[j] = saver;
      }
    }
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
      
    // Primero iteramos sobre el array y buscamos el elemento mínimo.
    for(let i = 0; i < array.length; i++) {
        
      // Por defecto el elemento mínimo tiene que ser el primero, para poder comparar con el resto del array.
      let minElement = i;

      // Buscamos si en el resto del array hay un elemento menor al que tenemos.
      for(let j = i+1; j < array.length; j++){

        // Si encontramos un elemento menor nos quedamos con ese elemento.
        if(array[j] < array[minElement]) {
          minElement = j; 
        }
      }

      // Cambiamos de lugar los elementos de manera correspondiente.
      let saver = array[i]; 
      array[i] = array[minElement];
      array[minElement] = saver;      
        
    }

  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
