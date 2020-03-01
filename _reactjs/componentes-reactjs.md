---
title: Componentes ReactJS
permalink: /reactjs/componentes-reactjs/
---

Los **componentes ReactJS** nos permiten el crear piezas diferentes dentro del interface de usuario (UI). Cada **componente ReactJS** implementa de forma aislada una lógica y puede ser reutilizados en diferentes sitios.


## Crear un Componente ReactJS

La mejor forma de definir un **componente en RectJS** es mediante una función [Javascript][Javascript].

~~~javascript
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
~~~

> Es una buena práctica el definir los nombres de los componentes con un nombre cuya primera letra esté en mayúsuculas.

Aunque se puede definir mediante una clase de ECMAScript 2015 extendiendo de la clase `React.Component` y codificando el método `render()` para generar la respuesta del componente.

~~~javascript
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}</h1>;
  }
}
~~~

## Utilizar un Componente RectJS

Una vez que tenemos definido nuestro componente ReactJS lo que tenemos que hacer es utilizarlo. Para utilizarlo *lo vamos a renderizar dentro de nuestra página*.

Lo primero que haremos será crear un elemento mediante el **componente ReactJS** que hemos definido. Para ello nos apoyamos en el [formato JSX][JSX] y creamos una variable mediante [elementos HTML][HTML]:

~~~javascript
const element = <Saludo nombre="Manual Web" />;
~~~

Los atributos son enviados al componente mediante el objeto `props`. En este caso el objeto `props` tendrá un atributo `nombre` que es el que tratamos dentro del componente.

~~~javascript
{props.nombre}
~~~

Ya lo que nos queda es renderizar el componente mediante el método `Render`. El método `Render` recibe por un lado el elemento que tiene que renderizar y por otro el nodo DOM de la página sobre el cual tiene que renderizar el contenido.

~~~javascript
ReactDOM.render(
  element,
  document.getElementById('root')
);
~~~

## Componer Componentes
El componente es la unidad básica dentro de [ReactJS][ReactJS], si bien podemos componer componentes con otros componentes.

Por ejemplo piensa que podemos tener un componente que sea una *entrada de menú* y al final un conjunto de *entradas de menú* compondrán un componente de mayor nivel que será un *menú*.

Partimos creando un componente básico que sea un `MenuItem`

~~~javascript
class MenuItem extends React.Component {
  render() {
    return <p> &gt; {this.props.nombre}</p>;
  }
}
~~~

Ahora vamos a instanciarlo en un componente agregador que hemos llamado `Menu`:

~~~javascript
class Menu extends React.Component {
  render() {
    return (
      <div>
        <MenuItem nombre="Home"/>
        <MenuItem nombre="Artículos"/>
        <MenuItem nombre="Contactar"/>
      </div>
    );
  }
}
~~~

Como podeos ver hemos vuelto a recurrir a [JSX][JSX] para llamar varias veces al componente `MenuItem`.

> La idea de los componentes es crear pequeños componentes que sean muy reutilizables e instanciarlos dentro de otros componentes para obtener componentes más complejos.

## Propiedades de los Componentes
Una de las cosas que tenemos que saber de las propiedades de los componentes es que **las propiedades son de solo lectura** y por lo tanto no pueden ser modificadas.

Es por ello que son conocidas como **funciones puras**. Así que **todos los componentes ReactJS son funciones puras**.


[ReactJS]: {{site.baseurl}}/reactjs/
[Javascript]: {{site.baseurl}}/javascript/
[JSX]: {{site.baseurl}}/reactjs/que-es-jsx/
[HTMl]: {{site.baseurl}}/html/
