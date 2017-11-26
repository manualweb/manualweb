---
title: Texto Avanzado en HTML
permalink: /html/texto-avanzado-html/
---

## Abreviaturas y acrónimos

Cuando estamos escribiendo un texto es posible que nos encontremos con partes que sean abreviadas o partes que sean acrónimos.

Aunque abreviatura y acrónimo suenan similares, estas, tienen su pequeña diferencia. **Una abreviatura es un tipo de abreviación que consiste en la representación gráfica reducida de una palabra mediante la supresión de letras finales o centrales**, y que suele cerrarse con punto; p. ej., afmo. por afectísimo; Dir.a por directora; íd. por ídem; SS. MM. por Sus Majestades; D. por don.

Mientras que **acrónimo es un tipo de sigla que se pronuncia como una palabra**; p. ej., o(bjeto) v(olante) n(o) i(dentificado).

De esta forma en el lenguaje [HTML][ManualHTML] nos encontramos con el [elemento abbr][ABBR] para las abreviaturas y el [elemento acronym][ACRONYM] para los acrónimos. Si queremos insertar una abreviatura:

~~~html
<abbr title="Director">Dir.</abbr> Juan de la Espina
<abbr title="Sus Majestades">SS. MM.</abbr> los Reyes de España
<abbr title="Calle">C.</abbr> del Pez nº40
~~~

En el caso de la abreviatura **se suele acompañar por un atributo title**, el cual nos ofrece el texto completo que representa la abreviatura.

Y si queremos insertar un acrónimo podemos escribir lo siguiente:

~~~html
<acronym title="Objeto Volante No Identificado">OVNI</acronym></pre>
~~~

De igual forma que con el [elemento abbr][ABBR], en el [elemento acronym][ACRONYM] encontramos [el atributo title][Title], el cual, en este caso, nos dirá que significan las siglas del acrónimo.

Otro atributo que solemos encontrar en estos elementos es el [atributo lang][Lang], el cual hace referencia al idioma en el que está escrita la abreviatura o el acrónimo.

## Textos preformateados
Ya hemos visto que a la hora de insertar texto en un documento [HTML][ManualHTML] da igual poner muchos espacios o saltos de línea, ya que siempre serán ignorados.

Si bien, el lenguaje [HTML][ManualHTML] nos ofrece el [elemento pre][PRE]. El [elemento pre][PRE] permite representar el texto tal cual es escrito, respetando sus espacios y saltos de línea. Acaba representando fielmente lo que hayamos insertado.

La estructura del [elemento pre][PRE] es:

~~~html
<pre>Texto Preformateado</pre>
~~~

De esta forma podríamos escribir lo siguiente:

~~~html
<pre>Esto es un texto
que está preformateado

y por lo tanto  --->   mantiene los espacios
                       y saltos de línea.</pre>
~~~

Que en pantalla nos mostrará:

<pre>Esto es un texto
que está preformateado

y por lo tanto  --->   mantiene los espacios
                       y saltos de línea.</pre>

## Notas de cambios en los documentos

Hay que pensar que [HTML][ManualHTML] fue pensado para compartir documentos electrónicos. Es por ello que el contenido de dichos documentos electrónicos iría avanzando en las revisiones que fuesen teniendo. Por lo tanto habría contenido nuevo y contenido eliminado.

A tal respecto el lenguaje HTML nos ofrece dos elementos. El primero es el [elemento ins][INS], este elemento sirve para indicar que el contenido es nuevo y que sustituye a un contenido que hayamos definido mediante el [elemento del][DEL].

La estructura del [elemento ins][INS] y del [elemento del][DEL] es sencilla:

~~~html
<del>contenido eliminado</del>
<ins>contenido nuevo</ins>
~~~

Por ejemplo podríamos encontrarnos el siguiente código en un documento HTML utilizando el [elemento ins][INS] y el [elemento del][DEL]:

~~~html
Los hechos sucedieron en Madrid, el pasado día <del>26</del><ins>28</ins> de febrero.
~~~

## Manejando código fuente en HTML

Otra de las cosas para las que el lenguaje [HTML][ManualHTML] fue pensando es el compartir código fuente, es decir, código informático.

Para poder cubrir esta necesidad nos ofrece un conjunto de elementos que representan semántica relacionada con el mundo de la computación.

Así tenemos.

*   **code**, para insertar código fuente.
*   **kbd**, para representar entradas de información por teclado.
*   **samp**, para mostrar las salidas por consola de información.
*   **var**, para definir las variables de un programa.

La estructura de los elementos [code][CODE], [kbd][KBD], [samp][SAMP] y [var][VAR] es la misma:

~~~html
<code> código fuente </code>
<kbd> entrada teclado </kbd>
<samp> salida por consola </samp>
<var> variable </var>
~~~

Así podríamos encontrarnos el siguiente ejemplo [HTML][ManualHTML] que usase estos cuatro elementos:

~~~html
El programa en Java se ejecuta mediante <kbd>java Saludo</kbd>. Lo que hará este código es ejecutar el siguiente programa.

<code>public class Saludo
{
  public static void main(String[] args)
  {
    System.out.println("Hola"+ args[ManualHTML]);
  }
}</code>

Dependiendo del valor que le demos a la variable <var>args</var> nos aparecerá un saludo u otro. Así si ejecutamos como <kbd>java Saludo Esther</kbd> por pantalla nos mostrará <samp>Hola Esther</samp>
~~~

## Fuente o referencia de una cita

Aunque ya hemos visto que tenemos los elementos [blockquote][BLOCKQUOTE] y [q][Q] para crear citas en [HTML][ManualHTML], el lenguaje [HTML][ManualHTML] nos ofrece otro elemento para establecer una referencia o fuente de una cita. Este es el [elemento cite][CITE].

La estructura del [elemento cite][CITE] sería:

~~~html
<cite>Fuente</cite>
~~~

Hay que indicar que este elemento no es para representar la cita, si no la fuente o referencia origen de la cita.

Por ejemplo podríamos escribir lo siguiente con el [elemento cite][CITE]:

~~~html
<cite>La sombra del ciprés es alargada</cite>, empieza diciendo “Yo nací en Ávila, la vieja ciudad de las murallas…"
~~~

## Definiciones

Otro de los elementos que nos ofrece el lenguaje [HTML][ManualHTML] es el [elemento dfn][DFN], este elemento es utilizado para marcar un término que va a ser definido dentro de un contenido.

La estructura del [elemento dfn][DFN] es la siguiente:

~~~html
<dfn>término</dfn>
~~~

Podemos utilizarlo de la siguiente forma:

~~~html
Un <dfn>gabán</dfn> es capote con mangas, y a veces con capilla.
~~~

[ManualHTML]: http://www.manualweb.net/tutorial-html/
[ABBR]: http://www.w3api.com/wiki/HTML:ABBR
[ACRONYM]: http://www.w3api.com/wiki/HTML:ACRONYM
[Title]: http://www.w3api.com/wiki/HTML:Title
[Lang]: http://www.w3api.com/wiki/HTML:Lang
[PRE]: http://www.w3api.com/wiki/HTML:PRE
[INS]: http://www.w3api.com/wiki/HTML:INS
[DEL]: http://www.w3api.com/wiki/HTML:DEL
[CODE]: http://www.w3api.com/wiki/HTML:CODE
[KBD]: http://www.w3api.com/wiki/HTML:KBD
[SAMP]: http://www.w3api.com/wiki/HTML:SAMP
[VAR]: http://www.w3api.com/wiki/HTML:VAR
[BLOCKQUOTE]: http://www.w3api.com/wiki/HTML:BLOCKQUOTE
[Q]: http://www.w3api.com/wiki/HTML:Q
[CITE]: http://www.w3api.com/wiki/HTML:CITE
[DFN]: http://www.w3api.com/wiki/HTML:DFN
