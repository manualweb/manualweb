---
title: Variables en Java
permalink: /java/variables-java/
---

## ¿Qué son las variables en Java?

Las variables Java son un espacio de memoria en el que guardamos un determinado valor (o dato). Para definir una variable seguiremos la estructura:

~~~java
[privacidad] tipo_variable identificador;
~~~

[Java][ManualJava] es un lenguaje de tipado estático. Por lo cual todas las variables tendrán un tipo de dato (ya sea un **tipo de dato primitivo** o una **clase**) y un nombre de identificador.

El tipo de dato se asignará a la hora de definir la variable. Además, en el caso de que las variables sean propiedades de objetos tendrán una privacidad.

Ejemplos de variables serían...

~~~java
int numero = 2;
String cadena = "Hola";
long decimal = 2.4;
boolean flag = true;
~~~

Las variables son utilizadas como propiedades dentro de los objetos.

~~~java
class Triangulo {
    private long base;
    private long altura;
}
~~~

> No te preocupes por el concepto de objeto, ya que lo revisaremos más adelante cuando hablemos de la Programación Orientada a Objetos

## Tipos de variables en Java

Dentro de [Java][ManualJava] podemos encontrar los siguientes tipos de variables:

*   **Variables de instancia (campos no estáticos)**, son las variables que están definidas dentro de un objeto pero que no tienen un modificador de estáticas (static). Suelen llevar un modificador de visibilidad (public, private, protected) definiéndose.

~~~java
class Triangulo {
    private long base;
    private long altura;
}
~~~

*   **Variables de clase (campos estáticos)**, son aquellas variables que están precedidas del modificador static. Esto indica que solo hay una instancia de dicha variable. Es decir, aunque tengamos N objetos de la clase, la variable estática solo se instancia una vez.

~~~java
class Triangulo {
    static long lados = 3;
}
~~~

Si además queremos que el valor no pueda cambiar nunca la definiremos como final.

~~~java
class Matematicas {
    final static long PI = 3.14159;
}
~~~

*   **Variables locales**, son variables temporales cuyo ámbito de visibilidad es el método sobre el que están definidas. No pueden ser accedidas desde otra parte del código. Se las distingue de las variables de instancia ya que estas no llevan modificadores de visibilidad delante.

~~~java
int variable = 2;
~~~

*   **Parámetros**, son las variables recibidas como parámetros de los métodos. Su visibilidad será el código que contenga dicho método.

~~~java
public Triangulo(long base, long altura){...}
~~~

## Nombres de las variables Java

Cuando vayamos a dar un nombre a una variable deberemos de tener en cuenta una serie de normas. Es decir, no podemos poner el nombre que nos dé la gana a una variable.

Los identificadores son secuencias de texto unicode, sensibles a mayúsculas cuya primer carácter solo puede ser una letra, número, símbolo dolar $ o subrayado _ . Si bien es verdad que el símbolo dolar no es utilizado por convención.

Es recomendable que los nombres de los identificadores sean legibles y no acrónimos que no podamos leer. De tal manera que a la hora de verlos se auto-documenten por sí mismos. Además estos identificadores nunca podrán coincidir con las palabras reservadas.

Algunas reglas no escritas, pero que se han asumido por convención son:

*   Los identificadores siempre se escriben en minúsculas. (pe. nombre). Y si son dos o más palabras, el inicio de cada siguiente palabra se escriba en mayúsculas (pe. nombrePersona)
*   Si el identificador implica que sea una constante. Es decir que hayamos utilizado los modificadores final static, dicho nombre se suele escribir en mayúsculas (pe. LETRA). Y si la constante está compuesta de dos palabras, estas se separan con un subrayado (pe. LETRA_PI).

[ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
