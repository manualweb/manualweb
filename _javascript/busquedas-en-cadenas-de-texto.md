---
title: Búsquedas en Cadenas de Texto
permalink: /javascript/busquedas-en-cadenas-de-texto/
excerpt: "Podemos realizar búsquedas en cadenas de texto Javascript buscando caracteres, sub-cadenas de texto, en el inicio y final de la cadena o bien mediante expresiones regulares."
tags: [charat,charcodeat,codepointat,búsquedas,indexof,lastindexof,startswith,endswith,match,matchall,search]
image:
  path: /img/covers/javascript-cover.jpg
---

Una de las cosas que podremos hacer con el objeto [`String`](https://www.w3api.com/Javascript/String/) es el poder realizar búsquedas en cadenas de texto en [Javascript](https://www.manualweb.net/javascript/). Para ello tenemos diferentes alternativas de búsqueda:

- Buscar caracteres en la cadena de texto
- Buscar una sub-cadena dentro de la cadena de texto
- Buscar al principio o al final de la cadena de texto
- Buscar por expresiones regulares

## Buscar caracteres por posición en la cadena


Si lo que nos interesa es buscar contenido dentro de la cadena de texto, [Javascript](https://www.manualweb.net/javascript/) nos ofrece unos cuantos métodos dentro del objeto [`String`](https://www.w3api.com/Javascript/String/).


Por ejemplo podemos buscar un carácter, un código o un código de punto mediante los métodos:

- [`chatAt(indice)`](https://www.w3api.com/Javascript/String/charAt), nos devuelve el carácter situado en la posición pasada como parámetro.
- [`charCodeAt(indice)`](https://www.w3api.com/Javascript/String/charCodeAt), nos devuelve el carácter unicode en la posición pasada como parámetro.
- [`codePointAt()`](https://www.w3api.com/Javascript/String/codePointAt), nos devuelve el código unicode situado en la posición pasada como parámetro.

Así podemos buscar qué carácter hay en la posición 2 de una cadena mediante el siguiente código:


```javascript
let cadena = "Soy una cadena";
// Mostrará "y" en la consola
console.log(`En la posición 2 está el carácter ${cadena.charAt(2)}`);
```


O podemos recuperar el código o carácter unicode de un smile.


```javascript
let emojis = "😉😂😊";
console.log(`En la posición 2 está el carácter unicode ${emojis.charCodeAt(2)}`);
console.log(`En la posición 2 está el código unicode  ${emojis.codePointAt(2)}`); 
// Devuelve "55357" y "128522"
```


> Ojo que el tamaño de los caracteres UNICODE es de 2, por lo que la anterior cadena tendría un tamaño de 6.


### Buscar una sub-cadena en la cadena


Si en vez de buscar por posición queremos buscar una sub-cadena en [Javascript](https://www.manualweb.net/javascript/) dentro de la cadena tenemos un par de métodos en el objeto [`String`](https://www.w3api.com/Javascript/String/).

- [`indexOf(subcadena,[indiceDesde])`](https://www.w3api.com/Javascript/String/indexOf), busca la primera posición del carácter en la cadena y nos devuelve un número negativo si no se encuentra en la cadena. Podemos pasarle el índice desde el cual queremos empezar la búsqueda.
- [`lastIndexOf(subcadena,[indiceDesde])`](https://www.w3api.com/Javascript/String/lastIndexOf), en este caso busca la última posición del carácter en la cadena y nos devuelve negativo si no lo encuentra en la cadena. Podemos pasarle el índice desde el cual queremos empezar la búsqueda.

Así podemos tener el siguiente código que nos busque una sub-cadena dentro de una frase:


```javascript
let frase = "En un lugar de la Mancha";
indice = frase.indexOf("Mancha");
if (indice > 0)
  console.log(`El texto está en la posición ${indice}`);
else
  console.log("El texto buscado no está en la frase");
```


Y si el texto buscado aparece varias veces y queremos saber la última vez que nos aparece podríamos tener el siguiente código:


```javascript
let frase = "Todo pasa y todo queda, pero lo nuestro es pasar haciendo caminos, caminos sobre la mar";
palabra = "caminos";
indice = frase.lastIndexOf(palabra);

if (indice > 0)
  console.log(`La última vez que aparece la palabra "${palabra}" es en la posición ${indice}`);
else
  console.log(`La palabra "${palabra}" no aparece en la frase`);
```


### Comprobar el inicio y fin de la cadena


En el caso de querer comprobar si una cadena [Javascript](https://www.manualweb.net/javascript/) empieza o termina de una u otra forma tenemos los siguientes métodos en el objeto [`String`](https://www.w3api.com/Javascript/String/).

- [`startsWith(subcadena,[indiceDesde])`](https://www.w3api.com/Javascript/String/startsWith), comprueba que la cadena empieza por la sub-cadena. Podemos indicarle mediante el parámetro `indiceDesde` la posición de la cadena en la que empezaría la búsqueda.
- [`endsWith(subcadena,[indiceDesde])`](https://www.w3api.com/Javascript/String/endsWith), comprueba que la cadena finaliza por la sub-cadena. Podemos indicarle mediante el parámetro `indiceDesde` la posición de la cadena en la que empezaría la búsqueda.

Así podremos comprobar el inicio de una fase de la siguiente forma:


```javascript
let frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor";

if (frase.startsWith("En un lugar de la Mancha"))
  console.log("Eres el Quijote");
else
  console.log("Parace que no eres el Quijote");
```


### Búsquedas con expresiones regulares.


Otra opción más avanzada que tenemos para realizar búsquedas en cadenas de texto dentro de [Javascript](https://www.manualweb.net/javascript/) son las búsquedas con expresiones regulares. Para ello el objeto [`String`](https://www.w3api.com/Javascript/String/) nos ofrece un conjunto de métodos:

- [`match(expresion_regular)`](https://www.w3api.com/Javascript/String/match), realiza una búsqueda de la expresión regular sobre la cadena y devuelve un array con todas las ocurrencias que estén en la cadena y que cuadren con la expresión regular.
- [`matchAll(expresion_regular)`](https://www.w3api.com/Javascript/String/matchAll), realiza una búsqueda de la expresión regular sobre la cadena y devuelve un iterador de expresiones regulares dónde cada elemento iterable contiene el valor encontrado, el índice dónde se encontró y la cadena sobre la que se ha buscado.
- [`search(expresion_regular)`](https://www.w3api.com/Javascript/String/search), realizar una búsqueda de la expresión regular en la cadena y devuelve el primer índice en el que se encuentra la expresión regular. Vendría a ser como el método [`indexof()`](https://www.w3api.com/Javascript/String/indexOf) pero mediante una expresión regular.

De esta forma, una sencilla búsqueda mediante expresiones regulares la podríamos hacer de la siguiente forma con el método [`match(`](https://www.w3api.com/Javascript/String/match)`)`.


```javascript
let cadena = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
elementos = cadena.match(/E[A-zñ]*/gm);
console.log(elementos);

for (elemento in elementos)
  console.log(elementos[elemento]);
```


Por consola veremos lo siguiente:


> 🖥️ España  
> Estonia


Y en el caso de querer recibir más información podemos utilizar el método [`matchAll()`](https://www.w3api.com/Javascript/String/matchAll) y luego iterar sobre los elementos. Vemos que nos ayudamos de una estructura `for...of` para poder recorrer dichos elementos.


```javascript
let cadena = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";
elementos = cadena.matchAll(/E[A-zñ]*/gm);

for (elemento of elementos)
  console.log("Elemento " + elemento[0] + " en posición " + elemento["index"]);
```


En la salida de la consola veremos lo siguiente:


> 🖥️ Elemento España en posición 19  
> Elemento Estonia en posición 27


Podríamos realizar la implementación de un buscador de palabras mediante expresiones regulares mediante y una combinación del método [`search()`](https://www.w3api.com/Javascript/String/search) y el método [`substring()`](https://www.w3api.com/Javascript/String/substring).


```javascript
let frase = "Alemania, Austria, España, Estonia, Italia, Irlanda, Uruguay, Uganda";

let contador = 0;
while (frase.search(/E[A-zñ]*/gm)>0) {
  contador++;
  frase = frase.substring(frase.search(/E[A-zñ]*/gm)+1);
}

console.log("La expresión \"/E[A-zñ]*/gm\" aparece " + contador + " veces.");
```

