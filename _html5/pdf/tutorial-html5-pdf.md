# Tutorial HTML5

![Tutorial HTML](https://github.com/manualweb/manualweb/raw/master/img/logos/html.png)

| | |
|---|---|
|autor:|[Víctor Cuervo](http://www.victorcuervo.com)|
|versión:|v1.1|
|fecha:|2020-02-20T19:36:04.154+01:00|
|url:|http://www.manualweb.net/html5/|
|github:|https://github.com/manualweb/manualweb/tree/master/_html5|

## Índice

* Básico HTML5
  * Introducción al HTML5
  * Documento HTML5
  * Semántica HTML5
* Formularios HTLM5
  * Formularios HTML5
  * Elementos Input
  * DataList
  * Barras de Progreso
  * Elemento Output
  * Validación Formularios
* Multimedia HTML5
  * Vídeo en HTML5
  * Media Formats en HTML5
* Gráficos HTML5
 * Canvas HTML5
 * Texto en Canvas
* Almacenamiento & Offline
  * Modo Offline
  * Webstorage
* IndexedDB
  * Introducción a IndexedDB
* Rendimiento & Integración
  * API Fullscreen
  * History API

# Introducción a HTML5


## ¿Qué es HTML5?
[HTML5][HTML5] es un lenguaje de marcas que nos permite el desarrollo de páginas web, al cual se le han añadido un conjunto de capacidades que nos permiten explotar las capacidades de los dispositivos en temas de multimedia, rendimiento, offline, interacción con el usuario,...

De esta manera [HTML5][HTML5] se compone de un **núcleo de elementos del lenguaje** y una serie de **APIs que nos permiten gestionar las nuevas capacidades**.

Las mejoras en [HTML5][HTML5] van enfocadas a:

### Semántica de los Documentos
Se incorporan nuevos elementos que nos permiten dotar de mayor semántica a los documentos. Sobre todo a la hora de estructurar la información o los contenidos. Pasamos de un modelo gobernado por las capas `span` y los bloques `div` dónde la semántica se establecía con los elementos [CSS][CSS], a tener elementos específicos con su semántica.

Así, en [HTML5][HTML5] encontramos elementos como `article`, `section`, `aside`, `header`, `footer`,...

### Mejora de formularios
Se han revisado los formularios proporcionando nuevos tipos de `input` así como incluyendo nuevos elementos para los formularios como `datalist` para la gestión de listas, `progress` y `meter` para las barras de progreso u `output` para las salidas de datos.

Además se proporciona una valiosísimo API de validación de formularios así como validaciones explícitas en los propios campos.

### Multimedia
Se incorporan nuevos elementos `audio` y `video` para poder gestionar de forma estándar los codecs y formatos multimedia para poder incluir contenido multimedia en los documentos. Los elementos `audio` y `video` incorporan unos potentes API para poder interactuar con sus funcionalidades.

### Gráficos y Efectos 2D/3D
Las limitaciones gráficas de [HTML 4.01][HTML] eran muy grandes y no podíamos tener elementos gráficos. En [HTML5][HTML5] se incluye el elemento `canvas` que nos permite crear gráficos 2D y 3D con una gran interacción, llegando a la posibilidad de poder montar juegos gráficos sobre ellos.

Además se ha incluido el soporte de [SVG][SVG] dentro de los propios documentos [HTML5][HTML5].

### Offline y Almacenamiento
La red ha pasado de ser dominada por *agentes de usuario* que eran navegadores conectados constantemente a la red y de forma online a tener una amplia presencia y uso de dispositivos móviles, los cuales tienen menor capacidad de procesamiento, tasa de conexión y que además pueden estar offline.

Es por ello que [HTML5][HTML5] nos ayuda en primer lugar a saber si el navegador está online u offline. Y además nos incluye una serie de capacidades de almacenamiento en la parte cliente como son la **WebStorage**, la base de datos **IndexedDB** y la gestión de ficheros mediante el **API File**.

### Rendimiento e Integración
[HTML5][HTML5] nos ofrece un conjunto de API que nos ayudan en la creación de aplicaciones **SPA (Single Page Application)**, para ello ha mejorado el objeto `XMLHttpRequest` generando el Level 2.

Por otro ha creado los **WebWorkers** para que se puedan lanzar ejecuciones asíncronas desde el navegador y así no afectar a la interacción directa con el usuario.

Otros apartados que se han trabajado para las aplicaciones **SPA (Single Page Application)** son la integración del **Historial API** con las SPA, capacidades **Fullscreen** y la posibilidad de controlar el **drag&drop** de elementos.

### Conectividad
Las aplicaciones de cliente han pasado a un modelo de aplicaciones **SPA (Single Page Application)** de una gran riqueza visual, pero las cuales recuperar los datos de servicios de negocio externos.

Así, con [HTML5][HTML5], han surgido tecnologías como **Websockets** para establecer conexiones permanentes con los servicios de negocio, **Server-sent Events** para poder publicar eventos desde el servidor al cliente o **WebRTC** para poder crear webs que nos permitan una experiencia real-time.

### Gestión de Dispositivos
Como ya hemos comentado hemos pasado de ordenadores y su navegador a visualizar los documentos web en dispositivos móviles que ofrecen muchas posibilidades y una manera diferente de interacción por parte del usuario.

Así como [HTML5][HTML5] podremos conocer la **geolocalización del dispositivo**, gestionar si **el dispositivo está en horizontal o vertical** o accede a sus capacidades y conocer **el estado de la batería** o poder **utilizar la cámara**.

## Historia y Futuro de HTML 5
El *28 de octubre de 2014* se convertía en estándar la versión [HTML5][HTML5] dentro de la [W3C][W3C]. Ya habían pasado unos años desde que el [WHATWG (Web Hypertext Application Technology Working Group)][WHATWG] empezase a trabajar en la definición del estándar [HTML5][HTML5] liderados por [Ian Hickson][IanHickson].

El estándar [HTML5][HTML5] establece en su base dos puntos. El primero es que la especificación del lenguaje debe de ser compatible con todo lo creado hasta el momento con [HTML 4.01][HTML] y por otro que hay que ir añadiendo de forma más dinámica nuevas funcionalidades a lenguaje que se aprovechen de todos los avances tecnológicos.

Después de llegar a la publicación de [HTML5][HTML5] parecía que el trabajo de la [W3C][W3C] y el [WHATWG][WHATWG] habían vuelto a confluir y teníamos un estándar con un futuro prometedor.

Si bien, desde el 2012, el trabajo realizado por la [W3C][W3C] y [WHATWG][WHATWG] se ha vuelto a separar en dos vías.

Por un lado la [W3C][W3C] sigue trabajando en un modelo de versiones con una cadencia larga en el tiempo, actualmente la versión [HTML 5.2][HTML5.2] es la recomendación estándar desde el 14/diciembre/2017 y está trabajando en [HTML 5.3][HTML5.3] que a *18/octubre/2018* está en "Working Draft".

Por otro la [WHATWG][WHATWG] trabaja en un modelo de estándar que está continuamente vivo y que se conoce como [HTML Living Standard][HTMLLiving].

Y ya existen algunas discrepancias en elementos y la compatibilidad que se deben de manejar.

Esperemos que en un futuro las aguas vuelvan a su cauce y tengamos de nuevo un estándar único y ágil en la publicación de nuevas versiones.

# Documento HTML5

Aunque hasta [HTML 4.01][HTML] habíamos tenido diferentes tipos de documentos, los cuales diferenciábamos por el `doctype` del documento, en [HTML5][HTML5] solo se tiene un único tipo de documento el cual estára determinado por la cabera:

~~~html
<!DOCTYPE html>
~~~

De esta manera el documento le está diciendo al navegador que es un documento de tipo [HTML5][HTML5].

La siguiente cosa que haremos en un documento [HTML5][HTML5] será declarar el juego de caracteres que utilizará. Para ello deberemos de utilizar un elemento `meta` mediante su atributo `charset`.

Así, para indicar que el juego de caracteres de un documento es **utf-8** escribiremos lo siguiente dentro del elemento `head`:

~~~html
<head>
  <meta charset="UTF-8">
</head>
~~~

[HTML5][HTML5] recomienda el uso del juego de caracteres **utf-8** y abandonar el uso de juegos locales de caracteres.

El documento [HTML5][HTML5] base quedaría de la siguiente manera:

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Titulo Documento</title>
</head>
<body>

<!-- Documento HTML5 -->

</body>
</html>
~~~

# Semántica HTML5

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


[HTML5]: {{site.baseurl}}/html5/
[HTML]: {{site.baseurl}}/html/
[CSS]: {{site.baseurl}}/css/
[SVG]: {{site.baseurl}}/svg/
[WHATWG]: https://whatwg.org/
[HTMLLiving]: https://html.spec.whatwg.org/multipage/
[IanHickson]: https://github.com/Hixie
[W3C]: http://w3.org
[HTML5.3]: https://www.w3.org/TR/html53/
[HTML5.2]: https://www.w3.org/TR/html5/
[W3Validator]: https://validator.w3.org/nu/#textarea
