---
title: Consultas con IndexedDB
permalink: /html5/consultas-indexedDB/
---




### Consultar datos en en IndexedDB
Una vez que tenemos datos insertados en nuestra base de datos **IndexedDB** veamos qué tenemos que hacer para poder consultar datos de nuestros almacenes de objetos.

Lo primero que vamos a necesitar es una transacción para enmarcar en ella la consulta y así poder manejar un objeto `IDBObjectStore`

~~~javascript
var transaction = db.transaction(['person']);
var objectStore = transaction.objectStore('person');
~~~

El método que nos sirve para realizar una consulta de datos es el método `get`

~~~javascript
var request = objectStore.get(key);
~~~

### Abrir un cursor


### Contar registros


### Consultas con filtro en IndexedDB







[APIWebStorage]: {{site.baseurl}}/html5/webstorage/
[IndexedDBPromise]: https://github.com/jakearchibald/idb
