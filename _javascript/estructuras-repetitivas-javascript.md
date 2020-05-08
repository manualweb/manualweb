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
La estructura repetitiva `while` **ejecuta el bloque de sentencias si la condición contiene un valor de `true`**. En caso de que el valor sea `false`, se sale del bucle.

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


## Sentencia break
Como hemos visto los bucles tienen una condición de salida, que una vez que se cumpla, será en este momento cuando salte a la siguiente sentencia después del bucle.

Si bien existen otras formas de salir del bucle que no son por el cumplimiento de la condición de salida. Una de ellas es la sentencia `break`. Podemos utilizar la sentencia `break` dentro de cualquier bucle: `for`, `while`, `do-while` o `switch`.

La ejecución de la sentencia `break` lo que hace es que automáticamente se salga del bucle y que pase a ejecutarse la siguiente sentencia.

La estructura de la sentencia `break` es la siguiente:

~~~javascript
break [etiqueta];
~~~

Así que si podríamos salirnos de un bucle de la siguiente forma:

~~~javascript
let x = 1;
while (x<=10) {

  if (x==5) {
    break;
  }
  console.log(x);
  x++;
}
~~~

Como podemos observar en el código, al llegar al valor 5 se ejecuta el `break` y por lo tanto deja el bucle. Cierto es que esto se podría haber gestionado con una condición de salida del bucle `while`. Es por ello que a la hora de codificarlo tengamos siempre las dos opciones y pase a ser una cuestión más de estilos, ya que hay gente que prefiere que no existan saltos y que se ejecute de una forma más secuencial.

Si nos fijamos en la estructura de la sentencia `break` esta puede llevar asociada una etiqueta. En este caso el salto no se produce a la siguiente sentencia después del bucle si no que se produce allí dónde esté la etiqueta registrada en el código.

Así que vamos a ver qué son las etiquetas en Javascript.

## Etiquetas

El sistema de etiquetas nos permite agrupar un conjunto de sentencias dentro de un programa para poder saltar a ellas cuando queramos.

Para poder etiquetar las sentencias deberemos de utilizar la estructura:

~~~javascript
etiqueta:
  sentencias;
~~~

Por ejemplo podríamos etiqutar un bucle de la siguiente forma:

~~~javascript
MiBucle:
  let x = 1;
  while (x<=10) {
    console.log(x);
    x++;
  }
~~~

Como hemos visto antes la etiqueta se compagina con la sentencia `break`. De esta manera podemos tener el siguiente código:

~~~javascript
let x = 1;
let y = 1;

inicio: while (x<10) {
  console.log(x);
  while (y<10) {
    console.log (x + ',' + y);
    y++;
    if (y==5) {
      break inicio;
    }
  }
  x++;
  y = 0;
}
~~~

En este código podemos ver dos cosas, por un lado como utilizamos la **etiqueta "inicio"** para poder poner un nombre al bucle y como la sentencia `break` tiene seguido el nombre a esta etiqueta.

Esto se utiliza sobre todo si tenemos bucles anidados. Ya que al poner el `break ` con la etiqueta del primer bucle lo que hace es salirse de los dos bucles, mientras que si hubiesemos utilizado solo un `break` habría salido únicamente del primer bucle.

Por consola veremos lo siguiente:

<samp>
1
1,1
1,2
1,3
1,4
</samp>

## Sentencia Continue
Otra sentencia parecida a `break` que podemos ejecutar es `continue`. La estructura de la sentencia `continue` es la siguiente:

~~~javascript
continue [etiqueta];
~~~

Tal y como ocurría con el `break`, la sentencia `continue` puede utilizarse con y sin etiqueta. Cuando utilizamos la sentencia `continue` lo que estamos haciendo es acabar el bucle en el que estamos, pero no salta a la siguiente sentencia fuera del bucle, si no que salta a la siguiente iteración.

Por ejemplo podemos tener un bucle del 1 al 10 en el que solo nos muestre los números impares y para ello lo resolvamos con la setencia `continue`.

~~~javascript
let x = 0;

while (x<10) {
  x++;
  if (x%2==0) {
    continue;
  }
  console.log(x);

}
~~~~

Como podemos observar en el bucle lo que sucede es que cuando se ejecuta la sentencia `continue` el programa salta a la siguiente iteración del bucle.

En el caso de que la sentencia `continue` esté seguida de una etiqueta lo que hace es salir hasta el bucle que esté etiquetado y ejecutar su siguiente iteración.

Utilizamos el mismo código que con las etiquetas `break`, pero en este caso con una sentencia `continue`. Así lo que sucederá es que se saldrá desde el bucle interno hasta el externo, pero en vez de a la sentencia siguiente, realizará una nueva iteración.

~~~javascript
inicio: while (x<10) {
  console.log(x);
  while (y<10) {
    console.log (x + ',' + y);
    y++;
    if (y==5) {
      continue inicio;
    }
  }
  x++;
  y = 0;
}
~~~

En este caso, por consola veremos lo siguiente:

<samp>
1
1,1
1,2
1,3
1,4
1
1,5
1,6
1,7
...
</samp>

## For..In
El bucle `for..in` nos permite recorrer las propiedades enumerables de un objeto. En cada una de las iteraciones podremos acceder a las propiedades del objeto.

La estructura del bucle `for..in` será la siguiente:

~~~javascript
for (variable in objeto)
  sentencias;
~~~

Como todavía no sabemos definir un objeto, algo que veremos en siguientes pasos, vamos a asumir que un **array** es un objeto iterable para [Javascript][Javascript]. Así que podemos utilizar la estructura `for..in` para recorrer los elementos de un array.

Así podremos utilizar el siguiente código para recorrer el array:

~~~javascript
let letras = new Array('A','B','C','D','E','F');

for (letra in letras)
  console.log(letras[letra]);
~~~

Como podemos ver la estructura `for..in` nos da las propiedades del array y no sus valores

> Hay que tener cuidado cuando utilicemos la estructura for..in con un Array ya que devuelve las propiedades y no el contenido del array, por lo que podría darnos respuestas no esperadas si hemos modificado la estructura añadiendo nuevas propiedades.

## For..of
Mediante el bucle `for..of` podremos recorrer de forma iterativa un elemento iterable que puede ser un **objeto**, **array**, **mapa**, **conjunto**,... y nos **devuelve los valores de sus propiedades**.

La estructura del bucle `for..of` será la siguiente:

~~~javascript
for (varible of objeto)
  sentencias;
~~~

Así, si volvemos al ejemplo anterior vemos cómo utilizar la iteración sobre el array para devolver los valores.

~~~javascript
let letras = new Array('A','B','C','D','E','F');

for (letra in letras)
  console.log(letra);
~~~

> Hay que diferenciar que el bucle `for..if` nos devuelve las propiedades del elemento, mientas que el bucle `for..of` nos devuelve los valores de las propiedades. Es por ello que este segundo es mejor para recorrer elementos iterables como Array, Mapas o Conjuntos.


[Javascript]: {{site.url}}/javascript
