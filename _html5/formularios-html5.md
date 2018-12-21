---
title: Formularios HTML5
permalink: /html5/formularios-html5/
---

# Formularios Web

Esquema
1. Input y sus tipos
2. DataList
3. Rangos
4. PlaceHolder
5. Autocompletar
6. Slider ¿o es input? -> es el tipo range y que está asociado con el DataList
7. Patrones
8. Autofoco
9. Elementos requeridos
10. API de validación restringida -> controles específicos. Validación formulario
	* patrones
	* api
	* formnovalidate para evitar validaciones
	* required
	https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

11. objeto formdata
12. formularios y css
	* pseudoclases
	:required { }
:optional { }
:valid { }
:invalid { }
:default { }
:in-range { }
:out-of-range { }
:not()

* atribute selectors
[autofocus] { }
[autocomplete] { }
[list] { }
[placeholder] { }
[type=range] { and other types  }
[multiple]

* Nuevos elementos
 * DataList
 * Output
* En los input
 * color
 * date
 * datetime
 * datetime-local
 * email
 * month
 * number
 * range
 * search
 * tel
 * time
 * url
 * week

* Otros atributos
 * autocomplete
 * autofocus
 * cformaction
 * formenctype
 * formmethod
 * formnovalidate
 * formtarget
 * height and width
 * list
 * min and max
 * multiple
 * pattern (regexp)
 * placeholder
 * required
 * step



Si hay un punto sobre el que se ha incrementado más su funcionalidad de [HTML 4.01][HTML] a [HTML5][HTML5] ese es los formularios. Y es que se ha mantenido la misma filosofía de desarrollo, pero se ha dotado de nuevas funcionalidades a los formularios pasando a tener unos formularios 2.0

## Nuevos Tipos Input

Una de las cosas que nos encontramos en [HTML5][HTML5] son nuevos tipos de elemento de entrada de datos en los formularios. Lo que viene a ser el atributo `type` del elemento `input`.

Hasta [HTML 4.01][HTML] podíamos definir un elemento `input` como: *text*, *radio*, *checkbox*, *password*, *file*, *hidden* y *submit*.

Recordamos que la estructura de un elemento input es:

~~~html
<input type="tipo" id="identificador" size="tamaño" name="nombre" value="texto por defecto"/>
~~~

Ahora contamos con nuevos tipos de elementos input como son: *search*, *email*, *url*, *phone*, *range*, *number*, *date* y *color*.

### Input Search
El tipo search de los elementos `input` nos sirven para definir campos de entrada para búsquedas. Es decir, si añadimos un buscador dentro de nuestra web, el campo sobre el cual el usuario podrá introducir el texto de la búsqueda será de tipo search.

~~~html
<form action="#" method="post">
	<label for="busqueda">¿Qué quieres buscar?</label>
	<input type="search" id="busqueda" name="q"/>
	<input type="submit" value="Buscar"/>
</form>
~~~


### Input Email
Uno de los datos de contacto más solicitados en Internet es, obviamente, el email. Hasta la versión de HTML5 cuando estamos creando un formulario y queremos que un campo fuese de tipo email lo que hacíamos era declararlo de tipo texto y crearnos unos códigos javascript de validación de emails.

Con la aparición del tipo email, deberemos de marcar el elemento input como un elemento del tipo “email”.

~~~html
<form action="#" method="post">
	<label for="busqueda">¿Cúal es tu email?</label>
	<input type="email" id="email" name="email"/>
	<input type="submit" value="Enviar"/>
</form>
~~~

A partir de este momento el navegador será el que realice las comprobaciones de que el dato introducido sea un email. Bien es cierto que, de momento, las validaciones de los navegadores son mínimas y no van más allá del formato del email en cuanto a tener una @ o que después del punto exista un dominio, sea el que fuese.

Visualmente, en Chrome tenemos el siguiente efecto visual en la validación de un email:

![Imagen de un Input tipo Email][ImagenInputEmail]{:class="img-responsive"}


De igual manera las opciones que nos ofrece del texto a rellenar serán emails y no cualquier otro tipo de texto. Al menos textos que cuadren con la expresión regular del email.

Si bien no debemos lanzar las campanas al vuelo ya que de momento habrá que esperar a que evolucionen los validadores de direcciones de email de los navegadores web para poder extender  el uso de este campo.

### Input URL
El comportamiento del tipo URL es parecido al del tipo Email. La única diferencia es que en este caso se valida que el contenido insertado coincida con una URL. Es decir, tenga su protocolo especificado (http://), el servidor, el dominio,... con lo cual evitaremos el tener que utilizar validadores de URL.

Eso sí, sigue sin estar implementado por todos los navegadores. Si bien podemos ver que aquellos que lo implementan nos indican que la URL que hemos insertado no es válida.



### Input Phone
El tipo Phone va a la par que el tipo email y el tipo URL. En este caso se validará que el contenido introducido sea un teléfono. Si bien la especificación de [HTML5][HTML5] no va más allá en la definición del contenido en sí mismo.

De momento no hemos visto que ningún navegador esté realizando alguna validación en este tipo de campos.

Teclados Virtuales y los elementos Email, URL y Phone



### Color
Si lo que queremos es que un usuario nos indique un color de una paleta de colores utilizaremos el elemento `input` con un tipo `color`.

~~~html
<input type="color" name="colorfavorito" value="#ff0000">
~~~

Mediante el atributo `value` podemos indicar en formato **RGB** un color que será el que muestre la paleta por defecto.

De esta manera, en el navegador, podremos ver algo parecido a lo siguiente:

![Imagen de un Input tipo Color][ImagenInputColor]{:class="img-responsive"}




## Ejemplos

(Ya hechos)
* Patrones en formularios con HTML5 pattern
* Autocompletar formularios con HTML5
* Modificando propiedades CSS con un Slider
* Autofoco a un campo con HTML5
* Controlar volumen de vídeo HTML5 con un Slider
* DataList en HTML5
* Elemento rango en formularios HTML5
* PlaceHolder


1. Input para emails
2. Input para Colores
3. Input para búsquedas
4. ¿dar estilo a un placeholder???



[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/

[ImagenInputEmail]: {{site.baseurl}}/html5/img/input-email.jpg
[ImagenInputColor]: {{site.baseurl}}/html5/img/input-color.jpg
