---
title: Imágenes HTML
permalink: /html/imagenes-html/
---

Si solo insertamos texto en nuestras páginas webs, estas quedarán muy sencillas y poco lucidas. Es por ello que en [HTML][ManualHTML] tenemos la capacidad de insertar imágenes.

Las imágenes podrán ser elementos representativos de página web o elementos decorativos. Si bien, en el caso de ser elementos decorativos deberíamos de utilizar [CSS][ManualCSS] para insertarlos en nuestra página web.

El uso de imágenes dentro de una página web tiene que hacerse con cautela, ya que cada imagen que pongamos en nuestra web incrementará el tamaño (peso) de la página. Por lo cual se verá afectado el tiempo de descarga de la página.

## Insertar una imagen: El elemento img

Para insertar una imagen en HTML tenemos el [elemento img][IMG], cuya sintaxis básica es:

~~~html
<img src="nombreimagen.jpg" alt="" />
~~~

Como podemos comprobar, el [elemento img][IMG] es un elemento sencillo, con lo cual no tiene elemento de cierre y termina con la barra invertida.

El atributo principal del [elemento img][IMG] es [src][Src] nos indica la ruta de la imagen que queremos cargar. Así, si la imagen se encuentra en la misma ruta que nuestra página web pondremos:

~~~html
<img src="foto.jpg" alt="" />
~~~

En el caso de que la imagen esté en otro directorio, por ejemplo en *“/multimedia/imagenes”* pondremos lo siguiente:

~~~html
<img src="/multimedia/imagenes/foto.jpg" alt="" />
~~~

Incluso la imagen puede residir en otro servidor. En ese caso la URL que contenga la imagen deberá de indicar el protocolo y el servidor que alberga la imagen. Por ejemplo podremos tener el siguiente código:

~~~html
<img src="http://lineadecodigo.com/imagenes/logo.jpg" alt="" />
~~~

## Dimensiones de la imagen: width y height

Si no indicamos más sobre el [elemento img][IMG], la imagen que le hayamos pasado en su campo src se cargará con su tamaño original.

Si bien disponemos de los atributos [width][Width] para el ancho de la imagen y [height][Height] para el alto de la imagen. De esta forma, si queremos que nuestra imagen se vea en 100x100 pixels, podemos insertar el siguiente código:

~~~html
<img src="”foto.jpg”" alt="" width="”100”" height="”100”" />
~~~

El tamaño de la imagen puede ser especificado en pixels o en porcentajes. En caso de omitir la unidad se utilizará el pixel.

~~~html
<img src="foto.jpg" alt="" width="100" height="100" />
<img src="foto.jpg" alt="" width="100px" height="100px" />
<img src="foto.jpg" alt="" width="50%" height="50%" />
~~~

Por cuestiones de rendimiento en la carga de las webs siempre es bueno el indicar sus valores [width][Width] y [height][Height].

Los valores del alto y el ancho que indiquemos en la [elemento img][IMG] no tienen porqué coincidir con el tamaño real de la imagen. Por ejemplo, reduciendo los valores de estos atributos podremos conseguir una previsualización de la misma, lo que se conoce como thumbnail.

## Texto alternativo de la imagen: el atributo alt y longdesc

Sobre una imagen podemos indicar un texto alternativo o descriptivo de la misma. Para ello tenemos el [atributo alt][Alt].

~~~html
<img src="foto.jpg" alt="texto" />
~~~

Pero, ¿por qué quiero poner un texto, cuando realmente es una imagen gráfica?

Piensa que esto es útil en varios casos. Por ejemplo, si por algún problema técnico no se puede cargar la imagen, el navegador mostrará en su espacio el texto alternativo, lo cual dará al usuario una idea de lo que iba en ese sitio.

Otra cosa útil es para cuando nuestra página sea utilizada por personas discapacitadas con problemas de visibilidad. En este caso estas personas disponen de herramientas que le van leyendo la página y cuando llegan a una imagen leen el contenido que encuentran en el [atributo alt][Alt].

Es por ello que el texto alternativo que insertemos en la imagen debe de ser bastante descriptivo de la misma. En algunos casos se llega hasta indicar el tamaño de la imagen.

~~~html
<img src="foto.jpg" alt="Fotografía" />
~~~

## Tipos de formatos de imágenes

Hemos aprendido mucho de cómo podemos insertar nuestras imágenes en el documento [HTML][ManualHTML]. Pero a la hora de insertar imágenes, qué tipo de imágenes puedo insertar en el documento [HTML][ManualHTML].

En este punto tenemos un pequeño problema y es que los estándares de [HTML][ManualHTML] no definen los tipos de formato de imagen que se pueden ver en un navegador web.

Los formatos de imágenes más comúnmente aceptados son:

* **JPEG**, son imágenes digitales comprimidas con pérdida de información. Pero que nos permiten tener imágenes digitales que ocupen poco espacio.
* **GIF**, es un formato para imágenes de mapas de bits las cuales soportan 8 bits por pixel. El formato GIF soporta imágenes animadas.
* **PNG**, es un formato de imagen en mapa de bits que emplea compresión de datos sin pérdida de información. No requieren de licencia de patente. Es un formato creado para utilizar imágenes en Internet con un tamaño adecuado.

Otros formatos que también son aceptados:

* **APNG**, son imágenes PNG animadas. Intenta evolucionar los gráficos animados en GIF.
* **SVG**, gráficos vectoriales escalables. Son gráficos especificados mediante texto, lo cual hace que sean interpretables por los dispositivos y puedan escalar a través de diferentes resoluciones.
* **BMP**, son imágenes de mapas de bits. Se pueden encontrar con extensión .bmp y .dib
* **BMP ICO y PNG ICO**, formato para representar iconos en el sistema operativo Windows. Los iconos suelen contener diferentes tamaños y densidad de pixels. De esta forma pueden ser escalados.

 [ManualHTML]: http://www.manualweb.net/html/
 [ManualCSS]: http://www.manualweb.net/css/
 [IMG]: http://w3api.com/HTML/img
 [Src]: http://www.w3api.com/HTML/img/src
 [Width]: http://www.w3api.com/HTML/img/width
 [Height]: http://www.w3api.com/HTML/img/height
 [Alt]: http://www.w3api.com/HTML/img/alt
