## Handlebars Helpers

Cuando los modelos de datos de nuestra aplicación [Ember][1] van creciendo, vamos a necesitar manipular los datos antes de mostrárselos al usuario.

Para ello [Ember][1] nos ofrece los **Handlebars Template Helpers**, los cuales nos ayudan a "decorar" los datos dentro del modelo.

Al final lo que tenemos es una función que transforma un dato del modelo en otro dato.

Para crear un Helper tendremos que ejecutar el siguiente comando:

<kbd>ember g helper [nombre-helper]</kbd>

Esto nos creará un Helper y un test asociado a dicho Helper en las siguiente rutas:

<samp>app/helpers/[nombre-helper].js
tests/unit/helpers/[nombre-helper]-test.js</samp>


La función con el helper que se nos crea es la siguiente:

<pre lang="javascript">import Ember from 'ember';

export function [nombreHelper](params/*, hash*/) {
  return params;
}

export default Ember.Helper.helper([nombreHelper]);</pre>


Esta la podremos utilizar en las plantillas, simplemente indicando el nombre del helper y pasándole un atributo del modelo para que pueda convertirlo.

En la template quedaría de la siguiente forma:

<pre lang="html4strict">{{[nombre-helper] datos-modelo}}</pre>

Al helper le podemos enviar uno o varios datos.

<pre lang="html4strict">{{[nombre-helper] dato1-modelo dato2-modelo ... datoN-modelo}}</pre>

### Ejemplo de Helper

Partimos de un modelo en el que tenemos a nuestros cantantes












------------
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
[11]: https://emberobserver.com/
