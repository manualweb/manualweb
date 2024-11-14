---
title: Introducción a Dart
date: 2024-02-04
last_modified_at: 2024-02-04
permalink: /dart/introduccion-a-dart/
excerpt: "En la Introducción a Dart se revisa qué es Dart, sus características principales y sus modelos de compilación."
tags: [google,c,orientado_objetos,tipado,flutter,null,jit,aot,javascript]
image:
  path: /img/covers/dart-cover.webp
---

## ¿Qué es Dart?


Lo primero que tenemos que saber en esta introducción a [Dart](https://www.manualweb.net/dart/) es saber ¿qué es [Dart](https://www.manualweb.net/dart/)? Pues [Dart](https://www.manualweb.net/dart/) es un lenguaje de programación de **código abierto** desarrollado por **Google**. Con una **sintaxis parecida al lenguaje C**, es conocido por su **escalabilidad y su fácil uso**, lo que lo hace ideal para la **creación de aplicaciones web y móviles**. Siendo Flutter, como framework de desarrollo de aplicaciones multiplataforma, su principal foco.


## Características de Dart


Las características principales de [Dart](https://www.manualweb.net/dart/) son:


### **Lenguaje de propósito general**


[Dart](https://www.manualweb.net/dart/) es un lenguaje de programación que puede ser utilizado tanto para el desarrollo de aplicaciones front-end, incluyendo aplicaciones web y móviles, así como para aplicaciones de back-end que proporcionan servicios de servidor. Esta versatilidad lo hace adaptable a una amplia gama de proyectos y necesidades.


### **Orientado a objetos**


[Dart](https://www.manualweb.net/dart/) es un lenguaje que se basa en el paradigma de la programación orientada a objetos. Esta característica facilita la organización y estructura del código, lo que resulta en programas más fáciles de leer, mantener y escalar.


### **Tipado fuerte**


[Dart](https://www.manualweb.net/dart/) es un lenguaje de tipado fuerte, lo que significa que requiere que los programadores especifiquen el tipo de variables que están utilizando. Esta característica ayuda a prevenir errores de programación, ya que el sistema de tipos verifica la coherencia del código antes de que se ejecute.


### **Enfoque en el Framework Flutter**


[Dart](https://www.manualweb.net/dart/) está estrechamente vinculado con Flutter, el framework de desarrollo de aplicaciones de Google. Esto facilita el desarrollo de aplicaciones de alta calidad para iOS, Android y la web, todo desde una única base de código, lo que ahorra tiempo y recursos.


### **Seguridad frente a valores nulos**


[Dart](https://www.manualweb.net/dart/) incluye una característica llamada **"null safety"**, que permite a los programadores restringir que ninguna variable pueda tener el valor `null`. Esta característica es esencial para prevenir muchos errores comunes en la programación, especialmente aquellos que están relacionados con valores no esperados o ausentes.


### **Facilita la adaptación a cualquier navegador web**


[Dart](https://www.manualweb.net/dart/), el lenguaje de programación, puede funcionar de dos formas; en una máquina virtual (MV) o mediante un motor de [JavaScript](https://www.manualweb.net/javascript/) utilizando un compilador para convertir el código. Esto permite su adaptabilidad a cualquier [navegador web](https://www.ayudaenlaweb.com/navegadores/).


## Plataforma Dart


[Dart](https://www.manualweb.net/dart/) se puede compilar de dos formas: la primera **sobre una plataforma de forma nativa** y la segunda **sobre una plataforma web.**


![Plataforma Dart](https://manualweb.net/dart/img/plataforma-dart.svg)


### Dart Nativo


Está enfocado a aplicaciones móviles multi-dispositivo y aplicaciones de escritorio. Dart nos ofrece dos formas de compilación: **compilación en tiempo de ejecución o just-in-time (JIT)** y con un **compilador de tiempo de compilación anticipado o ahead-of-time (AOT)** que nos permite generar código máquina.


La compilación JIT está enfocada a los entornos de desarrollo ya que nos permite compilar de forma ágil, con recompilaciones incrementales, carga en caliente y soporte para la depuración de código.


En el caso de la compilación AOT está más enfocada a entornos de producción, ya sean stores de aplicaciones o en un backend. El compilador puede generar código máquina ARM p x64. El compilador AOT gestiona la memoria utilizando asignación rápida de objetos y un garbage collector generacional.


### Dart Web


Enfocado a aplicaciones que vayan a la web. En este caso el compilador [Dart](https://www.manualweb.net/dart/) nos genera código [JavaScript](https://www.manualweb.net/javascript/) que podemos ejecutar en nuestros [navegadores web](https://www.ayudaenlaweb.com/navegadores/).


Dart Web tiene dos formas de compilación:

- Un compilador de desarrollo incremental que permite un ciclo de desarrollo rápido
- Un compilador optimizado para la producción que compila el código [Dart](https://www.manualweb.net/dart/) a [JavaScript](https://www.manualweb.net/javascript/) de forma rápida. Las eficiencias provienen de técnicas como la eliminación de código muerto.
