---
title: DataList
permalink: /html5/formularios-datalist/
---
Una de las mejoras que aparece en los formularios [HTML5][HTML5] es la posibilidad de incluir opciones de selección mediante un nuevo elemento denominado `datalist`.

La idea es que mediante el elemento `datalist` podamos **definir una lista de valores**. Esta lista de valores será posteriormente asociada a otro elemento del formulario mediant el atributo `list`.

La estructura del elemento `datalist` es la siguiente:

~~~html
<datalist id="miLista">
  <option>Opción 1</option>
  <option>Opción 2</option>
  <option>Opción 3</option>
  <option>Opción 4</option>
  ...
  <option>Opción N</option>        
</datalist>
~~~

Vemos que cana uno de los datos de la lista se define mediante un elemento de tipo `option`.

La lista la asociaremos a los elementos de tipo `input` con el valor dado en el `id` sobre el atributo `list`.

~~~html
<input type="text" name="lista" id="lista" list="miLista">
~~~

De esta manera podríamos definir una lista de ciudades:

~~~html
<datalist id="ciudades">
  <option>Ávila</option>
  <option>Burgos</option>
  <option>León</option>
  <option>Palencia</option>
  <option>Salamanca</option>
  <option>Segovia</option>
  <option>Soria</option>
  <option>Valladolid</option>
  <option>Zamora</option>
</datalist>
~~~

Y posteriomente asociadala a un campo de texto:

~~~html
<input type="text" name="castillaleon" id="castillaleon" list="ciudades">
~~~

## DataList con texto y valor
Ya hemos visto el uso básico de un **DataList** ahora vamos a ver cómo podemos hacer algo más avanzado. En este caso vamos a vr cómo podemos crear una lista de elementos dónde haya dos partes, por un lado el texto que inserta o elige el usuario y por otro el valor que tiene dicho elemento.

Para poder hacer esto, dentro de los elementos `option` deberemos de utilizar los atrobutos `value` para poder dar el valor y `label` para darle la etiqueta de texto que se mostrará.

~~~html
<datalist id="miLista">
  <option label="Texto 1" value="Valor 1"></option>
  <option label="Texto 2" value="Valor 2"></option>
  <option label="Texto 3" value="Valor 3"></option>
  ...
  <option label="Texto N" value="Valor N"></option>      
</datalist>
~~~

Podemos utilizar los campos de texto y valor de un **DataList** de la siguiente forma:

~~~html
<datalist id="listaurls">
 <option value="http://lineadecodigo.com" label="Línea de Código">
 <option value="http://www.manualweb.net" label="Manual Web">
 <option value="http://www.dudasprogramacion.com" label="Dudas de Programación">
 <option value="http://www.w3api.com" label="W3Api">
</datalist>
<input type="url" id="misurl" list="listaurls" />
~~~

## Compatibilidad del elemento DataList
El elemento `datalist` es relativamente nuevo y puede darse el caso de que nos encontremos con un navegador -sobre todo los antiguos- que no soporte dicho elemento. En este caso podemos apoyarnos en el elemento `select` que ya da de por sí una lista de opciones.

Así podemos combinar el uso de los elemento `datalist` y `select` de la siguiente forma:

~~~html
<datalist id="miLista">
  <label for="elemento">Selecciona un elemento de la lista:</label>
  <select id="elementos" name="elementos">
    <option>Opción 1</option>
    <option>Opción 2</option>
    <option>Opción 3</option>
    <option>Opción 4</option>
    ...
    <option>Opción N</option>   
  </select>     
</datalist>
~~~

Los navegadores que den soporte al elemento `datalist` directamente ignorarán el elemento select y no lo pintarán.

Siguiendo esta estructura podríamos tener el siguiente código de compatibilidad:

~~~html
<label for="misurl">Dinos tu URL:</label>
<input type="url" id="misurl" list="listaurls" />
<datalist id="listaurls">
  <label for="elemento">O eligela de la siguiente lista:</label>
  <select id="elementos" name="elementos">
    <option value="http://lineadecodigo.com" label="Línea de Código">
     <option value="http://www.manualweb.net" label="Manual Web">
     <option value="http://www.dudasprogramacion.com" label="Dudas de Programación">
     <option value="http://www.w3api.com" label="W3Api">
   </select>
</datalist>
~~~

[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
