---
title: Introducción a ReactJS
permalink: /reactjs/introduccion-reactjs/
---

[ReactjS][ReactJS] es una librería [Javascript][Javascript] desarrollada inicialmente por [Facebook][Facebook] para la **construcción de interfaces de usuario** tanto para **aplicaciones clientes SPA (Single Page Applications)** como **aplicaciones en el servidor**.

La idea de [ReactJS][ReactJS] pretende arquitecturizar el código [JavaScript][Javascript] mediante el uso del componente y optimizar la manipulación del **DOM (Document Object Model)** mediante el uso de un **DOM Virtual**, es decir, los cambios se ejecutan sobre el **DOM Virtual** en vez de hacerlo sobre el **DOM**.


## Características ReactJS
Algunas de las características de [ReactjS][ReactJS] son:

* Interfaces Declarativos
* Basado en Componentes
* Extensión JSX
* Renderizado en Servidor

### Interfaces declarativos
[ReactJS][ReactJS] permite crear vistas de forma declarativa en las que definiremos un estado. Lo que haremos será modificar el contenido del estado. El cambio del estado será es que desencadene una variación de los componentes.

Este modelo declarativo de [ReactJS][ReactJS] hace que sea más sencillo de depurar los componentes que cuando utilizamos directamente el lenguaje [Javascript][Javascript] de forma imperativa para modificar el DOM y crear componentes.

### Basado en componentes
[ReactjS][ReactJS] permite crear componentes visuales encapsulados que gestionen su propio estado de tal forma que podamos tener interfaces complejas.

Además se pueden crear componentes a partir de otros componentes.

La logica del componente se define en [Javascript][Javascript].

### Extensión JSX
El código que utiliza [ReactjS][ReactJS] es [Javascript][Javascript], si bien se puede extender mediante JSX. La extensión JSX lo que nos permite es crear código [Javascript][Javascript] mediante elementos [HTML][HTML].

Es importante saber que estos elementos [HTML][HTML] no se crean en el DOM de la página web si no que se crean en memoria.

### Renderizado en servidor
[ReactjS][ReactJS] también se puede renderizar en el servidor mediante NodeJS y así poder crear aplicaciones nativas mediante **ReactJS Native**.

[ReactJS]: {{site.baseurl}}/reactjs/
[HTML]: {{site.baseurl}}/html/
[Javascript]: {{site.baseurl}}/javascript/
[JSX]: {{site.baseurl}}/reactjs/que-es-jsx/
[Facebook]: http://www.ayudaenlaweb.com/redes-sociales/que-es-facebook/
