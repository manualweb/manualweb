---
title: Sentencias Ramificación en Java
permalink: /java/sentencias-ramificacion-java/
---
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
