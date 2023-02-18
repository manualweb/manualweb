---
title: API Fullscreen
permalink: /html5/fullscreen-api/
---

El **API Fullscreen** nos permite que un elemento del DOM (y sus descendientes) puedan ser representados a pantalla completa. Lo que permite es visualizar la página eliminando cualquier elemento del navegador (menús, pestañas,...). Con ello podremos poner desde el propio documento a pantalla completa, elementos de vídeo, imágenes,...

## Métodos Fullscreen API
Lo primero que tenemos que conocer son los métodos que nos permite manejar el **API Fullscreen**. Los métodos que nos permiten visualizar un elemento a pantalla completa son:

* Document.exitFullscreen()
* Element.requestFullscreen()

### requestFullscreen()
Solicita al agente de usuario (que normalmente será el navegador) el poder visualizar un elemento a pantalla completa. El método `Element.requestFullscreen` devolverá una promesa o `Promise` que será resuelta una vez que se activa el modo pantalla completa.


### exitFullscreen()
Solicita al agente de usuario el salir del modo de visualización a pantalla completa para volver a una visualización normal. El método `Document.exitFullscreen` devolverá una promesa o `Promise` que será resuelta una vez que el modo pantalla completa se ha deshabilitado.

### Poner el documento a pantalla completa
Una vez que conocemos los métodos que nos permiten manejar la pantalla completa del **API Fullscreen** vamos a ver cómo podemos poner un documento y un elemento a pantalla completa.

Lo que vamos a crear es una función sobre la que apoyarnos y lanzar la pantalla compelta:

~~~javascript
function getFullscreen(element){
  if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
}
~~~

Vemos que lo primero que hacemos es comprobar si el elemento sobre el que queremos poner la pantalla completa soporta esta capacidad. Esta información nos la da la propiedd `requestFullscreen`. En el caso de que si que se soporte nos valdrá con invocar al método `requestFullscreen` sobre el elemento. En ste caso nos apoyamos en los hacks de los diferentes navegadores.

Ahora simplemente tendremos que llamar a nuestro método `getFullscreen` pasándole el elemento que representa el documento completo `document.documentElement`.

~~~javascript
getFullscreen(document.documentElement);
~~~

### Elemento en pantalla completa
Ahora que hemos visto cómo poner el documento a pantalla completa, vamos a pasar a realizar la misma acción con un elemento. En este caso nos vamos a apoyar en un elemento vídeo para enseñar cómo podemos poner un elemento en pantalla completa. Lo primero que haremos será crear el elemento vídeo en nuestra página:

~~~html
<video id="mivideo" src="ejemplo-video.ogv" controls>
  Tu navegador no soporta el elemento <code>video</code>.
</video>
~~~

Lo siguiente que haremos será invocar al método `getFullscreen` que hemos definido. Pero en este caso llamaremos al elemento vídeo. Para poder obtener el elemento vídeo tendremos que utilizar el método `getElementById`.

~~~javascript
getFullscreen(document.getElementById("mivideo"));
~~~

### Salir de la pantalla completa
Para poder codificar el salir de una pantalla completa debería de bastar con utilizar el método `exitFullscreen`, pero hay que tener en cuenta los diferentes navegadores. Es por ello que es buena idea tener un método que valide los diferentes métodos.

~~~javascript
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
~~~

Una vez que tengamos este método simplemente tendremos que invocarlo para salir de la pantalla completa.

~~~javascript
exitFullscreen();
~~~

## Propiedades Fullscreen API
Para poder manejar el **API Fullscreen** disponemos de dos propiedades:

* DocumentOrShadowRoot.fullscreenElement
* Document.fullscreenEnabled

### fullscreenElement
La propiedad `fullscreenElement` nos indica qué elemento del DOM o del "shadow DOM" está siendo mostrado en pantalla completa.

### fullscreenEnabled
Mediante la propiedad `fullscreenEnabled` nos indica si podemos activar el modo de pantalla completa, lo cual nos devolvería el valor `true` o por si el contrario no está disponible el modo de pantalla completa. En este segundo caso el valor de la propiedad será `false`.

### Saber si la pantalla completa está activa
Jugando con las propiedades `fullscreenEnabled` y `fullscreenElement` podemos comprobar si tenemos al agente de usuario mostrándose en pantalla completa y además podemos saber qué elemento es el que se está mostrando a pantalla completa.

~~~javascript
var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;

console.log('enabled:' + fullscreenEnabled);
console.log('element:' + fullscreenElement);
~~~

De igual manera que en los casos anteriores tenemos que apoyarnos en los hacks que tienen los diferentes navegadores para poder evaluar el contenido de las propiedades.

## Eventos Fullscreen API
Junto a las propiedades y método del Fullscreen API tendremos la gestión de eventos. Esta gestión de eventos nos ayudará a saber cuando ha existido un cambio hacía o desde la pantalla completa o bien cuándo se ha producido un error en la gestión de la pantalla completa.

Los eventos que podemos manejar son:

* Document.onfullscreenchange
* Document.onfullscreenerror
* Element.onfullscreenchange
* Element.onfullscreenerror

Podemos ver que los eventos pueden ser aplicados a un elemento en completo o a todo el documento. Todo dependiendo sobre qué estemos gestionando la pantalla completa.

### onfullscreenchange
Un evento es enviado bien a un documento (o `Document`) o a un elemento (`Element`), dependiendo de lo que estemos intentando mostrar a pantalla completa, ya sea un elemento en concreto o tdoda la página o documento.

### onfullscreenerror
Un evento de error es enviado al docunento o elemento que intentó mostrarse en pantalla completa o salir de ella.

### Controlar el paso a pantalla completa
Ya hemos visto como podemos ayudar al usuario a poner un documento o elementos a pantalla completa. Pero, ¿qué sucede si es el propio usuario el que pone el agente de usuario a pantalla completa?. ¿Cómo podemos aprovecharnos de saber que está visualizando el contenido de esa forma?

En este caso lo que tenemos que hacer es controlar el evento `onfullscreenchange`. Para ello vamos a registrar un listener que lo controle.

~~~javascript
document.addEventListener("fullscreenchange",cambioPantalla,false);
document.addEventListener("webkitfullscreenchange",cambioPantalla,false);
document.addEventListener("mozfullscreenchange",cambioPantalla,false);
document.addEventListener("MSFullscreenchange",cambioPantalla,false);
~~~

Hemos puesto todos los hacks del evento `onfullscreenchange` y les hemos enviado a la función `cambioPantalla`.

~~~javascript
function cambioPantalla(event){
  console.log("Cambio en Pantalla Completa " + Date.now());
}
~~~

## Diccionarios Fullscreen API
El API Fullscreenc cuenta con un diccionario `FullscreenOptions`. Este diccionario se le puede enviar al método `Element.requestFullscreen` para especificar propiedades adicionales.

## Soporte Multi-Navegador del Fullscreen API
En este artículo hemos visto como manejar los métodos que define el estándar del **API Fullscreen**, si bien el soporte puede variar por cada uno de los navegadores web y es por ello que tendremos que apoyarnos en el hack de cada navegador.

De est forma tendrás que tener en cuenta los siguientes:

* .mozRequestFullScreen()
* .webkitRequestFullscreen()
* .msRequestFullscreen();

## Más ejemplos del API Fullscreen
Puedes revisar [más artículos sobre el **Fullscreen API** en Línea de Código][FullscreenAPIenLDC].

[FullscreenAPIenLDC]: https://lineadecodigo.com/tag/html5-fullscreen/
