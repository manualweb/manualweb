---
title: Funciones CSS
permalink: /css/funciones-css/
---

Aunque los valores de las **propiedades CSS+* suelen ser numéricos, hay algunos casos que los valores pueden ser funciones.

## calc()
Permite hacer un cálculo.

~~~css
.caja {
  width: calc(90% - 30px)
}
~~~


## rotate()

~~~css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
~~~