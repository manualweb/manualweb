---
title: Introducción EmberJS
permalink: /emberjs/introduccion-emberjs/
---



Lo primero es instalar el EmberJS CLI lo cual nos proporciona tener el comando ember en local.

Podemos ejecutar:


<kbd>$ember new ember-quickstart</kbd>

Lo que hace es crear un directorio \ember-quickstart el cual contiene:

* Servidor de Desarrollo
* Template Compilation
* Javascript y CSS Minificados
* Características ES2015 vía [Babel][2].

Lo siguiente que haremos será arrancar el servidor de ember.

<kbd>$ember server</kbd>

En pantalla veremos lo siguiente:

<samp>Livereload server on http://localhost:49152
Serving on http://localhost:4200/</samp>


## Crear un template
Para crear un template ejecutamos

<kbd>$ember generate template application</kbd>


## Definir una ruta

Una ruta son ¿las páginas de una aplicación?

Para crear una ruta ejecutamos el siguiente comando:

<kbd>$ember generate route scientists</kbd>

Lo que habremos creado será:

1. Un template que se mostrará en la ruta <kbd>/scientists</kbd>, el template está en <kbd>app/templates/scientists.hbs</kbd>
2. Un objeto Route que recupera el modelo usado en el Template
3. Una entrada en el fichero de rutas de la aplicación <kbd>app/routes.js</kbd>
4. Un Unit Test para este Route

Podemos modificar el template scientists.hbs y añadirle nuevo contenido.

http://localhost:4200/scientists

En esta URL tendremos la nueva página.


### Modelos

Lo que vamos a hacer es definir un modelo para la ruta que acabamos de crear

La ruta se encuentra en <kbd>app/routes/scientists.js</kbd>


~~~javascript
export default Ember.Route.extend({
  model() {
   return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
 }
});
~~~

El método <code>model()</code> devuelve la información que puede ser renderizada en la plantilla.

Así aquí podríamos recuperar información de forma asíncrona, por ejemplo, utilizando Javascript Promises.


Ahora podemos modificar nuestra plantilla para recorrer el contenido del modelo

~~~
<ul>
  {{#each model as |scientist|}}
    <li>{{scientist}}</li>
  {{/each}}
</ul>
~~~

Hemos utilizado el elemento <code>each</code> para recorrer los elementos del modelo.

## Crear un componente UI

La idea es poder crear componentes que puedan ser reutilizados dentro de varias páginas o en la misma página.

[Ember][EmberJS] nos permite crear componentes que sean reutilizables.

Para crear un componente utilizamos el siguiente comando:

<kbd>$ember generate component people-list</kbd>

En este caso creamos un componente llamado <code>people-list</code>.

La plantilla del componente la podemos encontrar en app/templates/components/people-list.hbs

~~~
<h2>{{title}}</h2>

<ul>
  {{#each people as |person|}}
    <li>{{person}}</li>
  {{/each}}
</ul>
~~~

Dentro de la plantilla utilizamos la variable <code>title</code> la cual reemplazaremos cuando invoquemos al componente.

Además se utiliza de forma genérica con la sentencia <code>each</code> las variables people y person.

Para poder utilizar el componente simplemente lo podemos hacer indicando su nombre mediante corchetes.

Además indicaremos el valor de las variables como atributos.

~~~
{{people-list title="List of Scientists" people=model}}
~~~

## Compilar para producción

Para poder preparar una aplicación para producción deberemos de ejecutar el comando build

<kbd>$ember build --env production</kbd>

Este comando empaqueta todos los elementos necesarios para la aplicación: javascript, plantillas, css, web-fonts, imágenes,...

Al ejecutarlo para un entorno de producción obtendremos un paquete optimizado que lo encontraremos en el directorio <kbd>/dist</kbd>





-----
[EmberJS]: http://www.manualweb.net/emberjs/
[2]: https://babeljs.io/

---- Ejemplos
[LDC] Hola Mundo en Ember
[LDC] Crear una plantilla en Ember
[LDC] Crear una ruta en Ember
[LDC] Crear un componente en Ember
[AUL] Desplegar aplicaciones Ember
