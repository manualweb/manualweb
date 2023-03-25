---
				title: Comprobar Números Javascript
				permalink: /javascript/comprobar-numeros-javascript/
				excerpt: "El objeto Number nos permite comprobar números Javascript de nuestras variables para ver si son enteros, están en rango o si realmente son números o no."
				tags: [number,nan,isnan,isinteger,issafeinteger,isfinite]
				image:
  					path: /img/covers/javascript-cover.jpg
				---
			
Para poder comprobar números Javascript el objeto [`Number`](https://www.w3api.com/Javascript/Number/) nos proporciona un conjunto de métodos que nos permitirán trabajar con la variables y ver si la información que estas albergan es información numérica.


## Comprobar si es un número


Lo primero para lo que podemos utilizar el objeto [`Number`](https://www.w3api.com/Javascript/Number/) es para saber si lo que estamos manipulando es o no un número. Ya que recordemos que[ en Javascript  no se realiza tipado de los datos, si no que se van tipando dinámicamente](https://manualweb.net/javascript/tipos-variables-javascript/).


Primero podemos comprobar si una variable no tiene asignado un valor `NaN` mediante la constante [`Number.NaN`](https://www.w3api.com/Javascript/Number/NaN) o bien validarlo mediante el método [`Number.isNaN()`](https://www.w3api.com/Javascript/Number/isNaN).


```javascript
let numero = 12;
let decimal = 12.4;
let obj_numero = new Number(12);
let cadena = 'Soy una cadena';
let sin_numero = NaN;

console.log(Number.isNaN(numero));     // false
console.log(Number.isNaN(decimal));    // false
console.log(Number.isNaN(obj_numero)); // false
console.log(Number.isNaN(cadena));     // false
console.log(Number.isNaN(sin_numero)); // true
```


Vemos que solo da el valor `true` cuando el valor es realmente un elemento `NaN`.


> La función [`Number.isNaN()`](https://www.w3api.com/Javascript/Number/isNaN) no convierte el valor a un número. Cosa que si que hace la función `.Nan()`


## Comprobar si es un entero


Otro forma que podemos comprobar si un valor es un número es mediante el método [`Number.isInteger()`](https://www.w3api.com/Javascript/Number/isInteger). En este caso se valida que el valor sea un número entero. Es decir, un literal decimal no estaría considerado como entero.


```javascript
let numero = 12;
let decimal = 12.4;
let obj_numero = new Number(12);
let cadena = 'Soy una cadena';
let sin_numero = NaN;

console.log(Number.isInteger(numero));     // true
console.log(Number.isInteger(decimal));    // false
console.log(Number.isInteger(obj_numero)); // false
console.log(Number.isInteger(cadena));     // false
console.log(Number.isInteger(sin_numero)); // false
```


Una alternativa del método [`Number.isInteger()`](https://www.w3api.com/Javascript/Number/isInteger) sería [`Number.isSafeInteger()`](https://www.w3api.com/Javascript/Number/isSafeInteger). En este caso estamos hablando que la comprobación que se realizaría es doble, por un lado si el valor pasado es un entero y por otro si el entero se encuentra dentro del rango controlado como entero por [Javascript](https://www.manualweb.net/javascript/). Es decir, que el valor estuviese entre -(2^{53}-1) y el valor 2^{53}-1. Estos valores están definidos por las propiedades [`Number.MIN_SAFE_INTEGER`](https://www.w3api.com/Javascript/Number/MIN_SAFE_INTEGER) y [`Number.MAX_SAFE_INTEGER`](https://www.w3api.com/Javascript/Number/MAX_SAFE_INTEGER)


De esta manera podemos tener el siguiente código:


```javascript
let entero = 1234567890;
let entero_no_seguro = Number.MAX_SAFE_INTEGER+1

console.log(Number.isSafeInteger(entero));
console.log(Number.isSafeInteger(entero_no_seguro));
```


## Comprobar si es un número finito


Por último tendríamos el método [`Number.isFinite()`](https://w3api.com/Javascript/Number/isFinite) que validará si el valor es un número finito. Ya sea un número entero o decimal.


```javascript
let numero = 12;
let decimal = 12.4;
let obj_numero = new Number(12);
let cadena = 'Soy una cadena';
let sin_numero = NaN;

console.log(Number.isFinite(numero));      // true
console.log(Number.isFinite(decimal));     // true
console.log(Number.isFinite(obj_numero));  // false
console.log(Number.isFinite(cadena));      // false
console.log(Number.isFinite(sin_numero));  // false
```


## Control de límites


Podremos comprobar si el número evaluado es posible ser gestionado por [Javascript](%7B%7Bsite.url%7D%7D/javascript) mediante las constantes [`Number.MAX_VALUE`](https://www.w3api.com/Javascript/Number/MAX_VALUE) y [`Number.MIN_VALUE`](https://www.w3api.com/Javascript/Number/MIN_VALUE).


De esta manera podemos hacer controles de este tipo:


```javascript
let entero = Math.pow(1234567890,1234567890);

if (entero < Number.MAX_VALUE)
    console.log("Puedo gestionar este número en Javascript");
else
    console.log("NO Puedo gestionar este número en Javascript");
```


Si nos pasamos de los valores de máximo y mínimos representados por [`Number.MAX_VALUE`](https://www.w3api.com/Javascript/Number/MAX_VALUE) y [`Number.MIN_VALUE`](https://www.w3api.com/Javascript/Number/MIN_VALUE), [Javascript](https://www.manualweb.net/javascript/) pasa a considerarlo como valores infinitos, ya sea `+Infinity` o `-Infinity` o en el objeto [`Number`](https://www.w3api.com/Javascript/Number/) con las propiedades [`Number.NEGATIVE_INFINITY`](https://www.w3api.com/Javascript/Number/NEGATIVE_INFINITY) y [`Number.POSITIVE_INFINITY`](https://www.w3api.com/Javascript/Number/POSITIVE_INFINITY).

