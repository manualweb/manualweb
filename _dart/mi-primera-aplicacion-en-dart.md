---
title: Mi primera aplicación en Dart
date: 2024-02-03
last_modified_at: 2024-02-03
permalink: /dart/mi-primera-aplicacion-en-dart/
excerpt: "Pasos que tenemos que dar para poder construir mi primera aplicación en Dart que nos muestre por consola la frase “Hola Mundo”."
tags: [hola mundo]
image:
  path: /img/covers/dart-cover.webp
---

Una vez que hemos visto [¿qué es Dart?](https://www.manualweb.net/dart/introduccion-a-dart/) y hemos [conocido un poco de su historia](https://www.manualweb.net/dart/historia-de-dart/), vamos a ver cómo podemos construir lo que denominamos mi primera aplicación en Dart.


Ahora tendremos que echar un ojo a [cómo instalar Dart o cómo ejecutarlo desde un contenedor en Docker](https://www.manualweb.net/dart/instalar-dart/).


Lo primero será crear un **fichero de texto con la extensión .dart**. Ya entraremos en los editores de código que existen para poder ejecutar un programa [Dart](https://www.manualweb.net/dart/), pero cualquiera que utilices seguro que te sirve para poder crear mi primera aplicación en [Dart](https://www.manualweb.net/dart/). Y a este lo llamaremos:


```shell
hola-mundo.dart
```


Cuando empezamos a codificar nuestros programas en [Dart](https://www.manualweb.net/dart/) tenemos que saber que siempre tiene que existir una función principal que se llamará `main`. La cual tiene un modificador de retorno que es `void`, lo que viene a decir que la función no devuelve nada.


```dart
void main() {

}
```


Dentro de esta función principal es donde escribiremos la lógica de nuestra aplicación. Como primer paso, vamos a imprimir un simple mensaje en la consola que ponga la frase “Hola Mundo”.


Para ello vamos a utilizar la función `print()`, la cual recibe como parámetro el texto de “Hola Mundo”.


```dart
void main() {
  print('Hola Mundo');
}
```


Una vez codificado el archivo, deberás de guardarlo para poder pasar a ejecutarlo. Para poder ejecutarlo deberemos de ir a la consola de comandos y utilizar el programa `dart`.


Lo que escribiremos será `dart` seguido del nombre de nuestro fichero hola-mundo.dart.


```shell
$ dart hola-mundo.dart
Hola Mundo
```


Veremos que por consola nos aparece el mensaje “Hola Mundo”. De esta forma ya habremos conseguido codificar mi primera aplicación en [Dart](https://www.manualweb.net/dart/) con unos conocimientos muy básico.


Ahora seguiremos aprendiendo todas las capacidades que nos ofrece el lenguaje [Dart](https://www.manualweb.net/dart/).

