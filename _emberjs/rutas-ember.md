

## Rutas Ember

Para crear una ruta deberemos de escribir el siguiente comando:

<kbd>$ember g route [nombre-ruta]</kbd>

Por ejemplo podríamos crear la ruta "saludo"

<kbd>$ember g route about</kbd>

<pre>installing route
  create app/routes/about.js
  create app/templates/about.hbs
updating router
  add route about
installing route-test
  create tests/unit/routes/about-test.js</pre>

Cuando ejecutamos la creación de la ruta, esta crea 3 ficheros:

* Una entrada en las rutas de Ember, dentro del fichero <code>/app/routes.js</code>
* Un fichero que contiene la ruta en <code>/app/routes/[nombre-ruta].js</code>
* Una plantilla asociada a la ruta en <code>/app/templates/[nombre-ruta].hbs</code>

Estos ficheros serán los que gestionen la navegación cuando el usuario acceda a <code>/[nombre-ruta]</code>


### Ruta Índice

Para crear la ruta que gestione la raíz de la aplicación deberemos de crear la ruta index.

<kbd>$ember g route index</kbd>

Cuando creamos esta ruta, una de las cosas que sucede es que no se modifica el manejador de rutas <code>/app/routes.js</code>, es decir, no se crea ninguna entrada.

### Index Route Handler

router lifecycle hook que se llama <code>BeforeModel</code>


La ruta tiene un ciclo de vida y varios puntos de extensión o hooks. Estas extensiones son funciones las cuales son invocadas durante el proceso de carga de la página.

En el caso de la extensión <code>BeforeModel</code> es ejecutada antes de que los datos sean recuperados del modelo y antes de que la página sea renderizada.

Podemos utilizar el método <code>.replaceWith)()</code> para cambiar la ruta que se carga cuando llamamos al manejador de la ruta índice.

<pre>import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('rentals');
  }
});</pre>





------
[]Crear un manejador para redireccionar al index
[]Crear un menú superior manejando la plantilla application.hbs y la sentencia {{outlet}}










-----
[1]: http://www.manualweb.net/tutorial-ember/
[2]: https://babeljs.io/
[3]: https://nodejs.org/es/
[4]: https://www.npmjs.com/
[5]: http://www.manualweb.net/tutorial-html/
[6]: http://handlebarsjs.com/
[7]: http://www.manualweb.net/tutorial-javascript/
[8]: https://bower.io/
[9]: http://www.manualweb.net/tutorial-bootstrap/
[10]: http://www.manualweb.net/tutorial-css/
