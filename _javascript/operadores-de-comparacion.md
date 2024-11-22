---
title: Operadores de Comparación
date: 2023-02-22
last_modified_at: 2023-02-22
permalink: /javascript/operadores-de-comparacion/
excerpt: "Los operadores de comparación en Javascript son aquellos que permiten comparar dos operandos y devolver un valor lógico."
tags: [operadores,operadores_comparación,comparación_estricta]
image:
  path: /img/covers/javascript-cover.jpg
---

Los **operadores de comparación en** [**Javascript**](https://www.manualweb.net/javascript/) son aquellos que permiten comparar dos operandos y devolver un valor lógico.


En el caso de que los operandos sean de tipo diferente, [Javascript](https://www.manualweb.net/javascript/) intenta convertirlos a un mismo tipo para poder compararlos.


De esta manera tenemos los siguientes operadores de comparación en [Javascript](https://www.manualweb.net/javascript/):


| **Operador** | **Significado**                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `x == y`     | Devuelve `true` si los operandos son iguales                                                   |
| `x != y`     | Devuelve `true` si los operandos son diferentes                                                |
| `x === y`    | Devuelve `true` si los operandos son iguales y son del mismo tipo                              |
| `x !== y`    | Devuelve `true` si los operandos son diferentes y son del mismo tipo                           |
| `x > y`      | Devuelve `true` si el operando de la izquierda es mayor que el operando de la derecha.         |
| `x >= y`     | Devuelve `true` si el operando de la izquierda es mayor o igual que el operando de la derecha  |
| `x < y`      | Devuelve `true` si el operando de la izquierda es menor que el operando de la derecha.         |
| `x <= y`     | Devuelve `true` si el operando de la izquierda es menor o igual que el operando de la derecha. |


## Comparaciones Estrictas


En el caso de las **comparaciones estrictas**, es decir `===` o `!==`, vemos que las comparaciones no se ejecutan solo sobre el valor si no que **también afectan al tipo de dato**.


Esto podemos verlo de una forma clara en el siguiente ejemplo cuando comparamos un mismo valor que en un caso es un tipo número y en otro caso es una cadena.


```javascript
let n1 = 1;
let n2 = "1";

n1 == n2; // true
n1 === n2; // false
```


Es decir, que si queremos realizar validaciones ente variables sobre las que desconocemos el tipo de dato que tienen asignado, es mejor realizar una comparación estricta.

