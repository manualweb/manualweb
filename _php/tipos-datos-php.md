---
title: Tipos de Datos PHP
permalink: /php/tipos-de-datos-php/
---

El lenguaje [PHP][PHP] nos ofrece 10 tipos de datos [PHP][PHP] primitivos que son:

* Boolean
* Integer
* Float
* String
* Array
* object
* callable
* iterable
* resource
* null

Veamos en detalle estos tipos de datos [PHP][PHP] y qué podemos hacer con ellos.

## Boolean
Los tipos de datos [PHP][PHP] booleanos representan un valor lógico dónde `true` es verdadero y `false` es falso. De esta manera que si queremos definir un tipo de dato boolean simplemente deberemos de asignar uno de estos dos valores a una variable.

~~~php
<?php
    $variable_booleana = TRUE;
?>
~~~

> Se puede escribir las constantes booleanas tanto en minúsculas `true` y `false` como en mayúsculas `TRUE` y `FALSE`.

Los siguientes valores de otros tipos de datos son identificados como `false` en el caso de que evaluemos una condición con variables de otro tipo. Esto son: entero (0), float (0.0), string ("" o "0") y un array con cero elementos.

Podemos forzar sobre una variable de otro tipo para convertirla en booleana. Para ello basta con indicar delante de la variable el valor `(bool)` o `(boolean)`.

~~~php
<?php
  $valor_entero = 0;
  $valor_booleano = (bool)$valor_entero;
?>
~~~

## Integer
Los tipos de datos [PHP][PHP] integer representan un valor de un número entero ya sean positivos o negativos. El máximo número entero representado es el que pueda ser almacenado en 32 bits (con signo), por lo que se podría llegar a representar unos 2 mil millones de números. Esto varia en las nuevas versiones de [PHP][PHP].

> Las constanes `PHP_INT_MIN` y `PHP_INT_MAX` nos indicarán cual es el valor máximo y mínimo que soporta el sistema en el que nos estamos ejecutando. De igual manera podemos ver si nuestro almacenamiento de enteros es de 32 bits o de 64 bits con la constante `PHP_INT_SIZE`, la cual nos devolverá un 4 para un sistema de 32 bits y un 8 para un sistema de 64 bits.

Los tipos de datos integer se pueden escribir en diferentes bases. En **base decimal (10)**, en **base hexadecimal (16)**, en **base octal (8)** y en **base binaria (2)**. Para poder identificar cada número entero deberemos de fijarnos en **la notación que se antepone al número**:

* **Números Decimales (10)**, sin notación. Así podremos tener el número `12`.
* **Números Hexadecimales (16)**, anteponiendo **0x**. Así podemos tener el número `0xC`.
* **Números Octales (8)**, anteponiendo **0**. Así podemos tener el número `014`.
* **Números Binarios (2)**, anteponiendo **0b**. Así podremos tener el número `0b1100`

~~~php
<?php

$decimal = 12;
$hexadecimal = 0xC;
$octal = 014;
$binario = 0b1100;

?>
~~~

> Todos los valores anteriores representan el número 12.

Podemos forzar una variable a convertirla en un número entero anteponiendo `(int)` o `(integer)`. Aunque también podemos utilizar la función `intval()`.

Tenemos que tener en cuenta los siguientes matices en la conversión a entero:

* Con los tipos booleanos el valor `true` será un `1` y el valor `false` será un 0.
* Para los tipos decimales o float se *redondeará hacía cero*.

~~~php
<?php

$valor_booleano = true;
$valor_float = 8.9;

echo 'Valor booleano '.(int)$valor_booleano.'<br>';
echo 'Valor float '.(int)$valor_float.'<br>';

echo 'Valor booleano '.intval($valor_booleano).'<br>';
echo 'Valor float '.intval($valor_float).'<br>';

?>
~~~

## Float
Los tipos de datos [PHP][PHP] float representan a los números que contienen decimales. Son conocidos como números en coma flotante (de ahí lo de `float`). Para definir un tipo de dato de tipo float simplemente tendremos que asignar a una variable un valor decimal.

Podemos escribir un valor decimal de dos formas diferentes:

* **Números decimales**, será un número y sus decimales separados mediante un punto.
* **Forma exponencial**, será un número y un exponente para indicar para representar el desplazamiento de los decimales. Que puede ser positivo o negativo. El exponente se representa mediante la letra e.

~~~php
<?php

$decimales = 1.234; 
$exponencial = 1234e-3; 

?>
~~~

Podemos forzar la conversión de cualquier valor a un tipo de datos `float` mediante una operación de casting `(float)` o utilizando la función `floatval()`.

## String
El tipos de dato [php][php] string nos sirve para representar las cadenas de texto. Podemos generar un tipo de dato `string` entrecomillando un conjunto de caracteres mediante comillas simples (') o comillas dobles (").

Así podemos crear un tipo de dato string de la siguiente forma:

~~~php
<?php

$cadena = "Hola Mundo";
$nombre = 'Manual Web';

echo $cadena;
echo $nombre;

?>
~~~

Además podemos crear cadenas de texto que ocupen varias líneas. Esto lo haremos de la siguiente manera:

~~~php
<?php

$cadena_lineas = 'Esto es una cadena
que ocupa
varias líneas de código';

echo $cadena_lineas;

?>
~~~

Otro punto importante a la hora de manejar tipos de datos string con [php][php] es que podemos incluir el valor de una variable dentro de una cadena de texto simplemente indicando el nombre de la variable. Así podríamos escribir el siguiente código:

~~~php
<?php

$nombre = "Manual Web";
$saludo = "Hola, $nombre";

echo $saludo;

?>
~~~

> La sustitución de variables dentro de cadenas de texto string solo funcionan cuando definimos la cadena de texto mediante comillas dobles.

### Secuencias de Escape

Cuando creemos las cadenas de texto puede aparecernos la necesidad de incluir una comilla simple o compleja dentro del texto. Para ello deberemos de utilizar la secuencia de escape `/'` o `/"` de la siguiente forma:

~~~php
<?php

$comilla_doble = "Este texto contiene una comilla doble \" ";
$comilla_simple = 'Este texto contiene una comilla simple \'';

?>
~~~

Tenenos otras secuencias de escape para caracteres que podemos incluir en una cadena de texto:

* `\n`, avance de línea.
* `\r`, retorno de carro.
* `\t`, tabulador horizontal.
* `\v`, tabulador vertical.
* `\f`, avance de página.
* `\\`, barra invertida.
* `\$`, símbolo del dolar.
* `\'`, comilla simple.
* `\"`, comilla doble.

> Las secuencias de escape solo funcionan si utilizamos cadenas de texto string con comillas dobles. En el caso de ser comillas simples se muestra directamente la secuencia de escape como texto. Exceptuando la de la barra invertida.

### Heredoc
Otra forma de crear un tipo de dato string en [php][php] es mediante la sintaxis **Heredoc**. Esta sintaxis es de la siguiente forma:

~~~php
$variable = <<< INDICADOR
Texto
INDICADOR;
~~~

El texto que se le asigna es el que va entre los dos indicadores. Los indicadores tienen que tener el mismo nombre. De esta manera podríamos generar el siguiente texto con el formato **Heredoc**.

~~~php
<?php

$cadena = <<< SALUDO
Esto es texto que va dentro de una cadena mediante sintaxis heredoc
SALUDO;

echo $cadena;

?>
~~~

Dentro de la cadena de caracteres podemos insertar secuencias de escape y referencia a otras variables, tal y como podemos ver en el siguiente ejemplo.

~~~php
<?php

$nombre = "Manual Web";
$cadena = <<< SALUDO
Esto es un saludo a $nombre que va dentro de una cadena mediante sintaxis heredoc
SALUDO;

echo $cadena;

?>
~~~

### Nowdoc
Existe una última forma de crear cadenas de texto y esto es mediante el formato **Nowdoc**. Su funcionamiento es el mismo que el de **Heredoc** pero con las restricciones que tienen las cadenas de texto con comillas simples. Es decir no se analiza el texto por lo cual no se podrán utilizar secuencias de escape o variables dentro del texto.

La estructura **Nowdoc** es la siguiente:

~~~php
$variable = <<< 'INDICADOR'
Texto
INDICADOR;
~~~

Como vemos el indicador inicial va entre comillas simples. De esta forma podemos crear una cadena de texto mediante el formato **NowDoc** de la siguiente forma:

~~~php
<?php

$cadena = <<< 'SALUDO'
Esto es texto que va dentro de una cadena mediante sintaxis heredoc
SALUDO;

echo $cadena;

?>
~~~

### Análisis de Variables en Cadenas de Texto
Cuando utilizamos cadenas de texto delimitadas por comillas dobles o el formato **Heredoc** las variables que hay dentro de la cadena son interpretadas.

Esto ya lo veíamos en el anterior ejemplo codificado de la siguiente manera:

~~~php
<?php

$nombre = "Manual Web";
$saludo = "Hola, $nombre";

echo $saludo;

?>
~~~

En el que la variable `$nombre` es interpretada dentro de la cadena de texto definida en `$saludo`.

Cuando utilicemos las variables hay que tener cuidado si queremos posicionar texto justamente detrás de la variable. ya que dicha variable se interpreta por el nombre.

De esta manera el siguiente código no nos funcionará:

~~~php
<?php

$tiempo = "día";
echo "Fue el primer $tiempo de los 5 $tiempos";

?>
~~~

Ya que buscará la variable `$tiempos` en vez de la variable `$tiempo`.

En este caso lo que tenemos que hacer es incluir el nombre de la variable dentro de llaves {}. Es lo que se conoce como **sintaxis simple**.

~~~php
<?php

$tiempo = "día";
echo "Fue el primer $tiempo de los 5 ${tiempo}s";

?>
~~~

También se puede incluir la variable entera dentro de las llaves {}. Esto se conoce como **sintáxis compleja**.

~~~php
<?php

$tiempo = "día";
echo "Fue el primer $tiempo de los 5 {$tiempo}s";

?>
~~~

### Concatenar Cadenas
Un operador muy útil en [php][php] es el punto. Este operador nos permite concatenar cadenas. Simplemente tendremos que poner el punto entre dos cadenas, ya sean definidas directamente como cadenas o en variables.

De esta manera podríamos tener el siguiente código:

~~~php
<?php
$uno = "Hola ";
$dos = "¿cómo estás?";

echo $uno."Luis ".$dos;

?>
~~~

> Hay que tener cuidado ya que otros lenguajes de programación utilizan el operador suma `+` para concatenar cadenas. En el caso de [php][php] el operador suma `+` suma el valor numérico de las cadenas.

### Convertir a Cadenas
Si queremos convertir otro tipo de dato en cadena podemos bien utilizar un casting mediante `(string)` o bien utilizar la función `strval()`.

En el siguiente código vemos cómo podemos utilizarlo:

~~~php
<?php

$valor_booleano = true;
$valor_entero = 1234;

echo 'Valor booleano '.(string)$valor_booleano.'<br>';
echo 'Valor entero '.(string)$valor_entero.'<br>';

echo 'Valor booleano '.strval($valor_booleano).'<br>';
echo 'Valor entero '.strval($valor_entero).'<br>';


?>
~~~


## Arrays
Un array en [PHP][PHP] es un **mapa ordenado**, es decir, cada una de las posiciones tiene una clave asociada.
De esta manera podemos utilizar un array en [PHP][PHP] como array, lista, tabla hash, diccionario, colección, pila, cola,...

### Arrays multidimensionales
Un elemento del array puede ser otro array. Así que podremos tener arrays multidimensionales.

### Crear un Array
Para crear un array en [PHP][PHP] podemos utilizar el constructor `array()` de la siguiente manera:

~~~php
array(
  clave1 => valor1,
  clave2 => valor2,
  clave3 => valor3,
  ...
)
~~~

Así podemos crear el siguiente array:

~~~php
<?php
$nombres = array(
    0=>"Luis",
    1=>"Marta",
    2=>"Víctor"
    );
?>
~~~

Esta clave no tiene por qué ser secuencial. Podríamos crear el array de la siguiente forma:

~~~php
<?php
$nombres = array(
    0=>"Luis",
    2=>"Marta",
    4=>"Víctor"
    );
?>
~~~

En estos primeros ejemplos hemos definido el array con claves numéricas. Si bien podríamos definir el array con claves de tipo cadena de texto.

~~~php
<?php
$nombres = array(
    "nombre_1"=>"Luis",
    "nombre_2"=>"Marta",
    "nombre_3"=>"Víctor"
    );
?>
~~~

En el caso de que no indiquemos clave, esta se asumirá como una clave numérica que empiece en 0. La definición del array se hará de la siguiente forma:

~~~php
<?php
$nombres = array(
    "Luis",
    "Marta",
    "Víctor"
    );
?>
~~~

> Las claves de este array serán 0, 1 y 2.

Otra alternativa es no utilizar el constructor `array()` y declarar los elementos mediante los operadores corchetes.

~~~php
<?php
$nombres [
    "Luis",
    "Marta",
    "Víctor"
    ];
?>
~~~

### Acceder elemento Array PHP
Si queremos acceder a los elementos de un Array [PHP][PHP] deberemos de utilizar el operador corchete especificando el nombre de la clave en el interior.

Así, si hemos definido el array con claves, podremos acceder a un elemento de la siguiente manera:

~~~php
<?php
$nombres = [
    "nombre_1"=>"Luis",
    "nombre_2"=>"Marta",
    "nombre_3"=>"Víctor"
    ];

echo $nombres["nombre_2"];
?>
~~~

Y si no lo hemos definido con claves utilizamos el índice numérico, recordando que el primer índice es un 0.

<?php

$nombres = [
    "Luis",
    "Marta",
    "Víctor"
    ];

echo $nombres[1];

?>

### Modificar elemento Array PHP
En el caso de que queramos modificar un elemento de un array [PHP][PHP] lo que haremos será utilizar el operador corchete para indicar el elemento que queremos modificar del array y el operador = de asignación para asignarle un nuevo valor.

Siguiendo con nuestro array con nombres si queremos modificar el elemento que se encuentra en el índice 1 haremos lo siguiente:

~~~php
<?
$nombres[1] = "Nuevo Valor";
?>
~~~~

Así el código completo con la modificación de elementos de un array [PHP][PHP] sería el siguiente:

~~~php
<?php

$nombres = [
    "Luis",
    "Marta",
    "Víctor"
    ];

echo $nombres[1];

$nombres[1] = "Virginia";

echo $nombres[1];

?>
~~~

### Eliminar un elemento de un array

$unset


[PHP]: {{site.url}}/php/