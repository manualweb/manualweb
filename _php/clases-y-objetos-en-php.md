---
title: Clases y Objetos en PHP
date: 2024-05-19
last_modified_at: 2024-05-19
permalink: /php/clases-y-objetos-en-php/
excerpt: "Las clases y objetos en PHP son los elementos básicos dentro del modelo de programación orientada a objetos."
tags: [clases,objetos,orientado_objetos,propiedades,constructores,métodos]
image:
  path: /img/covers/php-cover.webp
---

### ¿Qué son las clases en PHP?


Como hemos visto en la [introducción a la programación orientada a objetos en PHP](https://manualweb.net/php/programacion-orientada-a-objetos-en-php/) una clase en [PHP](https://www.manualweb.net/php/) nos permite definir un tipo de objeto especificando las variables y funciones que lo componen.


Las clases en [PHP](https://www.manualweb.net/php/) son una **especie de plantilla** que se utiliza para crear objetos con características y comportamientos específicos.


La sintaxis para definir una clase en [PHP](https://www.manualweb.net/php/) es la siguiente:


```php
class NombreDeLaClase {
  // Propiedades de la clase
  var $propiedad1;
  var $propiedad2;

  // Métodos de la clase
  function metodo1() {
    // código del método
  }
}
```


Vemos que el nombre de la clase se define mediante la palabra clave `class` seguida del nombre de la clase. Una vez definida la clase estableceremos un bloque delimitado por llaves en el cual definiremos las **propiedades, métodos y constructores**.


En una clase [PHP](https://www.manualweb.net/php/), podemos encontrar varios elementos esenciales que contribuyen a su funcionalidad y que veremos con más detenimiento en futuros artículos. Estos son:

- **Propiedades**: Son **variables que se encuentran dentro de una clase**. Estas pueden ser de cualquier tipo y pueden contener cualquier valor que una variable normal de [PHP](https://www.manualweb.net/php/) puede contener.
- **Métodos:** Son **funciones definidas dentro de una clase**. Estos métodos pueden realizar diversas operaciones y son esenciales para el comportamiento de un objeto de la clase.
- **Constructores:** Son **métodos especiales que se ejecutan automáticamente cuando se crea un nuevo objeto de una clase**. Son útiles para inicializar las propiedades de un objeto.
- **Destructores:** A diferencia de los constructores, los destructores **se ejecutan automáticamente cuando un objeto no se utiliza más**. Son útiles para liberar los recursos que el objeto puede haber consumido durante su vida útil.

### Mi primera clase en PHP


Con estos conceptos básicos sobre las clases en [PHP](https://www.manualweb.net/php/) vamos a ver cómo podemos [definir mi primera clase en PHP](https://lineadecodigo.com/php/crear-una-clase-en-php/).


La idea de las clases en [PHP](https://www.manualweb.net/php/) es la de poder definir un tipo de objeto del mundo real. Por ejemplo podemos definir figuras geométricas como _cuadrados, rectángulos, triángulos, círculos,…_


Por lo tanto podemos definir dentro de la [programación en PHP](https://lineadecodigo.com/categoria/php/) las anteriores clases de la siguiente forma:


```php
class Cuadrado {
  private $lado;
  
  public _construct($lado) {
    $this->$lado = $lado;
  }
}

class Rectangulo {
  private $lado1;
  private $lado2;
  
  public _construct($lado1, $lado2) {
    $this->$lado1 = $lado1;
    $this->$lado2 = $lado2;
  }
}

class Triangulo {
  private $base;
  private $altura;

  public _construct($base) {
    $this->$altura = $base;
    $this->$altura = $altura;
  }
}

class Circulo {
  private $radio;
  private $perimetro;
  
  public _construct($radio) {
    $this->$radio = $radio;
    $this->$perimetro = 2*M_PI*$radio;
  }
}
```


### ¿Qué son los objetos en PHP?


Ahora que ya sabemos qué son las clases en [PHP](https://www.manualweb.net/php/) vamos a ver qué son los objetos en [PHP](https://www.manualweb.net/php/). Los objetos en [PHP](https://www.manualweb.net/php/) son instancias particulares de una clase en concreto.


Cada objeto en [PHP](https://www.manualweb.net/php/) define unos valores diferentes de las variables de una determinada clase. Por lo que tenemos poder múltiples objetos de una misma clase.


La sintaxis para crear un objeto en [PHP](https://www.manualweb.net/php/) es la siguiente:


```php
$objeto = new NombreClase(valores);
```


Para instanciar un objeto [PHP](https://www.manualweb.net/php/) utilizamos la palabra clave `new` seguida del nombre de la clase y entre paréntesis los valores que le podemos pasar para construir el objeto. Como ya veremos, los valores que está esperando el constructor de la clase.


El objeto queda almacenado dentro de una variable dentro de nuestro [código PHP](https://www.manualweb.net/php/).


### Mi primer objeto en PHP


Ya tenemos nuestras clases sobre _cuadrados, rectángulos, triángulos, círculos,…_ definidas y ya sabemos cómo podemos instanciar objetos en [PHP](https://www.manualweb.net/php/), por lo que vamos a ver cómo podemos ir creando diferentes objetos.


De la clase `Cuadrado`:


```php
$cuadrado1 = new Cuadrado(5); // Cuadrado con lado de longitud 5
$cuadrado2 = new Cuadrado(7); // Cuadrado con lado de longitud 7
```


De la clase `Rectangulo`:


```php
$rectangulo1 = new Rectangulo(4, 6); // Rectángulo con lados de longitud 4 y 6
$rectangulo2 = new Rectangulo(3, 5); // Rectángulo con lados de longitud 3 y 5
```


De la clase `Triangulo`:


```php
$triangulo1 = new Triangulo(3, 4); // Triángulo con base de longitud 3 y altura 4
$triangulo2 = new Triangulo(5, 6); // Triángulo con base de longitud 5 y altura 6
```


Y por último de la clase `Circulo`:


```php
$circulo1 = new Circulo(5); // Círculo con radio 5
$circulo2 = new Circulo(7); // Círculo con radio 7
```


Vemos que en este caso no pasamos el valor del perímetro ya que este se calcula en el constructor mediante el valor del rádio.


Con esto ya sabemos un poco más de programación orientada a objetos (poo) en [PHP](https://www.manualweb.net/php/) para poder crear clases y objetos en [PHP](https://www.manualweb.net/php/).

