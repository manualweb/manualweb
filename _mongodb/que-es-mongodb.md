---
title: ¿Qué es MongoDB?
permalink: /mongodb/que-es-mongodb/
---

Si tuviésemos que explicar qué es [MongoDB][TutorialMongoDB] podríamos decir que es una **base de datos opensource NOSQL basada en documentos** desarrollada por la gente de [10gen][MongoDBSite]. Aunque una vez que cogió auge la base de datos[MongoDB][TutorialMongoDB] pasaron a llamarse con el mismo nombre y ahora *la empresa y el producto se llaman [MongoDB][TutorialMongoDB]*. El nombre de [MongoDB][TutorialMongoDB] proviene de *"hu**mongo**us”*, que significa enorme en inglés. [MongoDB][TutorialMongoDB] es una base de datos NOSQL, opensource, escrita en C++, escalable y de alto rendimiento.

## MongoDB y los documentos

El elemento principal de [MongoDB][TutorialMongoDB] es como almacena la información. [MongoDB][TutorialMongoDB] almacena toda la información en **documentos JSON**.

~~~json
{
  web: "Manual Web",
  url: "http://www.manualweb.net",
  description: "Tutoriales sobre Programación",
  email: "contactar@manualweb.net",
  lenguajes: ["java","html5","javascript","mongodb"],
  social:
    {
      twitter: "manual_web",
      facebook: "ManualWeb"
    }
}
~~~

El almacenar la información en documentos JSON permite a [MongoDB][TutorialMongoDB] tener independencia del schema de almacenamiento, es decir, pueden existir más o menos campos en el documento dentro de una misma colección de documentos. Una de las cosas importantes de los documentos es que estos van tipados. Además los documentos nos permiten nuevas estructuras como arrays o subdocumentos que permitirán que de una sola consulta se recupere toda la información y evite así la necesidad de ejecutar consultas de tipo join.

## Principales características de MongoDB

Aunque en los siguientes capítulos iremos viendo en detalle todas las funcionalidades de [MongoDB][TutorialMongoDB], podríamos decir que las principales características de [MongoDB][TutorialMongoDB] son:

### Alto rendimiento

El alto rendimiento para la persistencia en [MongoDB][TutorialMongoDB] se basa en dos puntos: La posibilidad de tener documentos con la información anidada, evitando, de esta forma, un número elevado de operaciones de I/O. Y el soporte de índices y la posibilidad de crear índices sobre arrays y subdocumentos.

### Alta disponibilidad

[MongoDB][TutorialMongoDB] proporciona alta disponibilidad mediante la réplica automática conocida como *replica set*, la cual proporciona redundancia de datos y failover automático, es decir, la transferencia automática a un nuevo nodo cuando se encuentra un fallo en uno de los nodos.

### Escalado Automático

[MongoDB][TutorialMongoDB] nos ofrece un escalado horizontal. Para ello el *sistema de sharding* nos permite distribuir información por diferentes cluster de máquinas.

[MongoDBSite]: http://www.mongodb.org
[TutorialMongoDB]: {{site.baseurl}}/mongodb/
