---
title: Literales en Java
permalink: /java/literales-java/
---

## ¿Qué son los literales Java?

Los valores literales son aquellos que podemos asignar a las variables. Dependiendo del tipo de variable podremos asignar unos valores u otros.

## Literales de enteros

Los enteros que podemos utilizar serán **byte**, **short**, **int** y **long**. Los literales que les asignemos siempre será un número entero.

~~~java
byte variableByte = 12;
short variableShort = 12;
int variableInt = 12;
long variableLong = 12;
~~~

Si bien para el caso del tipo **long** podemos crear literales de enteros que acaben en L (mayúscula o minúscula, aunque por legilibilidad se recomienda la primera)

~~~java
long variableLong = 12L;
~~~

Hay otros valores que pueden ser manejados por los literales enteros, para cuando representemos el número en diferentes bases. Por ejemplo cuando los manejemos como binarios o hexadecimales. Para este caso habrá que manejar literales de enteros que tengan dicho formato.

~~~java
int variableBinaria = 011010;
int variableHexadecimal = 0x1a;
~~~

## Literales de decimales

Los dos tipos de datos de decimales que podemos manejar son **float** y **double**. Para estos casos la representación del literal de decimales serán con separación de un punto entre la parte entera y la parte decimal.

~~~java
float variableFloat = 12.2;
double variableDouble = 12.2;
~~~

De igual manera podemos utilizar las letras F o f para el tipo de dato **float** y D o d para el tipo de dato **double**. Siempre, por legilibilidad se recomienda la letra en mayúsculas.

~~~java
float variableFloat = 12.2F;
double variableDouble = 12.2D;
~~~

## Literales de caracteres y cadenas

Tanto los caracteres del tipo de dato **char**, como las cadenas del tipo de datos **String** contienen caracteres Unicode UTF-16.

Los caracteres UTF-16 se pueden escribir directamente en la cadena o si nuestro editor de textos no nos permite el manejo de esa codificación los podemos poner escapados en el formato.

~~~java
'uCODIGOUNICODE'
~~~

Por ejemplo la letra como la ñ se escaparía de la siguiente forma:

~~~java
'u00F1'
~~~

Para utilizarla en una cadena de texto “España” podríamos poner

~~~java
String pais = "Espau00F1a";
~~~

Para los caracteres utilizaremos comillas simples para delimitarlos, mientras que para las cadenas utilizaremos comillas dobles.

~~~java
char variableChar = ‘a’;
String variableString = “cadena”;
~~~

Además en las cadenas podemos utilizar una serie de secuencias de escape, las cuales empiezan por una barra invertida y siguen con un modificador:

| Secuencia | Significado       |
| --------- | ----------------- |
| b         | retroceso         |
| t         | tabular la cadena |
| n         | salto de línea    |
| f         | form feed         |
| r         | retorno de carro  |
| \'        | comilla simple    |
| \"        | comilla doble     |
| \\        | barra invertida   |

## Literales subrayados

A partir de la versión 1.7 de [Java][ManualJava] se puede utilizar el subrayado para realizar separaciones entre números para una mejor visualización.

A todos los efectos el valor del número es como si no existiese el carácter de subrayado.

~~~java
long tarjetaCredito = 1234_5678_9012_3456L;
long mascaraBinaria = 0b11010010_01101001_10010100_10010010;
~~~

No podremos utilizar el literal de subrayado al principio o final del número, alrededor de un punto decimal, ni entre el número y un literal de entero o decimal (D, F o L).

[ManualJava]: http://www.manualweb.net/tutorial-java/
