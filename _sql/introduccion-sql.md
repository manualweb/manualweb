---
title: Introducción SQL
permalink: /sql/introduccion-sql/
excerpt: "En esta introducción SQL vamos a conocer un poco más qué es SQL (Structured Query Language) y como usarlo con nuestras bases de datos."
tags: [sql,ansi,ibm,oracle,mariadb,postgresql,mysql,iso,ansi-sql,ksql,base de datos,dbms]
image:
  path: /img/covers/sql-cover.jpg
---

En esta **introducción SQL** vamos a conocer un poco más **qué es SQL o Structured Query Language**. O en español Lenguaje de Consulta Estructurada. Y es que SQL es el lenguaje que nos sirve para poder acceder a datos estructurados que se almacenen en un **modelo de datos E/R (Entidad/Relación)** dentro de algunos sistemas de gestión de bases de datos (Oracle, SQL Server, MySQL, PostgreSQL,…).


Por lo tanto, mediante SQL podremos crear el modelo de datos con sus tablas y dependencias, realizar operaciones sobre el modelo como consultar, insertar, actualizar o borrar datos de las tablas que conformen el modelo de datos. Pero también podremos establecer permisos de acceso a la información o crear marcos transaccionales para confirmar que la información insertada o modificada ha sido correcta en todo el modelo.


Así cuando ves una sentencia de código que consulta información de una base de datos del estilo:


```sql
SELECT titulo,autor FROM libros WHERE editorial = "Alfaguara"
```


Esta es una sentencia SQL o Structured Querey Language. En concreto, en este caso es una sentencia de consulta de datos. Vemos que, en cierta medida, es fácil de leer por un humano ya que estamos preguntando por títulos y autores de una tabla de libros, dónde la editorial del libro sea “Alfaguara”.


Aunque SQL lo podríamos definir como un **lenguaje declarativo** ya que las operaciones son un conjunto de reglas a realizar, en algunos casos se puede ver como l**enguaje procedimental** ya que se ejecutan un conjunto se sentencias a modo de programa.


## Inicios del SQL


Como bien hemos comentado SQL o Structured Query Language nos sirve para gestionar modelos Entidad/Relación (E/R). Estos modelos son los que nos ayudan a representar modelos de datos dentro de las bases de datos relacionales.


El modelo relacional fue desarrollado por [el científico Edgar Frank Codd](https://es.wikipedia.org/wiki/Edgar_Frank_Codd) en 1970 dentro de los Laboratorios de Investigación de IBM en San José y definido en el documento [_“A Relational Model of Data for Large Shared Data Banks”_](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf).


Este documento es adoptado por las bases de datos de **IBM** y **Oracle** dando lugar a las primeras versiones comerciales. Así **IBM** genera las implementaciones **SEQUEL (Structured English Query Language)** del lenguaje **System R** como Sistema Gestor de Bases de Datos en 1977 y **Oracle** con la primera implementación comercial de su base de datos en 1979.


SQL paso a ser estandarizado por el [Instituto Nacional Estadounidense de Estándares (ANSI)](https://ansi.org/) en 1986 creando lo que se conoce como **SQL-86, SQL-1 o ANSI SQL**. Y en 1987 por la [Organización Internacional de Normalización (ISO)](https://www.iso.org/home.html).


## Bases de Datos y Sistemas Gestores de Bases de Datos


Cuando nos enfrentamos al uso del SQL tenemos que ser conocedores de dos términos. Por un lado tenemos que conocer qué es un **sistema gestor de base de datos** y en segundo lugar deberemos de conocer qué es una **base de datos**.


### ¿Qué es un sistema gestor de bases de datos?


Un Data Base Management System (DBMS) o en español Sistemas de Gestión de Bases de Datos (SGBD) es aquel software que se encarga de gestionar múltiples bases de datos y por lo tanto el acceso y operación sobre ellas.


Existen múltiples Sistemas de Gestión de Bases de Datos. Algunos de los más famosos son: Oracle, MySQL, PostgreSQL, SQLServer, MariaDB,..


### ¿Qué es una base de datos?


Una base de datos es un conjunto de almacenes de datos que son controlados por un Sistema de Gestión de Bases de Datos.


Los datos de una base de datos se organizan en tablas, las cuales pueden vivir de forma separada o tener datos relacionados entre ellas.


Cada base de datos se gestiona de manera independiente dentro del Sistema de Gestión de Bases de Datos


## ¿Dónde utilizar SQL?


La aplicabilidad del SQL abarca múltiples escenarios. Podríamos decir que en cualquier sitio dónde queramos acceder a información de modelos E/R nos encontraremos con el uso de SQL. Es complicado que estemos desarrollando un desarrollo de software y no nos encontremos con alguna sentencia en SQL.


Así, podemos encontrar SQL en los siguientes casos:

- Aplicaciones web, móvil o de escritorio que necesite manejar datos. Aunque lo más normal sea el utilizar el SQL dentro de las tecnologías backend, también podremos utilizarlo en algunas tecnologías frontend.
- Realización de procesos batch para poder agregar, enriquecer o extraer información de modelos de datos operativos.
- Para la construcción de cuadros de mando que muestren información de algún sistema gestor de bases de datos.
- Existen adaptaciones, como KSQL, que permiten realizar consultas SQL sobre topic. de colas Kafka.

Una vez vista esta breve **introducción SQL** vamos a ponernos manos a la obra para poder empezar a escribir nuestras primeras operaciones en SQL.

