## Componentes en Ember

### ¿Qué es un componente en Ember?



### Construir un componente Ember
Para poder construir un componente en Ember lo primero que haremos será ejecutar el siguiente comando para que nos cree la estructura:

<kbd>ember g component [nombre-componente]</kbd>

Esto nos generará varios archivos:

* **Comportamiento Componente**, un fichero [Javascript][7] que define el comportamiento del componente. Lo dejará en <samp>app/components/[nombre-componente].js</samp>
* **Plantilla Componente**, una plantilla para el componente, la cual nos la dejará en
<samp>app/templates/components/[nombre-componente].hbs</samp>
* **Test Componente**, un fichero [Javascript][7] para implementar los test del componente. Que lo dejará en <samp>tests/integration/components/[nombre.ccomponente]-test.js</samp>

### Invocar a un componente
Los componentes los podremos invocar desde las plantillas, para ello deberemos de escribir el siguiente código:

<pre>{{nombre-componente modelo=DatoModelo}}</pre>

Lo que vemos es que simplemente es poner el nombre del componente entre dobles llaves. Como propiedad se le pasa el dato del modelo que vaya a utilizar dentro del componente.


### Acciones en un componente
Las acciones es una forma de interactuar desde el componente con el usuario.

Para poder definir una acción deberemos de definir la estructura <code>actions</code> dentro del **comportamiento del componente**.

El código será el siguiente:

<pre lang="javascript"> actions: {
  nombreAccion() {
    // Código
  }
}</pre>

Ya podremos utilizar esta función dentro de la **plantilla del componente** nuevamente con una estructura <code>action</code> de la siguiente forma:

<pre lang="html4strict"><a {{action 'nombreAccion'}}></a></pre>




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
