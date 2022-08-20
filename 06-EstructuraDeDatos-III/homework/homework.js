"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null; 
    this.right = null;
    this._size = 1;
  }

  size(){
    return this._size;
  }

  insert(newValue){
    // Incremento de tamaño.
    this._size++;

    // Inserción a la izquierda.
    if(newValue <= this.value){
      // Si no hay nada el left.
      if(!this.left){
        // Ponemos el nuevo nodo ahí.
        this.left = new BinarySearchTree(newValue);
        // Si hay algo seguimos bajando.
      } else {
        this.left.insert(newValue);
      }

    // Inserción a la derecha.
    } else {
      // Si no hay nada el right.
      if(!this.right){
        // Ponemos el nuevo nodo ahí.
        this.right = new BinarySearchTree(newValue);
        // Si hay algo seguimos bajando.
      } else {
        this.right.insert(newValue);
      }
    }
  }
  
  contains(anyValue){
    
    // Comprobamos el valor de la raíz.
    if(anyValue === this.value){
      return true;
    }
    
    //Si el valor que buscamos es menor al valor raíz.
    if(anyValue < this.value){
      
      // Si hay algo en el left seguimos buscando en el left la igualdad, si se cumple retornamos true.
      if(this.left?.contains(anyValue)){
        return true;
      };
      
    //Si el valor que buscamos es mayor al valor de la raíz.
    } else {
      
      // Si hay algo en el right seguimos buscando en el left la igualdad, si se cumple retornamos true.
      if(this.right?.contains(anyValue)){
        return true;
      };
      
    }
    return false;
  }
  

  depthFirstForEach(saver, route){

    switch (route) {
      case "post-order":

        // Si hay algo a la izquierda, seguimos bajando hasta el final.
        this.left?.depthFirstForEach(saver, route);

        // Cuando no haya elemento a la izquierda vamos al derecho.
        this.right?.depthFirstForEach(saver, route);

        // Ejecutamos el callback al elemento actual.
        saver(this.value);

        break;


      case "pre-order":
    
        // Ejecutamos el callback al elemento actual.
        saver(this.value);

        // Si hay algo a la izquierda, bajamos y vamos guardando.
        this.left?.depthFirstForEach(saver, route);

        // Cuando no haya elemento a la izquierda vamos al derecho.
        this.right?.depthFirstForEach(saver, route);

        break;
  
      default:

        // Si hay algo a la izquierda, seguimos bajando hasta el final.
        this.left?.depthFirstForEach(saver, route);

        // Cuando ya no hay nada más abajo a la izquierda ejecutamos el callBack en ese elemento.
        saver(this.value);

        // Nos queda ejecutar todos los que están a la derecha y guardarlos recursivamente.
        this.right?.depthFirstForEach(saver, route);

      break;
    }
  }
  
  breadthFirstForEach(saver, result = []){

    // Le decimos a nuestro saver que guarde el root.
    saver(this.value);

    // Si a la izquierda del root hay algo, lo guardamos en nuestro array.
    if(this.left){
      result.push(this.left);
    }

    // Si a la derecha del root hay algo, lo guardamos en nuestro array.
    if(this.right){
      result.push(this.right);
    }

    // En caso de que nuestro array no esté vacío:
    if(result.length){
      //Le sacamos a nuestro array el elemento izquiero y lo guardamos en nuestro saver cuando recursemos.
      result.shift().breadthFirstForEach(saver, result);
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};