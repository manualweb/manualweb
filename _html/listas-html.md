---
title: Listas HTML
permalink: /html/listas-html/
---

Las listas en [HTML][ManualHTML] nos permite crear conjuntos de elementos en forma de lista dentro de una página, todos los cuales irán precedidos, generalmente, por un guión o número.

Los tipos de listas en [HTML][ManualHTML] son los siguientes:

* Listas ordenadas
* Listas desordenadas
* Listas de definiciones

## Listas Ordenadas

Las listas ordenadas en [HTML][ManualHTML] son aquellas que nos muestran los elementos de la lista en orden. Para representar el orden tendremos los elementos numerados. Es decir, cada uno de los elementos irá precedido de un número o letra que establezca su orden.

Las listas ordenadas en [HTML][ManualHTML] se representan mediante el [elemento OL][OL].

~~~html
<ol> ... </ol>
~~~

Cada uno de los elementos de la lista ordenada se representará mediante el [elemento LI][LI].

~~~html
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  ...
  <li>Elemento N</li>
</ol>
~~~

Un ejemplo de lista ordenada sería el siguiente:

~~~html
<ol>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
~~~

Que produciría el siguiente efecto:

<ol>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>

### Número de inicio de la lista: start

El atributo start nos permite indicar el número por el cual queremos que empiece la lista, ya que por defecto las listas ordenadas en [HTML][ManualHTML] empiezan por el número 1.

~~~html
<ol start="numero"> ... </ol>
~~~

De esta forma, si queremos que la lista empiece por el número 5, escribiremos el siguiente código:

~~~html
<ol start="5">
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
~~~

Que produciría el siguiente efecto:

<ol start="5">
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>

### Tipo de lista ordenada: type

De igual manera podemos indicar el tipo de lista ordenada en [HTML][ManualHTML] que queremos representar.

Entre los tipos de listas que podemos representar tenemos:

*  1 - Listas decimales
*  a - Listas alfabéticas en minúsculas
*  A - Listas alfabéticas en mayúsculas
*  i - Listas de números romanos en minúsculas
*  I - Listas de números romanos en mayúsculas

Los valores indicados al principio son los que le podemos asignar al [atributo type][type] de la lista ordenada en [HTML][ManualHTML].

~~~html
<ol type="tipo"> ... </ol>
~~~

Si queremos que nuestra lista aparezca ordenada mediante letras en mayúsculas escribimos lo siguiente:

~~~html
<ol type=”A”>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
~~~

En este caso la lista se representará de la siguiente forma:

<ol type=”A”>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>

### Atributos start/type en HTML 4.01

Aunque en [HTML 5][ManualHTML5] han vuelto a la especificación los [atributos type][type] y start hay que tener cuidado con ellos, ya que en ciertas versiones como HTML 4.01 fueron declarados obsoletos, por lo cual si usamos tipos de documentos HTML 4.01 strict podríamos tener un problema en su definición.

Para estos casos (y para todos en general) podemos utilizar las hojas de estilo [CSS][ManualCSS] de cara a dar estilo a las listas en [HTML][ManualHTML].

De esta forma en [CSS][ManualCSS] podemos escribir lo siguiente:

~~~html
<style type=”text/css”>
ol {
  list-style-type: lower-roman;
}
</style>
~~~

Lo cual hará que las listas ordenadas en [HTML][ManualHTML] se muestren en números romanos y en minúsculas.

### Listas en orden inverso: reversed

En [HTML 5][ManualHTML5] aparece el atributo reversed para las listas ordenadas. El atributo reversed nos permite invertir el orden de la lista. Es decir, realiza la numeración de la lista de forma inversa.

Para utilizarlo simplemente indicamos el atributo reversed sobre el elemento OL.

~~~html
<ol reversed> ... </ol>
~~~

En este caso, si escribimos la siguiente lista:

~~~html
<ol reversed>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>
~~~

Lo que obtendremos por pantalla será lo siguiente:

<ol reversed>
  <li>Julio</li>
  <li>Carmen</li>
  <li>Ignacio</li>
  <li>Elena</li>
</ol>

## Listas Desordenadas

Las listas desordenadas en [HTML][ManualHTML] nos sirven para mostrar los elementos sin ningún tipo de orden, simplemente precedidos por una viñeta que puede ser un punto, un cuadrado,...

Para definir una lista desordenada en [HTML][ManualHTML] utilizamos el [elemento ul][UL].

~~~html
<ul> ... </ul>
~~~

Para representar los elementos de la lista desordenada utilizamos el mismo elemento que con las listas ordenadas, es decir, el [elemento li][LI].

~~~html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  ...
  <li>Elemento N</li>
</ul>
~~~

De esa forma podríamos tener el siguiente código [HTML][ManualHTML]:

~~~html
<ul>
  <li>FC. Barcelona</li>
  <li>Real Madrid</li>
  <li>Real Betis</li>
  <li>Atlético de Madrid</li>
</ul>
~~~

Lo que nos mostrará por pantalla:

<ul>
  <li>FC. Barcelona</li>
  <li>Real Madrid</li>
  <li>Real Betis</li>
  <li>Atlético de Madrid</li>
</ul>

### Tipos de lista desordenada

En el caso de las listas desordenadas, no podemos indicarle el tipo de lista mediante [HTML][ManualHTML]. En este caso tenemos que recurrir a [CSS][ManualCSS] para poder indicar el tipo de lista utilizando el [atributo list-style-type][list-style-type]

~~~html
<style type=”text/css”>
ul {
  list-style-type: circle;
}
</style>
~~~

## Listas de Definiciones

Las listas de definiciones en [HTML][ManualHTML] nos sirven para montar listas en las que tenemos la estructura valor y definición. Suelen ser listas para definir términos, como si fuese un diccionario, si bien pueden ser cualquier par valor-definición.

Las listas de definiciones en [HTML][ManualHTML] se construyen mediante el [elemento dl][DL].

~~~html
<dl> ... </dl>
~~~

En este caso, dentro de las listas de definiciones en [HTML][ManualHTML] tenemos dos elementos anidados: el que representa al valor [dt][DT] y el que representa a la definición [dd][DD]. De esta forma la estructura de las listas en [HTML][ManualHTML] de definiciones es la siguiente:

~~~html
<dl>
  <dt>Término1</dt>
  <dd>Definición 1</dd>
  <dt>Término 2</dt>
  <dd>Definición 2</dd>
  ...
  <dt>Término N</dt>
  <dd>Definición N</dd>
</dl>
~~~

Si queremos crear una lista en [HTML][ManualHTML] con definiciones de palabras, podemos escribir lo siguiente:

~~~html
<dl>
  <dt>Pizpireta</dt>
  <dd>Dicho de una mujer: Viva, pronta y aguda.</dd>
  <dt>Pulular</dt>
  <dd>Dicho de las personas, animales o cosas: Abundar y bullir en un lugar.</dd>
  <dt>Concupiscencia</dt>
  <dd>En la moral católica, deseo de bienes terrenos y, en especial, apetito desordenado de placeres deshonestos.</dd>
</dl>
~~~

Lo cual nos acabará mostrando por pantalla lo siguiente:

<dl>
  <dt>Pizpireta</dt>
  <dd>Dicho de una mujer: Viva, pronta y aguda.</dd>
  <dt>Pulular</dt>
  <dd>Dicho de las personas, animales o cosas: Abundar y bullir en un lugar.</dd>
  <dt>Concupiscencia</dt>
  <dd>En la moral católica, deseo de bienes terrenos y, en especial, apetito desordenado de placeres deshonestos.</dd>
</dl>

Por defecto los navegadores dejan el término y en la siguiente líne, junto con un tabulador, la definición.

## Listas anidadas

Cuando estemos manejando listas podemos anidar unas en otras independientemente del tipo de lista que estemos anidando.

Para crear listas anidadas en [HTML][ManualHTML] simplemente tenemos que hacer que el elemento de una de las listas sea a su vez una lista. Es decir, el esquema de listas sería parecido al siguiente:

~~~html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>
    <ol>
      <li>Elemento 2.1</li>
      <li>Elemento 2.2</li>
      ...
      <li>Elemento 2.N</li>
    </ol>
  </li>
  <li>Elemento 3</li>
  ...
  <li>Elemento N</li>
</ul>
~~~

En este caso hemos anidado una lista ordenada dentro del tercer [elemento li][LI] de una lista desordenada.

Hay que tener cuidado de poner el [elemento li][LI] dentro de la lista anidada, ya que si no lo ponemos estaremos generando un código incorrecto.

Las anidaciones de listas puede ser de cualquier tipo de lista y sin límite de anidación.

Un ejemplo de listas anidadas sería una clasificación de animales como la siguiente:

~~~html
<ul>
  <li>Carnívoro
  	<ul>
  		<li>León</li>
  		<li>Buitre</li>
  		<li>Hiena</li>
  	</ul>
  </li>
  <li>Herbívoro
  	<ul>
  		<li>Cabra</li>
  		<li>Vaca</li>
  	</ul>
  </li>
  <li>Omnívoro
  	<ul>
  		<li>Oso</li>
  		<li>Urraca</li>
  	</ul>
  </li>
</ul>
~~~

El efecto que obtendríamos sería el siguiente:

<ul>
  <li>Carnívoro
  	<ul>
  		<li>León</li>
  		<li>Buitre</li>
  		<li>Hiena</li>
  	</ul>
  </li>
  <li>Herbívoro
  	<ul>
  		<li>Cabra</li>
  		<li>Vaca</li>
  	</ul>
  </li>
  <li>Omnívoro
  	<ul>
  		<li>Oso</li>
  		<li>Urraca</li>
  	</ul>
  </li>
</ul>

[ManualHTML]: http://www.manualweb.net/tutorial-html/
[OL]: http://www.w3api.com/wiki/HTML:OL
[LI]: http://www.w3api.com/wiki/HTML:LI
[type]: http://www.w3api.com/wiki/HTML:Type
[ManualHTML5]: http://www.manualweb.net/tutorial-html5/
[ManualCSS]: http://www.manualweb.net/tutorial-css/
[UL]: http://www.w3api.com/wiki/HTML:UL
[list-style-type]: http://www.w3api.com/wiki/CSS:List-style-type
[DL]: http://www.w3api.com/wiki/HTML:DL
[DT]: http://www.w3api.com/wiki/HTML:DT
[DD]: http://www.w3api.com/wiki/HTML:DD
