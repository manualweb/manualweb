---
title: Estructura y Envío de Formularios HTML
permalink: /html/estructura-envio-formularios-html/
---
Una de las cosas importantes que tenemos que saber de los formularios [HTML][ManualHTML] es cómo funciona la Estructura y envío de formularios.

## Etiquetando el formulario

Hemos visto cómo insertar campos para que el usuario introduzca información en el formulario. En algunos casos hemos visto que aunque el campo tiene un dato de valor no lleva una etiqueta asociada. Es verdad que podemos poner texto al lado del elemento de entrada de datos. Por ejemplo en un checkbox:

~~~html
Equipo: <input type="checkbox" id="betis" name="equipo" value="Real Betis"/>Real Betis
~~~

¿Quién nos dice que el texto asociado al checkbox es “Equipo" o “Real Betis"? Para resolver esto el lenguaje [HTML][ManualHTML] nos proporciona el [elemento label][LABEL].

La sintaxis del [elemento label][LABEL] es la siguiente:

~~~html
<label for="identificador">Texto de la Etiqueta</label>
~~~

El **atributo for** llevará asociado un identificador que deberá de coincidir con el valor de algún [atributo id][id] de uno de los elementos del formulario. Y será sobre ese elemento sobre el que quede asociado.

De esta forma, en el caso que definimos anteriormente sobre el checkbox, la forma correcta de asociar una etiqueta al elemento será la siguiente:

~~~html
Equipo: <input type="checkbox" id="betis" name="equipo" value="Real Betis"/>
<label for="betis">Real Betis</label>
~~~

## Estructura del formulario

En [HTML][ManualHTML] contamos con dos elementos para dar una ***estructura a los formularios***. Estos elementos: [fieldset][FIELDSET] y [legend][LEGEND] nos ayudan a agrupar los datos relacionados dentro del formulario.

Pero vayamos por parte. El primero es [fieldset][FIELDSET], este es un elemento que agrupa a diferentes elementos del formulario, elementos que están relacionados entre ellos.

La sintaxis de [fieldset][FIELDSET] es la siguiente:

~~~html
<fieldset>...</fieldset>
~~~

Entre estos elementos aparecerán los campos del formulario. Por ejemplo si tenemos campos personales básicos podemos agruparlos de la siguiente forma:

~~~html
<fieldset>
 <label for="nombre">Nombre</label><input type="text" id="nombre"/>
 <label for="apellido">Apellido</label><input type="text" id="apellido"/>
</fieldset>
~~~

El [elemento legend][LEGEND] nos servirá para darle un significado a una agrupación

~~~html
<fieldset>
 <legend>Introduzca sus datos personales</legend>
 <label for="nombre">Nombre</label><input type="text" id="nombre"/>
 <label for="apellido">Apellido</label><input type="text" id="apellido"/>
</fieldset>
~~~

## Hacer foco en el formulario

Cuando construyamos un formulario deberemos de preocuparnos por cómo hacer foco en los elementos. Está claro que si utilizamos un navegador web el uso del ratón nos facilitará el ir rellenando cada uno de los campos del formulario.

Pero piensa en alguien que no tenga un ratón o bien que utilice un agente de usuario no visual adaptado para discapacitados. En este caso y para temas de accesibilidad tenemos dos formas de hacer foco en el formulario. Una será el uso de la tabulación, y el otro el uso de teclas de acceso.

### Tabulaciones por el formulario

Para las navegaciones por tabulación en el formulario existe el **atributo tabindex**. Este atributo que lo podemos encontrar en todos los elementos de un formulario nos sirve para establecer un orden mediante números ordinales de los campos del formulario. La estructura del **atributo tabindex** es:

~~~html
tabindex="numero"
~~~

De esta forma podríamos establecer el orden de un formulario de dos datos básicos y un botón mediante el siguiente código:

~~~html
<label for="nombre">Nombre</label><input tabindex="1" type="text" id="nombre"/>
<label for="apellido">Apellido</label><input tabindex="2" type="text" id="apellido"/>
<button id="envio" tabindex="3">Enviar Formulario</button>
~~~

### Teclas de acceso

Otra forma de poder acceder a un elemento del formulario es asignando al elemento una tecla de acceso. De esta manera cuando pulsamos esta tecla (en combinación con alguna definida en el sistema, como la tecla ALT para Windows) iremos directamente a dicho elemento.

El atributo que nos permite hacer esto es el **atributo accesskey**. La estructura del **atributo accesskey** es la siguiente:

~~~html
accesskey=tecla
~~~

Así podríamos definir un campo de un formulario al cual fuésemos al pulsar sobre la “tecla N":

~~~html
<label for="nombre" accesskey="N">Nombre</label>
<input tabindex="1" type="text" id="nombre"/>
~~~

## Deshabilitar controles

A la hora de crear un formulario puede darse el caso que haya algunos campos que en determinados momentos nos aparezcan deshabilitados. Es decir, que el usuario no pueda modificar el valor de dichos campos.

Para poder deshabilitar los controles de un formulario contamos con el **atributo disabled**. La estructura del **atributo disabled** es directamente:

~~~html
disabled
~~~

De esta manera si queremos deshabilitar nuestro anterior campo de texto que nos permitía insertar un nombre escribimos lo siguiente:

~~~html
<label for="nombre" accesskey="N">Nombre</label>
<input disabled type="text" id="nombre"/>
~~~

No podremos hacer foco sobre los elementos de un formulario que estén deshabilitados. De igual manera al hacer tabulación tampoco se podrá tabular sobre ellos. Además no se enviarán como parte de la petición del formulario.

En el caso de que queramos buscar el mismo efecto de que el elemento esté deshabilitado, pero que se pueda tabular, hacer foco y enviar, tenemos el atributo de solo lectura o readonly.

La estructura del **atributo readonly** es básica:

~~~html
readonly
~~~

Si lo aplicamos nuevamente a nuestro campo de texto tendremos:

~~~html
<label for="nombre" accesskey="N">Nombre</label>
<input readonly type="text" id="nombre"/>
~~~

El atributo readonly solo se puede aplicar a [elementos input][INPUT] y [textarea][TEXTAREA].

## Envío del formulario

Una vez que ya hemos construido nuestro formulario solo nos quedará una cosa, esta será enviar el formulario.

Para enviar el formulario deberemos de controlar dos cosas. Por un lado a dónde lo vamos a enviar, es decir, cual es la URL del programa destino (o página destino) que va a procesar los datos del formulario y que nos va a dar una respuesta. Por otro lado está el tipo de envío de los parámetros. En el caso del tipo de envío tenemos la posibilidad de hacerlo mediante un formato GET (con los datos visibles) o POST (con los datos no visibles).

Ambos elementos los configuraremos dentro del [elemento form][FORM].

### Destino del formulario

Para establecer el destino del formulario tenemos el [atributo action][action]. El [atributo action][action] tiene la URL de destino del formulario. La estructura del [atributo action][action] es:

~~~html
<form action="url-destino"> … </form>
~~~

Las URL de destino suelen ser programas o código de servidor, ya sea [Java][ManualJava], [PHP][ManualPHP], Node, [ASP][ManualPHP],... Los cuales recuperan la información del formulario, la manipulan y nos devuelven una nueva página [HTML][ManualHTML].

### Tipo de envío: GET y POST

Para establecer el tipo de envío del formulario tenemos el [atributo method][method]. El [atributo method][method] puede tener dos valores: GET y POST. El atributo method lo encontramos dentro del [elemento form][FORM]:

~~~html
<form method="GET|POST"> … </form>
~~~

A la hora de enviar los ** formularios de forma GET** lo que vamos a conseguir es que a la URL destino del formulario se le añaden los parámetros con los datos del formulario en la estructura:

<samp>action?nombre1=valor1&nombre2=valor2&...&nombreN=valorN</samp>

Si tenemos el siguiente formulario:

~~~html
<form action="envio.php" method="GET">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre"/>
  <label for="apellido">Apellido</label>
  <input type="text" id="apellido" name="apellido"/>
  <button id="envio">Enviar Formulario</button>
</form>
~~~

Lo que se enviará en la URL será algo parecido a:

<samp>envio.php?name=Victor&apellido=Cuervo</samp>

Es importante que nos fijemos que utiliza el valor que hay dentro de los [atributos name][name] para realizar el envío. Si indicamos que el método de envío del formulario es POST lo que hará el navegador es enviar los datos junto al cuerpo del formulario y no se verán en la URL.

Así, en el siguiente formulario:

~~~html
<form action="envio.php" method="POST">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre"/>
  <label for="apellido">Apellido</label>
  <input type="text" id="apellido" name="apellido"/>
  <button id="envio">Enviar Formulario</button>
</form>
~~~

Solo veremos, al enviarlo:

<samp>enviar.php</samp>

### Formato del contenido del formulario

Cuando enviamos el formulario deberemos de saber qué sucede con el contenido. Es decir, si lo envía de alguna forma en especial o con algún tipo de tratamiento. Lo primero que tenemos que saber es que el campo que permite establecer el formato del contenido del formulario es **enctype**, que es un atributo del [elemento form][FORM]:

~~~html
<form enctype="formato-contenido">...</form>
~~~

Los formularios, por defecto, se envían mediante el formato **application/x-www-form-urlencoded.** Este formato lo que hace es sustituir los espacios por + y convierte los caracteres especiales en secuencias de escape. Por otro lado las combinaciones de nombre valor las separa por un = y las parejas con símbolos &. Como ya vimos en las peticiones del tipo GET.

~~~html
<form enctype="application/x-www-form-urlencoded">...</form>
~~~

Si bien, en el caso de que queramos enviar formularios con un gran volumen de información o con imágenes, deberemos de utilizar el tipo **multipart/form-data**.

~~~html
<form enctype="multipart/form-data">...</form>
~~~

Los formularios que utilizan el tipo **multipart/form-data** contienen una serie de partes conocidas como form-data en las que va cada uno de los campos enviados en el formulario.

De esta forma si tenemos el siguiente formulario:

~~~html
<form enctype="multipart/form-data" action="envio.php" method="POST">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre"/>
  <label for="apellido">Apellido</label>
  <input type="text" id="apellido" name="apellido"/>
  <label for="fichero">Fichero</label>
  <input type="file" id=fichero" name="fichero"/>
  <button id="envio">Enviar Formulario</button>
</form>
~~~

La petición multipart podría ser de la siguiente forma:

<pre>-----------------------------931237358445456570660578548
Content-Disposition: form-data; name="nombre"

Victor
-----------------------------931237358445456570660578548
Content-Disposition: form-data; name="apellido"

Cuervo
-----------------------------931237358445456570660578548
Content-Disposition: form-data; name="fichero"; filename="fotografia.png"
Content-Type: image/png</pre>

[ManualHTML]: http://www.manualweb.net/html/
[LABEL]: http://www.w3api.com/HTML/label
[id]: http://www.w3api.com/HTML/id
[FIELDSET]: http://www.w3api.com/HTML/fieldset
[LEGEND]: http://www.w3api.com/HTML/legend
[INPUT]: http://www.w3api.com/HTML/input
[TEXTAREA]: http://www.w3api.com/HTML/textarea
[FORM]: http://www.w3api.com/HTML/form
[action]: http://www.w3api.com/HTML/form/action
[ManualJava]: http://www.manualweb.net/java/
[ManualPHP]: http://www.manualweb.net/php/
[method]: http://www.w3api.com/wiki/HTML/form/method
[name]: http://www.w3api.com/wiki/HTML/form/name
