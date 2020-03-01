---
title: ¿Qué es JSX?
permalink: /reactjs/que-es-jsx/
---

JSX es una extensión sintáctica de [Javascript][Javascript] para poder escribir [HTML][HTML]/XML junto el código [Javascript][Javascript]/[ReactJS][ReactJS].

Este código es utilizado por [compiladores Javascript como Babel][Babel] para acabar generando objetos puramente [Javascript][Javascript].

Por ejemplo podemos definir una variable en JSX.

~~~javascript
const elemento = <h1>Hola Mundo</h1>;
~~~

Podemos ver que esto no es una cadena [Javascript][Javascript] ni tampoco código [HTML][HTMl].

JSX nos permite declarar interfaces de usuario mediante elementos [HTML][HTML] pero en lenguaje [Javascript][Javascript]. Podría recordar a algunos lenguajes en los que se definen plantillas HTML que se van rellenando.

JSX nos va a permitir definir de forma completa un componente, tanto su parte visual como su comportamiento.

El elemento JSX definido anteriormente lo podemos renderizar en nuestra aplicación [ReactJS][ReactJS]:

~~~javascript
const elemento = <h1>Hola Mundo</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
~~~


[ReactJS]: {{site.baseurl}}/reactjs/ 
[HTML]: {{site.baseurl}}/html/
[Javascript]: {{site.baseurl}}/javascript/
[Babel]: https://babeljs.io/
