---
title: Historia del lenguaje Java
permalink: /java/historia-java/
---

## Los Inicios de Java

El lenguaje [Java][ManualJava] fue desarrollado en sus inicios por [James Gosling][JamesGosling], en el año 1991. Inicialmente [Java][ManualJava] era conocido como **Oak** o **Green**.

La primera versión del lenguaje [Java][ManualJava] es publicada por [Sun Microsystems][SunMicrosystems] en 1995. Y es en la versión del lenguaje JDK 1.0.2, cuando pasa a llamarse [Java][ManualJava], corría el año 1996.

En las primeras versiones de *[Java][ManualJava] 1.1, 1.2 y 1.3* es en la que el lenguaje va tomando forma, con la inclusión de tecnologías como **JavaBeans**, **JDBC** para el acceso a base de datos, **RMI** para las invocaciones en remoto, **Collections** para la gestión de múltiples estructuras de datos o **AWT** para el desarrollo gráfico, entre otros.

## Java Community Process (JCP)

La versión *[Java][ManualJava] 1.4* pasa a ser la primera versión gestionada por la comunidad mediante el **Java Community Process (JCP)**.

Se trabaja con **Java Specification Requests (JSRs)** que son las nuevas funcionalidades que se busca que tenga el lenguaje.

*[Java][ManualJava] 1.4* se liberaba como [JSR 59][JSR59], corría el año 2002. ALgunas de las características que contenía eran: **librería NIO** para IO no bloqueante, **JAXP** para el procesado de [XML][ManualXML] y [XSLT][ManualXSLT] o el **API para preferencias**.

## Java 5

En 2004 se estaba trabajando con la versión *[Java][ManualJava] 1.5*, pero con vistas a reflejar el nivel de madurez de la plataforma [Java][ManualJava] se renombra a *[Java][ManualJava] 5*.

A partir de este momento se identifica el JDK con la versión 1.x, mientras que la plataforma [Java][ManualJava] sigue con la nueva política de versionado.

Así JDK 1.5 corresponde con *[Java][ManualJava] 5* , JDK 1.6 corresponde con *[Java][ManualJava] 6* ,... y así sucesivamente.

Dentro de *[Java][ManualJava] 5* podemos encontrar el uso de **genéricos**, el **autoboxing/unboxing** entre tipos de datos primitivos y sus clases, el uso de **enumerados** y la aparición del bucle `for-each`.

## Java 6

En el año 2006 aparece la versión *[Java][ManualJava] 6* en la que podíamos encontrar cosas como el **soporte de lenguajes de script**, facilidades para la exposición y consumo de webservices mediante **JAX-WS**, nuevos tipos de drivers con **JDBC 4** y la versión 2 de **JAXB**.

## Java como Open Source

Una de las cosas que sucede en noviembre 2006 es que [Sun Microsystems][SunMicrosystems] lo convierte en Open Source mediante una licencia GNU General Public License (GPL).

Dando lugar en mayo 2008 a lo que se conoce como [OpenJDK][OpenJDK], con OpenJDK 6.

## Java 7

Llegado julio de 2011 ve la luz *[Java][ManualJava] 7*, la cual trae como novedades el **soporte de lenguajes dinámicos**, dotando a la JVM de un soporte de mútiples lenguajes y una **nueva librería I/O para el manejo de ficheros**.

También aparecen cosas menores, pero muy útiles como el **manejo de String dentro de la validación en una estructura switch** o la capacidad de **poner subrayados en los números para que se puedan leer mejor**.

## Versión actual: Java 8

La última versión de Java distribuida es *[Java][ManualJava] 8*, aparecida en marzo de 2014.

Entre las características de *[Java][ManualJava] 8* tenemos el **soporte expresiones Lambda y uso de Streams**, que permiten un estilo más funcional para los programas [Java][ManualJava]. Dentro de este enfoque más funcional también aparecen las **transformaciones MapReduce**.

Ve la luz el *Proyecto Nashorn* para disponer de un engine [Javascript][ManualJavascript] y así poder incluir este lenguaje dentro de las aplicaciones [Java][ManualJava].

Otras cosas son un **nuevo API Date y Time** y la inclusión de **JavaFX 8** dentro de la JDK de [Java][ManualJava].

## Java 9

Aunque en el roadmap se esperaba que *[Java][ManualJava] 9* estuviera disponible para el 2016, los problemas de seguridad encontrados dentro de la plataforma causaron la demora para 2017.
Java 9, lanzado en septiembre de 2017, introdujo varias características y mejoras significativas en el lenguaje y en la plataforma Java. A continuación se mencionan algunas de las características clave de Java 9:

Módulos de plataforma Java (Java Platform Module System, JPMS): Java 9 introdujo el concepto de módulos, que proporciona una forma de modularizar y organizar el código en la plataforma Java. Esto ayuda a mejorar la escalabilidad, el rendimiento y la seguridad de las aplicaciones Java.

JShell: JShell es una nueva herramienta de línea de comandos que permite escribir y ejecutar fragmentos de código Java de manera interactiva, lo que facilita la experimentación y el aprendizaje del lenguaje.

Mejoras en el sistema de recolección de basura (Garbage Collection, GC): Se introdujo el recolector de basura G1 como recolector de basura por defecto en lugar del recolector Parallel GC. G1 proporciona una mejor gestión de la memoria y un mejor rendimiento para aplicaciones con grandes cantidades de datos.

API de procesamiento de flujo (Stream API): Se agregaron varios métodos nuevos a la API de Streams para facilitar la manipulación y el procesamiento de datos en forma de secuencias (streams) en Java.

Interfaz de flujo reactivo (Reactive Streams API): Java 9 incluye la API Reactive Streams, que proporciona una forma estándar de trabajar con secuencias de datos asincrónicas y basadas en eventos, lo que facilita la programación reactiva.

Módulo HTTP/2: Se agregó un módulo HTTP/2 para proporcionar soporte nativo para el protocolo HTTP/2 en Java, lo que mejora el rendimiento y la eficiencia en las comunicaciones web.

Estas son solo algunas de las características destacadas de Java 9. La versión también incluyó mejoras en el rendimiento, correcciones de errores y otras características menores que contribuyeron a la evolución de la plataforma Java.[Java9]

## Java 10

Java 10, lanzado en marzo de 2018, introdujo varias características y mejoras en el lenguaje y en la plataforma Java. Algunas de las características destacadas de Java 10 incluyen:

Inferencia de tipos de variables locales: Java 10 introdujo la inferencia de tipos var para variables locales. Ahora puedes declarar una variable local sin especificar su tipo y dejar que el compilador infiera automáticamente el tipo en función del valor asignado.

Mejoras en la API de recolección de basura (GC): Se introdujeron mejoras en la interfaz de programación de aplicaciones (API) de recolección de basura, incluyendo una nueva interfaz experimental Garbage Collector (GC) llamada "Garbage-First" (G1) que está diseñada para mejorar el rendimiento y la eficiencia de la recolección de basura.

Mejoras en la API de Streams: Se agregaron nuevos métodos en la API de Streams, como takeWhile() y dropWhile(), que permiten operaciones de filtrado basadas en una condición hasta que la condición se cumpla o deje de cumplirse.

Operaciones de copia segura para JDK: Se introdujeron mejoras en las operaciones de copia segura (Secure Copy) en el JDK (Java Development Kit), lo que permite copiar archivos y directorios de manera segura y confiable.

Compilación JIT basada en AOT: Java 10 presentó la compilación Just-In-Time (JIT) basada en Ahead-Of-Time (AOT) para mejorar el rendimiento de las aplicaciones Java. Esto permite compilar partes del código fuente a código de máquina antes de la ejecución, lo que puede resultar en una mejora del rendimiento.

Estas son solo algunas de las características destacadas de Java 10. Hay otras mejoras y cambios menores en la versión que también contribuyeron a la evolución de la plataforma Java. [Java10]

## Java 11

Algunas de las características de Java 11 son:
1-Local-Variable Syntax for Lambda Parameters: Permite declarar explícitamente los tipos de parámetros lambda.
2-Flight Recorder: Proporciona una herramienta para la grabación de datos de ejecución del sistema.
3-HTTP Client (Standard): Incorpora una API para el cliente HTTP estándar.
4-Epsilon: un recolector de basura experimental que no realiza ninguna recolección de basura.
5-Single-File Source-Code Programs: Permite ejecutar programas de Java de un solo archivo sin necesidad de definir una clase pública.
6-Soporte para Unicode 10.0.
7-Mejoras en la seguridad y en la privacidad.
8-La eliminación de herramientas y características obsoletas, como jhat, jconsole y java.security.acl.
9-Soporte para TLS 1.3.
10-Soporte para nuevos sistemas operativos y arquitecturas, como macOS 10.14, Windows 10, AArch64 y PowerPC64. [Java11]

## Java 12

Algunas de las características de Java 12 son:

1-Switch Expressions (Preview): Introduce una nueva sintaxis para las expresiones de switch, lo que permite asignar un valor directamente desde un case.
2-Raw String Literals (Preview): Permite utilizar literales de cadena sin necesidad de escapar caracteres especiales, lo que facilita la escritura de expresiones regulares y código HTML.
3-Garbage Collector: Introduce un nuevo recolector de basura experimental llamado Shenandoah, que está diseñado para minimizar los tiempos de pausa.
4-Microbenchmark Suite: Proporciona una suite de pruebas de referencia para la medición y comparación de rendimiento.
5-Compact Number Formatting: Agrega soporte para formatos compactos de números, lo que permite representar grandes números de forma más legible.
6-Abortable Mixed Collections for G1: Mejora el recolector de basura G1 al permitir la recopilación selectiva de subconjuntos de objetos en una colección.
7-Application Class-Data Sharing: Permite compartir datos de clase entre diferentes máquinas virtuales de Java para mejorar los tiempos de inicio y reducir el uso de memoria.
8-Nuevo encodificador de tiempo: Agrega una nueva API para trabajar con fechas y tiempos, incluyendo la capacidad de crear y manipular períodos y duraciones.

Estas son algunas de las características destacadas de Java 12, pero hay otras mejoras y correcciones menores incluidas en esta versión.[Java12]

## Java 12

Algunas de las características de Java 13 son:

1-Text Blocks (Preview): Introduce una nueva sintaxis para literales de cadena multilínea, lo que facilita la escritura y lectura de bloques de texto.
2-Switch Expressions (Final): El uso de las expresiones de switch se ha mejorado y se ha movido de la vista previa a una característica final.
3-Mejoras en el recolector de basura: Se han realizado mejoras en el recolector de basura para reducir los tiempos de pausa y mejorar el rendimiento.
4-Nuevas funciones de la API de tiempo: Se han agregado nuevas funciones a la API de tiempo, incluyendo el soporte para la manipulación de fechas y horas en diferentes calendarios.
5-Mejoras en la memoria compartida: Se han realizado mejoras en la memoria compartida para reducir los tiempos de inicio y mejorar el rendimiento de las aplicaciones.
6-Actualizaciones en la API de cadenas: Se han realizado mejoras en la API de cadenas, incluyendo nuevas funciones para la manipulación de cadenas y la comparación de texto.
7-Nuevas funciones experimentales: Se han agregado varias funciones experimentales, como la mejora de los recolectores de basura ZGC y Shenandoah, y la API de filtrado de imágenes.
8-Estas son algunas de las características destacadas de Java 13, pero también incluye mejoras en el rendimiento, correcciones de errores y actualizaciones de bibliotecas.

 [ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
 [JamesGosling]: https://www.linkedin.com/in/jamesgosling/
 [SunMicrosystems]: https://en.wikipedia.org/wiki/Sun_Microsystems
 [JSR59]: https://www.jcp.org/en/jsr/detail?id=59
 [ManualXML]: http://www.manualweb.net/tutorial-xml/ "Manual XML"
 [ManualXSLT]: http://www.manualweb.net/tutorial-xslt/ "Manual XSLT"
 [OpenJDK]: http://openjdk.java.net/
 [ManualJavascript]: http://www.manualweb.net/tutorial-javascript/ "Manual Javascript"
 [Java9]: http://blog.takipi.com/5-features-in-java-9-that-will-change-how-you-develop-software-and-2-that-wont/
 [Java10]: https://chat.openai.com/ "Características de Java 9 y Java 10"
 [Java11]: https://chat.openai.com/ "Características de Java 11"
 [Java12]: https://chat.openai.com/ "Características de Java 12"
 [Java13]: https://chat.openai.com/ "Características de Java 12"
 
