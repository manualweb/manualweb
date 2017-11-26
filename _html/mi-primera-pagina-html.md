---
title: Mi Primera Página HTML
permalink: /html/mi-primera-pagina-html/
---

Con lo que ya llevamos aprendido en el [Manual de HTML][ManualHTML] es un buen momento para crear nuestra primera página [HTML][ManualHTML] o mejor dicho, nuestra primera página web.

## Herramientas básicas

Lo primero que vamos a necesitar es un editor de texto instalado en tu ordenador. Ya hemos visto que nos pueden valer el [UltraEdit][UltraEdit], [NoteTab][NoteTab], el TextEdit de Mac, o un avanzado editor como [Sublime Text][SublimeText] o [Atom][AtomIO]. Dentro del editor de texto crea un documento de texto el cual llamaremos

<kbd>miprimeraweb.html</kbd>

Es importante saber que los documentos [HTML][ManualHTML] tienen la **extensión .html o .htm**. Es más común la primera de ellas.

## Crear la página HTML

Una vez tengamos nuestro documento de texto vamos a crear la estructura del documento [HTML][ManualHTML], con sus elementos [html][HTML], [head][HEAD] y [body][BODY].

~~~html
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
~~~


Vemos que dentro del [elemento body][BODY] hemos insertado un [elemento h1][H1] con un texto y directamente texto que indica *“Esta es mi primera página web”*.

No te preocupes por los [elementos meta][META] y [h1][H1] que aparecen nuevos, ya que los veremos en detalle más adelante.

## Visualizar la página HTML

Una vez guardada la página [HTML][ManualHTML] vamos a visualizarla. Para poder visualizarla necesitamos un navegador web. Lo más normal es que tu ordenador ya venga con alguno instalado por defecto, si no puedes instalarte alguno como [Google Chrome][GoogleChrome], [Mozilla Firefox][Firefox] u [Opera][Opera].


Una vez arrancado el navegador web simplemente tiene que abrir la página creada anteriormente, es decir, el archivo **miprimeraweb.html**

Verás que el navegador carga algo parecido a lo siguiente:

![Mi primera página web][MiPrimeraPaginaWeb]{:class="img-responsive"}

[ManualHTML]: http://www.manualweb.net/tutorial-html/
[UltraEdit]: http://www.idmcomp.com/
[NoteTab]: http://www.notetab.com/
[SublimeText]: http://www.sublimetext.com/
[AtomIO]: https://atom.io/
[HTML]: http://www.w3api.com/wiki/HTML:HTML
[HEAD]: http://www.w3api.com/wiki/HTML:HEAD
[BODY]: http://www.w3api.com/wiki/HTML:BODY
[H1]: http://www.w3api.com/wiki/HTML:H1
[META]: http://www.w3api.com/wiki/HTML:META
[GoogleChrome]: https://www.google.com/chrome/browser/desktop/index.html
[Firefox]: https://www.mozilla.org/es-ES/firefox/new/
[Opera]: http://www.opera.com/
[MiPrimeraPaginaWeb]: {{site.baseurl}}/html/img/mi-primera-pagina-web.png
