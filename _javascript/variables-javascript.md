---
title: Variables Javascript
permalink: /javascript/variables-javascript/
---

## ¿Qué son las variables Javascript?

Las variables en Javascript son espacios en memoria en los que podemos almacenar uno o varios valores durante el ciclo de vida de nuestro código [JavaScript][JavaScript].

Para declarar una variable en [JavaScript][JavaScript] simplemente tendremos que poner su nombre, precedido del operador de declaración de variables `var` o `let`.

~~~javascript
var mivariable;
~~~

Hay que tener en cuenta que [JavaScript][JavaScript] es **sensible a mayúsculas** por lo que no serán diferentes variables `mivariable`, `MiVariable` o `miVariable`.


## Operadores declaración variables Javascript

Podemos utilizar dos operadores de declaración con las variables [JavaScript][JavaScript]. Estos son `var`, `let` y `const`. Dependiendo del que utilicemos el ámbito de validez de la variable será diferente.

* `var`, nos sirve para declarar una variable. Opcionalmente podemos inicializar la variable.
* `let`, nos sirve para declarar una variable local a nivel de bloque. Opcionalmente podemos inicializar la variable.
* `const`, nos sirve para declarar una constante, que será una variable con un valor de solo lectura. Su ámbito de valor será a nivel de bloque.


## Nombres de las variables Javascript
A la hora de definir una variable [JavaScript][JavaScript], lo único que hay que tener en cuenta es que esta **debe empezar por una letra o por el símbolo de subrayado ( _ )**. Lo que siga a esto es indiferente.

Por ejemplo podríamos definir como variables :

~~~javascript
Nombre
_Opción15
mes3
~~~

Mientras que estarían mal definidas las siguientes variables :  

~~~javascript
7opcion
&inicio
¿nombre
~~~

*Tampoco podremos usar como variables *palabras reservadas del lenguaje:* `new`, `null`, `if`,...

## Declarar una variable JavaScript

Así la estructura para poder declarar una variable [JavaScript][JavaScript] será la siguiente:

~~~javascript
operador_declaracion nommbre_variable = valor_inicial;
~~~

Así podríamos tener las siguiente variables y constantes:

~~~javascript
var nombre = "Víctor";
let numero = 4;
const constante = 12;
~~~

En el caso de que no asignemos un valor a la variable, esta contendrá el valor `undefined`.

> Al comprobar si una variable tiene el valor `undefined` estaríamos comprobando si esta variable se ha inicializado o no.

Si intentamos acceder a una variable sin definir obtendremos el error `ReferenceError`.

## Ámbito de las variables JavaScript

Cuando definimos una variable dentro de un bloque entendemos que su ámbito de validez es dentro de ese bloque. Y si está declarada fuera de cualquier bloque la variable es local. Si bien por las especificaciones previas a **ECMAScript 2015** cualquier variable declarada mediante un operador de declaración `var` es una **variable global que se vería en cualquier parte del bloque que la contenga**.

Así el siguiente código funcionaría:

~~~javascript
if (true) {
  var minumero = 8;
}

console.log(minumero); // Mostrará un 8
~~~

Mientras que con el operador de declaración `let` solo se verá la variable dentro del bloque que la contiene.

~~~javascript
if (true) {
  let minumero = 8;
}

console.log(minumero); // Será undefined
~~~

## constantes
Una constante es una variable con un valor de solo lectura, la cual declararemos mediante el operador de declaración `const`. Así podremos definir una constante de la siguiente forma:

~~~javascript
const miconstante = valor;
~~~

El valor de la constante no podrá cambiar durante la vida de nuestro programa.

Así podríamos tener el siguiente código para *calcular el área de un círculo* con el uso de constantes:

~~~javascript
const PI = 3.1416;
let radio = 2;

console.log(2*PI*radio);
~~~

El ámbito de una constante en [JavaScript][JavaScript] será el mismo que el de una variable local definida mediante `let`.

## Tipos de variables JavaScript

Dentro de [JavaScript][JavaScript] podemos definir **7 tipos de datos a nuestras variables**:

* **Boolean**, variables que puedan contener un valor de verdadero o falso. (true|false).
* **null**, en el caso de que la variable no tome ningún valor.
* **undefined**, cuando la variable no ha sido inicializada tiene un valor indefinido.
* **Number**, para los números enteros o decimales. (8 o 3.1416)
* **String**, para las cadenas de texto. ("Soy una cadena")
* **Symbol**, para valores que sean únicos e inmutables.
* **Object**, para cuando la variable contiene un objeto.



> El tipo de dato de la variable se calcula atendiendo al valor que le asignemos a dicha variable. El tipo de una variable puede cambiar a lo largo de la vida de un progama [JavaScript][JavaScript] atendiendo a los valores que se le vayan asignando.



Números, aquí entendemos por números a los enteros y a los reales. Por ejemplo 47 ó 1.18
Cadenas de caracteres,  como por ejemplo “Hola mundo”.
Booleanas, son las que toman dos valores (verdadero o falso). Son las que llamaríamos variables lógicas.
Nulas, es cuando la variable no toma ningún valor, se define como null.
Indefinidas, utilizaremos el valor undefined.



Variables locales y globales
Otra cosa que debemos dejar clara es como podemos definir las variables, es decir, como sabemos si una variable es local o es global. En Java Script para denotar una variable local la antepondremos la palabra var. Las variables locales se utilizaran dentro de funciones y su valor solo perdurara dentro de ellas. Si definimos una variable fuera de una función, esta será una variable global y su valor estará disponible desde cualquier parte de código JavaScript que haya en la página.

El acceso a las variables no perdura cuando cambiamos de página. La solucción se basará en el paso de variables de unba página a otra.

Un ejemplo de la utilización de las variables con Java Script es el siguiente :

<HTML>
  <HEAD>
    <TITLE> Uso de variables en JavaScript </TITLE>
  </HEAD>

  <BODY>
   <SCRIPT LANGUAGE="JavaScript">

     <!-- Ocultación a antiguos navegadores
      var saludo_esp = "Hola";
      var saludo_ing = "Hello";
      documment.write ( saludo_esp + " Mundo" + "<br>");
      documment.write ( saludo_ing + " Wordl" );
		// Fin de la ocultación -->

    </SCRIPT>
  </BODY>
</HTML>
Hacer referencia que al añadir <br> en la primera escritura, lo único que hacemos es generar un salto de línea.


Conversiones entre tipos de datos
JavaScript es un lenguaje de tipado dinámico. Eso significa que no tenemos que indicar el tipo de la variable. Si no que el tipo de la variable cambiará dependiendo del valor que la asignemos.

var mivariable = 12;
mivariable = "Texto";

Al instanciarla por primera vez mivariable será de tipo numérico y al asignarla el valor "Texto" pasará a ser de tipo cadena. Veamos como el tipo de la variable va cambiando mediante el siguiente código, el cual utiliza el método typeof.

** Ejemplo con el typeof


[Javascript]: [JavaScript]: {{site.url}}/javascript/
