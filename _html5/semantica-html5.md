---
title: Semántica HTML5
permalink: /html5/semantica-html5/
excerpt: "La semántica HTML5 permite definir la estructura de la página mediante elementos article, section, nav, aside, header y footer"
tags: [semántica,article,nav,aside,footer,header,section,h1,h6,div,address]
image:
  path: /img/covers/html5-cover.jpg
---

La semántica [HTML5](https://www.manualweb.net/html5/) permite estructurar mucho mejor las páginas web definiendo las partes que la componen de una forma mucho más entendible. Pero vamos a analizar primero como se estructuraban las páginas en [HTML 4](https://www.manualweb.net/html/) para entender el avance semántico que hemos tenido en [HTML5](https://www.manualweb.net/html5/).


## Análisis de la Semántica en HTML 4


Cuando se trabajaba con [HTML 4](https://www.manualweb.net/html/) la estructura de un documento se conseguía mediante capas [`div`](https://www.w3api.com/HTML/div/) y elementos de cabecera [`h1`](https://www.w3api.com/HTML/h1/) a [`h6`](https://www.w3api.com/HTML/h6/). Dependiendo de la anidación que utilizásemos con las cabeceras y capas, así se estructuraba nuestro documento.


Los elementos [`div`](https://www.w3api.com/HTML/div/) se utilizaban para determinar las secciones y sub-secciones.


```html
<div class="seccion">
  <h1>Titulo Principal</h1>
  Artículo principal del texto.
  <div class="subseccion">
    <h2>Subtítulo</h2>
    Texto relacionado con el primer subtítulo del artículo.
  </div>
</div>
```


Esto generaba una serie de problemas en [HTML 4](https://www.manualweb.net/html/). El primero es que la semántica del documento no depende de los elementos del documento [HTML 4](https://www.manualweb.net/html/) sino del correcto uso de los estilos [CSS](https://www.manualweb.net/css/). Y hay que recordar que el uso de [CSS](https://www.manualweb.net/css/) solo debería de ser para dar estilo al documento.


Otro problema era si queríamos unir varios documentos, es decir, componer un documento en base a diferentes documentos [HTML 4](https://www.manualweb.net/html/), ya que lo que estamos buscando es unir capas [`div`](https://www.w3api.com/HTML/div/) sobre otras capas [`div`](https://www.w3api.com/HTML/div/), además cada una podría tener títulos de cabecera de lo más variopintos dando como resultado un documento con una estructura incorrecta.


La interpretación de los documentos en [HTML 4](https://www.manualweb.net/html/) era totalmente lineal, y nos encontrábamos que dentro de una sección podían aparecer partes no relativas a dicho contenido, normalmente elementos como publicidad o información anexa.


EL último inconveniente es que aparecen otros elementos dentro del documento [HTML 4](https://www.manualweb.net/html/) que no son puro contenido, a lo cual también debemos de dar una estructura. Por ejemplo, _áreas de navegación_, _cabeceras_, _pies de página_,…


## Nuevo modelo semántico en HTML5


Para resolver los problemas derivados de la semántica en [HTML 4](https://www.manualweb.net/html/) se crean un conjunto de nuevos elementos en [HTML 5](http://www.manualweb.net/html5/): [`article`](https://www.w3api.com/HTML/article/), [`section`](https://www.w3api.com/HTML/section/), [`nav`](https://www.w3api.com/HTML/nav/), [`aside`](https://www.w3api.com/HTML/aside/), [`header`](https://www.w3api.com/HTML/header/) y [`footer`](https://www.w3api.com/HTML/footer/). Dando nacimiento a la semántica [HTML5](https://www.manualweb.net/html5/).


### Article


El elemento [`article`](https://www.w3api.com/HTML/article/) nos permite definir una **pieza independiente y auto-contenida** dentro de un documento [HTML 5](http://www.manualweb.net/html5/).


De esta manera podremos reutilizar los elementos [`article`](https://www.w3api.com/HTML/article/) de múltiples formas.


Los elementos [`article`](https://www.w3api.com/HTML/article/) suelen contener el contenido de un post, la entrada de un foro, un artículo de un periódico,…


### Section


[`Section`](https://www.w3api.com/HTML/section/) es un elemento que representa una sección independiente dentro de un documento [HTML 5](http://www.manualweb.net/html5/), la cual no puede ser representada por otro elemento semántico más específico como podrían ser: [`nav`](https://www.w3api.com/HTML/nav/), [`article`](https://www.w3api.com/HTML/article/), [`aside`](https://www.w3api.com/HTML/aside/),…


Las secciones suelen tener incorporadas un elemento [`h1`](https://www.w3api.com/HTML/h1/) a [`h6`](https://www.w3api.com/HTML/h6/) que le sirve para indicar el título de la sección.


### Nav


El elemento [`nav`](https://www.w3api.com/HTML/nav/) o elemento de navegación define una sección que contiene enlaces de navegación. Pueden existir tantos elementos [`nav`](https://www.w3api.com/HTML/nav/) como queramos dentro de un documento [HTML 5](http://www.manualweb.net/html5/). Así es normal que encontremos un elemento [`nav`](https://www.w3api.com/HTML/nav/) para la navegación principal del sitio web y otro que contenga una tabla de contenido del documento que estemos visualizando.


Los elementos [`nav`](https://www.w3api.com/HTML/nav/) no forman parte de la estructura general del documento, por lo cual no afecta el sitio del documento donde vayan situados.


### Aside


[`Aside`](https://www.w3api.com/HTML/aside/) o elemento de contenido asociado es un elemento que nos permite gestionar contenido de forma independiente al contenido principal. El contenido dentro del elemento [`aside`](https://www.w3api.com/HTML/aside/) puede estar relacionado o no con el contenido principal, pero nunca afectará a la estructura de la sección que lo contiene. Se puede decir que es una relación indirecta.


El elemento [`aside`](https://www.w3api.com/HTML/aside/) suele utilizarse para contenido explicativo o bien para barras laterales.


### Header


El elemento de cabecera [`header`](https://www.w3api.com/HTML/header/) se utiliza normalmente para definir la cabecera de la página. En la cabecera de la página solemos encontrar el título y logo de la página, un menú de enlaces,….


El elemento [`header`](https://www.w3api.com/HTML/header/) no es propietario del documento y es por ello que podemos definir cabeceras mediante un elemento [`header`](https://www.w3api.com/HTML/header/) dentro de los elementos [`article`](https://www.w3api.com/HTML/article/), [`section`](https://www.w3api.com/HTML/section/),[`aside`](https://www.w3api.com/HTML/aside/) y [`nav`](https://www.w3api.com/HTML/nav/).


No se creará ninguna sección cuando utilicemos el elemento [`header`](https://www.w3api.com/HTML/header/).


### Footer


El elemento [`footer`](https://www.w3api.com/HTML/footer/) sirve para definir el pie de página de un documento. En los pie de página de los documentos se suele incluir el copyright u otros elementos legales.


También podemos definir un pie de página dentro de los elementos [`article`](https://www.w3api.com/HTML/article/), [`section`](https://www.w3api.com/HTML/section/),[`aside`](https://www.w3api.com/HTML/aside/) y [`nav`](https://www.w3api.com/HTML/nav/).


No se creará ninguna sección cuando utilicemos el elemento [`footer`](https://www.w3api.com/HTML/footer/).


## Definir secciones en HTML 5


La primera sección dentro de un documento [HTML 5](http://www.manualweb.net/html5/) es el propio elemento [`body`](https://www.w3api.com/HTML/article/). Todo el contenido dentro del elemento [`body`](https://www.w3api.com/HTML/article/) es una sección.


Dentro del elemento [`body`](https://www.w3api.com/HTML/article/) podremos encontrar otros elementos que definan secciones por si mismo, las cuales se vayan anidando. Para ello encontramos elementos como [`article`](https://www.w3api.com/HTML/article/), [`section`](https://www.w3api.com/HTML/section/),[`aside`](https://www.w3api.com/HTML/aside/) y [`nav`](https://www.w3api.com/HTML/nav/).


> Cada sección dentro de [HTML 5](http://www.manualweb.net/html5/) tiene su propia jerarquía de títulos de cabecera. Es por ello que el primer título de cabecera de cada sección podrá ser un [`h1`](https://www.w3api.com/HTML/h1/).


```html
<section>
  <h1>Titulo principal</h1>
  <section>
    <h1>Subtítulo 1</h1>
    <p>Contenido se la primera sección.</p>
  </section>
  <section>
    <h1>Subtítulo 2</h1>
    <p>Contenido se la segunda sección.</p>
  </section>
  <section>
    <h1>Subtítulo 3</h1>
    <p>Contenido se la tercera sección.</p>
  </section>
  <aside>
    <p>Publicidad</p>
  </aside>
</section>
<footer>
  <p>Pie de Página de la web</p>
</footer>
```


La salida del documento [HTML 5](http://www.manualweb.net/html5/) será:

1. Título Principal
	1. Subtítulo 1
	2. Subtítulo 2
	3. Subtítulo 3

> El [Validador de la W3C](https://validator.w3.org/) nos permite de una forma sencilla analizar el outline de un documento HTML para ver la salida que genera y las secciones de las que se compone.


## Semántica y títulos de cabecera


A la hora de utilizar los títulos de cabecera [`h1`](https://www.w3api.com/HTML/h1/) a [`h6`](https://www.w3api.com/HTML/h6/) dentro de [HTML 5](http://www.manualweb.net/html5/) deberemos de saber que el primer elemento que utilicemos en la sección será el que marque la cabecera de la sección, independientemente del nivel de título de cabecera que tengamos.


Es decir, podemos tener una sección que empiece por [`h1`](https://www.w3api.com/HTML/h1/) y otra que empiece igualmente por [`h1`](https://www.w3api.com/HTML/h1/) o por [`h3`](https://www.w3api.com/HTML/h3/) u otro nivel.


Así podríamos encontrarnos con el siguiente código semántico en [HTML 5](http://www.manualweb.net/html5/) :


```html
<section>
  <h1>Artículo principal</h1>
  <p>Texto del artículo principal.</p>
  <section>
    <h2>Subsección</h2>
    <p>Contenido secundario del artículo principal</p>
  </section>
</section>
<section>
  <h4>Artículo Secundario</h4>
  <p>Contenido del artículo secundario.</p>
</section>
```


La salida del documento [HTML 5](http://www.manualweb.net/html5/) será:

1. Artículo Principal
	1. Subsección
2. Artículo Secundario

Si bien es verdad que aunque esto esté permitido en [HTML 5](http://www.manualweb.net/html5/) es recomendable que cada una de las secciones se empiece utilizando el título de cabecera [`h1`](https://www.w3api.com/HTML/h1/).


## Secciones Implícitas


Para mantener compatibilidad con el procesamiento de documentos [HTML 4](https://www.manualweb.net/html/), dentro de [HTML 5](http://www.manualweb.net/html5/) existen las **secciones implícitas**.


Y es que el uso de los elementos de títulos de cabecera dentro de una sección generarán una subsección, aunque no hayamos utilizado otro elemento para definir una nueva sección.


Es decir, que en el siguiente código [HTML 5](http://www.manualweb.net/html5/) tendremos dos secciones, aunque solo hayamos utilizado un elemento [`section`](https://www.w3api.com/HTML/article/).


```html
<section>
  <h1>Artículo principal</h1>
  <p>Texto del artículo principal.</p>
  <h2>Subsección</h2>
  <p>Contenido secundario del artículo principal</p>
</section>
```


El uso del elemento [`h2`](https://www.w3api.com/HTML/h2/) acabará generando una subsección de forma implícita. Por lo tanto la salida del documento será:

1. Artículo principal

En el caso de que el elemento a utilizar sea del mismo nivel que el de la sección actual, lo que hará será crear una nueva sección.


De esta manera vemos que dentro del elemento [`section`](https://www.w3api.com/HTML/article/) hay el uso de dos elementos [`h1`](https://www.w3api.com/HTML/h1/). El segundo hará que se genere una nueva sección.


```html
<section>
  <h1>Título 1</h1>
  <p>Texto del artículo.</p>
  <h1>Título 2</h1>
  <p>Texto del artículo.</p>
</section>
```


La salida del documento será:

1. Título 1
2. Título 2

## Elementos con su propia estructura


Hay un conjunto de elementos dentro de [HTML 5](http://www.manualweb.net/html5/) los cuales tienen su propia estructura y que no afectan a la estructura de la sección que los alberga. Estos son: [`blockquote`](https://www.w3api.com/HTML/blockquote/), [`details`](https://www.w3api.com/HTML/details/), [`fieldset`](https://www.w3api.com/HTML/fieldset/), [`figure`](https://www.w3api.com/HTML/figure/) y [`td`](https://www.w3api.com/HTML/td/).


Así podríamos encontrarnos una referencia utilizando un elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/) dentro de una sección.


```html
<section>
  <h1>Artículo principal</h1>
  <p>Texto del artículo principal.</p>
  <blockquote>
    <h1>Título a Remarcar</h1>
    <p>Contenido a remarcar.</p>
  </blockquote>
  <section>
    <h2>Subsección</h2>
    <p>Contenido secundario del artículo principal</p>
  </section>
</section>
```


Dicho elemento [`blockquote`](https://www.w3api.com/HTML/blockquote/) no afecta para nada a la estructura, la cual seguirá siendo:

1. Artículo Principal
	1. Subsección

## Address: Autor de un artículo


El elemento [`address`](https://www.w3api.com/HTML/address/) ya existía desde [HTML 4](https://www.manualweb.net/html/). Este elemento nos sirve para incluir información de contacto. Si bien en [HTML 5](http://www.manualweb.net/html5/) se ha extendido su uso para poder establecer el contacto de las diferentes secciones del documento.


Como un documento puede contener secciones de diferentes autores podremos definir tantos elementos [`address`](https://www.w3api.com/HTML/address/) como necesitemos.


Para definir secciones de diferentes autores deberemos de utilizar el elemento [`article`](https://www.w3api.com/HTML/article/) y el contacto asociado mediante el elemento [`address`](https://www.w3api.com/HTML/address/) será aquel que esté más cercano al elemento [`article`](https://www.w3api.com/HTML/article/).

