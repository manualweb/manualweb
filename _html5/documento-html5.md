---
title: Documento HTML5
permalink: /html5/documento-html5/
---

Aunque hasta [HTML 4.01][HTML] habíamos tenido diferentes tipos de documentos, los cuales diferenciábamos por el `doctype` del documento, en [HTML5][HTML5] solo se tiene un único tipo de documento el cual estára determinado por la cabera:

~~~html
<!DOCTYPE html>
~~~

De esta manera el documento le está diciendo al navegador que es un documento de tipo [HTML5][HTML5].

La siguiente cosa que haremos en un documento [HTML5][HTML5] será declarar el juego de caracteres que utilizará. Para ello deberemos de utilizar un elemento `meta` mediante su atributo `charset`.

Así, para indicar que el juego de caracteres de un documento es **utf-8** escribiremos lo siguiente dentro del elemento `head`:

~~~html
<head>
  <meta charset="UTF-8">
</head>
~~~

[HTML5][HTML5] recomienda el uso del juego de caracteres **utf-8** y abandonar el uso de juegos locales de caracteres.

El documento [HTML5][HTML5] base quedaría de la siguiente manera:

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Titulo Documento</title>
</head>
<body>

<!-- Documento HTML5 -->

</body>
</html>
~~~



[HTML5]: {{site.baseurl}}/html5/
[HTML]: {{site.baseurl}}/html/
