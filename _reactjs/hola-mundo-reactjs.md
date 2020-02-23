---
title: Hola mundo en ReactJS
permalink: /reactjs/hola-mundo-reactjs/
---

Para poder crear tu **Hola mundo en ReactJS** simplemente necesitas un editor de texto con el cual poder codificar tu aplicación [ReactJS][ReactJS].

Lo primero que tienes que hacer es cargar el [framework React][ReactJS] para ello deberás de cargar dos librerías [Javascript][Javascript]: `react` y `react-dom`.

Si estás en un entorno de desarrollo deberás de hacerlo de la siguiente forma:

~~~html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
~~~

En el caso de ser un entorno de producción serán:

~~~html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
~~~

Lo siguiente será **definir un elemento DOM que será el contenedor en el cual volcaremos los [componentes ReactJS][ComponentesReactJS]** que vayamos creando.

Este elemento DOM puede ser una simple capa `div`.

~~~html
<div id="root"></div>
~~~

Es importante el valor que demos al atributo `id` ya que será el que utilicemos para renderizar nuestro componente sobre él.

Para renderizar el componente y que aparezca en nuestra página vamos a utilizar el método `ReactDOM.render()` el cual recibe como parámetros el componente (o contenido [HTML][HTML]) y por otro el objeto DOM de la página sobre el que vamos a volcar el contenido.

En este caso creamos un texto dentro de un [elemento header h1][h1] en el que ponga *Hola Mundo*.

Así nuestra invocación al método `ReactDOM.render()` se hará de la siguiente manera:

~~~javascript
ReactDOM.render(
  "<h1>Hola Mundo</h1>",
  document.getElementById('root')
);
~~~

De esta forma ya tendremos terminado nuestro **Hola Mundo en ReactJS**.

[ReactJS]: {{site.baseurl}}/reactjs/
[Javascript]: {{site.baseurl}}/javascript/
[HTML]: {{site.baseurl}}/html/
[ComponentesReactJS]: {{site.baseurl}}/reactjs/componentes-reactjs/
[h1]: {{site.baseurl}}/html/texto-basico-html/
