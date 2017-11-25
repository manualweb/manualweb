---
title: Instalar Java
permalink: /java/instalar-java/
---

Para instalarnos el compilador [Java][ManualJava] lo primero que deberemos de hacer es descargarlo de la web de Oracle. A día de hoy (*abril 2017*) podemos [bajarnos la versión **Java 8** del compilador desde la web de Oracle][JavaSDK].

De ella nos podemos bajar el kit de desarrollo (**Java SE Development Kit**) y el entorno de ejecución (**Java SE Runtime Environment**).

> Es importante que si vamos a desarrollar con [Java][ManualJava] nos descarguemos el **Java SE Development Kit**

### Proceso de instalación

En el proceso de instalación deberemos de introducir algunos datos como el directorio de instalación del compilador y las partes del software que queremos instalar.

Entre estas partes podremos elegir las *herramientas de desarrollo*, *el código fuente*, *las demos* y el *entorno de ejecución*. Es recomendable instalar todas. Más vale que sobre a que falte.

![Instalar Kit Desarrollo Java][InstalarJava]{:class="img-responsive"}

Una vez que hayamos confirmado, la instalación empieza a ejecutarse la instalación, por lo que nos aparecerá un progreso de instalación.

![Progreso Instalación Java][InstalarJavaProgreso]{:class="img-responsive"}

Cuando se termine la instalación, el programa nos sacará una ventana en la que podremos ver que se ha instalado correctamente y nos permite lanzar los siguientes pasos para empezar con [Java][ManualJava]

![Instalar Kit Desarrollo Java Finalizado][InstalarJavaFinalizado]{:class="img-responsive"}

Ahora podremos ir al directorio en el cual nos ha realizado la instalación. En nuestro caso en:

<samp>C:Program FilesJavajdk1.8.0_131bin</samp>

Y podemos ejecutar un javac, que es el nombre del compilador, para ver que se ha instalado correctamente.

Podremos ver que por pantalla nos aparece algo así:

![Comprobar Instalación Kit Desarrollo][ComprobarInstalacion]{:class="img-responsive"}

Ya tendremos el kit de desarrollo de [Java][ManualJava] correctamente instalado.

[ManualJava]: http://www.manualweb.net/tutorial-java/
[JavaSDK]: https://java.com/en/download/ "Descargar Compilador Java"
[InstalarJava]: {{site.baseurl}}/java/img/java-install.png
[InstalarJavaProgreso]: {{site.baseurl}}/java/img/java-install-progress.png
[InstalarJavaFinalizado]: {{site.baseurl}}/java/img/java-install-progress.png
[ComprobarInstalacion]: {{site.baseurl}}/java/img/java-install-check.png
