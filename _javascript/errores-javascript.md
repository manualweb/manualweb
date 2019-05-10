---
title: Errores Javascript
permalink: /javascript/errores-javascript/
---


Si intentamos acceder a una variable sin definir obtendremos el error `ReferenceError`.

------

Para poder gestionar errores (excepciones) en [Javascript][Javascript] tenemos dos elementos. Por un lado tenemos `throw` como sentencia que nos permite generar un error y `try-catch` como estructura para poder capturarlos y gestonar el error.

## ¿Qué es un error Javascript?
Lo primero será de


## Throw
La sentencia `throw` nos permitirá lanzar una excepción. La estructura que tiene esta sentencia es:

~~~javascript
throw expresion;
~~~

Dónde *expresión* es el elemento que contiene la información del error. Este puede ser un número, una cadena, un objeto,...

Si bien lo normal para representar un error es definir un objeto que contenga la información del Error. Por ejemplo podríamos definir la siguiente excepción:

~~~javascript
function FunctionalException(message) {
  this.message = message;
  this.name = 'FunctionalException';
  this.toString = function() {
    return this.name + ': "' + this.message + '"';
  }
}
~~~

Para poderlo lanzar simplemente deberíamos de utilizar la sentencia `throw` creando un nuevo objeto de excepción:

~~~javascript
throw new FunctionalException('Saldo inferior a 0');
~~~

## Try-Catch
Este bloque nos permite controlar las excepciones que se generen dentro de nuestro código fuente. La estructura de un bloque `try-catch` sería la siguiente:

~~~javascript
try {
  // Sentencias a ejecutar
} catch (excecpión) {
  // Sentencias control de excepción
} finally {
  // Sentencias tras el try-catch
}
~~~

Como vemos mediante `try-catch` envolvemos el código a ejecutar susceptible de generar un error, y en la parte del `catch` se ejecutarán las sentencias una vez generado el error.

Además se cuenta con otro bloque que será el `finally` el cual contendrá las sentencias que se ejecutarán antes de acabar el bloque `try-catch` y pasar al siguiente bloque.


[Javascript]: {{site.url}}/javascript/
