---
title: Propiedades CSS
permalink: /css/propiedades-css/
---

Propiedades y Valores

Conceptos:

* Bloque de declaración CSS. Son el conjunto de propiedades/valor que hay en la regla
* Regla CSS. Es el selector con su bloque de declaración.


> Las propiedades y valores CSS son sensibles a mayúsculas.

# Propiedades Acortadas o Shorthands

font, background, padding, border y margin son propiedades acortadas. De tal manera que podemos poner los valores de diferentes propiedades en una sola con un valor en una línea.

~~~css
.caja {
    margin: 10px 5px 10px 5px;
}
~~~

Es lo mismo que:

~~~css
.caja {
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
}
~~~