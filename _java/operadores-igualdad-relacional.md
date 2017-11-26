---
title: Operadores Igualdad y Relacionales en Java
permalink: /java/operadores-igualdad-relacionales-java/
---

Los operadores de igualdad y relacionales en [Java][ManualJava] son aquellos que nos permiten comparar el contenido de una variable contra otra atendiendo a si son variables con un valor igual o distinto o bien si los valores son mayores o menores.

El listado de operadores de igualdad y relacionales en [Java][ManualJava] es:

| Operador | Descripción       |
| -------- | ----------------- |
| ==       | igual a           |
| !=       | no igual a        |
| >        | mayor que         |
| >=       | mayor o igual que |
| <        | menor que         |
| <=       | menor o igual que |

## Operadores de Igualdad

Mediante los operadores de igualdad podemos comprobar si dos valores son iguales **(operador ==)** o diferentes **(operador !=)**.

La estructura de los **operadores de igualdad** es la siguiente:

~~~java
vble1 == vble2
vble1 != vble2
~~~

Podemos utilizar estos operadores de igualdad en [Java][ManualJava] de la siguiente forma:

~~~java
int vble1 = 5;
int vble2 = 3;

if (vble1 == vble2)
  System.out.println("Las variables son iguales");

if (vble1 != vble2)
  System.out.println("Las variables son distintas");
~~~

## Operadores relacionales

Permiten comprobar si un valor es mayor que **(operador >)**, menor que **(operador <)**, mayor o igual que **(>=)** y menor o igual que **(<=)**.

Al final el operador lo valida entre dos valores o variables con la estructura:

~~~java
vble1 > vble2
vble1 < vble2
vble1 >= vble2
vble1 <= vble2
~~~

De esta forma podemos tener un código fuente que nos ayude a realizar estas validaciones de relación:

~~~java
int vble1 = 5;
int vble2 = 3;

if (vble1 > vble2)
  System.out.println("La variable 1 es mayor que la variable 2");

if (vble1 < vble2)
  System.out.println("La variable 1 es menor que la variable 2");

if (vble1 >= vble2)
  System.out.println("La variable 1 es mayor o igual que la variable 2");

if (vble1 <= vble2)
  System.out.println("La variable 1 es menor o igual que la variable 2");
~~~

 [ManualJava]: http://www.manualweb.net/tutorial-java/
