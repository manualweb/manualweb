---
title: Historia del XML
date: 2023-02-09
last_modified_at: 2023-02-09
permalink: /xml/historia-del-xml/
excerpt: "En la historia del XML podemos ver cómo nace siendo una alternativa al SGML para definir un nuevo estándar XHTML, pasando por todas sus especificaciones, hasta el día de hoy."
tags: [sgml,xhtml,html,xml_namespaces,whatwg,xsl_fo,xml_signature,xml_encryption,invisible_xml,xslt,xlink,xpath,xinclude]
image:
  path: /img/covers/xml-cover.png
---

Profundicemos un poco por la historia del [XML](https://www.manualweb.net/xml/), desde sus orígenes ligados a [HTML](https://www.manualweb.net/html/) hasta su rápida evolución que desemboca en la creación de diversos estándares:


## Nacimiento del XML


La [W3C](https://w3.org/) estaba trabajando en la [definición del estándar HTML 4.01](https://manualweb.net/html/historia-html-estandar/#html-401) el cual se basaba en un esquema definido por **SGML (Standard Generalized Markup Language).** Si bien, los trabajos con este esquema generaban conflictos en la [definición del estándar HTML 4.01](https://manualweb.net/html/historia-html-estandar/#html-401) de tal manera que no se podía definir de una forma estricta un documento [HTML](https://www.manualweb.net/html/).


Es por ello que el 10 de febrero de 1998 se crea el lenguaje [XML 1.0](http://www.w3.org/TR/1998/REC-xml-19980210)  con el objetivo de tener un **lenguaje para poder compartir información entre dos computadoras mediante un esquema bien definido**, cerrado que diese como resultado documentos coherentes y de los que no hubiese lugar a duda de su estructura o dobles interpretaciones.


[XML](https://www.manualweb.net/xml/) nace como un sub-esquema del **SGML**.


## XML y XHTML


La [W3C (World Wide Web Consortium)](https://w3.org/)  intenta aplicar el estándar [XML](https://www.manualweb.net/xml/) a la definición de [HTML](https://www.manualweb.net/html/) mediante lo que se definió como [XHTML 1.0](http://www.w3.org/TR/xhtml1/) (eXtensible HyperText Markup Language). Es verdad que este documento recoge la definición de un lenguaje [HTML](https://www.manualweb.net/html/) bien estructurado, que no diese lugar a interpretaciones en la que se tuviese un **documento bien formado**. Pero la realidad era que la web estaba ya inundada de documentos [HTML](https://www.manualweb.net/html/) que no seguían ninguna estructura, y para lo navegadores de la época aplicar [XHTML 1.0](http://www.w3.org/TR/xhtml1/) hubiese y era realmente imposible o una proeza solo apta para titanes.


Los esfuerzos por crear e implantar [XHTML 1.0](http://www.w3.org/TR/xhtml1/) son infructuosos y se genera una escisión de la W3C en el [WHATWG](http://www.whatwg.org/) que acaba definiendo el estándar [HTML5](https://www.manualweb.net/html5/).


Existió, por parte de [W3C](https://w3.org/), de definir una evolución hacía el estándar XHTML 2.0 que no llegó a ver la luz como especificación de facto.


## XML Namespaces


La siguiente especificación que vio la luz alrededor de [XML](https://www.manualweb.net/xml/) fue [XML Namespaces](https://www.w3.org/TR/xml-names/) la cual buscaba el poder combinar diferentes definiciones de [XML](https://www.manualweb.net/xml/) en un mismo documento y evitando conflictos con elementos con el mismo nombre y diferente semántica. 


Por ejemplo permitía que tuviésemos en un mismo documento el elemento `titulo` que hiciese referencia al título del documento y el elemento `titulo` que hiciese referencia al título de un libro.


## XML 1.1


El 4 de febrero de 2004 se crea [XML 1.1](https://www.w3.org/TR/2006/REC-xml11-20060816/), el cual contiene una segunda revisión del 16 de agosto de 2006. Esta versión viene a añadir algunas capacidades adicionales sobre los encoding. Si bien no se llegó a extender mucho su uso, hubo bastante controversia e incluso no está recomendado usarla a no ser que se requieras de esas capacidades de encoding adicionales.


## Especificaciones alrededor de XML


El mundo del [XML](https://www.manualweb.net/xml/) siguió creciendo desde entonces y múltiples estándares han visto la luz. Así han ido apareciendo algunos como [XSLT (XML Transformations)](https://www.w3.org/TR/xsl11/) para transformar la estructura de un documento, [XSL-FO (XSL Formating Objects)](https://www.w3.org/TR/xsl/) para convertir el formato de los documentos [XML](https://www.manualweb.net/xml/), [XLink](https://www.w3.org/TR/xlink11/) y [XPath](https://www.w3.org/TR/2017/REC-xpath-31-20170321/) para describir las relaciones entre los documentos o [XInclude](https://www.w3.org/TR/xinclude/) para combinar fragmentos de diferentes documentos.


## XML y la Seguridad


Una vez que los documentos [XML](https://www.manualweb.net/xml/) empezaron a enviar información sensible por Internet se vio la necesidad de gestionar la seguridad de los mismos. Y de esta manera se desarrollaron especificaciones como [XML Encryption](https://www.w3.org/TR/xmlenc-core1/) para el cifrado de los datos y [XML Signature](https://www.w3.org/TR/xmldsig-core1/) para la firma de los documentos [XML](https://www.manualweb.net/xml/)


## XML en la actualidad


Con el paso del tiempo y la aparición de otro tipo de estructuras de definición como **JSON** o **YAML**. Estructuras más flexibles y sin tanta rigidez como tiene [XML](https://www.manualweb.net/xml/), aunque no tan completas, han hecho que el uso del lenguaje [XML](https://www.manualweb.net/xml/) haya bajado. Quizás llegando al final de la historia del [XML](https://www.manualweb.net/xml/).


A día de hoy, el [XML Core Working Group del W3C](https://www.w3.org/XML/Core/) es **cerrado en 2016**. Por lo que no se prevén más avances en lo que al core del lenguaje XML se refiere. Aunque es cierto que está bastante completo en lo que a su definición se refiere.


Y aunque la [W3C](https://www.w3.org/) ha parado la actividad alrededor de la definición del lenguaje [XML](https://www.manualweb.net/xml/) podemos encontrar sitios como [XML.com](http://xml.com/) en lo que podemos ver publicaciones alrededor del lenguaje [XML](https://www.manualweb.net/xml/), como evoluciones en los parsers, herramientas de transformación de [XML](https://www.manualweb.net/xml/) o definiciones más exotéricas como [Invisible XML](https://invisiblexml.org/) que busca tratar documentos que no son [XML](https://www.manualweb.net/xml/) como si fueran [XML](https://www.manualweb.net/xml/). Una especificación de 2022 promovida por el [Invisible Markup Community Group de W3C](https://www.w3.org/community/ixml/).

