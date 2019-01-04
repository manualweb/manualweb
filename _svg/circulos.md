---
title: Círculos en SVG
permalink: /svg/circulos-svg/
---

La forma básica que nos permite crear Círculos en [SVG][SVG] es el elemento `circle`. Para crear un circulo simplemente nos basta con conocer dos cosas: las **coordenadas** en las cuales queremos ubicar al circulo y el **radio** del mismo. Es por ello que el elemento `circle` nos ofrece los siguientes atributos:

* **cx = "coordenada"**, la coordenada del eje X. En el caso de no ser especificado toma un valor de 0.
* **cy = "coordenada"**, la coordenada del eje Y. En el caso de no ser especificado toma un valor de 0.
* **r = "longitud"**, radio del circulo. Un valor de 0 deshabilitaría el renderizado del circulo y un valor negativo sería un error.

El elemento `circle` nos quedará de la siguiente manera:

~~~svg
<circle cx="coordenada" cy="coordenada" r="longitud">
~~~

Las técnicas de coloreado, bordes, opacidad,... son genéricas para todas las formas básicas (Shapes).


[SVG]: http://www.manualweb.net/svg/
