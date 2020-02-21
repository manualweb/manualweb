---
title: Polígonos en SVG
permalink: /svg/poligonos-svg/
---

A parte de las figuras básica: [círculos][circulossvg], [líneas][lineassvg], [elipses][elipsessvg],... otra figura, también llamada básica, es el polígono. Mediante esta figura podremos crear polígonos con las formas que queramos. Para crear polígonos en [SVG][SVG] utilizamos el elemento `polygon`.

Para poder crear un polígono en [SVG][SVG] simplemente tendremos que ir identificando la secuencia de puntos que forman sus vértices. Los puntos son identificados mediante el atributo `points` el cual recibirá como valores una lista de puntos separados por comas.

Así, el elemento `polygon` nos quedaría de la siguiente forma:

~~~svg
<polygon points="lista de puntos"/>
~~~

Las técnicas de coloreado, bordes, opacidad,... son genéricas para todas las formas básicas (Shapes).

## Lista Puntos Polígono
Definir la lista de puntos tiene su intríngulis ya que tenemos una gramática a aplicar. En este caso la gramática es **Backus-Naur Form (BNF)**. También [aplicable a los puntos de polyline][polilineassvg].

Dentro de la notación nos encontramos los siguientes elementos

* *   cero o más.
*	+   uno o más
* ?   cero o uno.
* ()  agrupaciones.
* |   alternativas de separación.
* Dobles comillas separadas por literales.

Ahora, que lo más normal es que nos encontremos coordenadas numéricas separadas por comas. Por ejemplo, veamos el caso que nos ofrece la [especificación SVG][polygonw3c] para una estrella:

~~~svg
<polygon fill="red" stroke="blue" stroke-width="10"    
   points="350,75 379,161 469,161 397,215
   423,301 350,250 277,301 303,215
   231,161 321,161" />
~~~

O un triángulo, algo más sencillo que el anterior. Este de nuestra cosecha...

~~~svg
<polygon points="100,100 100,200 200,200"/>
~~~

[SVG]: http://www.manualweb.net/svg/
[circulossvg]: {{site.baseurl}}/svg/circulos-svg/
[lineassvg]: {{site.baseurl}}/svg/lineas-svg/
[elipsessvg]: {{site.baseurl}}/svg/elipses-svg/
[polilineassvg]: {{site.baseurl}}/svg/polilineas-svg/
[polygonw3c]: http://www.w3.org/TR/SVG/shapes.html#PolygonElement
