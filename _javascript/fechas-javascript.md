---
title: Fechas Javascript
permalink: /javascript/fechas-javascript/
---

Lo primero que tenemos que saber a la hora de manejar las fechas en [Javascript][Javascript] es que no existe el tipo de dato fecha dentro del lenguaje. Si bien nos ofrece el objeto `Date` para poder gestionar las fechas. De esta forma si queremos obtener una fecha utilizaremos este objeto:

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