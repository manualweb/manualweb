---
title: History API
permalink: /html5/history-api/
---

Aunque ya llevaba tiempo el objeto `history` dentro del DOM de los documentos [HTML][HTML], la llegada de [HTML5][HTML5] refuerza su uso y le incluye nuevos métodos para poder manipularlo.

Pero vayamos viendo poco a poco qué es el **History API** y como podemos manipular el historial de navegación mediante el objeto `history`.

## Operaciones Básicas History API

Lo primero que tenemos que saber es que el historial de navegación es una lista de páginas sobre la que nos podemos mover. Esta lista está compuesta por las últimas páginas web que hayamos visitado.

Por lo tanto, podemos movernos por ella hacia delante, hacía atrás o a un punto en concreto. Siempre teniendo en cuenta que partiremos en la última posición de la lista.

### Moverse por el historial
Si querermos movernos por el **History API** de forma sencilla vamos a tener dos métodos: `back()` y `forward()`.

Mediante el método `back()` vamos a movernos hacía atrás en el historial. Bastará con escribir:

~~~javascript
window.history.back();
~~~

Para poder ir a la última página que visitó el usuario con el navegador. Es el mismo efecto que si el usuario pulsase sobre el botón de atrás.

En el caso de que queramos ir adelante en el hitorial deberemos de utilizar `forward()`. En este caso deberemos de escribir:

~~~javascript
window.history.forward();
~~~

Para poder ir a la siguiente página que visitó el usuario. Es el mismo efecto que si el usuario pulsase sobre el botón de adelante en el navegador.

### Ir a una posición concreta del historial
Si no queremos hacer movimiento lineales sobre el historial podemos hacer un movimiento a un punto en concreto del historial. En este caso deberemos de apoyarnos en el método `go()`. El método `go()` recibe como parámetro la posicines sobre las que nos queremos mover. Es decir, si el número es positivo nos moveremos tantas posiciones adelante como indique el método y si es negativo nos moveremos tantas posiciones atrás como indique el número (en positivo) del método.

La sintaxis del método `go()` es:

~~~javascript
window.history.go(numero);
~~~

Así podemos movernos dos posiciones adelante de la actual:

~~~javascript
window.history.go(2);
~~~

O, por ejemplo, movernos tres posiciones hacía atrás de la posición actual:

~~~javascript
window.history.go(-3);
~~~

De esta forma hay una similitu de métodos entre:

~~~javascript
window.history.go(1);  // window.history.forward();
window.history.go(-1); // window.history.back();
~~~

### Número de elementos del historial
Una cosa importante a la hora de movernos por el historial mediante el **History API** es saber cuántos elementos hay almacenados en el historial. Esto lo obtendremos mediante la propiedad  `.length`:

~~~javascript
window.history.length;
~~~

### Gestionar Estados History API
Cuando se pensó inicialmente el objeto `history` se trabajaba con la hipótesis de que cada nueva navegación, y por lo tanto carga de página, iba a suponer un nuevo estado dentro del historial. Pero con la aparición de las técnicas [AJAX][AJAX] (Asynchronous Javascript and XML) llegaron las cargas parciales de las páginas o las modificaciones de los elementos del DOM para proporcionar una experiencia más rica de visualización al usuario.

Es decir, el usuario estaba navegando, pero su historial de navgeación no cambiaba. Por lo cual, si el usuario, habituado a manipular los botones del navegador, realizaba alguna navegación, alteraba por completo la navegación de la aplicación que usaba patrones [AJAX][AJAX].

Es por ello que en [HTML5][HTML5] se incrementan las funcionalidades del **History API** y se añade la gestión de estados. De esta forma, cuando se produce una navegación dentro de una aplicación [AJAX][AJAX] podemos introducir un nuevo estado dentro del historial y así paliar los efectos colaterales que se producen al navegar por el historial.

Estas capacidades de gestión de estados en el **History API** junto con la gestión de los anclas o hash (#) en la URL de la página, permitía que se hiciera una gestión de navegación en aplicaciones [AJAX][AJAX] satisfactoria.

Si queremos saber información del estado en el que se encuentra el historial nos bastará con escribir:

~~~javascript
console.log(JSON.stringify(history.state));
~~~

### Modificar entradas en el historial
Si queremos modificar los estados dentro del **History API** tenemos dos métodos: `pushState()` para incluir un nuevo estado y `replaceState()` para reemplazar un estado ya existente.

#### pushState()
El método que nos permite añadir un nuevo estado es `pushState()`. La estructura de `pushState()` es la siguiente:

~~~javascript
history.pushState(objeto_estado, título, URL);
~~~

Dónde ***objeto_estado*** es un objeto [Javascript][Javascript] que representa la información del estado que queremos guardar. Cuando navegemos hacía este estado, el evento que gestiona un cambio en el historial disponibilizará esta información. Así en este objeto deberemos de guardar todo aquello que necesitemos para poder recuperar mediante técnicas [AJAX][AJAX] la representación visual asociada al estado.

Algunos navegadores tiene la limitación de 640Kb de serialización de los objetos que deberemos de tener en cuenta.

El atributo ***titulo*** representa el título asociado al estado. Y por último, el atributo ***URL*** es la url que se insertará en el hsitorial de navegación, por lo tanto debe de existir dicha URL y puede expresarse de forma relativa o absoluta. Es importante saber que el navegador no cargará la URL cuando ejecutemos un `pushState()`.

Así, podemos crear un nuevo estado con el **History API** de la siguiente forma:

~~~javascript
history.pushState({ pagina: "1" }, "Título 1", "state.html#p1");
~~~

Vemos que tenemos un objeto [Javascript][Javascript] en el que solo hemos guardado una propiedad, pero sobre el que podríamos guardar toda la información que se necesite:

~~~javascript
{ pagina: "1" }
~~~

#### replaceState()
Otro método que tenemos para modificar los estados del historial es `replaceState()`. Mediante el método `replaceState()` podremos modificar la información asociada al estado actual que tengamos en el historial.

La estructura del método `replaceState()` es:

~~~javascript
history.replaceState(objeto_estado, título, URL);
~~~

Dónde ***objeto_estado*** es el nuevo estado a aplicar, ***título*** el nuevo título a aplicar y ***url*** la nueva URL.

Así, podríamos cambiar el estado actual ejecutando el método `replaceState()` de la siguiente forma:

~~~javascript
history.pushState({ pagina: "2" }, "Título 2", "state.html#p2");
~~~

### Gestionar eventos sobre el historial
Lo último que tenemos que saber en la gestión de estados dentro del **History API** es que cuando el usuario navega por el historial, ya sea mediante los métodos `bakc()`, `forward()`, `go()` o con los botones del navegador, se genera un evento `onpopstate`.

Controlando el evento `onpopstate` podremos realizar las acciones sobre el estado en el que está el navegador. Ya que dicho evento llevará asociado el estado como valor.

Podemos controlar el evento `onpopstate` de la siguiente forma:

~~~javascript
window.onpopstate = function(event) {};
~~~

Así si, por ejemplo, queremos volvar el contenido del estado que se ha quedado al navegar escribiremos lo siguiente:

~~~javascript
window.onpopstate = function(event) {
    console.log(JSON.stringify(event.state));
  };
~~~


[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[AJAX]: http://www.manualweb.net/ajax/
[Javascript]: http://www.manualweb.net/javascript/
