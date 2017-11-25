# Tutorial Java

| | |
|---|---|
|autor:|[Víctor Cuervo](http://www.victorcuervo.com)|
|versión:|v0.3|
|fecha:|2017-11-25T11:10:01.942+01:00|
|url:|[Manual Java][ManualJava]|
|github:|[Git Manual Java][GitJava]|

> Disclamer

## Índice
1. Introducción a Java
2. Historia de Java
3. Tecnologías Java
4. Instalar Java
5. Mi primera aplicación Java
6. Conceptos básicos en Java
7. Variables en Java
8. Tipos de Datos Primitivos en Java

# Introducción a Java

[Java][ManualJava] es un lenguaje de programación de propósito general, tipado, orientado a objetos,... que permite el desarrollo desde aplicaciones básicas, pasando por aplicaciones empresariales hasta aplicaciones móviles.

[Java][ManualJava] nacía como un lenguaje de programación que pudiese ser multiplataforma y multidispositivo, bajo el paradigma *"Write Once Run Anywhere" (WORA)*

De esta forma un programa [Java][ManualJava] escrito una vez podemos ejecutarle sobre diferentes plataformas, siendo soportados los sistemas operativos Windows, MacOs y UNIX. Y a su vez en diferentes tipos de dispositivos.

Para poder seguir este paradigma la compilación de un programa [Java][ManualJava] no genera código fuente, si no que genera **bytecodes**. Estos **bytecodes** son interpretados por una máquina virtual o **JVM (Java Virtual Machine)**. Dicha máquina ya está escrita para cada uno de los sistemas operativos en cuestión.

## Características del lenguaje Java

Dentro de las características del lenguaje [Java][ManualJava] encontramos:

### Independiente de Plataforma

Cuando compilamos código fuente [Java][ManualJava] no se genera código máquina específico, si no que se generan **bytecodes**, los cuales son interpretados por la **Java Virtual Machine (JVM)**, posibilitando que un mismo código fuente pueda ser ejecutado en múltiples plataformas.

### Orientado a Objetos

Cualquier elemento del lenguaje [Java][ManualJava] es un objeto. Dentro de los objetos se encapsulan los datos, los cuales son accedidos mediante métodos.

### Sencillo

[Java][ManualJava] está enfocado para ser un lenguaje fácil de aprender. Simplemente se deberán de entender los conceptos básicos de la programación orientada a objetos (POO).

### Seguro

Es seguro ya que los programas se ejecutan dentro de la **Java Virtual Machine (JVM)** en un formato de *"caja de arena"*, de tal manera que no pueden acceder a nada que esté fuera de ella.

Tiene una validación sobre los **bytecodes** para comprobar que no hay códigos de fragmento ilegal.

### Arquitectura Neutral

Independientemente de que se ejecute en una arquitectura de 32bits o de 64bits. En [Java][ManualJava] los tipos de datos siempre ocupan lo mismo.

### Portable

[Java][ManualJava] no tiene nada que dependa de la plataforma, lo cual le hace que sea portable a diferentes plataformas.

### Robusto

El lenguaje [Java][ManualJava] intenta controlar las situaciones de error en los procesos de compilación y de ejecución, reduciendo de esta manera el riesgo de fallo.

Además [Java][ManualJava] realiza el control total de la memoria alocándola y retirandola mediante un **garbage colletor**, de tal manera que no podemos utilizar punteros para acceder a ella.

### Multi-hilo

[Java][ManualJava] nos permite la programación concurrente, de tal manera que un único programa puede abrir diferentes hilos de ejecución.

### Interpretado

Los **bytecodes** son interpretados en tiempo real a código máquina.

### Alto Rendimiento

[Java][ManualJava] ofrece compiladores Just-In-Time que permiten tener un alto rendimiento.

### Distribuido

El lenguaje [Java][ManualJava] está pensando para ser ejecutado en arquitecturas distribuidas, como pueda ser Internet.

# Historia de Java

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

Aunque en el roadmap se esperaba que *[Java][ManualJava] 9* estuviera disponible para el 2016, los problemas de seguridad encontrados dentro de la plataforma han causado que se vaya demorando.

La fecha prevista para disponer de *[Java][ManualJava] 9* es julio 2017.

Dentro de esta versión podremos encontrar el *Project Jigsaw* que establece la **modularización de la JDK**, el **Java Shell** con el que podremos trabajar e interactuar al *estilo RELP (Read–eval–print loop)*, soporte para **http 2.0** y [algunas cosas más][Java9]

# Tecnologías Java9

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

# Instalar Java9
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

# Mi Primera Aplicación Java

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

# Conceptos Básicos
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

# Variables en Java
## ¿Qué son las variables en Java?

Las variables Java son un espacio de memoria en el que guardamos un determinado valor (o dato). Para definir una variable seguiremos la estructura:

~~~java
[privacidad] tipo_variable identificador;
~~~

[Java][ManualJava] es un lenguaje de tipado estático. Por lo cual todas las variables tendrán un tipo de dato (ya sea un **tipo de dato primitivo** o una **clase**) y un nombre de identificador.

El tipo de dato se asignará a la hora de definir la variable. Además, en el caso de que las variables sean propiedades de objetos tendrán una privacidad.

Ejemplos de variables serían...

~~~java
int numero = 2;
String cadena = "Hola";
long decimal = 2.4;
boolean flag = true;
~~~

Las variables son utilizadas como propiedades dentro de los objetos.

~~~java
class Triangulo {
    private long base;
    private long altura;
}
~~~

> No te preocupes por el concepto de objeto, ya que lo revisaremos más adelante cuando hablemos de la Programación Orientada a Objetos

## Tipos de variables en Java

Dentro de [Java][ManualJava] podemos encontrar los siguientes tipos de variables:

*   **Variables de instancia (campos no estáticos)**, son las variables que están definidas dentro de un objeto pero que no tienen un modificador de estáticas (static). Suelen llevar un modificador de visibilidad (public, private, protected) definiéndose.

~~~java
class Triangulo {
    private long base;
    private long altura;
}
~~~

*   **Variables de clase (campos estáticos)**, son aquellas variables que están precedidas del modificador static. Esto indica que solo hay una instancia de dicha variable. Es decir, aunque tengamos N objetos de la clase, la variable estática solo se instancia una vez.

~~~java
class Triangulo {
    static long lados = 3;
}
~~~

Si además queremos que el valor no pueda cambiar nunca la definiremos como final.

~~~java
class Matematicas {
    final static long PI = 3.14159;
}
~~~

*   **Variables locales**, son variables temporales cuyo ámbito de visibilidad es el método sobre el que están definidas. No pueden ser accedidas desde otra parte del código. Se las distingue de las variables de instancia ya que estas no llevan modificadores de visibilidad delante.

~~~java
int variable = 2;
~~~

*   **Parámetros**, son las variables recibidas como parámetros de los métodos. Su visibilidad será el código que contenga dicho método.

~~~java
public Triangulo(long base, long altura){...}
~~~

## Nombres de las variables Java

Cuando vayamos a dar un nombre a una variable deberemos de tener en cuenta una serie de normas. Es decir, no podemos poner el nombre que nos dé la gana a una variable.

Los identificadores son secuencias de texto unicode, sensibles a mayúsculas cuya primer carácter solo puede ser una letra, número, símbolo dolar $ o subrayado _ . Si bien es verdad que el símbolo dolar no es utilizado por convención.

Es recomendable que los nombres de los identificadores sean legibles y no acrónimos que no podamos leer. De tal manera que a la hora de verlos se auto-documenten por sí mismos. Además estos identificadores nunca podrán coincidir con las palabras reservadas.

Algunas reglas no escritas, pero que se han asumido por convención son:

*   Los identificadores siempre se escriben en minúsculas. (pe. nombre). Y si son dos o más palabras, el inicio de cada siguiente palabra se escriba en mayúsculas (pe. nombrePersona)
*   Si el identificador implica que sea una constante. Es decir que hayamos utilizado los modificadores final static, dicho nombre se suele escribir en mayúsculas (pe. LETRA). Y si la constante está compuesta de dos palabras, estas se separan con un subrayado (pe. LETRA_PI).

# Tipos de Datos Primitivos en Java

## ¿Qué son los tipos de datos primitivos en Java?

Como ya hemos comentado [Java][ManualJava] es un lenguaje de tipado estático. Es decir, se define el tipo de dato de la variable a la hora de definir esta. Es por ello que todas las variables tendrán un tipo de dato asignado.

El lenguaje [Java][ManualJava] da de base una serie de tipos de datos primitivos.

*   byte
*   short
*   int
*   long
*   float
*   double
*   boolean
*   char

Es importante saber que estos son tipos de datos del lenguaje y que no representan objetos. Cosa que sí sucede con el resto de elementos del lenguaje [Java][ManualJava].

### byte

Representa un tipo de dato de 8 bits con signo. De tal manera que puede almacenar los valores numéricos de -128 a 127 (ambos inclusive).

### short

Representa un tipo de dato de 16 bits con signo. De esta manera almacena valores numéricos de -32.768 a 32.767.

### int

Es un tipo de dato de 32 bits con signo para almacenar valores numéricos. Cuyo valor mínimo es -231 y el valor máximo 231-1.

### long

Es un tipo de dato de 64 bits con signo que almacena valores numéricos entre -263 a 263-1

### float

Es un tipo dato para almacenar números en coma flotante con precisión simple de 32 bits.

### double

Es un tipo de dato para almacenar números en coma flotante con doble precisión de 64 bits.

### boolean

Sirve para definir tipos de datos booleanos. Es decir, aquellos que tienen un valor de true o false. Ocupa 1 bit de información.

### char

Es un tipo de datos que representa a un carácter Unicode sencillo de 16 bits.

## Valores por defecto de los tipos de datos primitivos

En el caso de que definamos una variable y no le demos ningún valor, por defecto llevarán los siguientes valores:

| Dato Primitivo              | Valor por Defecto |
| --------------------------- | ----------------- |
| byte                        | 0                 |
| short                       | 0                 |
| int                         | 0                 |
| long                        | 0L                |
| float                       | 0\.0f             |
| double                      | 0\.0d             |
| char                        | 'u0000'           |
| String (o cualquier objeto) | null              |
| boolean                     | false             |

Hay un tipo de dato [String][String] para el manejo de cadenas que no es en sí un tipo de dato primitivo. Con el tipo de dato String podemos manejar cadenas de caracteres separadas por dobles comillas.

El elemento [String][String] es un tipo de dato inmutable. Es decir, que una vez creado, su valor no puede ser cambiado.

El [String][String] no es un tipo de dato primitivo del lenguaje [Java][ManualJava]. Pero su uso es igual de importante que el de los tipos de datos revisados aquí. Veremos más en detalle el uso del tipo [String][String].


[ManualJava]: http://www.manualweb.net/tutorial-java/ "Manual Java"
[ManualXML]: http://www.manualweb.net/tutorial-xml/ "Manual XML"
[ManualXSLT]: http://www.manualweb.net/tutorial-xslt/ "Manual XSLT"
[ManualJavascript]: http://www.manualweb.net/tutorial-javascript/ "Manual Javascript"

[JavaSE]: http://www.oracle.com/technetwork/java/javase/tech/index.html
[JavaEE]: http://www.oracle.com/technetwork/java/javaee/tech/index.html
[JavaME]: http://www.oracle.com/technetwork/java/embedded/javame/index.html
[JavaCard]: http://www.oracle.com/technetwork/java/embedded/javacard/documentation/index.html
[Java9]: http://blog.takipi.com/5-features-in-java-9-that-will-change-how-you-develop-software-and-2-that-wont/

[JamesGosling]: https://www.linkedin.com/in/jamesgosling/
[SunMicrosystems]: https://en.wikipedia.org/wiki/Sun_Microsystems
[JSR59]: https://www.jcp.org/en/jsr/detail?id=59
[OpenJDK]: http://openjdk.java.net/
[InstalarJavaWindows]: https://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html#CHDEBCCJ "JDK Installation for Microsoft Windows"

[Wim]: http://www.vim.org/download.php#pc "Wim"
[AMNotebook]: http://aignes.com/notebook.htm "AM-Notebook"
[Win32Pad]: http://www.gena01.com/win32pad "Win32Pad"
[EditPadLite]: http://www.editpadpro.com/editpadlite.html "EditPadLite"
[NotePad2]: http://www.flos-freeware.ch/notepad2.html "NotePad2"

[InstalarJava]: http://www.manualweb.net/java/instalar-java/

[SystemOut]: http://www.w3api.com/wiki/Java:System.out
[String]: http://www.manualweb.net/java/clase-string-representando-una-cadena/ "Clase String Java"


[InstalarJava]: {{site.baseurl}}/java/img/java-install.png
[InstalarJavaProgreso]: {{site.baseurl}}/java/img/java-install-progress.png
[InstalarJavaFinalizado]: {{site.baseurl}}/java/img/java-install-progress.png
[ComprobarInstalacion]: {{site.baseurl}}/java/img/java-install-check.png
[OpcionesJavaC]: {{site.baseurl}}/java/img/javac.png
[CompilarJavaC]: {{site.baseurl}}/java/img/javac-compilar.png
[ErrorJavaC]:  {{site.baseurl}}/java/img/javac-error-compilacion.png
[FlujoCompilacion]: {{site.baseurl}}/java/img/flujo-compilacion.png
[FlujoCompilacionJava]: {{site.baseurl}}/java/img/flujo-compilacion-java.png
[OpcionesJava]: {{site.baseurl}}/java/img/java-opciones.png
[EjecutandoAppJava]:  {{site.baseurl}}/java/img/java-mi-primera-aplicacion.png
