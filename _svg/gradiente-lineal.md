---
title: Gradiente Lineal en SVG
permalink: /svg/gradiente-lineal-svg/
---

Para definir gradientes lineales en [SVG][SVG] se utiliza el elemento `linearGradient`. Definiremos el elemento `linearGradient` de la siguiente forma:

~~~svg
<linearGradient id="identificativo" gradientUnits="userSpaceOnUse|objectBoundingBox"
  gradientTransform="lista_de_transformacion"
  x1="coordenada" y1="coordenada" x2="coordenada" y2="coordenada"
  spreadMethod = "pad|reflect|repeat" xlink:href="uri">
~~~

Como es una definición grande, veamos los atributos más detenidamente:
* **id = "identificativo"**, nos permite identificar el gradiente para así poderlo utilizar sobre elementos básicos.
* **xlink:href = "uri"**, nos permite hacer referencia a otros atributos definidos para un gradiente lineal y que estén definidos dentro de un documento [SVG][SVG]. Dichos atributos serán heredados.

## Sistema de Coordenadas
* **gradientUnits = "userSpaceOnUse \| objectBoundingBox"**, puede tomar uno de los dos valores. En el caso de que sea `userSpaceOnUse`, las coordenadas que se definirán a posteriori tomarán como punto de partida, todo el sistema definido por el usuario. Así, x1,y1 será la coordenada más a la izquierda de todos el lienzo de objetos que tengamos definidos. Si el valor es `objectBoundingBox`, el sistema de coordenadas es definido en relación con el interior del objeto creado. Así, las coordenadas x1,y1 marcarán el lado izquierdo del elemento sobre el que definimos el gradiente. Por defecto es `objectBoundingBox`.
* **gradientTransform = "lista_de_transformación"**, contiene una lista de transformación para poder transformar el sistema de coordenadas establecido por el usuario.
* **x1 = "coordenada"**, la coordenada de inicio en el eje X. En el caso de no ser especificado toma un valor de 0.
* **y1 = "coordenada"**, la coordenada de inicio en el eje Y. En el caso de no ser especificado toma un valor de 0.
* **x2 = "coordenada"**, la coordenada final en el eje X. En el caso de no ser especificado toma un valor de 0.
* **y2 = "coordenada"**, la coordenada final en el eje Y. En el caso de no ser especificado toma un valor de 0.

## Métodos de Relleno

* **spreadMethod = "pad | reflect | repeat"**, nos permite indicar que sucede si el vector del gradiente empieza y termina dentro de la figura sobre la que se le aplica. Los valores que puede tener son `pad`, rellena la figura con el color del final, `reflect`, vuelve a empezar la serie de transformación de fin a inicio. Hace el efecto de un espejo. De ahí lo de reflect ¿no? y
`repeat`, vuelve a empezar la serie de transformación de inicio a fin.


## Direcciones del Gradiente
Jugando con los valores de las coordenadas podemos conseguir diferentes efectos a la hora de rellenar las figuras con un gradiente.

* *Horizontal*, las coordenadas `y1` e `y2` deben de ser iguales, mientras que las coordenadas `x1` y `x2` deben de ser diferentes.
* *Vertical*, las coordenadas `x1` y `x2` deben de ser iguales, mientras que las coordenadas `y1` e `y2` deben de ser diferentes.
* *Angular*, tanto las coordenadas `x1` y `x2` como `y1` e `y2` deben de ser diferentes entre sí.

## Ejemplo de Gradiente Lineal
Veamos como sería un ejemplo de gradiente:

~~~svg
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg">

<defs>
 <linearGradient id="rojo_naranja" x1="0%" y1="0%"
     x2="50%" y2="0%" spreadMethod="reflect">
  <stop offset="20%" stop-color="#f00"/>
  <stop offset="80%" stop-color="#ff0"/>
 </linearGradient>
</defs>

<circle cx="600" cy="200" r="100" style="fill:url(#rojo_naranja)"
   stroke="#000" stroke-width="2"/>

</svg>
~~~

[SVG]: http://www.manualweb.net/svg/
