---
title: Texto Básico HTML
date: 2023-12-19
last_modified_at: 2023-12-19
permalink: /html/texto-basico-html/
excerpt: "Mediante el texto básico HTML podemos crear saltos de línea, párrafos, titulares, subíndices, citas, énfasis…"
tags: [párrafos,saltos de línea,cabeceras,énfasis,subíndices,superíndices,citas,titulares]
image:
  path: /img/covers/html-cover.png
---

Para escribir texto dentro de un documento [HTML](https://www.manualweb.net/html/) simplemente tenemos que añadir texto al fichero que contenga nuestra página web. Así de simple. Solo añadimos el texto que queramos visualizar.


Si bien deberemos de tener en cuenta algunos condicionantes. Sobre todo si queremos insertar caracteres o símbolos particulares de nuestro idioma. Por ejemplo, cuando añadimos una ñ o el símbolo del copyright. Para ello tenemos las entidades, que veremos más adelante.


Así podemos tener nuestro documento [HTML](https://www.manualweb.net/html/) y escribir lo siguiente.


```html
Este es mi primer texto en una web
```


## Saltos de línea en el texto


Está claro que escribir el texto todo seguido, sin darle un orden o una separación, sería un caos. Así que lo primero que vamos a aprender es el crear un salto de línea en el texto.


Y es que si escribimos lo siguiente:


```html
Esta es una línea

Y esta otra línea.
```


Veremos que al cargar nuestra página web no se producirá el efecto deseado y que no existe la separación entre las dos líneas.


Esto es debido a que el salto de línea en un documento web equivale a un espacio en blanco a la hora de visualizarse. Y si ponemos muchos saltos de línea seguidos solo se contabilizará el primero, que será el que equivalga a un espacio en blanco.


Para poder añadir un salto de línea deberemos de utilizar el elemento [`br`](https://w3api.com/HTML/br/). El elemento [`br`](https://w3api.com/HTML/br/) es un elemento simple. Es decir, no tiene un elemento de inicio y un elemento de cierre.


Así, para representar dos saltos de línea utilizaremos el siguiente código:


```html
Esta es una línea <br/><br/>
Y esta otra línea.
```


## Organizando el texto en párrafos


Ahora que conocemos el elemento [`br`](https://w3api.com/HTML/br/) vemos su potencial, si bien, si queremos dar estilo a un documento a base de datos de línea, veremos que es bastante complicado.


Es por eso que el lenguaje [HTML](https://www.manualweb.net/html/) nos ofrece otra serie de elementos para organizar el contenido del texto. Así contamos con párrafos, los cuales son representados mediante el elemento [`p`](https://w3api.com/HTML/p/). En este caso el elemento [`p`](https://w3api.com/HTML/p/) tiene una elemento de inicio y un elemento de cierre. Y el contenido de dentro será lo que representa al párrafo.


```html
<p>Parrafo</p>
```


De esta manera si queremos generar dos párrafos crearemos el siguiente código.


```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis non sem elementum tempor in at urna. Suspendisse auctor libero ut nibh consequat sed sagittis dolor iaculis. Donec condimentum mauris nec eros auctor sed vestibulum tellus consequat. Pellentesque tincidunt hendrerit neque, tincidunt tempus mauris consequat non.</p>

<p>Nullam interdum, enim sed ultrices sagittis, nibh tortor viverra lacus, eu tristique risus sapien et eros. Cras gravida, felis sed sagittis convallis, nulla ante vehicula justo, id imperdiet enim nisi id mauris. Nunc egestas volutpat congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula purus eu enim vulputate rhoncus.</p>
```


## Elementos de cabecera o titulares


Si seguimos revisando el poder dar formato al texto nos encontramos con los elementos de cabecera o titulares.


Estos elementos nos servirán para poner títulos a las diferentes secciones que tenga nuestra web. Son dos elementos, el de inicio y el de cierre y el contenido será el nombre de la cabecera o titular.


El [elemento es de tipo hx](https://w3api.com/HTML/h1/), donde la x va desde el 1 hasta el 6. Por ejemplo, si queremos poner un elemento de cabecera de tipo 1 escribiríamos lo siguiente:


```html
<h1>Cabecera o Titulo</h1>
```


Así veríamos todos los elementos de cabecera:


```html
<h1>Cabecera de tipo H1</h1>
<h2>Cabecera de tipo H2</h2>
<h3>Cabecera de tipo H3</h3>
<h4>Cabecera de tipo H4</h4>
<h5>Cabecera de tipo H5</h5>
<h6>Cabecera de tipo H6</h6>
```


## Crear una cita


Otro elemento que nos servirá para organizar nuestro documento [HTML](https://www.manualweb.net/html/) será el elemento [`blockquote`](https://w3api.com/HTML/blockquote/) o [`q`](https://w3api.com/HTML/q/). Este elemento nos permite reseñar una cita.


La diferencia entre el elemento [`blockquote`](https://w3api.com/HTML/blockquote/) y elemento [`q`](https://w3api.com/HTML/q/) es qué [`blockquote`](https://w3api.com/HTML/blockquote/) será un elemento de párrafo en si mismo, mientras que [`q`](https://w3api.com/HTML/q/) será autocontenida dentro de otro texto, lo que se conoce como un elemento en línea.


De esta forma, una cita con [`blockquote`](https://w3api.com/HTML/blockquote/) será:


```html
<blockquote>"Muchas veces me moría pensando que no iba verte. Pero moría la muerte cada vez que te veía". Eduardo Galeano</blockquote>
```


Y una cita con [`q`](https://w3api.com/HTML/q/) puede ser:


```html
El primer ministro afirmó que <q>"era el mejor momento económico para el páis"</q> el pasado día 8.
```


> Hay que tener cuidado con el elemento [`blockquote`](https://w3api.com/HTML/blockquote/) ya que en el pasado se utilizó de forma incorrecta para crear indentaciones o tabulaciones en los documentos web.


Los elementos [`blockquote`](https://w3api.com/HTML/blockquote/) y [`q`](https://w3api.com/HTML/q/) nos permiten indicar el origen de la cita mediante el atributo [`cite`](https://w3api.com/HTML/q/cite/).


```html
El primer ministro afirmó que <q cite="http://elpais.com/">"era el mejor momento económico para el páis"</q> el pasado día 8.
```


Y el idioma en el que está escrita la cita, mediante el atributo [`lang`](https://w3api.com/HTML/lang/):


```html
El primer ministro afirmó que <q lang="ES-es">"era el mejor momento económico para el páis"</q> el pasado día 8.
```


## Algo para las fórmulas: Subíndices y Superíndices


Aunque existen lenguajes de marcado especiales para la representación de fórmulas matemáticas, como puede ser MathML, en [HTML](https://www.manualweb.net/html/) encontramos un par de elementos que nos permitirán crear subíndices y superíndices. Estos son los elementos [`sub`](https://w3api.com/HTML/sub/) y [`sup`](https://w3api.com/HTML/sup/) respectivamente.


La representación del contenido irá entre el elemento de inicio y el elemento de cierre.


```html
<sup>superíndice</sup>
<sub>subíndice</sub>
```


Podemos escribir algunas notas matemáticas como:


```html
Como indica el teorema de Pitágoras:
hipotenusa<sup>2</sup> = cateto1<sup>2</sup>+cateto2<sup>2</sup>
```


O químicas como:


```html
El símbolo del agua es H<sub>2</sub>O.
```


## Enfatizando un texto


Una de las opciones que encontramos dentro del [HTML](https://www.manualweb.net/html/) es la de enfatizar un texto. Para ello el lenguaje [HTML](https://www.manualweb.net/html/) nos ofrece el elemento [`em`](https://w3api.com/HTML/em/).


El texto que vaya dentro de los elementos de inicio y de cierre del elemento [`em`](https://w3api.com/HTML/em/) será el texto que aparece enfatizado en nuestro navegador.


Así podemos escribir el siguiente texto:


```html
Más vale <em>pájaro en mano</em> que ciento volando.
```


## Resaltando un texto, más énfasis


Si el énfasis que nos proporciona el elemento [`em`](https://w3api.com/HTML/em/) no es suficiente para nuestro cometido, si queremos resaltar todavía más el texto, podemos utilizar el elemento [`strong`](https://w3api.com/HTML/strong/).


El elemento [`strong`](https://w3api.com/HTML/strong/) tiene un comportamiento similar al elemento [`em`](https://w3api.com/HTML/em/).


Así, si queremos resaltar más un texto, podemos escribir.


```html
A enemigo que huye, <strong>puente de plata</strong>.
```


Aunque **la mayoría de los navegadores representan el resaltado del texto elemento** [**`strong`**](https://w3api.com/HTML/strong/) **en negrita** no debemos de confundir esto con el fin del elemento [`strong`](https://w3api.com/HTML/strong/), el cual es meramente estructural.

