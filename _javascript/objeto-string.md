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
En el caso de que queramos dividir el contenido tenemos el método `.split()` del objeto `String`.

* `split(separador)`, dada una cadena crea una división de los elementos atendiendo al separador pasado como parámetro. Nos devuelve un array con las cadenas de resultado.

Así el uso de `split` es muy extendido cuando tenemos una cadena con elementos delimitados por un separador y queremos generar una lista. Por ejemplo podríamos tener la siguiente división de cadenas.

~~~javascript
let cadena='casa,arbol,jardín,pelota,columpio';
let elementos = cadena.split(',');
for (elemento in elementos)
  console.log(elementos[elemento]);
~~~

### Extraer cadenas
Para poder extraer cadenas para obtener nuevas cadenas tenemos varias alternativas:

* `slice(inicio,fin)`, extrae una parte de la cadena y genera una nueva. Lo que hace es extraer de inicio a fin. Pero estos índices pueden ser negativos. En este caso el valor negativo es igual a la longitud de la cadena menos el número negativo.
* `substring(indiceInicio,indiceFin)`, en este caso extrae la cadena desde el índice inicio hasta el índice final. Siendo siempre índices positivos.

Así, si queremos extraer los 6 últimos caracteres, menos el último podríamos realizarlo de la siguiente forma mediante `slice()`:

~~~javascript
let cadena = 'Yo soy una frase.';
console.log(cadena.slice(-6,-1));
~~~

Y si queremos los 6 primeros podemos utilizar `substring()`:
~~~javascript
let cadena = 'Yo soy una frase.';
console.log(cadena.slice(0,6));
~~~

Además podemos combinar el método `.substring()` con el método `.indexOf()` para para poder calcular el número de ocurrencias de una palabra dentro de una frase.

~~~javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
let palabra = "caminos";
let contador = 0;

while (frase.indexOf(palabra)>0) {
  contador++;
  frase = frase.substring(frase.indexOf(palabra)+palabra.length);
}

console.log("La palabra " + palabra + " aparece " + contador + " veces.");
~~~


### Búsquedas con expresiones regulares.

* `match(expresion_regular)`, realiza una búsqueda de la expresión regular sobre la cadena y devuelve un array con todas las ocurrencias que esten en la cadena y que cuadren con la expresión regular.
* `matchAll(expresion_regular)`, realiza una búsqueda de la expresión regular sobre la cadena y devuelve un iterador de expresiones regulares dónde cada elemento iterable contiene el valor encontrado, el índice dónde se encontró y la cadena sobre la que se ha buscado.
* `search(expresion_regular)`, realizar una búsqueda de la expresión regular en la cadena y devuelve el primer índice en el que se encuentra la expresión regular. Vendría a ser como el método `indexof()` pero mediante una expresión regular.

De esta forma, una sencilla búsqueda mediante expresiones regulares la podríamos hacer de la siguiente forma con el método `match()`.

~~~javascript
let cadena = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
elementos = cadena.match(/E[A-zñ]*/gm);
console.log(elementos);
for (elemento in elementos)
  console.log(elementos[elemento]);
~~~

Y en el caso de querer recibir más información podemos utilizar el método `matchAll()` y luego iterar sobre los elementos. Vemos que nos ayudamos de una estructura `for...of` para poder recorrer dichos elementos.

~~~javascript
let cadena = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
elementos = cadena.matchAll(/E[A-zñ]*/gm);

for (elemento of elementos)
  console.log("Elemento " + elemento[0] + " en posición " + elemento["index"]);
~~~

Podríamos realizar la implementación de un buscador de palabras mediante expresiones regulares mediante yna combinación del método `search()` y el método `substring`.

~~~javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
let contador = 0;

while (frase.search(/E[A-zñ]*/gm)>0) {
  contador++;
  frase = frase.substring(frase.search(/E[A-zñ]*/gm)+1);
}

console.log("La expresión \"/E[A-zñ]*/gm\" aparece " + contador + " veces.");
~~~


## Reemplazar contenido
El objeto `String` nos ofrece un par de métodos para poder reemplazar contenido de una cadena. En este caso la cadena de búsqueda puede ser una cadena normal o una expresión regular.

* `replace(cadena|expresión,nueva_cadena)`, reemplaza **la primera coincidencia** de cadena o de la expresión regular por el valor nueva_cadena.
* `replaceAll(cadena|expresión,nueva_cadena)`, reemplaza **todas las coincidencias** de cadena o de la expresión regular por el valor de nueva_cadena.


Así podremos hacer una búsqueda y reemplazo de un elemento utilizando el método `replace()` con una cadena de texto.

~~~javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
console.log(frase);

frase = frase.replace("Estonia","Lituania");
console.log(frase);
~~~

O utilizando el método `replace()` con una expresiín regular:

~~~javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
console.log(frase);

frase = frase.replace(/I[A-zñ]*/,"Descartado");
console.log(frase);
~~~

Si queremos reemplazar todas la coincidencias utilizaremos el método `replaceAll()` mediante una cadena:

~~~javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
console.log(frase);

frase = frase.replaceAll("caminos","puentes");
console.log(frase);
~~~

O bien el método `replaceAll()` mediante una expresión regular:


~~~javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
console.log(frase);

frase = frase.replaceAll(/I[A-zñ]*/gm,"Descartado");
console.log(frase);
~~~

> En el caso de que utilicemos `replaceAll()` mediante una expresión regular deberemos de incluir el modificador **g** que aplica la búsqueda global. Si utilizamos el modificador **g** en el método `replace()` funcionará igual que el método `replaceAll()`


### Convertir contenido de la cadena

El objeto `String` también nos da la capacidad de convertir el contenido de las cadenas de texto. Así nos ofrece una serie de métodos como:

* `toLowerCase()`, que convierte la cadena a minúsculas.
* `toUpperCase()`, que convierte la cadena a mayúsuculas
* `normalize()`, devuelve normalizados los códigos Unicode de la cadena para que puedan ser analizadas.
* `repeat()`, repite la cadena tantas veces como indiquemos como parámetro al método.
* `trim()`, elimina los espacios en blanco del principio y final de cadena.


~~~javascript
let cadena = "Soy una CADENA de TEXTO";
cadena = cadena.toLowerCase();
console.log(cadena);
~~~


~~~javascript
let cadena = "Soy una CADENA de TEXTO";
cadena = cadena.toUpperCase();
console.log(cadena);
~~~

~~~javascript
let c1 = 'caf\u00E9';
let c2 = 'cafe\u0301';

console.log(c1);
console.log(c2);

if (c1==c2)
  console.log("Son dos cadenas iguales");
else
  console.log("Son dos cadenas diferentes");

c1 = c1.normalize();
c2 = c2.normalize();

console.log(c1);
console.log(c2);

if (c1==c2)
  console.log("Son dos cadenas iguales");
else
  console.log("Son dos cadenas diferentes");
~~~

~~~javascript
let cadena = "Hola ";
console.log(cadena.repeat(2));
~~~

~~~javascript
let cadena_con_espacios = "  soy una cadena con espacios al inicio y fin      ";
console.log("La cadena tiene un tamaño de :" + cadena_con_espacios.length);
let cadena_sin_espacios = cadena_con_espacios.trim();
console.log("La cadena tiene un tamaño de :" + cadena_sin_espacios.length);
~~~


[Javacript]: {{site.url}}/javascript/
[String]: http://www.w3api.com/javascript/String