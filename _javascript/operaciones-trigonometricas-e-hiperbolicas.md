---
title: Operaciones Trigonométricas e Hiperbólicas
permalink: /javascript/operaciones-trigonometricas-e-hiperbolicas/
excerpt: "Las operaciones trigonométricas e hiperbólicas del objeto Math nos permite desde calcular hipotenusas, senos, cosenos, tangentes, arcosenos, arcocosenos y arcotangentes."
tags: [math,seno,coseno,tangente,hipotenusa,arcoseno,arcocoseno,arcotangente]
image:
	path: /img/covers/javascript-cover.jpg
---

Si hablamos de operaciones trigonométricas e hiperbólicas el objeto [`Math`](https://w3api.com/Javascript/Math/) nos permite desde calcular hipotenusas, pasando por las operaciones trigonométricas hasta las operaciones hiperbólicas.


## Hipotenusa en Javascript


El objeto [`Math`](https://w3api.com/Javascript/Math/) nos permite realizar operaciones trigonométricas. Para ello lo primero que podemos hacer es **calcular la hipotenusa de un triángulo**. El método [`Math.hypot`](https://www.w3api.com/Javascript/Math/hypot)`()` nos permite hacer ese cálculo. Para ello simplemente tendremos que pasar el valor de los catetos a la función.


Si queremos calcular la hipotenusa de un triángulo con dos lados de tamaño 3 y 4 haríamos lo siguiente:


```javascript
let lado1 = 3;
let lado2 = 4;

console.log(Math.hypot(lado1,lado2)); // 5
```


## Senos, cosenos y tangentes


Lo siguiente sería saber que podemos calcular los **senos**, **cosenos** y **tangentes** mediante los métodos [`Math.sin()`](https://www.w3api.com/Javascript/Math/sin), [`Math.cos()`](https://www.w3api.com/Javascript/Math/cos) y [`Math.tan()`](https://www.w3api.com/Javascript/Math/tan). Estos métodos reciben como parámetro el valor del ángulo en radianes.


> Para convertir grados a radianes, hay que multiplicar los grados por el número π y dividirlo por 180


De esta manera podemos calcular el seno, coseno y tangente de un ángulo de 90º de la siguiente forma:


```javascript
let grado = 90;
let radian = (grado*Math.PI)/180;

console.log(Math.sin(radian));
console.log(Math.cos(radian));
console.log(Math.tan(radian));
```


## Arcoseno, arcocoseno y arcotangente


Si queremos conocer el ángulo tenemos métodos que nos calculan el **arcoseno, arcocoseno** y **arcotangente** que son [`Math.asin()`](https://www.w3api.com/Javascript/Math/asin), [`Math.acos()`](https://www.w3api.com/Javascript/Math/acos) y [`Math.atan()`](https://www.w3api.com/Javascript/Math/atan).


Esto nos puede ayudar a conocer los ángulos de un triángulo. Por ejemplo, si tenemos un triángulo rectángulo de lados 3m y 4m cuanto mide su hipotenusa y sus ángulos ą y ß.


![Imagen de Mates Fácil](https://manualweb.net/javascript/img/triangulo.png)


De esta manera, lo primero será calcular la hipotenusa mediante [`Math.hypot`](https://www.w3api.com/Javascript/Math/hypot)`()`


```javascript
let a = 4;
let b = 3;
let hipotenusa = Math.hypot(a,b);
```


Ahora calculamos el seno de ą y el seno de ß. Los cuales se calculan por el tamaño del lado opuesto entre la hipotenusa.


```javascript
let seno_alpha = b/hipotenusa;
let seno_beta = a/hipotenusa;
```


Ya solo nos quedará el calcular los arcoseno de estos senos con [`Math.asin()`](https://www.w3api.com/Javascript/Math/asin) para saber los ángulos


```javascript
let alpha = Math.asin(seno_alpha);
let beta = Math.asin(seno_beta);

console.log(`El angulo alpha es de ${(alpha*180)/Math.PI} grados`);
console.log(`El angulo beta es de ${(beta*180)/Math.PI} grados`);
```


> Pues encontrar más ejemplos de matemáticas en [Mates Fácil](https://www.matesfacil.com/)


También podríamos haber obtenido el ángulo utilizando la arcontangente mediante [`Math.atan()`](https://www.w3api.com/Javascript/Math/atan) sin necesidad de haber calculado la hipotenusa. Ya que a la arcotangente se le pasa la división del lado opuesto con el adyacente. En este caso el código sería de la siguiente manera:


```javascript
let a = 4;
let b = 3;

let alpha = Math.atan(b/a);
let beta = Math.atan(a/b);

console.log(`El angulo alpha es de ${(alpha*180)/Math.PI} grados`);
console.log(`El angulo beta es de ${(beta*180)/Math.PI} grados`);
```


## Angulos en un plano


Otra forma de obtener el arcotangente es mediante la función [`Math.atan2()`](https://www.w3api.com/Javascript/Math/atan2) la cual no recibe un ángulo en radianes, si no que recibe el punto `x,y` en un sistema de coordenadas de un plano con origen `0,0`.


Es importante saber que al método [`Math.atan2()`](https://www.w3api.com/Javascript/Math/atan2) se le pasan las coordenadas de forma inversa, es decir en formato `y,x`. Así su sintaxis es [`Math.atan2(y,x)`](https://www.w3api.com/Javascript/Math/atan2)


De esta forma podemos volver a reescribir el anterior código que nos calculaba los ángulos ą y ß de la siguiente forma:


```javascript
let a = 4;
let b = 3;

let alpha = Math.atan2(b,a);
let beta = Math.atan2(a,b);

console.log(`El angulo alpha es de ${(alpha*180)/Math.PI} grados`);
console.log(`El angulo beta es de ${(beta*180)/Math.PI} grados`);
```


## Senos, cosenos y tangentes hiperbólicas


Además de las funciones trigonométricas, dentro del objeto [`Math`](https://w3api.com/Javascript/Math/) también disponemos de funciones hiperbólicas. En este caso las funciones hiperbólicas no son periódicas si no que son exponenciales.


De esta manera tenemos son senos, cosenos y tangentes hiperbólicas que se obtienen mediante los métodos [`Math.sinh()`](https://www.w3api.com/Javascript/Math/sinh), [`Math.cosh()`](https://www.w3api.com/Javascript/Math/cosh) y [`Math.tanh()`](https://www.w3api.com/Javascript/Math/tanh) con los que podemos calcular el seno, coseno y tangente hiperbólica de un ángulo de 90º mediante el siguiente código:


```javascript
let grado = 90;
let radian = (grado*Math.PI)/180;

console.log(Math.sinh(radian));
console.log(Math.cosh(radian));
console.log(Math.tanh(radian));
```


Así mismo podemos calcular los arcosenos, arcocosenos y arcotangente hiperbólicas con los métodos [`Math.acosh()`](https://www.w3api.com/Javascript/Math/acosh), [`Math.asinh()`](https://www.w3api.com/Javascript/Math/asinh), [`Math.atanh()`](https://www.w3api.com/Javascript/Math/atanh).

