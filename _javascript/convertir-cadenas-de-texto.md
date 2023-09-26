---
title: Convertir Cadenas de Texto
permalink: /javascript/convertir-cadenas-de-texto/
excerpt: "Podemos convertir cadenas de texto en Javascript alterando su contenido. Así podemos convertirlas a mayúsculas y minúsculas, podemos normalizar sus caracteres, podemos hacer que se repita su contenido o podemos eliminar espacios en blanco."
tags: [cadena_texto,tolowercase,touppercase,normalize,repeat,trim,trimstart,trimend,string]
image:
  path: /img/covers/javascript-cover.jpg
---

El objeto [`String`](https://www.w3api.com/Javascript/String/) también nos da la capacidad de convertir el contenido de las cadenas de texto [Javascript](https://www.manualweb.net/javascript/). Así nos ofrece una serie de métodos como:

- [`toLowerCase()`](https://www.w3api.com/Javascript/String/toLocaleLowerCase), que convierte la cadena a minúsculas.
- [`toUpperCase()`](https://www.w3api.com/Javascript/String/toLocaleUpperCase), que convierte la cadena a mayúsculas
- [`normalize()`](https://www.w3api.com/Javascript/String/normalize), devuelve normalizados los códigos Unicode de la cadena para que puedan ser analizadas.
- [`repeat()`](https://www.w3api.com/Javascript/String/repeat), repite la cadena tantas veces como indiquemos como parámetro al método.
- [`trim()`](https://www.w3api.com/Javascript/String/trim), [`trimStart()`](https://www.w3api.com/Javascript/String/trimStart/), [`trimEnd()`](https://www.w3api.com/Javascript/String/trimEnd/), eliminan los espacios en blanco del principio y final de cadena.
- [`padStart()`](https://www.w3api.com/Javascript/String/padStart), [`padEnd()`](https://www.w3api.com/Javascript/String/padEnd), para añadir contenido al principio o al final de la cadena

## Mayúsculas y Minúsculas


De esta manera podemos convertir una cadena a minúsculas mediante el método [`toLowerCase()`](https://www.w3api.com/Javascript/String/toLocaleLowerCase) de la siguiente manera:


```javascript
let cadena = "Soy una CADENA de TEXTO";
cadena = cadena.toLowerCase();
console.log(cadena);
```


O bien podemos convertirlo a mayúsculas, en este caso mediante el método [`toUpperCase()`](https://www.w3api.com/Javascript/String/toLocaleUpperCase), con las siguientes líneas de código:


```javascript
let cadena = "Soy una CADENA de TEXTO";
cadena = cadena.toUpperCase();
console.log(cadena);
```


## Repetir Cadenas


Si queremos repetir el contenido de una cadena en [Javascript](https://www.manualweb.net/javascript/) podemos acudir al método [`repeat()`](https://www.w3api.com/Javascript/String/repeat) e indicar las veces que se debe de repetir la cadena:


```javascript
let cadena = "Hola ";
console.log(cadena.repeat(2)); // Mostrará "Hola Hola "
```


## Eliminar Espacios en Blanco


En el caso de que haya que eliminar los espacios el método [`trim()`](https://www.w3api.com/Javascript/String/trim) nos eliminará los espacios de principio y del final:


```javascript
let cadena_con_espacios = "  soy una cadena con espacios al inicio y fin      ";
console.log("La cadena tiene un tamaño de :" + cadena_con_espacios.length);

let cadena_sin_espacios = cadena_con_espacios.trim();
console.log("La cadena tiene un tamaño de :" + cadena_sin_espacios.length);
```


En el caso de que solo queramos eliminar los espacios al principio de la cadena tenemos el método [`trimStart()`](https://www.w3api.com/Javascript/String/trimStart/):


```javascript
let cadena_con_espacios = "  soy una cadena con espacios al inicio y fin      ";
console.log(cadena_con_espacios);

let cadena_sin_espacios_inicio = cadena_con_espacios.trimStart();
console.log(cadena_sin_espacios_inicio);
```


> El método [`trimStart()`](https://www.w3api.com/Javascript/String/trimStart/) tiene un alias que es [`trimLeft()`](https://www.w3api.com/Javascript/String/trimStart/) que ejecuta la misma funcionalidad.


Y si solo queremos eliminar los espacios al final de la cadena nos apoyamos en el método [`trimEnd()`](https://www.w3api.com/Javascript/String/trimEnd/)


```javascript
let cadena_con_espacios = "  soy una cadena con espacios al inicio y fin      ";
console.log(cadena_con_espacios);

let cadena_sin_espacios_fin = cadena_con_espacios.trimEnd();
console.log(cadena_sin_espacios_fin);
```


> En [Javascript](https://www.manualweb.net/javascript/), al igual que le sucede al método [`trimStart()`](https://www.w3api.com/Javascript/String/trimStart/) con su alias [`trimLeft()`](https://www.w3api.com/Javascript/String/trimStart/), el método [`trimEnd()`](https://www.w3api.com/Javascript/String/trimEnd/) tiene el alias [`trimRight()`](https://www.w3api.com/Javascript/String/trimEnd/) con la misma funcionalidad.


## Normalizar Cadenas


Con una cosa que tenemos que tener cuidado en [Javascript](https://www.manualweb.net/javascript/) es cuándo utilizamos cadenas en Unicode. Ya que dos textos que al principio nos pueden parecer iguales no lo son. Así que es bueno que si trabajamos con cadenas en Unicode utilicemos el método [`normalize()`](https://www.w3api.com/Javascript/String/normalize), sobre todo si intentamos compararlas.


```javascript
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
```


## Rellenar Contenido


Otra capacidad interesante del objeto [`String`](https://www.w3api.com/Javascript/String/) es la posibilidad de añadir o rellenar contenido al principio o al final de una cadena de texto en [Javascript](https://www.manualweb.net/javascript/). Es útil si tenemos la necesidad de que una cadena tenga un tamaño concreto y siempre aparezcan caracteres.


Por ejemplo, si tenemos la variable nombre, y queremos que esta siempre tenga un tamaño de 15 caracteres, podemos hacer lo siguiente:


```javascript
let nombre = "Víctor";
console.log(`Variable de tamaño 15 con relleno al final "${nombre.padEnd(15,' ')}"`);
console.log(`Variable de tamaño 15 con relleno al principio "${nombre.padStart(15,' ')}"`);
```


Suele ser especialmente útil cuando enviamos información a sistemas, sobre todo Mainframe, que necesitan que el tamaño de la cadena siempre sea fijo.

