---
title: Logaritmos y Exponenciales
date: 2023-03-24
last_modified_at: 2023-03-24
permalink: /javascript/logaritmos-y-exponenciales/
excerpt: "El objeto Math nos permite calcular logaritmos en base 2, 10 y neperianos, así como realizar cálculos exponenciales."
tags: [math,logaritmos,exponenciales,logaritmo_neperiano]
image:
  path: /img/covers/javascript-cover.jpg
---

Otra de las cosas que podemos hacer con el objeto [`Math`](https://w3api.com/Javascript/Math/) de [Javascript](https://www.manualweb.net/javascript/) es la posibilidad de calcular logaritmos y exponenciales. Veamos qué capacidades podemos explotar de los mismos.


## Logaritmos


```undefined
base^{exponente}= valor
```


```undefined
log_{base}(valor) = exponente
```


Si manejamos potencias, en el caso de tener 10 elevado a 2 nos daría un valor de 100. Por lo que podemos calcular el logaritmo en base 10 de 100 que nos daría 2. Para poder calcular logaritmos en base 10 tenemos el método [`Math.log10()`](https://www.w3api.com/Javascript/Math/log10), que podemos codificar de la siguiente manera:


```javascript
console.log(Math.log10(100));  // 2
```


De igual manera que podemos calcular el logaritmo en base 10 tenemos un método que nos calcula el logaritmo en base 2. Este es el método [`Math.log2()`](https://www.w3api.com/Javascript/Math/log2). Por lo tanto nos podemos encontrar el siguiente código.


```javascript
console.log(Math.log2(32));  // 5
```


Además de tener estos dos métodos para el cálculo de logaritmos, contamos con el método [`Math.log()`](https://www.w3api.com/Javascript/Math/log), el cual nos sirve para calcular lo que se conoce como **logaritmo natural** o **logaritmo neperiano.** Este logaritmo tiene la base exponencial, la cual usa el **número de Euler**. 


El objeto [`Math`](https://w3api.com/Javascript/Math/) dispone de la constante [`Math.E`](https://www.w3api.com/Javascript/Math/E/) para reflejar a ese número Euler con un valor de 2,718281828459045. Y del método [`Math.log()`](https://www.w3api.com/Javascript/Math/log) para el cálculo de **logaritmos naturales** o **neperianos** en [Javascript](https://www.manualweb.net/javascript/).


```javascript
console.log(Math.log(1));                   // 0
console.log(Math.log(Math.E));              // 1
console.log(Math.log(Math.pow(Math.E,6)));  // 6
```


Además, para el cálculo de logaritmos naturales o neperianos con valores muy pequeños tenemos el método [`Math.log1p()`](https://www.w3api.com/Javascript/Math/log1p) el cual nos ayuda calculando el logaritmo de (1+x). Es decir:


```javascript
Math.log1p(x) == Math.log(1+x)
```


El método [`Math.log1p()`](https://www.w3api.com/Javascript/Math/log1p) nos ayudará a dar precisión con números pequeños que perderíamos si sumásemos la unidad por defecto dónde perderíamos precisión. Y ya nos se cumple la anterior comparación.


Para calcular el logaritmo de (1+x) simplemente tendremos que ejecutar el siguiente código en [Javascript](https://www.manualweb.net/javascript/)


```javascript
console.log(Math.log1p(1));  // 0.6931471805599453
```


Por último vemos que el objeto [`Math`](https://w3api.com/Javascript/Math/) ofrece un conjunto de constantes con valores de logaritmos para que podamos utilizarlas en nuestro código. Estas son:

- [`Math.LN2`](https://www.w3api.com/Javascript/Math/LN2), sería el logaritmo neperiano de 2. (0.6931471805599453)
- [`Math.L`](https://www.w3api.com/Javascript/Math/LN2)[`N10`](https://www.w3api.com/Javascript/Math/LN10), para el logaritmo neperiano de 10. (2.302585092994046)
- [`Math.L`](https://www.w3api.com/Javascript/Math/LN2)[`OG2E`](https://www.w3api.com/Javascript/Math/LOG2E), que equivale al logaritmo en base 2 del número Euler [`Math.E`](https://www.w3api.com/Javascript/Math/E/) (1.4426950408889634)
- [`Math.L`](https://www.w3api.com/Javascript/Math/LN2)[`OG10E`](https://www.w3api.com/Javascript/Math/LOG10E) , con el valor del logaritmo en base 10 del número Euler [`Math.E`](https://www.w3api.com/Javascript/Math/E/) (0.4342944819032518)
- Y la ya mencionada [`Math.E`](https://www.w3api.com/Javascript/Math/E/) que representa el valor exponencial (2.718281828459045).

## Exponenciales


Cuando hablamos de exponentes nos referimos a calcular la potencia de un número exponencial. Es decir, de nuestro número Euler [`Math.E`](https://www.w3api.com/Javascript/Math/E/). El método que nos permite calcular un exponencial es [`Math.exp()`](https://www.w3api.com/Javascript/Math/exp), dicho método recibe el valor de la potencia como parámetro. 


Así podemos tener el siguiente código fuente:


```javascript
console.log(Math.exp(0));  // 1
console.log(Math.exp(1));  // 2.718281828459045
```


De igual manera tenemos el método [`Math.expm1()`](https://www.w3api.com/Javascript/Math/expm1) que calcula un exponencial menos el valor de una unidad. Es decir:


```javascript
Math.expm1(valor) == Math.exp(valor)-1
```

