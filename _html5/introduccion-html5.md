---
title: Introducción a HTML5
permalink: /html5/introduccion-html5/
---

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
