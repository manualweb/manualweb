---
title: Tablas HTML
permalink: /html/tablas-html/
---

## ¿Qué son las tablas en HTML?

Las tablas es el elemento del lenguaje [HTML][ManualHTML] que utilizaremos para mostrar información de forma agrupada. Ya sea texto, imágenes, vídeos,...

El [elemento table][TABLE] será el que nos ayudará para crear las tablas en [HTML][ManualHTML].

Un mal uso de las tablas en [HTML][ManualHTML] es el motivo de maquetación, uso que se dió a las tablas en los principios del lenguaje [HTML][ManualHTML]. Algo que hoy en día es una mala práctica. Cambiando por un modelo de maquetación apoyado en capas.

## Crear una tabla simple

Para crear una tabla vamos a necesitar conocer, al menos, tres elementos: [table][TABLE], [tr][TR] y [td][TD]. Si bien existen otros cuantos que nos permitirán ampliar la funcionalidad de las tablas.

El primer elemento es [table][TABLE]. [table][TABLE] es el elemento que representa las tablas y será el que agrupe al resto de elementos. Por lo tanto tiene sus etiquetas de inicio y cierre.

~~~html
<table> ... </table>
~~~

Siguiendo con la construcción de la tabla el siguiente elemento que necesitamos es [tr][TR]. El [elemento tr][TR] representa a una fila de la tabla. Por lo tanto tendremos tantos [elementos tr][TR] como filas tenga la tabla.

Así, si queremos tener una tabla de tres filas tendremos un código como el que sigue:

~~~html
<table>
  <tr> ... </tr>
  <tr> ... </tr>
  <tr> ... </tr>
</table>
~~~

El último elemento que necesitamos conocer es [td][TD]. El [elemento td][TD] es el que representa de una forma unitaria a una celda. Por lo tanto los [elementos tr][TR] tendrán tantos [elementos td][TD] en su interior como celdas contenga la fila.

El contenido que haya entre los [elementos td][TD] será el contenido de la celda.

Una tabla de tres filas por cuatro columnas quedaría de la siguiente forma:

~~~html
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
~~~

Así con los tres elementos [table][TABLE], [tr][TR] y [td][TD] tenemos construida nuestra tabla.

Visualmente tendríamos algo así:

<table borde="1" width="100%">
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

[ManualHTML]: http://www.manualweb.net/tutorial-html/
[TABLE]: http://www.w3api.com/wiki/HTML:TABLE
[TR]: http://www.w3api.com/wiki/HTML:TR
[TD]: http://www.w3api.com/wiki/HTML:TD
