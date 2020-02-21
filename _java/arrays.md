---
title: Arrays Java
permalink: /java/arrays-java/
redirect_from: /java/arrays-en-java/
---

## ¿Qué es un array en Java?

Un array [Java][ManualJava] es una estructura de datos que nos permite almacenar una ristra de datos de un mismo tipo. El tamaño de los arrays se declara en un primer momento y no puede cambiar en tiempo de ejecución como puede producirse en otros lenguajes. La declaración de un array en Java y su inicialización se realiza de la siguiente manera:

~~~java
tipo_dato nombre_array[];
nombre_array = new tipo_dato[tamanio];
~~~

Por ejemplo, podríamos declarar un array de caracteres e inicializarlo de la siguiente manera:

~~~java
char arrayCaracteres[];
arrayCaracteres = new char[10];
~~~

Los arrays [Java][ManualJava] se numeran desde el elemento cero, que sería el primer elemento, hasta el tamaño-1 que sería el último elemento. Es decir, si tenemos un array de diez elementos, el primer elemento sería el cero y el último elemento sería el nueve. Para acceder a un elemento especifico utilizaremos los corchetes de la siguiente forma. Entendemos por acceso, tanto el intentar leer el elemento, como asignarle un valor.

~~~java
arrayCaracteres[numero_elemento];
~~~

Por ejemplo, para acceder al tercer elemento lo haríamos de la siguiente forma:

~~~java
// Lectura de su valor.
char x = arrayCaracteres[2];

// Asignación de un valor. Como se puede comprobar se pone el  número dos, que coincide con el tercer elemento. Ya que como  dijimos anteriormente el primer elemento es el cero.
arrayCaracteres[2] = 'b';
~~~

El objeto array, aunque podríamos decir que no existe como tal, posee una variable, la cual podremos utilizar para facilitar su manejo.

## Tamaño del array: .length

Este atributo nos devuelve el número de elementos que posee el array. Hay que tener en cuenta que es una variable de solo lectura, es por ello que no podremos realizar una asignación a dicha variable. Por ejemplo esto nos serviría a la hora de mostrar el contenido de los elementos de un array:

~~~java
char array[];
array = new char[10];

for (int x=0;x<array.length;x++)
  System.out.printnln(array[x]);
~~~

> Uno de los axiomas de la orientación a objetos es la ocultación, es decir, que no podemos acceder a una variable declarada dentro de una clase a no ser que lo hagamos a través de un método de la clase. Aquí estamos accediendo a una variable. ¿Quizás sea por que no consideran a los arrays como objetos?.

## Matrices o Arrays de varios subindices

Podremos declarar arrays [Java][ManualJava] de varios subíndices, pudiendo tener arrays [Java][ManualJava] de dos niveles, que serían similares a las matrices, arrays [Java][ManualJava] de tres niveles, que serían como cubos y así sucesivamente, si bien a partir del tercer nivel se pierde la perspectiva geométrica. Para declarar e inicializar un array de varios subíndices lo haremos de la siguiente manera:

~~~java
tipo_dato nombre_array[][];
nombre_array = new tipo_dato[tamanio][tamanio];
~~~

De esta forma podemos declarar una matriz [Java][ManualJava] de 2x2 de la siguiente forma:

~~~java
int matriz[][];
matriz = new int[2][2];
~~~

El acceso se realiza de la misma forma que antes:

~~~java
int x = matriz[1][1]; // Para leer el contenido de un elemento
matriz[1][1] = x;     // Para asignar un valor.
~~~

Hay que tener en cuenta que para mostrar su contenido tendremos que utilizar dos bucles. Para saber el número de columnas lo haremos igual que antes mediante la variable ```.length```, pero para saber el numero de filas que contiene cada columna lo tendremos que realizar de la siguiente manera:

~~~java
matriz[numero_elemento].lenght;
~~~

Nuestra lectura de los elementos de una matriz quedaría de la siguiente forma:

~~~java
int matriz[][];
matriz = new int[4][4];
for (int x=0; x < matrix.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
      System.out.println (matriz[x][y]);
  }
}
~~~

## Incialización de Arrays en Java

Existe una forma de inicializar un array en [Java][ManualJava] con el contenido, amoldándose su tamaño al número de elementos a los que le inicialicemos. Para inicializar un array [Java][ManualJava] utilizaremos las llaves de la siguiente forma:

~~~java
tipo_dato array[] = {elemento1,elemento2,...,elementoN};
~~~

Así, por ejemplo, podríamos inicializar un array [Java][ManualJava] o una matriz [Java][ManualJava]:

~~~java
// Tenemos un array de 5 elementos.
char array[] = {'a','b','c','d','e'};

// Tenemos un array de 4x4 elementos.
int array[][] = { {1,2,3,4}, {5,6,7,8}};
~~~

[ManualJava]: http://www.manualweb.net/tutorial-java/
