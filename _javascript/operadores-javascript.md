---
title: Operadores Javascript
permalink: /javascript/operdores-javascript/
---

Lo primero que tenemos que saber es que en [Javascript][Javascript] existen dos tipos de operadores, los **operadores binarios**, en los que hay dos operandos:

~~~javascript
operando1 operador operando2
~~~

Un ejemplo de **operadores binarios** sería la suma:

~~~javascript
let suma = t + 2;
~~~

Y los **operadores unarios**, en los que solo tenemos un operador. En este caso hay veces en la que el operador va delante del operando y otras en las que el operador va detrás del operando

~~~javascript
operando operador
operador operando
~~~

Un ejemplo de **operadores unarios** sería el incremento o decremento:

~~~javascript
x++;
++x;
~~~

Una vez que conocemos los tipos de operadores deberemos de conocer la clasificación de operadores que tenemos qen Javascript. Así en 
[Javascript][Javascript] tenemos los siguientes tipos de operadores:

* Operadores de Asignación
* Operadores de Comparación
* Operadores Aritméticos
* Operadores sobre bits
* Operadores Lógicos
* Operadores con cadenas de texto
* Operador ternario
* Operador coma
* Operadores unarios
* Operadores de relación

## Operadores de asignación
Son aquellos operadores que nos sirven para asignar un valor a una variable o constante. De tal manera que el valor que encontremos en la parte derecha será el que se asigne.

El **operador de asignación** base es `=`. De esta manera podemos asignar un valor a una variable de la siguiente manera:

~~~javascript
x = y
~~~

Estamos asignando el valor de `y` a la variable `x`. De esta forma será común que nos encontremos con código como el siguiente:

~~~javascript
let numero = 8;
~~~

Esta asignación da el valor tan cual está en la parte derecha de la sentencia. Si bien disponemos de una serie de operadores de asignación que nos permiten modificar el valor antes de asignarlo. Así encontramos los siguientes **operadores de asignación**.


> Terminarlas

| Operador | Operador Extendido | Significado 
|---|---|---|
| `x += y` | `x = x + y` | Suma al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x -= y`| `x = x - y` | Substrae al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x *= y`| `x = x * y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x /= y` | `x = x/y` | Divide al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x %= y` | `x = x % y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x **= y` | `x = x ** y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x <<= y` | `x = x << y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x >>= y` | `x = x >> y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x >>>= y` | `x = x >>> y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x &= y` | `x = x & y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x ^= y` | `x = x ^ y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x \|= y` | `x = x \| y` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x &&= y` | `x && (x = y)` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x \|\|= y` | `x \|\| (x = y)` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.
| `x ??= y` | `x ?? (x = y)` | Multiplica al valor actual de `x` el valor de `y` para asignarlo a `x`.


### Asignación por desestructuración
Hay una forma de asignar valores a variables a partir de los valores de un array.

~~~javascript
valores = [1, 2, 3];
~~~

Si queremos asignar cada valor a una variable lo que haremos, si estamos manejando arrays es lo siguiente:

~~~javascript
n1 = valores[0];
n2 = valores[1];
n3 = valores[2];
~~~

La **asignación por desestructuración** lo que nos permite es asignar los valores de manera directa los valores del array sobre las variables atendiendo a la estructura:

~~~javascript
var [variable1, variable2,... variableN] = array
~~~

De esta manera lo que habíamos hecho en tres líneas de código se consigue mediante una **asignación por desestructuración** con el siguiente código:

~~~javascript
var [n1,n2,n3] = valores;
~~~

## Operadores de Comparación
Los **operadores de comparación** son aquellos que permiten comparar dos operandos y devolver un valor lógico.

En el caso de que los operandos sean de tipo diferente, [Javascript][Javascript] intenta convertirlos a un mismo tipo para poder compararlos.

| Operador |  Significado 
|---|---
| x == y | Devuelve `true` si los operandos son iguales
| x != y | Devuelve `true` si los operandos son diferentes
| x === y | Devuelve `true` si los operandos son iguales y son del mismo tipo
| x !== y | Devuelve `true` si los operandos son diferentes y son del mismo tipo
| x > y | Devuelve `true` si el operando de la izquierda es mayor que el operando de la derecha.
| x >= y | Devuelve `true` si el operando de la izquierda es mayor o igual que el operando de la derecha
| x < y | Devuelve `true` si el operando de la izquierda es menor que el operando de la derecha.
| x <= y | Devuelve `true` si el operando de la izquierda es menor o igual que el operando de la derecha.

En el caso de las comparaciones estrictas vemos que las comparaciones no son solo del valor si no que también afectan al tipo de dato. Podemos verlo en el siguiente ejemplo cuando comparamos un mismo valor que en un caso es un tipo número y en otro caso es una cadena.

~~~javascript
let n1 = 1;
let n2 = "1";

n1 == n2;
>> true

n1 === n2;
>> false
~~~

## Operadores Aritméticos
Los **operadores artiméticos** son aquellos que toman dos operandos numéricos y ejecutan la operación del operador.


| Operador |  Significado 
|---|---
| x + y | Suma los dos operandos.
| x + y | Resta los dos operandos.
| x * y | Multiplica los dos operandos.
| x / y | Divide los dos operandos.
| x % y | Ejecuta el módulos de los dos operandos. Es el resto de una división.
| ++x | Incrementa en 1 el operando y devuelve el operando
| x++ | Devuelve el operando e incrementa en 1 el operando.
| --x | Decrementa el operando y devuelve el operando.
| x-- | Devuelve el operando y decrementa en 1 el operando.
| -x | Invierte el valor del operando.
| +x | Convierte el operando en un número.
| x ** y | Calcula el exponencial asumiento el operando de la izquierda como base y el operando de la derecha como el exponente. Sería un x <sup>y</sup>.

## Operadores Binarios
Los **operadores binarios** nos permiten manipular los operandos con operaciones bianrias. Tratando a los operands como cadenas de 32 bits.

Tenemos los siguientes **operadores binarios**:


| Operador |  Significado 
|---|---
| x & y | Realiza una operación AND binaria. Devuelve 1 en las posiciones de bit dónde las posiciones de los dos operadores tienen un 1.
| x | y | Realiza una operación OR binaria. Devuelve un cero en las posiciones de bit dónde las posiciones de los dos operadores tienen un 0.
| x ^ y | Realiza una operación XOR binaria. 
| ~ x | Realiza una operación NOT binaria.
| x << y | Realiza un desplazamiento de bits a la izquierda.
| x >> y | Realiza un desplazamiento de bits a la derecha.
| x >>> y | Realiza un desplazamiento de bits a la derecha rellenando con ceros.









[Javascript]: {{site.url}}/javascript/