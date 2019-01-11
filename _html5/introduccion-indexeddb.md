---
title: Introducción a IndexedDB
permalink: /html5/introduccion-indexedDB/
---

**IndexedDB** es un API de bajo nivel para poder almacenar datos estructurados en la parte del cliente. Estos datos pueden ser también ficheros o blobs. **IndexedDB** utiliza índices para poder realizar búsquedas de alto rendimiento.

Aunque existen otros mecanismos de almacenamiento en el cliente, como pueden ser las **Cookies** o la [**API WebStorage**][APIWebStorage] estos presentan unas limitaciones de tamaño, unos *4kb* en las **Cookies** y hasta los *10Mb* en la [**API WebStorage**][APIWebStorage]. Sin embargo la base de datos **IndexedDB** nos permite almacenar cantidades mayores de datos, llegando en algunas implementaciones a los *250Mb*.

## Características de IndexedDB
Las principales características que definen a IndexedDB son:

### Almacena pares clave/valor
**IndexedDB** es un almacén de objetos, es decir que podemos almacenar cualquier tipo de objeto dentro de la base de datos. Si bien cada objeto tiene asociada una **clave** que lo identificará de una forma única. A dicha **clave** va asociado el **valor** que es el objeto en sí.

### Es Asíncrona
Para no penalizar el rendimiento del cliente, la base de datos **IndexedDB** funciona de forma asíncrona. Esto nos permite almacenar grandes cantidades de datos sin que estemos penalizando a la respuesta de renderizado del navegador. Cuando veamos el API de **IndexedDB** veremos que las respuestas de sus métodos son asíncronas. Si bien podemos encontrar algunas [implementaciones de **IndexedDB** utilizando promesas][IndexedDBPromise].

### Soporta Transacciones
Las operaciones que realicemos sobre **IndexedDB** se realizan mediante transacciones (incluidas las lecturas). Es decir, podremos deshacer ciertas operaciones en el caso de que se produzca un fallo dentro de la transacción.

### Restricción de Dominio
Una base de datos **IndexedDB** solo pertenece a un dominio, es por ello que solo podremos acceder al contenido de la información que alberga cuando lo operemos desde el dominio al que corresponde. De esta manera mantenemos la seguridad de los datos almacenados.

### Gran Capacidad de Almacenamiento
Ya hemos visto que **IndexedDB** viene a paliar los límites de almacenamiento que aparecen en las **Cookies** o en la [**API WebStorage**][APIWebStorage], llegando a poder almacenar hasta *250Mb*.

### Soporte Almacenamiento Binario
Dentro de **IndexedDB** podemos almacenar contenido binario como un ArrayBuffer de objetos u objetos Blob.

## Conceptos Básicos
Cuando vayamos a manejar una base de datos **IndexedDB** debemos de manejar una serie de conceptos u elementos básicos de la misma:

* Base de Datos: `IDBDatabase`
* Almacén de Objetos: `IDBObjectStore`
* Índices: `IDBIndex`
* Transacciones: `IDBTransaction`
* Consultas: `IDBRequest`
* Punteros o Cursores: `IDBCursor`
* Rango de Clave: `IDBKeyRange`

### Base de Datos: IDBDatabase
La base de datos se representa mediante un objeto `IDBDatabase`. Por cada dominio podremos crear tantas bases de datos como queramos.

La base de datos se identifica por un *nombre de base de datos* y una *versión*. Solo puede existir una única *versión* a la vez. Es por ello que si queremos cambiar de *versión* deberemos de realizar una migración de los datos de la versión actual.

### Almacén de Objetos: IDBObjectStore
El almacén de objetos, representado por el objeto **IDBObjectStore** es el conjunto de datos relativos a un concepto. Sería similar a una tabla dentro de una base de datos relacional.

Dentro del almacén de objetos encontraremos los datos. Cada uno de los datos es un registro. Lo que caracteriza a cada registro es que tiene una clave asociada.

### Índices: IDBIndex
Los índices nos permiten optimizar las búsquedas dentro de **IndexedDB**. La base de datos se mantendrá ordenada por los índices que definamos. El objeto `IDBIndex` nos ayuda a definir los índices.

Es importante definir los índices mediante `IDBIndex` ya que será necesario para poder realizar búsquedas con filtros.

### Transacciones: IDBTransaction
Como hemos comentado el acceso de lectura y escritura sobre la base de datos se hace mediante transacciones. El objeto que representa una transacción es `IDBTransaction`. La transacción nos ofrecerá métodos `error`, `abort` y `complete` para poder gestionar el resultado de la transacción.

### Consultas: IDBRequest
Las consultas que realicemos sobre la base de datos **IndexedDB** las vamos a gestionar mediante un objeto `IDBRequest`. Tendremos un evento `onsuccess` que nos avisará cuando la consulta haya sido satisfactoria.

### Punteros o Cursores: IDBCursor
En el caso de que la consulta sobre la base de datos **IndexedDB** devuelva un conjunto múltiples de datos deberemos de manejar un cursor (o puntero) para poder recorrer el conjunto de objetos devueltos como respuesta. El objeto que nos ayuda a manejar los cursores es `IDBCursor`.

### Rango de Clave: IDBKeyRange
Si queremos gestionar un subconjuto de los elementos almacenados deberemos de apoyarnos en los índices, en concreto en el elemento `IDBKeyRange`. El elemento `IDBKeyRange` nos ayuda a establecer filtros sobre los datos para que el contenido devuelto solo corresponda a un rango.


[APIWebStorage]: {{site.baseurl}}/html5/webstorage/
[IndexedDBPromise]: https://github.com/jakearchibald/idb
