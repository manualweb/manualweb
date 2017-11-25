---
title: Conceptos Básicos en Java
permalink: /java/conceptos-basicos-java/
---
Si estás empezando con el lenguaje [Java][ManualJava] hay una serie de conceptos básicos [Java][ManualJava] de la orientación a objetos que debes de manejar para poder desarrollar con este lenguaje.

Aquí los vamos a ver por encima y dedicaremos un capítulo entero a ellos entrando en detalle sobre todas sus características

*   Objeto
*   Clase
*   Paquete
*   Interface
*   Herencia

## Objeto

Es un elemento de software que intenta representar un objeto del mundo real. De esta forma un objeto tendrá sus propiedades y acciones a realizar con el objeto. Estas propiedades y acciones están encapsuladas dentro del objeto, cumpliendo así los principios de encapsulamiento.

El ***paradigma de la orientación a objetos*** aparece como contraste a la ***programación estructurada*** que se venía utilizando desde los años 60.

Un **objeto** tiene su estado (o estados) y su comportamiento. Esto se modela mediante propiedades (o variables) y métodos. Incluso un objeto puede contener a su vez a otro tipo de objeto.

### Encapsulación de datos

Las interacciones con los objetos se hacen mediante los métodos. Es decir, si queremos conocer información del estado del objeto deberemos de llamar a uno de sus métodos y no directamente a las propiedades.

Esta encapsulación nos permitiría el cambiar las propiedades del objeto sin que los consumidores se vean afectados siempre y cuando les sigamos retornando el mismo resultado.

Si bien hay objetos que tienen propiedades públicas, por lo cual podremos acceder directamente a dichas propiedades sin necesidad de utilizar un método.

El uso de objetos nos proporciona los siguientes beneficios:

1.  **Modularidad**, el objeto y sus propiedades puede ser pasado por diferentes estructuras del código fuente, pero el objeto es el mismo.
2.  **Encapsular Datos**, ocultamos la implementación de propiedades del objeto ya que accederemos a través de los métodos del objeto.
3.  **Reutilización de Código**, podemos tener diferentes instancias de un objeto de tal manera que esas diferentes instancias están compartiendo el mismo código.
4.  **Reemplazo**, podemos reemplazar un objeto por otro siempre y cuando estos objetos tengan el mismo comportamiento.

### Ejemplos de objetos

Cualquier concepto del mundo real se puede modelar como un objeto con su estado y comportamiento. Por ejemplo *un televisor es un objeto**, cuyos estados pueden ser: *encendida*, *apagada*, *en el canal1*, *en el canal2*, *grabando*,... y sus acciones serán *“encender televisor”*, *“apagar televisor”*, *“cambiar de canal”*, *“iniciar la grabación”*,...

Por ejemplo imaginemos una figura geométrica como podría ser un *triángulo*. Un triángulo podemos definirlo por varias propiedades como pueden ser: *base*, *altura*, *el lado* y las *coordenadas x,y del centro del triángulo*. Como métodos de un triángulo podemos *"calcular el área del triángulo"*, *"calcular el perímetro del triángulo"*.

## Clase

Las clases representan los prototipos de los objetos que tenemos en el mundo real. Es decir, **es una generalización de un conjunto de objetos**. A su vez **los objetos serán instancias de una determinada clase**.

Si volvemos al ejemplo del televisor, existen múltiples tipos de televisores y cada uno con sus características. Si bien existe un esquema o prototipo que define el televisor. Este prototipo es lo que conocemos la clase.

En la clase es dónde realmente definimos las propiedades y métodos que podrán contener cada una de las instancias de los objetos.

Por ejemplo, para nuestro caso de las figuras geométricas podríamos definir un triángulo de la siguiente forma:

~~~java
class Triangulo {
    private long base;
    private long altura;

    public Triangulo(long base, long altura) {
        this.base = base;
        this.altura = altura;
    }

    public long area() {
        return (base*altura)/2;
    }
}

Triangulo t1 = new Triangulo(2.0,3.0);
Triangulo t2 = new Triangulo(4.0,7.0);

t1.area(); // Área 3.0
t2.area(); // Área 14.0
~~~

De momento no te preocupes por entender el código del todo, pero verás que hemos definido una clase triángulo la cual tiene **dos propiedades base y altura**. Estas propiedades las hemos definido como *“private”* lo cual hace que no puedan ser visibles desde fuera.

~~~java
private long base;
private long altura;
~~~

Luego tenemos lo que se conoce como un **método constructor**. Es el método que *tiene el mismo nombre que la clase: `Triangulo ()`* y que nos sirve para inicializar las propiedades desde el exterior.

~~~java
public Triangulo(long base, long altura) {
    this.base = base;
    this.altura = altura;
}
~~~

Además hemos creado un **método que nos calcula el área de un triángulo (base x altura / 2)**. Este método ya es público y podrá ser invocado de forma externa.

~~~java
public long area() {
  return (base*altura)/2;
}
~~~

Vemos cómo creamos diferentes objetos del tipo `Triángulo`. A estos objetos los pasamos diferentes valores.

~~~java
Triangulo t1 = new Triangulo(2.0,3.0);
Triangulo t2 = new Triangulo(4.0,7.0);
~~~

Y por último hemos invocado al método que nos devuelve el área del triángulo del objeto en concreto.

~~~java
t1.area(); // Área 3.0
t2.area(); // Área 14.0
~~~

## Interface

Un **interface** es una forma de establecer un contrato entre dos elementos. Un **interface** indica qué acciones son las que una determinada clase nos va a ofrecer cuando vayamos a utilizarla.

Cuando implementemos un interface (cuando lo usemos) deberemos de implementar todas las acciones (métodos) que este contenga.

Por ejemplo podríamos definir un interface `Figura` el cual indique qué métodos son obligatorios cuando vayamos a definir una figura. El interface se define mediante la palabra interface.

~~~java
interface Figura {
    ...
}
~~~

Dentro del interface definimos los métodos que serán obligatorios. Por ejemplo, que de una figura se pueda calcular su área y calcular su perímetro.

~~~java
interface Figura {
    public long area();
    public long perimetro();
}
~~~

Cuando queramos que una clase implemente un determinado interface deberemos de utilizar el **operador implements** indicando el nombre del interface a implementar.

Así, si un triángulo queremos que implemente el interface Figura lo definiremos de la siguiente forma:

~~~java
public Triangulo implements Figura {
    ...
}
~~~

En este momento la clase `Triangulo` deberá de implementar los métodos *calcular área* y *calcular perímetro*.

## Paquete

Un **paquete** es una forma de *organizar elementos de software mediante un espacio de nombres*. Así podremos afrontar desarrollos grandes de software facilitando la forma de encontrar o referirnos a un elemento.

Podríamos entender el sistema de paquetes como si fuese un sistema de carpetas. De tal manera que colocaremos cada una de las clases (o ficheros) en un paquete (o directorio).

Los paquetes se definen mediante el modficiador `package` seguido del nombre del paquete. El paquete lo definiremos en la primera línea de cada una de las clases.

Una definición de paquete podría ser:

~~~java
package net.manualweb.java.ejemplos;
~~~

El lenguaje **[Java][ManualJava] nos proporciona un conjunto de paquetes por defecto** (conocido como **API Java**) en los que se pueden encontrar múltiples utilidades del lenguaje. Por ejemplo, la clase [Java][ManualJava] que nos ayuda a manipular las cadenas de texto es la clase [String][String]. La [clase String][String] la podemos encontrar en el paquete **java.lang**.

## Herencia

La **herencia** es una forma de estructurar el software. Mediante la **herencia** podemos indicar que una clase hereda de otra. Es decir la clase extiende las capacidades (propiedades y métodos) que tenga y añade nuevas propiedades y acciones.

Digamos que las nuevas clases especializan más aquellas clases de las que heredan al añadir nueva funcionalidad. Aunque también pueden reescribir el funcionamiento de dichos elementos.

En nuestro ejemplo del triángulo, este podría heredar de una clase polígono.

~~~java
public class Triangulo extends Poligono {
    ...
}
~~~

De igual manera de esta clase general `Poligono` podrían heredar otras clases que representasen un polígono, por ejemplo las clases `Cuadrado`, `Pentagono`,...

~~~java
public class Cuadrado extends Poligono {
    ...
}

public class Pentagono extends Poligono {
    ...
}
~~~

La herencia entre clases se indica mediante el operador `extends`.

La clase superior de la que heredan las figuras puede definir una serie de propiedades y métodos que heredarán las clases hijas y que por ende podrán utilizar.

Por ejemplo, la clase `Poligono` puede tener una propiedad que sean las longitudes de los lados del polígono y que utilice esas longitudes para calcular el perímetro del polígono.

~~~java
public class Poligono {

    private long[] lados;

    public Poligono(long[] lados) {
        this.lados = lados;
    }

    public long perimetro() {
        ...
    }

}
~~~

Cuando ahora indiquemos que la clase `Triangulo` hereda de la clase `Poligono`.

~~~java
public class Triangulo extends Poligono {
    ...

    public Triangulo (long base, long altura, int[] lados) {
        super(lados);
        this.base = base;
        this.altura = altura;
    }

}
~~~

Veremos que los objetos instanciados como triángulos tendrán acceso a los métodos del polígono.

~~~java
Triangulo t1 = new Triangulo(2.0,3.0);
t1.perimetro();
~~~

En este caso accedemos al método perímetro que heredamos de la clase Polígono.

Una de las cosas que tienes que saber en la herencia es que en el constructor de la clase que hereda (o clase hija) se deberá de llamar al constructor de la clase padre. Para ello se utiliza el método especial `super()`;

[ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
[String]: http://www.manualweb.net/java/clase-string-representando-una-cadena/ "Clase String Java"
