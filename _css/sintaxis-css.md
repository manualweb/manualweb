---
title: Sintaxis CSS
permalink: /css/sintaxis-css/
---

Antes de empezar a codificar nada es bueno que conozcamos algo de la **sintáxis CSS**. Lo primero que tenemos que saber es que [CSS][CSS] es un lenguaje basado en reglas. La idea es definir esas reglas creando grupos de estilos que se los asignaremos a los elementos de una página web.

Detás de esta idea podemos decir, por ejemplo, que queremos que un titular de cabecera representado por el elemento [`h1`][h1] dentro del lenguaje [HTML][HTML] se pueda ver en *color azul* y que su tamaño sea de *30px*

Así la sintaxis de nuestro código [CSS][CSS] será el siguiente:

~~~css
h1 {
    color: blue;
    font-size: 30px;
}
~~~

Aunque no hayamos entrado a explicar cómo se definen esas reglas o qué propiedades de estilo existen seguro que el código que acabamos de ver se puede interpretar de una forma sencilla.

## Elementos CSS
Dentro del lenguaje [CSS][CSS] hay varios tipos de elementos. Pero podríamos decir que los 4 elementos generales del lenguaje son:

* Reglas
* Selectores
* Propiedades
* Módulos

Esto lo veremos mejor si vemos que la estructura general de una **regla CSS** sería la siguiente:

~~~
selector {
    propiedad1:valor1;
    propiedad2:valor2;
    ...
    propiedadN:valorN;
}
~~~

El **selector CSS** selecciona, de una u otra forma, el [elemento HTML][elemento HTML] sobre el que se va a aplicar el estilo. Luego veremos cómo podemos crear estos selectores. A este **selector CSS** le aplicaremos un grupo de estilos los cuales definiremos entre llaves `{}`.

Los estilos los definimos mediante las **propiedades CSS**. Las **propiedades CSS** son un conjunto de atributos propiedad/valor, dónde la propiedad será el estilo que queremos aplicar y el valor, el valor de ese estilo. Como veíamos en el código anterior, la propiedad es [`color`][color] o [`font-size`][font-size] y los valores son *blue* y *30px*.

Cómo tenemos **propiedades CSS** que permiten dar estilos a diferentes elementos, estas se organizan en **módulos CSS**. De esta manera encontramos el módulo para los colores, para las fuentes, para la imágenes, para las listas,...

Una [hoja de estilos CSS][CSS] puede tener tantas reglas como queramos. Así que volviendo a nuestro anterior código vemos que hemos dado estilo a los elementos de cabecera representados por [`h1`][h1], pero que podemos incluir más reglas. Por ejemplo, vamos a indicar que el tamaño de texto de los párrafos, que es el elemento [`p`][p] sean de tamaño de *12px* añadiendo la siguiente regla:

~~~css
h1 {
    color: blue;
    font-size: 30px;
}

p {
    font-sizs: 12px;
}
~~~

[CSS]: {{site.url}}/css/
[HTML]: {{site.url}}/html/
[elemento HTML]: {{site.url}}/html/sintaxis-html/
[h1]: https://w3api.com/HTML/h1/
[p]: https://w3api.com/HTML/p/
[color]: https://w3api.com/CSS/color/
[font-size]: https://w3api.com/CSS/font-size/

