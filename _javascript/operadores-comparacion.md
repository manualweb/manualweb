---
title: Operadores Comparación
permalink: /javascript/operadores-comparacion/
---

Los **operadores de comparación** son aquellos que permiten comparar dos operandos y devolver un valor lógico.

En el caso de que los operandos sean de tipo diferente, [Javascript][Javascript] intenta convertirlos a un mismo tipo para poder compararlos.

| Operador |  Significado 
|---|---
| `x == y` | Devuelve `true` si los operandos son iguales
| `x != y` | Devuelve `true` si los operandos son diferentes
| `x === y` | Devuelve `true` si los operandos son iguales y son del mismo tipo
| `x !== y` | Devuelve `true` si los operandos son diferentes y son del mismo tipo
| `x > y` | Devuelve `true` si el operando de la izquierda es mayor que el operando de la derecha.
| `x >= y` | Devuelve `true` si el operando de la izquierda es mayor o igual que el operando de la derecha
| `x < y` | Devuelve `true` si el operando de la izquierda es menor que el operando de la derecha.
| `x <= y` | Devuelve `true` si el operando de la izquierda es menor o igual que el operando de la derecha.

En el caso de las comparaciones estrictas vemos que las comparaciones no son solo del valor si no que también afectan al tipo de dato. Podemos verlo en el siguiente ejemplo cuando comparamos un mismo valor que en un caso es un tipo número y en otro caso es una cadena.

~~~javascript
let n1 = 1;
let n2 = "1";

n1 == n2; // true
n1 === n2; // false
~~~

[Javascript]: {{site.url}}/javascript/