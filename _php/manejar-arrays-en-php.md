---
title: Manejar Arrays en PHP
date: 2024-05-27
last_modified_at: 2024-05-27
permalink: /php/manejar-arrays-en-php/
excerpt: "Ejemplo que nos ayuda a manejar array en PHP realizando las operaciones de inserción, actualización y borrado de elementos."
tags: [array,array indexado]
image:
  path: /img/covers/php-cover.webp
---

Una vez que hemos aprendido lo [qué son los arrays en PHP y cómo crear un array en PHP](https://manualweb.net/php/arrays-en-php/) vamos a ver cómo podemos manipular los [arrays en PHP](https://manualweb.net/php/arrays-en-php/). Es decir, cómo podemos insertar un elemento en un array, cómo acceder a un elemento del array, cómo actualizar el elemento de un array y cómo eliminar un elemento de un array.


## Acceder a un elemento de un array PHP


Si hemos definido **un array indexado en PHP** tenemos que saber que los elementos se identifican de forma numérica. Es decir, podemos manipular el array mediante **valores de sus índices**.


Para ello el primer elemento del array es el equivalente al valor de índice 0, el segundo elemento equivale al valor de índice de 1, así sucesivamente hasta que el último elemento del array corresponde al valor de índice N-1, dónde N es el número de elementos del array.


Para acceder a un elemento de un [array PHP](https://manualweb.net/php/arrays-en-php/) nos apoyamos en el operador corchete `[]`, dicho operador lo aplicamos sobre el nombre de la variable sobre la que hemos definido el array, pasando como valor del operador el número del índice del elemento del array.


La sintaxis para acceder a un elemento de un [array PHP](https://manualweb.net/php/arrays-en-php/) mediante el operador corchete `[]` será la siguiente:


```php
$array[indice];
```


De esta manera podremos acceder a todos los elementos del array siguiendo la siguiente estructura de índices.


```php
$array[0]; // Primer Elemento
$array[1]; // Segundo Elemento
$array[2]; // Tercer Elemento
...
$array[N-1]; // Último Elemento
```


Si utilizamos nuestro array de nombres que habíamos definido podremos acceder a los elementos de la siguiente forma:


```php
$personas = array("Luis","Francico","Javier","Marta","Virginia");
echo $personas[0];  // Luis
echo $personas[1];  // Francisco
echo $personas[2];  // Javier
echo $personas[3];  // Marta
echo $personas[4];  // Virginia
```


## Insertar elementos en un array PHP


Hasta ahora hemos visto cómo [crear un array en PHP](https://manualweb.net/php/arrays-en-php/) y cargar los valores en su definición, bien fuese creándolo mediante la función `array()` o bien fuese creándolo mediante el operador corchete `[]`.


Pero tenemos que saber que también se pueden insertar elementos en un [array PHP](https://manualweb.net/php/arrays-en-php/) una vez que este se ha creado. Para ello simplemente tendremos que acceder al array mediante el operador corchete `[]` indicando la posición en la que queremos insertar el nuevo elemento y asignarle el valor mediante un operador igual.


La sintaxis para poder insertar elementos en un [array PHP](https://manualweb.net/php/arrays-en-php/) será la siguiente:


```php
$array[indice] = valor;
```


Mediante esta sintaxis añadimos el valor en la posición del índice seleccionada. Por lo tanto en nuestro array de nombres de personas podemos insertar un nuevo elemento de la siguiente forma:


```php
$personas[5] = "Sonsoles";  // Insertamos el valor de "Sonsoles"
```


Pero, qué sucede si queremos insertar un elemento dentro de nuestro [array PHP](https://manualweb.net/php/arrays-en-php/) pero no sabemos el número de elementos que lo componen. En este caso podemos insertar el valor en el final del array sin especificar el valor del índice dentro del operador corchete `[]`.


```php
$array[] = "nuevo valor"; // Inserta "nuevo valor" al final del array
```


Por lo que para insertar el valor al final de nuestro array de nombres de personas lo que haremos será utilizar la siguiente [línea de código](https://lineadecodigo.com/):


```php
$personas[] = "José";  // Insertamos el valor de "José" al final del array
```


## Actualizar elementos en un array PHP


De la misma manera que hemos utilizado el operador corchete `[]` para poder insertar elementos, podemos utilizar el operador corchete `[]` para actualizar elementos en un [array PHP](https://manualweb.net/php/arrays-en-php/). 


Lo que haremos será indicar mediante el índice del operador corchete `[]` la posición que queremos actualizar y le asignaremos el nuevo valor. La sintaxis para actualizar elementos en un [array PHP](https://manualweb.net/php/arrays-en-php/) es la siguiente:


```php
$array[indice] = nuevo_valor;
```


De esta manera, si volvemos a nuestra lista de nombres podremos actualizar el segundo elemento de la siguiente forma:


```php
$personas[1] = "Víctor";  // Actualizamos el segundo elemento con el valor "Víctor"
```


## Eliminar elementos de un array PHP


Lo siguiente que vamos a ver en este artículo sobre manejar [arrays en PHP](https://manualweb.net/php/arrays-en-php/) será el saber cómo podemos eliminar elementos de un [array PHP](https://manualweb.net/php/arrays-en-php/).


### Eliminar elementos de un array con la función unset()


Para eliminar un elemento de un [array en PHP](https://manualweb.net/php/arrays-en-php/) se utiliza la función `unset()`. En este caso pasamos el elemento que queremos eliminar como parámetro. Para ello utilizamos la forma de acceder a un elemento de un array.


La sintaxis de la función `unset()` es la siguiente:


```php
unset($array[indice]);

```


De esta manera, para eliminar el tercer elemento de nuestra lista de nombres, mediante la función `unset()`, lo haríamos de la siguiente forma:


```php
unset($personas[2]);  // Elimina el tercer elemento del array
```


El problema de la función `unset()` es que no reindexa el array. Es decir, al eliminar uno de los índices este desaparece y no queda asignado. Lo cual puede complicar procesos posteriores en los que necesitemos recorrer el array de forma secuencial.


Para ver su efecto, si partimos del siguiente [array en PHP](https://manualweb.net/php/arrays-en-php/):


```php
echo $personas[0];  // Luis
echo $personas[1];  // Francisco
echo $personas[2];  // Javier
echo $personas[3];  // Marta
echo $personas[4];  // Virginia
```


Y ejecutamos la función `unset()` sobre el elemento del primer índice:


```php
unset($personas[1]);
```


Los índices de nuestro array de personas quedarán de la siguiente forma:


```php
echo $personas[0];  // Luis
echo $personas[1];  // Undefined offset: 1 
echo $personas[2];  // Javier
echo $personas[4];  // Virginia
```


Como podemos comprobar el índice “1” está sin definir al haberlo borrado.


### Eliminar elementos de un array con la función array_splice()


Otra forma que tenemos de eliminar elementos de un [array PHP](https://manualweb.net/php/arrays-en-php/) es utilizando la función `array_splice()`. A la función `array_splice()` se le pasa el array sobre el que queremos eliminar un elemento, el índice sobre el que queremos empezar a eliminar los elementos y el número de elementos que queremos eliminar.


La sintaxis de la función `array_splice()` es la siguiente:


```php
array_splice($array, inicio, longitud);
```


Por ejemplo, para eliminar el tercer elemento de nuestra lista de nombres, utilizaríamos la función `array_splice()` de la siguiente manera:


```php
array_splice($personas, 2, 1);  // Elimina el primer elemento del array
```


La función `array_splice()`, a diferencia de `unset()`, sí reindexa los elementos del array. Por lo que los índices se recolocan en los elementos que quedan resultado del borrado de un elemento.


Para ver en funcionamiento la función `array_splice()` vamos a repetir el mismo código que antes. Así que partimos del mismo array de nombres de personas:


```php
echo $personas[0];  // Luis
echo $personas[1];  // Francisco
echo $personas[2];  // Javier
echo $personas[3];  // Marta
echo $personas[4];  // Virginia
```


Lo siguiente que haremos será eliminar el elemento que se encuentra en la posición 1. Es decir, el segundo elemento de la lista. para ello utilizamos la función `arrray_splice()` mediante la siguiente [línea de código](https://lineadecodigo.com/):


```php
array_splice($personas,1,1);
```


Y, al producirse el reindexado, se verá que los indices quedan con la siguiente forma:


```php
echo $personas[0];  // Luis
echo $personas[1];  // Javier
echo $personas[2];  // Marta
echo $personas[3];  // Virginia
```


Con toda esta información seguro que ahora eres capaz de manejar [arrays en PHP](https://manualweb.net/php/arrays-en-php/) mucho mejor.

