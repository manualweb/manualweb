---
title: Tablas HTML
date: 2023-12-29
last_modified_at: 2023-12-29
permalink: /html/tablas-html/
excerpt: "Las tablas es el elemento del lenguaje HTML que utilizaremos para mostrar información de forma agrupada, ya sea texto, imágenes, vídeos,…"
tags: [table,tr,td]
image:
  path: /img/covers/html-cover.png
---

## ¿Qué son las tablas en HTML?


Las tablas es el elemento del lenguaje [HTML](https://www.manualweb.net/html/) que utilizaremos para mostrar información de forma agrupada. Ya sea texto, imágenes, vídeos,…


El elemento [`table`](https://w3api.com/HTML/table/) será el que nos ayudará para crear las tablas en [HTML](https://www.manualweb.net/html/).


Un mal uso de las tablas en [HTML](https://www.manualweb.net/html/) es el motivo de maquetación, uso que se dio a las tablas en los principios del lenguaje [HTML](https://www.manualweb.net/html/). Algo que hoy en día es una mala práctica. Cambiando por un modelo de maquetación apoyado en capas.


## Crear una tabla simple


Para crear una tabla vamos a necesitar conocer, al menos, tres elementos: [`table`](https://w3api.com/HTML/table/), [`tr`](https://w3api.com/HTML/tr/) y [`td`](https://w3api.com/HTML/td/). Si bien existen otros cuantos que nos permitirán ampliar la funcionalidad de las tablas.


El primer elemento es [`table`](https://w3api.com/HTML/table/)`,` [`table`](https://w3api.com/HTML/table/) es el elemento que representa las tablas y será el que agrupe al resto de elementos. Por lo tanto tiene sus etiquetas de inicio y cierre.


```html
<table>
    <!-- Contenido de la tabla -->
</table>
```


Siguiendo con la construcción de la tabla el siguiente elemento que necesitamos es [`tr`](https://w3api.com/HTML/tr/). El elemento [`tr`](https://w3api.com/HTML/tr/) representa a una fila de la tabla. Por lo tanto tendremos tantos elementos [`tr`](https://w3api.com/HTML/tr/) como filas tenga la tabla.


Así, si queremos tener una tabla de tres filas tendremos un código como el que sigue:


```html
<table>
  <tr>
    <!-- Contenido de las celdas de la fila 1 -->
  </tr>
  <tr>
    <!-- Contenido de las celdas de la fila 2 -->
  </tr>
  <tr>
    <!-- Contenido de las celdas de la fila 3 -->
  </tr>
</table>
```


El último elemento que necesitamos conocer es [`td`](https://w3api.com/HTML/td/). El elemento [`td`](https://w3api.com/HTML/td/) es el que representa de una forma unitaria a una celda. Por lo tanto los elementos [`tr`](https://w3api.com/HTML/tr/) tendrán tantos elementos [`td`](https://w3api.com/HTML/td/) en su interior como celdas contenga la fila.


El contenido que haya entre los elementos [`td`](https://w3api.com/HTML/td/) será el contenido de la celda.


Una tabla de tres filas por cuatro columnas quedaría de la siguiente forma:


```html
<table>
  <tr>
    <td>Fila 1 Columna 1</td>
    <td>Fila 1 Columna 2</td>
    <td>Fila 1 Columna 3</td>
    <td>Fila 1 Columna 4</td>
  </tr>
  <tr>
    <td>Fila 2 Columna 1</td>
    <td>Fila 2 Columna 2</td>
    <td>Fila 2 Columna 3</td>
    <td>Fila 2 Columna 4</td>
  </tr>
  <tr>
    <td>Fila 3 Columna 1</td>
    <td>Fila 3 Columna 2</td>
    <td>Fila 3 Columna 3</td>
    <td>Fila 3 Columna 4</td>
  </tr>
</table>
```


Así con los tres elementos [`table`](https://w3api.com/HTML/table/), [`tr`](https://w3api.com/HTML/tr/) y [`td`](https://w3api.com/HTML/td/) tenemos construida nuestra tabla.


Visualmente tendríamos algo así:

