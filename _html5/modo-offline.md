---
title: Modo Offline
permalink: /html5/modo-offline/
---

Aunque a los inicios todo agente de usuario que estuviese en Internet se suponía que iba a estar constantemente conectado a la red, el paso del tiempo nos ha demostrado que en ciertas circustancias el agente de usuario estará desconectado y por lo tanto en modo **offline**.

La idea es que aunque el agente de usuario esté **offline** consigamos darle una misma experiencia de usuario que en online o al menos que afecte lo menos posible. Por ejemplo, si el usuario está realizando acciones, estas pueden ser encoladas para ser tratadas posteriormente o podemos recurrir a elementos que estén almacenados en el cliente para poder dar una respuesta.

Es por ello que en [HTML5][HTML5] aparece la capacidad de detectar si el usuario está **online** u **offline** para gestionar las expectativas del mismo.

Así tenemos un API en [HTML5][HTML5] que nos indica cuando un usuario pasa a estar **offline** y cuando el usuario vuelve a estar **online**.

## Propiedad onLine
La propiedad que indica si el usuario está **online** u **offline** es `navigator.onLine` dónde devolverá `true` si el usuario está online y `false` si el usuario está offline.

Así que simplemente tendremos que consultar el valor de la propiedad:

~~~javascript
if (navigator.onLine) {
  console.log("El usuario está online");
}
 else
{
  console.log("El usuario está offline");
}
~~~

## Eventos Offline
Cómo el usuario puede cambiar de estado, es decir, en cualquier momento de tiempo y por múltiples circustancias el usuario puede pasar de estar **online** a estar **offline** y viceversa. Bien porque haya perdido la conexión, por que el usuario lo fuerce,...

Para estas situaciones en [HTML5][HTML5] disponemos de dos eventos sobre el elemento `window`. Estos son el evento `online` cuando el usuario pass a estar **online** y `offline` cuando el usuario pasa a estar **offline**.

Así que deberemos de controlar dichos eventos para poder gestionar de forma correcta el modo offline. Para ello nos valemos del método `addEventListener` y así gestionar dichos eventos.

~~~javascript
window.addEventListener("online", function(event){
  console.log(event.type);
  console.log("El usuario pasa a esta online");
},false);

window.addEventListener("offline", function(e){
  console.log(event.type);
  console.log("El usuario pasa a esta offline");
},false);
~~~

[HTML5]: http://www.manualweb.net/html5/
