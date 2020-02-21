---
title: Elementos Input
permalink: /html5/formularios-elementos-input/
---

## Nuevos Atributos[![Nuevos Atributos][Marker]{:class="marca"}](#nuevos-atributos)
En [HTML5][HTML5] aparecen un conjunto de atributos nuevos para los elementos `input` que nos permiten manipular mejor los formularios. Estos son: *placeholder*, *autocomplete* y *autofocus*

### Placeholder[![Placeholder][Marker]{:class="marca"}](#placeholder)
Hasta [HTML5][HTML5] la forma que existía de dar información contextual sobre el contenido que había que insertar en un campo de formulario era mediante el elemento label.

En [HTML5][HTML5] aparece el atributo `placeholder`, el cual permite poner información sobre lo que hay que insertar dentro del elemento `input` dentro del mismo elemento.

~~~html
<input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
~~~

Como podemos ver el texto del `placeholder` queda difuminado dentro del elemento `input`.

![Imagen de un Placeholder][ImagenPlaceholder]{:class="img-responsive"}

### Autocomplete[![Autocomplete][Marker]{:class="marca"}](#autocomplete)
Mediante el atributo `autocomplete` permitiremos al agente de usuario (navegador) que pueda apoyarse en información introducida en otros formularios en el pasado para intentar completar el contenido de un campo ofreciendo alternativas de texto.

Algunos navegadores permiten tener datos preconfigurados para poder autocompletar el contenido del formulario.

~~~html
<input type="text" name="nombre" id="nombre" autocomplete="name">
<input type="text" name="url" id="url" autocomplete="off">
<input type="text" name="direccion" id="direccion" autocomplete="street-address">
~~~

Los valores que pueden tener pueden ser `on` y `off`. O bien valores que indiquen la semántica del campo para que se pueda autocompletar, estos pueden ser: `name`, `country`, `sex`, `street`, `username`, `organization`,... [puedes consultar más valores para el atributo `autocomplete`][ValoresAutocomplete]

### Autofocus[![Autofocus][Marker]{:class="marca"}](#autofocus)
Hasta [HTML5][HTML5] el control del foco de los elementos `input` de un formulario debía de ser ejecutado mediante código [Javascript][Javascript]. Pero ahora ya contamos con un atributo que nos permite indicar cual de los elementos `input` de un formulario empieza a tener el foco del mismo.

> Solo uno de los elementos `input` puede tener el atributo `autofocus`.

Bastará con añadir el atributo `autofocus` sobre uno de los elementos `input` para que este obtenga el foco cuando se cargue la página.

~~~html
<input type="text" name="url" id="url" autofocus>
~~~

## Nuevos tipos Input[![Nuevos tipos Input][Marker]{:class="marca"}](#nuevos-tipos-input)
Una de las cosas que nos encontramos en [HTML5][HTML5] son nuevos tipos de elemento de entrada de datos en los formularios. Lo que viene a ser el atributo `type` del elemento `input`.

Hasta [HTML 4.01][HTML] podíamos definir un elemento `input` como: *text*, *radio*, *checkbox*, *password*, *file*, *hidden* y *submit*.

Recordamos que la estructura de un elemento `input` es:

~~~html
<input type="tipo" id="identificador" size="tamaño" name="nombre" value="texto por defecto"/>
~~~

Ahora contamos con nuevos tipos de elementos input como son: *search*, *email*, *url*, *tel*, *range*, *number*, *date* y *color*.

### Input Search[![Input Search][Marker]{:class="marca"}](#input-search)
El tipo `search` de los elementos `input` nos sirven para definir campos de entrada para búsquedas. Es decir, si añadimos un buscador dentro de nuestra web, el campo sobre el cual el usuario podrá introducir el texto de la búsqueda será de tipo `search`.

~~~html
<input type="search" id="busqueda" name="q"/>
~~~

Vemos que simplemente hemos especificado el valor `search` dentro del atributo `type` del elemento `input`. Al contrario que lo que sucede en otros tipos de elementos `input` en el caso de las búsquedas no hay una visualización específica dentro de los diferentes navegadores.

### Input Email[![Input Email][Marker]{:class="marca"}](#input-email)
Uno de los datos de contacto más solicitados en Internet es, obviamente, el email. Hasta la versión de [HTML5][HTMl5] cuando estamos creando un formulario y queremos que un campo fuese de tipo email lo que hacíamos era declararlo de tipo texto y crearnos unos [códigos javascript de validación de emails][JavascriptValidaEmail].

Con la aparición del tipo email, deberemos de marcar el elemento `input` como un elemento del tipo `email`.

~~~html
<input type="email" id="email" name="email"/>
~~~

A partir de este momento **el navegador será el que realice las comprobaciones de que el dato introducido sea un email**. Bien es cierto que, de momento, las validaciones de los navegadores son mínimas y no van más allá del formato del email en cuanto a tener una @ o que después del punto exista un dominio, sea el que fuese.

Visualmente, en *Google Chrome* tenemos el siguiente efecto visual en la validación de un email:

![Imagen de un Input tipo Email][ImagenInputEmail]{:class="img-responsive"}

De igual manera las opciones que nos ofrece del texto a rellenar serán emails y no cualquier otro tipo de texto. Al menos textos que cuadren con la expresión regular del email.

### Input URL[![Input URL][Marker]{:class="marca"}](#input-url)
El comportamiento del tipo `url` es parecido al del tipo email. La única diferencia es que en este caso **se valida que el contenido insertado coincida con una URL**. Es decir, tenga su protocolo especificado (http://), el servidor, el dominio,... con lo cual evitaremos el tener que utilizar, como sucedía anteriormente, validadores de URL.

~~~html
<input type="url" id="website" name="website">
~~~

Si utilizamos un tipo `url` dentro de un elemento `input` y no insertamos un texto con forma de URL, el navegador nos mostrará lo siguiente:

![Imagen de un Input tipo URL][ImagenInputURL]{:class="img-responsive"}

### Input Tel[![Input Tel][Marker]{:class="marca"}](#input-tel)
El tipo `tel` nos servirá para indicar que el campo es un número de teléfono. Dada la gran cantidad de formatos de números de telfóno que hay en el mundo, no se realizará ninguna validación de formato sobre el campo.

Si bien, la semántica que damos indicando que irá un número te teléfono hace que los campos de tipo `tel` para algunos dispositivos móviles muestre un teclado numérico.

Podremos insertar un campo que gestione un número de teléfono mediante el tipo `tel` de la siguiente forma:

~~~html
<input type="tel" id="telefono" name="telefono">
~~~

### Input Number[![Input Number][Marker]{:class="marca"}](#input-number)
Los elementos `input` de tipo `number` nos van a valer para poder introducir números. Para crear un elemento `input` de tipo `number` simplemente tendremos que crear la siguiente estructura:

~~~html
<input type="number" id="numero" name="numero">
~~~

A este tipo de elementos le podemos especificar un par de atributos más. Por un lado podemos fijar cual es el número mínimo y máximo que se puede insertar. Esto lo haremos mediante los atributos `min` y `max`.

~~~html
<input type="number" id="numero" name="numero" min="valor_minimo" max="valor_maximo">
~~~

Por otro podemos indicar el valor de incremento o decremento de los números. Es decir, si queremos que solo se incremente de dos en dos, o de tres en tres,... Esto lo conseguimos mediante el atributo `step`.

~~~html
<input type="number" id="numero" name="numero" step="incremento">
~~~

De esta manera podríamos tener el siguiente código fuente:

~~~html
<form action="#" method="get">
	<label for="anio">¿Cuál es tu año par favorito del siglo XXI?</label>
	<input type="number" id="anio" name="anio" min="2000" max="2018" step="2"/>
	<input type="submit" value="Buscar"/>
</form>
~~~

Vemos que el valor mínimo es *2000* y el máximo *2018* y que solo podemos incrementar o decrementar de 2 en 2, ya que preguntamos por *años pares*.

Los campos `input` de tipo `number` nos forzarán a que el valor introducido sea un número y además que esté dentro del rango marcado por los atributos `min` y `max`.

![Imagen de un Input tipo Number][ImagenInputNumber]{:class="img-responsive"}

### Input Range[![Input Range][Marker]{:class="marca"}](#input-range)
Otra forma de elegir un valor numérico es mediante un *slider*. Para poder poner estas barras de selección tenemos el tipos `range` dentro de los elementos `input`.

~~~html
<input type="range" id="numero" name="numero">
~~~

Los elementos `input` de tipo `range` aceptan los mismos parámetros que los elementos `number`. Así que podremos añadir los atributos `min`, `max` y `step`.

~~~html
<input type="range" id="numero" name="numero" min="valor_minimo" max="valor_maximo" step="incremento">
~~~

De esta manera el mismo ejemplo anterior relativo a los años, pero con un slider quedaría de la siguiente forma:

~~~html
<form action="#" method="get">
	<label for="anio">¿Cuál es tu año par favorito del siglo XXI?</label><br/>
	<input type="range" id="anio" name="anio" min="2000" max="2018" step="2"/>
	<input type="submit" value="Enviar"/>
</form>
~~~

Como se puede ver es idéntico.

Uno de los problemas que nos econtramos con los sliders es que no tienen una representación visual del valor que estamos marcando. Es por ello que deberemos de utilizar algún código en [Javascript][Javascript] para poder mostrarlo.

Así el mismo ejemplo, pero visualizand el año quedaría de la siguiente forma:

~~~html
<form action="#" method="get">
	<label for="anio">¿Cuál es tu año par favorito del siglo XXI?</label><br/>
	<input type="range" id="anio" name="anio" min="2000" max="2018" step="2"/>
	<span id="salida"></span><br/>
	<input type="submit" value="Enviar"/>
</form>
~~~

Y tendríamos que añadir el siguiente código [Javascript][Javascript]:

~~~javascript
var anio = document.getElementById("anio");
var salida = document.getElementById("salida");

salida.textContent = anio.value;

anio.oninput = function() {
  salida.textContent = anio.value;
}
~~~

Este código [Javascript][Javascript] simplemente vuelca el valor del elemento `input` sobre un elemento `span`.

### Input Datetime[![Input Datetime][Marker]{:class="marca"}](#input-datetime)
Otra de las opciones que han incoporado los elementos de texto `input` en los formularios [HTML5][HTML5] es el manejo de fechas. Para ello contamos con 4 tipos de elementos `input`, que son: `datetime-local`, `month`, `time` y `week`.

#### Input Datetime-local[![Input Datetime-local][Marker]{:class="marca"}](#input-datetime-local)
Este tipo de elemento nos permite escoger una fecha y hora, sin especificar la zona horaria en la que se encuentra. El valor del tipo `input` será `datetime-local`.

~~~html
<input type="datetime-local" id="fechahora" name="fechahora"/>
~~~

La representación visual de un tipo `datetime-local` será:

![Imagen de un Input tipo Datetime][ImagenInputDatetime]{:class="img-responsive"}

#### Input Month[![Input Month][Marker]{:class="marca"}](#input-month)
En este caso se creará un selector de meses del año. El valor del tipo `input` para los meses en `month`.

~~~html
<input type="month" id="mes" name="mes"/>
~~~

La representción visual para los campos de texto de tipo mes es:

![Imagen de un Input tipo Month][ImagenInputMonth]{:class="img-responsive"}

#### Input Time[![Input Time][Marker]{:class="marca"}](#input-time)
Para poder indicar una hora en formato horas y minutos *(hh:mm)* disponemos del tipo `time` para los elementos de texto de un formualario. La estructura para un elemento `input` de tipo `time` es:

~~~html
<input type="time" id="hora" name="hora"/>
~~~

Y su representación visual:

![Imagen de un Input tipo Time][ImagenInputTime]{:class="img-responsive"}

Podemos comprobar que se le da el formato *hh:mm** dentro de la caja de texto.

#### Input Week[![Input Week][Marker]{:class="marca"}](#input-week)
El último elemento para el manejo de fechas es el tipo `week`. En este caso el elemento `week` nos permite seleccionar una semana dentro del año.

~~~html
<input type="week" id="semana" name="semana"/>
~~~

Vemos que la representación visual cambia y nos muestra las semanas del año dentro del calendario.

![Imagen de un Input tipo Week][ImagenInputWeek]{:class="img-responsive"}

### Input Color[![Input Color][Marker]{:class="marca"}](#input-color)
Si lo que queremos es que un usuario nos indique un color de una paleta de colores utilizaremos el elemento `input` con un tipo `color`.

~~~html
<input type="color" name="colorfavorito" value="#ff0000">
~~~

Mediante el atributo `value` podemos indicar en formato **RGB** un color que será el que muestre la paleta por defecto.

De esta manera, en el navegador, podremos ver algo parecido a lo siguiente:

![Imagen de un Input tipo Color][ImagenInputColor]{:class="img-responsive"}

### Input File[![Input File][Marker]{:class="marca"}](#input-file)
En [HTML 4.01][HTML] ya existía un campo de texto `input` en que podíamos subir ficheros. Este era el tipo `file`. En [HTML5][HTML5] sigue existiendo dicho campo, si bien se ha añadido una serie de atributos adicionales para su manejo.

La estructura de un tipo `file` es la siguiente:

~~~html
<input id="ficheros" type="file" name="file" id="file"><br/>
~~~

Uno de los atributos específicos del tipo `file` que ya existía era el filtrado de tipos de ficheros a aceptar. Esto lo indicamos con el atributo `accept` el cual recibirá una extensión de fichero o un mime-type de los ficheros que aceptamos subir **separados por comas**.

Si queremos hacerlo por extesiones:

~~~html
<input id="ficheros" type="file" name="file" id="file" accept=".jpg,.gif,.png"><br/>
~~~

O por mimetypes:

~~~html
<input id="ficheros" type="file" name="file" id="file" accept="image/*,audio/*"><br/>
~~~

En el caso de que queramos subir más de un fichero deberemos de recurrir al atributo `multiple`.

~~~html
<input id="ficheros" type="file" name="file" id="file" accept="image/*" multiple><br/>
~~~

Por último nos encontramos con el atributo `capture` el cual nos sirve para indicar que el origen del fichero podrá ser la cámara o micrófono del dispositivo. Los valores del atributo `capture` pueden ser ***user*** para la cámara frontal o ***enviroment*** para la cámara trasea.

~~~html
<input id="ficheros" type="file" name="file" id="file" accept="image/*" capture="user"><br/>
~~~

[Marker]: {{site.baseurl}}/img/marker.png
[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[Javascript]: http://www.manualweb.net/javascript/
[JavascriptValidaEmail]: http://lineadecodigo.com/javascript/validar-el-email-con-javascript/
[ValoresAutocomplete]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[ImagenInputEmail]: {{site.baseurl}}/html5/img/input-email.png
[ImagenInputColor]: {{site.baseurl}}/html5/img/input-color.png
[ImagenInputURL]: {{site.baseurl}}/html5/img/input-url.png
[ImagenInputNumber]: {{site.baseurl}}/html5/img/input-number.png
[ImagenInputDatetime]: {{site.baseurl}}/html5/img/input-datetime.png
[ImagenInputMonth]: {{site.baseurl}}/html5/img/input-month.png
[ImagenInputTime]: {{site.baseurl}}/html5/img/input-time.png
[ImagenInputWeek]: {{site.baseurl}}/html5/img/input-week.png
[ImagenPlaceholder]: {{site.baseurl}}/html5/img/placeholder.png
