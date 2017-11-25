---
title: Mi primera aplicación en Java
permalink: /java/mi-primera-aplicacion-java/
---

## Primeros Pasos

Empezando con [Java][ManualJava] Me siento ante el ordenador y pienso que voy a escribir mi primera aplicación [Java][ManualJava]. ¿Cómo? ¿Qué necesito? ¿Por dónde empiezo?...... (las dudas me asaltan). No te preocupes, para eso estamos nosotros.

Antes de crear mi primer programa en [Java][ManualJava] deberé de asegurarme que tengo en el equipo el siguiente software:

*  **Un editor de textos** (Por ejemplo, el bloc de notas de Windows, [Wim][Wim], [AM-Notebook][AMNotebook], [Win32Pad][Win32Pad], [EditPad Lite][EditPadLite], [NotePad2][NotePad2],...)

* **El compilador de Java**

Supongo que el primero, por descontado, lo tendréis a mano. O, al menos, algo similar. Para los usuarios avanzados en el tema les dejare utilizar el **Atom**, **Sublime** y similares.

El compilador de [Java][ManualJava] será el que nos permita transformar nuestro código fuente en programas ejecutables. O.... bueno, podríamos decir que en algo similar a programas ejecutables. Ya veremos en que.

Siguiendo los pasos que se explican en el artículo [Cómo instalar Java][InstalarJava] podremos tener nuestro entorno preparado para poder desarrollar nuestra primera aplicación [Java][ManualJava]

## Hola Mundo en Java

Ahora que tenemos todo el entorno de desarrollo instalado nos lanzamos a desarrollar, ni más, ni menos, que nuestra primera aplicación Java.

Lógicamente, nuestra primera aplicación no podría ser otra que “Hola Mundo”. Por si algún despistado todavía no se ha enterado de que va esta aplicación, decirle, simplemente, que es mostrar por pantalla la frase “Hola Mundo”. Complejo, ¿verdad?.

El código de nuestra primera aplicación [Java][ManualJava] es el siguiente:

~~~java
public class MiPrimeraAplicacion {
  public static void main (String[] args) {
    System.out.println("Hola Mundo");
  }
}
~~~

El fichero lo guardaremos como **MiPrimeraAplicacion.java**. Este será nuestro fichero con el código fuente.

> Deberemos de tener cuidado en cómo escribimos el nombre del fichero ya que [Java][ManualJava] es un **lenguaje sensible a mayúsculas**, es decir, que no es lo mismo poner miprimeraaplicacion o MiprimeraAplicacion o MIPRIMERAAPLICACION o ... El nombre del fichero deberá de coincidir con el nombre de la clase principal.

<pre>public class MiPrimeraAplicacion &lt;--&gt; MiPrimeraAplicacion.java</pre>

La verdad es que a estas alturas de la película no nos vamos a centrar en que significa cada una de las líneas de código.

Si bien, no es que haya que ser muy listo, para, al menos, darnos cuenta de que con la sentencia [System.out.println][SystemOut] se pueden volcar contenidos a la pantalla del ordenador.

## Uso del compilador javac

El compilador de [Java][ManualJava] se llama **javac** (la c es de compilador, claro). Este no deja de ser un programa ejecutable como otro cualquiera.

En el caso de estar en un sistema operativo Windows, el compilador suele estar instalado (si hemos seguido la instalación por defecto) en:

<samp>C:\\Program Files\\Java\\jdk1.8.0_51.jdk\\bin</samp>

Si estamos trabajando con un MacOS podemos ejecutar el comando.

<kbd>/usr/libexec/java_home</kbd>

El cual nos indicará en qué directorio se encuentra instalado [Java][ManualJava].

Lo que ya podemos aventurarnos a ejecutar el compilador. Para ello ejecutaremos el programa:

<kbd>javac</kbd>

Al ejecutar el compilador veremos por pantalla algo así:

![Opciones JavaC][OpcionesJavaC]{:class="img-responsive"}

Uff... vaya cantidad de opciones... No te preocupes por ellas, ya que para compilar mi aplicación deberé de poner por consola lo siguiente...

<kbd>javac MiPrimeraAplicacion.java</kbd>

Esta ejecución supone que tenemos el código fuente en el mismo directorio que el compilador, si bien, eso no será lo más corriente.

## Configurando en Path para Java

Para poder ejecutar el compilador en cualquier directorio de máquinas Windows deberemos de insertar el directorio donde se ubica el compilador en la **variable de entorno PATH**.

Para ello, escribiremos lo siguiente....

<kbd>SET PATH = %PATH%;C:\\Program Files\\Java\\jdk1.8.0_51.jdk\\bin</kbd>

Ahora podremos ejecutar el compilador desde cualquier sitio. Así, debería de funcionarnos lo siguiente...

<kbd>C:\\WORK\\Ejemplos1\\javac MiPrimeraAplicacion.java</kbd>

## Compilando mi primera aplicación Java

Si hemos compilado de forma correcta nuestro programa, simplemente la respuesta por pantalla será la siguiente:

![Compilar Mi Primera Aplicación Java][CompilarJavaC]{:class="img-responsive"}

Vamos que si no nos dice nada de nada es que lo hemos hecho muy bien. En el caso de que hubiéramos metido la pata saldrían cosas como las siguientes...

![Error al compilar Mi Primera Aplicación Java][ErrorJavaC]{:class="img-responsive"}

Esto es que el nombre de la clase y del fichero no existe. Múltiples errores se nos pueden producir.

## Ejecutando mi aplicación

Una vez que hemos ejecutado correctamente la compilación, sorpresa, no obtenemos un fichero ejecutable, es decir, un .exe o similar. Si no que obtenemos un fichero **.class**. En este caso obtendremos un fichero **MiPrimeraAplicacion.class**.

[Java][ManualJava] es un lenguaje multiplataforma que está construido bajo el principio de *"write once, run anywhere”*. Esto quiere decir que, una vez creado el fichero fuente y compilado, el resultado (llamémoslo, de momento, nuestro pseudo-fichero ejecutable) lo podemos ejecutar en cualquier otro ordenador.

Revisemos algún concepto sobre compiladores. En un proceso de compilación normal seguimos los siguientes pasos:

![Flujo de Compilacion][FlujoCompilacion]{:class="img-responsive"}

Esto nos viene a decir que si yo compilo un programa, por ejemplo, en C, en mi máquina Windows 8.1 sobre una plataforma Intel. Solo va a funcionar en maquinas con esa configuración.

Si yo llevo mi programa a una máquina con UNIX en una plataforma Solaris no me va a funcionar. ¿Qué hace [Java][ManualJava] para que eso pueda hacerse?.

[Java][ManualJava], más concreto, en los lenguajes interpretados, el compilador genera un código intermedio (más o menos legible).

En el caso de [Java][ManualJava], el código intermedio se llama **bytecodes**. Este código no es dependiente ni del sistema operativo ni de la máquina en el cual lo ejecutamos.

En un segundo paso, un interprete, ejecutará dichos **bytecodes** en la plataforma que queramos. Es decir, que el interprete ya es especifico del sistema operativo y de la plataforma de ejecución.

El esquema quedaría de la siguiente forma...

![Flujo de Compilación Java][FlujoCompilacionJava]{:class="img-responsive"}

Centrándonos, nuevamente, en nuestra aplicación, encontraremos un fichero **MiPrimeraAplicacion.class** que será el fichero con los **bytecodes**.

El programa que va a ejecutar dichos **bytecodes** es java. Este programa está en el mismo directorio en el que estaba el compilador.

Volvamos a arriesgarnos y ejecutemos el compilador. Recordad que al tener el directorio en la variable de entorno PATH podremos estar en cualquier directorio.

<kbd>java</kbd>

Este, tiene más opciones que el compilador...

![Opciones Java][OpcionesJava]{:class="img-responsive"}

Para ejecutar nuestra aplicación escribiremos

<kbd>java MiPrimeraAplicacion</kbd>

Ahhhhhhhhhhhhhhh............ ya me lo he cargado ... **Exception in thread “main” java.lang.NoClassDefFoundError** ¡y yo con estos pelos!

Es normal que la primera vez que ejecutemos nos pueda suceder esto. A si que no nos preocupemos.

Esto sucede debido a que el interprete java busca los ficheros .class en los directorios que define la variable de entorno **CLASSPATH**.

Es por ello que si queremos ejecutar una clase que esta en el directorio actual deberemos de tener, al menos, dicho directorio en la variable de entorno.

Cuando escribamos aplicaciones más grandes utilizaremos clases creadas por Java, a si que deberemos de tener en el CLASSPATH la ruta de dichas clases. Para solucionar todo este embrollo podemos escribir lo siguiente.

<kbd>set CLASSPATH=.</kbd>

Notar que el punto hace referencia al directorio actual.

Si tu eres una de esas personas que no puede dejar nada fuera de control, te recomiendo que te leas el documento [JDK Installation for Microsoft Windows][InstalarJavaWindows] . Todo lo que siempre quisiste saber sobre la variable **CLASSPATH** y nunca te atreviste a preguntar. :-)

Ahora, ya si que podremos ejecutar nuestra aplicación. Al fin, el resultado esperado...

![Ejecutando Mi Primera Aplicación Java][EjecutandoAppJava]{:class="img-responsive"}

[ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
[Wim]: http://www.vim.org/download.php#pc "Wim"
[AMNotebook]: http://aignes.com/notebook.htm "AM-Notebook"
[Win32Pad]: http://www.gena01.com/win32pad "Win32Pad"
[EditPadLite]: http://www.editpadpro.com/editpadlite.html "EditPadLite"
[NotePad2]: http://www.flos-freeware.ch/notepad2.html "NotePad2"
[InstalarJava]: http://www.manualweb.net/java/instalar-java/
 [InstalarJavaWindows]: https://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html#CHDEBCCJ "JDK Installation for Microsoft Windows"
[SystemOut]: http://www.w3api.com/wiki/Java:System.out

[OpcionesJavaC]: {{site.baseurl}}/java/img/javac.png
[CompilarJavaC]: {{site.baseurl}}/java/img/javac-compilar.png
[ErrorJavaC]:  {{site.baseurl}}/java/img/javac-error-compilacion.png
[FlujoCompilacion]: {{site.baseurl}}/java/img/flujo-compilacion.png
[FlujoCompilacionJava]: {{site.baseurl}}/java/img/flujo-compilacion-java.png
[OpcionesJava]: {{site.baseurl}}/java/img/java-opciones.png
[EjecutandoAppJava]:  {{site.baseurl}}/java/img/java-mi-primera-aplicacion.png
