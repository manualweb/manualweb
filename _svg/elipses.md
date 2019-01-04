---
title: Elipses en SVG
permalink: /svg/elipses-svg/
---

El elemento que nos sirve en [SVG][SVG] para crear elipses es `ellipse`. Mientras que para el circulo nos bastaba con conocer el radio del mismo, en el caso de la elipse se necesita saber el **radio en X** y el **radio en Y**. Para ello tenemos los atributos `rx` y `ry`.

Además podremos colocar la elipse en unas **coordenadas X** e **Y** mediante los atributos `cx` y `cy`. En este caso es igual que para la [elemento `circle`][circlesvg].

Los atributos del elemento `ellipse` nos quedarían de la siguiente forma:


* **cx = "coordenada"**, la coordenada del eje X. En el caso de no ser especificado toma un valor de 0.
* **cy = "coordenada"**, la coordenada del eje Y. En el caso de no ser especificado toma un valor de 0.
* **rx = "longitud"**, define el radio horizontal de la elipse. Un valor de 0 deshabilitaría el renderizado del circulo y un valor negativo sería un error.
* **ry = "longitud"**, define el radio vertical de la elipse. Un valor de 0 deshabilitaría el renderizado del circulo y un valor negativo sería un error.

El elemento `ellipse` nos quedaría de la siguiente forma:

~~~svg
<ellipse cs="coordenada" cy="coordenada" rx="longitud" ry="longitud">
~~~

Las técnicas de coloreado, bordes, opacidad,... son genéricas para todas las formas básicas (Shapes).

[SVG]: http://www.manualweb.net/svg/
[circlesvg]: http://www.manualweb.net/svg/circle-svg/
