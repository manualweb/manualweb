---
title: Texto en Canvas
permalink: /html5/canvas-texto/
---

En [HTML5][HTML5] tenemos dos métodos para insertar un texto en `canvas`. Estos métodos son: `.fillText()` y `strokeText()`.

~~~javascript
CanvasRenderingContext2D.fillText(text, x, y [, maxWidth]);
CanvasRenderingContext2D.strokeText(text, x, y [, maxWidth]);
~~~

En el caso de `fillText` nos inserta un texto definido en el parámetro `text` dentro de la posición `x`,`y`, al cual podemos limitar el ancho del texto mediante el parámetro opcional `maxWidth`. El método `fillText` nos insertará un texto relleno.

El funcionamiento de `strokeText` es el mismo que `fillText`, pero con la diferencia que del texto que inserta solo representa el borde.

De esta manera podemos **insertar una cadena de texto** de la siguiente forma:

~~~javascript
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  ctx.fillText("Esto es texto en un Canvas",10,10);
}
~~~

## Estilo del Texto
A la hora de insertar texto en el `canvas` podemos dar un estilo del texto de tal manera que seleccionemos la fuente, alineación y dirección del mismo.

Para poder dar estilo del texto disponemos de una serie de propiedades:

### Fuente
Mediante la propiedad `font` podemos especificar esl estilo de la fuente que estamos utilizando. Dentro del estilo podemos indicar el tamaño y tipo de letra.

La sintaxis de la propiedad `font` es:

~~~javascript
ctx.font = value;
~~~

El valor que se le pasa a la propiedad `font` es el de una cadena igual a la cadena que le pasamos en CSS. La cadena se puede representar así:

~~~javascript
"estilo tamaño fuente"
~~~

Por ejemplo podríamos tener la siguiente fuente:

~~~javascript
  ctx.font = "bold 50px serif";
~~~

### Alineación Texto
También podemos selecionar la alineación del texto mediante la propiedad `textAlign`. La sintaxis de la propiedad `textAlign` es la siguiente:

~~~javascript
ctx.textAlign = "left" || "right" || "center" || "start" || "end";
~~~

Los valores que puede tener son:

* **left**, alineado a la izquierda.
* **right**, alineado a la derecha.
* **center**, texto centrado.
* **start**, el texto se alinea según el "locale" desde el principio. Es decir, si el texto se escribe de izquierda a derecha, se alinea a la izquierda. Si el texto se escribe de derecha a izquierda se alinea a la derecha. *Es el valor por defecto*.
* **end**, el texto se alinea al final de la línea atendiendo al "locale". Si el texto se escribe de izquierda a derecha se alinea a la derecha, y si el texto se escribe de derecha a izquierda se alinea a la izquierda.

Podemos dejar un texto alineado a la derecha de la siguiente forma:

~~~javascript
ctx.font = '24px serif';
ctx.textAlign = 'right';
ctx.fillText("Esto es texto alineado a la derecha",400,50);
~~~

Al utilizar la posición el el método `filltext()`, esta será el inicio para el alineado a la derecha.

### Línea base del texto
Para establecer la línea base del texto tenemos la propiedad `textBaseline`. En este caso la sintaxis será:

~~~javascript
ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
~~~

Los valores que puede tomar la propiedad `textBaseline` son:

* **top**,
* **hanging**,
* **middle**,
* **alphabetic**,
* **ideographic**,
* **bottom**,


[HTML5]: {{site.baseurl}}t/html5/
