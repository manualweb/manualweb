---
title: Documento HTML5
date: 2023-02-25
last_modified_at: 2023-02-25
permalink: /html5/documento-html5/
excerpt: "El documento HTML5 basic se define mediante el elemento DOCTYPE y utilizando un encoding utf8 como charset."
tags: [documento,charset,utf8,head,meta]
image:
  path: /img/covers/html5-cover.jpg
---

Cuando hablamos del documento [HTML5](https://www.manualweb.net/html5/) lo primero que tenemos que saber que aunque hasta [HTML 4.01](https://www.manualweb.net/html/) habíamos tenido diferentes tipos de documentos, los cuales diferenciábamos por el `doctype` del documento, en [HTML5](https://www.manualweb.net/html5/) solo se tiene un único tipo de documento el cual estará determinado por la cabecera:


```html
<!DOCTYPE html>
```


De esta manera el documento le está diciendo al navegador que es un documento de tipo [HTML5](https://www.manualweb.net/html5/).


La siguiente cosa que haremos en un documento [HTML5](https://www.manualweb.net/html5/) será declarar el juego de caracteres que utilizará. Para ello deberemos de utilizar un elemento [`meta`](https://www.w3api.com/HTML/meta/) mediante su atributo [`charset`](https://www.w3api.com/HTML/meta/charset/).


Así, para indicar que el juego de caracteres de un documento es **utf-8** escribiremos lo siguiente dentro del elemento [`head`](https://www.w3api.com/HTML/head/):


```html
<head>
  <meta charset="UTF-8">
</head>
```


[HTML5](https://www.manualweb.net/html5/) recomienda el uso del juego de caracteres estándar **utf-8** y abandonar el uso de juegos locales de caracteres utilizados en otras versiones como eran los ISO 8859-1.


El documento [HTML5](https://www.manualweb.net/html5/) base quedaría, uniendo todos los elementos que hemos explicado, de la siguiente manera:


```html
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
```


Ya puedes utilizar este documento [HTML5](https://www.manualweb.net/html5/) base para poder construir tus páginas web.

