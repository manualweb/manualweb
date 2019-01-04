---
title: Líneas en SVG
permalink: /svg/lineas-svg/
---

Para poder crear líneas en [SVG][SVG] tenemos que utilizar el elemento `line`. Lo que necesitamos para pintar una línea son dos cosas: la **coordenada origen de la línea** y la **coordenada destino**. Para especificar dichos valores utilizaremos los atributos: `x1`, `y1`, `x2` e `y2` de la siguiente forma:

* **x1 = "coordenada"**, la coordenada de inicio en el eje X. En el caso de no ser especificado toma un valor de 0.
* **y1 = "coordenada"**, la coordenada de inicio en el eje Y. En el caso de no ser especificado toma un valor de 0.
* **x2 = "coordenada"**, la coordenada final en el eje X. En el caso de no ser especificado toma un valor de 0.
* **y2 = "coordenada"**, la coordenada final en el eje Y. En el caso de no ser especificado toma un valor de 0.

El elemento `line` quedaría de la siguiente forma:

~~~svg
<line x1="coordenada" y1="coordenada" x2="coordenada" y2="coordenada"/>
~~~

## Ancho De Línea
Aunque las técnicas de colores, bordes y opacidad son genéricas para todas las formas básicas cabe mencionar que para modificar el ancho de una línea podemos utilizar el atributo `stroke-width` del elemento `line` de la siguiente forma:

~~~svg
<line x1="coordenada" y1="coordenada" x2="coordenada" y2="coordenada" stroke-width="longitud"/>
~~~

Por defecto el valor de `stroke-width` es 1.


[SVG]: http://www.manualweb.net/svg/
