---
title: Tipos de Datos PHP
permalink: /php/tipos-de-datos-php/
---

El lenguaje [PHP][PHP] nos ofrece 10 tipos de datos [PHP][PHP] primitivos que son:

* Boolean
* Integer
* Float
* string
* array
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
Otra forma de crear un tipo de dato string en [php][php] es mediante la sintaxis **Heredoc**


[PHP]: {{site.url}}/php/