---
title: WebStorage
permalink: /html5/webstorage/
---

El **API WebStorage** nos permite almacenar elementos clave/valor de una forma sencilla en la memoria del navegador y que estos elementos estén disponibles a lo largo de la sesión de un usuario. Esto nos evita la necesidad de utilizar **cookies**.

Tenemos dos tipos de almacenamiento en los navegadores:

* sessionStorage
* localStorage

### sessionStorage
Mantiene un área de almacenamiento para cada uno de los sites mientras dure la sesión del navegador. Es decir, mientras el navegador permanezca abierto. El objeto que lo maneja es `window.sessionStorage`.

### localStorage
Funciona igual que el sessionStorage pero con la diferencia de que los datos persisten incluso después de cerrar el navegador. El objeto que lo maneja es `window.localStorage`.


## Objeto Storage
Cuando invocamos a cualquiera de los dos tipos de almacenamiento lo que se crea es un objeto `Storage`. Sobre el objeto `Storage` es dónde podremos almacenar, recuperar o borrar los elementos de la caché.

Con el objeto `Storage` podemos hacer múltiples operaciones que vemos a continuación:

### Tamaño de la Storage
Si queremos saber cuál es el tamaño del almacenamiento, es decir, cuántos valores hay almacenados, lo que tenemos es que trabaja con la variable `.length`. Esta variable nos devuelve un número con el tamaño.

~~~javascript
console.log("Tamaño Storage:" + localStorage.length);
~~~

### Añadir un elemento al Storage
Para añadir un elemento al `Storage` utilizamos el método `setItem()`. El método `setItem()` recibe dos parámetros, por un lado el nombre de la clave y por otro al valor que queremos asociar a la clave.

~~~javascript
localStorage.setItem('clave','valor');
~~~

De esta forma podemos crear algunas claves:

~~~javascript
localStorage.setItem('color','rojo');
localStorage.setItem('ancho',12);
~~~

### Recuperar un elemento al Storage
Una vez que tengamos claves en nuestra `Storage` podremos recuperar sus valores mediante el nombre de la clave utilizando el método `getItem`.

~~~javascript
localStorage.getItem('clave');
~~~

Así, si queremos recuperar las claves almacenadas anteriormente podemos hacerlo de la siguiente forma:

~~~javascript
console.log(localStorage.getItem('color'));
console.log(localStorage.getItem('ancho'));
~~~

### Eliminar un elemento al Storage
Todo elemento almacenado en la `Storage` puede ser eliminado de la misma utilizando el método `removeItem` recibiendo el nombre de la clave como parámetro.

~~~javascript
localStorage.removeItem('clave');
~~~

Vamos a eliminar la variable *'color'* que habíamos creado anteriomente de la siguiente manera:

~~~javascript
localStorage.removeItem('color');
~~~

### Vaciar la Storage
Si queremos ser más drásticos y lo que queremos es eliminar todo el contenido de la `Storage` recurriremos al método `clear`. El método `clear` elimina todo el contenido que exista en la `Storage`.

~~~javascript
localStorage.clear();
~~~

### Claves de los elementos de la Storage
Si desconocemos los nombres de las claves que se han insertado en la `Storage` lo que haremos será recurrir al método `key()` que nos devuelve el nombre de la clave de la posición pasada como parámetro.

~~~javascript
localStorage.key(numero);
~~~

Podemos recuperar la clave que está en la segunda posición de la siguiente forma:

~~~javascript
localStorage.key(1);
~~~

O podemos recuperar todas las claves y valores:

~~~javascript
for (var x=0; x<localStorage.length;x++) {
  console.log(localStorage.key(x) + "=" + localStorage.getItem(localStorage.key(x)));
}
~~~

> El funcionamiento con `sessionStorage` es exactamente el mismo ya que de igual manera utiliza un objeto `Storage`. Así que puedes cambiar el valor `localStorage` por `sessionStorage` y funciona igual.

## StorageEvent
Cuando se produce un cambio en la `Storage` tenemos la capacidad de avisar a otros documentos del dominio mediante el `StorageEvent`. Este evento es lanzado cada vez que hay un cambio en el `Storage` y es gestionado por otros documentos diferentes a dónde se produce el cambio.

Podemos controlar el evento `StorageEvent` de la siguiente forma:

~~~javascript
window.addEventListener('storage', function(e){
  ...
}, false);
~~~

Los atributos que recibiremos en el evento y a los que tendremos acceso son:

### key
Es una cadena con el nombre de la clave del `Storage` que ha cambiado.

### newValue
Es una cadena con el valor nuevo que se le ha asignado a la clave.

### oldValue
Es una cadena con el valor original que tenía la clave.

### url
Es una URI con la localización del documento que ha efectuado el cambio.

### storageArea
El un objeto DOM que representa el valor que ha sido modificado.

De esta manera podemos capturar toda la informacion de un `StorageEvent` de la siguiente forma:

~~~javascript
window.addEventListener('storage', function(e){
  console.log(e.key);
  console.log(e.oldValue);
  console.log(e.newValue);
  console.log(e.url);
  console.log(JSON.stringify(e.storageArea));
}, false);
~~~
