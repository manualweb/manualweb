---
title: Enlaces HTML
permalink: /html/enlaces-html/
---
## ¿Qué son los enlaces en HTML?

Lo más importante de los documentos [HTML][ManualHTML] son los enlaces. Ya que mediante los enlaces en [HTML][ManualHTML] podemos comunicar una página con otra. De esta forma, enlazando documentos [HTML][ManualHTML] podemos acabar tejiendo lo que es Internet.

Para crear un enlace en [HTML][ManualHTML] utilizamos el [elemento A][A] con la siguiente sintaxis:

~~~html
<a>Contenido del enlace</a>
~~~

Pero solo con esto el enlace no tendrá mucha utilidad ya que el principal objetivo del enlace es enlazar a un destino. Para poder indicar el destino de un enlace utilizamos el [atributo href][Href]. En valor del [atributo href][Href] puede ser cualquier URI que represente un recurso. Es decir, una página, una parte de una página, una URL genérica, un archivo,... De esta forma el enlace en [HTML][ManualHTML] lo crearemos con la sintaxis:

~~~html
<a href="URI">Contenido del enlace</a>
~~~

A modo de ejemplo podríamos tener los siguientes enlaces:

~~~html
<a href="documento.html">Enlace a un documento</a>
<a href="documento.html#resumen">Enlace a una parte de un documento</a>
<a href="http://www.manualweb.net">Enlace a una web</a>
<a href="http://www.manualweb.net/tutorial-html/">Enlace a un directorio</a>
<a href="miimagen.png">Enlace a una imagen</a>
<a href="mimusica.mp3">Enlace a un archivo de sonido</a>
~~~

## Destino del enlace

Pero, ¿dónde se abre el enlace? Pues por defecto y si no hemos configurado nada en el navegador web que estemos utilizando el enlace se abre en la misma ventana en la que tengamos el enlace.

Si bien, en el enlace, podemos indicar el destino que queremos darle a dicho enlace. Eso lo podemos hacer mediante el [atributo target][Target]. Los posibles valores que admite el [atributo target][Target] son:

* **_blank**, el agente de usuario intentará abrir el enlace en una nueva ventana. La nueva ventana no tendrá nombre.
* **_self**, el agente de usuario intentará abrir el enlace en el mismo marco donde está en código actual.
* **_parent**, el agente de usuario intentará abrir el enlace en el [frameset][FRAMESET] inmediatamente superior al que se encuentra la página. Esto suele suceder cuando tenemos el enlace en un área de frames.
* **_top**, el agente de usuario intentará abrir el enlace en la ventana padre. En el caso de que exista un [frameset][FRAMESET] lo eliminará y se hará con toda la ventana.
* **nombre_marco**, se podrá indicar el nombre de un frame. En este caso el agente de usuario intentará abrir el enlace en el [frame][FRAME] que coincida con el nombre. En el caso de no existir un [frame][FRAME] con ese nombre lo abrirá en una nueva ventana, asignándole dicho nombre.

Así podremos tener el siguiente código:

~~~html
<a href="enlace.html" target="_blank">Abrir enlace en una nueva ventana</a>
<a href="enlace.html" target="_top">Abrir enlace en la ventana superior</a>
~~~

## Título de los enlaces

El enlace en HTML, tal y como lo hemos visto hasta ahora, sirve para enlazar contra un recurso de la web: servidor, directorio, dominio,... Y lo que en mayor o menor medida describe lo que enlazamos es el contenido que encontramos entre las [etiquetas A][A].

Si bien el [elemento A][A] nos ofrece un [atributo llamado title][Title]. En el [atributo title][Title] podemos describir de una forma textual el destino del enlace. Esto servirá no solo al usuario para que pueda obtener más información de dónde va, si no a las máquinas a la hora de asignar un nombre a la URI sobre la que estamos enlazando.

Un ejemplo sería:

~~~html
<a href="http://www.manual.net" title="Web de Manuales y Tutoriales de Programación">Ir a Manual Web</a>
~~~

## Enlaces en HTML a una parte del documento

Hasta el momento lo que hemos visto es como montar enlaces en [HTML][ManualHTML] a documentos. Ya sea porque enlazamos directamente al documento o bien porque enlazamos a un servidor o directorio que nos dará un documento.

Pero otra capacidad que tenemos en [HTML][ManualHTML] es la de enlazar a una parte concreta del documento. Imagina que en un documento tenemos un título y varios capítulos. Y lo que queremos hacer desde otro documento [HTML][ManualHTML] o bien desde el mismo documento es enlazar directamente al inicio de un capítulo.

### Marcando una parte del documento

Para poder enlazar a una parte concreta de un documento lo primero que tenemos que hacer es marcar esa parte del documento. Para ello contamos con el [atributo name][Name]. Si creamos un enlace con el [atributo name][Name], este enlace se definirá como posición y no como enlace de navegación.

La sintaxis será:

~~~html
<a name="partedocumento">Contenido</a>
~~~

En este caso el contenido puede ser vacío ya que no se ofrecerá nada para navegar. Es por ello que podemos ponerlo antes de nuestro capítulo.

~~~html
<p>Parrafo</p>
<a name="cap2"></a><h2>Nuevo Capítulo</2>
~~~

Es muy importante el contenido que le demos al [atributo name][Name], ya que dicho contenido vamos a utilizarlo para acceder desde un enlace.

### Enlazando a una parte del documento

Una vez que hemos creado el marcaje del enlace en [HTML][ManualHTML] en un documento es hora de acceder a esa parte del documento. Para ello solo tenemos que poner el nombre que le hayamos dado al [atributo name][Name] precedido de una almohadilla.

La sintaxis será:

~~~html
<a href="#name">Enlace a parte del documento</a>
~~~

Es decir, en el caso de que la parte marcada en el documento la hayamos marcado con “cap2" el enlace que tenemos que conformar será:

~~~html
<a href="#cap2">Enlace al capítulo 2</a>
~~~

La parte del documento al que accedemos no tiene porqué estar en el mismo documento del enlace, puede estar en otro documento o servidor. De esta forma podemos tener enlaces a partes de otros documentos de la siguiente forma:

~~~html
<a href="documento2.html#cap2">Enlace al capítulo 2 del documento2</a>
<a href="http://servidor.com/#cap2">Enlace al capítulo 2 del servidor</a>
~~~

El **utilizar la almohadilla** como valor del [href][Href] nos puede servir para acceder a la parte superior del documento. Es por ello que esto es utilizado como enlace en las partes inferiores de los documentos [HTML][ManualHTML] para subir a la parte de arriba.

~~~html
<a href="#">Ir Arriba</a>
~~~

## Enlaces en HTML con imágenes

En lo que va de capítulo sólo hemos visto enlaces en [HTML][ManualHTML] cuyo contenido era texto. Si bien como contenido de los enlaces podemos poner imágenes.

~~~html
<a href="http://www.victorcuervo.com"><img src="victor.jpg" alt="Foto de Victor"/></a>
~~~

De esta forma toda la imagen será un elemento enlazable que nos llevará, en el caso de pinchar sobre ella, al destino indicado en el [atributo href][Href].

Esta técnica se suele utilizar para presentar una imágen de baja resolución y tamaño, que al pulsarla nos cargue una imagen con mayor resolución y tamaño. Un código que podría ser de la siguiente forma:

~~~html
<a href="foto.png"><img src="thumbnail_foto.png" alt="Mi foto"/></a>
~~~

## Enlaces en HTML para descargar fichero

Otro de los usos que se les da a los enlaces en [HTML][ManualHTML] es el de habilitar la descarga de ficheros. En este caso el destino indicado por el [atributo href][Href] debe de ser el fichero que queremos descargar. En estos casos es bueno que el fichero a descargar este comprimido.

El código quedaría de la siguiente forma:

~~~html
<a href="fichero.zip">Descargar el fichero</a>
~~~

Es importante que sepas que el navegador siempre va a intentar abrir el fichero enlazado en el [atributo href][Href] para poder mostrarlo visualmente. En el caso de que no encuentre ningún programa para abrirlo nos mostrará un menú emergente en el que nos dará la posibilidad de guardar el fichero.

## Protocolos en la URL del enlace

Hasta ahora hemos visto que todos los enlaces en [HTML][ManualHTML] se apoyan en el protocolo http, pero el enlace especificado en el [atributo href][Href] no tiene porqué ser http, si no que podría ser otro protocolo como ftp, mailto,...

~~~html
<a href="ftp://servidorftp.com">Servidor FTP</a>
~~~

Lo bueno de utilizar el protocolo mailto dentro de los enlaces en [HTML][ManualHTML] es que el navegador web nos va a abrir directamente el programa de correo electrónico que tengamos predeterminado en el ordenador.

La estructura del protocolo mailto en un enlace a sería la siguiente:

~~~html
<a href="mailto:usuario@dominio.com">Email para usuario@dominio.com</a>
~~~

Lo bueno es que además podemos ponerle parámetros al modelo de mailto y se autorellenarán campos como el tema del email, campos CC, BCC,...

~~~html
<a href="mailto:usuario@dominio.com?subject='Tema del Mensaje'">Email para usuario@dominio.com</a>
~~~

## Relaciones entre documentos: el elemento link

Hasta ahora hemos visto enlaces explícitos entre diferentes recursos. Si bien el lenguaje [HTML][ManualHTML] nos da la posibilidad de establecer relaciones entre documentos sin tener que explicitar directamente un enlace. Para ello [HTML][ManualHTML] nos ofrece el [elemento link][LINK].

La estructura del [elemento link][LINK] es:

~~~html
<link href="destino" rel="relacion" rev="relacion-inversa"/>
~~~

Es importante saber que el elemento link solo aparece dentro de la [cabecera o head][HEAD] del documento.

El [atributo rel][rel] establece la relación que hay con el documento destino, mientras que el atributo rev define la relación del documento destino con el documento actual. Es decir, la relación inversa.

Por otro lado el [atributo href][Href] es el que contiene la URI del documento destino.

Uno de los usos del [elemento link][LINK] es para establecer las relaciones de documentos que formen una publicación completa. De esta forma manejando los valores del atributo rel podemos establecer dónde está el índice, cuál es artículo anterior y cual es el próximo artículo.

~~~html
<link rel="index" href="indice.html">
<link rel="prev" href="c2.html">
<link rel="next" href="c4.html">
~~~

Aunque los enlaces de tipo [link][LINK] no son renderizados por el navegador pueden ser interpretados para añadir la información al navegador.

## Tipos de relaciones entre documentos

Según el lenguaje [HTML][ManualHTML] se definen los siguientes tipos de relaciones entre documentos. Estos valore pueden ser utilizados por los atributos [rel][rel] y rev.

*  **alternate,** indica una versión alternativa del documento.
*  **stylesheet,** hace referencia a una hoja de estilo externa para el documento.
*  **start**, primer documento de un conjunto de documento.
*  **next**, siguiente documento al actual.
*  **prev**, documento anterior al actual.
*  **contents**, documento que contiene la tabla de contenidos.
*  **index**, documento que contiene el índice.
*  **glossary**, documento que contiene el glosario.
*  **copyright**, información del copyright del documento actual.
*  **chapter,** documento que actúa como capítulo en una colección de documentos.
*  **section,** documento que actúa como sección en un conjunto de documentos.
*  **subsection,** documento que actúa como subsección en un conjunto de documentos.
*  **appendix**, documento que actúa como apéndice de una colección de documentos.
*  **help,** documento de ayuda.
*  **bookmark,** para marcar un punto concreto del documento.

## Enlaces en HTLM para hojas de estilo

En [elemento link][LINK] nos servirá para cargar las hojas de estilo del documento [HTML][ManualHTML]. Ya veremos más adelante qué son, pero digamos que nos sirven para darle estilo gráfico a la página.

Las hojas de estilos se almacenan en ficheros .css. Así que podemos utilizar el [elemento link][LINK] para enlazarlas indicando que **su tipo es “text/css"**, mediante el [atributo type][Type].

~~~html
<link href="style.css" rel="style" type="text/css"/>
~~~

[ManualHTML]: http://www.manualweb.net/html/
[A]: http://www.w3api.com/HTML/a
[Href]: http://www.w3api.com/HTML/a/href
[Target]: http://www.w3api.com/HTML/a/target
[Title]: http://www.w3api.com/HTML/title
[Name]: http://www.w3api.com/HTML/a
[LINK]: http://www.w3api.com/HTML/link
[HEAD]: http://www.w3api.com/HTML/head
[rel]: http://www.w3api.com/HTML/link/rel
[Type]: http://www.w3api.com/HTML/link/type
[FRAMESET]: http://w3api.com/HTML/frameset
[FRAME]: http://w3api.com/HTML/frame

