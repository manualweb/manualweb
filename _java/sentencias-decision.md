---
title: Sentencias Decisión en Java
permalink: /java/sentencias-decision-java/
---

Las **sentencias de decisión** son sentencias que nos permiten tomar una decisión para poder ejecutar un bloque de sentencias u otro.

Las **sentencias de decisión** son: `if-then-else` y `switch`.

## if-then-else

La estructura de las sentencias `if-then-else es`:

~~~java
if (expresion) {
  // Bloque then
} else {
  // Bloque else
}
~~~

Se evalua la expresión indicada en la sentencia `if`. En el caso de que la expresión sea `true` se ejecutará el bloque de sentencias `then` y en el caso de que la expresión sea `false` se ejecutará el bloque de sentencias `else`.

La parte del `else` no tiene por qué existir. En este caso tendríamos una sentencia `if-then`.

~~~java
if (expresion) {
  // Bloque then
}
~~~

De esta forma podríamos tener el siguiente código fuente:

~~~java
int valor = 4;

if (valor < 10) {
  System.out.println("El número es menor de 10");
} else {
  System.out.println("El número es mayor de 10");
}
~~~

Las sentencias `if-then-else` pueden estar anidadas y así nos encontraríamos con una sentencia **if-then-elseif**, la cual tendría la siguiente estructura:

~~~java
if (expresion) {
  // Bloque then
} else if {
  // Bloque else
} else if {
  // Bloque else
} else if {
  // Bloque else
} ...
~~~

De esta forma podemos tener el siguiente código:

~~~java
int valor = 14;

if (valor < 10) {
  System.out.println("El valor es una unidad");
} else if (valor < 100) {
  System.out.println("El valor es una decena");
} else if (valor < 1000) {
  System.out.println("El valor es una centena");
} else if (valor < 10000) {
  System.out.println("El valor es un millar");
} else {
  System.out.println("Es un número grande");
}
~~~

## switch

Para los casos en los que se tienen muchas ramas o caminos de ejecución en una sentencia `if` tenemos la sentencia `switch`. La sentencia `switch` evalúa una expresión y ejecutará el bloque de sentencias que coincida con el valor de la expresión.

El valor de la expresión tiene que ser numérico. Aunque a partir de *Java SE 7* ya se pueden utilizar expresiones cuya evaluación sean cadenas.

La estructura de la sentencia switch es:

~~~java
switch (expresion) {
  case valor1:
    bloque1;
    break;
  case valor2:
    bloque2;
    break;
  case valor3:
    bloque3;
    break;
  ...
  default:
      bloque_por_defecto;
}
~~~

Es importante ver que se utiliza la sentencia **break.** La sentencia `break` hace que se salga de la sentencia `switch` y por lo tanto no se evalúe el resto de sentencias. Por lo tanto su uso es obligatorio al final de cada uno de los bloques.

Un ejemplo claro en el que podemos utilizar la sentencia `switch` es para evaluar el valor de un mes en numérico y convertirlo a cadena. Este código quedaría de la siguiente forma:

~~~java
int iMes = 3;
String sMes;

switch (iMes) {
    case 1:
        sMes = "Enero";
        break;
    case 2:
        sMes = "Febrero";
        break;
    case 3:
        sMes = "Marzo";
        break;
    case 4:
        sMes = "Abril";
        break;
    case 5:
        sMes = "Mayo";
        break;
    case 6:
        sMes = "Junio";
        break;
    case 7:
        sMes = "Julio";
        break;
    case 8:
        sMes = "Agosto";
        break;
    case 9:
        sMes = "Septiembre";
        break;
    case 10:
        sMes = "Octubre";
        break;
    case 11:
        sMes = "Noviembre";
        break;
    case 12:
        sMes = "Diciembre";
        break;
    default:
        sMes = "Mes incorrecto";
}

System.out.println(sMes);
~~~

Este mismo modelo lo podríamos haber implementado mediante una estructura `if-then-else`. Si bien, como podemos ver en el código queda más complejo

~~~java
if (iMes == 1){
    sMes = "Enero";
} else if (iMes == 2) {
    sMes = "Febrero";
} else if (iMes == 3) {
    sMes = "Marzo";
} else if (iMes == 4) {
    sMes = "Abril";
} else if (iMes == 5) {
    sMes = "Mayo";
} else if (iMes == 6) {
    sMes = "Junio";
} else if (iMes == 7) {
    sMes = "Julio";
} else if (iMes == 8) {
    sMes = "Agosto";
} else if (iMes == 9) {
    sMes = "Septiembre";
} else if (iMes == 10) {
    sMes = "Octubre";
} else if (iMes == 11) {
    sMes = "Noviembre";
} else if (iMes == 12) {
    sMes = "Diciembre";
} else {
    sMes = "Mes incorrecto";
}

System.out.println(sMes);
~~~

Otra cosa que tenemos que saber de la sentencia `switch` es que las evaluaciones case pueden ser múltiples. La estructura en este caso sería:

~~~java
switch (expresion) {
  case valor1: case valor2: case valor3:
    bloque1;
    break;
  case valor4: case valor5: case valor6:
    bloque2;
    break;
  ...
  default:
    bloque_por_defecto;
}
~~~

Esto podemos utilizarlo para saber los días del mes. El código sería el siguiente:

~~~java
int iMes = 3;
String sDias;

switch (iMes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        sDias = "El mes tiene 31 días";
        break;
    case 4: case 6: case 9: case 11:
        sDias = "El mes tiene 30 días";
        break;
    case 2:
        sDias = "El mes tiene 28 días (o 29 días si es año bisiesto)";
        break;          
    default:
        sDias = "Mes incorrecto";
}
~~~

Como vemos tenemos diferentes evaluaciones con la sentencia `case`.
