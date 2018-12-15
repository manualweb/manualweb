---
title: Audio en HTML5
permalink: /html5/audio-html5/
---
# Audio en HTML5

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content


# Introducción al Audio en HTML5

Desde que aparecieron las primeras páginas web, desde las primeras del todo, la gente siempre quiso meter música de fondo o reproducir música en ellas.

Al principio eran los midis, cientos de canciones pasadas a un sintetizador sonaban con mayor o menor calidad en las webs, luego se fue evolucionando y aparecieron los mp3. Los mp3 ya eran ficheros de audio con música y sonido. Mucho más avanzados, aunque propietarios. Y estos seguían sonando de fondo en las webs o se ponían como ejemplos de reproducción en otras.

El problema que tuvo el audio dentro del lenguaje [HTML][HTML] es que nunca existió una forma estándar de insertarlo en nuestras webs. Las soluciones pasaban por [cargar explicitamente un reproductor específico mediante un elemento OBJECT o EMBED][ReproductorEmbed]. En estos casos había que hacer encajes de bolillo para poder cargar un reproductor u otro (***Quick Time, Windows Media Player, Real Player,...***) dependiendo del formato. Ya que estos reproductores eran quien tenían los *codecs* de carga de los audios.

Otra de las alternativas que apareció en algunos navegadores fue la creación de [atributos no estándares como el bgsound][bgsound]. Mediante estos atributos podíamos cargar sonido de fondo. Pero los procesos de estandarización y la adecuación de los navegadores a dichos procesos acabaron por eliminar dicho atributo.

[HTML5][HTML5] viene a ayudarnos con este problema ya que pasa a estandarizar la forma de insertar audio en las páginas web. Y lo resuelve de una forma sencilla mediante el elemento `audio` así como la estandarización de los contenedores de formatos multimedia.

Y es que si queremos poner audio en nuestra página web nos bastará con poner el siguiente código:

~~~html
<audio src=”micancion.mp3”></audio>
~~~


## Atributos del elemnto AUDIO

---> EL RESTO DE ATRIBUTOS SON LOS MISMOS. ¿TIENE SENTIDO PONERLOS JUNTOS O SEPARADOS?
---> HAY QUE PONER UNA SECCIÓN PARA AÑADIR EL MANEJO CON JAVASCRIPT DEL ELEMENTO


El elemento `audio` **no tiene una representación visual**, es por ello que no cuenta con atributos como `width` y `height`. O atributos como `poster` que maneja el elemento `video` para poner una imagen relativa a un vídeo.

### Inicio automático del audio
Si queremos que el audio se inicie de forma autoática cuando se carge la página utilizaremos el atributo `autoplay`.

~~~html
<audio src=”micancion.mp3” autoplay loop>
  <p>Su navegador no soporta audios HTML5.</p>
</audio>
~~~

### Audio en bucle
Si queremos que el audio se esté reproduciendo en bucle una y otra vez usaremos el atributo `loop`.

~~~html
<audio src=”micancion.mp3” autoplay loop>
  <p>Su navegador no soporta audios HTML5.</p>
</audio>
~~~

### Precargar el audio

Un efecto que puede suceder en la carga de una página web es que se haya cargado el contenido de la página pero no se haya cargado el audio y al intentar cargar el audio, este no se reproduzca.

Para paliarlo podemos utilizar el atributo `preload`, el cual puede contener tres valores.

* **'none'**, no hace buffering del audio.
* **'auto'**, hace buffering del audio.
* **'metadata'**, hace buffering, pero solo de la metainformación del audio.

~~~html
<audio src=”micancion.mp3” preload="auto">
  <p>Su navegador no soporta audios HTML5.</p>
</audio>
~~~


# Atributos del elemento Audio
Si cargamos el elemento AUDIO sin más lo que obtendremos será


* loop
* autoplay
* controls
* autobuffering


# Codecs del Audio


[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[ReproductorEmbed]: http://lineadecodigo.com/html/embed-musica-de-fondo-en-tu-pagina-web/
[bgsound]: http://lineadecodigo.com/html/bgsound-musica-de-fondo-en-tu-pagina-web/
