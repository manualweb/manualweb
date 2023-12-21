---
title: Closures Javascript
permalink: /javascript/closures-javascript/
excerpt: "Los closures javascript nos permiten crear funciones con un contexto de datos asociados que podemos utilizar a lo largo de nuestro programa."
tags: [closures,funciones_anidadas]
image:
  path: /img/covers/javascript-cover.jpg
---

Ya hemos visto [cómo definir funciones](https://manualweb.net/javascript/funciones-javascript/) o declarar [expresiones de función](https://manualweb.net/javascript/expresiones-de-funcion/) para poder pasar las funciones como parámetros de otras funciones. Ahora vamos a ver qué es el concepto **closures** [**Javascript**](https://www.manualweb.net/javascript/) o cierres en [Javascript](https://www.manualweb.net/javascript/).


## Funciones anidadas


Antes de entra en detalle sobre los closures [Javascript](https://www.manualweb.net/javascript/) **l**o primero que tenemos que saber es que **las funciones en** [**Javascript**](https://www.manualweb.net/javascript/) **se pueden anidar**. Es decir, podemos definir una función dentro de otra función.


```javascript
function exterior(parametros) {
  function interior(parametros) {
     sentencias;
     return interior;
   }
   return exterior;
}

exterior(parametros);
```


En esta estructura tenemos una función interna que por un lado **puede acceder a la información que tiene la función exterior.** De forma externa solo podemos invocar a la función exterior, pero nunca a la interior.


Por ejemplo, si queremos definir una función que sume dos números elevados al cuadrado podríamos tener el siguiente código:


```javascript
function addSquare(a,b) {
    function square (x) {
        return x*x;
    }
    return square(a)+square(b);
}

console.log(addSquare(2,3)); // 13
console.log(square(2));      // No se puede invocar
```


Como podemos ver la función externa `addSquare` tiene una función interna que se llama `square` que es invocada y utilizada para devolver un valor. Además, mediante el código, vemos que la función `square` no puede ser invocada de forma externa.


## Closures Javascript


En esta anidación de funciones los closures [Javascript](https://www.manualweb.net/javascript/) se producen **cuando la función retorna una función y el contexto asociado a dicha función**.


Por ejemplo vamos a definir una función anidada la cual contenga en un primer nivel la información de la persona que queremos saludar y que anide una función que realice el saludo a dicho nombre. Esta función va a devolver tanto **la función que saluda**, como **el contexto asociado**, es decir, la variable que contiene el nombre.


Definiremos el closure [Javascript](https://www.manualweb.net/javascript/) de la siguiente forma:


```javascript
function saludo() {
    let texto = 'Buenos días';
    function saludoDia(){
        console.log(texto);
    }
    return saludoDia;  
}

let saludar = saludo();
saludar();  // Buenos días
```


Podemos apreciar que **la función interna tiene acceso a los valores declarados en la función externa**, los cuales se retornan y permanecen creados mientras exista la función.


Los contextos asociados se pueden entender mejor si modificamos la función externa para poder pasarle el mensaje de saludo y la interna para pasarle el nombre de la persona a saludar, quedando de la siguiente manera:


```javascript
function saludo(mensaje) {    
    function saludoNombre(nombre){
        console.log(`${mensaje}, ${nombre}`);
    }
    return saludoNombre; 
}
```


Podemos crear diferentes contextos con el mensaje del saludo de la siguiente manera:


```javascript
let saludarTarde = saludo("Buenas tardes");
let saludarNoche = saludo("Buenas noches");
let nombre="Víctor";

saludarTarde(nombre);  // Buenas tardes, Víctor
saludarNoche(nombre);  // Buenas noches, Víctor
```


El contexto demarcado por la variable `saludo` perdura durante toda la función.


Vemos que **la función es la misma, pero con contextos diferentes marcados por el parámetro de la función externa**. Es aquí dónde tenemos nuestros closures [Javascript](https://www.manualweb.net/javascript/).


Además podríamos invocar a la función pasándole tanto el parámetro externo como el parámetro interno.


```javascript
saludo("Buenos días")("Luis");
```

