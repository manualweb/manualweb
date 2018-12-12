---
title: API Fullscreen
permalink: /html5/fullscreen/
---

El **API Fullscreen** nos permite que un elemento del DOM (y sus descendientes) puedan ser representados a pantalla completa. Lo que permite es visualizar la página eliminando cualquier elemento del navegador (menús, pestañas,...).

## Métodos Fullscreen API
Los métodos que nos permiten visualizar un elemento a pantalla completa son:

* Document.exitFullscreen()
* Element.requestFullscreen()

### requestFullscreen()
Solicita al agente de usuario (que normalmente será el navegador) el poder visualizar un elemento a pantalla completa. El método `Element.requestFullscreen` devolverá una promesa o `Promise` que será resuelta una vez que se activa el modo pantalla completa.


### exitFullscreen()
Solicita al agente de usuario el salir del modo de visualización a pantalla completa para volver a una visualización normal. El méotdo `Document.exitFullscreen` devolverá una promesa o `Promise` que será resuelta una vez que el modo pantalla completa se ha deshabilitado.

## Propiedades Fullscreen API
Para poder manejar el **API Fullscreen** disponemos de dos propiedades:

* DocumentOrShadowRoot.fullscreenElement
* Document.fullscreenEnabled

### fullscreenElement
La propiedad `fullscreenElement` nos indica qué elemento del DOM o del "shadow DOM" está siendo mostrado en pantalla completa.

### fullscreenEnabled
Mediante la propiedad `fullscreenEnabled` nos indica si podemos activar el modo de pantalla completa, lo cual nos devolvería el valor `true` o por si el contrario no está disponible el modo de pantalla completa. En este segundo caso el valor de la propiedad será `false`.

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


## Diccionarios Fullscreen API
El API Fullscreenc cuenta con un diccionario `FullscreenOptions`. Este diccionario se le puede enviar al método `Element.requestFullscreen` para especificar propiedades adicionales.

## Soporte Multi-Navegador del Fullscreen API
En este artículo hemos visto como manejar los métodos que define el estándar de Fullscreen API, si bien el soporte puede variar por cada uno de los navegadores web y es por ello que tendremos que apoyarnos en el hack de cada navegador.

De est forma tendrás que tener en cuenta los siguientes:

* .mozRequestFullScreen()
* .webkitRequestFullscreen()
* .msRequestFullscreen();


## Poner el documento a pantalla completa
Una vez que conocemos los atributos y métodos que nos permiten manejar la pantalla completa del **Fullscreen API** vamos a ver cómo podemos poner un docunento y un elemento a pantalla completa.

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



### Documento en pantalla completa


### Elemento en pantalla completa


### Más ejemplos
Puedes revisar [más artículos sobre el **Fullscreen API** en Línea de Código][FullscreenAPIenLDC].






## Ejemplos
1. Mostrar página a pantalla completa
2. Mostrar vídeo a pantalla completa
3. Mostrar imagen a pantalla completa
4. Activar el modo de pantalla mediante el Enter


[FullscreenAPIenLDC]: http://lineadecodigo.com/tag/html5-fullscreen-api/
