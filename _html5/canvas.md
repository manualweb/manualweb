---
title: Canvas HTML5
permalink: /html5/canvas/
---

En [HTML 4.01][HTML] la gestión de contenidos visuales se limitaba a las imágenes y a los mapas de imágenes mediante los elementos `img` y `map` respectivamente. Estos elementos nos daban la capacidad de añadir objetos gráficos que enriquecian el aspecto de nuestra web.

Si bien una de las grandes limitaciones de las imágenes en [HTML 4.01][HTML] era que el contenido de estas imágenes era estático (en algunos casos animado si usábamos un *GIF*). No se podía realizar ninguna interacción entre el usuario y los elementos que componían la imagen.

En [HTML5][HTML5] encontramos el elemento `canvas`, el cual viene a subsanar estas deficiencias. La idea del elemento `canvas` es que este sea como un lienzo. En el lienzo podremos desde cargar una imagen a interactuar con él de forma dinámica.

El elemento `canvas` no fue uno de los elementos que apareció nuevo en la especificación, si no que era un elemento que ideó **Apple** y que implementó **Safari**. Lo que hizo el grupo de trabajo de [HTML5][HTML5] fue el incorporarlo a la especificiación. Una situación parecida a la vivida por el elemento `XMLHttpRequest` ideado por **Microsoft** y postriormente estandarizado.

Cierto es que siempre quedará en el aire el por qué se tomo esta decisión en vez de apostar por algo más acceible y existente como era la tecnología [SVG][SVG].

## Elemento Canvas
Para crear un elemento `canvas` en nuestra página utilizaremos el elemento `canvas`. El código para crear este elemento será algo parecido a:

~~~html
<canvas id="micanvas" height="200" width="400"></canvas>
~~~

El contenido del elemento `canvas` será el que se cargue cuando el navegador no soporta dicho elemento. De esta forma podemos utilizarlo para sacar un texto informativo sobre el no soporte de este elemento:

~~~html
<canvas id="micanvas" height="200" width="400">
Su navegador no soporta el elemento Canvas. Le recomendamos que se actualice a una versión más moderna.
</canvas>
~~~

O bien una imagen que sea lo más cercana posible al contenido de nuestro canvas.

~~~html
<canvas id="micanvas" height="200" width="400">
  <img src="imagenAlternativa.png" />
</canvas>
~~~

Si no insertamos nada dentro del `canvas`, lo que veremos será un espacio en blanco con el tamaño que le hayamos indicado al `canvas`. Si no le indicamos un tamaño, por defecto, el `canvas` se pintará en *300x150*.

## Manipular un Canvas
Para manipular el elemento `canvas` vamos a tener que tirar de [Javascript][Javascript]. De esta forma lo primero será el **obtener una referencia al elemento `canvas`**. En concreto recuperaremos su contexto mediante el método `.getContext()`. Este método se ejecuta directamente sobre el elemento `canvas` es por ello que lo primero que haremos será acceder al elemento con un `getElementById()`.

~~~javascript
var canvas = document.getElementById("micanvas");
var context = canvas.getContext("2D");
~~~

El contexto que recuperamos es el **2D**. Ya que es el único contexto disponible en los elementos `canvas` a día de hoy. Si bien los navegadores web ya están trabajando para ofrecer un contexto **3D** basado en WebGL.

Además el méteodo `getContext()` nos va a servir para poder comprobar si el navegador soporta al elemento `canvas` o no.

~~~javascript
var canvas = document.getElementById("micanvas");
if (canvas.getContext) {
  var context = canvas.getContext("2D");
}
~~~

Una vez que tenemos el contexto del elemento `canvas` podemos empezar a interactuar con él. Añadirendo colores, imágenes, líneas, elementos gráficos, degradados,...

## Dibujar Figuras
Para poder insertar figuras dentro del `canvas` deberemos de conocer cómo funciona el sistema de coordenadas. Y es que para posicionar a un elemento en el `canvas` tendremos la esquina superior izquierda como la relativa a la posición (0,0) y la esquina inferior derecha como la posición (ancho,alto), dónde los valores de *ancho* y *alto* corresponden al tamaño que le hayamos dado al lienzo.

### Rectángulos
Para poder añadir un rectángulo al `canvas` vamos a utilizar el método `fillRect`. Ejecutaremos el método `fillRect`






[HTML]: {{site.baseurl}}/html/
[HTML5]: {{site.baseurl}}t/html5/
[SVG]: {{site.baseurl}}/svg/
[Javascript]: {{site.baseurl}}/javascript/
