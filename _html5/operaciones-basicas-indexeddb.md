---
title: Operaciones Básicas con IndexedDB
permalink: /html5/operaciones-basicas-indexedDB/
---

Lo primero que vamos a ver en las operaciones básicas con **IndexedDB** es cómo podemos trabajar con la base de datos. Para ello el primer paso es crear la base de datos.

### Abrir una base de datos IndexedDB
Para poder abrir una base de datos **IndexedDB** utilizaremos el método `indexedDB.open()` sobre el objeto `window`.

~~~javascript
var request = window.indexedDB.open("nombre",version);
~~~

Al método `indexedDB.open()` le pasaremos dos parámetros. Por un lado una cadena con el **nombre de la base de datos** y por otro un numérico con la **versión** de la base de datos. El resultado será un `IDBRequest`.

De esta forma podemos abrir una base de datos llamada "MiBaseDeDatos" de la siguiente forma:

~~~javascript
var request = window.indexedDB.open("MiBaseDeDatos",1);
~~~

Como ya hemos visto que **IndexedDB** funciona de manera asíncrona tendremos tres eventos con la posible apertura de la base de datos: `error`, `success` y `upgradeneeded`.

En el caso de que la base de datos se abra de forma correcta se lanzará el evento `success`:

~~~javascript
var db;

request.onsuccess = function (event) {
  db = request.result;
  console.log('Base de Datos abierta correctamente');
};
~~~

En la propiedad `result` del objeto `IDBRequest` quedará la conexión a la base de datos.

Si la apertura falla se generará un evento `error` indicando que no se ha podido abrir la base de datos.

~~~javascript
request.onerror = function (event) {
  console.log('Error al abrir la base de datos');
};
~~~

El tercer evento que se puede lanzar es `upgradeneeded`. Este evento se lanza si la versión de la base de datos es superior a la versión que existe. Y lo que es más importante, **la primera vez que abrimos una base de datos**.

~~~javascript
var db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
}
~~~

En el evento recibido como parámetro encontramos un tipo `IDBRequest` dónde la propiedad `result` tendrá el acceso a la base de datos que acabamos de crear o actualizar.

### Crear un Object Store
Ya tenemos acceso a nuestra base de datos **IndexedDB** ahora vamos a crear un `IDBObjectStore` para almacenar todos nuestros registros.

Para poder crear un `IDBObjectStore` necesitamos darle un nombre e indicar cual será la clave del Object Store. Nos vamos a apoyar en el método `createObjectStore` de la base de datos, o lo que es lo mismo del objeto `IDBDatabase`.

La sintaxis del método `createObjectStore` es la siguiente:

~~~javascript
var objectStore = IDBDatabase.createObjectStore(name);
var objectStore = IDBDatabase.createObjectStore(name, options);
~~~

En el parámetro `options` se esperan una serie de atributos:

* **keyPath**, para indicar dónde se encuentra el índice dentro del objeto que insertamos en el Object Store. Este elemento lo indicamos mediante un path.
* **autoIncrement**, para indicar si queremos que la clave sea autoincremental. En ese caso le indicamos el valor de `true`.

De esta forma podríamos crear un Object Store que almacenase registros de *Personas* de la siguiente manera:

~~~javascript
var objectStore = db.createObjectStore('personas', { keyPath: 'id', autoIncrement:true });
~~~

Si utilizamos este código dentro de la apertura de la base de datos sería:

~~~javascript
var db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore;
  if (!db.objectStoreNames.contains('personas')) {
    objectStore = db.createObjectStore('personas', { keyPath: 'id' });
  }
}
~~~

Estamos asumiendo que vamos a insertar un objeto `Persona` con una estructura similar a la siguiente:

~~~javascript
{
  id: 1,
  nombre: 'Víctor',
  email: 'victor@gmail.com',
  edad: 41
}
~~~

### Crear un índice en IndexedDB
Una vez que hemos creado el Object Store pasaremos a crear los índices del mismo. Es decir, los campos de datos por los que queremos que se ordene el Object Store. Además estos campos de índice nos van a servir para realizar consultas de datos con filtros.

Sobre el objeto `IDBObjectStore` invocaremos al método `createIndex` el cual nos devolverá un objeto `IDBIndex`. La sintaxis del método `createIndex` será la siguiente:

~~~javascript
var myIDBIndex = objectStore.createIndex(indexName, keyPath);
var myIDBIndex = objectStore.createIndex(indexName, keyPath, objectParameters);
~~~

Los datos que necesitamos son `indexName` que es el nombre que le queremos dar al índice y `keyPath` que representa el path en el cual está la propiedad del objeto sobre el que indexemos.

El atributo `objectParameters` nos permite indicar algunas características del índice:

* **unique**, indicaremos `true` si queremos que sea un índice único y `false` si queremos que no sea único.
* **multiEntry**, si el índice es un array se creará una entrada única por cada uno de los elementos del índice en el caso que indiquemos el valor `true` y `false` creará una única entrada.
* **locale**, algunos navegadores soportan esta propiedad para indicar el idioma del índice. Pero de momento no está muy extendido.

En nuestro ejemplo vamos a crear dos índices, uno para el *nombre* y otro para el *email*. Además el primero no será único, mientras que el segundo sí.

~~~javascript
objectStore.createIndex('nombre', 'nombre', { unique: false });
objectStore.createIndex('email', 'email', { unique: true });
~~~~

Si revisamos toda la conexión a la base de datos **IndexedDB** tendremos lo siguiente:

~~~javascript
request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore;
  if (!db.objectStoreNames.contains('personas')) {
    objectStore = db.createObjectStore('personas', { keyPath: 'id' });
    objectStore.createIndex('nombre', 'nombre', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
  }
}
~~~

### Insertar datos en IndexedDB
Para insertar datos lo primero que necesitamos es tener una transacción, es decir un objeto `IDBTransaction`. La transacción nos la va a dar la base de datos utilizando el método `transaction`. La sintaxis del método `transaction` es la siguiente:

~~~javascript
var IDBTransaction = IDBDatabase.transaction(storeNames);
var IDBTransaction = IDBDatabase.transaction(storeNames, mode);
~~~

Lo primero que tenemos que identificar en el método `transaction` es el Object Store sobre el que vamos a realizar la transación. En este caso utilizamos el atributo `storeNames` para indicarlo. Y por otro lado tenemos el modo o `mode` en el cual realizamos la transacción.

Tenemos tres modos para poder crear una transacción en **IndexedDB**:

* **readonly**, para transacciones de solo lectura. Es el modo por defecto.
* **readwrite**, para transacciones de lectura y escritura.
* **readwriteflush**, este modo es experimental de *Firefox* para forzar la escritura del dato al disco.

Si queremos abrir una transacción sobre nuestro almacén de objetos de *Personas* vamos a realizar lo siguiente:

~~~javascript
var transaccion = db.transaction(['personas'], 'readwrite');
~~~

Lo siguiente que haremos es seleccionar el Object Store que vamos a utilizar en la transacción. Para ello utilizamos el método `objectStore` del objeto `IDBTransaction`.

~~~javascript
var IDBObjectStore = IDBTransaction.objectStoreNames(storeName);
~~~

Siguiendo nuestro ejemplo elegimos el Object Store de *Personas*:

~~~javascript
var request = db.transaction(['personas'], 'readwrite')
    .objectStore('personas');
~~~

Ahora ya solo nos queda insertar los datos. Así que sobre nuestro `IDBObjectStore` vamos a invocar el método `add`.

~~~javascript
var request = objectStore.add(value);
var request = objectStore.add(value, key);
~~~

El método `add` recibe el objeto que queremos incluir en nuestro almacén de objetos. Y si queremos, la clave que identificará al objeto insertado.

Así insertamos nuestro primer objeto en la base de datos.

~~~javascript
var request = db.transaction(['personas'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, nombre: 'Víctor', email: 'victor@gmail.com', edad: 41 });
~~~

Dado el comportamiento asíncrono de **IndexedDB** tendremos dos eventos que nos permitirán saber si se ha insertado de una forma correcta los datos o no. Estos son los eventos `success` y `error`. Así que deberemos de incluir manejadores para esto eventos

~~~javascript
request.onsuccess = function (event) {
  console.log('Los datos se han insertado correctamente');
};

request.onerror = function (event) {
  console.log('Se ha producido un error a la hora de insertar los datos');
}
~~~



### Borrar datos en IndexedDB

### Actualizar datos en IndexedDB




[APIWebStorage]: {{site.baseurl}}/html5/webstorage/
[IndexedDBPromise]: https://github.com/jakearchibald/idb
