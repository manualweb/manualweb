---
title: Operadores sobre Bits
date: 2023-02-23
last_modified_at: 2023-02-23
permalink: /javascript/operadores-sobre-bits/
excerpt: "Los operadores sobre bits en Javascript nos permiten manipular los operandos con operaciones binarias. Tratando a los operandos como cadenas de 32 bits."
tags: [operadores,and,or,xor,not,operadores_bits]
image:
  path: /img/covers/javascript-cover.jpg
---

Los **operadores sobre bits en** [**Javascript**](https://www.manualweb.net/javascript/) nos permiten manipular los operandos con operaciones binarias. Tratando a los operandos como cadenas de 32 bits.


Tenemos los siguientes **operadores sobre bits**:


| Operador  | Significado                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `x & y`   | Realiza una operación AND binaria. Devuelve 1 en las posiciones de bit dónde las posiciones de los dos operadores tienen un 1.             |
| `x | y`   | Realiza una operación OR binaria. Devuelve un cero en las posiciones de bit dónde las posiciones de los dos operadores tienen un 0.        |
| `x ^ y`   | Realiza una operación XOR binaria. Devuelve un cero en las posiciones dónde el bit es el mismo y un 1 dónde las posiciones son diferentes. |
| `~ x`     | Realiza una operación NOT binaria.                                                                                                         |
| `x << y`  | Realiza un desplazamiento de bits a la izquierda.                                                                                          |
| `x >> y`  | Realiza un desplazamiento de bits a la derecha.                                                                                            |
| `x >>> y` | Realiza un desplazamiento de bits a la derecha rellenando con ceros.                                                                       |


Así, por ejemplo, podríamos realizar la siguientes operaciones lógicas con **operadores sobre bits en** [**Javascript**](https://www.manualweb.net/javascript/):


```javascript
let x = 9;    // 1001
let y = 12;   // 1100
console.log(x & y); // 8  - 1000
console.log(x | y); // 13 - 1101
console.log(x ^ y); // 5  - 0101
```


O bien operaciones de desplazamiento de bits mediante los **operadores sobre bits**.


Por ejemplo podemos ver que desplazando hacia la izquierda mediante el operador `<<` vamos calculando las potencias del 2 del número


```javascript
let x = 2;  // 000010
console.log(x << 1);  // 4  - 000100
console.log(x << 2);  // 8  - 010000
console.log(x << 3);  // 16 - 010000
console.log(x << 4);  // 32 - 100000
```

