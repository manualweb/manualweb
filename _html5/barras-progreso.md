---
title: Barras de Progreso
permalink: /html5/barras-progreso/
---



En los formularios de [HTMl5][HTML5] encontramos un par de elementos que nos permiten definir una barra de progreso. Las barras de progreso nos permiten notificar al usuario el grado de avance que existe en alguna acción determinada.

Los dos elementos que tenemos en [HTMl5][HTML5] para poder construir una barra de progreso son: `progress` y `meter`.

## Progress
El elemento `progress` nos permite especificar el grado de avance atendiendo a un valor mínimo y un valor máximo. Para ello cuenta con el atributo `max` que indicar el valor máximo de progreso y el atributo `value` que indica el valor actual del progreso.

~~~html
<progress max="valor_maximo" value="valor_actual"></progress>
~~~

El contenido del elemento `progress` nos sirve para trabajar la compatibilidad, ya que si el navegador no sabe pintar un elemento `progress`, pintará lo que haya dentro de él y a la inversa, si el navegador sabe pintar el elemento `progress`, solo pintará dicho elemento.

Podemos crear una barra de progreso con un avance del 25% de la siguiente forma:

~~~html
<progress max="100" value="25">25/100</progress>
~~~

## Meter
En el caso del elemento `meter` podremos crear barras de progreso delimitadas por un valor mínimo y un valor máximo, para ello utilizaremos los valores `min` y `max` respectivamente.

~~~html
<meter min="valor_minimo" max="valor_maximo"></meter>
~~~

Además las barra de progreso `meter` **establece otros dos valores de referencia dentro de la barra**. Estos son el valor de inferior y superior, los cuales representa mediante los atributos `low` y `high`.

~~~html
<meter min="valor_minimo" max="valor_maximo" low="valor_inferior" high="valor_superior"></meter>
~~~

Esto permite que podamos dividir a la barra en tres secciones:

* **Inferior**, la que va entre `min` y `low`.
* **Intermedia**, la que va entre `low` y `high`.
* **Alta**, la que va entre `high` y `max`.

Ahora un quinto valor entra en juego, es el valor que se denomina óptimo. Este valor se identifica mediante el atributo `optimum`. Dependiendo del valor que demos al atributo `optimum`, y en conjunto con las secciones de la barra, obtendremos una semántica u otra.

* Si el valor de `optimum` se encuentra en la sección inferior, consideraremos que las sección inferior es la óptima, que la sección intermedia representa la media y que la sección alta es la peor sección.

* Si el valor de `optimum` se encuentra en la sección intermedia se considerará la sección intermedia como la óptima, mientras que las secciones inferior y alta serán consideradas la media.

* Y si el valor de `optimum` se encuentra en la sección alta, se considerará la sección alta como la óptima, se sección intermedia como la media y la sección inferior como la peor.

~~~html
<meter min="valor_minimo" max="valor_maximo" low="valor_inferior" high="valor_superior" optimum="valor_optimo"></meter>
~~~

El último atributo que tenemos es el que representa el valor de la barra. Este será el atributo `value`.

Es importante saber que dependiendo del valor que tenga nuestro atributo `value`, combinado con la sección de la barra en la que se encuentra y el tipo de valor óptimo obtendremos una representación gráfica en un color u otro.

~~~html
<meter min="valor_minimo" max="valor_maximo" low="valor_inferior" high="valor_superior" optimum="valor_optimo" value="valor"></meter>
~~~

* Cuando el valor está en una sección óptima se representará en **verde**.
* Si el valor está en una sección media se representará en **amarillo**
* Y si el valor está en la sección mala se representará en **rojo**.

![Barra de Progreso Meter][ImagenMeter]{:class="img-responsive"}

Aunque pueda parecer un poco lioso el uso de `meter` y sus colores, podríamos resumirlo que si queremos que la barra sea en rojo, amarillo o verde, como un progreso de valor, lo único que hay que hacer es **que el valor óptimo esté entre los valores `high` y `max`.**

Así, podremos pintar una barra con un valor de progreso 80/100 como avance óptimo de la siguiente forma:

~~~html
<meter min="0" max="100" value="80" low="25" high="75" optimum="90">80/100</meter>
~~~




[HTML5]: http://www.manualweb.net/html5/
[ImagenMeter]: {{site.baseurl}}/html5/img/meter.png
