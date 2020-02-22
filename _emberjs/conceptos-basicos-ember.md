


## Conceptos Básicos en Ember



![Conceptos Básicos de Ember](https://raw.githubusercontent.com/victorcuervo/manualweb/master/ember/images/ember-core-concepts.png)



### URL

### Router y Router Handler
Cada vez que un usuario pone una URL, [Ember][1] encamina la petición hacía un **Router Handler**.

En el **Router Handler** se realizan dos cosas:

1. Cargar un modelo para poder ser utilizado por la plantilla.
2. Renderizar la plantilla



### Template
Son utilizados por [Ember][1] para renderizar el contenido de la pantalla en HTML.

Las plantillas o templates son códigos [HTML][5] dentro de los cuales podemos encontrar propiedades. Las propiedades se definen mediante dobles llaves.

<pre lang="html4strict">{{variable}}</pre>

Cuando invocamos a la plantilla le pasaremos el valor de estas propiedades.

La tecnología que utiliza [Ember][1] para las plantillas es [Handlebars][5].

### Modelos
El modelo representa el estado persistente de los datos.

Un modelo típicamente persiste información en el servidor web, aunque los modelos pueden ser configurados para guardar la información en cualquier otro sitio, por ejemplo en la caché del navegador.

### Component
Las plantillas nos permiten definir la interface gráfica para el usuario, mientras que los componentes controlar cómo se comporta el interface para el usuario.

Los componentes se dividen en dos partes: una plantilla definida con [Handlebars][6] y un fichero [Javascript][7] en el que se define el comportamiento del componente.


-----
[1]: http://www.manualweb.net/tutorial-ember/
[2]: https://babeljs.io/
[3]: https://nodejs.org/es/
[4]: https://www.npmjs.com/
[5]: http://www.manualweb.net/tutorial-html/
[6]: http://handlebarsjs.com/
[7]: http://www.manualweb.net/tutorial-javascript/
