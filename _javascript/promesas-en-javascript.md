---
title: Promesas en Javascript
date: 2024-01-25
last_modified_at: 2024-01-26
permalink: /javascript/promesas-en-javascript/
excerpt: "Las promesas en Javascript son un tipo de objeto que representa la terminación o el fracaso eventual de una operación asíncrona."
tags: [promesas,asíncrono]
image:
  path: /img/covers/javascript-cover.jpg
---

## ¿Qué son las promesas en Javascript?


Las promesas en [Javascript](https://www.manualweb.net/javascript/) son un tipo de objeto sofisticado y poderoso que **representa la terminación o el fracaso eventual de una operación asíncrona**.


Este concepto es crucial en el mundo del desarrollo de [Javascript](https://www.manualweb.net/javascript/), especialmente cuando se trata de **operaciones asíncronas** que tardan un tiempo en completarse, como puedes ser el caso de la lectura de archivos o las solicitudes de red.


Las promesas **nos aportan una estructura y una organización** muy necesarias, permitiendo a los desarrolladores manejar estas operaciones asíncronas de una manera mucho más intuitiva, fácil de entender y manejable.


Lo hacen **proporcionando una forma sistemática de adjuntar callbacks para el éxito o el fracaso de las operaciones asíncronas**, mejorando así la legibilidad y la mantenibilidad del código.


## Estados de una Promesa


Es esencial que comprendamos los diferentes estados por los que puede pasar una Promesa cuando tratamos de gestionarla en el desarrollo de software. Estos estados son una parte fundamental del ciclo de vida de una Promesa y pueden influir significativamente en cómo se maneja la Promesa en el código. Los estados por los que puede pasar una Promesa son los siguientes:

- **Pending (pendiente),** este es el estado inicial de una Promesa. En este estado, la Promesa aún no se ha resuelto ni rechazado. Esencialmente, la tarea que la Promesa representa todavía está en curso.
- **Fullfilled (cumplida),** este es el estado que indica que la Promesa se ha resuelto con éxito. En otras palabras, la tarea que la Promesa representaba se ha completado de manera satisfactoria.
- **Rejected (rechazada),** este estado indica que ha ocurrido un error en la tarea que la Promesa representaba. En este caso, la Promesa se ha rechazado debido a este error.

## Definir una Promesa


Para definir una promesa simplemente deberemos de crear un nuevo objeto de tipo [`Promise`](https://w3api.com/Javascript/Promise/).


Una promesa en Javascript se define utilizando la palabra clave `new` seguida de la clase [`Promise`](https://w3api.com/Javascript/Promise/). La clase [`Promise`](https://w3api.com/Javascript/Promise/) acepta una función como argumento, que a su vez acepta dos parámetros: [`resolve`](https://w3api.com/Javascript/Promise/resolve/) y [`reject`](https://w3api.com/Javascript/Promise/reject).


```javascript
const promesa = new Promise((resolve,reject))
```


Estos parámetros son funciones que se invocan para indicar el éxito o el fracaso de la operación asíncrona.


De esta manera podríamos definir la siguiente promesa:


```javascript
let promesa = new Promise((resolve, reject) => {
    let numero = Math.floor(Math.random()*6+1);
    if (numero == 3) {
        resolve({"mensaje":"Número Correcto","numero":numero});
    } else {
        reject({"mensaje":"Número Incorrecto","numero":numero});
    }
});
```


En este ejemplo, la promesa simula el lanzamiento de un dado y nos devolverá una condición correcta mediante [`resolve`](https://w3api.com/Javascript/Promise/resolve/) si el dado ha sacado un 3 y si no nos devolverá una condición errónea mediante [`reject`](https://w3api.com/Javascript/Promise/reject).


## ¿Cómo se consume una promesa en Javascript?


Una vez que ya sabemos definir una promesa mediante el objeto [`Promise`](https://w3api.com/Javascript/Promise/) vamos a ver cómo se consume. Para ello tenemos que saber que existen tres métodos principales para su gestión: [`.then()`](https://w3api.com/Javascript/Promise/then) que nos permite indicar una función para el éxito y otra para el fracaso de la promesa, [`.catch()`](https://w3api.com/Javascript/Promise/catch) que nos permite gestionar un error en la ejecución de la operación de la promesa y [`.finally()`](https://w3api.com/Javascript/Promise/finally) que será el último método en ejecutarse y que nos permitirá realizar gestiones de cierre o eliminación de los recursos en la operación.


Pero vamos a ver estos métodos un poco más en detalle:


### .then()


El método [`.then()`](https://w3api.com/Javascript/Promise/then) se encadena a la promesa y toma dos argumentos: una función de devolución de l**lamada para el éxito** y otra para **el fracaso de la promesa**. Es decir, la función de devolución de llamada de éxito se ejecuta cuando se resuelve la promesa, mientras que la de fracaso se ejecuta cuando se rechaza.


La sintaxis del método [`.then()`](https://w3api.com/Javascript/Promise/then)


```javascript
p.then(onFulfilled[, onRejected]);
p.then(value => { // fulfillment }, reason => { // rejection });
```


De esta manera podemos utilizar el método [`.then()`](https://w3api.com/Javascript/Promise/then) dentro de nuestro ejemplo de promesa anterior de la siguiente forma para gestionar una situación de cumplimiento:


```javascript
promesa.then(valor => {console.log(valor.mensaje)});
```


O bien mediante el código:


```javascript
promesa.then(valor => {console.log(valor.mensaje)},
             rechazo => {console.log(rechazo.mensaje)});
```


Para gestionar tanto la situación de cumplimiento como la situación de rechazo.


### .catch()


El método [`.catch()`](https://w3api.com/Javascript/Promise/catch/) se utiliza para manejar cualquier error que pueda ocurrir durante la ejecución de la operación asíncrona. Es similar al segundo argumento del método [`.then()`](https://w3api.com/Javascript/Promise/then), pero tiene la ventaja de poder manejar errores de varias promesas en una cadena de promesas.


La sintaxis del método [`.catch()`](https://w3api.com/Javascript/Promise/catch/) es la siguiente:


```javascript
p.catch(onRejected); 
p.catch(function(reason) { // rejection });
```


Si aplicamos el método [`.catch()`](https://w3api.com/Javascript/Promise/catch/) en la promesa que habíamos definido al principio tendremos lo siguiente:


```javascript
promesa.catch(valor => {console.log(valor.mensaje + " " + valor.numero)});
```


### .finally()


Por último, [`.finally()`](https://w3api.com/Javascript/Promise/finally/) es un método que se ejecuta siempre, independientemente de si la promesa se resolvió o se rechazó. Esto es útil para limpiar o finalizar cualquier recurso que se haya utilizado durante la operación asíncrona.


La sintaxis del método [`.finally()`](https://w3api.com/Javascript/Promise/finally/) es la siguiente:


```javascript
p.finally(onFinally);
p.finally(function() { // settled (fulfilled or rejected) });
```


En nuestro código no es que tengamos que liberar muchos recursos, pero si que podemos indicar que se ha terminado de procesar la promesa.


```javascript
promesa.finally(()=>console.log("Fin ejecución de la promesa"));
```

