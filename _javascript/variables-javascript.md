---
				title: Variables Javascript
				permalink: /javascript/variables-javascript/
				excerpt: "Las variables Javascript nos sirven para almacenar uno o varios valores a lo largo del ciclo de vida del programa. Su tipado es dinámico."
				tags: [variables,constantes,const,let,var,hoisting]
				image:
  					path: /img/covers/javascript-cover.jpg
				---
			
## ¿Qué son las variables Javascript?


Las variables en [Javascript](https://www.manualweb.net/javascript/) son espacios en memoria en los que podemos almacenar uno o varios valores durante el ciclo de vida de nuestro código [Javascript](https://www.manualweb.net/javascript/).


Para declarar una variable en [Javascript](https://www.manualweb.net/javascript/) simplemente tendremos que poner su nombre, precedido del operador de declaración de variables `var` o `let`.


```javascript
var mivariable;
```


Hay que tener en cuenta que [Javascript](https://www.manualweb.net/javascript/) es **sensible a mayúsculas** por lo que no serán diferentes variables `mivariable`, `MiVariable` o `miVariable`.


## Operadores declaración variables Javascript


Podemos utilizar dos operadores de declaración con las variables [Javascript](https://www.manualweb.net/javascript/). Estos son `var`, `let` y `const`. Dependiendo del que utilicemos el ámbito de validez de la variable será diferente.

- `var`, nos sirve para declarar una variable. Opcionalmente podemos inicializar la variable.
- `let`, nos sirve para declarar una variable local a nivel de bloque. Opcionalmente podemos inicializar la variable.
- `const`, nos sirve para declarar una constante, que será una variable con un valor de solo lectura. Su ámbito de valor será a nivel de bloque.

## Nombres de las variables Javascript


A la hora de definir una variable [Javascript](https://www.manualweb.net/javascript/), lo único que hay que tener en cuenta es que esta **debe empezar por una letra o por el símbolo de subrayado ( _ )**. Lo que siga a esto es indiferente.


Por ejemplo podríamos definir como variables :


```javascript
Nombre;
_Opción15;
mes3;
```


Mientras que estarían mal definidas las siguientes variables :


```javascript
// Error de definición
7opcion;
&inicio;
¿nombre; 
```


_Tampoco podremos usar como variables_ palabras reservadas del lenguaje: `new`, `null`, `if`,…


## Declarar una variable JavaScript


Así la estructura para poder declarar una variable [Javascript](https://www.manualweb.net/javascript/) será la siguiente:


```javascript
operador_declaracion nommbre_variable = valor_inicial;
```


Así podríamos tener las siguiente variables y constantes:


```javascript
var nombre = "Víctor";
let numero = 4;
const constante = 12;
```


En el caso de que no asignemos un valor a la variable, esta contendrá el valor `undefined`.


> Al comprobar si una variable tiene el valor `undefined` estaríamos comprobando si esta variable se ha inicializado o no.


Si intentamos acceder a una variable sin definir obtendremos el error `ReferenceError`.


## Ámbito de las variables JavaScript


Cuando definimos una variable dentro de un bloque entendemos que su ámbito de validez es dentro de ese bloque. Y si está declarada fuera de cualquier bloque la variable es local. Si bien por las especificaciones previas a **ECMAScript 2015** cualquier variable declarada mediante un operador de declaración `var` es una **variable global que se vería en cualquier parte del bloque que la contenga**.


Así el siguiente código funcionaría:


```javascript
if (true) {
  var minumero = 8;
}

console.log(minumero); // Mostrará un 8
```


Mientras que con el operador de declaración `let` solo se verá la variable dentro del bloque que la contiene.


```javascript
if (true) {
  let minumero = 8;
}

console.log(minumero); // Será undefined
```


## Hoisting de Variables


Un comportamiento de las variables de [Javascript](https://www.manualweb.net/javascript/) es que puedes utilizarlas en el código aunque no las hayamos declarado todavía.


Es decir, el siguiente código funcionaría:


```javascript
console.log(variable); // Devuelve undefined
var variable = 'Hola Mundo';
```


Esto es debido a que [Javascript](https://www.manualweb.net/javascript/) funciona con un modelo de **“Hoisting de Variables”,** las variables, **independientemente de dónde estén definidas son llevadas a la cabecera del bloque que las contiene**.


Hasta que son definidas y asignadas un valor mantienen un valor de `undefined`.


> Es importante saber que esto solo es aplicable para variables definidas mediante `var` y que no aplica a las variables definidas con `let`.


El código presentado arriba sería para el interprete de [Javascript](https://www.manualweb.net/javascript/) lo siguiente:


```javascript
var variable;
console.log(variable);
variable = 'Hola Mundo';
```


## Constantes


Una constante es una variable con un valor de solo lectura, la cual declararemos mediante el operador de declaración `const`. Así podremos definir una constante de la siguiente forma:


```javascript
const miconstante = valor;
```


El valor de la constante **no podrá cambiar durante la vida de nuestro programa**.


Así podríamos tener el siguiente código para _calcular el área de un círculo_ con el uso de constantes:


```javascript
const PI = 3.1416;
let radio = 2;
console.log(2*PI*radio);
```


El ámbito de una constante en [Javascript](https://www.manualweb.net/javascript/) será el mismo que el de una variable local definida mediante `let`.

