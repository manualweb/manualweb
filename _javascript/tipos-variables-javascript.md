---
title: Tipos Variables Javascript
date: 2023-02-21
last_modified_at: 2023-02-21
permalink: /javascript/tipos-variables-javascript/
excerpt: "Existen 9 tipos variables javascript: Boolean, null, undefined, Number, BigInt, String, Symbol, Object y Function."
tags: [variables,typeof,boolean,null,undefined,number,bigint,string,symbol,object,function]
image:
  path: /img/covers/javascript-cover.jpg
---

Sobre las variables podemos definir **9 tipos variables** [**Javascript**](https://www.manualweb.net/javascript/) que son los tipos básicos del lenguaje:

- [`Boolean`](https://www.w3api.com/Javascript/Boolean/), variables que puedan contener un valor de verdadero o falso. (_true_ o _false_).
- `null`, en el caso de que la variable no tome ningún valor.
- `undefined`, cuando la variable no ha sido inicializada tiene un valor indefinido.
- [`Number`](https://www.w3api.com/Javascript/Number/), para los números enteros o decimales. (8 o 3.1416)
- [`BigInt`](https://www.w3api.com/Javascript/BigInt/),  es un tipo para almacenar números grandes más allá del tamaño de [`Number`](https://www.w3api.com/Javascript/Number/).
- [`String`](http://www.w3api.com/Javascript/String/), para las cadenas de texto. (“Soy una cadena”)
- [`Symbol`](https://www.w3api.com/Javascript/Symbol/), para valores que sean únicos e inmutables.
- [`Object`](https://www.w3api.com/Javascript/Object/), para cuando la variable contiene un objeto.
- `Function`, podremos asignar a una variable una función.

> El **tipo de dato de la variable se calcula atendiendo al valor que le asignemos a dicha variable**. El **tipo de una variable puede cambiar a lo largo de la vida de un programa** [Javascript](https://www.manualweb.net/javascript/) atendiendo a los valores que se le vayan asignando.


## Conversiones Dinámicas


[Javascript](https://www.manualweb.net/javascript/) es un lenguaje de **tipado dinámico**, es decir que **no hace falta definir el tipo de una variable**. Ya que la variable **recibe el tipo en el momento que se le asigna un valor**.


```javascript
let mivariable = 'Hola';
```


Es en este primer momento, cuando la variable recibe un valor, cuando se le asigna el tipo. En este caso, al asignarle una cadena la variable se convierte en el tipo [`String`](http://www.w3api.com/Javascript/String/).


En el caso de que asignemos a la variable un nuevo valor, la variable cambiará automáticamente de tipo.


```javascript
mivariable = 5;
```


En este momento, al asignar un número, la variable se convierte en tipo [`Number`](https://www.w3api.com/Javascript/Number/).


## Conocer el tipo de una variable Javascript


Con las conversiones dinámicas el tipo de la variable irá cambiando, por lo que será necesario en ciertos momentos saber el tipo de una variable [Javascript](https://www.manualweb.net/javascript/) en un determinado momento.


Para ello tenemos el operador `typeof` cuya estructura es la siguiente:


```javascript
typeof operando;
```


Es decir, simplemente tendremos que poner `typeof` y la variable de la que queremos saber su tipo. El valor que devuelve será una cadena de texto atendiendo al tipo de variable. Siendo los valores los siguientes:

- [`Boolean`](https://www.w3api.com/Javascript/Boolean/) - “boolean”
- `null` - “object”
- `undefined` - “undefined”
- [`Number`](https://www.w3api.com/Javascript/Number/) - “number”
- [`BigInt`](https://www.w3api.com/Javascript/BigInt/) - “bigint”
- [`String`](http://www.w3api.com/Javascript/String/) -  “string”
- [`Symbol`](https://www.w3api.com/Javascript/Symbol/) - “symbol”
- [`Object`](https://www.w3api.com/Javascript/Object/) - “object”
- `Function` - “function”

## Convertir Números y Cadenas


### Operador +


El operador `+` se puede utilizar entre dos variables de tipo [`String`](http://www.w3api.com/Javascript/String/) realizando una **concatenación de cadenas**. De esta manera podríamos tener el siguiente código fuente en [Javascript](https://www.manualweb.net/javascript/).


```javascript
let c1 = 'Hola ';
let c2 = 'Mundo';
console.log(c1 + c2);
```


De igual manera podemos utilizar el operador `+` entre un [`String`](http://www.w3api.com/Javascript/String/) y un [`Number`](https://www.w3api.com/Javascript/Number/). El resultado será el de concatenar las cadena y el número obteniendo una nuevo [`String`](http://www.w3api.com/Javascript/String/).


```javascript
let cadena = '123';
let numero = 4;
console.log(cadena + numero); // '1234'
```


Si bien, esto solo funciona con el operador `+`, ya que si utilizamos otro operador matemático entre un [`String`](http://www.w3api.com/Javascript/String/) y un [`Number`](https://www.w3api.com/Javascript/Number/) lo que obtendremos será la operación matemática.


```javascript
let cadena = '123';
let numero = 4;
console.log(cadena - numero); // 119
```


Así, podríamos sumar una [`String`](http://www.w3api.com/Javascript/String/) y un [`Number`](https://www.w3api.com/Javascript/Number/) si lo que hacemos antes es una resta de un valor 0. Funciona, aunque sea algo rebuscado.


```javascript
let cadena = '123';
let numero = 4;
console.log(cadena - 0 + numero);
```


### Convertir cadenas a números: parseInt() y parseFloat()


Al manejar cadenas, bien si es por definición de la variable, o bien si es por que le hemos pedido al usuario un valor por consola mediante [`prompt()`](https://www.w3api.com/DOM/Window/prompt/), nos será muy útil el convertir dichas variables a números, si es que tenemos que operar con ellas.


Para convertir una cadena a un número en [Javascript](https://www.manualweb.net/javascript/) podemos apoyarnos en las funciones [`parseInt()`](https://w3api.com/Javascript/Number/parseInt/) y [`parseFloat()`](https://w3api.com/Javascript/Number/parseFloat). Ya sea para convertirlo a un entero o a un decimal.


```javascript
let c1 = prompt('Dime el primer número?');
let c2 = prompt('Dime el segundo número?');

console.log(c1 + c2);
console.log(parseInt(c1) + parseInt(c2));
```


Las funciones [`parseInt()`](https://w3api.com/Javascript/Number/parseInt/) y [`parseFloat()`](https://w3api.com/Javascript/Number/parseFloat) reciben un segundo valor que nos permite indicar la base del número al que vamos a convertir. Es decir, si queremos que sea un binario, un hexadecimal o en base 10.


La sintaxis de estos métodos es:


```javascript
parseInt(string, radix);
parseFloat(string, radix);
```


Así podremos convertir una cadena de texto en un número binario de la siguiente forma:


```javascript
let cadena = '1100';
console.log(parseInt(cadena,2));
```


### Convertir cadenas a números: operador unario +


Otra forma de convertir una cadena a un número es mediante el operador unario `+`. Es decir, anteponiendo el operador `+` a la variable a la cual queremos convertir de [`String`](http://www.w3api.com/Javascript/String/) a [`Number`](https://www.w3api.com/Javascript/Number/).


Así podríamos tener el siguiente código:


```javascript
let c1 = prompt('Dime el primer número?');
let c2 = prompt('Dime el segundo número?');

console.log(+c1 + +c2);
```

