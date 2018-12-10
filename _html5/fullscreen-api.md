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



## Ejemplos
1. Mostrar página a pantalla completa
2. Mostrar vídeo a pantalla completa
3. Mostrar imagen a pantalla completa
