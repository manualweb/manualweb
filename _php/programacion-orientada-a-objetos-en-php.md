---
title: Programación Orientada a Objetos en PHP
date: 2024-05-19
last_modified_at: 2024-05-19
permalink: /php/programacion-orientada-a-objetos-en-php/
excerpt: "La Programación Orientada a Objetos en PHP es una técnica de programación que permite organizar el código en clases y objetos."
tags: [poo,objetos,clases,herencia,encapsulación,polimorfismo,composición,pruebas unitarias]
image:
  path: /img/covers/php-cover.webp
---

## ¿Qué es la Programación Orientada a Objetos (POO) en PHP?


La Programación Orientada a Objetos (POO) en [PHP](https://www.manualweb.net/php/) es una técnica de programación que permite organizar el código en **estructuras llamadas clases**, que son las definiciones generales de un concepto y en **objetos, que son las instancias de dichas clases** con unos valores concretos.


La definición de funcionalidades en clases nos permite reutilizar dicho código a lo largo de nuestros programas y facilita el mantenimiento de dichas funcionalidades.


De esta manera podemos utilizar la programación orientada a objetos (POO) en [PHP](https://www.manualweb.net/php/) para definir desde elementos funcionales o de negocio como puede ser _clientes, productos, cestas de compra,…_ a elementos más técnicos como pueden ser clases y objetos para a_cceder a bases de datos, guardar información de logs, encriptar y desencriptar datos,…_


## Principios clave de la Programación Orientada a Objetos 


En el mundo de la programación, la programación orientada a objetos (POO) es una de las técnicas más utilizadas y sus principios clave son los siguientes:

- **Clases y Objetos:** Estos son los componentes fundamentales de cualquier programa POO. Una clase es como un plano que define las características (atributos) y comportamientos (métodos) comunes de un objeto. El objeto es una implementación concreta de una clase.
- **Encapsulación**: Este concepto se refiere a la ocultación de los detalles de implementación de una clase y la exposición solo de las operaciones que los usuarios necesitan.
- **Herencia:** Este principio permite que una clase adquiera las propiedades y comportamientos de otra clase, lo que ayuda a reducir la redundancia y mejora la reutilización del código.
- **Polimorfismo:** Este término se refiere a la capacidad de un objeto para adoptar muchas formas. El polimorfismo permite que un objeto se comporte de una manera diferente según el contexto.
- **Abstracción:** Este principio se basa en simplificar la complejidad al ocultar detalles innecesarios y mostrar solo la funcionalidad relevante.
- **Composición:** Este concepto se refiere a la idea de construir clases complejas a partir de clases más simples mediante la combinación y agrupación de las mismas.

## Beneficios de la Programación Orientada a Objetos en PHP


El proceso de [desarrollo de código fuente en PHP](https://lineadecodigo.com/categoria/php/), en particular, al hacer uso de los principios de la programación orientada a objetos (OOP) en [PHP](https://www.manualweb.net/php/), nos proporciona una gama de beneficios significativos que vale la pena destacar.

- En primer lugar, **facilita enormemente el mantenimiento del código**. Esto se debe a que la programación orientada a objetos en [PHP](https://www.manualweb.net/php/) permite un código más limpio y estructurado, lo que resulta en un mantenimiento más sencillo y menos propenso a errores.
- En segundo lugar, **mejora la comprensión del código**, especialmente en proyectos de gran escala. El uso de objetos y clases en la programación facilita la comprensión de cómo se estructura y funciona el código, lo que resulta especialmente útil cuando se trabaja en proyectos de gran envergadura.
- En tercer lugar, **permite la reutilización de código en diferentes partes de los programas**. Esto significa que puedes escribir una pieza de código una vez y usarla en múltiples lugares, lo que aumenta la eficiencia y reduce la posibilidad de errores.
- Además, la programación orientada a objetos **ayuda en las pruebas unitarias**. Las pruebas unitarias son más fáciles de escribir y comprender cuando el código se divide en objetos.
- Por último, pero no menos importante, la programación orientada a objetos es **compatible con varios frameworks de desarrollo**, ya que normalmente están escritos de esta forma. Puede ser los casos de **Laravel, Symfony o CodeIgniter**. Por lo que amplía aún más las posibilidades de desarrollo y permite a los desarrolladores aprovechar una amplia gama de herramientas y funcionalidades adicionales.

## Ejemplo de Programación Orientada a Objetos en PHP


Aunque en los siguientes capítulos entraremos más en detalle sobre la programación orientada a objetos en [PHP](https://www.manualweb.net/php/) vamos a ver un primer ejemplo para ver cómo quedaría.


En este caso vamos a definir una clase `Libro` en la cual vamos a encapsular su información como _título, autor, ISBN y editorial_. Para signar los valores de forma inicial deberemos de definir un constructor. Además, dicha información la haremos disponible mediante una serie de métodos para poder acceder a ella. Lo último que haremos será definir objetos que instancien dicha clase con valores en concreto y sobre los que accederemos a sus métodos.


El código de nuestra clase `Libro` y sus objetos quedará de la siguiente forma:


```php
<?php

class Libro {

  private $titulo;
  private $autor;
  private $isbn;
  private $editorial;

  public function __construct($titulo,$autor,$isbn,$editorial) {
    $this->titulo = $titulo;
    $this->autor = $autor;
    $this->isbn = $isbn;
    $this->editorial = $editorial;
  }

  public function getTitulo() {
    return $this->titulo;
  }

  public function getAutor() {
    return $this->autor;
  }

}
  
$l1 = new Libro("Roma Soy Yo","Santiago Posteguillo","9788466671781","B");
$l2 = new Libro("Alexandros","Valerio Massimo Manfredi","8425334187","Grijalbo");

echo $l1->getTitulo();
echo $l2->getAutor();

?>
```


Ahora pasaremos a entrar en detalle sobre todos los elementos de la programación orientada a objetos en `PHP`.

