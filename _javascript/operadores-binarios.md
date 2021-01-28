---
title: Operadores Binarios
permalink: /javascript/operadores-binarios/
---

Los **operadores binarios** nos permiten manipular los operandos con operaciones bianrias. Tratando a los operands como cadenas de 32 bits.

Tenemos los siguientes **operadores binarios**:

| Operador |  Significado 
|---|---
| `x & y` | Realiza una operación AND binaria. Devuelve 1 en las posiciones de bit dónde las posiciones de los dos operadores tienen un 1.
| `x | y` | Realiza una operación OR binaria. Devuelve un cero en las posiciones de bit dónde las posiciones de los dos operadores tienen un 0.
| `x ^ y` | Realiza una operación XOR binaria. Devuelve un cero en las posiciones dónde el bit es el mismo y un 1 dónde las posiciones son diferentes.
| `~ x` | Realiza una operación NOT binaria.
| `x << y` | Realiza un desplazamiento de bits a la izquierda.
| `x >> y` | Realiza un desplazamiento de bits a la derecha.
| `x >>> y` | Realiza un desplazamiento de bits a la derecha rellenando con ceros.

Así, por ejemplo, podríamos realizar la siguientes operaciones lógicas con **operadores binarios**:

~~~javascript
let x = 9;    // 1001
let y = 12;   // 1100

console.log(x & y); // 8  - 1000
console.log(x | y); // 13 - 1101
console.log(x ^ y); // 5  - 0101
~~~

O bien operaciones de desplazamiento de bits mediante los **operadores binarios**. Por ejemplo podemos ver que desplazando hacia la izquierda vamos calculando las potencias del 2 del número

~~~javascript
let x = 2;  // 000010

console.log(x << 1);  // 4  - 000100
console.log(x << 2);  // 8  - 010000
console.log(x << 3);  // 16 - 010000
console.log(x << 4);  // 32 - 100000
~~~

[Javascript]: {{site.url}}/javascript/