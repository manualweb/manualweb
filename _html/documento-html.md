---
title: Documento HTML
permalink: /html/documento-html/
---

El documento [HTML][ManualHTML] tiene dos partes bien diferenciadas. La primera será **la cabecera** del documento en la que irá información relativa a la semántica del documento, metadatos, o a los recursos que necesita para su correcta visualización.

Por otro lado tenemos el cuerpo. **El cuerpo** contendrá la estructura del documento [HTML][ManualHTML]. Dentro del cuerpo iremos situando los diferentes elementos del lenguaje [HTML][ManualHTML] para la correcta visualización de la página.

Pero el documento [HTML][ManualHTML] se caracteriza por empezar y terminar por el [**elemento html**][HTML]. Es decir, al principio y al final del documento encontraremos el elemento de inicio y cierre respectivamente.

~~~html
<html>
  <!-- Documento HTML -->
</html>
~~~

Importante es saber que antes del primer [elemento html][HTML] vamos a encontrar la definición del tipo de documento [HTML][ManualHTML] sobre el que trabajemos. Como vimos en el capítulo tipos de documentos [HTML][ManualHTML] podemos tener diferentes tipos o doctypes.

De esta forma la estructura básica del documento [HTML][ManualHTML] será la siguiente:

~~~html
<!doctype html>
<html>
  <!-- Documento HTML -->
</html>
~~~

## La cabecera del documento

Lo primero que encontraremos dentro del documento [HTML][ManualHTML] será la cabecera. La cabecera se delimita mediante [**el elemento head**][HEAD].

~~~html
<head>
  <!-- Elementos de cabecera -->
</head>
~~~

Dentro de la cabecera vamos a encontrar elementos que nos definen la semántica del documento, estos serán las metatags o metadatos. Además podremos encontrar scripts, hojas de estilo y el más importante, el título de la página.

Es importante remarcar que el contenido que se encuentre dentro de la cabecera no tiene una representación visual directa.

### Título del documento

El título del documento se definirá utilizando [**el elemento title**][TITLE]. Cómo contenido del elemento encontraremos el texto que represente dicho título.


La estructura sería la siguiente:

~~~html
<title>Título del documento</title>
~~~

El título del documento se suele cargar, por convenio como contenido de las pestañas de los navegadores web.

## El cuerpo del documento

El cuerpo del documento será el que contenga los elementos de la estructura. Es decir, aquellos elementos que van a dotar de contenido al documento [HTML][ManualHTML].

El cuerpo del documento se delimita mediante [**el elemento body**][BODY].

~~~html
<body>
  <!-- Cuerpo del documento -->
</body>
~~~

Dentro del cuerpo del documento irán todos los elementos que vamos a ir explicando dentro de este manual.

Con la estructura del documento [HTML][ManualHTML] que hemos visto podemos ver como estructura base de cualquier documento [HTML][ManualHTML] la siguiente:

~~~html
<!doctype html>
<html>
<head>
  <title>Título de la Página</title>
</head>
<body>
  <!-- Cuerpo del documento HTML -->
</body>
</html>
~~~

[ManualHTML]: http://www.manualweb.net/html/
[HTML]: http://www.w3api.com/HTML/html
[HEAD]: http://www.w3api.com/HTML/head
[TITLE]: http://www.w3api.com/HTML/title
[BODY]: http://www.w3api.com/HTML/body
