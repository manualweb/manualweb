---
title: Clase String&colon; Representando una cadena
permalink: /java/clase-string-representando-una-cadena/
---

Una cadena de texto no deja de ser más que la sucesión de un conjunto de caracteres alfanuméricos, signos de puntuación y espacios en blanco con más o menos sentido.

Podemos encontrarnos desde la archiconocida cadena “Hola Mundo” y la no menos “Mi primera cadena de texto”, pasando por las cadenas de texto personalizadas “Víctor”, “Víctor Cuervo”, las cadenas de depuración “¿Aquí?”, “Paso 1”, “Paso 2”,... hasta las inclasificables “asdf”.

Todas ellas serán representadas en java con la clase [```String```][String] y [```StringBuffer```][StringBuffer]. Aunque de momento nos centraremos en la primera.

Para encontrar la clase [```String```][String] dentro de las librerías de [Java][ManualJava] tendremos que ir a [```java.lang.String```][JavaLangString].

## Creando una cadena
Para crear una cadena tenemos dos opciones:

*   Instanciamos la clase [```String```][String]. Que sería una creación explicita de la clase

~~~java
String sMiCadena = new String("Cadena de Texto");
~~~

*   Crear implícitamente la cadena de texto. Es decir, simplemente le asignamos el valor al objeto.

~~~java
String sMiCadena = "Cadena de Texto";
~~~

En este caso, [Java][ManualJava], creará un objeto [```String```][String] para tratar esta cadena.

## Crear una cadena vacía
Podemos tener la necesidad de crear una cadena vacía. Puede darse el caso que no siempre sepamos lo que vamos a poner de antemano en la cadena de texto. ¿A quién no le surgen dudas? ;-) ... Fuera de bromas, muchas veces la cadena de texto nos la proporcionará el usuario, otro sistema,....

Para poder crear la cadena vacía nos bastará con asignarle el valor de "", o bien, utilizar el constructor vacío.

~~~java
String sMiCadena = "";
String sMiCadena = new String();
~~~

## Constructores String
Visto lo visto podemos resumir que tenemos dos tipos de constructores principales de la clase [```String```][String]:


*   **String(),** <span style="font-weight: normal">q</span><span style="font-weight: normal">ue construirá un objeto [```String```][String] sin inicializar.</span>
*   **String(String original),** <span style="font-weight: normal">construye una clase [```String```][String] con otra clase [```String```][String] que recibirá como argumento.</span>

Aunque tenemos alguno más que iremos viendo....

## Volcando una cadena de texto a la consola
Solo nos quedará saber cómo volcar una cadena por pantalla. Esto lo haremos con la clase [```System.out.println```][SystemOutPrintln] que recibirá como parámetro el objeto [```String```][String].

Por ejemplo:

~~~java
System.out.println("Mi Cadena de Texto");
~~~

ó

~~~java
String sMiCadena = new String("Mi Cadena de Texto");
System.out.println(sMiCadena);
~~~

[ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
[String]: http://www.w3api.com/wiki/Java:String "String"
[StringBuffer]: http://www.w3api.com/wiki/Java:StringBuffer
[JavaLangString]: http://www.w3api.com/wiki/Categor%C3%ADa:Java_Lang
[SystemOutPrintln]: http://www.w3api.com/wiki/Java:System.out
