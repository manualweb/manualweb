---
title: Variables Javascript
permalink: /javascript/variables-javascript/
---

## ¿Qué son las variables Javascript?

Las variables en Javascript son espacios en memoria en los que podemos almacenar uno o varios valores durante el ciclo de vida de nuestro código [JavaScript][JavaScript].

Para declarar una variable en [JavaScript][JavaScript] simplemente tendremos que poner su nombre, precedido del operador de declaración de variables `var` o `let`.

~~~javascript
var mivariable;
~~~

Hay que tener en cuenta que [JavaScript][JavaScript] es **sensible a mayúsculas** por lo que no serán diferentes variables `mivariable`, `MiVariable` o `miVariable`.


## Operadores declaración variables Javascript

Podemos utilizar dos operadores de declaración con las variables [JavaScript][JavaScript]. Estos son `var`, `let` y `const`. Dependiendo del que utilicemos el ámbito de validez de la variable será diferente.

* `var`, nos sirve para declarar una variable. Opcionalmente podemos inicializar la variable.
* `let`, nos sirve para declarar una variable local a nivel de bloque. Opcionalmente podemos inicializar la variable.
* `const`, nos sirve para declarar una constante, que será una variable con un valor de solo lectura. Su ámbito de valor será a nivel de bloque.


## Nombres de las variables Javascript
A la hora de definir una variable [JavaScript][JavaScript], lo único que hay que tener en cuenta es que esta **debe empezar por una letra o por el símbolo de subrayado ( _ )**. Lo que siga a esto es indiferente.

Por ejemplo podríamos definir como variables :

~~~javascript
Nombre
_Opción15
mes3
~~~

Mientras que estarían mal definidas las siguientes variables :  

~~~javascript
7opcion
&inicio
¿nombre
~~~

*Tampoco podremos usar como variables *palabras reservadas del lenguaje:* `new`, `null`, `if`,...

## Declarar una variable JavaScript

Así la estructura para poder declarar una variable [JavaScript][JavaScript] será la siguiente:

~~~javascript
operador_declaracion nommbre_variable = valor_inicial;
~~~

Así podríamos tener las siguiente variables y constantes:

~~~javascript
var nombre = "Víctor";
let numero = 4;
const constante = 12;
~~~

En el caso de que no asignemos un valor a la variable, esta contendrá el valor `undefined`.

> Al comprobar si una variable tiene el valor `undefined` estaríamos comprobando si esta variable se ha inicializado o no.

Si intentamos acceder a una variable sin definir obtendremos el error `ReferenceError`.

## Ámbito de las variables JavaScript

Cuando definimos una variable dentro de un bloque entendemos que su ámbito de validez es dentro de ese bloque. Y si está declarada fuera de cualquier bloque la variable es local. Si bien por las especificaciones previas a **ECMAScript 2015** cualquier variable declarada mediante un operador de declaración `var` es una **variable global que se vería en cualquier parte del bloque que la contenga**.

Así el siguiente código funcionaría:

~~~javascript
if (true) {
  var minumero = 8;
}

console.log(minumero); // Mostrará un 8
~~~

Mientras que con el operador de declaración `let` solo se verá la variable dentro del bloque que la contiene.

~~~javascript
if (true) {
  let minumero = 8;
}

console.log(minumero); // Será undefined
~~~



## Hoisting de Variables
Un comportamiento de las variables de [Javascript][Javascript] es que puedes utilizarlas en el código aunque no las hayamos declarado todavía.

Es decir, el siguiente código funcionaría:

~~~javascript
console.log(variable); // Devuelve undefined
var variable = 'Hola Mundo';
~~~

Esto es debido a que [Javascript][Javascript] funciona con un modelo de "Hoisting de Variables", las variables, independientemente de dónde estén definidas son llevadas a la cabecera del bloque que las contiene.

Hasta que son definidas y asignadas un valor mantienen un valor de `undefined`.

> Es importante saber que esto solo es aplicable para variables definidas mediante `var` y que no aplica a las variables definidas con `let`.

El código presentado arriba sería para el interprete de [Javascript][Javascript] lo siguiente:

~~~javascript
var variable;
console.log(variable);
variable = 'Hola Mundo';
~~~


## Constantes
Una constante es una variable con un valor de solo lectura, la cual declararemos mediante el operador de declaración `const`. Así podremos definir una constante de la siguiente forma:

~~~javascript
const miconstante = valor;
~~~

El valor de la constante no podrá cambiar durante la vida de nuestro programa.

Así podríamos tener el siguiente código para *calcular el área de un círculo* con el uso de constantes:

~~~javascript
const PI = 3.1416;
let radio = 2;

console.log(2*PI*radio);
~~~

El ámbito de una constante en [JavaScript][JavaScript] será el mismo que el de una variable local definida mediante `let`.

## Tipos de variables JavaScript

Dentro de [JavaScript][JavaScript] podemos definir **7 tipos de datos a nuestras variables**:

* **Boolean**, variables que puedan contener un valor de verdadero o falso. (true o false).
* **null**, en el caso de que la variable no tome ningún valor.
* **undefined**, cuando la variable no ha sido inicializada tiene un valor indefinido.
* **Number**, para los números enteros o decimales. (8 o 3.1416)
* **String**, para las cadenas de texto. ("Soy una cadena")
* **Symbol**, para valores que sean únicos e inmutables.
* **Object**, para cuando la variable contiene un objeto.


> El tipo de dato de la variable se calcula atendiendo al valor que le asignemos a dicha variable. El tipo de una variable puede cambiar a lo largo de la vida de un programa [JavaScript][JavaScript] atendiendo a los valores que se le vayan asignando.

## Conversiones Dinámicas
[JavaScript][JavaScript] es un lenguaje de tipado dinámico, es decir que no hace falta definir el tipo de una variable. Ya que la variable recibe el tipo en el momento que se le asigna un valor.

~~~javascript
let mivariable = 'Hola';
~~~

Es en este primer momento, cuando la variable recibe un valor, cuando se le asigna el tipo. En este caso, al asignarle una cadena la variable se convierte en el tipo `String`.

Si asignamos a la variable un nuevo valor, la variable cambiará automáticamente de tipo.

~~~javascript
mivariable = 5;
~~~

En este momento, al asignar un número, la variable se convierte en tipo `Number`.



## Números y Cadenas

### Operador +
El operador `+` se puede utilizar entre dos variables de tipo `String` realizando una **concatenación de cadenas**. De esta manera podríamos tener el siguiente código fuente en [Javascript][Javascript]

~~~javascript
let c1 = 'Hola ';
let c2 = 'Mundo';

console.log(c1 + c2);
~~~

De igual manera podemos utilizar el operador `+` entre un `String` y un `Number`. El resultado será el de concatenar las cadena y el número obteniendo una nuevo `String`.

~~~javascript
let cadena = '123';
let numero = 4;

console.log(cadena + numero); // '1234'
~~~

Si bien, esto solo funciona con el operador `+`, ya que si utilizamos otro operador matemático entre un `String` y un `Number` lo que obtendremos será la operación matemática.

~~~javascript
let cadena = '123';
let numero = 4;

console.log(cadena - numero); // 119
~~~

Así, podríamos sumar una `String` y un `Number` si lo que hacemos antes es una resta de un valor 0. Funciona, aunque sea algo rebuscado.

~~~javascript
let cadena = '123';
let numero = 4;

console.log(cadena - 0 + numero);
~~~

### Convertir cadenas a números: parseInt() y parseFloat()
Al manejar cadenas, bien si es por definición de la variable, o bien si es por que le hemos pedido al usuario un valor por consola mediante `prompt()`, nos será muy útil el convertir dichas variables a números, si es que tenemos que operar con ellas.

Para convertir una cadena a un número en [Javascript][Javascript] podemos apoyarnos en las funciones `parseInt()` y `parseFloat()`. Ya sea para convertirlo a un entero o a un decimal.

~~~javascript
let c1 = prompt('Dime el primer número?');
let c2 = prompt('Dime el segundo número?');

console.log(c1 + c2);
console.log(parseInt(c1) + parseInt(c2));
~~~

Las funciones `parseInt()` y `parseFloat()` reciben un segundo valor que nos permite indicar la base del número al que vamos a convrtir. Es decir, si queremos que sea un binario, un hexadecimal o en base 10.

La sintaxis de estos métodos es:

~~~javascript
parseInt(string, radix);
parseFloat(string, radix);
~~~

Así podremos convertir una cadena de texto en un número binario de la siguiente forma:

~~~javascript
let cadena = '1100';
console.log(parseInt(cadena,2));
~~~

### Convertir cadenas a números: operador unario +
Otra forma de convertir una cadena a un número es mediante el operador unario `+`. Es decir, anteponiendo el operador `+` a la variable a la cual queremos convertir de `String` a `Number`.

Así podríamos tener el siguiente código:

~~~javascript
let c1 = prompt('Dime el primer número?');
let c2 = prompt('Dime el segundo número?');

console.log(+c1 + +c2);
~~~



## Tipo de una variable???
typeof


[Javascript]: [JavaScript]: {{site.url}}/javascript/
