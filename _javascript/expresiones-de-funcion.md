---
title: Expresiones de Función
permalink: /javascript/expresiones-de-funcion/
excerpt: "Javascript permite declarar expresiones de función sobre una variable para poder utilizar dicha variable en el contexto del programa o pasarla a otras funciones."
tags: [expresiones_función]
image:
  path: /img/covers/javascript-cover.jpg
---

## Expresiones de Función


Hasta ahora hemos visto cómo [declarar una función en Javascript](https://manualweb.net/javascript/funciones-javascript/), cómo [pasarle parámetros](https://manualweb.net/javascript/parametros-en-funciones/), cómo devuelve un valor de retorno y por último cómo se puede invocar a esta función.


Pero existe otra forma de declarar una función y esto se conoce como **expresiones de función**. La idea es **declarar una función sobre una variable**. De esta manera podremos, por ejemplo, **mover la variable que tiene la función como parámetro de otras funciones**.


Las sintaxis de las **expresiones de función** es la siguiente:


```javascript
variable = function nombre () {
  sentencias;
  return valor;
}
```


Si bien el nombre o el devolver un valor son elementos opcionales. En el caso de no identificar un nombre será una [función anónima](https://manualweb.net/javascript/funciones-javascript/#funciones-an%C3%B3nimas)**.**


Podemos definir nuestra función de suma como una expresión de función de la siguiente manera:


```javascript
let suma = function(a,b) {
  return a+b;
}

console.log(suma(2,3));
```


También podríamos haber definido nuestra expresión de función con un nombre:


```javascript
let suma = function sum(a,b) {
  return a+b;
}

console.log(suma(2,3));
```


En este caso el nombre `sum` no se puede utilizar para ejecutar la función. Pero nos valdrá para nombrarla y **hacer seguimiento de ella en el caso de que estemos depurando** nuestro código fuente.


Como hemos comentado las **expresiones de función** se pueden pasar como parámetro en otras funciones. De esta forma, si tenemos una función que te calcule el cuadrado de un número:


```javascript
const square = function (x) { return Math.pow(x,2)};
```


La **podremos pasar como parámetro a otra función** que sume un listado de números aplicando esta función. Lo que quedaría de la siguiente forma:


```javascript
const sumador = function (operacion,elementos){
    let resultado = 0;
    for (let x=0;x<elementos.length;x++)
        resultado += operacion(elementos[x])
    return resultado;
}
```


Para invocar a la función lo haremos así:


```javascript
let numeros = [1,2,3,4,5];
console.log(sumador(square,numeros)); // 55
```


Pero es que a esta misma función le podríamos pasar una operación que calculase el cubo de un número, es decir, elevarlo a su tercera potencia.


```javascript
const cube = function (x) { return Math.pow(x,3)};
```


Y pasárselo a la misma función:


```javascript
let numeros = [1,2,3,4,5];
console.log(sumador(cube,numeros)); // 225
```


Pero, podríamos ir mucho más allá y en nuestra función principal indicar que esperamos una función, pero que si no viene no hacemos nada con los números y solo los sumamos. Así, que tal como vimos en la definición de valores por defecto la codificaríamos de la siguiente forma:


```javascript
const sumador = function (operacion = (x)=>x,elementos){
    let resultado = 0;
    for (let x=0;x<elementos.length;x++)
        resultado += operacion(elementos[x])
    return resultado;
}
```


Por lo que podríamos llamarla sin pasar una función, es decir, indicando el valor `undefined`.


```javascript
let numeros = [1,2,3,4,5];
console.log(sumador(undefined,numeros)); // 15
```

