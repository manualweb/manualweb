---
title: Estructuras Selectivas Javascript
permalink: /javascript/estructuras-selectivas-javascript/
---
Las estructuras selectivas nos sirven para **controlar el flujo de un programa [Javascript][Javascript]**. Atendiendo a una condición haremos unas cosas u otras.

En [Javascript][Javascript] tenemos dos tipos de estructuras selectivas:
* if-then-else
* switch

## If-then-else
Esta estructura indica que en el caso de **que se cumpla la condición `if`**, es decir, que tenga un valor `true`, se ejecutará el *bloque_sentencias_1*. En caso de **que no se cumpla la condición `if`**, es decir, que tenga un valor `false`, se ejecutará el *bloque_sentecias_2*.

~~~javascript
if (condicion)
  bloque_sentencias_1
else
  bloque_sentencias_2
~~~

Se pueden anidar las consultas `if` mediante la sentencia `else if`. De esta manera podremos hacer múltiples comprobaciones. Quedando la siguiente estructura:

~~~javascript
if (condicion)
  bloque_sentencias_1
else if (condicion2)
  bloque_sentencias_2
else if (condicion3)
  bloque_sentencias_3
...
else
  bloque_sentencias_Nl
~~~

Por ejemplo podemos utilizar las estructuras selectivas para comprobar cual de dos números es mayor. El código sería el siguiente

~~~javascript
let numero1 = 3;
let numero2 = 7;

if (numero1 > numero2)
  console.log(numero1 + ' es mayor que ' + numero2);
else if (numero2 > numero1)
  console.log(numero2 + ' es mayor que ' + numero1);
else
  console.log('Son dos números iguales');
~~~

## Switch
La estructura selectiva **`switch` permite evaluar una expresión contra diferentes valores**. En el caso de que la expresión concuerde con un valor, se ejecutará su bloque de sentencias asociado.

En el caso de que haya dos valores que concuerden con el resultado de la expresión, se ejecutarán los bloques de sentencias asociados a dichos valores.

Si no se encuentra un valor asociado a la expresión se ejecutará el bloque de sentencias asociado a la etiqueta `default`.

El formato de la estructura selectiva ` ` es el siguiente:

~~~javascript
switch (expresion) {
  case label1:
    bloque_sentencias_1;
    [break;]
  case label2:
    bloque_sentencias_2;
    [break;]
  ...
  default:
    bloque_sentencias_default;
    [break;]
}
~~~

Como hemos comentado se ejecutarán tantos bloques de sentencias como valores de etiquetas coincidan con el resultado de la expresión.

Para que solo se ejecute un bloque deberemos de utilizar la sentencia `break` al final de cada bloque. De esta forma, cuando encuentre la primera etiqueta que coincida con el valor de la expresión, ejecutará el bloque y se saldrá de la estructura `switch`.

Aunque ponemos la etiqueta `default` la última, esta puede aparecer en cualquier posición de la estructura `switch`.

Por ejemplo, la estructura `switch` nos puede ayudar para conocer el día de la semana. El código sería el siguiente:

~~~javascript
let fecha = new Date();
let dia = fecha.getDay();

switch (dia) {
  case 1:
    console.log('Hoy es lunes');
    break;
  case 2:
    console.log('Hoy es martes');
    break;
  case 3:
    console.log('Hoy es miércoles');
    break;
  case 4:
    console.log('Hoy es jueves');
    break;
  case 5:
    console.log('Hoy es viernes');
    break;
  case 6:
    console.log('Hoy es sábado');
    break;
  case 7:
    console.log('Hoy es domingo');
    break;
  default:
    console.log('El valor introducido no corresponde con un día');
}
~~~

[JavaScript]: {{site.url}}/javascript/
