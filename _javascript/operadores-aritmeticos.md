---
title: Operadores Aritméticos
permalink: /javascript/operadores-aritmeticos/
excerpt: "Los operadores aritméticos en Javascript son aquellos que toman dos operandos numéricos y ejecutan la operación del operador."
tags: [operadores,operador_aritmético,suma,resta,multiplicación,división,resto,potencia]
image:
  path: /img/covers/javascript-cover.jpg
---

Los **operadores aritméticos en** [**Javascript**](https://www.manualweb.net/javascript/) son aquellos que toman dos operandos numéricos y ejecutan la operación del operador.


De esta forma podremos realizar cualquier operación matemática sencilla mediante los **operadores aritméticos en** [**Javascript**](https://www.manualweb.net/javascript/)**.**


## Operadores Aritméticos Binarios


Dentro de los operadores aritméticos binarios en [Javascript](https://www.manualweb.net/javascript/) podremos sumar dos variables mediante el operador `+` de la siguiente forma:


```javascript
let x = 10;
let y = 5;

console.log(x+y); // Nos devolvería valor de 15
```


Si lo que queremos es realizar una resta de dos variables utilizamos el operador `-` de la siguiente forma:


```javascript
let x = 7;
let y = 5;

console.log(x-y); // Nos devolvería valor de 2
```


En el caso de necesitar realizar una operación nos apoyamos en el operador `*` como vemos en el siguiente código:


```javascript
let x = 7;
let y = 6;

console.log(x*y); // Nos devolvería valor de 42
```


Para las divisiones tenemos el operador / el cual podemos utilizar de la siguiente manera:


```javascript
let x = 8;
let y = 4;

console.log(x/y); // Nos devolvería valor de 2
```


En el caso de que la división tenga un resto y queramos saber su valor tenemos el operador módulo `%`. Así podemos ver cómo funciona


```javascript
let x = 7;
let y = 5;

console.log(x%y); // Nos devolvería valor 2
```


Y por último podemos obtener la potencia de dos variables mediante el operador `**` de la siguiente manera:


```javascript
let x = 3;
let y = 2;

console.log(x**y); // Nos devolvería valor 9
```


## Operadores Aritméticos Unarios


Si pasamos a los operadores aritméticos unarios en en [Javascript](https://www.manualweb.net/javascript/) tenemos de varios tipos. En primer lugar aquellos que nos incrementan o decrementan en una unidad el valor asignado a la variable.


En este caso es importante saber si el operador va delante o detrás. Ya que dependiendo de la posición que ocupe y la operación en la que se encuentre tendrá un valor u otro. De esta manera, **si va delante del operando**, primero se ejecuta el operador y luego la operación que lo contiene.


Esto se puede ver en el siguiente código para un incremento:


```javascript
let numero = 2;
console.log(++numero); // Mostrará un 3
```


O este otro código para el decremento:


```javascript
let numero = 2;
console.log(--numero); // Mostrará un 1
```


Pero, si el operador va detrás del operado, primero se ejecuta la operación que contiene a nuestra variable y luego se incrementará o decrementara el valor.


Lo podemos comprobar con el siguiente código:


```javascript
let numero = 2;
console.log(numero++); // Mostrará un 2
console.log(numero);   // Mostrará un 3
```


Y de igual manera para el decremento:


```javascript
let numero = 2;
console.log(numero--); // Mostrará un 2
console.log(numero);   // Mostrará un 1
```


Tenemos dos operadores aritméticos unarios que nos permiten cambiar el signo o tipo de la variable. De este modo podemos convertir una variable en un valor negativo simplemente anteponiendo el operador `-` delante de la variable.


```javascript
let numero = 2;
console.log(-numero); // Mostrará un -2
```


En el caso del operador `+` podremos utilizar para manipular el tipo de la variable, de tal manera que anteponiéndole a la variable la convertimos en un [tipo de variable Javascript numérico](https://www.manualweb.net/javascript/tipos-variables-javascript/).


Lo podremos comprobar mediante el siguiente código y apoyándonos sobre el operador `typeof` que nos indica el tipo de variable que estamos utilizando.


```javascript
let x = "5"
console.log(typeof x); "string"
console.log(typeof +x); "number"
```

