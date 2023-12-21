---
title: Texto Avanzado HTML
permalink: /html/texto-avanzado-html/
excerpt: "El texto avanzado HTMl nos permite crear abreviaturas, acrónimos. cambios, código fuente, referencias o definiciones."
tags: [citas,referencias,definiciones,abreviaturas,acrónimos,código fuente,cambios]
image:
  path: /img/covers/html-cover.png
---

## Abreviaturas y acrónimos


Cuando estamos escribiendo un texto es posible que nos encontremos con partes que sean abreviadas o partes que sean acrónimos.


Aunque abreviatura y acrónimo suenan similares, estas, tienen su pequeña diferencia. **Una abreviatura es un tipo de abreviación que consiste en la representación gráfica reducida de una palabra mediante la supresión de letras finales o centrales**, y que suele cerrarse con punto; p. ej., afmo. por afectísimo; Dir.a por directora; íd. por ídem; SS. MM. por Sus Majestades; D. por don.


Mientras que **acrónimo es un tipo de sigla que se pronuncia como una palabra**; p. ej., o(bjeto) v(olante) n(o) i(dentificado).


De esta forma en el lenguaje [HTML](https://www.manualweb.net/html/) nos encontramos con el elemento [`abbr`](https://w3api.com/HTML/abbr/) para las abreviaturas y el elemento [`acronym`](https://w3api.com/HTML/acronym/) para los acrónimos. Si queremos insertar una abreviatura:


```html
<abbr title="Director">Dir.</abbr> Juan de la Espina<abbr title="Sus Majestades">SS. MM.</abbr> los Reyes de España<abbr title="Calle">C.</abbr> del Pez nº40
```


En el caso de la abreviatura **se suele acompañar por un atributo** [**`title`**](https://w3api.com/HTML/title/), el cual nos ofrece el texto completo que representa la abreviatura.


Y si queremos insertar un acrónimo podemos escribir lo siguiente:


```html
<acronym title="Objeto Volante No Identificado">OVNI</acronym></pre>
```


De igual forma que con el elemento [`abbr`](https://w3api.com/HTML/abbr/), en el elemento [`acronym`](https://w3api.com/HTML/acronym/) encontramos el atributo [`title`](https://w3api.com/HTML/title/), el cual, en este caso, nos dirá que significan las siglas del acrónimo.


Otro atributo que solemos encontrar en estos elementos es el atributo [`lang`](https://w3api.com/HTML/lang/), el cual hace referencia al idioma en el que está escrita la abreviatura o el acrónimo.


## Textos preformateados


Ya hemos visto que a la hora de insertar texto en un documento [HTML](https://www.manualweb.net/html/) da igual poner muchos espacios o saltos de línea, ya que siempre serán ignorados.


Si bien, el lenguaje c nos ofrece el elemento [`pre`](https://w3api.com/HTML/pre/). El elemento [`pre`](https://w3api.com/HTML/pre/) permite representar el texto tal cual es escrito, respetando sus espacios y saltos de línea. Acaba representando fielmente lo que hayamos insertado.


La estructura del elemento [`pre`](https://w3api.com/HTML/pre/) es:


```html
<pre>Texto Preformateado</pre>
```


De esta forma podríamos escribir lo siguiente:


```html
<pre>Esto es un texto
que está preformateado
y por lo tanto  --->   mantiene los espacios
                       y saltos de línea.</pre>
```


Que en pantalla nos mostrará:


```text
Esto es un texto
que está preformateado

y por lo tanto  --->   mantiene los espacios
                       y saltos de línea.
```


## Notas de cambios en los documentos


Hay que pensar que [HTML](https://w3api.com/HTML/title/) fue pensado para compartir documentos electrónicos. Es por ello que el contenido de dichos documentos electrónicos iría avanzando en las revisiones que fuesen teniendo. Por lo tanto habría contenido nuevo y contenido eliminado.


A tal respecto el lenguaje [HTML](https://w3api.com/HTML/title/) nos ofrece dos elementos. El primero es el elemento [`ins`](https://w3api.com/HTML/ins/), este elemento sirve para indicar que el contenido es nuevo y que sustituye a un contenido que hayamos definido mediante el elemento [`del`](https://w3api.com/HTML/del/).


La estructura del elemento [`ins`](https://w3api.com/HTML/ins/) y del elemento [`del`](https://w3api.com/HTML/del/) es sencilla:


```html
<del>contenido eliminado</del>
<ins>contenido nuevo</ins>
```


Por ejemplo podríamos encontrarnos el siguiente código en un documento HTML utilizando el elemento [`ins`](https://w3api.com/HTML/ins/) y el elemento [`del`](https://w3api.com/HTML/del/):


```html
Los hechos sucedieron en Madrid, el pasado día <del>26</del><ins>28</ins> de febrero.
```


## Manejando código fuente en HTML


Otra de las cosas para las que el lenguaje [HTML](https://w3api.com/HTML/title/) fue pensando es el compartir código fuente, es decir, código informático.


Para poder cubrir esta necesidad nos ofrece un conjunto de elementos que representan semántica relacionada con el mundo de la computación.


Así tenemos.

- **code**, para insertar código fuente.
- **kbd**, para representar entradas de información por teclado.
- **samp**, para mostrar las salidas por consola de información.
- **var**, para definir las variables de un programa.

La estructura de los elementos [`code`](https://w3api.com/HTML/code/), [`kbd`](https://w3api.com/HTML/kbd/), [`samp`](https://w3api.com/HTML/samp/) y [`var`](https://w3api.com/HTML/var/) es la misma:


```html
<code> código fuente </code>
<kbd> entrada teclado </kbd>
<samp> salida por consola </samp>
<var> variable </var>
```


Así podríamos encontrarnos el siguiente ejemplo [HTML](https://w3api.com/HTML/title/) que usase estos cuatro elementos:


```html
El programa en Java se ejecuta mediante <kbd>java Saludo</kbd>. Lo que hará este código es ejecutar el siguiente programa.

<code>public class Saludo{
  public static void main(String[] args)  {
    System.out.println("Hola"+ args[ManualHTML]);
  }
}</code>

Dependiendo del valor que le demos a la variable <var>args</var> nos aparecerá un saludo u otro. Así si ejecutamos como <kbd>java Saludo Esther</kbd> por pantalla nos mostrará <samp>Hola Esther</samp>
```


## Fuente o referencia de una cita


Aunque ya hemos visto que tenemos los elementos [`blockquote`](https://w3api.com/HTML/blockquote/) y [`q`](https://w3api.com/HTML/q/) para crear citas en [HTML](https://w3api.com/HTML/title/), el lenguaje [HTML](https://w3api.com/HTML/title/) nos ofrece otro elemento para establecer una referencia o fuente de una cita. Este es el elemento [`cite`](https://w3api.com/HTML/cite/).


La estructura del elemento [`cite`](https://w3api.com/HTML/cite/) sería:


```html
<cite>Fuente</cite>
```


Hay que indicar que este elemento no es para representar la cita, si no la fuente o referencia origen de la cita.


Por ejemplo podríamos escribir lo siguiente con el elemento [`cite`](https://w3api.com/HTML/cite/):


```html
<cite>La sombra del ciprés es alargada</cite>, empieza diciendo “Yo nací en Ávila, la vieja ciudad de las murallas…"
```


## Definiciones


Otro de los elementos que nos ofrece el lenguaje [HTML](https://w3api.com/HTML/title/) es el elemento [`dfn`](https://w3api.com/HTML/dfn/), este elemento es utilizado para marcar un término que va a ser definido dentro de un contenido.


La estructura del elemento [`dfn`](https://w3api.com/HTML/dfn/) es la siguiente:


```html
<dfn>término</dfn>
```


Podemos utilizarlo de la siguiente forma:


```html
Un <dfn>gabán</dfn> es capote con mangas, y a veces con capilla.
```

