

## Test en Ember




Test de aceptación de Ember

Ember utiliza QUnit



Los test de aceptación son aquellos que interactuan con la aplicación como si lo estuviese haciendo una persona, pero de una forma automática.

De esta manera podemos estar comprobando constantemente la integridad de la aplicación aunque se esté cambiando el código.


### Crear un test de aceptación

Para poder crear un test de aceptación deberemos de utilizar el comando

<kbd>$ember g acceptance-test [ruta]</kbd>

Dónde <code>ruta</code> es la ruta sobre la que queremos crear los test de aceptación. Este comando nos creará un test de aceptación en la carpeta:

<samp>test/acceptance/[vista]-test.js</samp>


### Definir el test
Para definir el test nos apoyamos en el método <code>test</code>, este método tiene una descripción del test de aceptación que se va a ejecutar y una función que recibe un objeto <code>assert</code>, el cual utilizaremos para las validaciones.


Los test se configuran llamando al método <code>moduleForAcceptance</code>. Esta función se encarga de arrancar y parar Ember después de ejecutar los test.

#### Métodos

* **visit()**, para simular una navegación a una página.
* **andThen()**, espera a la ejecución de funciones previas en el test para acabar ejecutando un conjunto de valdiaciones..
* **currentURL()**, devuelve la URL actual.
* **click()**, simula un click del usuario.

<pre lang="javascript">click('a:contains("About")');</pre>

Mediante el código <code>a:contains()</code> lo que hace es localizar el enlace de la página que contiene dicho enlace para poder simular el click.


#### Objeto Assert
<code>Assert</code> es un objeto de QUnit que nos permite realizar validaciones sobre condiciones. Algunos método de <code>assert</code> son:

 * **equal()** para chequear una condición de igualdad.


Un ejemplo de código sería navegar a la página principal y ver si realmente se ha cargado.

<pre lang="javascript">test('se carga la página principal', function(assert){
  visit('/');
  andThen(function(){
      assert.equal(currentURL(),'/home');
  });
});</pre>


##### Uso de CSS Selectors
Una de las cosas que podemos utilizar en el método <code>.equals()</code> es el uso de selectores CSS. Para ello tenemos la función <code>find()</code> a la cual la pasamos como parámetro un selector.

<pre lang="javascript">
assert.equal(find('.listing').length, 3, 'Tiene 3 elementos');</pre>


### Test para componentes
Hay **Component Integration Test** que prueban el ciclo de vida completo de un componente.

El test se genera cuando generamos un componente.

#### Crear objetos ficticios
Para la prueba del componente podemos crear componentes ficticios. Para ello vamos a utilizar la función <code>create()</code> de [Ember][1].

<pre lang="javascript">Ember.Object.create();</pre>

Por ejemplo podríamos crear el objeto cantante de la siguiente forma:

<pre lang="javascript">let singer = Ember.Object.create({
  name: 'nombre-test',
  song: 'canción-test'  
});</pre>

Dentro del ámbito del test podemos crear una variable que almacene dicho test.

<pre lang="javascript">this.set('nombreModelo', modelo);</pre>


#### Función render()
La función <code>render()</code> permite renderizar un componente de la misma forma a la que se hace dentro de un template.

<pre>this.render(hbs`{{nombreComponente modelo=nombreModelo}}`);</pre>

* **$()**, mediante la función <code>$()</code> podemos acceder a los selectores de la página, de esta forma obtendremos el objeto relativo a dicho objeto.

Por ejemplo:

<pre>this.$('.image').click();</pre>

Buscaría un objeto que correspondiese con el selector <code>.image</code> y ejecutaría un click sobre él.

U otro ejemplo sería:

<pre>this.$('h3').text()</pre>

Recuperaría el texto de un elemento <code>h3</code>.



### Ejecutar test

Para ejecutar los test de [Ember][1] escribimos lo siguiente:

<kbd>ember test --server</kbd>

Podemos ver el restultado de los test en el navegador mediante la URL http://localhost:7357/


Lo que se ejecuta es QUnit y [PhantomJS](http://phantomjs.org/) en Google Chrome mediante [Testem Test Runner](https://github.com/testem/testem)



Pendiente de seguir.... https://guides.emberjs.com/v2.12.0/tutorial/acceptance-test/





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
