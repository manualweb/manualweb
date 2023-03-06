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

Una vez que hemos creado el **path** podemos realizar una serie de operaciones, por ejemplo podemos movernos y crear una línea de la siguiente forma:

~~~javascript
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
~~~

Es importante que cuando realizamos operaciones en el **path** del `canvas` para que estas se visualicen, es decir, se reflejen en el `canvas` deberemos de llamar al método `stroke` o `fill`.

Por un lado el  método `stroke` lo que hace es dibujar las líneas que hayamos trazado incluyéndolas en el `canvas`.

~~~javascript
void ctx.stroke();
void ctx.stroke(path);
~~~

Por el otro el método `fill` lo que hace es rellenar el área que hemos delimitado mediante las líneas. Asumiendo que el último punto equivale al punto desde el que empezamos el subpath. Hay que tener en cuenta que cada vez que movemos el puntero creamos un nuevo subpath.

~~~javascript
void ctx.fill([fillRule]);
void ctx.fill(path [, fillRule]);
~~~

Así, nuestro ejemplo para tener un **path** incluiría lo siguiente:

~~~javascript
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.fill();
~~~

Para poder finalizar la gestión de un **path** tenemos el método `closePath`. Este método añade una línea desde la posición en la que nos encontremos hasta la posición inicial del **path**. El utilizar el método `closePath` no evita el que tengamos que forzar el pintado con `fill` o `stroke`.

~~~javascript
void ctx.closePath();
~~~

> En el caso de que utilicemos el método `fill` no será necesario que invoquemos al método `closePath` ya que el propio método `fill` traza una línea hasta el origen del subpath.

#### Mover el puntero
Para mover el puntero en el `canvas` dentro de un **path** tenemos el método `moveTo`.

~~~javascript
void ctx.moveTo(x, y);
~~~

Los parámetros `x` e `y` representan las coordenadas (x,y) del `canvas` a la cual queremos mover el cursor.
Hay que tener en cuenta que cada vez que movamos el puntero crearemos un nuevo **sub-path** con un nuevo punto de origen.

Por ejemplo podemos mover el puntero para crear dos líneas paralelas de la siguiente forma:

~~~javascript
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(10,100);
ctx.moveTo(20,10);
ctx.lineTo(20,100);
ctx.stroke();
~~~

#### Dibujar Líneas
Para poder dibuajar líneas dentro de un `canvas` en [HTML5][HTML5] vamos a utilizar el método `lineTo`. La sintaxis del método `lineTo` es:

~~~javascript
ctx.lineTo(x, y);
~~~

Dónde las propiedades `x` e `y` representan la posición (x,y) del punto final de la línea. El punto de origen será el punto dónde esté el puntero del **path** dentro del `canvas`.

Es decir, que si ejecutamos el siguiente código:

~~~javascript
ctx.moveTo(10,10);
ctx.lineto(10,100);
~~~

Nos pintará una línea desde el punto *(10,10)* a el punto *(10,100)*.

#### Dibujar un arco
Para poder dibujar un arco dentro de un `canvas` tenemos dos métodos `arc` y `arcTo`. Veamos su sintaxis en detalle.

~~~Javascript
arc(x, y, radius, startAngle, endAngle, anticlockwise)
~~~

En el caso de `arc` deberemos de indicar el centro del arco mediante los parámetros `x` e `y`. Lo siguiente es especificar el radio que va a tener el arco mediante el parámetro `radius`.

Lo siguiente será indicar lel ángulo en el que empezamos `startAngle` en *radianes* y luego el ángulo sobre el que acabamos `endAngle` en *radianes*.

> Recuerda que si quieres trabajar en grados, un grado es igual a &pi;/180 radianes

El último parámetro, `anticlockwise` indica si el arco se traza en la dirección de las agujas del reloj que será un valor `false` (valor por defecto) o si queremos que sea como las agujas del reloj, lo cual será un valor de `true`.

De esta forma podemos dibujar un círculo entero si escribimos lo siguiente:

~~~javascript
ctx.arc(100,100,50,0,2 * Math.PI);
ctx.stroke();
~~~

El segundo método es `arcTo` y su sintaxis sería:

~~~javascript
void ctx.arcTo(x1, y1, x2, y2, radius);
~~~

En este caso se realiza un arco atendiendo a dos puntos de control, el primer punto de control es el demarcado por los parámetros `x1` e `y1` y el segundo es el demarcado por `x2` e `y2`. Lo siguiente que hay que indicar es el radio del arco mediante el parámetro `radius`. Que así dicho suena bastante complicado de entender.

La idea de dibujar un arco mediante dos líneas tangenciales, para ello necesitaremos un primer punto para poder hacer las dos líneas. Este le conseguimos moviendo el puntero.

~~~javascript
void ctx.moveTo(x0,y0);
void ctx.arcTo(x1, y1, x2, y2, radius);
~~~

Con el primer punto ya tendremos las dos líneas tangenciales. El arco se dibujará desde el punto inicial hasta el punto dónde el cículo de rádio `radius` toca con las líneas tangenciales y  hasta el segundo punto dónde el círculo toca con la otra línea tangencial.

La imagen lo explica mucho mejor:

![ArcTo][ArcTo]{:class="img-responsive"}

Y, ¿por qué? esta complicación a la hora de dibujar arcos. La idea de este método `arcTo` es para poder redondear las esquinas de los rectángulos, tal y cómo vemos en el siguiente diagrama:

![ArcToRectangulo][ArcToRectangulo]{:class="img-responsive"}

#### Dibujar una curva Bézier
Otra de las capacidades que tenemos en un **path** es la de poder crear una *curva de Bézier* para ello disponemos de los métodos `quadraticCurveTo` y `bezierCurveTo`.

En el caso de `quadraticCurveTo` la sintaxis será:

~~~javascript
void ctx.quadraticCurveTo(cpx, cpy, x, y);
~~~

Crea una *curva de Bézier* utilizando un punto de control, demarcado por los parámetros `cpx` y `cpy` y el punto final demarcado por `x` e `y`. Hay que tener en cuenta que el punto de inicio será aquél en el que esté el puntero dentro del `canvas`. Por lo que normalmente encontraremos algo así como:

~~~javascript
void ctx.moveTo(x1,y1);
void ctx.quadraticCurveTo(cpx, cpy, x2, y2);
~~~

El efecto de la **curva de Bézier** que genera el método `quadraticCurveTo` sería algo parecido a:

![Curva Brezier con Punto Control][CurvaBezierPuntoControl]{:class="img-responsive"}

Para el método `bezierCurveTo` tenemos la siguiente sintaxis:

~~~javaScript
void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
~~~

En este caso crea una *curva de Bézier* atendiendo a dos puntos de control, el primer punto de control sería `cp1x` y `cp1y`, mientras que el segundo punto de control es `cp2x` y `cp2y` y un punto de fin marcado con los parámtros `x` e `y`.

Visualmente obtendríamos algo como:

![Curva Brezier con Dos Puntos de Control][CurvaBezierDosPuntosControl]{:class="img-responsive"}

### Rectángulos
A parte de la figura que podemos dibujar de un rectángulo con el `canvas` también contamos con la posibilidad de añadir al **path** la figura de un rectángulo. Y para ello tenemos el método `rect`. La sintaxis del método `rect` es:

~~~javascript
void ctx.rect(x, y, width, height);
~~~

Este método nos dibujará un rectángulo que empiece en la posición `x` e `y` y que tenga un ancho y alto definido con los parámetros `width` y `height` respectivamente.

Podemos crear un rectángulo de 200x100 de la siguiente manera:

~~~javascript
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  ctx.rect(10,10,200,100);
  ctx.fill();
}
~~~

> Al contratario que otros métodos del **path** con `rect` no necesitamos realizar un `moveTo` al prinicipio ya que lo hace el propio método.

### Objeto Path
Uno de los objetos que podemos manejar en el `canvas` es el objeto `Path2D`. Este objeto lo que nos permite es almacenar un **path** y la secuencia de comandos que lleve asociada, para poder repetirlo lass veces que necesitemos.

Podemos construir un objeto `Path2D` de varias formas:

~~~javascript
new Path2D();
new Path2D(path);
new Path2D(d);
~~~

Podemos copiar el **path** de uno existente y pasarlo como parámetro `path`. O bien puede ser un **path SVG** definido por una cadena.

Definimos un **path** que almacene los comandos:

~~~javascript
let path1 = new Path2D();
path1.rect(10, 10, 100,100);
~~~

Este Path lo que tiene es dibujar un rectángulo mediante el método `rect`.
Ahora lo que podemos es crear un nuevo **path** a partir de este **path** existente:

~~~javascript
let path2 = new Path2D(path1);
~~~

Ahora podemos añadir más comandos al **path**:

~~~javascript
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);
~~~

Para volcar un **path** a un `canvas` lo que haremos será utilizar un método `stroke` o `fill` que reciba ese **path** como parámetro.

~~~javascript
ctx.stroke(path2);
~~~

#### Path2D SVG
También podemos crear un **path** con un objeto `Path2D` que reciba como parámetro un **path svg**. Un ejemplo de **path SVG** sería:

~~~javascript
"M 10 10 h 80 v 80 h -80 Z"
~~~

Que lo que viene a decir es: *"ves al punto 10,10 (M 10 10), desplázate horizontalmente al 80 (h80), desplázate verticalmente al 80 (v 80), desplázate horizontalmente hacía la izquierda -80 puntos (h -80) y traza hacía el inicio".*

Así crearíamos nuestro **path SVG** de la siguiente forma:

~~~javascript
// Cuadrado
var pathsvg = new Path2D('M10 10 h 80 v 80 h -80 Z');
ctx.fill(pathsvg);

// triangulo
var pathsvg2 = new Path2D('M100 10 l 80 80 h -80 Z');
ctx.fill(pathsvg2);
~~~

## Estilos y Colores en el Canvas
Hasta ahora hemos visto cómo podíamos crear nuestras figuras y paths dentro del canvas para que se visualicen. Algo hemos visto a la hora de darle estilos y colores ya que hemos visto que podíamos crear solo el contorno con el método `stroke` o rellenarlo con el método `fill`. Pero veamos algo más en detalle cómo darle estilo y color a nuestros diseños en el canvas.

### Colores
Hay dos propiedades que tenemos que controlar para poder dar los colores a los elementos de un `canvas`, estas son: `fillStyle` y `strokeStyle` las cuales darán el color al relleno de las figuras y al borde de las figuras respectivamente.

Para asignarle un color a una de estas propiedades haremos lo siguiente:

~~~javascript
ctx.fillStyle = color;
ctx.strokeStyle = color;
~~~

Dónde el color puede ser tres cosas diferentes:

* **Color RGB**, en este caso podremos expresar el color mediante un nombre 'red', el código RGB `#ff0000` o mediante la función `rgb`, que para un color rojo sería `rgb(255,0,0);`.
* **Objeto Gradiente**, para mostrar un degradado de colores.
* **Patrón**,

Así, podríamos rellenar un círculo de color rojo de la siguiente forma:

~~~javascript
ctx.beginPath();
ctx.arc(100,100,50,0,2*Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
~~~

O tener un triángulo con un borde que sea verde:

~~~javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(50, 100);
ctx.lineTo(50, 50);
ctx.strokeStyle = 'green';
ctx.stroke();
~~~

> En el caso de hacer un `fill` hay que recordar que el último trazo genera una línea hasta el origen del path. En el caso de utilizar `stroke` esto no sucede, por lo que hay que generar el último movimiento de línea `.lineTo(50, 50)`

### Transparencias
A la hora de manipular un Canvas podemos hacer que haya rellenos que sean transparentes (o traslúcidos). Para ello podemos utilizar la propiedad `globalAlpha` o indicar el *alpha* en la función `rgba()` cuando asignemos un color.

El en caso de que manipulemos la propiedad `globalAlpha` utilizaremos el siguiente código:

~~~javascript
ctx.globalAlpha = valor;
~~~

El valor de la transparencia va desde 0.0 a 1.0 en decimales. Dónde 0.0 es totalmente transparente y 1.0 es totalmente opaco.

La idea de utilizar la propiedad `globalAlpha` es cuando vas a utilizar la transparencia para mútiples figuras. De esta manera podemos crear un rectángulo que sea transparente de la siguiente forma:

~~~javascript
ctx.fillStyle = 'red';
ctx.globalAlpha = 0.5;
ctx.fillRect(80, 80, 200, 100);
~~~

La otra forma de crear una transparencia es establecer la transparencia en el valor del color RGB. Para ello utilizamos el cuatro parámetro de la función `rgba()` cuando demos el color mediante `fillStyle` o `strokeStyle`.

La función `rgba()` tiene la siguiente sintaxis:

~~~javascript
rgba(rojo,verde,azul,transparencia);
~~~

Así, podemos volver a crear nuestro mismo rectángulo transparente de la siguiente forma:

~~~javascript
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.fillRect(80, 80, 200, 100);
~~~


### Estilos de Líneas
A las líneas que hemos dibujado en nuestro **path** también las podemos dar estilo.

#### Ancho Línea
Lo más básico que podemos hacer con una línea es establecer el ancho de la línea. Por defecto el ancho de la lína es de 1.0.

Para poder modificar el ancho de la línea contamos con la propiedad `lineWidth`. La sintaxis de esta propiedad es la siguiente:

~~~javascript
ctx.lineWidth = tamaño;
~~~

Así podemos dibujar una línea modificando su tamaño de la siguiente forma:

~~~javascript
ctx.lineWidth = 8;
ctx.moveTo(10,10);
ctx.lineTo(10, 100);
ctx.stroke();
~~~

#### Fin de Línea
Otra parte visual que podemos modificar de una línea es su final, es decir la forma que tendrán los extremos. Para ello tenemos la propiedad `lineCap`. La sintaxis de la propiedad `lineCap` es:

~~~javascript
ctx.lineCap = butt|round|square;
~~~

Los valores que puede tener la propiedad `lineCap` son: `butt`, `round` y `square`.

* `butt`, el borde es cuadrado con el tamaño de la línea.
* `round`, el borde de la línea es redondeado.
* `square`, se añade un pequeño cuadro al final de la línea, adicional a ella, con el mismo ancho que tiene la línea.

De esta forma el código para tener una línea con los finales redondeados sería el siguiente:

~~~javascript
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.moveTo(50,50);
ctx.lineTo(50,150);
ctx.stroke();
~~~

#### Unión de Líneas
Cuando estamos dibujando un conjunto de líneas (o arcos o curvas) tendremos un conjunto de uniones entre ellos. Dentro de los `canvas` de [HTML5][HTML5] podemos definir el estilo a darle a esta unión de líneas.

Para ello disponemos de la propiedad `lineJoin`. La sintaxis de la propiedad `lineJoin` es:

~~~javascript
ctx.lineJoin = round|bevel|miter;
~~~

Los posibles valores que tiene la propiedad `lineJoin` son: `round`, `bevel` y `miter`.

* `round`, redondea las uniones entre las líneas. Para ello utiliza un arco de radio igual al ancho de la línea.
* `bevel`, las líneas son recortadas de forma rectangular entre los diferentes segmentos, como si fuese un bisel.
* `miter`, se extiende el límite de la línea para conectarla con el siguiente segmento, es el valor por defecto de unión entre líneas.

Si queremos ver cómo quedaría nuestra unión de líneas redondeadas podemos utilizar el siguiente código:

~~~javascript
ctx.lineWidth = 20;
ctx.lineJoin = 'round';
ctx.moveTo(50,50);
ctx.lineTo(100,150);
ctx.lineTo(150,50);
ctx.lineTo(200,150);
ctx.lineTo(250,50);
ctx.stroke();
~~~

En el caso de haber utilizado el valor `miter` disponemos de la propiedad `miterLimit` para limitar cuánto se alargará el límite de la línea para unirlo con el siguiente segmento.

En el caso  de que las líneas superen el valor establecido la unión cambiará de `miter` a un tipo `bevel`.

Podemos establecer el `miterLimit` con el siguiente código:

~~~javascript
ctx.miterLimit = valor;
~~~

#### Líneas punteadas
Podemos hacer que las líneas que creemos en el `canvas` sean a guiones. Para ello tenemos el método `setLineDash()` y la propiedad `lineDashOffset`.

Mediante el método `setLineDash()` podemos establecer el tamaño de las líneas y el tamaño de los espacios en modo patrón que se irá aplicando a toda la línea.

~~~javascript
setLineDash([tamaño_linea1,tamaño_espacio1, tamaño_linea2, tamaño_espacio2,..., tamaño_lineaN,tamaño_espacioN]);
~~~

De esta manera podemos definir un rectángulo que tenga líneas de un tamaño 4 y espacios de un tamaño 2 de la siguiente forma:

~~~javascript
var canvas = document.getElementById('lienzo');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  ctx.setLineDash([4,2]);
  ctx.strokeStyle = 'green';
  ctx.strokeRect(10, 10, 200, 100);
}
~~~

Por otro lado podemos indicar el desplazamiento desde el inicio de la línea en el cual queremos aplicar el patrón de línea punteadas. Para esto tenemos la propiedad  `lineDashOffset`. Si por ejemplo queremos que haya un desplazamiento de 5 posiciones para que se empiece a aplicar el patrón escribiremos lo siguiente:

~~~javascript
ctx.lineDashOffset = 5;
~~~

### Gradientes
Hasta ahora hemos visto cómo aplicar colores de relleno de las figuras mediante colores sólidos, o bien utilizar el atributo `globalAlpha` para aplicar transparencias. Otra opción que tenemos para los rellenos son los gradientes.

Un gradiente es una transición de color desde un color origen a un color destino. O bien la transición de un color de inicio, a un segundo colo, de aquí a un tercer color,...

Los gradientes pueden ser **gradientes lineales**, es decir que se ejecutan en la dirección de una línea o pueden ser **gradientes radiales**, en este caso se aplica la transición de color de forma circular.

#### Gradiente Lineal
Para crear un gradiente lineal utilizamos el método `.createLinearGradient()`. La sintaxis del método `.createLinearGradient()` es la siguiente:

~~~javascript
CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
~~~

Dónde las coordenadas `x0` e `y0` nos sirven para indicar el inicio del gradiente y `x1` e `y1` nos sirven para indicar el final del gradiente.

Por ejemplo podemos crear un gradiente que vaya en diagonal desde la posición (0,0) a la posición (150,150) de la siguiente forma:

~~~javascript
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
~~~

Lo que nos devuelve el método `.createLinearGradient()` es un objeto `CanvasGradient`. Este objeto se lo podremos aplicar como valor a las propiedades `fillStyle` y `strokeStyle` que lo utilizarán como color para poder rellenar los objetos que correspondan.

Podemos aplicar el gradiente lineal de la siguiente forma, para un `fillStyle`:

~~~javascript
ctx.fillStyle = lineargradient;
~~~

Pero, ¿qué colores se utilizan el el gradiente? Para poder indicar los colores tenemos el método `.addColorStop()`. La sintaxis del método `.addColorStop()` es la siguiente:

~~~javascript
void gradient.addColorStop(offset, color);
~~~

Podremos añadir tantos colores al gradiente como deseemos. Si bien los colores deben de estar situados en el `offset`. El valor del `offset` va de 0 a 1. Con el parámetro `color` indicaremos el color que se aplique en el gradiente.

Entonces, si queremos que el gradiente empiece en un color blanco y acabe en un color verde podemos codificar lo siguiente:

~~~javascript
lineargradient.addColorStop(0, 'white');
lineargradient.addColorStop(1, 'green');
~~~

En el caso de que queramos tres colores, dónde a los dos anteriores se pase por un color *rojo* entre medias, tendremos lo siguiente:

~~~javascript
lineargradient.addColorStop(0, 'white');
lineargradient.addColorStop(.5, 'red');
lineargradient.addColorStop(1, 'green');
~~~

El código completo para aplicar nuestro **gradiente lineal** sería:

~~~javascript
var ctx = canvas.getContext('2d');
var lineargradient = ctx.createLinearGradient(0, 100, 150, 100);
lineargradient.addColorStop(0, 'white');
lineargradient.addColorStop(1, 'green');
ctx.fillStyle = lineargradient;
ctx.fillRect(10, 10, 160, 100);
~~~

En este caso hemos rellenado al figura de un rectángulo mediante el gradiente.

#### Gradiente Radial
Para los gradientes radiales tenemos el método `.createRadialGradient()`. La sintaxis del método `.createRadialGradient()` es:

~~~javascript
CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
~~~

En este caso el origen del gradiente se indica mediante una posión `x0` e `y0`, pero con un radio especificado con `r0`. El final del gradiente lo especificamos mediante el punto `x1` e `y1` y su radio `r1`.

Aunque estemos trabajando con círculos, el **gradiente radial** lo podemos aplicar a cualquier figura.

El método `.addColorStop()` funciona de igual manera para el **gradiente radial**. Así podremos tener el siguiente ejemplo para crear un **gradiente radial**:

~~~javascript
var rg1 = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
rg1.addColorStop(0, '#A7D30C');
rg1.addColorStop(0.9, '#019F62');
rg1.addColorStop(1, 'rgba(1, 159, 98, 0)');

ctx.fillStyle = rg1;
ctx.fillRect(0, 0, 300, 300);
~~~

## Patrones
Una de las cosas que podemos hacer con la imágenes dentro de un `canvas` es crear patrones. Es decir, repetir la imagen tantas veces como queramos. Para ello tenemos el método `.createPattern()`.

La sintaxis del método `.createPattern()` es la siguiente:

~~~javascript
CanvasPattern ctx.createPattern(image, repetition);
~~~

El parámtro `image` recibirá una referencia a un origen de imagen que se encuentre dentro del documento [HTML5][HTML5]. Esta imagen puede ser una imagen normal, un canvas, un vídeo, una imagen svg,...

Para cargar una imagen podemos utilizar la clase `Image` que representa a un objeto [HTML5][HTML5] de imagen. Dicha imagen recibe una URI en su propiedad `src`con el path en el que esta la imagen.

~~~javascript
var imagen = new Image();
imagen.src = 'imagen.jpg';
~~~

Es importante saber que cuando cargamos una imagen, esta no se carga automáticamente para que podamos utilizarla. Es por ello que nos debemos de apoyar en el evento `onload` de la imagen para poder utilizarla.

~~~javascript
img.onload = function() {
  // Manipulamos la imagen
};
~~~

El segundo parámetro del método `.createPattern()` es `repetition`, el cual nos sirve para indicar el modelo de repetición del patrón. Los modelos que existen son:

* **repeat**, el patrón se repite en todas las direcciones, tanto en el eje x, como en el eje y.
* **repeat-x**, el patrón solo se repite en el eje horizontal x.
* **repeat-y**, el patrón solo se repite en el eje vertical y.
* **no-repeat**, la imagen solo se utiliza una vez.

El patrón nos devuelve un objeto `CanvasPattern`, el cual se puede aplicar a las propiedades `fillStyle` o `strokeStyle`.

El código completo para poder crear un patrón de imagenes nos quedaría de la siguiente forma:

~~~javascript
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = 'patron.jpg';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 300, 300);
};
~~~

## Sombras
Otro de los efectos que podemos realizar sobre los elementos de un `canvas` es generarles una sombra. Para poder dar sombras a un elemento disponemos de 4 propiedades sobre el contexto del `canvas`:

* `shadowOffsetX`, recibe un valor numérico en formato `float` que será la distancia desde el elemento en horizontal dónde se posicionará la sombra.
* `shadowOffsetY`, recibe un valor numérico en formato `float` que será la distancia desde el elemento en vertical dónde se posicionará la sombra.
* `shadowBlur`, nos sirve para indicar el efecto borroso sobre la sombra. Los valores van desde el *0*, que es el valor por defecto.
* `shadowColor`, indica el color que le queremos dar a la sombra. El color se puede asignar mediante el nombre del color, el formato RGB o la función `rgb()`.





[HTML]: {{site.baseurl}}/html/
[HTML5]: {{site.baseurl}}/html5/
[SVG]: {{site.baseurl}}/svg/
[Javascript]: {{site.baseurl}}/javascript/
[ArcTo]: {{site.baseurl}}/html5/img/arcTo.jpg
[ArcToRectangulo]: {{site.baseurl}}/html5/img/arcToRectangulo.png
[CurvaBezierPuntoControl]: {{site.baseurl}}/html5/img/bezier.gif
[CurvaBezierDosPuntosControl]: {{site.baseurl}}/html5/img/bezier2.gif
