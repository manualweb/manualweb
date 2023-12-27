---
title: Números Javascript
date: 2023-03-01
last_modified_at: 2023-03-01
permalink: /javascript/numeros-javascript/
excerpt: "Los números Javascript que podemos utilizar son: decimales, binarios, octales, hexadeciamles y exponenciales. Además tenemos los valores adicionales +Inifinity, -Infinity y NaN."
tags: [números,números_decimales,números_octales,números_binarios,números_hexadecimales,números_exponenciales,nan,infinity]
image:
  path: /img/covers/javascript-cover.jpg
---

Los números [Javascript](https://www.manualweb.net/javascript/) son valores numéricos que van entre el valor +/- 2^{1022} y el valor +/- 2^{1023}.  [Javascript](https://www.manualweb.net/javascript/) implementa el [formato en coma flotante de doble precisión](https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisi%C3%B3n) de 64 bits IEEE 754.


Para crear un número en [Javascript](https://www.manualweb.net/javascript/) simplemente tendremos que asignar el valor numérico a una variable.


```javascript
let numero = 123;
```


## Tipos de Números en Javascript


Podemos encontrar diferentes tipos de números [Javascript](https://www.manualweb.net/javascript/):


### Números Decimales


Son aquellos números que se escriben directamente y representan la base 10. Hay que tener cuidado de no anteponerles un cero delante ya que podrían ser interpretados como números octales.


```javascript
let numero = 123;
let otroNumero = 456;
```


### Números Binarios


Para representar un número binario se le antepone al número el valor `0b`. De esta manera los números que vayan después deberán de ser 0 y 1. En caso contrario se lanzaría una excepción [`SyntaxError`](https://www.w3api.com/Javascript/SyntaxError/).


```javascript
let numeroOcho = 0b1000;
let numeroDoce = 0b1100;
```


### Números Octales


La representación de números octales en [Javascript](https://www.manualweb.net/javascript/) se hace anteponiendo un `0` delante del número, seguido del valor en octal.


```javascript
let numero = 0173; // Valor decimal 123
let otroNumero = 0710; // Valor decimal de 456
```


> Desde la versión ECMAScript 2015 no se soportan los números octales dentro del modo estricto. Aunque se sigue manteniendo su representación por compatibilidad.


### Números Hexadecimales


Los números hexadecimales en [Javascript](https://www.manualweb.net/javascript/) se representan anteponiendo `0x` delante del valor. Así podríamos tener los siguientes números hexadecimales:


```javascript
let numero = 0x7B; // Valor decimal 123
let otroNumero = 0x1C8; // Valor deciaml de 456
```


Si el valor después de `0x` no es un número hexadecimal, se genera una excepción [`SyntaxError`](https://www.w3api.com/Javascript/SyntaxError/).


### Números Exponenciales


Para poder representar un número exponencial en [Javascript](https://www.manualweb.net/javascript/) simplemente deberemos de utilizar la letra `e` o `E` separando el valor del número del valor exponencial.


```javascript
let numero = 1E2;
let otroNumero = 1.4e3;
```


### Infinito


Además de los números [Javascript](https://www.manualweb.net/javascript/) que hemos visto tenemos dos valores que puede asumir un número que serían los valores infinitos representados por `+Infinity` y `-Infinity`.


### NaN


En el caso de que una variable no contenga un valor numérico podrá contener el valor `NaN` que significa que no es un número.


[child_database](d15f9ca2-e7ae-44d6-9355-c8a2f3c343f1)

