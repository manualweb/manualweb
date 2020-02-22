## El modelo en Ember

En [Ember][1] los Router son los encargados de cargar el modelo con los datos para que luego pueda ser utilizado por la página.

Los datos se cargan en una función llamada <code>model()</code>. La función <code>model()</code> funciona como un hook, de tal manera que puede ser llamada en diferentes momentos en la ejecucion de nuestra aplicación.

En este caso vamos a llamar a la función <code>model()</code> en un Router, esta función devuelve un array de elementos JSON.

<pre lang="javascript">import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    return [{
      name:'Nirvana',
      song:'Smell like Teen Spirit'
    },
    {
      name:'R.E.M.',
      song:'Man on the Moon'
    },
    {
      name:'Radio Head',
      song:'Karma Police'
    }];

  }

});

</pre>


En este momento la template de la página va a tener a su disposición un objeto <code>model</code> el cual contiene los datos cargados en el modelo.

Si queremos mostrar los datos del modelo simplemente tendremos que recorrerlo en el template.

<pre lang="html4strict">{{#each model as |singer|}}
    <h3>{{singer.name}}</h3>
    <div>
      <span>Song:</span> {{singer.song}}
    </div>    
{{/each}}</pre>

Vemos que cada entrada del modelo se deja en un objeto <code>singer</code>, y para acceder a sus propiedades utilizamos el punto.




------
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
