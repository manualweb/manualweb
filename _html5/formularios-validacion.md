---
title: Validación formularios
permalink: /html5/formularios-validacion/
---

Cuando estamos introduciendo datos en un formulario puede suceder que el usuario inserte un dato que no es correcto, ya sea por el formato del dato, por el valor del dato,... Es por ello que deberemos de realizar validaciones a los formularios que creemos.

Algunas de las validaciones típicas que nos encontraremos serán: "No puedes dejar el campo en blanco", "La longitud debe de ser mayor de 8", "El valor introducido no es un email",...

Además las validaciones permiten que el valor del dato que se va a enviar al servidor ya tenga cierta calidad, por lo que reducirá la posibilidad de fallo de validación en el servidor y por lo tanto reduzca las llamadas que hagamos a nuestros servicios de datos (o negocio).

> Recuerda que hacer validaciones en la parte del cliente no implica el dejar de hacerlas en el lado del servidor.

Dentro de [HTML5][HTML5] encontramos dos formas de hacer validaciones de formulario:

* **Validaciones propias del [HTML5][HTML5]**, son las que nos ofrece el propio lenguaje, son validaciones básicas que no podremos personalizar, pero que nos serán de gran ayuda.
* **Validaciones utilizando [Javascript][Javascript]**, nos permite utilizar la potencia del lenguaje [Javascript][Javascript] junto con un API de Validación para personalizar al máximo nuestras validaciones de formularios.

## Validaciones HTML5[![Validaciones HTML5][Marker]{:class="marca"}](#validaciones-html5)

### Atributo Required[![Atributo Required][Marker]{:class="marca"}](#atributo-required)
El primer atributo que nos vamos a encontrar dentro de un formulario es el atributo `required`. Mediante el atributo `required` podremos indicar que el campo sobre el que se aplica es obligatorio.

~~~html
<input type="text" name="nombre" id="nombre" required/>
~~~

Si intentamos procesar el formulario y el campo que hemos marcado como `required` sigue vacío, el navegador nos mostrará un mensaje de error.

![Imagen de un Input Obligatorio][ImagenInputRequired]{:class="img-responsive"}

### Expresiones Regulares[![Expresiones Regulares][Marker]{:class="marca"}](#expresiones-regulares)
Otra posibilidad es validar el contenido utilizando una expresión regular. Si queremos definir una expresión regular deberemos de utilizar el atributo `pattern`.  El atributo `pattern` recibirá [una expresión regular Javascript][JavascriptRegExp].

~~~html
<input type="text" name="nombre" id="nombre" pattern="patron"/>
~~~

Algunas de estas exprexiones regulares son:

* `a` &mdash; Que aparezca la letra 'a'.
* `abc` &mdash; Que aparezca la letra 'a', seguida de la 'b' y seguida de la 'c'.
* `a*` &mdash; El carácter aparece 0 o muchas veces.
* `a+` &mdash; El carácter aparece 1 o muchas veces.
* `[^a]` &mdash; Cualquier carácter que no sea una 'a'
* `a|b` &mdash; El carácter es uno u otro.
* `[a-z]` &mdash; Cualquier carácter de la 'a' a la 'z'.
* `[0-9` &mdash; Cualquier número.
* `a{5}` &mdash;  El carácter aparece 5 veces.
* `a{5,8}` &mdash; El carácter aparece de 5 a 8 veces.
* `\w` &mdash; Cualquier carácter alfanumérico (letras, números y subrayado).
* `\d` &mdash; Cualquier dígito.

Y lógicamente puedes combinarlas todas como quieras.

Así por ejemplo podríamos indicar que elija entre "Madrid" y "Barcelona".

~~~html
<input type="text" name="ciudad" id="ciudad" pattern="Madrid|Barcelona"/>
~~~

O que el usuario pueda meter las letras, números y subrayados que quiera, pero al menos uno, de la siguiente forma:

~~~html
<input type="text" name="texto" id="texto" pattern="[\w]+"/>
~~~

O que el número contenga 5 dígitos:

~~~html
<input type="number" name="numero" id="numero" pattern="\d{5}"/>
~~~

Si quieres, [puedes leer más sobre expresiones regulares en Javascript][JavascriptRegExp].

En el caso de que el valor introducido en el usuario no corresponda con el patrón, el navegador nos mostrará un mensaje de error.

![Imagen de un Mensaje Error de Patrón][ImagenErrorPattern]{:class="img-responsive"}

Podemos utilizar el atributo `title` para poder dar más información al usuario cuando se muestre el error.

~~~html
<input type="text" name="nombre" id="nombre" pattern="[\w]+" title="Letras, números o subrayados"/>
~~~

Veremos que lo que se muestra por pantalla incluye la información adicional.

![Imagen de un Mensaje Error de Patrón con Información Adicional][ImagenErrorPatternTitle]{:class="img-responsive"}

### Limitar Tamaños[![Limitar Tamaños][Marker]{:class="marca"}](#limitar-tamaños)
Si queremos limitar el tamaño de un campo `input` o de un `textarea`, ya sea limitándolo a tener un número mínimo o un número máximo de caracteres, podemos recurrir a los atributos `minlength` y `maxlength`.

~~~html
<input type="text" id="nombre" minlength="numero" maxlength="numero"/>
~~~

Por ejemplo, imagina que quieres una contraseña que tenga, al menos, 8 caracteres:

~~~html
<input type="password" name="pwd" id="pwd" minlength="8" required/>
~~~

Si no insertamos el número suficiente de caracteres, el navegador nos avisará del número de caracteres que nos falta.

![Imagen de un Mensaje Error de Número Mínimo de Caracteres][ImagenErrorMinLength]{:class="img-responsive"}

En el caso de que el [campo sea de tipo `number`][InputNumber], los propios atributos `min` y `max` establecen este tipo de validación.

## Validaciones Javascript[![Validaciones Javascript][Marker]{:class="marca"}](#validaciones-javascript)

Ya hemos visto como [HTML5][HTML5] nos permite de forma sencilla realizar validaciones de datos. Si bien estas se nos pueden quedar cortas a la hora de realizar validaciones o de personalizar los mensajes de error asociados al formulario.

Es por ello que [HTML5][HTML5] dispone de un **API de Validación de Formularios** el cual nos ofrece un conjunto de propiedades y métodos para realizar nuestras validaciones personalizadas.

Propiedades:
* *validationMessage*
* *validity*
* *willValidate*

Métodos:
* *checkValidity()*
* *HTMLFormElement.reportValidity()*
* *setCustomValidity(message)*

### Interface ValidityState[![Interface ValidityState][Marker]{:class="marca"}](#interface-validitystate)
El interface `ValiditySate` describe el estado de validación de un elemento. De esta manera sobre este estado podremos ver si hay un problema de rango `.rangeOverflow` o si el valor del campo es demasiado largo `.tooLong` o si el tipo de dato introducido no es correcto `.typeMismatch` o ...

Dentro del **API de Validación de Formularios** es el objeto `validity` el que implementa dicho interface. Este objeto está asociado a los campos de un formulario.

~~~javascript
// Accedemos a un elemento input de tipo email
var email = document.getElementById("mail");
if (email.validity.typeMismatch) {
  console.log("Hay un error en el formato introducido!!!")
}
~~~

### validationMessage[![validationMessage][Marker]{:class="marca"}](#validationmessage)
Una vez que sabemos cómo acceder al objeto `validity` que contiene el estado de validación de un campo de formulario. Pero si lo que queremos saber es qué mensaje va a mostrar el navegador, deberemos de acceder a la propiedad `validationMessage`.

~~~javascript
// Accedemos a un elemento input de tipo email
var email = document.getElementById("mail");
if (email.validity.typeMismatch) {
  console.log(email.validationMessage); // Mensaje por defecto
}
~~~

### willValidate[![willValidate][Marker]{:class="marca"}](#willvalidate)
Si queremos saber si el elemento del formulario va a ser evaluado en el envío, lo que deberemos de hacer es consultar la propiedad `willValidate`. La cual devolerá `true` si el campo se validará en el envío o `false` si no se le va a hacer una validación.

### checkValidity[![checkValidity][Marker]{:class="marca"}](#checkvalidity)
El método `checkValidity()` nos permite comprobar si el elemento tiene problemas de validación. Devuelve `true` en el caso de que el elemento no tenga problemas de validación y `false` si el elemento tiene problemas de validación.

~~~javascript
// Accedemos a un elemento input de tipo email
var email = document.getElementById("mail");
if (!email.checkValidity())
  if (email.validity.typeMismatch) {
    console.log("Hay un error en el formato introducido!!!")
  }
}
~~~

### reportValidity[![reportValidity][Marker]{:class="marca"}](#reportvalidity)
En este caso el método `reportValidity` realiza una **comprobación de la validación a nivel del elemento de formulario**. Es por eso que su sintaxis en `HTMLFormElement.reportValidity()`. Es decir, comprueba si todos los elementos que hay en un formulario pasan la validación de formato o hay campos con error.

~~~javascript
var webform = document.getElementById("webform");

webform.onchange = function(event) {
  if (webform.reportValidity()){
    console.log("Todos los campos del formulario están validados correctamente.");
  } else {
    console.log("Hay campos del formulario con problemas de validación.");
  }
}
~~~

### setCustomValidity[![setCustomValidity][Marker]{:class="marca"}](#setcustomvalidity)
El último método que vemos es el más interesante, ya que mediante `setCustomValidity` vamos a poder **personalizar el mensaje de error que se le muestra al usuario** cuando el formulario contiene errores de validación.

El método `setCustomValidity` **recibe como parámetro el mensaje que queremos personalizar** y es aplicado sobre el elemento que estamos validando y por lo tanto adaptamos el mensaje a dicho tipo de elemento.

~~~javaScript
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Cuidado, el campo es de tipo email!!!");
  } else {
    email.setCustomValidity("");
  }
});
~~~

Aquí podemos ver que lanzamos el cambio de mensaje cada vez que se produce una modificación sobre el campo `input`. Si bien podemos hacerlo en cualquier momento.

## Deshabilitar Validaciones[![Deshabilitar Validaciones][Marker]{:class="marca"}](#deshabilitar-validaciones)
Ya hemos visto cómo aprovecharnos al máximo de las validaciones automáticas de [HTML5][HTML5] y de cómo podemos personalizarlas mediante el **API de Validaciones de Formularios**. Si bien puede darse el caso de que no nos interese que estas validaciones se ejecuten. En este caso podemos deshabilitar las validaciones del formulario mediante el atributo `novalidate` a nivel de formulario.

~~~html
<form action="#" novalidate>
  <label for="nombre">¿Cómo te llamas?:</label>
  <input type="text" name="nombre" id="nombre" required/>
  <input type="submit" value="Enviar">
</form>
~~~

El atributo `novalidate` dentro del elemento `form` deshabilitara todos los controles del formulario.


[Marker]: {{site.baseurl}}/img/marker.png
[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[Javascript]: http://www.manualweb.net/javascript/
[JavascriptRegExp]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
[InputNumber]: {{site.baseurl}}/html5/formularios-elementos-input/#input-number
[ImagenInputRequired]: {{site.baseurl}}/html5/img/input-required.png
[ImagenErrorPattern]: {{site.baseurl}}/html5/img/input-pattern.png
[ImagenErrorPatternTitle]: {{site.baseurl}}/html5/img/input-pattern-title.png
[ImagenErrorMinLength]: {{site.baseurl}}/html5/img/input-minlength.png
