---
title: Documento HTML
date: 2023-12-17
last_modified_at: 2023-12-17
permalink: /html/documento-html/
excerpt: "El documento HTML se compone principalmente de una cabecera (o head) dónde va el título (title) y un cuerpo (body)."
tags: [html,body,head,title]
image:
  path: /img/covers/html-cover.png
---

El documento [HTML](https://www.manualweb.net/html/) tiene dos partes bien diferenciadas. La primera será **la cabecera** del documento en la que irá información relativa a la semántica del documento, metadatos, o a los recursos que necesita para su correcta visualización.


Por otro lado tenemos el cuerpo. **El cuerpo** contendrá la estructura del documento [HTML](https://www.manualweb.net/html/). Dentro del cuerpo iremos situando los diferentes elementos del lenguaje [HTML](https://www.manualweb.net/html/) para la correcta visualización de la página.


Pero el documento [HTML](https://www.manualweb.net/html/) se caracteriza por empezar y terminar por el elemento [`html`](http://www.w3api.com/HTML/html). Es decir, al principio y al final del documento encontraremos el elemento de inicio y cierre respectivamente.


```html
<html>
  <!-- Documento HTML -->
</html>
```


Importante es saber que antes del primer elemento [`html`](http://www.w3api.com/HTML/html) vamos a encontrar la definición del tipo de documento [HTML](https://www.manualweb.net/html/) sobre el que trabajemos. Como vimos en el capítulo [tipos de documentos HTML podemos tener diferentes tipos o doctypes](https://manualweb.net/html/tipos-documentos-html/).


De esta forma la estructura básica del documento [HTML](https://www.manualweb.net/html/) será la siguiente:


```html
<!doctype html>
<html>
  <!-- Documento HTML -->
</html>
```


## La cabecera del documento


Lo primero que encontraremos dentro del documento [HTML](https://www.manualweb.net/html/) será la cabecera. La cabecera se delimita mediante el elemento [`head`](http://www.w3api.com/HTML/head).


```html
<head>
  <!-- Elementos de cabecera -->
</head>
```


Dentro de la cabecera vamos a encontrar elementos que nos definen la semántica del documento, estos serán las meta-tags o metadatos. Además podremos encontrar scripts, hojas de estilo y el más importante, el título de la página.


Es importante remarcar que el contenido que se encuentre dentro de la cabecera no tiene una representación visual directa.


### Título del documento


El título del documento se definirá utilizando el elemento [`title`](http://www.w3api.com/HTML/title). Cómo contenido del elemento encontraremos el texto que represente dicho título.


La estructura sería la siguiente:


```html
<title>Título del documento</title>
```


El título del documento se suele cargar, por convenio como contenido de las pestañas de los navegadores web.


## El cuerpo del documento


El cuerpo del documento será el que contenga los elementos de la estructura. Es decir, aquellos elementos que van a dotar de contenido al documento [HTML](https://www.manualweb.net/html/).


El cuerpo del documento se delimita mediante el elemento [`body`](http://www.w3api.com/HTML/body).


```html
<body>
  <!-- Cuerpo del documento -->
</body>
```


Dentro del cuerpo del documento irán todos los elementos que vamos a ir explicando dentro de este manual.


Con la estructura del documento [HTML](https://www.manualweb.net/html/) que hemos visto podemos ver como estructura base de cualquier documento [HTML](https://www.manualweb.net/html/) la siguiente:


```html
<!doctype html>
<html>
<head>
  <title>Título de la Página</title>
</head>
<body>
  <!-- Cuerpo del documento HTML -->
</body>
</html>
```

