---
title: Operadores Lógicos
date: 2023-02-23
last_modified_at: 2023-02-23
permalink: /javascript/operadores-logicos/
excerpt: "Los operadores lógicos en Javascript están pensados para poder realizar operaciones con operandos booleanos, aunque se puede aplicar a cualquier tipo de dato."
tags: [operadores,operadores_lógicos,and,or,not]
image:
  path: /img/covers/javascript-cover.jpg
---

Los **operadores lógicos en** [**Javascript**](https://www.manualweb.net/javascript/) están pensados para poder realizar operaciones con operandos booleanos. De tal manera que tras la ejecución del operador se devuelve un nuevo valor booleano.


Los **operadores lógicos** **en** [**Javascript**](https://www.manualweb.net/javascript/) que podemos encontrar son:


Así podemos tener las siguiente evaluaciones con **operadores lógicos** sobre valores booleanos de `true` y `false`:


```javascript
let verdadero = true;
let falso = false;

console.log(verdadero && falso);    // false
console.log(verdadero || falso);    // true
console.log(! verdadero);           // false
```


Si no son valores booleanos y, por ejemplo, utilizamos los operadores lógicos en otros tipos de variables como sería con variables de tipo `String`, nos sucedería lo mismo en el comportamiento definido para estos operadores.


```javascript
let cadena1 = 'Coche';
let cadena2 = 'Moto';

console.log(cadena1 && cadena2);    // Moto
console.log(cadena1 || cadena2);    // Coche
console.log(!cadena1);              // false
```

