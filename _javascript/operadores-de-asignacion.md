---
title: Operadores de Asignación
date: 2023-02-22
last_modified_at: 2023-02-22
permalink: /javascript/operadores-de-asignacion/
excerpt: "Los operadores de asignación en Javascript son aquellos operadores que nos sirven para asignar un valor a una variable o constante"
tags: [operadores,operadores_asignación,asignación_por_desestructuración]
image:
  path: /img/covers/javascript-cover.jpg
---

Los operadores de asignación en [Javascript](https://www.manualweb.net/javascript/) son aquellos operadores que nos sirven para asignar un valor a una variable o constante. De tal manera que el valor que encontremos en la parte derecha será el que se asigne.


El **operador de asignación** base en [Javascript](https://www.manualweb.net/javascript/) es `=`. De esta manera podemos asignar un valor a una variable de la siguiente manera:


```javascript
x = y
```


Estamos asignando el valor de `y` a la variable `x`. De esta forma será común que nos encontremos con código como el siguiente:


```javascript
let numero = 8;
```


Esta asignación da el valor tan cual está en la parte derecha de la sentencia. Si bien disponemos de una serie de operadores de asignación que nos permiten modificar el valor antes de asignarlo. Así encontramos los siguientes **operadores de asignación en** [**Javascript**](https://www.manualweb.net/javascript/).


## Asignación por desestructuración


Hay una forma de asignar valores a variables a partir de los valores de un array.


```javascript
valores = [1, 2, 3];
```


Si queremos asignar cada valor a una variable lo que haremos, si estamos manejando arrays, es lo siguiente:


```javascript
n1 = valores[0];
n2 = valores[1];
n3 = valores[2];
```


La **asignación por desestructuración** lo que nos permite es asignar los valores de manera directa los valores del array sobre las variables atendiendo a la estructura:


```javascript
var [variable1, variable2,... variableN] = array
```


De esta manera lo que habíamos hecho en tres líneas de código se consigue mediante una **asignación por desestructuración** con el siguiente código:


```javascript
var [n1,n2,n3] = valores;
```

