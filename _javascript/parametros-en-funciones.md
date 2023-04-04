---
title: Parámetros en funciones
permalink: /javascript/parametros-en-funciones/
excerpt: "Los parámetros en funciones Javascript son los valores que se pasan para invocar la función. Sobre ellos podemos crear parámetros opcionales, parámetros resto o bien acceder al listado completo de los parámetros."
tags: [parámetros,parámetros_opcionales,parámetros_resto,arguments]
image:
  path: /img/covers/javascript-cover.jpg
---

## 


Cuando trabajamos con funciones [Javascript](https://www.manualweb.net/javascript/) es importante saber que los **parámetros de tipo de datos primitivos** que recibe la función se **reciben por valor**. Esto quiere decir que si modificamos el valor de uno de estos argumentos dentro de la función, **este no se verá reflejado en la variable de origen**.


Esto lo puedes comprobar mediante el siguiente código:


```javascript
function sumar (numero1, numero2) {
  // Ignoramos siempre el primer número
  numero1 = 0;
  return numero1 + numero2;
}

let n1 = 2;
let n2 = 3;

console.log(sumar(2,3));
console.log(n1);
```


Pero, **si pasamos un objeto a una función**, este sí que podrá verse modificado su contenido. Lo puedes comprobar con el siguiente código:


```javascript
function cambiar (persona) {
  persona.nombre = "Luis";
}

let persona = {
  "nombre":"Víctor",
  "edad":42
};

console.log("Antes de invocar");
console.log(persona.nombre);  // Saldrá Víctor

cambiar(persona);
console.log("Después de invocar");
console.log(persona.nombre); // Saldrá Luís
```


## Parámetros Opcionales


Una de las cosas que tenemos que sabes es que al llamar a una función no es necesario pasarle todos los parámetros que tiene en su definición, ya que, **todos por defecto son opcionales**. En el caso de que **un parámetro no tenga un valor de invocación** aparecerá con un valor de `undefined`.


Por lo que **los parámetros opcionales tendremos que controlarlos en el código de nuestra función**:


```javascript
function suma (a,b){
	if (a == undefined) a=0;
  if (b == undefined) b=0;

  return a+b;
}

let n1=2;
console.log(suma(n1));
```


## Parámetros por defecto


A partir de [ECMA 2015](https://manualweb.net/javascript/historia-de-javascript/#madurez-javascript) podemos controlar los parámetros opcionales mediante **parámetros por defecto**. La idea es que en este caso el parámetro tendrá asignado un valor por defecto en el caso de que el parámetro no llegue.


Lo que haremos será dar un valor al parámetro en la definición de la función. La signatura en este caso sería la siguiente:


```javascript
function nombre_funcion (argumento = valor_por_defecto) {
  sentencias;
  return valor_retorno;
}
```


Y si lo aplicamos a nuestra función de suma lo codificaremos de la siguiente forma:


```javascript
function suma (a=0,b=0){
  return a+b;
}

let n1=2;
console.log(suma(n1));
```


## Parámetro Resto


Otra opción para gestionar los parámetros es utilizar el **parámetro resto**. Esto nos permite el poder **definir una función con un conjunto de parámetros fijos y un conjunto de parámetros variables**, lo que denominaríamos resto.


En este caso la sintaxis de la función sería la siguiente:


```javascript
function nombre_funcion (argumento, ...resto) {
  sentencias;
  return valor_retorno;
}
```


Vemos que el argumento resto va con el **operador spread** que es representado por los tres puntos `…` más el nombre de la variable.


Lo que podremos hacer en el cuerpo de la función es acceder de forma iterativa sobre dicha variable.


Por ejemplo, podríamos crear una operación que preguntase por el tipo de operación que quieres hacer con un número fijo y el resto de los números pasados de forma variable como respuesta. Sería algo así:


```javascript
function operar(operacion,valor_inicial, ...args){
    let valor = valor_inicial;

    switch (operacion) {
        case "suma":
            for (let x=0;x<args.length;x++)
                valor += args[x];
            break;
        case "resta":
            for (let x=0;x<args.length;x++)
                valor -= args[x];
            break;
        case "multiplicacion":
            for (let x=0;x<args.length;x++)
                valor *= args[x];
            break;
        case "division":
            for (let x=0;x<args.length;x++)
                valor /= args[x];
            break;

    }
    
    return valor;
}

console.log(operar("suma",5,2));
console.log(operar("resta",5,2,3));
console.log(operar("multiplicacion",5,2,4,5));
console.log(operar("division",10,5));
```


## Función Arguments


Otro elemento que tenemos que conocer para gestionar los parámetros de una función es la función `arguments`. Esta función **contiene todos los parámetros con los que se ha invocado a la función**, desde el primero al último. Por lo que podríamos decir que es un elemento iterable.


> La función arguments contiene todos los parámetros que se le pasan a la función, mientras que el parámetro resto solo tiene la colección de los parámetros variables.


De esta manera la función puede iterar por la colección `arguments` para ver qué valores se le han pasado a la función.


Para acceder a un elemento en concreto de `arguments` escribiremos lo siguiente:


```javascript
arguments[x];
```


Dónde x es la posición, empezando por el valor 0, que ocupa el parámetro en la invocación de la función.


Mediante la función `arguments` podríamos crear una función que sumase todos los números que le lleguen independiente del números que le indiquemos. El código quedaría como se ve a continuación:


```javascript
function sumar(){
    let suma = 0;
    for (let x=0;x<arguments.length;x++)
        suma += arguments[x];

    return suma;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4,5));
```

