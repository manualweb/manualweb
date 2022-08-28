---
title: Fechas Javascript
permalink: /javascript/fechas-javascript/
---

Lo primero que tenemos que saber a la hora de manejar las fechas en [Javascript][Javascript] es que no hay un tipo de dato fecha dentro del lenguaje. Si no, que nos ofrece el objeto `Date` para poder gestionar las fechas. De esta forma si queremos obtener una fecha utilizaremos este objeto:

~~~javascript
var fecha = new Date([<parámetros>])
~~~

Si invocamos al objeto `Date` sin ningún parámetro lo que obtendremos por consola será la fecha actual del sistema en el que lo invoquemos. Así, al ejecutar:

~~~javascript
console.log(new Date());
~~~

En consola se nos mostrará algo parecido a:

<samp>
Thu Jan 07 2021 21:26:14 GMT+0100 (hora estándar de Europa central)
</samp>


## Crear Fechas
Además al objeto `Date` le podemos pasar una serie de parámetros para obtener otros valores de fechas. De esta forma tenemos los siguientes constructores del objeto `Date`.

~~~javascript
new Date()
new Date(milisegundos)
new Date(cadenaFecha)
new Date(año_num,mes_num,dia_num[,hor_num,min_num,seg_num,mils_num])
~~~


## Métodos estáticos del objeto Date
Adicionalmente de tener la capacidad de poder crear el objeto `Date` con la fecha que queramos, este, nos ofrece una serie de *métodos estáticos* que nos dan información sobre la fecha actual o una fecha en concreto.

Así el primero que tenemos es el método `Date.now()` el cual nos devuelve la fecha actual en milisegundos. Los milisegundos corresponden a los segundos que han pasado desde el ***1 de enero de 1970, a la hora local 00:00:00***. Qué es la hora base que utilizan tanto el lenguaje [Javascript][Javascript] como el lenguaje [Java][Java].

~~~javascript
fecha_actual = Date.now();
~~~

Otro método que nos ayuda a obtener una fecha concreta en [Javascript][Javascript] es el método `Date.parse()`. En este caso, el método estático `Date.parse()` recibe una cadena de texto con un formato de fecha y nos devolverá los milisegundos asociados a dicha fecha. Si bien, la especificación recomienda no apoyarse en este método debido a las inconsistencias entre los navegadores.

~~~javascript
fecha_cadena = Date.parse('04 Dec 1995 00:12:00 GMT');
~~~

Por último tenemos el método `Date.UTC()` permite que le pasemos como parámetro el año, mes y dia, así como la hora, minuto y segundos correspondientes a una fecha y de igual manera que en los casos anteriores nos devuelve los milisegundos asociados a esta fecha,

~~~javascript
fecha_utc = new Date(Date.UTC(1977,10,11,06,10,01));
console.log(fecha_utc.toUTCString());                
~~~

## Get y Set sosobre las fechas
Mediante los métodos *set* y *get* podemos fijar u obtener los valores de un objeto `Date`. Así podemos utilizar los siguientes métodos get:

### Manipulando los días, meses y años
La primera parte que veremos será como manipular la parte de la fecha correspondiente solo a los días, meses y años. Dejando de lado la manipulación de la hora.

En primer lugar tenemos el método `getDate()`. Con el método `getDate()` se puede devolver el día del mes correspondiente a la fecha marcada. El valor será entre 1 y 31. De esta forma el código:

~~~javascript
fecha = new Date('2022','2','21');
console.log(fecha.getDate());
~~~

Nos devolverá el valor ***21*** que es el día del mes asociado a la fecha.

Si mediante `getDate()` obteníamos el día del mes, con `getDay()` obtenemos el día de la semana correspondiente a la fecha. El valor de retorno será entre 0 y 6. Siendo el 0 correspondiente a los días que sea domingo y el 6 correspondiente a los días que caen en sábado.

Si pasamos al código veremos que el código:

~~~javascript
fecha = new Date('2022','2','21');
console.log(fecha.getDate());
~~~

Nos devuelve el valor de ***1*** ya que el 21 de feberero de 2022 fue lunes.

Lo siguiente será poder obtener el valor del mes mediante el método `getMonth()`. Este método devuelve los valores 0 a 11. Siendo 0 el valor del mes de Enero y 11 el valor del mes de diciembre.

De esta forma obtendremos el valor de *1* refiriendose al código que carga la siguente fecha del mes de febrero:

~~~javascript
fecha = new Date('2022','2','21');
console.log(fecha.getMonth());
~~~

Para poder manipular el año tenemos dos opciones. Por un lado tenemos el método `getYear()` el cual devuelve el valor del año con 2 o 3 dígitos. Toma como referencia el año 1900 para indicar el año 0 y el valor del año es el número de años que pasaron desde esa fecha. Por el otro tenemos el método `getFullYear()`. El método `getFullYear()` nos devolverá el valor del año correspondiente con 4 digitos.

~~~javascript
fecha = new Date('2022','2','21');
console.log(fecha.getFullYear());   // 2022
console.log(fecha.getYear());       // 122
~~~

Así del siguiente código obtendremos el valor de ***2022*** para el método `getFullYear()` y el valor de ***122*** para el método `getYear()`.

### Manipulando las horas
Si nos fijamos en la parte referente a las horas, la cual está compuesta por horas, minutos, segundos, milisegundos y valor de la zona, tendremos los siguientes métodos.

El primero sería `getHours()` que nos devuelve el valor de las horas con los valores de 0 a 23, luego tendríamos el método `getMinutes()` que nos devuelve los minutos de la hora con los valores 0 a 59, pasaríamos al método `.getSeconds()` que devuelve los segundos de la hora con los valores 0 a 59 y por último el método `.getMilliseconds()` que retornará un valor de 0 a 999.

Así el siguiente código nos permitiría desgranar el valor de una hora en partes:

~~~javascript
fecha = new Date();
console.log("Hora: " + fecha.getHours());
console.log("Minutos: " + fecha.getMinutes());
console.log("Segundos: " + fecha.getSeconds());
console.log("Milisegundos: " + fecha.getMilliseconds());
~~~

También disponemos de los métodos `getTime()` que nos devuelve los milisegundos que han transcurrido desde el ***1 de enero de 1970, a la hora local 00:00:00***. Y `getTimeZoneOffset()` que nos devuelve en valor de minutos la zona en la que nos encontramos en el local que ejecutemos el código.

En este caso, si estamos en una zona que sea **GMT+2** nos diría que al valor real hay que restarle 120 minutos para obtener el GMT. Por lo tanto el método `getTimeZoneOffset()` devolverá un valor de -120.

Además podemos gestionar todos los métodos atendiendo al valor universal marcado por UTC mediante los métodos `getUTCDate()`, `getUTCDay()`, `getUTCFullYear()`, `getUTCHours()`, `getUTCMilliseconds()`, `getUTCMinutes()`, `getUTCMonth()` y `getUTCSeconds()`.

El manejo de los método UTC lo podemos ver en el siguiente código:

~~~javascript
fecha = new Date('August 1, 2022 00:10:00 GMT+02:00');
console.log(fecha.getDate());
console.log(fecha.getUTCDate());
console.log(fecha.getMonth());
console.log(fecha.getUTCMonth());
~~~

Es el inicio del mes de agosto, día 1 a las 0:10 minutos de la madrugrada. Pero en un GMT+2. Para la zona local los valores de `getDate()` y `getMonth()` serán 1 y 7. Pero para el valor GMT estaremos todavía a 31 de julio, por lo que los métodos `.getUTCDate()` y `.getUTCMonth()` devolverán los valores 31 y 6.

Aunque en la minupación de los valores de las fechas nos hemos centrado en los métodos GET, también disponemos de los método SET para poder cambiar los valores de la fecha. Así disponemos de los métodos: `.setDate()`, `.setFullYear()`, `.setHours()`, `.setMilliseconds()`, `.setMinutes()`, `.setMonth()`, `.setSeconds()`, `.setTime()`, `.setUTCDate()`, `.setUTCFullYear()`, `setUTCHours()`, `.setUTCMilliseconds()`, `.setUTCMinutes()`, `.setUTCMonth()`, `.setUTCSeconds()` y `.setYear()`.

Aplicándolo a código podríamos crear una fecha de la siguiente manera:

~~~javascript
fecha = new Date();
fecha.setDate(18);
fecha.setMonth(10);
fecha.setYear(1977);
fecha.setHours(2);
fecha.setMinutes(10);
console.log(fecha.toString());
~~~

Que nos devolverá:

<samp>
'Fri Nov 18 1977 02:10:48 GMT+0100 (hora estándar de Europa central)'
</samp>

## Conversión de Date a String
Otras capacidades que nos ofrece el objeto `Date` es la posibilidad de convertir una fecha a una cadenas de texto. Lo cual nos será útil si queremos escribir horas en ficheros o en trazas de log, así como si necesitamos enviar una fecha en formato JSON.

De esta manera podemos utilizar el snecillo método `.toString()` para convertir la fecha en una cadena de texto. En este caso podemos crear el siguiente código:

~~~javascript
let fecha = new Date(Date.UTC(1977,10,18,06,10,01));
console.log(fecha.toString());
~~~

Que nos muestra por consola:

<samp>'Fri Nov 18 1977 07:10:01 GMT+0100 (hora estándar de Europa central)'</samp>

Podemos gestionar la conversión a cadenas de muchas otras formas. Por ejemplo el método `.toDateString()` nos permite que tenga un formato sencillo para poder ser entendido por un humano.

Así, el siguiente código:

~~~javascript
let fecha = new Date(Date.UTC(1977,10,18,06,10,01));
console.log(fecha.toDateString());
~~~

Nos devolverá por consola una información reducida sobre la fecha que hemos creado:

<samp>
'Fri Nov 18 1977'
</samp>

Si solo queremos las horas, podemos utilizar `.toTimeString()`. Quedánonos el siguiente código:

~~~javascript
let fecha = new Date(Date.UTC(1977,10,18,06,10,01));
console.log(fecha.toTimeString());
~~~

Que permite ver en consola:

<samp>
'07:10:01 GMT+0100 (hora estándar de Europa central)'
</samp>

Si queremos tener en formato fecha un contenido más extenso podemos utilizar el método `.toGTMString()` o `.toUTCString()`. En estos casos el resultado por consola será:

<samp>
'Fri, 18 Nov 1977 06:10:01 GMT'
</samp>

Para poder ofrecer la hora en el formato local. Como habéis podido comprobar el formato hasta ahora es en inglés, podemos recurrir a los métodos `.toLocaleString()` que nos da la fecha y hora en formato del `Locale` en el que estemos funcionando. O bien si solo queremos la fecha podemos utilizar `.toLocaleDateString()` y la hora mediante `.toLocaleTimeString()`

El código:

~~~javascript
let fecha = new Date(Date.UTC(1977,10,18,06,10,01));
console.log(fecha.toLocaleString());
~~~

Nos ofrecerá la siguiente salida por la consola:

<samp>
'18/11/1977, 7:10:01'
</samp>

Por último podemos necesitar convertir la fecha para poder ser utilizara en un formato JSON. En este caso tenemos el método `.toJSON()`. En este caso se aplica un formato **ISO 8601 Extended Format**. Por lo que sería el mismo resultado que invocar el método `.toISOString()`

Si lo vemos el código, recurriendo al mismo ejemplo de la fecha, tendríamos:

~~~javascript
let fecha = new Date(Date.UTC(1977,10,18,06,10,01));
console.log(fecha.toJSON());
~~~

Y en consola veremos el siguiente resultado:

<samp>'1977-11-18T06:10:01.000Z'</samp>

[Javascript]: {{site.url}}/javascript
[Java]: {{site.url}}/java