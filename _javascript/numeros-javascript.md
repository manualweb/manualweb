---
title: Números Javascript
permalink: /javascript/numeros-javascript/
---

Los números [Javascript][Javascript] son valores núméricos que van entre el valor +/-2<sup>-1022</sup> y el valor +/-2<sup>1023</sup>. Para crear un número en [Javascript][Javascript] simplemente tendremos que asignar el valor númerico a una variable.

~~~javascript
let numero = 123
~~~

## Tipos de Números en Javascript
Podemos encontrar diferentes tipos de números [Javascript][Javascript]:

### Números Decimales
Son aquellos números que se escriben directamnente y represnetna la base 10. Hay que tener cuidado de no anteponerle sun cero delante ya que podrían ser interpretados como números octales.

~~~javascript
let numero = 123;
let otroNumero = 456;
~~~

### Números Binarios
Para representar un número binario se le antepone al número el valor `0b`. De esta manera los números que vayan después deberán de ser 0 y 1. En caso contrario se lanzaría una excepción `SyntaxisError`.

~~~javascript
let numeroOcho = 0b1000; 
let numeroDoce = 0b1100;
~~~

### Números Octales
La representación de números octales en [Javascript][Javascript] se hace anteponiendo un `0` delante del número, seguido del valor en octal.

~~~javascript
let numero = 0173; // Valor decimal 123 
let otroNumero = 0710; // Valor deciaml de 456
~~~

### Números Hexadecimales
Los números hexadecimales en [Javascript][Javascript] se representan anteponiendo `0x` delante del valor. Así podríamos tener los siguientes números hexadecimale:

~~~javascript
let numero = 0x7B; // Valor decimal 123 
let otroNumero = 0x1C8; // Valor deciaml de 456
~~~

### Números Exponenciales
Para poder representar un número exponencial en [Javascript][Javascript] simplemente deberemos de utilizar la letra `e` o `E` separando el valor del número del valor exponencial.

~~~javascript
let numero = 1E2;
let otroNumero = 1.4e3;
~~~

### Infinito
Además tenemos dos valores que puede asumir un número que serían los valores infinitos representados por `+Infinity` y `-Infinity`.

### NaN
En el caso de que una variable no contenga un valor numérico podrá contener el valor `NaN` que significa que no es un número.

## Objeto Number
Además de gestionar los números mediante valores asignados a variables, [Javascript][Javascript] nos ofrece objeto `Number`. El objeto `Number` nos ofrece un conjunto de constantes y métodos que nos facilitan ciertas operaciones con los números.

Así, dentro de las cosas que podemos hacer con el objeto `Number` nos encontramos con:


### Control de límites
Podremos comprobar si el número evaluado es gestionable por [Javascript][Javascript] mediante las constantes `Number.MAX_VALUE` y `Number.MIN_VALUE`. O bien si estamos manejando límites mediante las constantes `Number.NEGATIVE_INFINITY` y `Number.POSITIVE_INFINITY`.


## Comprorbar si es un número
Si queremos comprobar que el valor de una cadena es un número podemos utilizar la constante `Number.NaN` o bien validarlo mediante el método `Number.isNaN()`. 

Además si queremos ser más exactos en la comprobación podemos validar si el número es un entero mediante el método `Number.isInteger()`.

### Conversiones a números
Además pobremos cambiar las cadenas de valores a diferentes formatos. Así mediante `Number.parseFloat()` convertiremos una cadena a un valor decimal, mientras que `Number.parseInt()` nos lo conviere a un número entero.

Podemos realizar otras conversiones como son `.toExponential()` si queremos tener el valor en una notación exponencial.

De igual manera podemos indicar cuántos valores decimales queremos que tenga un número mediante el método `.toFixed()` el cual recibe como parámetro el número de decimales que queremos manejar en el número.

~~~javascript
let numero = 123.4567;
console.log (numero.toFixed(2)); // Muestra 2 decimales 123.46
~~~

O bien ajustar la precisión del número e indicar cuántos dígitos de precisión queremos mediante el método `.toPrecision()`, método que recibe como parámetro el número de dígitos sobre los que queremos tener la precisión.

~~~javascript
let numero = 123.4567;
console.log (numero.toPrecision(4)); // Muestra una precisión de 4 dígitos y un valor de 123.5

let otroNumero = 4.32;
console.log (numero.toPrecision(4)); // Muestra una precisión de 4 dígitos y un valor de 4.320
~~~






Puedes [consultar todas las constantes  y métodos del objeto `Number` en W3APi][NumberW3Api].


[Javascript]: {{site.url}}/javascript
[NumberW3Api]: http://www.w3api.com/Javascript/Number/