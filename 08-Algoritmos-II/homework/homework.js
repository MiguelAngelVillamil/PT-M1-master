'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length < 2){
    return array; 
  }

  let middle = parseInt(array.length / 2);

  let left = array.slice(0, middle);

  let right = array.slice(middle);

  mergeSort(left);
  mergeSort(right);

  let merge = (left, right) => {

    let result = [];

    while (left.length && right.length) {

      if(left[0] < right[0]){

        result.push(left[0]);
        left.shift();

      } else {

        result.push(right[0]);
        right.shift();

      }
    }

    return result.concat(left, right);
  } 

  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
