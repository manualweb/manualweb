---
title: Operadores Unarios en Java
permalink: /java/operadores-unarios-java/
---

Los operadores unarios en [Java][ManualJava] son aquellos que solo requieren un operando para funcionar.

Los **operadores** unitarios que tenemos en [Java][ManualJava] son:

| Operador | Descripción                                                      |
| -------- | ---------------------------------------------------------------- |
| +        | Operador unario suma. Indica un número positivo.                 |
| -        | Operador unario resta. Niega una expresión.                      |
| ++       | Operador de incremento. Incrementa el valor en 1.                |
| --       | Operador de decremento. Decrementa el valor en 1.                |
| !        | Operador de complemento lógico. Invierte el valor de un booleano |

## Operadores unarios suma o resta

Los operadores unitarios de suma o resta son muy sencillos de utilizar. En el caso del operador unitario suma su uso es redundante. Con el operador unitario resta podemos invertir un valor.

Por ejemplo podríamos tener el siguiente código:

~~~java
int valor = 2;
System.out.println(-valor); // Imprimirá por pantalla un -2
~~~

## Operadores de incremento y decremento

Los operadores de incremento se pueden aplicar como prefijo o como sufijo.

~~~java
++ variable;
variable ++;
-- variable;
variable --;
~~~

En todos los casos el valor de la variable acabará con una unidad más (para el operador de incremento) o con una unidad menos (para el operador de decremento).

Si bien si están participando en una asignación hay que tener cuidado en si utilizamos el operador como prefijo o como sufijo.

En el caso de utilizarlo como prefijo el valor de asignación será el valor del operando más el incremento de la unidad. Y si lo utilizamos como sufijo se asignará el valor del operador y luego se incrementará la unidad sobre el operando.

Es más sencillo verlo en código:

~~~java
suma = ++vble1;
~~~

Sería lo mismo que poner

~~~java
vble1 = vble1 + 1;
suma = vble1;
~~~

Mientras que si escribimos:

~~~java
suma = vble1++;
~~~

Sería lo mismo que poner:

~~~java
suma = vble1;
vble1 = vble1 + 1;
~~~

Exactamente lo mismo le sucede al operador de decremento, pero restando una unidad.

## Operador de complemento lógico

El operador de complemento lógico sirve para negar un valor lógico. Se suele utilizar delante de una operación de evaluación booleana. Normalmente en sentencias de decisión o bucles.

La estructura es:

~~~java
! (expresion)
~~~

Si la expresión era un **true** la convierte en **false** y si era **false** la convierte en **true**.

Podemos verlo en el siguiente ejemplo:

~~~java
int vble1 = 2;
int vble2 = 3;

if !(vble1 > vble2)
    System.out.println("variable 1 es más pequeña que la variable 2");
~~~

Como podemos observar el valor de la expresión evaluada es convertido.

[ManualJava]: http://www.manualweb.net/tutorial-java/
