---
title: Formularios HTML
permalink: /html/formularios-html/
---

## ¿Qué son los formularios en HTML?
Los formularios [HTML][ManualHTML] son elementos de las páginas web que nos sirven para recuperar información del usuario y enviarla al servidor para que pueda ser procesada.

La sintaxis para definir un formulario será mediante el [elemento form][FORM]:

~~~html
<form>...</form>
~~~

## Campos de Formularios
Dentro de los **campos** que podemos incluir en formularios [HTML][ManualHTML] encontramos los siguientes:

* Campos de entrada de datos
  * Campos de textos
  * Contraseñas
  * Checkbox
  * Radios
  * Botones de envío
  * Botones de borrado
  * Ficheros
  * Campos Ocultos
  * Imágenes
  * Botones
* Áreas de texto
* Combos de selección

### Campos de entrada de datos[![Campos de entrada de datos][Marker]{:class="marca"}](#campos-de-entrada-de-datos)

Son los elementos básicos de un formulario ya que son los que nos permiten recuperar información del usuario de diferentes formas.

El elemento que representa los campos de entrada de datos es [input][INPUT]. La estructura básica de un campo de entrada es la siguiente:

~~~html
<input type="tipo" id="identificador" size="tamaño"
  name="nombre" value="texto por defecto"/>
~~~

Si vemos los atributos que tiene el elemento input nos encontramos los siguientes:

*   **type**, indica el tipo de campo de entrada de datos que vamos a utilizar. Dependiendo del tipo que indiquemos obtendremos un resultado u otro. Los valores que puede tener el atributo type son: “text", “password", “checkbox", “radio", “submit", “reset", “file", “hidden", “image" y “button".
*   **id,** es el identificador del campo. Es importante ya que será el nombre por el cual podremos identificar, de forma unívoca, al campo.
*   **size**, será el tamaño del campo. Es decir, el número de caracteres que podríamos insertar en el campo de texto.
*   **name,** es el nombre del campo el cual se enviará desde el formulario al servidor.
*   **value,** será el valor por defecto que tendrá el campo de texto y que le aparecerá al usuario al cargar el formulario.

Cuando enviemos el formulario al servidor, se coge el la combinación name=value para ser enviada.

#### Campos de texto

El campo de texto, como bien indica su nombre, es el que nos permite insertar texto en un formulario. El usuario podrá insertar texto visible sobre el campo.

En este caso el tipo de elemento input que utilizaremos será “text". Así, para definir un campo de texto lo haremos de la siguiente forma:

~~~html
<input type="text" id="identificador" size="tamaño"
  name="nombre" value="texto por defecto"/>
~~~

De esta forma si queremos crear un campo de texto para poder insertar 70 caracteres que contenga un email, lo definiremos de la siguiente forma:

~~~html
<input type="text" id="email" name="email"
  size="70" value="usuario@dominio.com"/>
~~~

#### Contraseñas

Cuando un usuario inserte una contraseña dentro de un formulario necesitaremos, casi seguro, que el valor de la contraseña no aparezca y que por el contrario aparezcan caracteres como asteriscos.

Para insertar un campo que acepte contraseñas dentro de un formulario vamos a utilizar un tipo “password" dentro del elemento input.

~~~html
<input type="password" id="identificador" size="tamaño" name="nombre"/>
~~~

En este caso, aunque podemos poner un valor por defecto, si bien, no parece tener mucho sentido. Si queremos definir un campo que acepte contraseñas de 20 caracteres lo codificaremos de la siguiente forma:

~~~html
<input type="password" id="clave" name="clave" size="20"/>
~~~

#### Checkbox

Un checkbox nos permite capturar un dato del usuario mediante un elemento de check. El check puede tener dos valores, seleccionado o no seleccionado. El tipo del elemento input que utilizaremos será “checkbox". Así lo definiremos de la siguiente forma:

~~~html
<input type="checkbox" id="identificador" name="nombre"/>
~~~

En el caso del checkbox no tienen sentido el atributo tamaño ni el valor por defecto. Ya que, recordemos que solo podemos tener el check seleccionado o no. Pero lo que sí podemos hacer es generar un checkbox que esta preseleccionado. Para ello utilizamos el [atributo checked][checked].

~~~html
<input type="checkbox" id="identificador" name="nombre" checked="checked"/>
~~~

Pero ¿dónde está el texto que acompaña al checkbox? Realmente el checkbox no tiene definido que acompañe al checkbox. Si no que hay que añadir el texto directamente al lado del checkbox.

~~~html
<input type="checkbox" id="identificador" name="nombre" checked="checked"/>
Texto del checkbox
~~~

Aunque más adelante vamos a ver una forma más correcta de asociar el texto al checkbox.

Así, si queremos crear un checkbox que nos pregunte si estamos de acuerdo con unas condiciones podríamos codificarlo de la siguiente forma:

~~~html
<input type="checkbox" id="condiciones" name="condiciones"/>Está de acuerdo con las condiciones explicadas más arriba.
~~~

Los checkbox suelen ir en grupos para seleccionar varias opciones. Por ejemplo podríamos tener el siguiente código con el que podamos seleccionar qué lenguaje de programación queremos aprender.

~~~html
<input type="checkbox" name="lenguaje" value="html">HTML
<input type="checkbox" name="lenguaje" value="javascript">Javascript
<input type="checkbox" name="lenguaje" value="css">CSS
<input type="checkbox" name="lenguaje" value="xml">XML
~~~

#### Radios

Con los elementos de radio podemos ofrecer un conjunto de opciones al usuario de tal manera que solo pueda elegir una de ellas. El tipo de elemento input que utilizamos es “radio".

La sintaxis que seguiremos en los elementos input de tipo radio será la siguiente:

~~~html
<input type="radio" id="identificador" value="valor" name="nombre"/>
~~~

En el caso de los elementos radio **toma un papel principal el [atributo name][name]**. Ya que para poder agrupar opciones deberemos de tener el mismo valor de [atributo name][name].

Así, si queremos crear un grupo de radios para que nos elija una edad le podremos crear de la siguiente forma:

~~~html
<input type="radio" id="menos18" value="menos18" name="edad"/>Menos de 18
<input type="radio" id="18a30" value="18a30" name="edad"/>18 a 30
<input type="radio" id="31a50" value="31a50" name="edad"/>31 a 50
<input type="radio" id="mas50" value="mas50" name="edad"/>Más de 50
~~~

Al igual que sucedía con los campos de entrada de tipo check, podemos cargar campos de tipo radio en nuestro formulario con un elemento preseleccionado. Para ello volvemos a recurrir al [atributo checked][checked].

~~~html
<input type="radio" id="identificador" value="valor" name="nombre" checked="checked"/>
~~~

#### Ficheros

Cuando diseñemos un formulario es posible que necesitemos enviar un fichero de datos al servidor. En este caso el campo de entrada de datos nos tiene que dar la posibilidad de acceder al sistema de fichero del dispositivo para poder seleccionar uno.

En este caso vamos a necesitar un campo de entrada de tipo “file". La sintaxis de los campos de entrada para tipos file sería:

~~~html
<input type="file" id="identificador" value="valor" name="nombre"/>
~~~

#### Campos Ocultos

Otra de las opciones que nos podemos encontrar dentro de los formularios es con la necesidad de enviar información oculta. Es decir, información que tiene que ir anexa al formulario pero que no necesita ser introducida por el usuario. Para ello tenemos la posibilidad de crear campos de datos ocultos.

La sintaxis para los campos de entrada ocultos es:

~~~html
<input type="hidden" id="identificador" value="valor" name="nombre"/>
~~~

En estos casos el campo valor siempre va relleno, ya que no hay otra forma de que el usuario le asigne un valor.

#### Imágenes

Uno de los tipos de [elementos input][INPUT] es el tipo *“image"*. Mediante el tipo *“image"* podemos crear un botón de envío que sea una imágen. La imagen se cargará mediante el [atributo src][src]. La estructura para [elementos input][INPUT] de este tipo es:

~~~html
<input type="image" src="url-image" name="nombre" alt="texto-alternativo"/>
~~~

Como sucede cada vez que manipulamos imágenes hay que rellenar el [atributo alt][alt] con un texto alternativo por motivos de accesibilidad.

Cuando pulsemos sobre la imagen se enviará el formulario, además se enviarán dos atributos *name.x* y *name.y* con los datos de las coordenadas x,y en las que se pulsó sobre la imagen.

### Áreas de texto

Un elemento algo más avanzado que el campo de entrada de datos es el área de texto. Mediante un área de texto tenemos la capacidad de que el usuario inserte una gran cantidad de datos y además que esos datos puedan estar en diferentes líneas.

Para poder insertar un área de texto en nuestro formulario utilizamos el [elemento textarea][TEXTAREA]. La sintaxis del [elemento textarea][TEXTAREA] será la siguiente:

~~~html
<textarea rows="numerofilas" cols="numerocolumnas" name="nombre"></textarea>
~~~

A diferencia del [elemento input][INPUT], el textarea tiene una etiqueta de inicio y una de fin.

Los atributos que nos encontramos en un [textarea][TEXTAREA] son:

* **[rows][rows]**, indica el número de filas que tiene el área de texto.
* **[cols][cols]**, indica el número de columnas que tiene el área de texto.
* **[name][name]**, al igual que sucede con otros elementos del formulario, name contiene el nombre del campo, el cual será enviado al servidor para ser procesado.

De esta forma, si queremos crear un área de texto de 20 filas por 100 columnas en el que un usuario pueda insertar un comentario tendríamos el siguiente código:

~~~html
<textarea rows="20" cols="100" name="comentario"></textarea>
~~~

Si queremos que el área de texto vaya con un valor por defecto, tendremos que añadir dicho contenido entre las etiquetas de textarea.

~~~html
<textarea rows="20" cols="100" name="comentario">Contenido de comentario...</textarea>
~~~

### Combos de opciones

Otro elemento que podemos insertar dentro de un formulario es un combo de opciones. Es decir, un elemento en el que el usuario pueda elegir un elemento o varios de una lista.

El elemento que nos permite insertar un combo de opciones es [select][SELECT]. La sintaxis básica de un [elemento select][SELECT] es:

~~~html
<select name="nombre" size="valoresvisibles" multiple="multiple">
</select>
~~~

De los valores que nos encontramos en el [elemento select][SELECT] destacamos:

* **name,** que al igual que en anteriores casos sirve para dar un nombre al campo que se enviará al servidor.
* **size,** indica el número de opciones que aparecen visibles por defecto. En el caso de que haya más opciones que las elegidas por defecto lo que nos aparecerá será un scroll para poder localizar todas.
* **multiple**, este atributo nos servirá para poder elegir varias de las opciones. Es decir, para tener una elección múltiple.

Como hemos visto el elemento select sólo demarca el combo de las opciones. Para definir cada una de las opciones tenemos el [elemento option][OPTION].

La sintaxis básica del [elemento option][OPTION] es la siguiente:

~~~html
<option label="etiqueta" value="valor"></option>
~~~

Dónde el **atributo label** indica el texto que aparecerá para poder ser seleccionado en el combo y **value** el valor realmente de ese item. En el caso de que no pongamos el atributo label o el atributo value, el valor que cogerán dichos atributos será el texto que encontremos entre los [elementos de option][OPTION].

Por lo tanto, si juntamos la sintaxis del [elemento select][SELECT] y el [elemento option][OPTION] tenemos la siguiente codificación:

~~~html
<select name="nombre" size="valoresvisibles" multiple="multiple">
  <option label="etiqueta" value="valor"></option>
</select>
~~~

Si queremos crear un combo de opciones donde podamos elegir un equipo de fútbol tendríamos el siguiente código:

~~~html
<select>
  <option>Atlético de Madrid</option>
  <option>Real Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
~~~

Si queremos que una de las opciones del combo vaya marcada recurriremos al [atributo selected][selected]. Así, en nuestro ejemplo si marcamos como predefinido el equipo del Betis tendríamos el siguiente código:

~~~html
<select>
  <option>Atletico de Madrid</option>
  <option selected="selected">Betis</option>
  <option>FC. Barcelona</option>
  <option>Real Madrid</option>
  <option>Zaragoza</option>
</select>
~~~

Otra de las cosas que podemos realizar dentro de un combo es agrupar opciones. Si la lista de opciones es muy grande podemos utilizar el [elemento optgroup][OPTGROUP].

La sintaxis del [elemento optgroup][OPTGROUP] es la siguiente:

~~~html
<optgroup label="etiqueta"></optgroup>
~~~

Dentro del [elemento optgroup][OPTGROUP] encontraremos todos los [elementos option][OPTION] que queramos agrupar.

Si por ejemplo, queremos ofrecer un combo de ciudades y las queremos agrupar por continentes, tendríamos el siguiente código:

~~~html
<select name="ciudad">
  <optgroup label="Europa">
    <option>Madrid</option>
    <option>Londres</option>
    <option>Paris</option>
  </optgroup>
  <optgroup label="Suramerica">
    <option>Santiago</option>
    <option>Sao Paulo</option>
    <option>Lima</option>
    <option>Bogota</option>
  </optgroup>
    <optgroup label="Africa">
    <option>Casablanca</option>
    <option>Ciudad del Cabo</option>
  </optgroup>
</select>
~~~

### Botones

Una vez que hemos insertado campos de texto en nuestro formulario es hora de insertar botones. ***Mediante los botones podremos realizar operaciones de envío del formulario***, de manipulación de datos, borrado,...

Existen dos formas de insertar botones dentro de un formulario: el [elemento input][INPUT] y el [elemento button][BUTTON]. La primera es recurre nuevamente al [elemento input][INPUT] que hemos visto anteriormente para los campos de texto.

La sintaxis para un botón mediante un [elemento input][INPUT] será:

~~~html
<input type="button" value="TextoBotón"/>
~~~

Si bien, este botón no hace nada por sí solo y tendríamos que darle un comportamiento vía Javascript para que el botón tuviera funcionalidad.

#### Botones de envío

En el caso del [elemento input][INPUT] podemos poner botones de otras dos formas y en estos casos ya con funcionalidad. Estos son los tipos ***“submit"*** y ***“reset".***

Para crear un botón que nos envíe los datos del formulario al servidor tenemos el tipo submit. Su sintaxis es la siguiente:

~~~html
<input type="submit" value="TextoBotón"/>
~~~

Una vez que pulsemos sobre el botón se enviarán los datos que el usuario haya insertado en el formulario.

#### Botones de borrado

El otro tipo de botón con funcionalidad es el que nos permite el borrado de los datos del formulario. Para ello tenemos el tipo “reset". La sintaxis de este botón será:

~~~html
<input type="reset" value="TextoBotón"/>
~~~

Cuando el usuario pulse sobre el botón de borrado. Todos los valores que el usuario haya insertado en el formulario se eliminarán.

#### El elemento button

Como hemos visto hasta ahora los botones que hemos insertado han sido mediante el [elemento input][INPUT], si bien contamos con otro elemento para poner botones en el formulario que es el [elemento button][BUTTON]. Cuya funcionalidad es la misma que la del [elemento input][INPUT].

La sintaxis del [elemento button][BUTTON] es:

~~~html
<button name="nombre" type="TipoBoton" value="ValorBoton"></button>
~~~

Dependiendo del tipo que asignamos al [atributo type][type] obtendremos un comportamiento u otro:

* **submit**, crea un botón para el envío de formulario.
* **reset**, crea un botón para el borrado de datos del formulario.
* **button**, crea un botón normal.

[Marker]: {{site.baseurl}}/img/marker.png
[ManualHTML]: http://www.manualweb.net/html/
[FORM]: http://www.w3api.com/HTML/form
[INPUT]: http://www.w3api.com/HTML/input
[checked]: http://www.w3api.com/HTML/input/checked
[name]: http://www.w3api.com/HTML/name
[src]: http://www.w3api.com/HTML/img/src
[alt]: http://www.w3api.com/HTML/img/alt
[TEXTAREA]: http://www.w3api.com/HTML/textarea
[rows]: http://www.w3api.com/HTML/textarea/rows
[cols]: http://www.w3api.com/HTML/textaera/cols
[SELECT]: http://www.w3api.com/HTML/select
[OPTION]: http://www.w3api.com/HTML/option
[selected]: http://www.w3api.com/HTML/option/selected
[OPTGROUP]: http://www.w3api.com/HTML/optgroup
[BUTTON]: http://www.w3api.com/HTML/button
[type]: http://www.w3api.com/HTML/input/type
