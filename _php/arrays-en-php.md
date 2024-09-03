---
title: Arrays en PHP
date: 2024-05-26
last_modified_at: 2024-05-26
permalink: /php/arrays-en-php/
excerpt: "Los arrays en PHP son una estructura de datos que nos permite almacenar múltiples valores en una sola variable, teniendo una colección ordenada de elementos."
tags: [array,matrices,json,array indexado,diccionario]
image:
  path: /img/covers/php-cover.webp
---

## ¿Qué son los arrays en PHP?


Los arrays en [PHP](https://www.manualweb.net/php/) son una **estructura de datos que nos permite almacenar múltiples valores en una sola variable**, es decir, una lista de elementos. Los arrays en [PHP](https://www.manualweb.net/php/) son una **colección ordenada de elementos**, los cuales pueden ser de cualquier tipo: números, cadenas de texto, objetos e incluso otros arrays para poder crear arrays multidimensionales o matrices.


Los arrays en [PHP](https://www.manualweb.net/php/) pueden almacenar información directamente como si fuese una lista de elementos, que es lo que se conoce como un **array indexado** o bien pueden ser creados mediante pares clave/valor, lo que nos permite crear **arrays asociativos o diccionarios**.


En el caso de los arrays indexados **accederemos al valor de los elementos mediante un valor numérico de índice** y en el caso de los arrays asociativos o diccionarios podremos a**cceder a los elementos del array mediante el valor de su clave**.


## Crear un array en PHP


Lo primero que tenemos que conocer en el mundo de los arrays en [PHP](https://www.manualweb.net/php/) es cómo podemos crear un array en [PHP](https://www.manualweb.net/php/). Para crear un array en [PHP](https://www.manualweb.net/php/) existen dos formas: por un lado sería utilizando la función `array()` y por otro sería utilizando el operador corchetes `[]`.


### Crear un array en PHP mediante la función array()


Para poder crear un array en [PHP](https://www.manualweb.net/php/) mediante la función `array()` tenemos que saber que esta función aceptará como parámetro cualquier número de argumentos, los cuales serán los elementos del array.


La sintaxis para crear un array en [PHP](https://www.manualweb.net/php/) mediante la función `array()` será la siguiente:


```php
$array = array(
  clave  => valor,
  clave2 => valor2,
  clave3 => valor3,
  ...
);
```


En este caso vemos que los parámetros del array los definimos mediante pares de clave/valor. Esto lo utilizaremos para los **arrays asociativos o diccionarios**. Si bien podemos utilizar la sintaxis de solo pasar los valores en el caso de que sea un **array indexado**. En este caso la sintaxis será la siguiente:


```php
$array = array(
  valor,
  valor2,
  valor3,
  ...
);
```


Con la siguiente sintaxis podríamos **crear un array vacío en** [**PHP**](https://www.manualweb.net/php/) de la siguiente forma:


```php
$miarray = array();
```


O podríamos **crear un array de cadenas de texto en** [**PHP**](https://www.manualweb.net/php/), en el que almacenemos nombres de personas utilizando el siguiente código:


```php
$personas = array("Luis","Francico","Javier","Marta","Virginia");
```


### Crear un array en PHP mediante el operador corchete []


La otra forma que tenemos para poder crear un array en [PHP](https://www.manualweb.net/php/) es hacerlo mediante el operador corchete `[]`. En este caso los parámetros se componen mediante una lista de elemento separados por comas dentro del operador corchete `[]`.


La sintaxis para crear un array en [PHP](https://www.manualweb.net/php/) mediante el operador corchete `[]` será la siguiente:


```php
$array = [
  clave  => valor,
  clave2 => valor2,
  clave3 => valor3,
  ...
];
```


Nuevamente esta es la formula para poder crear un **array asociativo o diccionario** y tendremos una sintaxis para poder crear el array mediante el operador corchete para que sea un array indexado.


```php
$array = [
  valor,
  valor2,
  valor3,
  ...
];
```


De esta manera se puede crear un array [PHP](https://www.manualweb.net/php/) vacío mediante el operador corchete de la siguiente forma:


```php
$miarray = [];
```


O podríamos crear un array de cadenas de texto mediante el operador corchete `[]`, en el que almacenemos nombres de personas utilizando el siguiente código:


```php
$personas = ["Luis","Francico","Javier","Marta","Virginia"];
```


## Usos de los arrays PHP


Dentro de nuestro [código en PHP](https://lineadecodigo.com/categoria/php/), los arrays son estructuras muy útiles y versátiles que podemos utilizar pàra resolver múltiples situaciones. Entre estos usos de los arrays [PHP](https://www.manualweb.net/php/) encontramos los siguientes:


### Almacenar lista de información mediante el uso de arrays


Los arrays nos permiten almacenar una lista de información, ya sea que contenga números, caracteres, cadenas de texto, entre otros. Esta capacidad de almacenamiento es particularmente útil cuando nos encontramos trabajando con conjuntos grandes de datos que necesitamos organizar y gestionar de manera eficiente.


Los arrays nos otorgan la ventaja de poder acceder a cada elemento individual de la lista de información mediante su índice, lo que facilita la manipulación y el procesamiento de los datos. Esto es especialmente útil en situaciones donde necesitamos realizar operaciones repetitivas sobre un conjunto de datos, ya que nos permite automatizar y optimizar dichos procesos.


### Implementar una cola


Los arrays también pueden ser utilizados para implementar otra estructura de datos importante conocida como una cola. Una cola, al igual que una fila real, **funciona bajo el principio de "primero en entrar, primero en salir" (FIFO - First In First Out)**. A través de este tipo de estructura de datos, podemos gestionar y organizar elementos en un orden específico, lo que puede ser especialmente útil en ciertos tipos de operaciones o algoritmos.


En el caso de las colas, tendremos que diseñar y desarrollar métodos específicos para poder insertar o eliminar elementos en la cola. Estos métodos, llamados encolar y desencolar, permiten añadir elementos al final de la cola y eliminarlos desde el principio, respectivamente, asegurando así el comportamiento FIFO de la cola.


### Estructuras complejas de árboles


Las estructuras de datos de los arrays nos brindan la capacidad de crear estructuras complejas de árboles. Estas estructuras de árboles son particularmente útiles en una variedad de contextos, especialmente en la representación de relaciones jerárquicas. Además, estas estructuras de árboles permiten la representación de estructuras de datos no lineales, lo que amplía aún más su aplicabilidad y utilidad en diferentes áreas de programación y análisis de datos.


### Crear matrices o tablas de datos


Otro caso de uso de los arrays en [PHP](https://www.manualweb.net/php/) es la creación de matrices o tablas de datos. Esta funcionalidad nos proporciona la capacidad de trabajar con **información en un formato bidimensional**. Este formato bidimensional es equivalente a una tabla con filas y columnas, lo que nos da una forma visualmente intuitiva y organizada de manejar nuestra información. En muchos contextos, especialmente en el manejo de bases de datos, esta característica puede ser extremadamente útil. Nos permite manipular, ordenar y acceder a los datos de manera más eficiente y sistemática.


### Manipulación de datos en la base de datos


Los arrays nos proporcionan la capacidad de realizar una serie de operaciones cruciales con los datos almacenados en nuestras bases de datos. Estas operaciones incluyen la **inserción de nuevos datos en la base de datos**. Almacenar información en arrays nos permite agregar fácilmente nuevos registros en nuestras tablas de datos.


La **actualización de los datos existentes en la base de datos** también es posible con el uso de arrays. Podemos buscar la información relevante en nuestra base de datos, modificar los valores según sea necesario, y luego actualizar los registros con nuestros nuevos valores.


Finalmente, los arrays también nos permiten eliminar datos de nuestras bases de datos. Podemos buscar y seleccionar los registros que queremos eliminar, y luego usar nuestras funciones de array para eliminarlos de la base de datos.


### Creación de Estructuras de Datos JSON en PHP


Los arrays en [PHP](https://www.manualweb.net/php/) son esenciales al momento de trabajar con datos JSON. Podemos **convertir arrays en** [**PHP**](https://www.manualweb.net/php/) **a formato JSON** utilizando la función `json_encode()`. Esta funcionalidad es especialmente útil al [construir aplicaciones web que utilizan APIs REST](https://arquitectoit.com/api-management/que-es-una-api/), donde los datos JSON a menudo necesitan ser enviados y recibidos.

