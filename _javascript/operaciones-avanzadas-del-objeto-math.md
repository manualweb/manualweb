---
title: Operaciones Avanzadas del Objeto Math
permalink: /javascript/operaciones-avanzadas-del-objeto-math/
excerpt: "Algunas operaciones avanzadas del objeto Math en Javascript son el cálculo de raíces cuadradas, cálculo de mínimos y máximos, multiplicaciones de números de 32 bits y manejo de ceros en números binarios."
tags: [math,máximo,mínimo,32_bits,números_binarios,raíz_cuadrada]
image:
  path: /img/covers/javascript-cover.jpg
---

Una vez visto las operaciones básicas, vamos a ver algunas operaciones avanzadas del objeto [`Math`](https://w3api.com/Javascript/Math/) en [Javascript](https://www.manualweb.net/javascript/) entre las que encontramos el cálculo de raíces cuadradas, cálculo de mínimos y máximos, multiplicaciones de números de 32 bits y manejo de ceros en números binarios.


## Raíces cuadradas


Lo primero que vamos a ver es cómo realizar una raíz cuadrada sobre un número. **La raíz cuadrada es la inversa de la potencia de 2 de un número**. Para poder calcular la raíz cuadrada tenemos el método [`Math.sqrt()`](https://www.w3api.com/Javascript/Math/sqrt). Este método recibe como parámetro el número del cual queremos calcular la raíz cuadrada.


Podemos ver cómo funcionaría en código de la siguiente manera:


```javascript
let numero = 4;
console.log(`La raíz cuadrada de ${numero} es ${Math.sqrt(numero)}`);
```


Complementando el cálculo de la raíz cuadrada, en el objeto [`Math`](https://w3api.com/Javascript/Math/) en [Javascript](https://www.manualweb.net/javascript/) nos ofrece la posibilidad de calcular la raíz cúbica de un número. **La raíz cúbica de un número es la inversa de una potencia de 3 de un número**.


En este caso el método que necesitamos es [`Math.cbrt()`](https://www.w3api.com/Javascript/Math/cbrt), el cual podemos utilizar en código de la siguiente forma:


```javascript
let numero = 8;
console.log(`La raíz cúbica de ${numero} es ${Math.cbrt(numero)}`);
```


> No se pueden calcular raíces cuadradas de números negativos, si lo intentamos el valor que nos devuelva el método [`Math.sqrt()`](https://www.w3api.com/Javascript/Math/sqrt) será `NaN`. Si bien, si que se pueden calcular raíces cúbicas de número snegativos.


Además, el objeto [`Math`](https://w3api.com/Javascript/Math/) nos ofrece dos propiedades relacionadas con las raíces cuadras, estas propiedades son: [`Math.SQRT1_2`](https://www.w3api.com/Javascript/Math/SQRT1_2) y [`Math.SQRT2`](https://www.w3api.com/Javascript/Math/SQRT2). En el caso de [`Math.SQRT1_2`](https://www.w3api.com/Javascript/Math/SQRT1_2) se representa al valor de la matriz cuadrada de 1/2 que sería algo así como “**0.7071067811865476”**. Y en el caso de [`Math.SQRT2`](https://www.w3api.com/Javascript/Math/SQRT2) se representa a la matriz cuadrada de 2, que viene a ser un valor de “**1.4142135623730951”.**


## Máximos y mínimos


Una de las utilidades interesantes que tiene el objeto [`Math`](https://w3api.com/Javascript/Math/) es la posibilidad de saber cuales son los valores máximos y mínimos de una lista de valores. Para ello tenemos los métodos [`Math.max()`](https://www.w3api.com/Javascript/Math/max) y [`Math.min()`](https://www.w3api.com/Javascript/Math/min) los cuales reciben un array de valores.


Si queremos obtener el valor máximo de una lista de números lo codificaríamos de la siguiente forma:


```javascript
console.log(Math.max(12,45,78)); // 78
```


Y si queremos obtener el valor mínimo:


```javascript
console.log(Math.min(12,45,78)); // 12
```


Podemos observar que tanto [`Math.max()`](https://www.w3api.com/Javascript/Math/max) como [`Math.min()`](https://www.w3api.com/Javascript/Math/min) reciben una lista de números. En el caso de que los valores los tengamos listados en un array, y aunque todavía no hayamos hablado de arrays, podríamos utilizar el operador `…` para convertir el array en una lista de números.


En este caso el código quedaría de la siguiente forma:


```javascript
let numeros = [12,56,2,59,98,3,45,11];
console.log(`Número máximo ${Math.max(...numeros)}`);
console.log(`Número mínimo ${Math.min(...numeros)}`);
```


## Multiplicaciones de Enteros de 32 bits con signo


Como ya vimos cuando hablábamos de [los números en Javascript](https://manualweb.net/javascript/numeros-javascript/), este implementa el [formato en coma flotante de doble precisión](https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisi%C3%B3n) de 64 bits IEEE 754.


Pero puede ser que necesitemos hacer multiplicaciones de números como si estos fuesen números de 32 bits con signo. Lenguajes como C utilizan este tipo de formatos en sus enteros. En ese caso el objeto [`Math`](https://w3api.com/Javascript/Math/) nos ofrece el método [`Math.imul()`](https://www.w3api.com/Javascript/Math/imul) el cual tratará los números como si fuesen números de 32 bits con signo.


De esta manera tenemos que saber que para 32 bits con signo, el número -1 sería el valor **0xffffffff** o en decimal el **4294967295**.


> En los números de 32 bits con signo van del 0 al 2147483648 (o 0x80000000) y del 2147483649 hasta el 4294967295 (o 0xffffffff) irían los números negativos. Por eso el 0xffffffff representa el número -1.


Lógicamente si realizamos la multiplicación normal:


```javascript
let numero = **0xffffffff**;
console.log(numero*2); // 8589934590
```


Pero si queremos que se multipliquen como si fuesen números de 32 bits utilizamos [`Math.imul()`](https://www.w3api.com/Javascript/Math/imul)


```javascript
let numero = **0xffffffff**;
console.log(Math.imul(numero,2)); // -2
```


Si por lo que sea hemos realizado la multiplicación normal, siempre podemos convertir a nuestro número en un entero de 32 bits con signo de la siguiente forma [utilizado los operadores de bits](https://manualweb.net/javascript/operadores-sobre-bits/).


```javascript
let numero = **0xffffffff**;
let multiplicacion = numero * 2; // 8589934590
console.log(multiplicacion | 0); // -2 
```


> La web [https://www.rapidtables.com/convert/number](https://www.rapidtables.com/convert/number) nos permite realizar conversiones entre números de una forma muy útil.


Si bien es verdad que esto solo funciona cuando el número resultado está dentro de rango, si no, no funciona.


## Ceros en números binarios


Otro método que nos encontramos en el objeto [`Math`](https://w3api.com/Javascript/Math/) es el método [`Math.clz32()`](https://www.w3api.com/Javascript/Math/clz32). En este caso, método [`Math.clz32()`](https://www.w3api.com/Javascript/Math/clz32) nos permite saber cuántos ceros hay al inicio de un número binario de 32 bits sin signo.


Al método [`Math.clz32()`](https://www.w3api.com/Javascript/Math/clz32)se le pasa el número como parámetro.


```javascript
// 00000000000000000000000000001100
let n1 = 12;   

// 00000000000000000000010011010010
let n2 = 1234; 

console.log(Math.clz32(n1)); // 28
console.log(Math.clz32(n2)); // 21
```


Otra de las capacidades que encontramos con el objeto [`Math`](https://w3api.com/Javascript/Math/) es poder calcular logaritmos. Un logaritmo es el exponente al que hay que elevar un número base para obtener otro número determinado.

