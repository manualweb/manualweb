---
title: Rectángulos en SVG
permalink: /svg/rectangulos-svg/
---

## Crear Un Rectángulo
El elemento `rect` nos permite en [SVG][SVG] la creación de rectángulos. Posicionándolos en un eje de coordenadas mediante las propiedades **x,y**. Además del posicionamiento las otras dos propiedades que definen el rectángulo son su **alto** y **ancho**.

* **x = "coordenada"**, la coordenada del eje X. En el caso de no ser especificado toma un valor de 0.
* **y = "coordenada"**, la coordenada del eje Y. En el caso de no ser especificado toma un valor de 0.
* **height = "longitud"**, alto del rectángulo No puede ser un valor positivo y en el caso de poner 0 el rectángulo no es renderizado.
* **width = "longitud"**, ancho del rectángulo No puede ser un valor positivo y en el caso de poner 0 el rectángulo no es renderizado.

Todos los valores son susceptibles de ser modificados por una animación.

El elemento para crear rectángulos `rect` nos quedaría de la siguiente forma:

~~~svg
<rect x="coordenada" y="coordenada" height="longitud" width="longitud">
~~~

## Rectángulos Redondeados
Una de las posibilidades del rectángulo es la de redondear sus esquinas. Para ello hay que modificar sus atributos `rx` y `ry`.

* **rx**, redondea las esquinas del eje X. Tiene que ser un valor positivo.
* **ry**, redondea las esquinas del eje Y. Tiene que ser un valor positivo.

En el caso de que falte uno de los dos valores, el omitido tomará el valor del otro. Es decir, si no especificamos el valor de `ry` y si el de `rx`, entonces `ry` tomará el valor de `rx` y viceversa.

Por otro lado, si el valor de `rx` y `ry` son mayores que la mitad del ancho y alto del rectángulo Estos quedarán reducidos al valor de la mitad del ancho y del alto.

Así tendríamos el elemento para crear rectángulos `rect` con dos nuevos valores:

~~~svg
<rect x="coordenada" y="coordenada" height="longitud" width="longitud" rx="longitud" ry="longitud"/>
~~~

Las técnicas de coloreado, bordes, opacidad,... son genéricas para todas las formas básicas (Shapes).

[SVG]: http://www.manualweb.net/svg/
