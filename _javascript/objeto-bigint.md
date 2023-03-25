---
title: Objeto BigInt
permalink: /javascript/objeto-bigint/
excerpt: "En Javascript disponemos del objeto BigInt para poder representar valores muy largos, mayores que los números enteros."
tags: [bigint,number,operadores_comparación,operador_aritmético]
image:
  path: /img/covers/javascript-cover.jpg
---

En [Javascript](https://www.manualweb.net/javascript/) disponemos del objeto [`BigInt`](https://www.w3api.com/Javascript/BigInt/) para poder representar valores muy largos, mayores que los números enteros.


Es importante entender que el objeto [`Number`](https://www.w3api.com/Javascript/Number/) nos crea un objeto del tipo [`Number`](https://www.w3api.com/Javascript/Number/), mientras que el objeto [`BigInt`](https://www.w3api.com/Javascript/BigInt/) crea un tipo de dato primitivo de tipo `“bignit”`.


## Crear un objeto BigInt


Para poder crear un número BigInt se puede hacer utilizando un literal acabado en `n`.


```javascript
let numero = 1234567890n;
```


O bien utilizando el constructor del objeto [`BigInt`](https://www.w3api.com/Javascript/BigInt/), el cual recibe el valor con el número a representar con el tipo `“bigint”`:


```javascript
let numero = BigInt(1234567890);
```


Este valor puede ser un número ya sea binario, decimal, hexadecimal u octal o bien podría ser una cadena: Así podemos ver los siguientes constructores.


```javascript
let n2 = BigInt(1234567890);
let n3 = BigInt(0b1000);
let n4 = BigInt(0173);
let n5 = BigInt(0x7B);
let n6 = BigInt("12345");
```


Si ejecutamos un [`typeof`](https://manualweb.net/javascript/otros-operadores-javascript/#operador-typeof) veremos que el valor es `“bigint”`.


```javascript
typeof numero;  // bigint
```


## Operando con objetos BigInt


Cuando utilicemos el objeto [`BigInt`](https://www.w3api.com/Javascript/BigInt/) tenemos que saber que hay varias restricciones a la hora de operar con estos valores.


Por un lado podremos utilizar los [operadores aritméticos](https://manualweb.net/javascript/operadores-aritmeticos/) básicos como `+`, `-` , `*`, `/`, `%` y `**`. 


```javascript
let n1 = 12345n;
let n2 = 12345n;

console.log(n1*n2);
```


Y siempre tiene que ser siempre entre objetos [`BigInt`](https://www.w3api.com/Javascript/BigInt/). Es decir, no podemos mezclar valores [`BigInt`](https://www.w3api.com/Javascript/BigInt/) con otros como podría ser [`Number`](https://www.w3api.com/Javascript/Number/).


```javascript
let n1 = 12345;
let n2 = 12345n;

console.log(n1*n2); // TypeError
```


Además, por otro lado, tendremos la limitación de que no podemos utilizar el [objeto Math](https://manualweb.net/javascript/objeto-math/) con objetos [`BigInt`](https://www.w3api.com/Javascript/BigInt/).


## Comparando objetos BigInt


Si hablamos de comparaciones con objetos [`BigInt`](https://www.w3api.com/Javascript/BigInt/) hay que indicar que estos se pueden compara con los números normales sin mayor problema. Es por ello que podemos utilizar cualquier [operador de comparación](https://manualweb.net/javascript/operadores-de-comparacion/).


De esta forma podemos tener el siguiente código:


```javascript
let n1 = 123n;
let n2 = 123;

if (n1 == n2) 
    console.log("Son iguales");
```

