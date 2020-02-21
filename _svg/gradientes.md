---
title: Gradientes en SVG
permalink: /svg/gradientes-svg/
---

Si tuviesemos que definir gradiente podríamos decir que un gradiente es una transición de un color a otro a lo largo de un vector. En algunos casos, con transiciones a varios colores en el mismo vector.

Los gradientes pueden ser utilizados como relleno de un elemento, mediante el atributo `fill` o como borde, utilizando el atributo `stroke`.

Dentro de [SVG][SVG] hay dos tipos de gradientes:

* Gradiente Lineal
* Gradiente Radial

A la hora de utilizar un gradiente, lo primero que tenemos que hacer es definirlo. Para ello utilizamos el elemento `defs` de la siguiente forma:

~~~svg
<defs>
...Definición de gradientes..
</defs>
~~~

Una vez definido, solo hay que utilizarlo en la figura que queramos. Para poder utilizar el gradiente definido lo tendremos que hacer mediante el atributo `id` que hayamos utilizado para definir el gradiente. La forma de referenciar al atributo `id` es mediante el relacionador `url(#nombre_id)` de la siguiente forma:

~~~svg
<elemento fill="url(#id_gradiente)">
~~~

Por ejemplo, en el siguiente código definimos un gradiente linear muy sencillo y lo aplicamos sobre un circulo:

~~~svg
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="rojo_naranja" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="20%" stop-color="#f00"/>
 <stop offset="80%" stop-color="#ff0"/>
 </linearGradient>
</defs>

<circle cx="600" cy="200" r="100" style="fill:url(#rojo_naranja)"
   stroke="#000" stroke-width="2"/>

</svg>
~~~

[SVG]: http://www.manualweb.net/svg/
