---
title: Expresiones, sentencias y bloques en Java
permalink: /java/expresiones-sentencias-bloques-java/
---

Un programa en [Java][ManualJava] se compone de un conjunto de sentencias que se ejecutan para resolver un problema. Las sentencias son el elemento básico de ejecución de los programa [Java][ManualJava].

A parte de las sentencias, en un programa [Java][ManualJava] nos encontraremos con expresiones y bloques.

## Expresiones

Una expresión es un conjunto de variables, operadores e invocaciones de métodos que se construyen para poder ser evaluadas retornando un resultado.

Ejemplos de expresiones son:

~~~java
int valor = 1;
if (valor 1 > valor2) { ... }
~~~

Cuando tengamos expresiones de evaluación complejas es recomendable que utilicemos paréntesis para saber cual es el orden de ejecución de operaciones.

Ya que si tenemos una expresión como

~~~java
2 + 10 / 5
~~~

No será la misma si ponemos

~~~java
(2 + 10) / 5
~~~

ó

~~~java
2 + (10 / 5)
~~~

En el caso de no utilizar paréntesis se ejecutará el orden de preferencia de operadores. En este caso la división tiene más preferencia que la suma.

## Sentencias

Una sentencia es la unidad mínima de ejecución de un programa. Un programa se compone de conjunto de sentencias que acaban resolviendo un problema. **Al final de cada una de las sentencias encontraremos un punto y coma (;)**.

Tenemos los siguientes tipos de sentencias.

### Sentencias de declaración

~~~java
int valor = 2;
~~~

### Sentencias de asignación

~~~java
valor = 2;
~~~

### Sentencias de incremento o decremento

~~~java
valor++;
~~~

### Invocaciones a métodos

~~~java
System.out.println("Hola Mundo");
~~~

### Creaciones de objetos

~~~java
Circulo miCirculo = new Circulo(2,3);
~~~

### Sentencias de control de flujo

~~~java
if (valor>1) { … }
~~~

## Bloques

Un bloque es un conjunto de sentencias los cuales están delimitados por llaves.

~~~java
if (expresion) {
    // Bloque 1
} else {
    // Bloque 2
}
~~~

[ManualJava]: http://www.manualweb.net/tutorial-java/
