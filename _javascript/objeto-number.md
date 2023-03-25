---
title: Objeto Number
permalink: /javascript/objeto-number/
excerpt: "El objeto Number nos permite manejar números en Javascript y poder realizar operaciones de validación y conversión sobre ellos."
tags: [number,valueof]
image:
  path: /img/covers/javascript-cover.jpg
---

Además de gestionar los números mediante valores asignados a variables, [Javascript](https://www.manualweb.net/javascript/) nos ofrece objeto [`Number`](https://www.w3api.com/Javascript/Number/). El objeto [`Number`](https://www.w3api.com/Javascript/Number/) nos ofrece un conjunto de constantes y métodos que nos facilitan ciertas operaciones con los números.


Lo primero que podemos hacer con el objeto [`Number`](https://www.w3api.com/Javascript/Number/) es crear un número mediante su constructor [`Number()`](https://www.w3api.com/Javascript/Number/Number/). El constructor [`Number()`](https://www.w3api.com/Javascript/Number/Number/) recibe como parámetro el número a utilizar.


Así creamos el objeto [`Number`](https://www.w3api.com/Javascript/Number/) con un valor de 12 de la siguiente forma:


```javascript
let numero = new Number(12);
```


Cuando creamos el objeto [`Number`](https://www.w3api.com/Javascript/Number/) tenemos que tener en cuenta que estamos manejando un objeto, no un dato primitivo, por lo tanto, si lo mostramos directamente por consola, veremos que se muestra un objeto y no el valor del número


```javascript
let numero = new Number(12);
console.log(numero); // [Number: 12]
```


Es por ello que cuando queremos mostrar el valor del objeto [`Number`](https://www.w3api.com/Javascript/Number/) tenemos que utilizar el método [`.valueOf()`](https://www.w3api.com/Javascript/Number/valueOf) para realmente poder mostrar el valor. 


El código nos quedará de la siguiente manera:


```javascript
let numero = new Number(12);
console.log(numero.valueOf()); // 12
```


Aunque a la hora de mostrar su valor tenemos que tener cuidado, para poder operar con él y con otros valores numéricos no hace falta hacer nada especial. De esta manera podemos operar con un tipo de dato primitivo y un objeto [`Number`](https://www.w3api.com/Javascript/Number/)  como podemos ver en el siguiente código:


```javascript
let n1 = new Number(12);
let suma = n1 + 3;
console.log(suma);
```


O bien, realizar operaciones entre diferentes objetos [`Number`](https://www.w3api.com/Javascript/Number/), como vemos en este otro fragmento de código:


```javascript
let n1 = new Number(12);
let n2 = new Number(6);

let resta = n1-n2;
console.log(resta);
```


Lo que sí podemos ver es que cuando operamos con ellos el resultado, a no ser que lo convirtamos, pasa a ser un tipo primitivo número como podemos ver al mostrarlo en consola.


Ahora, si quieres saber y aprende más sobre el objeto [`Number`](https://www.w3api.com/Javascript/Number/), puedes [consultar todas las constantes y métodos del objeto ](http://www.w3api.com/Javascript/Number/)[`Number`](http://www.w3api.com/Javascript/Number/)[ en W3APi](http://www.w3api.com/Javascript/Number/).

