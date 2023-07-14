---
title: Introducción al XML
permalink: /xml/introduccion-al-xml/
excerpt: "La introducción al XML explica las funcionalidades básicas de este lenguaje de etiquetado para definir elementos de información de propósito general."
tags: [xml,elemento,atributo,relaciones,xhtml,svg,mathml,xforms,orientado_objetos]
image:
  path: /img/covers/xml-cover.png
---

## ¿Qué es XML?


En esta introducción al [XML](https://www.manualweb.net/xml/) empezaremos por explicar qué es **XML o eXtended Markup Language**. Y es que [XML](https://www.manualweb.net/xml/) es un **lenguaje de etiquetado o marcado de información de propósito general**. Es decir, mediante sus elementos, atributos y relaciones podemos definir y etiquetar cualquier tipo de información.


Esto es diferente de otros lenguajes como puede ser [HTML](https://www.manualweb.net/html/) donde los elementos y el uso que se les debe de dar ya viene fijado por la propia especificación del lenguaje.


Mediante [XML](https://www.manualweb.net/xml/) podremos definir nuestros propios elementos y atributos, cómo se anidan y relacionan entre ellos. De esta manera, por ejemplo, podríamos definir un elemento llamado `persona` que sirviese para almacenar información de nombres y edades de personas.


Por ejemplo, el siguiente fragmento de código es un fragmento de código [XML](https://www.manualweb.net/xml/):


```xml
<?xml version="1.0" encoding="UTF-8"?>
<persona id="8">
  <nombre>Luis</nombre>
  <edad>3</edad>
</persona>
```


Cómo podemos comprobar en este fragmento hay una serie de elementos y atributos que hemos definido para representar una información básica de una persona. De esta manera vemos que la mayor potencia del lenguaje [XML](https://www.manualweb.net/xml/) es la capacidad de estructurar datos.


[XML](https://www.manualweb.net/xml/) nos ayuda a definir un esquema con los elementos, atributos y sus relaciones para poder validar el contenido de la información o bien nos permitirá definir información en formato [XML](https://www.manualweb.net/xml/), pero sin validarla. Si bien, esta explicación ya la revisaremos en posteriores capítulos.


## Características XML


Algunas de las ventajas de utilizar el lenguaje de marcas [XML](https://www.manualweb.net/xml/) son las siguientes:


### Facilita el Intercambio de Datos


Define un estándar que permite el **intercambio de información entre sistemas**, independientemente de la tecnología que estos tengan por detrás ya que XML da un **ámbito único de definición** para compartir la información.


### Separa la Información de su representación


Por un lado tenemos la **definición de cómo debe de ser la estructura de la información** en lo que respecta a sus elementos y relaciones entre ellos y la información que la contiene albergan. Mientras que por otro lado podemos **utilizar esta información para ser representada de múltiples formas**.


### Entendible por máquinas y humanos


El lenguaje [XML](https://www.manualweb.net/xml/) se estructura de una forma que al ver un fichero [XML](https://www.manualweb.net/xml/) se puede entender por máquinas que intercambian la información, pero de un vistazo, un humano puede entender la información y estructura del mismo.


### Es Extensible


Permite crear estructuras de datos que pueden ser extendidas y añadir nuevos elementos, atributos o relaciones sobre los documentos base.


## ¿Dónde se usa XML?


Como hemos visto en esta introducción al [XML](https://www.manualweb.net/xml/), el este lenguaje puede ser utilizado como lenguaje de definición de información por si solo. De hecho sirve como elemento de configuración de sistemas, como definición de la información de los mensajes que se intercambian los servicios definidos por el protocolo SOAP,


Pero también es la base de otros lenguajes de definición de elementos como pueden ser [XHTML](https://manualweb.net/html/historia-html-estandar/#xml-y-xhtml-10), MathML, [SVG](https://www.manualweb.net/svg/), XForms o RSS entre otros.

