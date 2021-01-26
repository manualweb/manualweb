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



[Javascript]: {{site.url}}/javascript/