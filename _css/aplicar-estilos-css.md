---
title: Aplicar Estilos CSS
permalink: /css/aplicar-estilos-css/
---

Una vez que hemos dado los [primeros pasos y creado nuestro hola mundo en CSS][PrimerosPasosCSS] vamos a ver otras alternativas de cómo podemos aplicar estilos [CSS][CSS] a nuestros documentos [HTML][HTML]. Y es que tenemos 3 formas de aplicar los estilos:

* Hoja de estilos externa
* Hoja de estilos interna
* Estilos en línea

Vamos a detallar un poco más cada uno de ellos para que veas en qué pueden servir y cómo se deben de aplicar.

## Hoja de estilos externa
Este es el modelo que hemos visto en el [ejemplo de primeros pasos en CSS][PrimerosPasosCSS] dónde la idea es asociar la hoja de estilos CSS que hemos definido en un documento **.css* a nuestro [documento HTML][DocumentoHTML].

En este caso utilizamos el elemento [`link`][link] que nos permite realizar la asociación. El elemento [`link`][link] tiene un atributo [`href`][link.href] dónde indicaremos la URL del fichero con la hoja de estilos y otro atributo [`rel`][link.rel] dónde indicaremos el tipo de relación, que en este caso es **stylesheet**.

~~~html
<link ref="stylesheet" href="estilos.css">
~~~

El elemento [`link`][link] lo insertaremos dentro de la cabecera [`head`][head] del documento [HTML][HTML].

~~~html
<head>
  <meta charset="UTF-8">
  <title>Documento HTML y Hoja de estilos CSS</title>
  <link ref="stylesheet" href="estilos.css">
</head>
~~~

Aplicar los estilos mediante una hoja de estilos externa nos puede servir para poder tener centralizados todos los estilos que utilicemos en nuestro sitio web, y sobre todo, lo más importante, para poder reutilizarlos en varias páginas. Verás que este es el mecanismo más utilizado y que todos los sitios web tienen, al menos, una entrada con el elemento [`link`][link] cargando una hoja de estilos.

## Hoja de estilos interna
La segunda es crear la hoja de estilos CSS interna dentro de nuestro [documento HTML][DocumentoHTML]. En este caso vamos a utilizar el elemento [`style`][ElementoStyle]. El elemento [`style`][ElementoStyle] se deberá de poner dentro de [la cabecera del documento][CabeceraDocumentoHTML], es decir, entre los elementos [`head`][head].

El contenido que tendrá el elemento [`style`][ElementoStyle] serán las reglas de estilo que queramos aplicar sobre la página.

El código nos quedará de la siguiente forma:

~~~html
<head>
  <meta charset="UTF-8">
  <title>Documento HTML y Hoja de estilos CSS</title>
  <style>
      /* Aquí irá nuesta hoja de estilos */
  </style>
</head>
~~~

Para este caso, los estilos definidos dentro del elemento [`style`][ElementoStyle] pueden aplicarse a cualquier elemento de la página en la que lo hemos definido. Es por ello que llegaremos a reutilizar estilos dentro de la propia página. Pero no se aplicarán en otras páginas de nuestra web.

Este modelo se suele aplicar cuando hay estilos que solo competen a elementos que están dentro de la propia página y que no se repiten en más páginas de nuestro sitio web.


## Estilos en Línea
El último caso es aplicar los estilos en línea. En este caso estamos aplicando los estilos directamente sobre un elemento en concreto. Para ello vamos a recurrir al atributo [`style`][AtributoStyle]. En este caso añadiremos el atributo [`style`][AtributoStyle] sobre el elemento al cual queramos dar estilo y dentro del valor del atributo añadimos las propiedades de estilo que queremos configurar.

Por ejemplo, si queremos poner nuestro elemento de cabecera [`h1`][h1] en color *rojo* incluiremos el siguiente código:

~~~html
<body>
  <h1 style="color:red;">Hola Mundo en CSS</h1>   
~~~

Vemos que en este caso no es necesario el poner un **selector** y que solo incluimos las **propiedades** que definan el estilo. Este mecanismo es útil cuando queremos dar un estilo concreto a un único elemento de la página y de forma aislada. Ya que este código no nos servirá para poder dar estilo a otros elementos [`h1`][h1] que puedan existir en la página o elementos [`h1`][h1] que existan en otras páginas de nuestra web. Es algo muy puntual, pero útil para casos puntuales en los cuales se quiera dar estilo a un único elemento.


[CSS]: {{site.url}}/css/
[HTML]: {{site.url}}/html/
[DocumentoHTML]: {{site.url}}/html5/documento-html5/
[ElementoStyle]: https://w3api.com/HTML/style/
[head]: https://w3api.com/HTML/head/
[CabeceraDocumentoHTML]: {{site.url}}/html/documento-html/#la-cabecera-del-documento
[AtributoStyle]: https://w3api.com/HTML/style/
[h1]: https://w3api.com/HTML/h1/
[link]: https://w3api.com/HTML/link/
[link.href]: https://w3api.com/HTML/link/href/
[link.rel]: https://w3api.com/HTML/link/rel/
[PrimerosPasosCSS]: {{site.url}}/css/primeros-pasos-en-css/