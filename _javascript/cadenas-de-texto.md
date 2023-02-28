---
title: Cadenas de Texto
permalink: /javascript/cadenas-de-texto/
excerpt: "Las cadenas de texto en Javascript pueden ser creadas mediante texto delimitado por comillas simples o dobles o bien mediante el objeto String."
tags: [string,cadena_texto,typeof,length]
image:
  path: /img/covers/javascript-cover.jpg
---

Para crear una cadena de texto [Javascript](https://www.manualweb.net/javascript/) simplemente tendremos que asignar una cadena de texto, delimitada por comillas o dobles comillas, a una variable.


```javascript
let cadena = "Soy una cadena";
let otra_cadena = 'Yo también soy una cadena';
```


Es importar que en estos momentos las variables que hemos creado son del tipo primitivo **“string”**, lo cual podremos comprar ejecutando un sencillo `typeof` sobre la variable.


## Concatenar Cadenas de texto


Si queremos concatenar cadenas de texto [Javascript](https://www.manualweb.net/javascript/) podemos recurrir al operador `+`, el cual, a parte de servirnos para sumar números nos permite concatenar las cadenas de texto.


Por ejemplo podríamos utilizarlo de la siguiente manera:


```javascript
let nombre = "Víctor";
let saludo = "Hola, " + nombre + "!";
```


## Cadenas de Texto Multi-línea


En el caso de que estemos manejando cadenas de texto [Javascript](https://www.manualweb.net/javascript/) muy largas podemos codificarlas como cadenas de texto multi-línea. Es decir, podremos distribuir su contenido en varias líneas.


Para ello tenemos tres alternativas. La primera consiste en utilizar una barra invertida al final de cada línea de texto. Quedaría de la siguiente forma:


```javascript
let cadena = "En un lugar de la Mancha, \
de cuyo nombre no quiero acordarme, \
no ha mucho tiempo que vivía \
un hidalgo de los de lanza en astillero, \
adarga antigua, rocín flaco y galgo corredo";
```


La segunda opción consiste en concatenar cadenas de texto como hemos visto en el apartado anterior. En este caso, nuestro código, quedaría de la siguiente forma:


```javascript
let cadena = "En un lugar de la Mancha, " +
"de cuyo nombre no quiero acordarme, " +
"no ha mucho tiempo que vivía " +
"un hidalgo de los de lanza en astillero, " + 
"adarga antigua, rocín flaco y galgo corredo";
```


La última opción que tendríamos sería utilizando la comilla simple invertida, esto nos permite poner directamente el contenido en varias líneas sin utilizar un operador o carácter por medio. Por lo que queda más claro.


En este caso el código quedaría de la siguiente forma:


```javascript
let cadena = `En un lugar de la Mancha,
de cuyo nombre no quiero acordarme, 
no ha mucho tiempo que vivía 
un hidalgo de los de lanza en astillero,  
adarga antigua, rocín flaco y galgo corredo`;
```


Es importante saber que en este caso los saltos de línea son guardados como tal, por lo que tendremos que tenerlo en cuenta a la hora de procesar este tipo de cadenas.


## Cadenas de Texto con Plantillas


La definición de cadenas de texto mediante la comilla simple invertida nos da la posibilidad también de utilizar plantillas que inserten variables en mitad del texto. De esta manera podremos evitar el realizar concatenaciones del contenido de varias cadenas.


Las variables que queramos insertar dentro de la plantilla se reflejarán mediante la estructura `${variable}`.


El código que hemos representado anteriormente para poder concatenar cadenas quedaría, mediante en uso de plantillas en cadenas de texto, de la siguiente manera:


```javascript
let nombre = "Víctor";
let saludo = `Hola, ${nombre}!`;
```


## El objeto String


En [Javascript](https://www.manualweb.net/javascript/), además del tipo de cadena primitivo, existe el objeto [`String`](https://www.w3api.com/Javascript/String/). Así podremos definir cadenas de texto mediante este objeto, y lo que es más interesante, podremos manipularlas mediante sus propiedades y métodos.


Así podemos crear un [objeto String](http://www.w3api.com/javascript/String) de la siguiente forma:


```javascript
let cadena = new String("cadena de texto");
```


> Es importante saber que si aplicamos el operador `typeof` sobre un tipo de dato primitivo cadena nos devolverá “string”. Pero silo hacemos mediante un objeto [`String`](https://www.w3api.com/Javascript/String/), nos devolverá “object”


## Tamaño de una cadena de texto


El objeto [`String`](https://www.w3api.com/Javascript/String/) tiene una propiedad llamada [`.length`](https://www.w3api.com/Javascript/String/length) que nos devuelve el tamaño de la cadena de texto. Su sintaxis es la siguiente:


```javascript
.length
```


De esta forma podríamos mostrar el tamaño de una cadena por consola mediante el siguiente código:


```javascript
let cadena = "Soy una cadena";
console.log(`El tamaño de ${cadena} es de ${cadena.length}`);
```

