---
title: Diccionarios en PHP
date: 2024-05-28
last_modified_at: 2024-05-28
permalink: /php/diccionarios-en-php/
excerpt: "Cómo definir diccionarios en PHP y manipularlos para poder acceder, actualizar y borrar sus elementos mediante sus claves."
tags: [diccionario,unset,array_keys,array_key_exists]
image:
  path: /img/covers/php-cover.webp
---

Hasta ahora hemos visto cómo [manejar los arrays en PHP como si fuesen arrays indexados](https://manualweb.net/php/manejar-arrays-en-php/), en los que cada posición se  identifica por el valor de un índice. En este caso vamos a ver cómo podemos utilizar los [arrays en PHP](https://manualweb.net/php/manejar-arrays-en-php/) como si fuesen **arrays asociativos o diccionarios en PHP**.


## ¿Qué es un diccionario en PHP?


Un diccionario en [PHP](https://www.manualweb.net/php/) es una estructura de datos que **permite almacenar pares de clave-valor**. A diferencia de los arrays indexados, donde los índices son números enteros, **en un diccionario cada valor está asociado a una clave única**. Esta clave puede ser un número o una cadena de texto.


## Cómo definir un diccionario en PHP


Para definir un **diccionario en** [**PHP**](https://www.manualweb.net/php/) podemos utilizan tanto la función `array()` como el operador corchete `[]`, lo importante es que la definición de los elementos del diccionario se definen mediante pares clave/valor.


La sintaxis para poder definir un **diccionario en** [**PHP**](https://www.manualweb.net/php/) sería la siguiente:


```php
$diccionario = array(
	'clave1' => 'valor1',
	'clave2' => 'valor2',
	'clave3' => 'valor3',
	...
	'claveN' => 'valorN'
);
```


También podríamos **definir un diccionario** [**PHP**](https://www.manualweb.net/php/) **con el operador corchete** `[]` de la siguiente manera:


```php
$diccionario = [
	'clave1' => 'valor1',
	'clave2' => 'valor2',
	'clave3' => 'valor3',
	...
	'claveN' => 'valorN'
];
```


De esta manera podríamos **definir un diccionario** [**PHP**](https://www.manualweb.net/php/) que representase los valores de una persona de la siguiente forma:


```php
$persona = [
  'nombre' => 'Luis',
  'edad' => 3,
  'sexo' => 'M',
  'ciudad' => 'Barcelona'
]
```


## Acceder a un elemento de un diccionario en PHP


Para acceder a los elementos de un diccionario en [PHP](https://www.manualweb.net/php/) será tan sencillo como utilizar el operador corchete `[]` y pasar como parámetro el identificador de la clave que hemos utilizado en la definición de los atributos del diccionario.


La sintaxis para poder acceder a un elemento de un diccionario en [PHP](https://www.manualweb.net/php/) será la siguiente:


```php
$valor = $diccionario['clave'];
```


De esta manera podremos mostrar el valor del nombre del diccionario definiendo a una persona de la siguiente forma:


```php
echo $persona['nombre'];  // Mostrará "Luis"
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ejk3bvy](https://onecompiler.com/php/42ejk3bvy)


Cuando manejamos diccionarios en [PHP](https://www.manualweb.net/php/) deberemos de tener cuidado a la hora de manejar las claves. Ya que en el caso de que la clave a la que estamos intentando acceder no exista se generará un error de nivel `E_NOTICE`.


## Manejo de las claves de un diccionario


Antes de seguir conociendo como manipular los diccionarios en [PHP](https://www.manualweb.net/php/) nos vamos a centrar un poco en conocer la gestión de las claves. Ya que hemos visto que intentar acceder a una clave que no existe puede suponer un problema que se reporte como error `E_NOTICE`.


### Listar las claves de un diccionario en PHP


Para listas las claves de un diccionario en [PHP](https://www.manualweb.net/php/), es decir, para conocer todas las claves que existen, disponemos de la función `array_keys()`. La sintaxis de la función `array_keys()` es la siguiente:


```php
$claves = array_keys($diccionario);
```


La función `array_keys()` devuelve un array con todas las claves del diccionario que pasamos como parámetro.


Por lo que podremos recorrer mediante un bucle `foreach` el diccionario para poder mostrar todas sus claves. Por ejemplo, podemos recorrer las claves de nuestro diccionario persona de la siguiente forma:


```php
$persona = [
  'nombre' => 'Luis',
  'edad' => 3,
  'sexo' => 'M',
  'ciudad' => 'Barcelona'
];

$claves = array_keys($persona);

foreach($claves as $clave){
	echo $clave . "\\n";
}
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ejjxr5h](https://onecompiler.com/php/42ejjxr5h)


En este caso, el [script en PHP](https://lineadecodigo.com/categoria/php/) mostrará en la salida estándar las claves _'nombre', 'edad', 'sexo'_ y _'ciudad'_.


### Comprobar que una clave existe: isset()


Comprobar que una clave existe, antes de acceder a un diccionario, es una buena práctica para evitar que se produzca un error. Tenemos dos formas de poder comprobar si una clave existe en un diccionario en [PHP](https://www.manualweb.net/php/).


La primera es mediante la función `isset()`, en este caso la sintaxis será la siguiente:


```php
isset($array('clave'));
```


En este caso tenemos que pasar como parámetro de la función `isset()` el array accediendo a la clave de la que queremos comprobar su existencia. Si existe la clave la función devolverá el valor `true` y en el caso de que no exista devolverá el valor `false`.


La función `isset()` es una función ampliamente utilizadada para comprobar si las variables en PHP han sido inicializadas. Es por ello que si el valor de una de las claves del diccionario en [PHP](https://www.manualweb.net/php/) no se ha inicializado y tiene el valor `null`, la función `isset()` nos devolverá false.


Es decir, si ampliamos el código de nuestro **diccionario en** [**PHP**](https://www.manualweb.net/php/) para representar una persona a lo siguiente:


```php
$persona = [
  'nombre' => 'Luis',
  'edad' => 3,
  'sexo' => 'M',
  'ciudad' => 'Barcelona',
  'trabajo' => null
];
```


Dónde hay una clave con valor `null`. Y utilizamos la comprobación:


```php
if (isset($persona['trabajo'])) {
    echo 'La clave trabajo existe en el diccionario';
} else {
    echo 'La clave trabajo NO existe en el diccionario';
}
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42eeye3c5](https://onecompiler.com/php/42eeye3c5)


Veremos que nos dice que la clave ‘trabajo’ no existe, cuando si que existe, pero con un valor `null`.


### Comprobar que una clave existe: array_key_exists()


Para evitar los errores con las claves que tengan asociado el valor de `null` tenemos la alternativa, más recomendada, de la función `array_key_exists()` para comprobar que una clave existe dentro de un diccionario


La sintaxis de la función `array_key_exists()` es la siguiente:


```php
array_key_exists('clave', $diccionario);
```


La función recibe como primer parámetro el nombre de la clave de la que queremos conocer su existencia y como segundo parámetro la variable que contiene el diccionario sobre el que queremos realizar la comprobación.


En el caso de que exista la clave, la función `array_key_exists()` devolverá `true` y en el caso de que no exista la clave devolverá el valor `false`.


Por lo que volvemos a realizar la comprobación mediante el bucle `if` de si existe la cadena ‘trabajo’ en el diccionario:


```php
if (array_key_exists('trabajo', $persona)) {
    echo 'La clave trabajo existe en el diccionario';
} else {
    echo 'La clavetrabajo NO existe en el diccionario';
}
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ehgmkf7](https://onecompiler.com/php/42ehgmkf7)


Esta función devolverá `true` independientemente de si la clave existe con un valor `null` en el diccionario y `false` en caso contrario.


Por lo tanto es normal que combinemos el método `isset()` o el método `array_key_exists()` con el acceso a una clave del diccionario y así evitar que nos salte un error `E_NOTICE`.


En este caso el código quedaría de la siguiente forma:


```php
	
$persona = [
	'nombre' => 'Luis',
	'edad' => 3,
	'sexo' => 'M',
	'ciudad' => 'Barcelona',
	'trabajo' => null
];
	
if (array_key_exists('nombre', $persona)) {
	echo $persona['nombre'];
}
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ehh2cbc](https://onecompiler.com/php/42ehh2cbc)


## Insertar un elemento en un diccionario en PHP


Ya hemos visto cómo podemos acceder a las propiedades de un diccionario en [PHP](https://www.manualweb.net/php/), ahora vamos a ver cómo podemos insertar un elemento en un diccionario en [PHP](https://www.manualweb.net/php/)


Para poder insertar un elemento en un diccionario en [PHP](https://www.manualweb.net/php/) seguiremos la siguiente sintaxis:


```php
$diccionario['claveNueva'] = 'valorNuevo';
```


Lo que hacemos es poner dentro del operador corchete `[]` el nombre del nuevo elemento del diccionario y le asignamos el valor.


De esta forma podemos añadir al diccionario de persona un nuevo elemento que sea “altura” mediante el siguiente código:


```php
$persona = [
  'nombre' => 'Luis',
  'edad' => 3,
  'sexo' => 'M',
  'ciudad' => 'Barcelona',
  'trabajo' => null
];

$persona['altura'] = 100;

foreach (array_keys($persona) as $clave) {
  echo "Clave '".$clave."' con valor ".$persona[$clave]."\n";
}
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ehhbmt8](https://onecompiler.com/php/42ehhbmt8)


## Actualizar elementos en un diccionario en PHP


Si queremos actualizar un elemento dentro de un diccionario en [PHP](https://www.manualweb.net/php/) lo que tendremos que hacer es acceder al elemento mediante su clave y el operador corchete `[]`. La sintaxis para actualizar elementos en un diccionario en [PHP](https://www.manualweb.net/php/) sería la siguiente:


```php
$diccionario['clave'] = 'nuevoValor';

```


Simplemente usamos el operador de asignación `=` para establecer un nuevo valor para la clave específica. Si la clave ya existe en el diccionario, su valor se reemplazará con el nuevo valor. Si la clave no existe, se agregará al diccionario con el nuevo valor.


De esta manera, si quisiéramos actualizar el valor de la propiedad ‘edad’ de nuestro diccionario persona haríamos lo siguiente:


```php
$persona['edad'] = 4;
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ejj5a4w](https://onecompiler.com/php/42ejj5a4w)


Con este sencillo código habremos cambiado la edad de la persona de 3 a 4 años.


## Eliminar elementos de un diccionario PHP


Por último vamos a ver cómo podemos eliminar elementos de un diccionario [PHP](https://www.manualweb.net/php/). Ya vimos que [con los arrays indexados teníamos dos alternativas para eliminar elementos de un array](https://manualweb.net/php/manejar-arrays-en-php/), una era utilizar la función `unset()` y otra era utilizar la función `array_splice()`.


En el caso de los diccionarios PHP podemos utilizar ambas funciones, pero como en este caso no accedemos y no necesitemos una reindexación del array nos centraremos en la función `unset()`.


La sintaxis de la función `unset()` para poder eliminar un elemento de un diccionario [PHP](https://www.manualweb.net/php/) será la siguiente:


```php
unset($diccionario['clave']);
```


Con esto, borraríamos del diccionario el elemento que tuviese asociado la clave 'clave'. Así, si quisiéramos eliminar la ciudad de nuestro diccionario persona, tendríamos que hacer lo siguiente:


```php
unset($persona['ciudad']);
```


> 💻 Ejecuta este código en [https://onecompiler.com/php/42ejjpm8h](https://onecompiler.com/php/42ejjpm8h)

