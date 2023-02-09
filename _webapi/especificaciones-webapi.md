---
title: Especificaciones WebAPI
permalink: /webapi/especificaciones-webapi/
tags: []
---

Una vez que en la [introducción a las WebAPI](https://www.manualweb.net/webapi/introduccion-a-las-webapi/) hemos visto qué son este tipo de [APIs](https://arquitectoit.com/api-management/que-es-una-api/), ahora vamos a ver que tipos de especificaciones WebAPI existen y cómo se organizan.


Así podríamos decir que las especificaciones WebAPI se podrían agrupar de la siguientes forma:


## Manipular Documentos


En este caso hablamos de las APIs que nos permiten modificar el documento que representa una página web, de tal manera que podamos modificar su estructura y contenido.


Las WebAPI que podemos encontrar para **manipular documentos** son:

- [DOM (Document Object Model)](https://www.manualweb.net/dom/)
- HTMLDOM (HTML Document Object Model)
- CSSOM (CSS Object Model)
- Encoding API
- HTML Sanitizer API
- Intersection Observer API
- Page Visibility API
- Resize Observer API
- Trusted Types API

## Capacidades del Navegador


El agente de usuario o navegador en la que se ejecuta nuestra página puede ofrecer información interesante para nuestro desarrollo. Ya sea el concepto básico que es la Consola para poder mostrar información para la depuración del desarrollo o el acceso a los elementos del historial de navegación.


Las WebAPI que podemos encontrar para acceder a las **capacidades del navegador** son:

- Console API
- History API
- Clipboard API
- Content Index API
- Fullscreen API
- Payment Request API
- Performance API
- Prioritized Task Scheduling API
- Screen Orientation API
- Visual Viewport API
- Broadcast Channel API
- Channel Messaging API
- URL API

## Obtener Datos Servidor


Son APIs que permiten recuperar información de forma asíncrona y cargar esa información online sobre la estructura de la página. Esto ayuda a la creación de SPA (Single Page Application) basadas en patrones **AJAX (Asynchronous JavaScript and XML)**.


Las WebAPI que podemos encontrar para **obtener datos del servidor** son:

- XMLHttpRequest
- Fetch API
- Beacon API
- Compression Streams API
- Server-sent events
- Service Worker API
- Streams API

## Crear y Modificar Gráficos


En este caso las APIs están ligadas sobre el elemento [`canvas`](https://w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/) permitiendo crear escenas en 2D o 3D. Ya sea una escena 2d con círculos, rectángulos, degradados o filtros o bien una escena en 3D donde ya podamos incluir elementos de iluminación o texturas.


Las WebAPI que podemos encontrar para **crear y modificar gráficos** son:

- API Canvas
- WebGL
- CSS Painting API
- CSS Font Loading API
- Encrypted Media Extensions API
- EyeDropper API
- Geometry Interfaces
- Picture-in-Picture API
- Screen Capture API
- Web Animations API

## Gestionar Audio y Vídeo


Para poder interactuar con los elementos [`audio`](https://www.w3api.com/HTML/audio/) y [`video`](https://www.w3api.com/HTML/video/) de [HTML5](https://www.manualweb.net/html5/) tenemos un conjunto de APIs que nos permiten modificar las pistas, gestionar el inicio, parada, avance o retroceso del audio o hacer otras cosas como capturar la cámara web del dispositivo en el que se ejecute nuestra página.


Las WebAPI que tenemos para **gestionar audio y vídeo** son:

- HTMLMediaElement
- Web Audio API
- WebRTC
- Media Capabilities API
- Media Stream API
- Media Source API
- Media Session API
- MediaStream Recording API
- Web MIDI API

## **Control del Dispositivo**


Son aquellas que nos permite recuperar información relativa al dispositivo en el que se ejecuta el agente de usuario/navegador y la página web que hemos desarrollado. De esta manera podremos crear notificaciones o saber dónde está geolocalizado el dispositivo.


Las WebAPI que tenemos para **controlar el dispositivo** son:

- Geolocation API
- Vibration API
- Notifications API
- Battery Status API
- Device Orientation
- Gamepad API
- Sensor APIs
- Web Share API

## Interacción del Usuario


Algunas APIs nos permiten gestionar cómo el usuario interactua com muestra página y los elementos que contiene, si está utilizando un puntero o si selecciona parte del texto.


Las WebAPI que tenemos para gestionar la **interacción del usuario** son:

- UI Events API
- Touch events API
- Drag & Drop API
- Selection API

## Almacenamiento Datos


Son las APIs que permiten almacenar información en el lado del cliente y permitir, de esta manera, que la carga de información o persistencia de información en el cliente sea más sencillo.


Las WebAPI que tenemos para **gestionar el almacenamiento** de datos son:

- Storage API
- Storage Access API
- Web Storage API
- IndexedDB API
- File API
- File Systems Access API
- File and Directory Entries API

## Seguridad


Cada día se estandarizan más funcionalidades de seguridad sobre los navegadores, ya sean para ayudar en los procesos de autenticación, ya sean para gestionar el cifrado de los datos que almacenamos en ellos.


Las WebAPI que nos ayudan con las **capacidades de seguridad** son:

- Credential Management API
- Permissions API
- Web Authentication API

Puedes encontrar un [listado completo de WebAPI](https://developer.mozilla.org/es/docs/Web/API) en la Web de MDN (Mozilla Developer Network) una plataforma colaborativa en la que podemos encontrar mucha documentación sobre [HTML](https://www.manualweb.net/html/), [CSS](https://www.manualweb.net/css/), [Javascript](https://www.manualweb.net/javascript/) y [WebAPIs](https://www.manualweb.net/webapi/).

