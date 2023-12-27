---
title: Funciones Javascript
date: 2023-04-04
last_modified_at: 2023-04-04
permalink: /javascript/funciones-javascript/
excerpt: "Las funciones Javascript nos permiten definir y agrupar un conjunto de sentencias las cuales podemos invocar desde diferentes partes de nuestro programa."
tags: [function,función_anónima,parámetros]
image:
  path: /img/covers/javascript-cover.jpg
---

## ¿Qué son las funciones Javascript?


Las funciones [Javascript](https://www.manualweb.net/javascript/) nos permiten definir y agrupar un conjunto de sentencias a las cuales podemos invocar en diferentes partes de nuestro programa. Es por ello que diferenciaremos la parte que nos permite **definir la función** de la parte que realiza la **invocación a la función**.


También hay que saber que el lenguaje [Javascript](https://www.manualweb.net/javascript/) nos ofrece un conjunto de [funciones predefinidas](https://www.manualweb.net/javascript/funciones-predefinidas-en-javascript/) que podremos utilizar en nuestros programas.


## Definir funciones Javascript


Para definir funciones [Javascript](https://www.manualweb.net/javascript/) deberemos de saber que estas tienen la siguiente estructura:


```javascript
function nombre_funcion (argumentos) {
  sentencias;
  return valor_retorno;
}
```


Los elementos que nos encontramos en la definición de las funciones [Javascript](https://www.manualweb.net/javascript/) son los siguientes:

- Lo primero que vemos es que utilizamos el literal `function` para definir la función.
- A continuación indicaremos el **nombre** que le queremos dar a la función.
- Entre paréntesis declararemos, separados por comas, los **argumentos (o parámetros)** que recibirá la función.
- Entre llaves incluiremos las sentencias que formarán parte de la función.
- En el caso de que queramos devolver algún valor de retorno en la función utilizaremos la sentencia `return`.

Con este conocimiento básico podemos definir nuestra primera función que realice una suma de dos elementos, la cual nos quedará de la siguiente forma:


```javascript
function sumar (numero1, numero2) {
	let suma = numero1 + numero2;
  return suma;
}
```


## Invocar funciones Javascript


Para invocar funciones [Javascript](https://www.manualweb.net/javascript/) valdrá con poner el nombre de la función y pasarle los parámetros que necesite. La estructura para invocar funciones [Javascript](https://www.manualweb.net/javascript/) será la siguiente:


```javascript
nombre_funcion(parametros);
```


De esta forma podemos invocar a nuestra función [Javascript](https://www.manualweb.net/javascript/) de suma de números de la siguiente forma:


```javascript
function sumar (numero1, numero2) {
	let suma = numero1 + numero2;
  return suma;
}

let n1 = 2;
let n2 = 3;

console.log(sumar(2,3)); // 5
```


## Funciones anónimas


En la estructura general de las funciones hemos indicado que estas tienen que tener un nombre, el cual hemos visto que utilizamos para poder invocar a la función. Si bien, en [Javascript](https://www.manualweb.net/javascript/), podemos definir funciones sin nombre, que es lo que se conoce como **funciones anónimas**.


Es decir, la estructura en este caso sería de la siguiente forma:


```javascript
function (argumentos) {
  sentencias;
  return valor_retorno;
}
```


Pero si la función no tiene nombre, ¿cómo la invocamos? En este punto la idea de las **funciones anónimas** es que son funciones que solo van a ser utilizadas una vez o bien que las asignamos en una [expresión de función](https://www.manualweb.net/javascript/expresiones-de-funcion/) (esto ya lo veremos más adelante).


Por lo cual las funciones anónimas serán **funciones que asignemos a una variable**, que será la que utilicemos para su invocación:


```javascript
let sumar = function(a,b) {
  return a+b;
}
```


O bien **como parámetro de una función**, que serían las funciones callback. Esto lo encontramos en los modelos [DOM](https://www.manualweb.net/dom/) para gestionar eventos. Seguro que has manejado alguna vez la función [`addEventListener`](https://www.w3api.com/DOM/EventTarget/addEventListener/) y este código no te suena extraño:


```javascript
let boton = document.getElementById("miboton");
boton.addEventListener("click", function() {
  console.log("Botón pulsado");
});
```


Vemos que la función asociada al evento `click` es una función anónima en [Javascript](https://www.manualweb.net/javascript/) ya que va a quedar únicamente asociada a dicho evento y no la vamos a reutilizar más.


## Ámbito de una función


Cuando hablamos del ámbito de las funciones [Javascript](https://www.manualweb.net/javascript/) tenemos que saber que **las variables de una función solo pueden ser accedidas dentro de la función**. Si bien, **desde la función podemos acceder al resto de variables globales** definidas en nuestro código.


De esta manera, en el caso de que vayamos anidando funciones, estás podrán acceder a las variables definidas en sus funciones padres.


Esto lo podemos ver en el siguiente código:


```javascript
let contador = 1;
function incremento() {
  let inc = 2;
  return contador+inc;
}

console.log(incremento());  // Devuelve 3
console.log(inc);  // Da un error
```


En el código vemos cómo la función `incremento` puede acceder a la variable global `contador`, pero que la variable `inc` definida dentro de la función `incremento` ya no se puede acceder de forma externa a la función.

