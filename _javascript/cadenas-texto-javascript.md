---
title: Cadenas de texto Javascript
permalink: /javascript/cadenas-texto-javascript/
---

Las cadenas de texto [Javascript][Javascript] son un conjunto de caracteres delimitados por una comilla simple (') o una comilla doble (").

De esta manera:

~~~javascript
'Yo soy una cadena de texto'
"Yo también soy una cadena de texto"
~~~

Tenemos que saber que el conjunto de caracteres de las las cadenas de texto [Javascript][Javascript] se pueden manejar mediante índices. De esta manera el primer carácter corresponde a la posición 0 y el último carácter corresponde a la posición tamaño-1.

De esta forma podríamos recorrer los caracteres de una cadena en [Javascript][Javascript] mediante el siguiente código:

~~~javascript
let cadena = "Soy una cadena de texto";
for (x=0;x<cadena.length;x++)
  console.log(cadena[x]);
~~~


## Secuencias de Escape
Hay situaciones en las que deberemos de añadir carácteres especiales dentro de las cadenas de texto. De esta manera podremos añadir

### Valores hexadecimales
Se incorporarán añadiendo `\x` delante del código de escape de la siguiente manera:

~~~javascript
'\xCODIGO_HEXADECIAMAL'
~~~

De esta manera si queremos incluir el código hexadecimal del &copy; que es el A9 escribiremos lo siguiente:

~~~javascript
console.log('\xA9');
~~~

### Valores unicode
Se incorporarán añadiendo `\u` delante del código de escape de la siguiente manera:

~~~javascript
'\uCODIGO_UNICODE'
~~~

De esta manera si queremos incluir un smile sonriente en el código, el código unicode del 😀 es el '\uD83D\uDE00' y escribiremos lo siguiente:

~~~javascript
console.log('\uD83D\uDE00');
~~~


[Javascript]: {{site.url}}/javascript