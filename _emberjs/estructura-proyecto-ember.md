### Estructura Proyecto Ember
El comando new nos habrá creado la estructura básica del proyecto.

<pre>|--app
|--config
|--public
|--node_modules
|--tests
|--vendor

bower.json
ember-cli-build.js
package.json
README.md
testem.js</pre>

Pero, ¿qué encontramos en cada uno de estos directorios?

#### App
Es el directorio en el que tendremos la aplicación propiamente dicha: plantillas, componentes, modelos, rutas, css,...

#### bower.json
Ember utiliza a [Bower][8] como gestor de dependencias. Se utiliza para indicar las dependencias que tendremos en la parte de front-end.

Todos los componentes [Bower][8] se instalan en el directorio **bower_components**.

Un ejemplo de dependencia que podemos tener en la parte de front-end sería la de la librería [Bootstrap][9].

#### config
El directorio config contiene el fichero <code>enviroment.js</code> en el que podemos configurar las settings de la aplicación.

####  node_modules/package.json
Este fichero es utilizado por el gestor [npm][4] y es el gestor de paquetes de [Node.js][3]. Los módulos de [Node.js][3] son utilizados por [Ember][1].

Todos los paquetes utilizados se instalarán en el directorio <code>node_modules</code>.

#### public
Es el directorio que contiene elementos públicos de la aplicación como imágenes y fuentes.

#### vendor
En este directorio almacenaremos aquellas dependencias de [hojas de estilo CSS][10] o [Javascript][7] que no sean gestionados por [Bower][8]

#### tests/testem.js
El directorio <code>test</code> contendrá todos los test de nuestra aplicación. El fichero <code>testem.js</code> será el que configure el cliente que ejecuta los test, <code>testem</code>.

#### ember-cli-build.js
Es el fichero que indica cómo se debe de construir una aplicación.


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
