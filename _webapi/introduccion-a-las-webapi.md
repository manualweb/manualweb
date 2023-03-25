---
				title: Introducción a las WebAPI
				permalink: /webapi/introduccion-a-las-webapi/
				excerpt: "dd2b460a-4147-40de-ad86-f780433ee4f7"
				tags: []
				image:
  					path: dd2b460a-4147-40de-ad86-f780433ee4f7
				---
			
## ¿Qué es una API?


Antes de realizar una introducción a las **WebAPI** vamos a comentar el concepto API (Applications Program Interface). Y es que una API no deja de ser un interface que pueda establecer un programa ofreciendo una funcionalidad para que este sea compartido y consumido por un tercero.


Dependiendo de la tecnología que utilicemos este API puede ser una rutina Cobol en mainframe mainframe, una clase Java de una librería o un servicio REST ofrecido por un servicio SaaS.


No dejes de leer el artículo sobre [¿qué es una API?](https://arquitectoit.com/api-management/que-es-una-api/) dentro de [Arquitecto IT](https://arquitectoit.com/) para poder entender un poco más de estos conceptos básicos.


## ¿Qué son las WebAPI?


Si pensamos en el mundo web vemos que tenemos, principalmente, 3 elementos sobre los que gira todo el desarrollo web. El primero es [**HTML**](https://www.manualweb.net/html/)[ (HyperText MarkUp Language)](https://www.manualweb.net/html/) que son las especificaciones que nos permiten construir la estructura de elementos de la página. Es decir, definir una cabecera, un párrafo, una lista de elementos o una imagen.


El segundo sería [**CSS (Cascade Style Sheet)**](https://www.manualweb.net/css/) u hojas de estilo, mediante las cuales podemos definir la representación visual y colocación de los elementos de la estructura.


Y el tercero sería [**JavaScript**](https://www.manualweb.net/javascript/), el cual sería el lenguaje de programación que nos permite dar de dinamismo al desarrollo web modificando el comportamiento de los elementos de la página, así como los datos de la misma.


Lo importante es que estos tres elementos que conforman una página web se ejecutan en lo que denominaríamos **agente de usuario o navegador.** Y es dentro de ese navegador donde se nos ofrecen un conjunto de **APIs, APIs de Navegador o WebAPI**.


Las **WebAPI nos ofrecen tanto datos del navegador como del entorno/dispositivo en el que se ejecuta**. Así, mediante estas **WebAPI**, podemos acceder a información del _historial de navegación del usuario_, la _geolocalización en la cual se está ejecutando la aplicación web_ o saber _si el dispositivo está siendo utilizado de forma vertical u horizontal_, entre muchas otras cosas


Si bien el API más famoso y base de la manipulación de elementos es el [**DOM (Document Object Model)**](https://www.manualweb.net/dom/) el cual nos permite gestionar los elementos que componen nuestra página web.


## ¿Quién gestiona las WebAPI?


La mayoría de las WebAPI nacen de la mano del estándar [HTML](https://www.manualweb.net/html/) y las podemos consultar en su documento [HTML Live Standard](https://html.spec.whatwg.org/).


Si bien existen otras WebAPI que son gestionadas mediante otros estándares del [WHATWG (Web HyperText Application Technology Working Group)](https://whatwg.org/). Entre estas podemos encontrar el [DOM](https://dom.spec.whatwg.org/), la [Consola de los navegadores](https://console.spec.whatwg.org/) mediante el interface `console` o el [API de Notificaciones](https://notifications.spec.whatwg.org/), entre muchas otras.


O bien por la [W3C](https://www.w3.org/) que gestiona algunas WebAPI como pueden ser las [APIs de Geolocalización](https://w3c.github.io/geolocation-api/) o [Service Workers](https://github.com/w3c/ServiceWorker). 


La verdad que merece la pena dar una vuelta a la web del [WHATWG (Web HyperText Application Technology Working Group)](https://whatwg.org/) para revisar todo el contenido que trabajan.

