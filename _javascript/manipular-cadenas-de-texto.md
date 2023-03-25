---
title: Manipular Cadenas de Texto
permalink: /javascript/manipular-cadenas-de-texto/
excerpt: "El objeto String nos permite manipular cadenas de texto en Javascript. Podremos concatenar cadenas, dividirlas, extraer una parte de la cadena o reemplazar contenido."
tags: [cadena_texto,concat,fromcharcode,fromcodepoint,split,slice,substring,indexof,replace,replaceall,raw]
image:
	path: /img/covers/javascript-cover.jpg
---

Si queremos manipular cadenas de texto en [Javascript](https://www.manualweb.net/javascript/), el objeto [`String`](https://www.w3api.com/Javascript/String/) nos permite realizar una serie de operaciones:

- Concatenar Cadenas
- Dividir Cadenas
- Extraer Cadenas
- Reemplazar Contenido
- Trabajar Contenido en Bruto

## Concatenar cadenas


Una de las cosas que podemos hacer al tener más de una cadena en [Javascript](https://www.manualweb.net/javascript/) es concatenar el contenido de la cadena con otra. Es decir obtener una cadena nueva a partir de dos o más cadenas.


De esta forma para poder concatenar cadenas en [Javascript](https://www.manualweb.net/javascript/)  disponemos de los siguientes métodos en el objeto [`String`](https://www.w3api.com/Javascript/String/).

- [`concat(cadena1,cadena2,...cadenaN)`](https://www.w3api.com/Javascript/String/concat), nos permite concatenar las cadenas pasadas por parámetro a la cadena actual.
- [`fromCharCode(codigoUnicode1, codigoUnicode2,...codigoUnicodeN)`](https://www.w3api.com/Javascript/String/fromCharCode), nos permite construir una cadena a partir de los códigos Unicode pasados por parámetro.
- [`fromCodePoint(secuenciaCodigo1, secuenciaCodigo2,...secuenciaCodigoN)`](https://www.w3api.com/Javascript/String/fromCodePoint), nos permite construir una cadena a partir de las secuencias de código pasadas por parámetro.

Un ejemplo de concatenación de cadenas sería el siguiente:


```javascript
let nombre = "Manual Web";
let saludo = "Hola ".concat(nombre);
console.log(saludo);  // Nos mostraría "Hola Manual Web"
```


Si queremos manipular las cadenas con los códigos de carácter podemos realizar lo siguiente:


```javascript
let saludo = String.fromCharCode(72,111,108,97);
console.log(saludo);  // Nos mostraría "hola"
```


Y si queremos el concatenar textos con emojis podemos recurrir a su código Unicode.


```javascript
let frase = "Me gusta mucho ".concat(String.fromCodePoint(0x1F602));
console.log(frase); // Nos mostraría "Me gusta mucho 😂"
```


## Dividir Cadenas


En el caso de que queramos dividir el contenido tenemos el método [`split()`](https://www.w3api.com/Javascript/String/split) del objeto [`String`](https://www.w3api.com/Javascript/String/).

- [`split(separador)`](https://www.w3api.com/Javascript/String/split), dada una cadena crea una división de los elementos atendiendo al separador pasado como parámetro. Nos devuelve un array con las cadenas de resultado.

Así el uso de [`split()`](https://www.w3api.com/Javascript/String/split) es muy extendido cuando tenemos una cadena con elementos delimitados por un separador y queremos generar una lista. Por ejemplo podríamos tener la siguiente división de cadenas.


```javascript
let cadena='casa,arbol,jardín,pelota,columpio';
let elementos = cadena.split(',');

for (elemento in elementos)
  console.log(elementos[elemento]);
```


## Extraer Cadenas


Para poder extraer cadenas en [Javascript](https://www.manualweb.net/javascript/)  para obtener nuevas cadenas tenemos varias alternativas madiante el objeto [`String`](https://www.w3api.com/Javascript/String/):

- [`slice(inicio,fin)`](https://www.w3api.com/Javascript/String/slice), extrae una parte de la cadena y genera una nueva. Lo que hace es extraer de inicio a fin. Pero estos índices pueden ser negativos. En este caso el valor negativo es igual a la longitud de la cadena menos el número negativo.
- [`substring(indiceInicio,indiceFin)`](https://www.w3api.com/Javascript/String/substring), en este caso extrae la cadena desde el índice inicio hasta el índice final. Siendo siempre índices positivos.

Así, si queremos extraer los 6 últimos caracteres, menos el último podríamos realizarlo de la siguiente forma mediante [`slice()`](https://www.w3api.com/Javascript/String/slice):


```javascript
let cadena = 'Yo soy una frase.';
console.log(cadena.slice(-6,-1));
```


Y si queremos los 6 primeros podemos utilizar [`substring()`](https://www.w3api.com/Javascript/String/substring): 


```javascript
let cadena = 'Yo soy una frase.';
console.log(cadena.slice(0,6));
```


Además podemos combinar el método [`substring()`](https://www.w3api.com/Javascript/String/substring) con el método [`indexOf()`](https://www.w3api.com/Javascript/String/indexOf) para para poder calcular el número de ocurrencias de una palabra dentro de una frase.


```javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
let palabra = "caminos";
let contador = 0;

while (frase.indexOf(palabra)>0) {
  contador++;
  frase = frase.substring(frase.indexOf(palabra)+palabra.length);
}

console.log("La palabra " + palabra + " aparece " + contador + " veces.");
```


## Reemplazar contenido


El objeto [`String`](https://www.w3api.com/Javascript/String/) nos ofrece un par de métodos para poder reemplazar contenido de una cadena. En este caso la cadena de búsqueda puede ser una cadena normal o una expresión regular.

- [`replace(cadena|expresión,nueva_cadena)`](https://www.w3api.com/Javascript/String/replace), reemplaza **la primera coincidencia** de cadena o de la expresión regular por el valor nueva_cadena.
- [`replaceAll(cadena|expresión,nueva_cadena)`](https://www.w3api.com/Javascript/String/replaceAll), reemplaza **todas las coincidencias** de cadena o de la expresión regular por el valor de nueva_cadena.

Así podremos hacer una búsqueda y reemplazo de un elemento utilizando el método [`replace()`](https://www.w3api.com/Javascript/String/replace) con una cadena de texto.


```javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
console.log(frase);

frase = frase.replace("Estonia","Lituania");
console.log(frase);
```


O utilizando el método [`replace()`](https://www.w3api.com/Javascript/String/replace) con una expresión regular:


```javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
console.log(frase);

frase = frase.replace(/I[A-zñ]*/,"Descartado");
console.log(frase);
```


Si queremos reemplazar todas la coincidencias utilizaremos el método [`replaceAll()`](https://www.w3api.com/Javascript/String/replaceAll) mediante una cadena:


```javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
console.log(frase);

frase = frase.replaceAll("caminos","puentes");
console.log(frase);
```


O bien el método [`replaceAll()`](https://www.w3api.com/Javascript/String/replaceAll) mediante una expresión regular:


```javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
console.log(frase);

frase = frase.replaceAll(/I[A-zñ]*/gm,"Descartado");
console.log(frase);
```


> En el caso de que utilicemos [`replaceAll()`](https://www.w3api.com/Javascript/String/replaceAll) mediante una expresión regular deberemos de incluir el modificador `g` que aplica la búsqueda global. Si utilizamos el modificador `g` en el método [`replace()`](https://www.w3api.com/Javascript/String/replace) funcionará igual que el método [`replaceAll()`](https://www.w3api.com/Javascript/String/replaceAll)


## Trabajar contenido en bruto


Ya vimos en el capítulo de [literales en Javascript](https://manualweb.net/javascript/literales-javascript/) que las cadenas de texto pueden tener un conjunto de caracteres especiales para crear tabulaciones, saltos de línea, incluir comillas,…


En ciertas ocasiones puede ser complicado el trabajar con estos caracteres especiales y es por ello que tenemos el método estático [`raw()`](https://www.w3api.com/Javascript/String/raw). El método [`raw()`](https://www.w3api.com/Javascript/String/raw) lo que nos permite es trabajar con la cadena de caracteres sin interpretar estos caracteres. Por lo que nos puede ser útil si manejamos estos caracteres en la cadena.


Por ejemplo imaginemos que estamos trabajando con rutas de ficheros dónde nos encontramos con barras invertidas. Si queremos montar una cade deberíamos de cargarla de la siguiente manera:


```javascript
let doc = 'c:\documento\nuevo\notacion.html';
console.log(doc); // Generaria saltos de línea y perderíamos información

doc = 'c:\\documento\\nuevo\\notacion.html';
console.log(doc); // Ya se mostaría bien
```


O bien aprovecharnos del método [`raw()`](https://www.w3api.com/Javascript/String/raw) para realizar la carga con el contenido en bruto sin tener que manipularlo.


```javascript
let doc = String.raw`c:\documento\nuevo\notacion.html`;
console.log(doc); 
```


> Vemos que el método [`raw()`](https://www.w3api.com/Javascript/String/raw) es un método estático, por lo cual le invocamos directamente mediante el objeto [`String`](https://www.w3api.com/Javascript/String/).

