---
title: Precisión de Decimales en Javascript
permalink: /javascript/precision-de-decimales-en-javascript/
excerpt: "Cuando trabajamos con decimales en Javascript una de las cosas que tenemos que conocer es cómo funciona la precisión de decimales en Javascript y así evitar tener problemas comparando números."
tags: [epsilon,decimales,números_decimales,decimales_recurrentes,number]
image:
	path: /img/covers/javascript-cover.jpg
---

Cuando trabajamos con decimales en [Javascript](https://www.manualweb.net/javascript/) una de las cosas que tenemos que conocer es cómo funciona la precisión de decimales en [Javascript](https://www.manualweb.net/javascript/).


Y esto lo podemos ver rápidamente con el ejemplo de suma de los valores 0.1 y 0.2.


```javascript
let n1 = 0.1;
let n2 = 0.2;
console.log(n1+n2);
```


A priori la respuesta rápida sería que la salida por consola sería 0.3. Pero no, lo que se muestra por consola es:


> 🖥️ 0.30000000000000004


Más aún, si hacemos la comparación contra el valor 0.3 tampoco tendremos el valor `true`.


```javascript
console.log (0.1+0.2 === 0.3);  //false
```


Pero, ¿por qué sucede esto? Esto viene derivado de cómo el lenguaje [Javascript](https://www.manualweb.net/javascript/) representa los decimales internamente. Y es que no tenemos que olvidar que los ordenadores funcionan mediante elementos binarios de 0 y 1. Por lo cual todos los números se tienen que representar de forma binaria.


Y para los números enteros, ser representados de forma binaria no es mayor problema. Pero cuando hablamos de cómo se representan los números decimales de forma binaria, sobre todo con los [decimales recurrentes](https://euclides.org/decimal-repetido/). Por ejemplo:


> 🖥️ 1/3 = 0,3333… se repite el 3 infinitamente.  
> 1/7 = 0,142857142857…. se repite 142857 infinitamente.  
> 2/11 = 0,18181818… el 18 se repite infinitamente.


Es decir, estos valores no se pueden almacenar de forma limpia dentro de un binario, por lo que tendremos depreciaciones en los decimales. 


Todo esto está recogido en el [formato IEEE 754](https://en.wikipedia.org/wiki/IEEE_754#Basic_formats) que utiliza Javascript para representar los números.


> Puedes leer más sobre este efecto explicado y cómo afecta en otros lenguajes que no son [Javascript](https://www.manualweb.net/javascript/) en la web [0.30000000000000004.com](https://0.30000000000000004.com/)


## Número Epsilon


Para poder solucionar esta situación, el objeto [`Number`](https://www.w3api.com/Javascript/Number/) nos ofrece el número Epsilon que se representa como [`Number.EPSILON`](https://www.w3api.com/Javascript/Number/EPSILON).


De esta forma [`Number.EPSILON`](https://www.w3api.com/Javascript/Number/EPSILON) representa la diferencia entre 1 y el número de punto flotante más pequeño mayor que 1. Y este valor será el que nos ayude a controlar esas depreciaciones cuando trabajemos con números decimales.


Por lo tanto si queremos comprobar dos valores decimales, simplemente los tenemos que restar y la resta nunca será mayor que el [`Number.EPSILON`](https://www.w3api.com/Javascript/Number/EPSILON).


Crearemos una función que los compare como esta:


```javascript
function equal(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
```


Y la podremos utilizar en el código de nuestros programas:


```javascript
let n1 = 0.1;
let n2 = 0.2;

console.log(equal(n1+n2, 0.3)); // true
```


De esta forma ya habremos podido gestionar la precisión de decimales en [Javascript](https://www.manualweb.net/javascript/), y resolver que nuestra suma de 0.1 más 0.2 realmente sea 0.3.

