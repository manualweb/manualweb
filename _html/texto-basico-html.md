---
title: Texto Básico en HTML
permalink: /html/texto-basico-html/
---

Para escribir texto dentro de un documento [HTML][ManualHTML] simplemente tenemos que añadir texto al fichero que contenga nuestra página web. Así de simple. Solo añadimos el texto que queramos visualizar.

Si bien deberemos de tener en cuenta algunos condicionantes. Sobre todo si queremos insertar caracteres o símbolos particulares de nuestro idioma. Por ejemplo, cuando añadimos una ñ o el símbolo del copyright. Para ello tenemos las entidades, que veremos más adelante.

Así podemos tener nuestro documento [HTML][ManualHTML] y escribir lo siguiente.

~~~html
Este es mi primer texto en una web
~~~

## Saltos de línea en el texto

Está claro que escribir el texto todo seguido, sin darle un orden o una separación, sería un caos. Así que lo primero que vamos a aprender es el crear un salto de línea en el texto.

Y es que si escribimos lo siguiente:

~~~html
Esta es una línea


Y esta otra línea.
~~~

Veremos que al cargar nuestra página web no se producirá el efecto deseado y que no existe la separación entre las dos líneas.

Y es que el salto de línea en un documento web equivale a un espacio en blanco a la hora de visualizarse. Y si ponemos muchos saltos de línea seguidos solo se contabilizará el primero, que será el que equivalga a un espacio en blanco.

Para poder añadir un salto de línea deberemos de utilizar el [elemento br][BR]. El [elemento br][BR] es un elemento simple. Es decir, no tiene un elemento de inicio y un elemento de cierre.

Así, para representar dos saltos de línea utilizaremos el siguiente código:

~~~html
Esta es una línea <br/><br/>
Y esta otra línea.
~~~

## Organizando el texto en párrafos

Ahora que conocemos el [elemento br][BR] vemos su potencial, si bien, si queremos dar estilo a un documento a base de datos de línea, veremos que es bastante complicado.

Es por eso que el lenguaje [HTML][ManualHTML] nos ofrece otra serie de elementos para organizar el contenido del texto. Así contamos con párrafos, los cuales son representados mediante el [elemento p][P]. En este caso el [elemento p][P] tiene una elemento de inicio y un elemento de cierre. Y el contenido de dentro será lo que representa al párrafo.

~~~html
<p>Parrafo</p>
~~~

De esta manera si queremos generar dos párrafos crearemos el siguiente código.

~~~html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.</p>


<p>Nullam interdum, enim sed ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien et eros. Cras gravida, felis sed sagittis convallis, nulla ante vehicula justo, id imperdiet enim nisi id mauris. Nunc egestas volutpat congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula purus eu enim vulputate rhoncus.</p>
~~~

## Elementos de cabecera o titulares

Si seguimos revisando el poder dar formato al texto nos encontramos con los elementos de cabecera o titulares.

Estos elementos nos servirán para poner títulos a las diferentes secciones que tenga nuestra web. Son dos elementos, el de inicio y el de cierre y el contenido será el nombre de la cabecera o titular.

El [elemento es de tipo hx][H1], donde la x va desde el 1 hasta el 6. Por ejemplo, si queremos poner un elemento de cabecera de tipo 1 escribiríamos lo siguiente:

~~~html
<h1>Cabecera o Titulo</h1>
~~~

Así veríamos todos los elementos de cabecera:

~~~html
<h1>Cabecera de tipo H1</h1>
<h2>Cabecera de tipo H2</h2>
<h3>Cabecera de tipo H3</h3>
<h4>Cabecera de tipo H4</h4>
<h5>Cabecera de tipo H5</h5>
<h6>Cabecera de tipo H6</h6>
~~~

## Crear una cita

Otro elemento que nos servirá para organizar nuestro documento [HTM][ManualHTML] será el [elemento blockquote][BLOCKQUOTE] o [q][Q]. Este elemento nos permite reseñar una cita.

La diferencia entre el [elemento blockquote][BLOCKQUOTE] y [elemento q][Q] es qué [blockquote][BLOCKQUOTE] será un elemento de párrafo en si mismo, mientras que [q][Q] será autocontenida dentro de otro texto, lo que se conoce como un elemento en línea.

De esta forma, una cita con [blockquote][BLOCKQUOTE] será:

~~~html
<blockquote>"Muchas veces me moría pensando que no iba verte. Pero moría la muerte cada vez que te veía". Eduardo Galeano</blockquote>
~~~

Y una cita con [q][Q] puede ser:

~~~html
El primer ministro afirmó que <q>"era el mejor momento económico para el páis"</q> el pasado día 8.
~~~

> Hay que tener cuidado con el elemento [blockquote][BLOCKQUOTE] ya que en el pasado se utilizó de forma incorrecta para crear indentaciones o tabulaciones en los documentos web.

Los elementos [blockquote][BLOCKQUOTE] y [q][Q] nos permiten indicar el origen de la cita mediante el **atributo cite**.

~~~html
El primer ministro afirmó que <q cite="http://elpais.com/">"era el mejor momento económico para el páis"</q> el pasado día 8.
~~~

Y el idioma en el que está escrita la cita, mediante el [atributo lang][Lang]:

~~~html
El primer ministro afirmó que <q lang="ES-es">"era el mejor momento económico para el páis"</q> el pasado día 8.
~~~

## Algo para las fórmulas: Subíndices y Superíndices

Aunque existen lenguajes de marcado especiales para la representación de fórmulas matemáticas, como puede ser MathML, en [HTML][ManualHTML] encontramos un par de elementos que nos permitirán crear subíndices y superíndices. Estos son los elementos [sub][SUB] y [sup][SUP] respectivamente.

La representación del contenido irá entre el elemento de inicio y el elemento de cierre.

~~~html
<SUP>superíndice</SUP>
<SUB>subíndice</SUB>
~~~

Podemos escribir algunas notas matemáticas como:

~~~html
Como indica el teorema de Pitágoras:
hipotenusa<sup>2</sup> = cateto1<sup>2</sup>+cateto2<sup>2</sup>
~~~

O químicas como:

~~~html
El símbolo del agua es H<sub>2</sub>O.
~~~

## Enfatizando un texto

Una de las opciones que encontramos dentro del [HTML][ManualHTML] es la de enfatizar un texto. Para ello el lenguaje [HTML][ManualHTML] nos ofrece el [elemento em][EM].

El texto que vaya dentro de los elementos de inicio y de cierre del [elemento em][EM] será el texto que aparece enfatizado en nuestro navegador.

Así podemos escribir el siguiente texto:

~~~html
Más vale <em>pájaro en mano</em> que ciento volando.
~~~

## Resaltando un texto, más énfasis

Si el énfasis que nos proporciona el [elemento em][EM] no es suficiente para nuestro cometido, si queremos resaltar todavía más el texto, podemos utilizar el [elemento strong][STRONG].

El [elemento strong][STRONG] tiene un comportamiento similar al [elemento em][EM].

Así, si queremos resaltar más un texto, podemos escribir.

~~~html
A enemigo que huye, <strong>puente de plata</strong>.
~~~

Aunque **la mayoría de los navegadores representan el resaltado del texto [elemento strong][STRONG] en negrita** no debemos de confundir esto con el fin del [elemento strong][STRONG], el cual es meramente estructural.

[ManualHTML]: http://www.manualweb.net/tutorial-html/
[BR]: http://www.w3api.com/wiki/HTML:BR
[P]: http://www.w3api.com/wiki/HTML:P
[H1]: http://www.w3api.com/wiki/HTML:H1
[BLOCKQUOTE]: http://www.w3api.com/wiki/HTML:BLOCKQUOTE
[Q]: http://www.w3api.com/wiki/HTML:Q
[Lang]: http://www.w3api.com/wiki/HTML:Lang
[SUB]: http://www.w3api.com/wiki/HTML:SUB
[SUP]: http://www.w3api.com/wiki/HTML:SUP
[EM]: http://www.w3api.com/wiki/HTML:EM
[STRONG]: http://www.w3api.com/wiki/HTML:STRONG
