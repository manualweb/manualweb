---
title: Fechas Javascript
permalink: /javascript/fechas-javascript/
---

Lo primero que tenemos que saber a la hora de manejar las fechas en [Javascript][Javascript] no es mediante un tipo de dato fecha dentro del lenguaje. Si no, que nos ofrece el objeto `Date` para poder gestionar las fechas. De esta forma si queremos obtener una fecha utilizaremos este objeto:

~~~javascript
var fecha = new Date([<parámetros>])
~~~

Si invocamos al objeto `Date` sin ningún parámetro lo que obtendremos por consola será la fecha actual del sistema en el que lo invoquemos. Así, al ejecutar:

~~~javascript
console.log(new Date());
~~~~

En consola se nos mostrará algo parecido a:

<samp>
Thu Jan 07 2021 21:26:14 GMT+0100 (hora estándar de Europa central)
</samp>


## Crear Fechas

Ademá al objeto `Date` le podemos pasar una serie de parámetros para obtener otros valores de fechas. De esta forma tenemos los siguientes constructores del objeto `Date`.

~~~javascript
new Date()
new Date(milisegundos)
new Date(cadenaFecha)
new Date(año_num,mes_num,dia_num[,hor_num,min_num,seg_num,mils_num])
~~~

## Obtener tiempo actual

Date.now() - hora actual en milisegundos.
Se suele utilizar para medir tiempo
> Los milisegundos se cuentan desde el 1 de enero de 1970, a la hora local 00:00:00.


Date.parse() - transforma una cadena en milisegundos

Date.UTC() - acepta todos los parámetros del date y devuelve en milisegundos


## Get y Set sosobre las fechas


Date.prototype.getDate()
Date.prototype.getDay()
Date.prototype.getFullYear()
Date.prototype.getHours()
Date.prototype.getMilliseconds()
Date.prototype.getMinutes()
Date.prototype.getMonth()
Date.prototype.getSeconds()
Date.prototype.getTime()
Date.prototype.getTimezoneOffset() [Traducir]
Date.prototype.getUTCDate() [Traducir]
Date.prototype.getUTCDay() [Traducir]
Date.prototype.getUTCFullYear()
Date.prototype.getUTCHours()
Date.prototype.getUTCMilliseconds() [Traducir]
Date.prototype.getUTCMinutes() [Traducir]
Date.prototype.getUTCMonth() [Traducir]
Date.prototype.getUTCSeconds()
Date.prototype.getYear()


Date.prototype.setDate() [Traducir]
Date.prototype.setFullYear()
Date.prototype.setHours() [Traducir]
Date.prototype.setMilliseconds() [Traducir]
Date.prototype.setMinutes() [Traducir]
Date.prototype.setMonth() [Traducir]
Date.prototype.setSeconds() [Traducir]
Date.prototype.setTime() [Traducir]
Date.prototype.setUTCDate() [Traducir]
Date.prototype.setUTCFullYear() [Traducir]
Date.prototype.setUTCHours() [Traducir]
Date.prototype.setUTCMilliseconds() [Traducir]
Date.prototype.setUTCMinutes() [Traducir]
Date.prototype.setUTCMonth() [Traducir]
Date.prototype.setUTCSeconds() [Traducir]
Date.prototype.setYear() [Traducir]

## Conversiones de una fecha a otros tipos

Date.prototype.toDateString()
Date.prototype.toGMTString() [Traducir]
Date.prototype.toISOString()
Date.prototype.toJSON() [Traducir]
Date.prototype.toLocaleDateString() [Traducir]
Date.prototype.toLocaleFormat() [Traducir]
Date.prototype.toLocaleString() [Traducir]
Date.prototype.toLocaleTimeString() [Traducir]
Date.prototype.toSource() [Traducir]
Date.prototype.toString() [Traducir]
Date.prototype.toTimeString() [Traducir]
Date.prototype.toUTCString()


