---
title: Conceptos Básicos Javascript
permalink: /javascript/conceptos-basicos-javascript/
excerpt: "Explicación de los conceptos básicos Javascript entre los que encontramos las sentencias, bloques o comentarios de código."
tags: [sentencias,comentarios,bloques sentencias,variables]
image:
  path: /img/covers/javascript-cover.jpg
---

Lo primero que tienes que saber sobre [Javascript](https://www.manualweb.net/javascript/) es qué es un lenguaje **sensible a mayúsculas** y que soporta el **texto UNICODE**. Así tendremos diferentes variables si las llamamos de la siguiente forma:


```javascript
var mivariable;
var MiVariable;
var miVariable;
```


O que podemos definir una variable con símbolos:


```javascript
var Straße;
```


## Sentencias y Bloques


Cada una de las operaciones básicas que ejecutemos en nuestro programa [Javascript](https://www.manualweb.net/javascript/) se denominará **sentencia** y al final de cada **sentencia** utilizaremos el **punto y coma (;)** para separarlas.


```javascript
sentencia;
```


Cuando juntamos un conjunto de **sentencias** lo que tenemos es un **bloque**. Los **bloques** se delimitan mediante llaves.


```javascript
{
  sentencia1;
  sentencia2;
  sentencia3;
}
```


Es importante saber el límite de nuestro **bloque** ya que dependiendo de la definición que hagamos a nuestras variables su valor podrá consultarse o no desde fuera del bloque de definición.


## Comentarios


En el caso de que queramos introducir un comentario en [Javascript](https://www.manualweb.net/javascript/) para documentar nuestro código fuente podremos utilizar la siguiente estructura para un comentario de una línea:


```javascript
// Comentario en una línea
```


O esta otra para un comentario de varias líneas:


```javascript
/*
  Comentario
  en varias
  líneas
*/
```

