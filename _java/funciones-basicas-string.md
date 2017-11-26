---
title: Funciones Básicas con Cadenas
permalink: /java/funciones-basicas-con-cadenas/
---

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

[ClaseString]: http://www.manualweb.net/java/clase-string-representando-una-cadena/ "Crear una cadena de texto"

[StringCharAt]: http://www.w3api.com/wiki/Java:String.charAt() "charAt"
[StringEquals]: http://www.w3api.com/wiki/Java:String.equals() ".equals()"
[StringEqualsIgnoreCase]: http://www.w3api.com/wiki/Java:String.equalsIgnoreCase() "equalsIgnoreCase"
[StringCompareTo]: http://www.w3api.com/wiki/Java:String.compareTo() ".compareTo"
[StringCompareIgnoreCase]: http://www.w3api.com/wiki/Java:String.compareToIgnoreCase() "compareIgnoreCase()"
[StringIndexOf]: http://www.w3api.com/wiki/Java:String.indexOf() "indexOf()"
[StringLastIndexOf]: http://www.w3api.com/wiki/Java:String.lastIndexOf() "lastIndexOf()"
[StringEndsWith]: http://www.w3api.com/wiki/Java:String.endsWith() "endsWith()"
[StringStartsWith]: http://www.w3api.com/wiki/Java:String.startsWith() "startWith()"
[StringLength]: http://www.w3api.com/wiki/Java:String.length() "length()"
[StringSubstring]: http://www.w3api.com/wiki/Java:String.substring() "substring()"
[StringToLowerCase]: http://www.w3api.com/wiki/Java:String.toLowerCase() "toLowerCase()"
[StringToUpperCase]: http://www.w3api.com/wiki/Java:String.toUpperCase() "toUpperCase()"
[StringTrim]: http://www.w3api.com/wiki/Java:String.trim() "trim()"
[StringReplace]: http://www.w3api.com/wiki/Java:String.replace() "replace()"
[String]: http://www.w3api.com/wiki/Java:String "String"
[StringValueOf]: http://www.w3api.com/wiki/Java:String.valueOf() "valueOf()"

[IndexOutOfBoundsException]: http://www.w3api.com/wiki/Java:IndexOutOfBoundsException
