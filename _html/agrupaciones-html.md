---
title: Agrupaciones HTML
permalink: /html/agrupaciones-html/
---
Hasta ahora hemos visto cómo insertar diferentes elementos sobre un documento [HTML][ManualHTMl]. Estos elementos se irán mostrando según la secuencia en la que hayamos escrito el documento [HTML][ManualHTMl].

Una de las cosas que tenemos que saber de los elementos html es si son elementos de bloque o elementos de línea.

Un **elemento de bloque** es aquél que una vez utilizado aparece en la siguiente línea y ocupa todo el ancho. Elementos de tipo bloque son los [párrafos p][P], los [formularios form][FORM], o [las cabeceras hx][H1].

Un **elemento en línea** es aquel que se muestra justo a continuación del anterior elemento. Estos elementos serían los [enlaces a][A], [imágenes img][IMG],...

El lenguaje [HTML][ManualHTMl] nos permite agrupar un conjunto de elementos mediante una agrupación en bloque o una agrupación en línea.

## Agrupaciones en Bloque

Un elemento en bloque siempre empieza con una línea y su tamaño será igual al ancho disponible. El ancho disponible inicialmente es el de la página.

El elemento que nos permite realizar agrupaciones en bloque es el [elemento div][DIV] o más conocidos como capas. La estructura del [elemento div][DIV] es:

~~~html
<div>
<!-- Contenido de la Capa -->
</div>
~~~

Los elementos en bloque pueden contener a otros elementos en bloque o bien a otros elementos en línea.

Por ejemplo podríamos agrupar en un bloque el siguiente contenido.

~~~html
<div id="micapa">
  <h2>Título del Contenido</h2>
  Este es el contenido del artículo
  <img src="logo.jpg" />
  <p>Más contenido del artículo</p>
</div>
~~~

## Agrupaciones en Línea

Para poder realizar agrupaciones en línea tenemos el [elemento span][SPAN]. La estructura del [elemento span][SPAN] será:

~~~html
<span> <!-- Contenido --></span>
~~~

Las agrupaciones en línea sólo pueden contener a otros elementos en línea, no a elementos de tipo bloque.

Por ejemplo podríamos tener la siguiente agrupación en línea.

~~~html
<span id="entrada">
  <strong>Articulo Nuevo</strong>,
  <em>,12 de marzo de 2016</em>
</span>
~~~

Es muy normal que los agrupadores, ya sean o bien [div][DIV], o bien [span][SPAN] lleven el [atributo id][id] o [class][class], ya que a posteriori serán manipulados mediante [hojas de estilo CSS][ManualCSS] utilizando dichos identificadores.

[ManualHTMl]: http://www.manualweb.net/tutorial-html/
[P]: http://www.w3api.com/wiki/HTML:P
[FORM]: http://www.w3api.com/wiki/HTML:FORM
[H1]: http://www.w3api.com/wiki/HTML:H1
[A]: http://www.w3api.com/wiki/HTML:A
[IMG]: http://www.w3api.com/wiki/HTML:IMG
[DIV]: http://www.w3api.com/wiki/HTML:DIV
[SPAN]: http://www.w3api.com/wiki/HTML:SPAN
[id]: http://www.w3api.com/wiki/HTML:Id
[class]: http://www.w3api.com/wiki/HTML:Class
[ManualCSS]: http://www.manualweb.net/tutorial-css/
