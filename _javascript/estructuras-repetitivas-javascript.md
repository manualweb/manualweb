---
title: Estructuras Repetitivas Javascript
permalink: /javascript/estructuras-repetitivas-javascript/
---

Las estructuras repetitivas son **aquellas que nos permiten realizar una misma acción un número determinado de veces**. El número de veces puede ser **un contador** o **la evaluación de una condición**.

Existen varias estructuras repetitivas en [Javascript][Javascript]:
* for
* while
* do..while
* for..in
* for..of

Y algunas sentencias que nos ayudan dentro de las estructuras repetitivas:

* break
* continue
* etiquetas


## For
La estructura repetitiva `for` sigue la siguiente estructura:

~~~javascript
for (asignacion_inicial;condición;incremento) {
  // Bloque de sentencias
}
~~~

Lo primero que se ejecutará es la **asignación inicial**. Esta solo se ejecuta la primera vez que se entra en la estructura repetitiva. Posteriormente **se evaluará la condición**. Si la condición tiene el valor `true`, entonces se ejecutará el bloque de sentencias. Si la condición tiene el valor `false`, se termina y sale del bucle. Para finalizar, y una vez ejecutado el bloque de sentencias, **se ejecutará el incremento**.

Si, por ejemplo, *queremos ejecutar un bloque de sentencias 10 veces*, podremos utilizar el siguiente código.

~~~javascript
for (let x=1;x<=10;x++) {
  console.log(x);
}
~~~

## While
La estructura repetitiva `while` **ejecuta el bloque de setencias si la condición contiene un valor de `true`**. En caso de que el valor sea `false`, se sale del bucle.

~~~javascript
while (condición) {
  // Bloque de sentencias
}
~~~

Así, si queremos ejecutar el bucle 10 veces mediante una estructura repetitiva `while` tendremos el siguiente código:

~~~javascript
let x = 1;
while (x<=10) {
  console.log(x);
  x++;
}
~~~

## Do..While
La estructura repetitiva `do-while` **nos permite ejecutar, al menos, una vez el bloque de sentencias**. Ya que **la condición será evaluada al finalizar el bloque**.

En el caso de que la condición sea `true` se iterará nuevamente en el bucle. Si la condición es `false` se saldrá de la ejecución del bucle.

La estructura de `do-while` es la siguiente:

~~~javascript
do {
  // Bloque de sentencias
} while (condición);
~~~

Si queremos ejecutar la estructura repetitiva `do-while` 10 veces, tendremos el siguiente código:

~~~javascript
let x = 1;
do {
  console.log(x);
  x++;
} while (x<=10);
~~~

> Los **bucles infinitos** son aquellos cuya condición no se cumple nunca. Es por ello que el código se ejecuta infinitamente sin finalizar el programa. Es por ello que siempre deberemos de asegurarnos que dentro del bloque de sentencias hay una sentencia que pueda alterar la condición y evitar así los dañinos bucles infinitos.




## Otros
* break
* For-in
* With

[Javascript]: {{site.url}}/javascript
