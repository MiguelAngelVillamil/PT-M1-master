'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Si el array pasado por parámetro tiene 0 elementos retornamos el array vacío.
  // Si el array tiene un elemento nos quedamos con ese elemento como corte de la llamada recursiva.
  if(array.length < 2){
    return array;
  }

  // Nominamos al elemento que va a cortar el array en dos partes más pequeñas.
  let middle = array[0];

  // Le brindamos un lugar a los dos sub arrays que vamos a crear.
  let left = [];
  let right = [];


  // Empezamos a iterar desde el elemento que no conocemos (índice 1) hasta el final.
  for (let i = 1 ; i < array.length ; i++) {
      
    // Guardamos los valores según su tamaño a la izquiera o a la derecha.
    if (array[i] < middle) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Ejecutamos el ordenamiento en cada uno de los arrays, y así sucesivamente...
  // Almacenamos el dato para luego retornar las listas ya ordenadas.
  // Recordemos que esto itera hasta que ya no tenemos elementos en el array y por lo tanto no podemos seguir partiendo la lista por la mitad.
  let leftInOrder = quickSort(left);
  let rightInOrder = quickSort(right);

  // Retornamos el array resultante de concatenar la lista ordenada, ordenándola a su vez.
  // Este array retorna en su mínima expresión el elemento middle agregándole cuando se resuelve cada iteración los middles menores a su izquierda y sus middles mayores a su derecha.
  return [...leftInOrder, middle, ...rightInOrder];


}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Si el array pasado por parámetro tiene 0 elementos retornamos el array vacío.
  // Si el array tiene un elemento nos quedamos con ese elemento como corte.
  if(array.length < 2){
    return array; 
  }

  // Buscamos el índice de nuestro elemento central. Siempre tiene que ser un número entero.
  let middle = parseInt(array.length / 2);

  // Con nuestro elemento central ya podemos dividir nuestro array en dos partes iguales.
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  // Para que el código no sea desastrozo vamos a crear una función aparte que ordene los array y pedirle todos los left y todos los right que tenemos.
  let merge = (left, right) => {

    // Creamos un array donde podamos añadir los valores ordenados según su tamaño.
    let result = [];

    // En la primera iteración esta condición no se va a cumplir, ya que el corte es con un sólo elemento, sin embargo luego va a empezar a unir los elementos de la siguiente forma:
    while (left.length && right.length) {

      // Si el elemento de la izquierda es menor al de la derecha.
      if(left[0] < right[0]){

        // Le agragamos a result el primer elemento del lado izquierdo, y lo sacamos del lado izquierdo.
        result.push(left[0]);
        left.shift();

      // Si el elemento de la derecha es menor al de la izquierda.
      } else {

        // Le agragamos a result el primer elemento del lado derecho, y lo sacamos del lado derecho.
        result.push(right[0]);
        right.shift();

      }
    }

    // Retornamos la concatenación del resultado, luego lo que nos queda del lado izquierdo y luego lo que nos queda del lado derecho.
    // Hay que recordar que es fácil visualizar la primera iteración del while, pero cuando se vaya resolviendo cada ciclo tendremos más de un elemento en left y en right y no tenemos que dejarlos olvidados.
    return [...result, ...left, ... right];
  } 

  // El último paso debe ser unir todos los elementos del lado izquierdo ya ordenados y todos los elementos del lado derecho  ya ordenados.
  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
