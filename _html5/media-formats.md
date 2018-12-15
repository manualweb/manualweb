

# Media Formats

Los elementos `video` y `audio` sirven para reproducir ficheros de audio y de vídeo de forma estándar y sin la necesidad de utilizar plugins de reproducción.


Los formatos de video y audio consisten en un contenedor dentro del cual encontramos los streams de datos a repoducir.

El contenedor puede albergar ficheros de video, audio, datos y subtítulos. Junto con el vídeo y el audio nos encontramos los **codecs**.

Un codec es un algoritmo de compresión que nos ayuda a descomprimir y comprimir los ficheros de media.


Cada navegador tiene capacidad para reproducir un tipo u otro de formatos de media. Algunos de estos formatos son estándares y otros son propietarios.



https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats


# Formatos

## WebM
El formato WebM es una versión restringida del formato de contenedor **Matroska**. El cual utiliza el codec de vídeo **VP8** o **VP9** y el codec de audio **Vorbis** o **Opus**.

Los mime types para el formato **WebM** son:

* *video/webm*, para los ficheros de vídeo (y audio) de WebM.
* *audio/webm*, para los ficheros de audio de WebM.

## Ogg Theora Vorbis
Es un contenedor de media **Ogg**, el cual contiene un codec de vídeo **Theora** y un codec de audio **Vorbis**. Este contenedor está soportado por Firefox, Chrome y Opera. En algunos casos dentro de Safari (fuera de iOS).

El formato **WebM** tiene mayor compresión que otros formatos como **Ogg** y es por ello que es preferido por los desarrolladores. Si bien se suele utilizar **Ogg** para navegegadores antiguos que no soportan **WebM**.

Los media types para un contenedor **Ogg** son:

* *audio/ogg*, para ficheros de audio.
* *video/ogg*, para ficheros de vídeo (y posiblemente audio).
* *application/ogg*, se utiliza en el caso de que no se sepa el contenido del contenedor Ogg.

## Ogg Opus
En este caso tenemos el contenedor **Ogg** utilizando el codec de audio **Opus**.

El media type para el contenedor **Ogg Opus** es *audio/ogg; codecs=opus**.

## Ogg FLAC
Es un contenedor **Ogg** que utiliza un codec de audio **FLAC**.

## MP4 H.264 (AAC o MP3)
El contenedor **MP4** está formato por un codec de vídeo **H.264** y un codec de audio **AAC**.

Este formato es soportado por Internet Explorer, Safari y Chrome.

Podemos encontar el contenedor **MP4** con un codec de audio **MP3**. Si bien en este caso este codec solo es soportado por Internet Explorer y Chrome.

Los formatos *mpeg** están patentados y no tienen licencias gratuitas para su distribución.

## MP4 FLAC
Es un contenedor **MP4** pero que tiene un codec de audio **FLAC**.

# Contenedores de Audio

## MP3
Es un formato de audio. Su media type es *audio/mpeg*. Necesita de un decoder mp3 para que pueda ser reproducido.

## WAVE PCM
El formato de contenedor **Wave** tiene el codec de audio **PCM**. Es el conocido como *wave codec 1*. Las extensiones de estos ficheros son *.wav*.

Los mime types reconocidos para el formato wave son:

* audio/wave
* audio/wav
* audio/x-wav
* audio/x-pn-wav

## FLAC
El contenedor de formato **FLAC** está compuesto por el codec de audio **FLAC**. Suelen tener la extensión *.flac*.

Los mime types para el formato **FLAC** son:

* audio/flac
* audio/x-flac


# Compatibilidad Codecs
Como hemos visto la compatibilidad de los codec varia dependiendo del navegador. Es por ello que puedes comprobar la compatibilidad de un determinado codec con un navegador en [Supported Media Formats de MDN][MediaFormatCompatibility].

[MediaFormatCompatibility]: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility
