---
title: Tipos de Datos PHP
permalink: /php/tipos-de-datos-php/
---

El lenguaje [PHP][PHP] nos ofrece 10 tipos de datos [PHP][PHP] primitivos que son:

* boolean
* integer
* float
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

* **Números decimales (10)**, sin notación. Así podremos tener el número `12`.
* **Números Hexadecimales (16)**, anteponiendo **0x**. Así podemos tener el número `0xC`.
* **Números Octales (8)**, anteponiendo **0**. Así podemos tener el número `014`.
* **Números Binarios (2)**, anteponiendo **0b**. Así podremos tener el número `0b1100`

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



[PHP]: {{site.url}}/php/