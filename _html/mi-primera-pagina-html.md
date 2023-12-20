---
title: Mi primera página HTML
permalink: /html/mi-primera-pagina-html/
excerpt: "Pasos para poder crear mi primera página HTML mediante un editor de texto y poder visualizarla en un navegador web"
tags: [html,body,h1,chrome,firefox,opera,meta]
image:
  path: /img/covers/html-cover.png
---

Con lo que ya llevamos aprendido en el [Manual de HTML](https://www.manualweb.net/html/) es un buen momento para crear nuestra primera página [HTML](https://www.manualweb.net/html/) o mejor dicho, nuestra primera página web.


## Herramientas básicas


Lo primero que vamos a necesitar es un editor de texto instalado en tu ordenador. Ya hemos visto que nos pueden valer el [UltraEdit](http://www.idmcomp.com/), [NoteTab](http://www.notetab.com/), el TextEdit de Mac, o un avanzado editor como [Sublime Text](http://www.sublimetext.com/) o [Atom](https://atom.io/). Dentro del editor de texto crea un documento de texto el cual llamaremos


```shell
miprimeraweb.html
```


Es importante saber que los documentos [HTML](https://www.manualweb.net/html/) tienen la **extensión .html o .htm**. Es más común la primera de ellas.


## Crear la página HTML


Una vez tengamos nuestro documento de texto vamos a crear la estructura del documento [HTML](https://www.manualweb.net/html/), con sus elementos [`html`](https://w3api.com/HTML/html/), [`head`](https://w3api.com/HTML/head/) y [`body`](https://w3api.com/HTML/body/).


```html
<!doctype html>
<html>
<head>
  <title>Mi Primera Página</title>
  <meta charset=”utf-8”/>
</head>
<body>
  <h1>Mi Primera Página</h1>
  Mi primera página en HTML.
</body>
</html>
```


Vemos que dentro del elemento [`body`](https://w3api.com/HTML/body/) hemos insertado un elemento [`h1`](https://w3api.com/HTML/h1/) con un texto y directamente texto que indica _“Esta es mi primera página web”_.


No te preocupes por los elementos [`meta`](https://w3api.com/HTML/meta/) y [`h1`](https://w3api.com/HTML/h1/) que aparecen nuevos, ya que los veremos en detalle más adelante.


## Visualizar la página HTML


Una vez guardada la página [HTML](https://www.manualweb.net/html/) vamos a visualizarla. Para poder visualizarla necesitamos un navegador web. Lo más normal es que tu ordenador ya venga con alguno instalado por defecto, si no puedes instalarte alguno como [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html), [Mozilla Firefox](https://www.mozilla.org/es-ES/firefox/new/) u [Opera](http://www.opera.com/).


Una vez arrancado el navegador web simplemente tiene que abrir la página creada anteriormente, es decir, el archivo **miprimeraweb.html**


Verás que el navegador carga algo parecido a lo siguiente:


![](https://manualweb.net/html/img/mi-primera-pagina-web.png)

