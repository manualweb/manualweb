---
title: Operadores Lógicos
permalink: /javascript/operadores-logicos/
---

Los **operadores lógicos** están pensados para poder realizar opeaciones con operandos booleanos. De tal manera que tras la ejecución del operador se devuelve un nuevo valor booleano.

Los **operadores lógicos** que podemos encontrar son:

| Operador |  Significado 
|---|---
| `x && y` | Operador AND, el cual devuelve `true` si ambos operandos son `true`. Si no son valores booleaos devolverá `y`.
| `x || y` | Operador OR, el cual devuelve `true` si alguno de los operandos son `true`. Si no son valores booleanos devolverá `x`.
| `! x` | Operador NOT, el cual invierte el valor del operando de `true` a `false` y de `false` a `true`.

Así podemos tener las siguiente evaluaciones con **operadores lógicos**:

~~~javascript
let verdadero = true;
let falso = false;

console.log(verdadero && falso);    // false
console.log(verdadero && falso);    // true
console.log(! verdadero);           // false
~~~

Y si no son valores booleanos:

~~~javascript
let cadena1 = 'Coche';
let cadena2 = 'Moto';

console.log(cadena1 && cadena2);    // Moto
console.log(cadena1 || cadena2);    // Coche
console.log(!cadena1);              // false
~~~

[Javascript]: {{site.url}}/javascript/