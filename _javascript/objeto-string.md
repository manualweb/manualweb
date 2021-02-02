---
title: Objeto String
permalink: /javascript/objeto-string/
---

## Crear un objeto String

Para poder manipular las cadenas de texto, [Javacript][Javacript] nos ofrece el objeto `String`. De esta manera podemos crear un [objeto String][String] de la siguiente forma:

~~~javascript
let cadena = new String("cadena de texto");
~~~

## Operaciones con el objeto String
Lo bueno del `String` es que nos proporciona una serie de métodos para poder manipular de una forma sencilla las cadenas de texto.

### Tamaño de una cadena de texto
El objeto `String` tiene una propiedad llamada `.length` que nos devuelve el tamaño de la cadena de texto. Su sintaxis será:

~~~javascript
.length
~~~

De esta forma podríamos mostrar el tamaño de una cadena por consola mediante el siguiente código:

~~~javascript
let cadena = "Soy una cadena";
console.log("El tamaño de la cadena \"" + cadena + "\" es de "  + cadena.length);
~~~

### Buscar caracteres por posición en la cadena
Si lo que nos interesa es buscar contenido dentro de la cadena de texto, [Javascript][Javascript] nos ofrece unos cuantos métodos dentro del objeto `String`.

Por ejemplo podemos buscar un carácter, un código o un código de punto mediante los métodos:

* `chatAt(indice)`, nos devuelve el carácter situado en la posición pasada como parámetro.
* `charCodeAt(indice)`, nos devuelve el carácter unicode en la posición pasada como parámetro.
* `codePointAt()`, nos devuelve el código unicode situado en la posición pasada como parámetro.

Así podemos buscar qué carácter hay en la posición 2 de una cadena mediante el siguiente código:

~~~javascript
let cadena = "Soy una cadena";
console.log("En la posición 2 está el carácter " + cadena.charAt(2));
// Devuelve "y"
~~~

O podemos recuperar el código o carácter unicode de un smile.

~~~javascript
let emojis = "😉😂😊";
console.log("En la posición 2 está el carácter unicode " + emojis.charCodeAt(2));
console.log("En la posición 2 está el código unicode " + emojis.codePointAt(2));
// Devuelve "55357" y "128522"
~~~

> Ojo que el tamaño de los carácteres UNICODE es de 2, por lo que la anterior cadena tendría un tamaño de 6.

### Buscar subcadena en la cadena
Si en vez de buscar por posición queremos buscar una subcadena dentro de la cadena tenemos un par de métodos en el objeto `String`.

* `indexOf(subcadena,[indiceDesde])`, busca la primera posición del carácter en la cadena y nos devuelve un número negativo si no se encuentra en la cadena. Podemos pasarle el índice desde el cual queremos empezar la búsqueda.
* `lastIndexOf(subcadena,[indiceDesde])`, en este caso busca la última posiciín del carácter en la cadena y nos devuelve negativo si no lo encuentra en la cadena. Podemos pasarle el índice desde el cual queremos empezar la búsqueda.

Así podemos tener el siguiente código que nos busque una subcadena dentro de una frase:

~~~javascript
let frase = "En un lugar de la Mancha";
indice = frase.indexOf("Mancha");
if (indice > 0)
  console.log("El texto está en la posición " + indice);
else 
  console.log("El texto buscado no está en la frase");
~~~

Y si el texto buscado aparece varias veces y queremos saber la última vez que nos aparece podríamos tener el siguiente código:

~~~javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
palabra = "caminos";
indice = frase.lastIndexOf(palabra);
if (indice > 0)
  console.log("La última vez que aparece la palabra \"" + palabra  + "\" es en la posición " + indice);
else 
  console.log("La palabra \"" + palabra  + "\ no aparece en la frase");
~~~

### Comprobar el inicio y fin de la cadena
En el caso de querer comprobar si una cadena empieza o termina de una u otra forma tenemos los siguientes métodos en el objeto `String`.

* `startsWith(subcadena,[indiceDesde])`, comprueba que la cadena empieza por la subcadena. Podemos indicarle mediante el paráemtro `indiceDesde` la posición de la cadena en la que empezaría la búsqueda.
* `endsWith(subcadena,[indiceDesde])`, comprueba que la cadena finaliza por la subcadena. Podemos indicarle mediante el paráemtro `indiceDesde` la posición de la cadena en la que empezaría la búsqueda.

Así podremos comprobar el inicio de una fase de la siguiente forma:

~~~javascript
let frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor";

if (frase.startsWith("En un lugar de la Mancha"))
  console.log("Eres el Quijote");
else
  console.log("Parace que no eres el Quijote");
~~~


## Manipular la cadena >>> En página nueva

### Concatenar cadenas
Una de las cosas que podemos hacer al tener más de una cadena en [Javascript][Javascript] es concatener el contenido de la cadena. Es decir obtener una cadena nueva a partir de dos o más cadenas.

De esta forma para poder concatenar cadenas en [Javascript][Javascript] disponemos de los siguientes métodos en el objeto `String`.

* `concat(cadena1,cadena2,...cadenaN)`, nos permite concatenar las cadenas pasadas por parámetro a la cadena actual.
* `fromCharCode(codigoUnicode1, codigoUnicode2,...codigoUnicodeN)`, nos permite construir una cadena a partir de los códigos Unicode pasados por parámetro.
* `fronCodePoint(secuenciaCodigo1, secuenciaCodigo2,...secuenciaCodigoN)`, nos permite construir una cadena a partir de las secuencias de código pasadas por parámetro.

Un ejemplo de concatenación de cadenas sería el siguiente:

~~~javascript
let nombre = "Manual Web";
let saludo = "Hola ".concat(nombre);
console.log(saludo);
// Nos mostraría "Hola Manual Web"
~~~

Si queremos manipular las cadenas con los códigos de carácter podemos realizar lo siguiente:

~~~javascript
let saludo = String.fromCharCode(72,111,108,97);
console.log(saludo);
// Nos mostraría "hola"
~~~

Y si queremos el concatenar textos con emojis podemos recurrir a su código Unicode.

~~~javascript
let frase = "Me gusta mucho ".concat(String.fromCodePoint(0x1F602));
console.log(frase);
// Nos mostraría "Me gusta mucho 😂"
~~~

### Dividir cadenas



split	Divide un objeto String en un arreglo de cadenas separando la cadena en subcadenas.
slice	Extrae una sección de una cadena y devuelve una nueva cadena.


substring, substr	Devuelve el subconjunto especificado de la cadena, ya sea especificando los índices inicial y final o el índice inicial y una longitud.


Además podemos combinar el método `.substring()` con el método `.indexOf()` para para poder calcular el número de ocurrencias de una palabra dentro de una frase.

~~~javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
let palabra = "caminos";
let contador = 

~~~


### Usar expresiones regulares
match, matchAll, replace, replaceAll, search	Trabaja con expresiones regulares.

### Convertir contenido de la cadena
toLowerCase, toUpperCase	 Devuelve la cadena en minúsculas o mayúsculas, respectivamente.
normalize	Devuelve la forma de normalización Unicode del valor de la cadena llamada.
repeat	Devuelve una cadena que consta de los elementos del objeto repetidos las veces indicadas.
trim	Recorta los espacios en blanco desde el principio y el final de la cadena



[Javacript]: {{site.url}}/javascript/
[String]: http://www.w3api.com/javascript/String