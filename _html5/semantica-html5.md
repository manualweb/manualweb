---
title: Semántica en HTML5
permalink: /html5/semantica-html5/
---
# Semántica en HTML5

1. Análisis de la Semántica en HTML 4
2. Nuevo modelo semántico en HTML5
   1. Article
   2. Section
   3. Nav
   4. Aside
   5. Header
   6. Footer
3. Definir secciones en HTML 5
4. Semántica y títulos de cabecera
5. Secciones Implícitas
6. Elementos con su propia estructura
7. Address: Autor de un artículo


## Análisis de la Semántica en HTML 4

Cuando se trabajaba con [HTML 4][HTML] la estructura de un documento se conseguía mediante capas `div` y elementos de cabecera `h1` a `h6`. Dependiendo de la anidación que utilizásemos con las cabeceras y capas, así se estructuraba nuestro documento.

Los elementos `div` se utilizaban para determinar las secciones y sub-secciones.

~~~html
<div class="seccion">
  <h1>Titulo Principal</h1>
  Artículo principal del texto.

  <div class="subseccion">
    <h2>Subtítulo</h2>
    Texto relacionado con el primer subtítulo del artículo.
  </div>

</div>
~~~

Esto generaba una serie de problemas en [HTML 4][HTML]. El primero es que la semántica del documento no depende de los elementos del documento [HTML 4][HTML] sino del correcto uso de los estilos [CSS][CSS]. Y hay que recordar que el uso de [CSS][CSS] solo debería de ser para dar estilo al documento.

Otro problema era si queríamos unir varios documentos, es decir, componer un documento en base a diferentes documentos [HTML 4][HTML], ya que lo que estamos buscando es unir capas `div` sobre otras capas `div`, además cada una podría tener títulos de cabecera de lo más variopintos dándo como resultado un documento con una estructura incorrecta.

La interpretación de los documentos en [HTML 4][HTML] era totalmente lineal, y nos encontrábamos que dentro de una sección podían aparecer partes no relativas a dicho contenido, normalmente elementos como publicidad o información anexa.

EL último inconveniente es que aparecen otros elementos dentro del documento [HTML 4][HTML] que no son puro contenido, a lo cual también debemos de dar una estructura. Por ejemplo, áreas de navegación, cabeceras, pies de página,...

## Nuevo modelo semántico en HTML5
Para resolver los problemas derivados de la semántica en [HTML 4][HTML] se crean un conjunto de nuevos elementos en [HTML 5][HTML5]: `article`, `section`, `nav`, `aside`, `header` y `footer`.

### Article
El elemento `article` nos permite definir una **pieza independiente y auto-contenida** dentro de un documento [HTML 5][HTML5].

De esta manera podremos reutilizar los elementos `article` de múltiples formas.

Los elementos `article` suelen contener el contenido de un post, la entrada de un foro, un artículo de un periódico,...

### Section
`Section` es un elemento que representa una sección independiente dentro de un documento [HTML 5][HTML5], la cual no puede ser representada por otro elemento semántico más específico como podrían ser: `nav`, `article`, `aside`,...

Las secciones suelen tener incorporadas un elemento `h1` a `h6` que le sirve para indicar el título de la sección.

### Nav
El elemento `nav` o elemento de navegación define una sección que contiene enlaces de navegación.
Pueden existir tantos elementos `nav` como queramos dentro de un documento [HTML 5][HTML5]. Así es normal que encontremos un elemento `nav` para la navegación principal del sitio web y otro que contenga una tabla de contenido del documento que estemos visualizando.

Los elementos `nav` no forman parte de la estructura general del documento, por lo cual no afecta el sitio del documento donde vayan situados.

### Aside
`Aside` o elemento de contenido asociado es un elemento que nos permite gestionar contenido de forma independiente al contenido principal. El contenido dentro del elemento `aside` puede estar relacionado o no con el contendio principal, pero nunca afectará a la estructura de la sección que  lo contiene. Se puede decir que es una relación indirecta.

El elemento `aside` suele utilizarse para contenido explicativo o bien para barras laterales.

### Header
El elemento de cabecera `header` se utiliza normalmente para definir la cebecera de la página. En la cabecera de la página solemos encontrar el título y logo de la página, un menú de enlaces,....

El elemento `header` no es propietario del documento y es por ello que podemos definir cabeceras mediante un elemento `header` dentro de los elementos `article`, `section`,`aside` y `nav`.

No se creará ninguna sección cuando utilicemos el elemento `header`.

### Footer
El elemento `footer` sirve para definir el pie de página de un documento. En los pie de página de los documentos se suele incluir el copyright u otros elementos legales.

También podemos definir un pie de página dentro de los elementos `article`, `section`,`aside` y `nav`.

No se creará ninguna sección cuando utilicemos el elemento `footer`.

## Definir secciones en HTML 5
La primera sección dentro de un documento [HTML 5][HTML5] es el propio elemento `body`. Todo el contenido dentro del elemento `body` es una sección.

Dentro del elemento `body` podremos encontrar otros elementos que definan secciones por si mismo, las cuales se vayan anidando. Para ello encontramos elementos como  `article`, `section`, `nav` y `aside`.

> Cada sección dentro de [HTML 5][HTML5] tiene su propia jerarquía de títulos de cabecera. Es por ello que el primer título de cabecera de cada sección podrá ser un `h1`.

~~~html
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
~~~

La salida del documento [HTML 5][HTMl5] será:

1. Título Principal
   1. Subtítulo 1
   2. Subtítulo 2
   3. Subtítulo 3

> El [Validador de la W3C][W3Validator] nos permite de una forma sencilla analizar el outline de un documento [HTML][HTML] para ver la salida que genera y las secciones de las que se compone.

## Semántica y títulos de cabecera
A la hora de utilizar los títulos de cabecera `h1` a `h6` dentro de [HTML 5][HTML5] deberemos de saber que el primer elemento que utilicemos en la sección será el que marque la cabecera de la sección, independientemente del nivel de título de cabecera que tengamos.

Es decir, podemos tener una sección que empiece por `h1`y otra que empiece igualmente por `h1` o por `h3` u otro nivel.

Así podríamos encontrarnos con el siguiente código semántico en [HTML 5][HTML5]:

~~~html
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
~~~

La salida del documento [HTML 5][HTMl5] será:

1. Artículo Principal
   1. Subsección
2. Artículo Secundario

Si bien es verdad que aunque esto esté permitido en [HTML 5][HTMl5] es recomendable que cada una de las secciones se empiece utilizando el título de cabecera `h1`.

## Secciones Implícitas
Para mantener compatibilidad con el procesamiento de documentos [HTML 4][HTMl], dentro de [HTML 5][HTMl5] existen las **secciones implícitas**.

Y es que el uso de los elementos de títulos de cabecera dentro de una sección generarán una subsección, aunque no hayamos utilizado otro elemento para definir una nueva sección.

Es decir, que en el siguiente código [HTML 5][HTML5] tendremos dos secciones, aunque solo hayamos utilizado un elemento `section`.

~~~html
<section>
  <h1>Artículo principal</h1>
  <p>Texto del artículo principal.</p>

  <h2>Subsección</h2>
  <p>Contenido secundario del artículo principal</p>

</section>
~~~

El uso del elemento `h2` acabará generando una subsección de forma implícita. Por lo tanto la salida del documento será:

1. Artículo principal
   1. Subsección

En el caso de que el elemento a utilizar sea del mismo nivel que el de la sección actual, lo que hará será crear una nueva sección.

De esta manera vemos que dentro del elemento `section` hay el uso de dos elementos `h1`. El segundo hará que se genere una nueva sección.

~~~html
<section>
  <h1>Título 1</h1>
  <p>Texto del artículo.</p>

  <h1>Título 2</h1>
  <p>Texto del artículo.</p>

</section>
~~~

La salida del documento será:

1. Título 1
2. Título 2


## Elementos con su propia estructura
Hay un conjunto de elementos dentro de [HTML 5][HTML5] los cuales tienen su propia estructura y que no afectan a la estructura de la sección que los alberga. Estos son: `blockquote`, `details`, `fieldset`, `figure` y `td`.

Así podríamos encontrarnos una referencia utilizando un elemento `blockquote` dentro de una sección.

~~~html
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
~~~

Dicho elemento `blockquote` no afecta para nada a la estructura, la cual seguirá siendo:

1. Artículo Principal
   1. Subsección


## Address: Autor de un artículo
El elemento `address` ya existía desde [HTML 4][HTML]. Este elemento nos sirve para incluir información de contacto. Si bien en [HTML 5][HTML5] se ha extendido su uso para poder establecer el contacto de las diferentes secciones del documento.

Como un documento puede contener secciones de diferentes autores podremos definir tantos elementos `address` como necesitemos.

Para definir secciones de diferentes autores deberemos de utilizar el elemento `article` y el contacto asociado mediante el elemento `address` será aquel que esté más cercano al elemento  `article`.


[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[CSS]: http://www.manualweb.net/css/
[W3Validator]: https://validator.w3.org/nu/#textarea
