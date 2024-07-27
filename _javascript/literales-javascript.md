---
title: Literales Javascript
date: 2023-02-21
last_modified_at: 2023-02-21
permalink: /javascript/literales-javascript/
excerpt: "Los literales Javascript que tenemos en el lenguaje son: arrays, booleanos, números en coma flotante, enteros, objetos, expresiones regulares y cadenas."
tags: [literales,array,boolean,enteros,coma_flotante,orientado_objetos,expresiones_regulares,cadenas]
image:
  path: /img/covers/javascript-cover.jpg
---

Los literales [Javascript](https://www.manualweb.net/javascript/) son los valores que se les puede asignar a una variable. Dentro de [Javascript](https://www.manualweb.net/javascript/) tenemos los siguientes **tipos de literales**:

- Arrays
- Booleanos
- Números coma flotante
- Enteros
- Objetos
- Expresiones Regulares
- Cadenas

## Literales Array


Para representar un **array** utilizamos una **lista de elementos delimitada por corchetes ([]) y con los elementos separados por comas**. El literal que representa al array es un objeto [`Array`](https://www.w3api.com/Javascript/Array/) por si mismo, por lo cual nos servirá para inicializar un array.


De esta forma podríamos tener una lista de colores mediante un literal de array de la siguiente forma:


```javascript
let colores = ['rojo','verde','azul','amarillo'];
```


En el caso de que queramos representar un elemento vacío dentro de un array (en realidad será un tipo de dato `undefined`) lo que haremos será poner una coma adicional.


```javascript
let colores = ['rojo','verde',,'azul','amarillo'];
```


> Si la coma se pone al final no se cuenta como elemento.


Mientras que en el primer ejemplo teníamos 4 elementos en el array, en este segundo código al haber ingresado una coma adicional tendremos 5 elementos, donde el tercero tendrá un valor de `undefined`.


## Literales Booleanos


Los valores literales [Javascript](https://www.manualweb.net/javascript/) que se le pueden asignar a una variable de tipo [`Boolean`](https://www.w3api.com/Javascript/Boolean/) son `true` para representar los casos verdaderos y `false` para representar los casos falsos.


## Literales Numéricos


Los números enteros se pueden representar en:

- **Base 10**, en este caso el literal numérico es una secuencia de números que pueden o no empezar por 0.
- **Hexadecimal (base 16)**, este literal empezará por _0x_ o _0X_. Los siguientes caracteres podrán ser del _0_ al _7_ y las letras _A_ a _F_.
- **Octal (base 8)**, este literal empezará por _0o_ o _0O_ seguido de números del _0_ al _7_.
- **Binarios (base 2)**, estos literales empezarán por _0b_ o _0B_ seguido por una secuencia de números _0_ o _1_.

Así podríamos tener los siguientes ejemplos de literales numéricos:


```javascript
// Entero
let n1 = 12;

// Binario
let n2 = 0B1100;

// Hexadecimal
let n3 = 0XC;

// Octal
let n4 = 0O14;
```


## Literales coma flotante


Los literales [Javascript](https://www.manualweb.net/javascript/) coma flotante sSon aquellos que se utilizan para representar decimales. Un literal coma flotante puede tener las siguientes partes:

- Símbolo positivo (+) o negativo (-).
- Punto como separador decimal (.)
- Valor exponencial representado mediante una letra E.

Así podríamos tener los siguiente literales coma flotante dentro de nuestro programa [Javascript](https://www.manualweb.net/javascript/).


```javascript
let d1 = 3.141586;
let d2 = -3.141516;
let d3 = 3.1E+12;
```


## Literales de Objetos


En el caso que queramos representar a un objeto como un literales [Javascript](https://www.manualweb.net/javascript/) deberemos de saber que este puede tener propiedades o métodos. Tanto las propiedades como los métodos deberán de definirse entre llaves ({}).


En el caso de que queramos definir una propiedad utilizaremos la estructura:


```javascript
propiedad:valor;
```


Y en el caso de los métodos:


```javascript
metodo:funcion(){};
```


Así podríamos definir literales de objetos de la siguiente forma:


```javascript
let o1 = {};

let o2 = {
    nombre:'Manual Web'
};

let o3 = {
    suma(a,b){
        return a+b
    },
    nombre:'A'
};
```


## Literales de expresiones regulares


Si queremos definir una **expresión regular** podemos utilizar un literal de expresión regular que separará la expresión mediante barras (/).


De esta forma podremos tener una literal de expresión regular como el siguiente:


```javascript
let expr = /[A-Z]/console.log(expr.test('Hola'));
```


## Literales cadenas de texto


Si queremos crear una cadena de texto podremos utilizar un literal que contenga los caracteres de la cadena de texto separado por **comillas simples (’)** o por **comillas dobles (")**.


Así que podremos tener el siguiente código:


```javascript
let c1 = "Hola, soy una cadena de texto";
let c2 = 'Hola, soy una cadena de texto';
```


Además desde **ECMAScript 2015** podemos realizar algunas cosas adicionales con los literales de cadenas. Por un lado podemos **interpolar cadenas**, es decir, **crear plantillas que se sustituyan con los valores de otras variables**. Para ello deberemos de limitar las cadenas mediante el símbolo comilla invertida (`).


Los valores para aplantillar se deberán de poner mediante la estructura `${nombre_variable}`.


Podríamos aplantillar un saludo de la siguiente forma:


```javascript
let nombre = 'Víctor';
let saludo = `Hola ${nombre}`;
console.log(saludo);
```


Además el operador de la comilla invertida nos proporciona otra capacidad que es la de poder **tener una cadena de texto en múltiples líneas**.


```javascript
let cadena = `Esto es
una cadena
definida en
varias líneas`;

console.log(cadena);
```


Dentro de las cadenas de texto también podremos utilizar **caracteres especiales**. Para poder utilizar un **carácter especial** deberemos de anteponer la **barra invertida (\)**.


Por ejemplo podemos utilizar el **carácter especial** **\n** para crear un salto de línea o la comilla doble para representarla y no confundirla con el delimitador de la cadena.


```javascript
let c1 = "Esto es una línea \ny esto otra";
let c2 = "Esto es una comilla doble \"";
```


Los **caracteres especiales** que podemos utilizar son:

