---
title: Parámetros Javascript
permalink: /javascript/parametros-funciones/
---

## Parámetros de la función

Es importante saber que los **parámetros de tipos de datos primitivos** que recibe la función se **reciben por valor**. Esto quiere decir que si modificamos el valor de uno de estos argumentos dentro de la función, este no se verá reflejado en la variable de origen.

Esto lo puedes comprobar mediante el siguiente código:

~~~javascript
function sumar (numero1, numero2) {
  // Ignoramos siempre el primer número
  numero1 = 0;
  return numero1 + numero2;
}

let n1 = 2;
let n2 = 3;
console.log(sumar(2,3));
console.log(n1);
~~~

Pero si pasamos un objeto a una función, este si que podrá verse modificado su contenido. Lo puedes comprobar con el siguiente código:

~~~javascript
function cambiar (persona) {
  persona.nombre = "Luis";
}

let persona = {"nombre":"Víctor","edad":42};
console.log("Antes de invocar");
console.log(persona.nombre);  // Saldrá Víctor

cambiar(persona);

console.log("Después de invocar");
console.log(persona.nombre); // Saldrá Luís
~~~

## Objeto Arguments




[Javascript]: {{site.url}}/javascript
