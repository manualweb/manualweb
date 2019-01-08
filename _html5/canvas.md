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
Para poder añadir un rectángulo al `canvas`  disponemos de tres métodos: `fillRect`, `strokeRect` y `clearRect`. Estos métodos los vamos a ejecutar sobre el contexto del `canvas`.

El método `fillRect` nos sirve para **crear un rectángulo relleno**. La sintaxis del método `fillRect` es la siguiente:

~~~javascript
void ctx.fillRect(x, y, width, height);
~~~

Dónde `x` e `y` son las coordenadas de la esquina superior izquierda del rectángulo dentro del `canvas`, mientras que con `width` y `height` indicamos el ancho y alto del rectángulo respectivamente.

Si no indicamos nada, el relleno del rectángulo será el color establecido por defecto, es decir, el negro.

Con el método `strokeRect` generaremos un **rectángulo que solo tenga la línea exterior**. La sintáxis del método `strokeRect` es:

~~~javascript
void ctx.strokeRect(x, y, width, height);
~~~

Los parámetros son los mismos que utilizábamos con el método `fillRect`.

El último método que gestiona rectángulos en [HTML5][HTML5] es `clearRect`. El método `clearRect` genera **un rectángulo que sea transparente** sobre la zona del rectángulo.

~~~javascript
void ctx.clearRect(x, y, width, height);
~~~

Al igual que los dos anteriores métodos, los parámetros son las coordenadas de origen `x` e `y` así como el ancho o `width`  y alto `height`.

De esta manera podemos tener un rectángulo que tenga internamente otro transparente, utiliznado los métodos `fillRect` y `clearRect` de la siguiente forma:

~~~javascript
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 200, 100);
  ctx.clearRect(30, 30, 160, 60);
}
~~~

### Paths
A parte de los rectángulos tenemos otra figura que nos permite dibujar objetos dentro de un `canvas` es el **path**. Un **path** es una secuencia de puntos los cuales van unidos por líneas o curvas. Los **path** pueden ser abiertos o cerrados, siendo en este segundo caso el último punto coincidente con el primero.

Para hacernos una idea es como si estuviésemos pintando con un lapiz sobre un lienzo. Lo primero es mover el lapíz a un punto y desde ese punto trazar una línea o curva hasta otro punto y así sucesivamente.

Para crear un **path** deberemos de invocar al método `beginPath` sobre el contexto del canvas.

~~~javascript
void ctx.beginPath();
~~~





[HTML]: {{site.baseurl}}/html/
[HTML5]: {{site.baseurl}}t/html5/
[SVG]: {{site.baseurl}}/svg/
[Javascript]: {{site.baseurl}}/javascript/
