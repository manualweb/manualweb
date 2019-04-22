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


## ECMAScript
El estándar que define el lenguaje [JavaScript][JavaScript] es [ECMAScript][ECMAScript] mediante las especificaciones **ECMA-262** y **ECMA-402**.

La primera especificación del lenguaje **ECMAScript** se define mediante **ECMA-262** en *junio 1997*. Teniendo **ECMA-262 2ª Edición** en *agosto 1998*, que también corresponde con la **ISO 16262**.

La versión **JavaScript 1.5** corresponde a **ECMA-262 3ª Edición** en *diciembre 1999*.

Pasarían 10 años hasta que en *diciembre 2009* se llegase a **ECMA-262 5ª Edición**, alineando el estándar **ISO 16262** con **ECMAScript** en la versión **ECMA-262 5.1ª Edición** en *junio 2011*.

> **ECMAScript 5.1** es el estándar soportado por la mayoría de los navegadores web modernos.

En *diciembre 2012* se generaba el estándar **ECMA-402 1ª Edición** enfocado a la internacionalización del API. En los siguientes años se generaron las ediciones **ECMA-402 2ª, 3ª y 4ª**, así como **ECMA-262 6ª, 7ª y 8ª**, bajo un modelo de revisiones anuales.

La versión actual es [**ECMAScript 2019**](https://tc39.github.io/ecma262/).

## Implementaciones Javascript
El estándar es sólamente una especificación del lenguaje, si bien existen luego una serie de **motores Javascript** que implementan el estándar **ECMAScript**. Así encontramos:

* **V8**, es el motor **JavaScript** del navegador *Google Chrome* y el que utiliza [NodeJS][NodeJS].
* **SpiderMonkey**, que es el motor **JavaScript** de *Mozilla* y que va implementado en el navegador **Firefox**.
* **Rhino**, un motor Javascript escrito en Java.
* **Tamarin**, es la máquina virtual de *ActionScript* del *Adobe Flash*.
* **Nashorn**, es un motor **JavaScript** utilizado por el *Java Developer Kit* de  *Oracle*.




[MongoDB]: {{site.url}}/mongodb
[ECMAScript]: https://www.ecma-international.org/memento/tc39.htm
[NodeJS]: {{site.url}}/nodejs
