---
title: Vídeo en HTML5
permalink: /html5/video-html5/
---
## Introducción al vídeo en HTML5

Con los aumentos de los anchos de vanda el uso del vídeo en la web cada vez se extiende más y hoy en día es el contenido más consumido en las páignas web.

Atrás quedaron los días en los que no existían estándares para poder reproducir vídeos por Internet y en los cuales tecnologías como **Flash** o **Silverlight** disponian de este privilegio. Si bien acarreaban otros problemas de portabilidad, seguridad y al fin y al cabo poca integración con los estándares [HTML][HTML] y [CSS][CSS].

A partir de [HTML5][HTML5] se estándariza el uso del vídeo mediante el elemento `video` del lenguaje. De igual manera aparecn un conjunto de APIs que nos permiten interactuar con el contenido que muestra el vídeo.

Si queremos incluir un vídeo en nuestra página [HTML5][HTML5] simplemente tendremos que escribir lo siguiente:

~~~html
<video src="mivideo.webm" controls>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

Dentro del código tenemos que conocer el significado de sus dos atributos. Por un lado el atributo `src` nos sirve para indicar el nombre del fichero que contiene el vídeo que queremos reproducir.

Mientras que por el otro el atributo `controls` permite que se muestre un panel de control de reprodución del vídeo, para que se pueda iniciar, parar, adelantar, cambiar el sonido,...

## Atributos del vídeo
Para poder manipular el vídeo, la forma en la que se muestra,... el elemento `video` de [HTML5][HTML5] nos ofrece diferentes atributos. Revisemos para que sirven.

### Fichero del vídeo
Para poder indicar dónde está el fichero que contiene el vídeo deberemos de utilizar el atributo `src`. Este atributo recibirá como valor el nombre del fichero.

~~~html
<video src="mivideo.webm" controls>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

### Ancho y alto del vídeo
Aunque como todo elemento [HTML][HTML] podemos modificar la apariencia mediante el lenguaje [CSS][CSS], el elemento vídeo nos ofrece los atributos `widht` y `height` para poder definir el ancho y alto del vídeo respetivamente.

~~~html
<video src="mivideo.webm" width="600" height="400" controls>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

### Inicio automático del vídeo
Si queremos que el vídeo se inicie de forma automática una vez que se carge el documento [HTML5][HTML5] deberemos de utilizar el atributo `autoplay`.

~~~html
<video src="mivideo.webm" autoplay controls>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

### Vídeo en bucle
En el caso de que queramos que el vídeo se reproduzca en bulce una y otra vez usaremos el atributo `loop`.

~~~html
<video src="mivideo.webm" autoplay loop>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

### Vídeo sin sonido
Otra opción es que el vídeo se ejecute sin sonido. Esto lo conseguimos apoyándonos en el atributo `muted`.

~~~html
<video src="mivideo.webm" autoplay muted>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

### Cartel del vídeo
Antes de que se inicie el vídeo podemos poner una imagen de muestra (o cartel). Para ello vamos a utilizar el atributo `poster`. El atributo `poster` recibirá una URL con el nombre del fichero que queremos utilizar como cartel del vídeo.

~~~html
<video src="mivideo.webm" controls poster="mivideo.png">
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

Si hemos utilizado el atributo `autoplay` no se verá el cartel del vídeo.

### Precargar el vídeo
Los vídeos suelen ser ficheros que tienen un tamño considerable y es por ello que el tiempo de descarga en la web suele ser superior que al contenido textual o gráfico. Es por ello que se puede dar el caso de que se haya cargado el contenido de un documento, pero no el vídeo que incluye.

Para paliar este tema del tamaño podemos precargar el vídeo. En este caso vamos a utilizar el atributo `preload`, el cual puede tener tres valores:

* **'none'**, no hace buffering del vídeo.
* **'auto'**, hace buffering del vídeo.
* **'metadata'**, hace buffering, pero solo de la metainformación del vídeo.

~~~html
<video src="mivideo.webm" controls preload="auto">
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~





## Formatos de Vídeo


Cada uno de los navegadores es capaz de rederizar un formato de vídeo diferente.

### Contenedores de formato
Formatos como mp3, mp4 o WebM son conocidos como **contenedores de formato**, ya que contienen diferentes partes que permiten que se componga un vídeo o canción.

#### WebM
 El contenedor **WebM** utiliza formatos ***Ogg Vorbis*** para el audio y ***VP8/VP9*** para el vídeo.

#### MPEG 4
 El contenedor **MP4** utiliza formato de audio ***mp3*** o ***aac*** y un formato de vídeo ***H.264***.

#### Ogg
El contenedor **Ogg** utiliza formatos ***Ogg Vorbis*** para el audio y ***Ogg Theora*** para el vídeo.

||Chrome|Firefox|Internet Explorer|Opera|Safari|
|--|--|--|--|--|--|
|WebM|6.0|4.0|9.0|10.60|3.1|
|MPEG 4|||x|x||
|Ogg|x|x||||

Estos **contenedores de formato** lo que hacen es comprimir el vídeo y audio en ficheros manejables.

Los navegadores utilizan los **codecs** para poder descomprimir el contenido de los contenedores y poder reproducir el vídeo y audio. Si el navegador no tiene un **codec** que soporte el formato, no se podrá reproducir el vídeo y/o audio.

## Múltiples orígenes y formatos del vídeo

Esta situación que nos obliga a tener diferentes contenedores de formato atendiendo al navegador hace que nuestros documentos [HTML5][HTML5] tengan que permitir cargar varios ficheros en varios formatos.

Esto lo coseguimos mediante el elemento `source`. El elemento `source` es un elemento anidado al elemento `video` y nos sirve para enlazar diferentes ficheros de vídeo en formatos diferentes.

La estructura del elemento `source` es la siguiente:

~~~html
<video controls>
  <source src="mivideo.mp4" type="video/mp4"/>
  <source src="mivideo.webm" type="video/webm"/>
  <p>Su navegador no soporta vídeos HTML5.</p>
</video>
~~~

A la hora de renderizar el vídeo, el navegador irá recorriendo los diferentes formatos hasta que encuentre uno que pueda reproducir.


[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[CSS]: http://www.manualweb.net/css/
