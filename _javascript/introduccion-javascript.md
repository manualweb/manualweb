---
title: Introducción Javascript
permalink: /javascript/introduccion-javascript/
excerpt: "JavaScript es un lenguaje ligero interpretado o compilado. JavaScript funciona de manera dinámica, por lo que podemos ir modificando dinámicamente los objetos y clases, ejecutando código script nuevo"
tags: [javascript,nodejs,chrome,ecma,ecmascript,dom,rhino,chrome_v8,nashorn]
image:
	path: /img/covers/javascript-cover.jpg
---

## ¿Qué es Javascript?


[JavaScript](https://www.manualweb.net/javascript/) es un lenguaje **ligero interpretado o compilado**. [JavaScript](https://www.manualweb.net/javascript/) funciona de _manera dinámica_, por lo que podemos ir modificando dinámicamente los objetos y clases, ejecutando código script nuevo,…. Para la construcción de objetos, [JavaScript](https://www.manualweb.net/javascript/) funciona mediante _prototipos_. Además [JavaScript](https://www.manualweb.net/javascript/) es un lenguaje con _funciones de primera clase_.


> **Funciones de primera clase (First-Class Functions),** son los lenguajes de programación los cuales tratan a las funciones como cualquier otra variable. Es decir, puede ser pasada como argumento, retornada por otra función o puede ser asignada a una variable.


Se puede utilizar [JavaScript](https://www.manualweb.net/javascript/) de forma _procedimental_, _declarativa_ y _orientada a objetos_.


Aunque su mayor uso es dentro de los navegadores web, encontramos el uso de [JavaScript](https://www.manualweb.net/javascript/) en lenguajes como [NodeJS](https://lineadecodigo.com/categoria/nodejs/) o bases de datos como [MongoDB](https://www.manualweb.net/mongodb/).


[JavaScript](https://www.manualweb.net/javascript/) tiene una **librería core del lenguaje con las funcionalidades básicas** y luego se extiende mediante un conjunto de objetos, entre los que podemos encontrar: [`Array`](https://w3api.com/Javascript/Array/), [`Math`](https://w3api.com/Javascript/Math/), [`Date`](https://w3api.com/Javascript/Date/),…


El estándar **ECMA-262** o **ECMAScript** es el encargado de definir la estructura y evolución del lenguaje [JavaScript](https://www.manualweb.net/javascript/) en sus diferentes versiones.


## Javascript en el Cliente


[JavaScript](https://www.manualweb.net/javascript/) puede ejecutarse en el cliente o en el servidor. Si bien, [JavaScript](https://www.manualweb.net/javascript/) nace como **lenguaje del lado del cliente para los navegadores web**. [JavaScript](https://www.manualweb.net/javascript/) venía a complementar los lenguajes [HTML](https://www.manualweb.net/html/) y [CSS](https://www.manualweb.net/css/) que nos permiten construir páginas web estáticas. La idea de [JavaScript](https://www.manualweb.net/javascript/) es poder dar dinamismo en la ejecución de las páginas. Por ejemplo poder realizar cosas cuando se pulsa sobre un botón, cuando pasa cierto tiempo, cuando movemos el ratón,…


Cuando ejecutamos [JavaScript](https://www.manualweb.net/javascript/)  en el cliente, este se complementa con los objetos del [DOM](https://www.manualweb.net/dom/) o [Document Object Model](https://www.manualweb.net/dom/) que nos permiten manipular los elementos [HTML](https://www.manualweb.net/html/) del navegador: [formularios](https://www.manualweb.net/html/formularios-html/), [listas](https://www.manualweb.net/html/listas-html/), [enlaces](https://www.manualweb.net/html/enlaces-html/),… es decir, puede interactuar con ellos para recuperar sus valores o modificar sus atributos. De esta manera podemos ver qué valor ha introducido un usuario en un formulario, podemos cambiar el tamaño de una imagen o el color de un párrafo, e incluso se pueden crear o eliminar elementos existentes en nuestra página [HTML](https://www.manualweb.net/html/).


## Javascript en el Servidor


Una de los frameworks más exitosos de [JavaScript](https://www.manualweb.net/javascript/) en el lado del servidor es [NodeJS](https://lineadecodigo.com/categoria/nodejs/), el cual empieza a implementarse en 2009. . Aunque existe otros mecanismos para ejecutar Javascript en el lado del servidor como el [framework Java Rhino desarrollado por Mozilla](https://github.com/mozilla/rhino).


En el caso de que el [JavaScript](https://www.manualweb.net/javascript/) se ejecute en el servidor se suele disponer de librerías que extienden la funcionalidad en base a módulos para acceder a las _bases de datos_, _manejo de ficheros_, realizar _conexiones http_,… todo lo necesario para implementar lógica de negocio en el lado del servidor.


## Implementaciones Javascript


El estándar **ECMA-262** o **ECMAScript** es solamente una especificación del lenguaje. Luego existen una serie de **motores Javascript** encargados de implementar estándar y que son los que utilizamos para realizar nuestros desarrollos.


Algunos de los **motores Javascript** que podemos encontrar son:

- **V8**, es el motor [JavaScript](https://www.manualweb.net/javascript/) del navegador [_Google Chrome_](https://www.ayudaenlaweb.com/navegadores/que-es-google-chrome/) y el que utiliza también [NodeJS](https://lineadecodigo.com/categoria/nodejs/).
- **SpiderMonkey**, que es el motor [JavaScript](https://www.manualweb.net/javascript/) de _Mozilla_ y que va implementado en el navegador **Firefox**.
- **Rhino**, es un motor [JavaScript](https://www.manualweb.net/javascript/) escrito en [Java](https://www.manualweb.net/java/).
- **Tamarin**, es la máquina virtual que se utilizó con _ActionScript_ del _Adobe Flash_.
- **Nashorn**, es un motor [JavaScript](https://www.manualweb.net/javascript/) utilizado por _Java Developer Kit_ de _Oracle_.
