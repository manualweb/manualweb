---
title: Objeto Math
permalink: /javascript/objeto-math/
---

El lenguaje Javascript nos ofrece el objeto [`Math`][ObjetoMath] el cual nos permite realizar una serie de operaciones matemáticas con números de forma sencilla. Para ello nos ofrece un conjunto de métodos y constantes que nos facilitan dichas operaciones.




## Exponentes y Logaritmos

## Máximos y mínimos

## Números aleatorios

## Redondeando números

## Raices cuadradas

## Signo



## Valores absolutos
El objeto `Math` tiene una operación que nos sirve para poder manejar valores absolutos:

* `abs()`, devuelve el **valor absoluto** del número pasado como parámetro.

Así podremos pasar difernets valores al método `.abs()` y ver su resultado en la consola.

~~~javascript
let n1 = 4;
let n2 = -3;

console.log(Math.abs(n1));  // 4
console.log(Math.abs(n2));  // 3
~~~

## Operaciones Trigonométricas e Hiperbólicas

* `sin()`,
* `cos()`,
* `tan()`,

	Standard trigonometric functions; with the argument in radians.
    
asin(), acos(), atan(), atan2()	Inverse trigonometric functions; return values in radians.
sinh(), cosh(), tanh()	Hyperbolic functions; argument in hyperbolic angle.
asinh(), acosh(), atanh()	Inverse hyperbolic functions; return values in hyperbolic angle.
pow(), exp(), expm1(), log10(), log1p(), log2()

Exponential and logarithmic functions.
floor(), ceil()	Returns the largest/smallest integer less/greater than or equal to an argument.
min(), max()	Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.
random()	Returns a random number between 0 and 1.
round(), fround(), trunc(),	Rounding and truncation functions.
sqrt(), cbrt(), hypot()	Square root, cube root, Square root of the sum of square arguments.
sign()	The sign of a number, indicating whether the number is positive, negative or zero.
clz32(),
imul()	Number of leading zero bits in the 32-bit binary representation.
The result of the C-like 32-bit multiplication of the two arguments.


[ObjetoMath]: https://w3api.com/Javascript/Math/

