---
title: Introducción a Javascript
permalink: /javascript/introduccion-javascript/
---

## ¿Qué es Javascript?
[JavaScript][JavaScript] es un lenguaje ligero interpretado o compilado. [JavaScript][JavaScript] funciona de *manera dinámica*, por lo que podemos ir modificando dinámicamente los objetos y clases, ejecutando código script nuevo,.... Para la construcción de objetos, [JavaScript][JavaScript] funciona mediante *prototipos*. Además [JavaScript][JavaScript] es un lenguaje con *funciones de primera clase*.

> **Funciones de primera clase (First-Class Functions)**, son los lenguajes de programación los cuales tratan a las funciones como cualquier otra variable. Es decir, puede ser pasada como argumento, retornada por otra función o puede ser asignada a una variable.

Se puede utilizar [JavaScript][JavaScript] de forma *procedimental*, *declarativa* y  *orientada a objetos*.

Aunque su mayor uso es dentro de los navegadores web, encontramos el uso de [JavaScript][JavaScript] en lenguajes como **Node.JS** o bases de datos como [MongoDB][MongoDB].

[JavaScript][JavaScript] tiene una librería core del lenguaje con las funcionalidades básicas y luego se extiende mediante un conjunto de objetos: *Array*, *Math*, *Date*,...


[JavaScript][JavaScript] puede ejecutarse en el cliente o en el servidor. En el caso de que el [JavaScript][JavaScript] se ejecute en el cliente, este se complementa con los objetos del **DOM** o **Document Object Model** que nos permiten manipular los elementos [HTML][HTML] del navegador: formularios, listas, enlaces,... en el caso de que el [JavaScript][JavaScript] se ejecute en el servidor se disponen de librerías que extienden la funcionalidad para acceder a las bases de datos, manejo de ficheros, realizar conexiones http,...



## Implementaciones Javascript
El estándar es sólamente una especificación del lenguaje, si bien existen luego una serie de **motores Javascript** que implementan el estándar **ECMAScript**. Así encontramos:

* **V8**, es el motor **JavaScript** del navegador *Google Chrome* y el que utiliza [NodeJS][NodeJS].
* **SpiderMonkey**, que es el motor **JavaScript** de *Mozilla* y que va implementado en el navegador **Firefox**.
* **Rhino**, un motor Javascript escrito en Java.
* **Tamarin**, es la máquina virtual de *ActionScript* del *Adobe Flash*.
* **Nashorn**, es un motor **JavaScript** utilizado por el *Java Developer Kit* de  *Oracle*.


[JavaScript]: {{site.url}}/javascript
[MongoDB]: {{site.url}}/mongodb
[ECMAScript]: https://www.ecma-international.org/memento/tc39.htm
[NodeJS]: {{site.url}}/nodejs
