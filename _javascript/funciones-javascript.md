---
title: Funciones Javascript
permalink: /javascript/funciones-javascript/
---

## ¿Qué es una función Javascript?

Una función [Javascript][Javascript] nos permite definir y agrupar un conjunto de sentencias a las cuales podemos invocar en diferentes partes de nuestro programa. Es por ello que diferenciaremos la parte que nos permite **definir la función** de la parte que realiza la **invocación a la función**.

También hay que saber que el lenguaje [Javascript][JavaScript] nos ofrece un conjunto de funciones predefinidas que podremos utilizar en nuestros programas.

## Definir una función Javascript

Para definir una función [Javascript][Javascript] deberemos de saber que esta tiene la siguientes estructura:

~~~javascript
function nombre_funcion (argumento) {
  sentencias;
  return valor_retorno;
}
~~~

Los elementos que nos encontramos en la definición de una función son los siguientes:

* Lo primero que vemos es que utilizamos el literal `function` para definir la función.
* A continuación indicaremos el **nombre** que le queremos dar a la función.
* Entre paréntesis declararemos, separados por comas, los **argumentos (o parámetros)** que recibirá la función.
* Entre llaves incluiremos las sentencias que formarán parte de la función.
* En el caso de que queramos devolver algún valor de retorno en la función utilizaremos la sentencia `return`.

Con este conocimiento básico podemos definir nuestra primera función que realice una suma de dos elementos, la cual nos quedará de la siguiente forma:

~~~javascript
function sumar (numero1, numero2) {
  return numero1 + numero2;
}
~~~


## Invocar a una función Javascript
Para invocar a una función Javascript valdrá el poner el nombre y pasarle los parámetros que necesite. La estructura será la siguientes:

~~~javascript
nombre_funcion(parametros);
~~~

De esta forma podemos invocar a nuestra función de suma de números de la siguiente forma:

~~~javascript
function sumar (numero1, numero2) {
  return numero1 + numero2;
}

let n1 = 2;
let n2 = 3;
console.log(sumar(2,3));
~~~

## Ámbito de una función
Las variables de una función solo pueden ser accedidas dentro de la función. Si bien, desde la función podemos acceder al resto de variables globales definidas en nuestro código.

De esta manera, en el caso de que vayamos anidando funciones, estás podrán acceder a las variables definidas en sus funciones padres.



[Javascript]: {{site.url}}/javascript
