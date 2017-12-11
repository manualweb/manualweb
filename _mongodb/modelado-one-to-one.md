---
title: Modelado One-to-One
permalink: /mongodb/modelado-one-to-one-mongodb/
redirect_from: /mongodb/modelado-de-datos-en-mongodb/
---

En este caso vamos a realizar un modelado one-to-one en [MongoDB][TutorialMongoDB], para ello vamos a utilizar las entidades Persona y Domicilio. Una persona tendrá asociado la dirección de un domicilio. Estas entidades las modelaríamos de la siguiente forma:

![Modelado One-to-One][OneToOne]{:height="60px" width="300px" class="img-responsive"}

Los documentos JSON de ejemplo que representan a estas personas son, para el caso de la persona:

~~~json
{
  nombre: "Víctor Cuervo",
  edad: 38
}
~~~

Y para el caso del domicilio es:

~~~json
{
  calle: "Alcala, 15",
  codigo: 28022,
  ciudad: "Madrid"
}
~~~

Para resolver el modelado one-to-one tenemos dos estrategia. La primera será la de embedding, es decir, incrustar la entidad Domicilio dentro de la entidad Persona. La segunda será la de linking, en este caso se utilizará una foreing key para mantener las relaciones.

## One-to-One: Embedding

En este primer caso insertamos el domicilio en la colección de personas. Será un subdocumento dentro de la persona.

~~~json
{
  nombre: "Víctor Cuervo",
  edad: 38,
  dirección: {
    calle: "Alcala, 15",
    codigo: 28022,
    ciudad: "Madrid"
  }
}
~~~

Lo bueno de esta estrategia es que para recuperar el domicilio de una persona simplemente tendremos que realizar una única operación de consulta.

~~~javascript
db.personas.find({nombre:"Víctor Cuervo"},{direccion:1})
~~~

## One-to-One: Linking

En este caso vamos a crear una clave dentro de la colección de personas y posteriormente la utilizaremos como foreign key dentro de la colección de domicilios. El documento de la persona tendrá un id:

~~~json
{
  _id: 1,
  nombre: "Víctor Cuervo",
  edad: 38
}
~~~

Y ese id será utilizado dentro del documento del domicilio:

~~~json
{
  userid: 1,
  calle: "Alcala, 15",
  codigo: 28022,
  ciudad: "Madrid"
}
~~~

Para recuperar la información tendremos que realizar dos consultas. En la primera recuperaremos el id del usuario y con dicho id tendremos que acceder a la segunda colección a recuperar la dirección

~~~javascript
var id = db.personas.find({nombre:"Víctor Cuervo"},{_id:1})
db.domicilios.find({username:id})
~~~

El modelo de linking sería el más parecido a los modelo ER. Si bien **es preferible aplicar una estrategia de embedding para el modelado de relaciones One-to-One en [MongoDB][1]**.

 [TutorialMongoDB]: {{site.baseurl}}/mongodb/
 [OneToOne]: {{site.baseurl}}/mongodb/img/one-to-one.png
