
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10.
  console.log(a); // 8.
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8.
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9.
}
c(8,9,10);
console.log(b); // 10.
console.log(x); // 1.
```

```javascript
console.log(bar); // undefined.
console.log(baz); // baz is not defined.
foo();
function foo() { console.log('Hola!'); } // Hola!"
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco.
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony.
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco.
   }
})();
console.log(instructor); // Tony.
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash.
    console.log(pm); // Reverse Flash.
}
console.log(instructor); // The flash.
console.log(pm); // Franco.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2.
"2" * "3" // 6.
4 + 5 + "px" // "9px".
"$" + 4 + 5 // "$45".
"4" - 2 // 2.
"4px" - 2 // NaN.
7 / 0 // Infinity.
{}[0] // undefined.
parseInt("09") // 9.
5 && 2 // 2.
2 && 5 // 5.
5 || 0 // 5.
0 || 5 // 5.
[3]+[3]-[10] // 23.
3>2>1 // false.
[] == ![] // true.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

> Cuando intentamos loguear JS entiende el espacio definido en memoria bajo el nombre a pero no puede leer qué tiene dentro porque aún no le fue asignado un valor. En cambio cuando invoca la función test continúa leyendo la función foo hasta encontrar el retorno y devolverlo.

```javascript
function test() {
   console.log(a); // undefined.
   console.log(foo()); // 2.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

> No hay una variable snack definida dentro de la función getFood que se pueda retornar.

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack; 
    }
    return snack; 
}

getFood(false); // undefined.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

> El primer console log es debido a que nuestro getter buscará primero el fullname en su entorno de ejecución.

> El segundo console log nos dará un error porque la función test está mal definida, estamos intentado invocarla fuera de un entorno donde exista algo llamado fullname, entonces busca en el objeto goblal donde claramente no hay una función definida bajo ese nombre.

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa.

var test = obj.prop.getFullname;

console.log(test()); // undefined.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

> Primero lee la primera líned donde se encuentra el console log y lo ejectuta, luego va a la segunda línea, ve el setTimeout y lo pone en la cola de ejecución, luego pasa lo mismo con la línea 3, luego en la línea 4 lee el console log y lo ejectuta, después espera los 0 segundos indicados en la línea 3 y ejecuta el console log, y luego de 3 segundos se repite el proceso con la línea 2. 

```javascript
function printing() {
   console.log(1); // 1.
   setTimeout(function() { console.log(2); }, 1000); // 4.
   setTimeout(function() { console.log(3); }, 0); // 3.
   console.log(4); // 2.
}

printing();
```
