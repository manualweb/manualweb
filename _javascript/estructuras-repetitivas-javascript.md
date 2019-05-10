---
title: Estructuras Repetitivas Javascript
permalink: /javascript/estructuras-repetitivas-javascript/
---

Las estructuras repetitivas son aquellas que nos permiten realizar una misma acción un número determinado de veces. El número de veces puede ser un contador o la evaluación de una condición.

Existen varias estructuras repetitivas en JavaScript:
for
while
do-while
for
La estructura repetitiva for sigue la siguiente estructura:

for (asignacion_inicial;condicion;incremento) {
  // Bloque de sentencias
}

Lo primero que se ejecutará es la asignación inicial. Esta solo se ejecuta la primera vez que se entra en la estructura repetitiva.

Posteriormente se evaluará la condición. Si la condición tiene el valor true, entonces se ejecutará el bloque de sentencias. Si la condición tiene el valor false, se termina y sale del bucle.

Para finalizar, y una vez ejecutado el bloque de sentencias, se ejecutará el incremento.

Si, por ejemplo, queremos ejecutar un bloque de sentencias 10 veces, podremos utilizar el siguiente código.

for (x=0;x<10;x++) {
  // Bloque de sentencias
}

while
Esta estructura ejecuta el bloque de setencias si la condición contiene un valor de true. En caso de que el valor sea false, se sale del bucle.

while (condicion) {
  // Bloque de sentencias
}

Así, si queremos ejecutar el bucle 10 veces tendremos el siguiente código:

x = 0;
while (x<10) {
  // Bloque de sentencias
  x++;
}
do-while
Esta estructura nos permite ejecutar, al menos, una vez el bloque de sentencias. Ya que la condición será evaluada al finalizar el bloque.

En el caso de que la condición sea true se iterará nuevamente en el bucle. Si la condición es false se saldrá de la ejecución del bucle.

Su estructura es la siguiente:

do {
  // Bloque de sentencias
} while (condicion);

xxx

Si queremos ejecutar la estructura repetitiva 10 veces, tendremos el siguiente código:

x = 0;
do {
  // Bloque de sentencias
  x++;
} while (x<=10)

Bucles infinitos
Los bucles ifinitos son aquellos cuya condición no se cumple nunca. Es por ello que el código se ejecuta infinitamente sin finalizar el programa.

Es por ello que siempre deberemos de asegurarnos que dentro del bloque de sentencias hay una sentencia que pueda alterar la condición y evitar así los dañinos bucles infinitos.

break

For-in

Ejemplos de estructuras repetitivas
Recorrer un array
Buscar un elemento en un array
Sumatorio de un numero
Multiplicador de un número
Calcular la media
...

Otras estructuras
With
