---
title: Sentencias Control en Java
permalink: /java/sentencias-control-java/
---
Un programa en [Java][ManualJava] se ejecuta en orden desde la primera sentencia hasta la última.

Si bien existen las **sentencias de control de flujo** las cuales permiten alterar el fujo de ejecución para tomar decisiones o repetir sentencias.

Dentro de las **sentencias de control de flujo** tenemos las siguientes:

*   Sentencias de decisión
*   Sentencias de bucle
*   Sentencias de ramificación

## Sentencias de Decisión

Son sentencias que nos permiten tomar una decisión para poder ejecutar un bloque de sentencias u otro.

Las sentencias de decisión son: `if-then-else` y `switch`.

Mediante `if-then-else` podremos evaluar una decisión y elegir por un bloque u otro.

~~~java
if (expresion) {
  // Bloque then
} else {
  // Bloque else
}
~~~

Mientras que con `switch` podremos evaluar múltiples decisiones y ejecutar un bloque asociado a cada una de ellas.

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
  …
  default:
      bloque_por_defecto;
}
~~~

## Sentencias de Bucle

Las **sentencias de bucle** nos van a permitir ejecutar un bloque de sentencias tantas veces como queramos, o tantas veces como se cumpla una condición.

En el momento que se cumpla esta condición será cuando salgamos del bucle.

Las sentencias de bucle en [Java][ManualJava] son: `while`, `do-while` y `for`.

En el caso de la sentencia `while` tenemos un bucle que se ejecuta mientas se cumple la condición, pero puede que no se llegue a ejecutar nunca, si no se cumple la condición la primera vez.

~~~java
while (expresion) {
  bloque_sentencias;
}
~~~

Por otro lado, si utilizamos `do-while`, lo que vamos a conseguir es que el bloque de sentencias se ejecute, al menos, una vez.

~~~java
do {
  bloque_sentencias;
} while (expresion)
~~~

La sentencia `for` nos permite escribir toda la estructura del bucle de una forma más acotada. Si bien, su cometido es el mismo.

~~~java
for (sentencias_inicio;expresion;incremento) {
  bloque_sentencias;
}
~~~

## Sentencias de ramificación

Las **sentencias de ramificación** son aquellas que nos permiten romper con la ejecución lineal de un programa.

El programa se va ejecutando de forma lineal, sentencia a sentencia. Si queremos romper esta linealidad tenemos las **sentencias de ramificación**.

Las **sentencias de ramificación** en [Java][ManualJava] son: `break` y `continue`.

En el caso de `break` nos sirve para salir de bloque de sentencias, mientras que `continue` sirve para ir directamente al siguiente bloque.

[ManualJava]: http://www.manualweb.net/tutorial-java/
