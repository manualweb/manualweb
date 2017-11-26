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
  1. Introducción a Java
  2. Historia de Java
  3. Tecnologías Java
  4. Instalar Java
  5. Mi primera aplicación Java
2. Conceptos Básicos
  1. Conceptos básicos en Java
  2. Variables en Java
  3. Tipos de Datos Primitivos en Java
  4. Literales en Java
  5. Expresiones, sentencias y Bloques
3. Operadores en Java
  1. Operadores de Asignación y Aritméticos
  2. Operadores Unarios
  3. Operadores de Igualdad y relacionales
  4. Operadores Condicionales
  5. Operadores de Bit
4. Sentencias de control
  1. Sentencias de control
  2. Sentencias Decisión
  3. Sentencias Bucle
  4. Sentencias Ramificación
5. Clase String
  1. Representando una Cadenas
  2. Funciones Básicas con Cadenas

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

# Instalar Java
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

El lenguaje **[Java][ManualJava] nos proporciona un conjunto de paquetes por defecto** (conocido como **API Java**) en los que se pueden encontrar múltiples utilidades del lenguaje. Por ejemplo, la clase [Java][ManualJava] que nos ayuda a manipular las cadenas de texto es la clase [String][ClaseString]. La [clase String][ClaseString] la podemos encontrar en el paquete **java.lang**.

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

Hay un tipo de dato [String][ClaseString] para el manejo de cadenas que no es en sí un tipo de dato primitivo. Con el tipo de dato String podemos manejar cadenas de caracteres separadas por dobles comillas.

El elemento [String][ClaseString] es un tipo de dato inmutable. Es decir, que una vez creado, su valor no puede ser cambiado.

El [String][ClaseString] no es un tipo de dato primitivo del lenguaje [Java][ManualJava]. Pero su uso es igual de importante que el de los tipos de datos revisados aquí. Veremos más en detalle el uso del tipo [String][ClaseString].

# Literales en Java

## ¿Qué son los literales Java?

Los valores literales son aquellos que podemos asignar a las variables. Dependiendo del tipo de variable podremos asignar unos valores u otros.

## Literales de enteros

Los enteros que podemos utilizar serán **byte**, **short**, **int** y **long**. Los literales que les asignemos siempre será un número entero.

~~~java
byte variableByte = 12;
short variableShort = 12;
int variableInt = 12;
long variableLong = 12;
~~~

Si bien para el caso del tipo **long** podemos crear literales de enteros que acaben en L (mayúscula o minúscula, aunque por legilibilidad se recomienda la primera)

~~~java
long variableLong = 12D;
~~~

Hay otros valores que pueden ser manejados por los literales enteros, para cuando representemos el número en diferentes bases. Por ejemplo cuando los manejemos como binarios o hexadecimales. Para este caso habrá que manejar literales de enteros que tengan dicho formato.

~~~java
int variableBinaria = 011010;
int variableHexadecimal = 0x1a;
~~~

## Literales de decimales

Los dos tipos de datos de decimales que podemos manejar son **float** y **double**. Para estos casos la representación del literal de decimales serán con separación de un punto entre la parte entera y la parte decimal.

~~~java
float variableFloat = 12.2;
double variableDouble = 12.2;
~~~

De igual manera podemos utilizar las letras F o f para el tipo de dato **float** y D o d para el tipo de dato **double**. Siempre, por legilibilidad se recomienda la letra en mayúsculas.

~~~java
float variableFloat = 12.2F;
double variableDouble = 12.2D;
~~~

## Literales de caracteres y cadenas

Tanto los caracteres del tipo de dato **char**, como las cadenas del tipo de datos **String** contienen caracteres Unicode UTF-16.

Los caracteres UTF-16 se pueden escribir directamente en la cadena o si nuestro editor de textos no nos permite el manejo de esa codificación los podemos poner escapados en el formato.

~~~java
'uCODIGOUNICODE'
~~~

Por ejemplo la letra como la ñ se escaparía de la siguiente forma:

~~~java
'u00F1'
~~~

Para utilizarla en una cadena de texto “España” podríamos poner

~~~java
String pais = "Espau00F1a";
~~~

Para los caracteres utilizaremos comillas simples para delimitarlos, mientras que para las cadenas utilizaremos comillas dobles.

~~~java
char variableChar = 'a';
String variableString = "cadena";
~~~

Además en las cadenas podemos utilizar una serie de secuencias de escape, las cuales empiezan por una barra invertida y siguen con un modificador:

| Secuencia | Significado       |
| --------- | ----------------- |
| b         | retroceso         |
| t         | tabular la cadena |
| n         | salto de línea    |
| f         | form feed         |
| r         | retorno de carro  |
| \'        | comilla simple    |
| \"        | comilla doble     |
| \\        | barra invertida   |

## Literales subrayados

A partir de la versión 1.7 de [Java][ManualJava] se puede utilizar el subrayado para realizar separaciones entre números para una mejor visualización.

A todos los efectos el valor del número es como si no existiese el carácter de subrayado.

~~~java
long tarjetaCredito = 1234_5678_9012_3456L;
long mascaraBinaria = 0b11010010_01101001_10010100_10010010;
~~~

No podremos utilizar el literal de subrayado al principio o final del número, alrededor de un punto decimal, ni entre el número y un literal de entero o decimal (D, F o L).

# Expresiones, Sentencias y Bloques
Un programa en [Java][ManualJava] se compone de un conjunto de sentencias que se ejecutan para resolver un problema. Las sentencias son el elemento básico de ejecución de los programa [Java][ManualJava].

A parte de las sentencias, en un programa [Java][ManualJava] nos encontraremos con expresiones y bloques.

## Expresiones

Una expresión es un conjunto de variables, operadores e invocaciones de métodos que se construyen para poder ser evaluadas retornando un resultado.

Ejemplos de expresiones son:

~~~java
int valor = 1;
if (valor 1 > valor2) { ... }
~~~

Cuando tengamos expresiones de evaluación complejas es recomendable que utilicemos paréntesis para saber cual es el orden de ejecución de operaciones.

Ya que si tenemos una expresión como

~~~java
2 + 10 / 5
~~~

No será la misma si ponemos

~~~java
(2 + 10) / 5
~~~

ó

~~~java
2 + (10 / 5)
~~~

En el caso de no utilizar paréntesis se ejecutará el orden de preferencia de operadores. En este caso la división tiene más preferencia que la suma.

## Sentencias

Una sentencia es la unidad mínima de ejecución de un programa. Un programa se compone de conjunto de sentencias que acaban resolviendo un problema. **Al final de cada una de las sentencias encontraremos un punto y coma (;)**.

Tenemos los siguientes tipos de sentencias.

### Sentencias de declaración

~~~java
int valor = 2;
~~~

### Sentencias de asignación

~~~java
valor = 2;
~~~

### Sentencias de incremento o decremento

~~~java
valor++;
~~~

### Invocaciones a métodos

~~~java
System.out.println("Hola Mundo");
~~~

### Creaciones de objetos

~~~java
Circulo miCirculo = new Circulo(2,3);
~~~

### Sentencias de control de flujo

~~~java
if (valor>1) { … }
~~~

## Bloques

Un bloque es un conjunto de sentencias los cuales están delimitados por llaves.

~~~java
if (expresion) {
    // Bloque 1
} else {
    // Bloque 2
}
~~~

# Operadores de Asignación y Aritméticos

## Operador de Asignación

El operador [Java][ManualJava] más sencillo es el **operador de asignación**. Mediante este operador se asigna un valor a una variable. El operador de asignación es el símbolo igual.

La estructura del operador de asignación es:

~~~java
variable = valor;
~~~

Así podemos asignar valores a variables de tipo entero, cadena,...

~~~java
int numero = 3;
String cadena = "Hola Mundo";
double decimal = 4.5;
boolean verdad = true;
~~~

## Operadores Aritméticos

Los operadores aritméticos en [Java][ManualJava] son los operadores que nos permiten realizar operaciones matemáticas: ***suma, resta, multiplicación, división y resto***.

Los operadores aritméticos en [Java][ManualJava] son:

| Operador | Descripción                                                |
| -------- | ---------------------------------------------------------- |
| +        | Operador de Suma. Concatena cadenas para la suma de String |
| -        | Operador de Resta                                          |
| *        | Operador de Multiplicación                                 |
| /        | Operador de División                                       |
| %        | Operador de Resto                                          |

Los operadores aritméticos en [Java][ManualJava] los utilizaremos entre dos literales o variables y el resultado, normalmente lo asignaremos a una variable o bien lo evaluamos.

~~~java
variable = (valor1|variable1) operador (valor2|variable2);
~~~

Así podemos tener los siguientes usos en el caso de que queramos asignar su valor.

~~~java
suma = 3 + 7;             // Retorna 10
resta = 5 - 2;            // Retorna 3
multiplicacion = 3 * 2;   // Retorna 6
division = 4 / 2;         // Retorna 2
resto = 5 % 3;            // Retorna 2
~~~

Ten en cuenta que pueden ser valores o variables:

~~~java
suma = vble1 + 3;   // Sumamos 3 al valor de la variable vble1
resta = vble1 - 4;  // Restamos 4 al valor de la variable vble1
...
~~~~

O podríamos utilizarlo en una condición

~~~java
if (variable > suma + 3) { ... }
~~~

En este caso no asignamos el resultado de la suma a una variable, solo lo evaluamos.

# Operadores Unarios
Los operadores unarios en [Java][ManualJava] son aquellos que solo requieren un operando para funcionar.

Los **operadores** unitarios que tenemos en [Java][ManualJava] son:

| Operador | Descripción                                                      |
| -------- | ---------------------------------------------------------------- |
| +        | Operador unario suma. Indica un número positivo.                 |
| -        | Operador unario resta. Niega una expresión.                      |
| ++       | Operador de incremento. Incrementa el valor en 1.                |
| --       | Operador de decremento. Decrementa el valor en 1.                |
| !        | Operador de complemento lógico. Invierte el valor de un booleano |

## Operadores unarios suma o resta

Los operadores unitarios de suma o resta son muy sencillos de utilizar. En el caso del operador unitario suma su uso es redundante. Con el operador unitario resta podemos invertir un valor.

Por ejemplo podríamos tener el siguiente código:

~~~java
int valor = 2;
System.out.println(-valor); // Imprimirá por pantalla un -2
~~~

## Operadores de incremento y decremento

Los operadores de incremento se pueden aplicar como prefijo o como sufijo.

~~~java
++ variable;
variable ++;
-- variable;
variable --;
~~~

En todos los casos el valor de la variable acabará con una unidad más (para el operador de incremento) o con una unidad menos (para el operador de decremento).

Si bien si están participando en una asignación hay que tener cuidado en si utilizamos el operador como prefijo o como sufijo.

En el caso de utilizarlo como prefijo el valor de asignación será el valor del operando más el incremento de la unidad. Y si lo utilizamos como sufijo se asignará el valor del operador y luego se incrementará la unidad sobre el operando.

Es más sencillo verlo en código:

~~~java
suma = ++vble1;
~~~

Sería lo mismo que poner

~~~java
vble1 = vble1 + 1;
suma = vble1;
~~~

Mientras que si escribimos:

~~~java
suma = vble1++;
~~~

Sería lo mismo que poner:

~~~java
suma = vble1;
vble1 = vble1 + 1;
~~~

Exactamente lo mismo le sucede al operador de decremento, pero restando una unidad.

## Operador de complemento lógico

El operador de complemento lógico sirve para negar un valor lógico. Se suele utilizar delante de una operación de evaluación booleana. Normalmente en sentencias de decisión o bucles.

La estructura es:

~~~java
! (expresion)
~~~

Si la expresión era un **true** la convierte en **false** y si era **false** la convierte en **true**.

Podemos verlo en el siguiente ejemplo:

~~~java
int vble1 = 2;
int vble2 = 3;

if !(vble1 > vble2)
    System.out.println("variable 1 es más pequeña que la variable 2");
~~~

# Operadores de Igualdad y Relacionales
Los operadores de igualdad y relacionales en [Java][ManualJava] son aquellos que nos permiten comparar el contenido de una variable contra otra atendiendo a si son variables con un valor igual o distinto o bien si los valores son mayores o menores.

El listado de operadores de igualdad y relacionales en [Java][ManualJava] es:

| Operador | Descripción       |
| -------- | ----------------- |
| ==       | igual a           |
| !=       | no igual a        |
| >        | mayor que         |
| >=       | mayor o igual que |
| <        | menor que         |
| <=       | menor o igual que |

## Operadores de Igualdad

Mediante los operadores de igualdad podemos comprobar si dos valores son iguales **(operador ==)** o diferentes **(operador !=)**.

La estructura de los **operadores de igualdad** es la siguiente:

~~~java
vble1 == vble2
vble1 != vble2
~~~

Podemos utilizar estos operadores de igualdad en [Java][ManualJava] de la siguiente forma:

~~~java
int vble1 = 5;
int vble2 = 3;

if (vble1 == vble2)
  System.out.println("Las variables son iguales");

if (vble1 != vble2)
  System.out.println("Las variables son distintas");
~~~

## Operadores relacionales

Permiten comprobar si un valor es mayor que **(operador >)**, menor que **(operador <)**, mayor o igual que **(>=)** y menor o igual que **(<=)**.

Al final el operador lo valida entre dos valores o variables con la estructura:

~~~java
vble1 > vble2
vble1 < vble2
vble1 >= vble2
vble1 <= vble2
~~~

De esta forma podemos tener un código fuente que nos ayude a realizar estas validaciones de relación:

~~~java
int vble1 = 5;
int vble2 = 3;

if (vble1 > vble2)
  System.out.println("La variable 1 es mayor que la variable 2");

if (vble1 < vble2)
  System.out.println("La variable 1 es menor que la variable 2");

if (vble1 >= vble2)
  System.out.println("La variable 1 es mayor o igual que la variable 2");

if (vble1 <= vble2)
  System.out.println("La variable 1 es menor o igual que la variable 2");
~~~

# Operadores condicionales
Los operadores condicionales en [Java][ManualJava] son aquellos que evalúan dos expresiones booleanas.

Dentro de los operadores condicionales en [Java][ManualJava] tenemos:

| Operador   | Descripción               |
| ---------- | ------------------------- |
| &&         | Operador condicional AND  |
| &#124;&#124;| Operador condicional OR |
| ?:         | Operador Ternario         |
| instanceof | Operador instanceof       |

## Operadores Condicionales

La estructura de los operadores condicionales en [Java][ManualJava] es:

~~~java
(expresion_booleana1 && expresion_booleana2)
(expresion_booleana1 || expresion_booleana2)
~~~

En el caso del **operador condicional AND** el resultado será **true** siempre y cuando las dos expresiones evaluadas sean **true**. Si una de las expresiones es **false** el resultado de la expresión condicional AND será **false**.

Para el **operador condicional OR** el resultado será **true** siempre que alguna de las dos expresiones sea **true**.

Los operadores booleanos funcionan mediante la ***evaluación por cortocircuito***. Es decir, que dependiendo del valor de la expresión 1 puede que no sea necesario evaluar la expresión 2.

Para el caso del **operador condicional AND**, si la primera expresión es **false** ya devuelve **false** sin evaluar la segunda expresión. Y en el caso del **operador condicional OR** si la primera expresión es **true** ya devuelve **true** sin evaluar la segunda expresión.

Podríamos ver el uso de los operadores condicionales en el siguiente código:

~~~java
int vble1 = 5;
int vble2 = 3;

if ((vble1 == 5) && (vble2 ==3))
  System.out.println("Las dos variables mantienen sus valores iniciales");

if ((vble1 == 5) || (vble2 ==3))
  System.out.println("Al menos una variable mantiene su valor inicial");
~~~

## Operador Ternario

El **operador ternario** es otro de los operadores condicionales. Es una forma reducida de escribir un **if-then-else**. El **operador ternario** es representado mediante el símbolo **?:**

La estructura del operador ternario es:

~~~java
(expresion)?valor_true:valor_false;
~~~

En el caso de que la expresión tenga un valor de **true** se retorna el valor indicado después del cierre de interrogación (?) Y si la expresión tiene un valor de **false** se retorna el valor que esté después de los dos puntos (:).

El **operador ternario** se suele utilizar para decidir que valor asignar. Un ejemplo de código del operador ternario sería:

~~~java
int vble1 = 5;
int vble2 = 4;
int mayor;

mayor = (vble1 > vble2)?vble1:vble2;

System.out.println("El mayor de los dos números es " + mayor);
~~~

Vemos que si la variable 1 es mayor que la variable 2 guardaremos el valor de la variable 1 en la variable mayor. En caso contrario se guardaría el valor de la variable 2, ya que en ese caso sería la mayor.

## Operador instanceof

El **operador instanceof** es un operador especial para los objetos. Mediante el **operador instanceof** podemos comprobar si un objeto es de una clase concreta.

La estructura del **operador instanceof** es:

~~~java
objeto instanceof clase
~~~

El operador instanceof devolverá true siempre y cuando el objeto sea del tipo clase o de alguna de las clases de las que herede.

Así podríamos definir una secuencia de clases:

~~~java
class Poligono {}
interface Figura {}
class Triangulo extends Poligono implements Figura {}
~~~

Ahora definimos un par de objetos:

~~~java
Poligono p = new Poligono();
Triangulo t = new Triangulo();
~~~

Podemos, mediante el uso del **operador instanceof**, comprobar que t es instancia de tipo Triangulo, Poligono y Figura. Mientras que p es instancia de tipo Polígono, pero no de Triangulo, ni Figura.

~~~java
System.out.println("p es instancia de ");
if (p instanceof Poligono)
  System.out.println("Poligono");
if (p instanceof Triangulo)
    System.out.println("Triangulo");
if (p instanceof Figura)
    System.out.println("Figura");

System.out.println("t es instancia de ");
if (t instanceof Poligono)
    System.out.println("Poligono");
if (t instanceof Triangulo)
    System.out.println("Triangulo");
if (t instanceof Figura)
    System.out.println("Figura");
~~~

# Operadores de Bit
El **operador de bit AND** lo que hace es multiplicar los bits de las dos cadenas. Las multiplicaciones de bits dan como resultado que 1 x 1 siempre es 1 y que 1 x 0 y 0 x 0 siempre da 0. El tamaño de la cadena resultado siempre es el mismo al tamaño de las cadenas.

Así de la siguiente operación:

~~~java
0101 & 0011
~~~

Tendremos que el resultado es:

~~~java
0101 AND    (decimal 5)
0011        (decimal 3)
--------
0001        (decimal 1)
~~~

### Operador OR

En el caso del **OR inclusivo (operador |)** lo que se hace es multiplicar los bits asumiendo que 1 multiplicado por 1 o por 0, siempre es 1. Mientras que la única multiplicación que da 0 es 0 x 0.

Así la operación:

~~~java
(0101) | (0011)
~~~

Dará como resultado:

~~~java
0101 OR     (decimal 5)
0011        (decimal 3)
--------
0111        (decimal 7)
~~~

### Operador XOR

Para el caso del **OR exclusivo (operador ^) conocido como XOR**. La multiplicación de bits será 1 para los casos 1 x 0 y 0 x 1. Las multiplicaciones 1 x 1 y 0 x 0 siempre darán como resultado 0.

De esta forma si tenemos la operación:

~~~java
(0101) ^ (0011)
~~~

El resultado que encontraremos será:

~~~java
0101 XOR    (decimal 5)
0011        (decimal 3)
--------
0110        (decimal 6)
~~~

### Operador NOT

El **operador de negación de bits** nos permite invertir el contenido de bits de una cadena. De tal manera que invierte los bits convirtiendo los 1 en 0 y los 0 en 1.

En este caso la estructura será:

~~~java
~ (valor)
~~~

Así podríamos tener la sentencia:

~~~java
~ (0111)
~~~

La cual se traduciría en:

~~~java
0111 NOT    (decimal 7)
--------
1000        (decimal 8)
~~~

## Operadores de Desplazamiento de Bits

Los **operadores de desplazamiento de bits** permiten mover los bits dentro de la cadena. La estructura de estos operadores es la siguiente:

~~~java
(valor_binario1) >> (valor_binario2)
(valor_binario1) >> (valor_binario2)
(valor_binario1) >>> (valor_binario2)
~~~

### Operador Desplazamiento a Izquierdas

En el caso del desplazamiento a izquierdas, desplaza el valor_binario1 a izquierdas tantas veces como indique el valor_binario2. Los bits se mueven a la izquierda y se añaden tantos ceros como indique el valor_binario 2.

De esta forma el código:

~~~java
(0011) << (0001) // Desplaza 0011 una vez dando 110
(0011) << (0011) // Desplaza 0011 tres veces dando 11000
~~~

### Operador Desplazamiento a Derechas

Es exactamente igual al operador de desplazamiento a izquierdas, pero con la diferencia que mete dígitos por la izquierda y va eliminado el último dígito.

Si tiene que meter un 1 o tiene que meter un 0 dependerá del valor del bit del signo. Si el valor del bit de signo es positivo (0), lo que hace es insertar 0. Si el valor del bit de signo es negativo (1), lo que hace es insertar 1.

Los ceros o unos a insertar los determinará el valor_binario2 y serán sobre el valor_binario1.

De esta forma podemos ver los códigos

~~~java
(1100) >> (0001) // Desplaza 1100 una vez dando 0110
(1000) >> (0011) // Desplaza 1100 tres veces dando 0001
~~~

Si manipulamos decimales lo que hacemos es dividir el número por 2 tantas veces como indique su desplazamiento.

~~~java
12 >> 1  // Sería 12 / 2 = 6
12 >> 2  // Sería 12 / 2 = 6; 6/2 = 3
~~~

Si manejamos valores negativos. Por ejemplo de un elemento Byte (8 bits, con el primero como signo)

~~~java
1110 0011 >> 0011   // Desplaza tres a la izquierda dejando 1111 1100
~~~

### Operador Desplazamiento a Derechas sin signo

Es como el operador desplazamiento a derechas pero no tiene en cuenta el signo. Por lo cual siempre mete ceros por la izquierda.

Este operador sería más utilizado si manejamos valores binarios para ejecutar un desplazamiento de bits.

Así podríamos ver el siguiente código:

~~~java
1110 0011 >>> 0011  // Desplaza tres a la izquierda dejando 0001 1100
~~~

# Sentencias de Control
Un programa en [Java][ManualJava] se ejecuta en orden desde la primera sentencia hasta la última.

Si bien existen las **sentencias de control de flujo** las cuales permiten alterar el fujo de ejecución para tomar decisiones o repetir sentencias.

Dentro de las **sentencias de control de flujo** tenemos las siguientes:

*   Sentencias de decisión
*   Sentencias de bucle
*   Sentencias de ramificación

## Sentencias de Decisión

Son sentencias que nos permiten tomar una decisión para poder ejecutar un bloque de sentencias u otro.

Las sentencias de decisión son: `if-then-else` y `switch`.

Mediante `if-then-else` podremos evaluar una decisión y elegir por un bloque u otro.

~~~java
if (expresion) {
  // Bloque then
} else {
  // Bloque else
}
~~~

Mientras que con `switch` podremos evaluar múltiples decisiones y ejecutar un bloque asociado a cada una de ellas.

~~~java
switch (expresion) {
  case valor1:
    bloque1;
    break;
  case valor2:
    bloque2;
    break;
  case valor3:
    bloque3;
    break;
  …
  default:
      bloque_por_defecto;
}
~~~

## Sentencias de Bucle

Las **sentencias de bucle** nos van a permitir ejecutar un bloque de sentencias tantas veces como queramos, o tantas veces como se cumpla una condición.

En el momento que se cumpla esta condición será cuando salgamos del bucle.

Las sentencias de bucle en [Java][ManualJava] son: `while`, `do-while` y `for`.

En el caso de la sentencia `while` tenemos un bucle que se ejecuta mientas se cumple la condición, pero puede que no se llegue a ejecutar nunca, si no se cumple la condición la primera vez.

~~~java
while (expresion) {
  bloque_sentencias;
}
~~~

Por otro lado, si utilizamos `do-while`, lo que vamos a conseguir es que el bloque de sentencias se ejecute, al menos, una vez.

~~~java
do {
  bloque_sentencias;
} while (expresion)
~~~

La sentencia `for` nos permite escribir toda la estructura del bucle de una forma más acotada. Si bien, su cometido es el mismo.

~~~java
for (sentencias_inicio;expresion;incremento) {
  bloque_sentencias;
}
~~~

## Sentencias de ramificación

Las **sentencias de ramificación** son aquellas que nos permiten romper con la ejecución lineal de un programa.

El programa se va ejecutando de forma lineal, sentencia a sentencia. Si queremos romper esta linealidad tenemos las **sentencias de ramificación**.

Las **sentencias de ramificación** en [Java][ManualJava] son: `break` y `continue`.

En el caso de `break` nos sirve para salir de bloque de sentencias, mientras que `continue` sirve para ir directamente al siguiente bloque.

# Sentencias Decisión
Las **sentencias de decisión** son sentencias que nos permiten tomar una decisión para poder ejecutar un bloque de sentencias u otro.

Las **sentencias de decisión** son: `if-then-else` y `switch`.

## if-then-else

La estructura de las sentencias `if-then-else es`:

~~~java
if (expresion) {
  // Bloque then
} else {
  // Bloque else
}
~~~

Se evalua la expresión indicada en la sentencia `if`. En el caso de que la expresión sea `true` se ejecutará el bloque de sentencias `then` y en el caso de que la expresión sea `false` se ejecutará el bloque de sentencias `else`.

La parte del `else` no tiene por qué existir. En este caso tendríamos una sentencia `if-then`.

~~~java
if (expresion) {
  // Bloque then
}
~~~

De esta forma podríamos tener el siguiente código fuente:

~~~java
int valor = 4;

if (valor < 10) {
  System.out.println("El número es menor de 10");
} else {
  System.out.println("El número es mayor de 10");
}
~~~

Las sentencias `if-then-else` pueden estar anidadas y así nos encontraríamos con una sentencia **if-then-elseif**, la cual tendría la siguiente estructura:

~~~java
if (expresion) {
  // Bloque then
} else if {
  // Bloque else
} else if {
  // Bloque else
} else if {
  // Bloque else
} ...
~~~

De esta forma podemos tener el siguiente código:

~~~java
int valor = 14;

if (valor < 10) {
  System.out.println("El valor es una unidad");
} else if (valor < 100) {
  System.out.println("El valor es una decena");
} else if (valor < 1000) {
  System.out.println("El valor es una centena");
} else if (valor < 10000) {
  System.out.println("El valor es un millar");
} else {
  System.out.println("Es un número grande");
}
~~~

## switch

Para los casos en los que se tienen muchas ramas o caminos de ejecución en una sentencia `if` tenemos la sentencia `switch`. La sentencia `switch` evalúa una expresión y ejecutará el bloque de sentencias que coincida con el valor de la expresión.

El valor de la expresión tiene que ser numérico. Aunque a partir de *Java SE 7* ya se pueden utilizar expresiones cuya evaluación sean cadenas.

La estructura de la sentencia switch es:

~~~java
switch (expresion) {
  case valor1:
    bloque1;
    break;
  case valor2:
    bloque2;
    break;
  case valor3:
    bloque3;
    break;
  ...
  default:
      bloque_por_defecto;
}
~~~

Es importante ver que se utiliza la sentencia **break.** La sentencia `break` hace que se salga de la sentencia `switch` y por lo tanto no se evalúe el resto de sentencias. Por lo tanto su uso es obligatorio al final de cada uno de los bloques.

Un ejemplo claro en el que podemos utilizar la sentencia `switch` es para evaluar el valor de un mes en numérico y convertirlo a cadena. Este código quedaría de la siguiente forma:

~~~java
int iMes = 3;
String sMes;

switch (iMes) {
    case 1:
        sMes = "Enero";
        break;
    case 2:
        sMes = "Febrero";
        break;
    case 3:
        sMes = "Marzo";
        break;
    case 4:
        sMes = "Abril";
        break;
    case 5:
        sMes = "Mayo";
        break;
    case 6:
        sMes = "Junio";
        break;
    case 7:
        sMes = "Julio";
        break;
    case 8:
        sMes = "Agosto";
        break;
    case 9:
        sMes = "Septiembre";
        break;
    case 10:
        sMes = "Octubre";
        break;
    case 11:
        sMes = "Noviembre";
        break;
    case 12:
        sMes = "Diciembre";
        break;
    default:
        sMes = "Mes incorrecto";
}

System.out.println(sMes);
~~~

Este mismo modelo lo podríamos haber implementado mediante una estructura `if-then-else`. Si bien, como podemos ver en el código queda más complejo

~~~java
if (iMes == 1){
    sMes = "Enero";
} else if (iMes == 2) {
    sMes = "Febrero";
} else if (iMes == 3) {
    sMes = "Marzo";
} else if (iMes == 4) {
    sMes = "Abril";
} else if (iMes == 5) {
    sMes = "Mayo";
} else if (iMes == 6) {
    sMes = "Junio";
} else if (iMes == 7) {
    sMes = "Julio";
} else if (iMes == 8) {
    sMes = "Agosto";
} else if (iMes == 9) {
    sMes = "Septiembre";
} else if (iMes == 10) {
    sMes = "Octubre";
} else if (iMes == 11) {
    sMes = "Noviembre";
} else if (iMes == 12) {
    sMes = "Diciembre";
} else {
    sMes = "Mes incorrecto";
}

System.out.println(sMes);
~~~

Otra cosa que tenemos que saber de la sentencia `switch` es que las evaluaciones case pueden ser múltiples. La estructura en este caso sería:

~~~java
switch (expresion) {
  case valor1: case valor2: case valor3:
    bloque1;
    break;
  case valor4: case valor5: case valor6:
    bloque2;
    break;
  ...
  default:
    bloque_por_defecto;
}
~~~

Esto podemos utilizarlo para saber los días del mes. El código sería el siguiente:

~~~java
int iMes = 3;
String sDias;

switch (iMes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        sDias = "El mes tiene 31 días";
        break;
    case 4: case 6: case 9: case 11:
        sDias = "El mes tiene 30 días";
        break;
    case 2:
        sDias = "El mes tiene 28 días (o 29 días si es año bisiesto)";
        break;          
    default:
        sDias = "Mes incorrecto";
}
~~~

Como vemos tenemos diferentes evaluaciones con la sentencia `case`.

# Sentencias Bucle
Las **sentencias de bucle** nos van a permitir ejecutar un bloque de sentencias tantas veces como queramos, o tantas veces como se cumpla una condición.

Las **sentencias de bucle** en [Java][ManualJava] son: `while`, `do-while` y `for`.

## while

La estructura repetitiva `while` realiza una primera evaluación antes de ejecutar el bloque. Si la expresión es `true` pasa a ejecutar de forma repetida el bloque de sentencias.

Cada vez que termina de ejecutar el bloque de sentencias vuelve a evaluar la expresión. Si la expresión sigue siendo `true` vuelve a ejecutar el bloque. En el caso de que la expresión sea `false` se saldrá del bucle.

Es por ello que dentro del bloque de sentencias *deberán de existir sentencias que modifiquen la evaluación de la expresión, ya que de no hacerse se podría entrar en un bucle infinito*.

La estructura de la sentencia `while` es la siguiente:

~~~java
while (expresion) {
  bloque_sentencias;
}
~~~

Los casos de uso de una sentencia repetitiva `while` son variados, pero principalmente se utiliza para recorrer estructuras de datos o tener contadores.

Por ejemplo podemos realizar un contador de 1 a 10 de la siguiente forma:

~~~java
int contador = 1;
while (contador <= 10) {
  System.out.println(contador);
  contador++;
}
~~~

## do-while

En el caso de la estructura repetitiva `do-while` el funcionamiento es el mismo que el de `while`. Pero con una diferencia, primero se ejecuta el bloque de sentencias y luego se evalua la expresión. Por lo tanto siempre se ejecutará, al menos una vez, el bloque de sentencias.

La estructura de la sentencia `do-while` es:

~~~java
do {
  bloque_sentencias;
} while (expresion)
~~~

Al igual que anteriormente, en el bloque de sentencias deberemos de modificar alguna de las condiciones de la expresión para poder salir del bucle.

Un ejemplo claro del bucle `do-while` sería el ejemplo en el que le pedimos al usuario que introduzca números por teclado, los cuales mostraremos en forma de eco por pantalla, hasta que introduzca el cero. En ese caso saldremos del bucle.

Utilizaremos la estructura `do-while` en vez de la `while` ya que al menos vamos a pedirle al usuario un número.

El código sería el siguiente:

~~~java
Scanner reader = new Scanner(System.in);        
int iNumero;

do {
    System.out.println("Introduce carácter por consola");
    iNumero = reader.nextInt();
    System.out.println(iNumero);
} while (iNumero <> 0);
~~~

En el caso de haberlo realizado con un bucle `while` tendríamos que repetir la captura y salida de datos. Veamos como quedaría para que puedas ver las diferencias.

~~~java
Scanner reader = new Scanner(System.in);        
int iNumero;

System.out.println("Introduce carácter por consola");
iNumero = reader.nextInt();
System.out.println(iNumero);

while (iNumero <> 0) {
  System.out.println("Introduce carácter por consola");
  iNumero = reader.nextInt();
  System.out.println(iNumero);
}
~~~

## for

Otra de las sentencias repetitivas que tenemos, a parte de los bucles `while` y `do-while`, es la sentencia `for`.

La sentencia `for` tiene la característica de que tiene bien definido el inicio del bloque, la evaluación de la expresión, el incremento de valor y el bloque de sentencias.

La estructura del bucle `for` es:

~~~java
for (sentencias_inicio;expresion;incremento) {
  bloque_sentencias;
}
~~~

Tanto las sentencias_inicio, expresión como incremento son opcionales y pueden estar o no. Aunque normalmente aparecerán en la estructura.

Esta estructura la podríamos reproducir mediante una sentencia while de la siguiente forma:

~~~java
sentencias_inicio;
while (expresion) {
  bloque_sentencias;
  incremento;
}
~~~

Las funcionalidades en las que utilizaremos la sentencia `for` serán las mismas que las sentencias `while` y `do-while`, que serán contadores, recorrer estructuras,...

Si queremos definir un contador de 1 a 10 mediante una sentencia `for` utilizaremos el siguiente código:

~~~java
for (int x=1;x<=10;x++=) {
  System.out.println("Valor del contador: " + x);
}
~~~

En pantalla obtendremos el siguiente resultado:

<pre><samp>Valor del contador: 1
Valor del contador: 2
Valor del contador: 3
Valor del contador: 4
Valor del contador: 5
Valor del contador: 6
Valor del contador: 7
Valor del contador: 8
Valor del contador: 9
Valor del contador: 10</pre>

# Sentencias Ramificación
Las **sentencias de ramificación** son aquellas que nos permiten romper con la ejecución lineal de un programa.

## break

Ya vimos que en la sentencia selectiva `switch` se utilizaba la sentencia `break` para salir de las evaluaciones y así solo ejecutar el bloque de la opción correspondiente. Si bien podemos utilizar la sentencia `break` con las sentencias repetitivas `while`, `do-while` y `for`. Esta es la que se conoce como sentencia **break sin etiquetar**.

Cuando utilicemos el `break` dentro de uno de estos bucles lo que se conseguirá es salirse de la ejecución del bucle hasta el siguiente bloque de sentencias. Mismo efecto que si la expresión de evaluación hubiese dado `false`.

Así podremos encontrarnos códigos como el siguiente:

~~~java
while (expresion) {
  sentencia(s);
  break;
  sentencias(s);
}
~~~

Al ejecutar la sentencia `break` ya no ejecutaremos las sentencias que vayan después.

El uso del `break` dentro de estructuras repetitivas suele aparecer cuando estamos realizando la búsqueda de un elemento por una estructura de datos y lo hemos encontrado.

Por ejemplo, si tenemos un array y queremos buscar un número dentro del array podríamos tener el siguiente código:

~~~java
int[] numeros = {12,3,4,5,6,7,9,10};
int posicion = 0;
boolean encontrado = false;

while (posicion < numeros.length) {
  if (numeros[posicion] == 5) {
        encontrado = true;
        break;
  }
  posicion++;
}

if (encontrado) {
    System.out.println("El número está en la posición: " + posicion);
} else {
    System.out.println("Número no encontrado");
}
~~~

Las sentencias `break` se pueden cambiar por ***variables bandera***. Estas ***variables bandera*** actúan como cortocircuitos de las expresiones de validación y hacen que salgamos de los bucles.

En este caso podríamos haber utilizado la variable “encontrado” como ***variable bandera***. Y podríamos reescribir el código de la siguiente forma:

~~~java
int[] numeros = {12,3,4,5,6,7,9,10};
int posicion = -1;
boolean encontrado = false;

while ((!encontrado) && (posicion&lt;numeros.length)) {
  posicion++;
  if (numeros[posicion] == 5) {
        encontrado = true;
  }
}

if (encontrado) {
    System.out.println("El número está en la posición: " + posicion);
} else {
    System.out.println("Número no encontrado");
}
~~~

Como podéis ver el código es muy parecido y solo aparece la condición de la ***variable bandera***.

Una de las cosas que tenemos que tener en cuenta a la hora de utilizar las sentencias **break sin etiquetar** es que estas generan que se rompa la secuencia de ejecución de sentencias hasta el primer bloque anidado.

Pero, ¿qué sucedería si queremos salir de un conjunto de bucles anidados? Aunque podríamos utilizar múltiples `break` existe la posibilidad de utilizar sentencias **break etiquetadas**.

Las sentencias **break etiquetadas** funcionan igual que las `break` pero al ejecutarse se salen a la siguiente sentencia después del bloque etiquetado.

La sintaxis es:

~~~java
break nombre_etiqueta;
~~~

Veamos como podría ser una estructura de uso de las sentencias **break etiquetadas**.

~~~java
sentencia(s) iniciales;

etiqueta:
  while (expresion) {
    sentencia(s) bloque1;
    while (expresion) {
      sentencia(s) bloque2;
      break etiqueta;
    }
  }

sentencias(s) finales;
~~~

Al ejecutarse se sale de todo el bloque etiquetado como etiqueta y ejecuta las sentencias finales.

Esto podemos encontrarlo si estamos recorriendo una matriz para buscar un elemento. Ya que para recorrer una matriz vamos a necesitar dos bucles anidados.

~~~java
int[][] matriz = {
  {1,2,3,4},
  {5,6,7,8},
  {9,10,11,12}
};
int numeroBuscado = 5;

busqueda:
for (int x=0; x &lt; matriz.length; x++) {
  for (int y=0; y &lt; matriz[x].length; y++) {
    if (matriz[x][y] = numeroBuscado) {
      encontrado = true;
      break busqueda;
    }
  }
}

if (encontrado) {
  System.out.println(x + "," + y);
} else {
  System.out.println("No encontrado");
}
~~~

## continue

Otra sentencia que podemos utilizar en los bucles es la sentencia `continue`. A ejecutar una La sentencia `continue` dejaremos de ejecutar las sentencias que quedan para acabar el bloque dentro de un bucle para volver a evaluar una expresión.

La estructura de unas sentencia `continue` sería:

~~~java
while (expresion) {
  sentencia(s) iniciales;
  continue;
  sentencias(s) finales;
}
~~~

Al ejecutarse la sentencia `continue` nunca se ejecutarán las sentencias finales.

De igual manera que sucedía con la sentencia `break`, podemos realizar **continue etiquetados**. En este caso la sentencia `continue` nos llevará directamente a la primera condición de evaluación del bloque.

La estructura en este caso sería la siguiente:

~~~java
etiqueta:
  while (expresion) {
    sentencia(s) iniciales;
    while (expresion) {
      sentencia(s) iniciales;
      continue etiqueta;
      sentencia(s) finales;
    }
    sentencia(s) finales;
  }
~~~

# String: Representando una Cadena
Una cadena de texto no deja de ser más que la sucesión de un conjunto de caracteres alfanuméricos, signos de puntuación y espacios en blanco con más o menos sentido.

Podemos encontrarnos desde la archiconocida cadena “Hola Mundo” y la no menos “Mi primera cadena de texto”, pasando por las cadenas de texto personalizadas “Víctor”, “Víctor Cuervo”, las cadenas de depuración “¿Aquí?”, “Paso 1”, “Paso 2”,... hasta las inclasificables “asdf”.

Todas ellas serán representadas en java con la clase [```String```][String] y [```StringBuffer```][StringBuffer]. Aunque de momento nos centraremos en la primera.

Para encontrar la clase [```String```][String] dentro de las librerías de [Java][ManualJava] tendremos que ir a [```java.lang.String```][JavaLangString].

## Creando una cadena
Para crear una cadena tenemos dos opciones:

*   Instanciamos la clase [```String```][String]. Que sería una creación explicita de la clase

~~~java
String sMiCadena = new String("Cadena de Texto");
~~~

*   Crear implícitamente la cadena de texto. Es decir, simplemente le asignamos el valor al objeto.

~~~java
String sMiCadena = "Cadena de Texto";
~~~

En este caso, [Java][ManualJava], creará un objeto [```String```][String] para tratar esta cadena.

## Crear una cadena vacía
Podemos tener la necesidad de crear una cadena vacía. Puede darse el caso que no siempre sepamos lo que vamos a poner de antemano en la cadena de texto. ¿A quién no le surgen dudas? ;-) ... Fuera de bromas, muchas veces la cadena de texto nos la proporcionará el usuario, otro sistema,....

Para poder crear la cadena vacía nos bastará con asignarle el valor de "", o bien, utilizar el constructor vacío.

~~~java
String sMiCadena = "";
String sMiCadena = new String();
~~~

## Constructores String
Visto lo visto podemos resumir que tenemos dos tipos de constructores principales de la clase [```String```][String]:


*   **String(),** <span style="font-weight: normal">q</span><span style="font-weight: normal">ue construirá un objeto [```String```][String] sin inicializar.</span>
*   **String(String original),** <span style="font-weight: normal">construye una clase [```String```][String] con otra clase [```String```][String] que recibirá como argumento.</span>

Aunque tenemos alguno más que iremos viendo....

## Volcando una cadena de texto a la consola
Solo nos quedará saber cómo volcar una cadena por pantalla. Esto lo haremos con la clase [```System.out.println```][SystemOutPrintln] que recibirá como parámetro el objeto [```String```][String].

Por ejemplo:

~~~java
System.out.println("Mi Cadena de Texto");
~~~

ó

~~~java
String sMiCadena = new String("Mi Cadena de Texto");
System.out.println(sMiCadena);
~~~

# Funciones Básicas con Cadenas
Una vez que hemos visto [lo sencillo que es crear una cadena de texto][ClaseString] vamos a echar un vistazo a los métodos que nos permiten manipular la cadena de texto. Si tuviésemos que ordenar dichos métodos podríamos llegar a la siguiente división:

*   Información básica de la cadena
*   Comparación de Cadenas
*   Búsqueda de caracteres
*   Búsqueda de subcadenas
*   Manejo de subcadenas
*   Manejo de caracteres
*   Conversión a String: valueOf()

## Información básica de la cadena

**[.length()][StringLength]** Nos devuelve el tamaño que tiene la cadena.

**[char charAt(int index)][StringCharAt]** Devuelve el carácter indicado como índice. El primer carácter de la cadena será el del índice 0. Junto con el método [```.length()```][StringLength] podemos recuperar todos los caracteres de la cadena de texto. Hay que tener cuidado. Ya que si intentamos acceder a un índice de carácter que no existe nos devolverá una excepción [```IndexOutOfBoundsException```][IndexOutOfBoundsException].

## Comparación de Cadenas
Los métodos de comparación nos sirven para comparar si dos cadenas de texto son iguales o no. Dentro de los métodos de comparación tenemos los siguientes:

**[boolean equals(Object anObject)][StringEquals]** Nos permite comparar si dos cadenas de texto son iguales. En el caso de que sean iguales devolverá como valor "true". En caso contrario devolverá "false". Este método tiene en cuenta si los caracteres van en mayúsculas o en minúsculas. Si queremos omitir esta validación tenemos dos opciones. La primera es convertir las cadenas a mayúsculas o minúsculas con los métodos [```.toUpperCase()```][StringToUpperCase] y [```.toLowerCase()```][StringToLowerCase] respectivamente. Métodos que veremos más adelante. La segunda opción es utilizar el método [```.equalsIgnoreCase()```][StringEqualsIgnoreCase] que omite si el carácter está en mayúsculas o en minúsculas.

**[boolean equalsIgnoreCase(String anotherString)][StringEqualsIgnoreCase]** Compara dos cadenas de caracteres omitiendo si los caracteres están en mayúsculas o en minúsculas.

**[int compareTo(String anotherString)][StringCompareTo]** Este método es un poco más avanzado que el anterior, el cual, solo nos indicaba si las cadenas eran iguales o diferentes En este caso compara a las cadenas léxicamente. Para ello se basa en el valor Unicode de los caracteres. Se devuelve un entero menor de 0 si la cadena sobre la que se parte es léxicamente menor que la cadena pasada como argumento. Si las dos cadenas son iguales léxicamente se devuelve un 0. Si la cadena es mayor que la pasada como argumento se devuelve un número entero positivo. Pero que es esto de “mayor, menor o igual léxicamente”. Para describirlo lo veremos con un pequeño ejemplo.

~~~java
s1 = "Cuervo"
s2 = "Cuenca"
s1.compareTo(s2);
~~~

Compararíamos las dos cadenas. Los tres primeros caracteres son iguales "Cue". Cuando el método llega al 4 carácter tiene que validar entre la r minúscula y la n minúscula. Si utiliza el código Unicode llegará a la siguiente conclusión.

~~~java
r (114) > n(110)
~~~

Y nos devolverá la resta de sus valores. En este caso un 4. Hay que tener cuidado, porque este método no tiene en cuenta las mayúsculas y minúsculas. Y dichos caracteres, aún siendo iguales, tienen diferentes código. Veamos la siguiente comparación

~~~java
s1 = "CueRvo"
s2 = "Cuervo"
s1.compareTo(s2);
~~~

Nuevamente los tres caracteres iniciales son iguales. Pero el cuarto es distinto. Por un lado tenemos la r minúscula y por otro la r mayúscula. Así:

~~~java
R(82) < r(114)
~~~

¿Qué entero nos devolverá el método compareTo()? ¿-32?

**[int compareToIgnoreCase(String str)][StringCompareIgnoreCase]** Este método se comportará igual que el anterior. Pero ignorando las mayúsculas. Todo un alivio por si se nos escapa algún carácter en mayúsculas ;-) Otros métodos para la comparación de cadenas son:

~~~java
boolean regionMatch( int thisoffset,String s2,int s2offset,int len );
boolean regionMatch( boolean ignoreCase,int thisoffset,String s2, int s2offset,int 1 );
~~~

## Búsqueda de caracteres
Tenemos un conjunto de métodos que nos permiten buscar caracteres dentro de cadenas de texto. Y es que no nos debemos de olvidar que la cadena de caracteres no es más que eso: una suma de caracteres.

**[int indexOf(int ch][StringIndexOf])** Nos devuelve la posición de un carácter dentro de la cadena de texto. En el caso de que el carácter buscado no exista nos devolverá un -1. Si lo encuentra nos devuelve un número entero con la posición que ocupa en la cadena.

**[int indexOf(int ch, int fromIndex)][StringIndexOf]** Realiza la misma operación que el anterior método, pero en vez de hacerlo a lo largo de toda la cadena lo hace desde el índice (fromIndex) que le indiquemos.

**[int lastIndexOf(int ch)][StringLastIndexOf]** Nos indica cual es la última posición que ocupa un carácter dentro de una cadena. Si el carácter no está en la cadena devuelve un -1. **[int lastIndexOf(int ch, int fromIndex)][StringLastIndexOf]** Lo mismo que el anterior, pero a partir de una posición indicada como argumento.

## Búsqueda de subcadenas
Este conjunto de métodos son, probablemente, los más utilizados para el manejo de cadenas de caracteres. Ya que nos permiten buscar cadenas dentro de cadenas, así como saber la posición donde se encuentran en la cadena origen para poder acceder a la subcadena. Dentro de este conjunto encontramos:

**[int indexOf(String str)][StringIndexOf]** Busca una cadena dentro de la cadena origen. Devuelve un entero con el índice a partir del cual está la cadena localizada. Si no encuentra la cadena devuelve un -1.

**[int indexOf(String str, int fromIndex)][StringIndexOf]** Misma funcionalidad que [```indexOf(String str)```][StringIndexOf], pero a partir de un índice indicado como argumento del método.

**[int lastIndexOf(String str)][StringLastIndexOf]** Si la cadena que buscamos se repite varias veces en la cadena origen podemos utilizar este método que nos indicará el índice donde empieza la última repetición de la cadena buscada.

**[lastIndexOf(String str, int fromIndex)][StringLastIndexOf]** Lo mismo que el anterior, pero a partir de un índice pasado como argumento.

**[boolean startsWith(String prefix)][StringStartsWith]** Probablemente mucha gente se haya encontrado con este problema. El de saber si una cadena de texto empieza con un texto específico. La verdad es que este método podía obviarse y utilizarse el [```indexOf()```][StringIndexOf], con el cual, en el caso de que nos devolviese un 0, sabríamos que es el inicio de la cadena.

**[boolean startsWith(String prefix, int toffset)][StringStartsWith]** Más elaborado que el anterior, y quizás, y a mi entender con un poco menos de significado que el anterior.

**[boolean endsWith(String suffix)][StringEndsWith]** Y si alguien se ha visto con la necesidad de saber si una cadena empieza por un determinado texto, no va a ser menos el que se haya preguntado si la cadena de texto acaba con otra. De igual manera que sucedía con el método [```.startsWith()```][StringStartsWith] podríamos utilizar una mezcla entre los métodos [```.indexOf()```][StringIndexOf] y [```.length()```][StringLength] para reproducir el comportamiento de [```.endsWith()```][StringEndsWith]. Pero las cosas, cuanto más sencillas, doblemente mejores.

## Métodos con subcadenas
Ahora que sabemos como localizar una cadena dentro de otra seguro que nos acucia la necesidad de saber como substraerla de donde está. Si es que no nos podemos estar quietos...

**[String substring(int beginIndex)][StringSubstring]** Este método nos devolverá la cadena que se encuentra entre el índice pasado como argumento (beginIndex) hasta el final de la cadena origen. Así, si tenemos la siguiente cadena:

~~~java
String s = "Víctor Cuervo";
~~~

El método…

~~~java
s.substring(7);
~~~

Nos devolverá “Cuervo”.

**[String substring(int beginIndex, int endIndex)][StringSubstring]** Si se da el caso que la cadena que queramos recuperar no llega hasta el final de la cadena origen, que será lo normal, podemos utilizar este método indicando el índice inicial y final del cual queremos obtener la cadena. Así, si partimos de la cadena...

~~~java
String s = "En un lugar de la mancha....";
~~~

El método...

~~~java
s.substring(6,11);
~~~

Nos devolverá la palabra “lugar”.

> Hay que tener especial cuidado ya que es un error muy común el poner como índice final el índice del carácter último de la palabra a extraer. Cuando realmente es el índice + 1 de lo que queramos obtener.

## Manejo de caracteres

Otro conjunto de métodos que nos permite jugar con los caracteres de la cadena de texto. Para ponerles en mayúsculas, minúsculas, quitarles los espacios en blanco, reemplazar caracteres,....

**[String toLowerCase();][StringToLowerCase]** Convierte todos los caracteres en minúsculas.

**[String toUpperCase();][StringToUpperCase]** Convierte todos los caracteres a mayúsculas.

**[String trim();][StringTrim]** Elimina los espacios en blanco de la cadena.

**[String replace(char oldChar, char newChar)][StringReplace]** Este método lo utilizaremos cuando lo que queramos hacer sea el remplazar un carácter por otro. Se reemplazarán todos los caracteres encontrados.

## Conversión a String: valueOf()

Un potente conjunto de métodos de la clase [```String```][String] nos permite convertir a cadena cualquier tipo de dato básico: int, float, double,… Esto es especialmente útil cuando hablamos de números. Ya que en múltiples ocasiones querremos mostrarles como cadenas de texto y no en su representación normal de número. Así podemos utilizar los siguientes métodos:

*   [String valueOf(boolean b);][StringValueOf]
*   [String valueOf(int i);][StringValueOf]
*   [String valueOf(long l);][StringValueOf]
*   [String valueOf(float f);][StringValueOf]
*   [String valueOf(double d);][StringValueOf]
*   [String valueOf(Object obj);][StringValueOf]


[GitJava]: https://github.com/manualweb/manual-java
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
[ClaseString]: http://www.manualweb.net/java/clase-string-representando-una-cadena/ "Clase String Java"


[IndexOutOfBoundsException]: http://www.w3api.com/wiki/Java:IndexOutOfBoundsException
[JavaLangString]: http://www.w3api.com/wiki/Categor%C3%ADa:Java_Lang
[String]: http://www.w3api.com/wiki/Java:String "String"
[StringBuffer]: http://www.w3api.com/wiki/Java:StringBuffer
[StringCharAt]: http://www.w3api.com/wiki/Java:String.charAt() "charAt"
[StringCompareTo]: http://www.w3api.com/wiki/Java:String.compareTo() ".compareTo"
[StringCompareIgnoreCase]: http://www.w3api.com/wiki/Java:String.compareToIgnoreCase() "compareIgnoreCase()"
[StringEndsWith]: http://www.w3api.com/wiki/Java:String.endsWith() "endsWith()"
[StringEquals]: http://www.w3api.com/wiki/Java:String.equals() ".equals()"
[StringEqualsIgnoreCase]: http://www.w3api.com/wiki/Java:String.equalsIgnoreCase() "equalsIgnoreCase"
[StringIndexOf]: http://www.w3api.com/wiki/Java:String.indexOf() "indexOf()"
[StringLastIndexOf]: http://www.w3api.com/wiki/Java:String.lastIndexOf() "lastIndexOf()"
[StringLength]: http://www.w3api.com/wiki/Java:String.length() "length()"
[StringStartsWith]: http://www.w3api.com/wiki/Java:String.startsWith() "startWith()"
[StringSubstring]: http://www.w3api.com/wiki/Java:String.substring() "substring()"
[StringToLowerCase]: http://www.w3api.com/wiki/Java:String.toLowerCase() "toLowerCase()"
[StringToUpperCase]: http://www.w3api.com/wiki/Java:String.toUpperCase() "toUpperCase()"
[StringTrim]: http://www.w3api.com/wiki/Java:String.trim() "trim()"
[StringReplace]: http://www.w3api.com/wiki/Java:String.replace() "replace()"
[StringValueOf]: http://www.w3api.com/wiki/Java:String.valueOf() "valueOf()"
[SystemOut]: http://www.w3api.com/wiki/Java:System.out
[SystemOutPrintln]: http://www.w3api.com/wiki/Java:System.out


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
