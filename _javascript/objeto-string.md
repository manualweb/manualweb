---
title: Objeto String
permalink: /javascript/objeto-string/
---

## Crear un objeto String

Para poder manipular las cadenas de texto, [Javacript][Javacript] nos ofrece el objeto String. De esta manera podemos crear un [objeto String][String] de la siguiente forma:

~~~javascript
let cadena = new String("cadena de texto");
~~~

## Operaciones con el objeto String
Lo bueno del [objeto String][String]g es que nos proporciona una serie de métodos para poder manipular de una forma sencilla las cadenas de texto.

### Tamaño de una cadena de texto
.length

### Buscar caracteres en la cadena
charAt, charCodeAt, codePointAt	Devuelve el caracter o código de caracter en la posición especificada en la cadena.
indexOf, lastIndexOf	Devuelve la posición de la subcadena especificada en la cadena o la última posición de la subcadena especificada, respectivamente.
startsWith, endsWith, includes	Devuelve si o no la cadena comienza, termina o contiene una subcadena especificada.


## Manipular la cadena
concat	Combina el texto de dos cadenas y devuelve una nueva cadena.
fromCharCode, fromCodePoint	Construye una cadena a partir de la secuencia especificada de valores Unicode. Este es un método de la clase String, no una instancia de String.
split	Divide un objeto String en un arreglo de cadenas separando la cadena en subcadenas.
slice	Extrae una sección de una cadena y devuelve una nueva cadena.
substring, substr	Devuelve el subconjunto especificado de la cadena, ya sea especificando los índices inicial y final o el índice inicial y una longitud.


### Usar expresiones regulares
match, matchAll, replace, replaceAll, search	Trabaja con expresiones regulares.

### Convertir contenido de la cadena
toLowerCase, toUpperCase	 Devuelve la cadena en minúsculas o mayúsculas, respectivamente.
normalize	Devuelve la forma de normalización Unicode del valor de la cadena llamada.
repeat	Devuelve una cadena que consta de los elementos del objeto repetidos las veces indicadas.
trim	Recorta los espacios en blanco desde el principio y el final de la cadena



[Javacript]: {{site.url}}/javascript/
[String]: http://www.w3api.com/javascript/String