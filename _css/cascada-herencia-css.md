---
title: Cascada y Herencia CSS
permalink: /css/cascada-y-herencia-css/
---



### Especificidad en los selectores
¿Qué pasa si tengo 2 selectores que aplican estilos?¿cuál uso?¿cascada y herencia?
Las reglas que se aplican son **cascada** y **especificidad**

En **cascada** es que se aplica el último estilo definido.

## Cascada y Herencia

~~~html
<p class="micolor">¿De qué color soy?</p>
~~~

~~~css
micolor {
    color:red;
}
p {
    color:red;
}
~~~



