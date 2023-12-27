---
title: Objeto Math
date: 2023-03-24
last_modified_at: 2023-03-24
permalink: /javascript/objeto-math/
excerpt: "El objeto Math en Javascript nos permite, entre otras cosas. calcular potencias, conocer el número PI, cambiar el valor de un número, obtener un valor absoluto o un número aleatorio."
tags: [math,potencia,número_pi,signo,valor_absoluto,redondeo,número_aleatorio]
image:
  path: /img/covers/javascript-cover.jpg
---

El lenguaje [Javascript](https://www.manualweb.net/javascript/) nos ofrece el objeto [`Math`](https://w3api.com/Javascript/Math/) el cual nos permite realizar una serie de operaciones matemáticas con números de forma sencilla. Para ello nos ofrece un conjunto de métodos y constantes que nos facilitan dichas operaciones.


## Potencias


La potencia de un número se consigue multiplicando la **base** por si misma tantas veces como indique el **exponente** y se expresa de la forma:


```undefined
base^{exponente}
```


De esta forma una base de exponente 2 se multiplicará por si misma dos veces.


En [Javascript](https://www.manualweb.net/javascript/) el objeto [`Math`](https://w3api.com/Javascript/Math/) nos ofrece el método [`Math.pow(base,exponente)`](https://www.w3api.com/Javascript/Math/pow), el cual recibe dos parámetros, la base y el exponente, retornando el valor de la potencia.


Por lo tanto, para codificar una potencia de una base de 2 elevado a la potencia de 5 lo expresaríamos de la siguiente forma.


```javascript
console.log(Math.pow(2,5));
```


[A partir de ES20016](https://www.manualweb.net/javascript/historia-de-javascript/#madurez-javascript) aparece el [operador ](https://www.manualweb.net/javascript/operadores-aritmeticos/)[`**`](https://www.manualweb.net/javascript/operadores-aritmeticos/) que viene a realizar la misma operación de cálculo de potencias que [`Math.pow()`](https://www.w3api.com/Javascript/Math/pow)


Así, el anterior código se podría escribir de la siguiente forma:


```javascript
console.log(2 ** 5);
```


Una forma más sencilla de calculas potencias en [Javascript](https://www.manualweb.net/javascript/).


## Número PI


Una propiedad interesante del objeto [`Math`](https://w3api.com/Javascript/Math/) es la propiedad [`Math.PI`](https://www.w3api.com/Javascript/Math/PI) y es que la propiedad [`Math.PI`](https://www.w3api.com/Javascript/Math/PI) representa el valor del número PI (π), es decir 3,14159…


Simplemente nos valdrá con referirnos a la propiedad para obtener su valor.


```javascript
console.log(Math.PI); // 3,14159
```


De esta manera podremos utilizar el valor de PI(π) para calcular cosas como el área de un círculo. y es que recordemos que el área de un círculo a partir de su radio es:


```undefined
area = π*r^{2}
```


Por lo que codificándolo nos quedaría de la siguiente forma:


```javascript
let radio = 2;
let area = Math.PI * Math.pow(radio,2);

console.log(`El área de un círculo de rádio ${radio} es de ${area}`);
```


## Signo


Mediante el método [`Math.sign()`](https://www.w3api.com/Javascript/Math/sign) podemos conocer el signo de un valor pasado como parámetro. De tal manera que el método [`Math.sign()`](https://www.w3api.com/Javascript/Math/sign) devuelve el valor de 1 si el valor es positivo o -1 si el valor es negativo.


> Si pasamos un valor de 0 o de -0 al método [`Math.sign()`](https://www.w3api.com/Javascript/Math/sign), este nos devuelve el valor sin procesar, es decir 0 y -0.


Así podríamos hacer las siguientes comparaciones de signo en [Javascript](https://www.manualweb.net/javascript/):


```javascript
let n1 = 10;
let n2 = -37;
let n3 = 0;

switch (Math.sign(n1)) {
    case 1:
        console.log("Positivo");
        break;
    case -1: 
        console.log("Negativo");
        break;
    default:
        console.log("Has puesto un 0");

}
```


## Redondeando números


Si estamos trabajando con números decimales vamos a necesitar, en ciertas ocasiones, el redondear el número. Para ello, el objeto [`Math`](https://w3api.com/Javascript/Math/) nos ofrece un conjunto de métodos.


Podemos realizar un redondeo simple, de tal manera que obtengamos **el número entero más cercano**, mediante el método [`Math.round()`](https://www.w3api.com/Javascript/Math/round). Es decir, decimales por encima del 5 redondean hacía arriba y decimales por debajo del 5 redondean hacía abajo.


Por lo que podríamos tener este código de redondeo con el método [`Math.round()`](https://www.w3api.com/Javascript/Math/round):


```javascript
let numero = 14.436;
console.log(Math.round(numero)); // 14
```


Pero nos podría interesar redondear de forma superior, es decir, al número más alto de los decimales. Para ello tenemos el método [`Math.ceil()`](https://www.w3api.com/Javascript/Math/ceil). En este caso el código fuente quedaría de la siguiente manera:


```javascript
let numero = 14.436;
console.log(Math.ceil(numero)); // 15
```


O, por el contrario, redondear al número más bajo. Aquí nos da igual el valor que tengan los decimales y lo cerca o lejos que esté el número superior. Para redondear de forma inferior contamos con el método [`Math.floor()`](https://www.w3api.com/Javascript/Math/floor). Al igual que los anteriores dos métodos vemos como codificarlo:


```javascript
let numero = 14.436;
console.log(Math.floor(numero)); // 14
```


También disponemos de la opción de poder redondear con precisión los números decimales. En este caso el método [`Math.fround()`](https://www.w3api.com/Javascript/Math/fround) nos devuelve el _número decimal en 32 bits_ representando que represente el número.


```javascript
let numero 5.05;
console.log(Math.fround(numero)); // 5.050000190734863
```


Hay que tener cuidado ya que la representación en 32 bits puede tener depreciaciones y por eso salen estos números.


La última opción de redondeo que tenemos con el objeto [`Math`](https://w3api.com/Javascript/Math/) es el método [`Math.trunc()`](https://www.w3api.com/Javascript/Math/trunc) el cual directamente **trunca la parte decimal**, independientemente de su valor, y **se queda con la parte entera**.


```javascript
let numero = 14.436;
console.log(Math.trunc(numero)); // 14
```


## Números aleatorios


Si queremos generar números aleatorios tenemos el método [`Math.random()`](https://www.w3api.com/Javascript/Math/random) que genera, cada vez que se invoca, un número aleatorio entre 0 y 1 con 16 posiciones decimales.


Este valor entre 0 y 1 nos sirve para poder generar cualquier número aleatorio. Para ello simplemente tendremos que multiplicar el valor que nos devuelva [`Math.random()`](https://www.w3api.com/Javascript/Math/random) por el valor del número máximo, incrementando en una unidad, del que queramos la aleatoriedad.


De esta manera para sacar un número aleatorio entre 0 y 4


```javascript
aleatorio = Math.random()*5
```


Este código nos devolverá un número aleatorio de tipo decimal, por lo que si queremos obtener solo el valor entero deberemos de redondearlo mediante el método [`Math.floor()`](https://www.w3api.com/Javascript/Math/floor), por lo que nuestro código se convertirá en:


```javascript
aleatorio = Math.floor(Math.random()*5);
```


Si por lo que fuese queremos un número aleatorio que empezase por 1, simplemente valdrá con sumarle 1 a la operación y solo multiplicarle por el valor límite.


```javascript
eatorio = Math.floor(Math.random()*4+1);
```


## Valores absolutos


Si queremos obtener valores absolutos en [Javascript](https://www.manualweb.net/javascript/), el objeto [`Math`](https://w3api.com/Javascript/Math/) nos ofrece el método [`Math.abs()`](https://www.w3api.com/Javascript/Math/abs), el cual devuelve el valor absoluto del número pasado como parámetro.


Vemos cómo podemos pasar diferentes valores al método [`Math.abs()`](https://www.w3api.com/Javascript/Math/abs) y ver su resultado en la consola.


```javascript
let n1 = 4;
let n2 = -3;

console.log(Math.abs(n1));  // 4
console.log(Math.abs(n2));  // 3
```

