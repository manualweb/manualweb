---
title: Errores Javascript
permalink: /javascript/errores-javascript/
---

Para poder gestionar errores (excepciones) en [Javascript][Javascript] tenemos dos elementos. Por un lado tenemos `throw` como sentencia que nos permite generar un error y `try-catch` como estructura para poder capturarlos y gestonar el error.

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
} catch (excepción) {
  // Sentencias control de excepción
} finally {
  // Sentencias tras el try-catch
}
~~~

Como vemos mediante `try-catch` envolvemos el código a ejecutar susceptible de generar un error, y en la parte del `catch` se ejecutarán las sentencias una vez generado el error.

Además se cuenta con otro bloque que será el `finally` el cual contendrá las sentencias que se ejecutarán antes de acabar el bloque `try-catch` y pasar al siguiente bloque.

Así, podríamos controlar la excepción definida anteriormente de la siguiente forma:

~~~javascript
try {
  let saldo = -12;

  if (saldo <0) {
    throw new FunctionalException('Saldo inferior a 0');
  } else {
    console.log("Saldo Positivo")
  }
} catch (fe) {
    console.log(fe.toString());
}
~~~

Una de las cosas que podremos hacer con los bloques `try-catch` es el anidarlos para poder capturar diferentes excepciones.

## Objeto Error
Cuando lo que se producen son errores del sistema en tiempo de ejecución, por ejemplo el intentar acceder al método de un objeto que no existe, se lanzan instancias del objeto `Error`.

Las instancias de errores que existen en [Javascript][Javascript] son:

* **EvalError**, cuando se produce un error de evaluación con la función `eval()`.
* **InternalError**, cuando se produce un error dentro del motor [Javascript][Javascript]. Por ejemplo que haya demasiados niveles de recursividad o un bucle infinito.
* **RangeError**, cuando una variable o parámetro numérico está fuera de rango.
* **ReferenceError**, cuando se hace referencia a algo que está sin definir, por ejemplo a una variable.
* **SyntaxError**, cuando se produce un error en evaluación del código dentro de `eval()`.
* **TypeError**, cuando una variable o parámetro no es un tipo válido. O bien no existe. Por ejemplo intentar invocar a un método que no existe de un objeto.
* **URIError**, cuando los parámetros que se envían a los métodos `encodeURI()` o `decodeURI()` no tienen un formato válido.

Si bien dentro de nuestro programa [Javascript][Javascript] podemos crear un objeto `Error` personalizado para nuestro código. El objeto `Error` tiene principalmente dos propiedades: `name` que define el tipo de error que estamos creando y `message` que es el mensaje asociado al error.

De esta manera podemos crear un objeto `Error` de la siguiente forma:

~~~javascript
try {
  throw new Error("Esto es un nuevo error");
} catch (e) {
  console.log(e.name + ':' + e.message)
}
~~~

Si queremos controlar dependiendo del tipo de error que suceda deberemos de utilizar la sentencia `instanceof` que nos permitirá saber qué tipo de error del sistema se está produciendo.

~~~javascript
try {

  // Error 1
  let objeto = 'a';
  console.log(objeto.sumar());

  // Error 2
  console.log(casa);

} catch (e) {
  if (e instanceof TypeError) {
    console.log("Error de Sintaxis");
  } else if (e instanceof ReferenceError) {
    console.log("Elemento referenciado sin existir");
  } else {
    console.log("Tipo de error no controlado");
  }
}
~~~


[Javascript]: {{site.url}}/javascript/
