---
title: Selectores CSS
permalink: /css/selectores-css/
---

El **selector CSS** nos permite identificar un elemento [HTML][HTML] para poder aplicarle un estilo. Dentro de una **regla CSS** es la primera parte de la misma.

## Listas de selectores CSS
Una cosa que tenemos que saber es que podemos tener listas de selectores CSS, es decir, el propio selector puede ser una lista de selectores que separemos por comas. De esta manera la estructura de una lista de selectores sería la siguiente:

~~~
selector1, selector2,... selectorN {
    propiedad1:valor1;
    propiedad2:valor2;
    ...
    propiedadN:valorN;
}
~~~    

La idea de las listas de selectores CSS es que si tienes más de un selector al que se aplique los mismos estilos, puedas agruparlo en una única **regla CSS**.

De esta manera si tenemos las dos siguientes reglas:

~~~css
h1 {
    color:blue;
}
p {
    color: blue;
}
~~~

Podamos crear una única regla mediante **listas de selectores CSS** quedando la siguiente regla:

~~~css
h1, p {
    color:blue;
}
~~~

Esto nos simplificará el número de reglas que tengamos que hacer en nuestra hoja de estilos y tendremos **reglas CSS** más sencillas de manejar.

## Tipos de Selectores CSS
Existen diferentes tipos de **selectores CSS** cada uno nos permitirá seleccionar los elementos [HTML][HTML] sobre los que aplicar los estilos de una forma diferente:

* Selectores de Tipo
* Selectores de Clase
* Selectores de ID


### Selectores de Tipo
Son aquellos que utilizan el nombre de un [elemento HTML][ElementoHTML] para crear el selector. Así veremos que los selectores de tipo utilizan elementos como [`body`][body], [`span`][span], [`input`][input], [`p`][p],...

La sintaxis de los selectores de tipo es la siguiente:

~~~
elemento { }
~~~

Así sería un selector de tipo para un elemento [`span`][span] dónde indicamos que su color es *blue*:

~~~css
span { }
~~~

Tosos los elementos [`span`][span] tendrán aplicadas las propiedades de estilo definidas por este selector.

### Selectores de Clase
Estos selectores definen el nombre de una clase para posteriormente aplicarselo a los elementos. Los selectores de clase llevan un punto antes del nombre de la clase, siendo su sintaxis la siguiente:

~~~css
.nombre_clase { }
~~~

Hay que saber que para poder aplicar la hoja de estilos CSS mediante un selector de clase, el elemento debe tener definida la clase dentro del atributo [`class`][class] del elemento.

~~~html
<elemento class="nombre_clase"></elemento>
~~~

De esta manera podemos crear una clase *colo_azul* que determine elementos de color azul:

~~~css
.color_azul {
    color: blue;
}
~~~

Y aplicar esta clase a nuestro elemento [`span`][span] mediante el atributo [`class`][class]:

~~~html
<span class="color_azul">Mi texto</span>
~~~

La clase la podemos definir de forma general o aplicarsela a un selector de tipo mediante la siguiente sintaxis:

~~~
elemento.clase { }
~~~

De esta manera la clase solo afectará a los elementos de tipo definido en la regla y no a otros elementos HTML que estén utilizando dicha clase.

Si volvemos a nuestro ejemplo deel elemento [`span`][span] podemos definir la siguiente regla:

~~~css
span.color_azul {
    color: blue;
}
~~~

Si hay otro elemento que no sea un [`span`][span] utilizando la clase *color_azul* no 




### Selectores de ID






----

Múltiples selectores

~~~css
p, li {
    color: red;
}
~~~




Clases en un elemento

~~~css
li.micolor {
    color: red;
}
~~~

Estilo atendiedno a la colocación

~~~css
li em {
    color: red;
}
~~~

Emphasys que esté dentro de un li


## Combinator

## + Adjacent Subling Combinator

~~~css
h1 + p {
    color:ref
}
~~~
El p tiene que estar detrás del h1


## Estilo en base al estado

~~css
a:hover {
    color:red;
}

Cuando pase por el enlace.

## Combinar selectores y combinadores

article h1 p // Secuencia

article + h1 + p // Secuencia obligatoria


