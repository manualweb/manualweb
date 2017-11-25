---
title: Tecnologías Java
permalink: /java/tecnologias-java/
---

Dentro de [Java][ManualJava] existen diferentes tecnologías de desarrollo, cada una enfocada a un fin diferente, ya sea la base del lenguaje [Java][ManualJava], [Java][ManualJava] para el ámbito empresarial, [Java][ManualJava] para el desarrollo de aplicaciones móviles,...

Cada una de las tecnologías de desarrollo del lenguaje [Java][ManualJava] contiene:

1.  Java Virtual Machine (JVM)
2.  API de desarrollo de la plataforma

La aplicación se ejecuta dentro de la *Java Virtual Machine (JVM)* y tiene capacidad de accerder al API, que son las librerías con funcionalidades que nos ofrece [Java][ManualJava].

Las tecnologías que existen en la **plataforma [Java][ManualJava]** son:

*   Java SE
*   Java EE
*   Java ME
*   Java Card

## Java SE

Java SE es la plataforma estándar y objetivo de este tutorial sobre [Java][ManualJava] en la cual se recogen todas las funcionalidades básicas del lenguaje.

Dentro de estas funcionalidades básicas de [Java][ManualJava] encontramos: el uso de **colecciones**, acceso a ficheros con **Java IO y NIO** y bases de datos con **JDBC**, librerías para el desarrollo de aplicaciones de escritorio o web como **Swing** o **JavaFX**, librerías para la **fecha y hora**, posibilidad de crear aplicaciones **multi-hilo**, capacidades para realizar **conexiones en red**, manejo de contenido **[XML][ManualXML]**... incluso incluye la base de datos **Java DB** para el uso en memoria.

Si estás empezando con [Java][ManualJava] lo más normal es que te bajes las librerías de Java SE.

Puedes consultar [todo el contenido de Java SE][JavaSE].

## Java EE

Java EE se crea para poder realizar aplicaciones empresariales con [Java][ManualJava]. De esta forma se dota a Java EE con capacidades de desarrollo de aplicaciones de servidor con tecnologías como **Servlets**, **JSP** o **EJB**.

Java EE nos permite realizar el desarrollo de servicios, ya sean WSDL (con **JAX-WS**), REST (con **JAX-RS**), o la creación de **websockets**.

Además ofrece un API de persistencia de objetos con **JPA**, capacidades de mensajería con **Java Message**, de email con **Java Mail** o gestión de **procesos batch**.

Puedes consultar [todo el contenido de Java EE][JavaEE].

## Java ME

Java ME es la implementación de [Java][ManualJava] que nace para la creación de aplicaciones móviles.

Si bien con el paso del tiempo se ha ido enfocando más para el desarrollo de dispositivos *IoT (Internet of Things)*: televisiones, sensores, impresoras,...

Así, dentro de Java ME podemos encontrar:

*   **Java TV**, para el desarrollo de aplicaciones en TV o en dispositivos multimedia.
*   **Java Embedded**, que nos permite crear diferentes perfiles de desarrollo de "aplicaciones incrustadas", que además no tienen interface gráfica.

Puedes encontrar [más información sobre lo que es Java ME][JavaME]

## Java Cards

Es la tecnología de [Java][ManualJava] que nos sirve para el desarrollo de aplicaciones que vayan a ir en tarjetas inteligentes, aquellas que llevan un chip y poca capacidad de procesamiento y memoria.

Puedes [leer más sobre Java Cards][JavaCard] y las capacidades que ofrece.

[ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
[ManualXML]: http://www.manualweb.net/tutorial-xml/ "Manual XML"
[JavaSE]: http://www.oracle.com/technetwork/java/javase/tech/index.html
[JavaEE]: http://www.oracle.com/technetwork/java/javaee/tech/index.html
[JavaME]: http://www.oracle.com/technetwork/java/embedded/javame/index.html
[JavaCard]: http://www.oracle.com/technetwork/java/embedded/javacard/documentation/index.html
