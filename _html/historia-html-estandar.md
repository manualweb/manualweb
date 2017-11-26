---
title: Historia del HTML&colon; El Estándar
permalink: /html/historia-html-estandar/
---

## HTML 4.01
Después de años de lucha entre los fabricantes la W3C intentaba poner un poco de orden con las versiones de HTML 4 y [HTML 4.01][HTML40] en los años 1998 y 1999 respectivamente.

Por el momento la especificación [HTML 4.01][HTML40] (24 de diciembre de 1999) es la más longeva del estándar.

En [HTML 4.01][HTML40] la W3C empieza con la separación de la estructura del documento con la de la representación visual. Así crea un lenguaje paralelo al [HTML 4.01][HTML40] llamado [CSS][ManualCSS].

Los elementos nuevos que aparecen en [HTML 4.01][HTML40] son las hojas de estilo ([CSS][ManualCSS]), los objetos (para poder insertar elementos externos como vídeo y música) y los frameset para dividir la pantalla en partes.

Aunque [HTML 4.01][HTML40] era un lenguaje que definía de forma clara el estándar [HTML][ManualHTML] y lo consensuaba entre los diferentes navegadores web, todavía dejaba abierta la posibilidad de interpretación de la estructura. Esta interpretación venía derivada de que la base del [HTML][ManualHTML] seguía siendo el esquema de SGML.

## XML y XHTML 1.0

Debido a la falta de coherencia en la definición de los esquemas derivados del SGML, la W3C decide definir un nuevo subesquema de SGML denominado [XML][ManualXML]. Este esquema sería un esquema bien definido y cerrado, lo cual podría proporcionarnos documentos coherentes y sin posibilidad de dobles interpretaciones.

El lenguaje [XML 1.0][XML1] es creado el 10 de febrero de 1998, principalmente para la compartición de datos entre computadoras. Si bien, la W3C ve al XML como una posible solución a sus problemas de interpretación del [HTML 4.01][HTML40] creando el lenguaje [XHTML 1.0][XHTML1] (eXtensible HyperText Markup Language).

[XHTML 1.0][XHTML1] viene a ser los mismo que [HTML 4.01][HTML40] pero con una definición de documento basada sobre [XML][ManualXML] en vez de sobre SGML.

Así se dictan una serie de normas de las cuales la principal es que el documento [XHTML 1.0][XHTML1] tiene que ser un **documento bien formado.** Para ello se establecen normas como que todo elemento que tenga una etiqueta de inicio debe de tener obligatoriamente una etiqueta de fin, que los nombres de los elementos y de los atributos deben de ir en minúsculas, no podrán existir atributos que vayan sin valor,...

La definición de [XHTML 1.0][XHTML1] pasa a ser bastante estricta para el lenguaje [HTML][ManualHTML].

## HTML5

Una vez publicado [XHTML 1.0][XHTML1] los esfuerzos de la W3C se dirigen a la creación de XHTML 2.0 como evolución del lenguaje.

Nuevamente la [W3C][W3C] se mete en un trabajo teórico, lo que hace que algunos “disidentes” (oportunistas para otros), como Ian Hickson,  monten un grupo paralelo conocido como [WHATWG][WhatWG] (Web Hypertext Application Technology Working Group) que empieza a trabajar en [HTML5][HTML5] el 4 junio de 2004.

[HTML5][HTML5] empieza su definición apoyándose en dos puntos. Por un lado la compatibilidad hacía atrás de todo lo que hay creado y por otro la capacidad de absorber todas las funcionalidades que los nuevos fabricantes de la web habían ido construyendo, véase Google, Apple u Opera.

Además [WHATWG][WhatWG] siempre ha acusado a la [W3C][W3C] de tener unos procesos de estandarización muy largos y no alineados a las necesidades del mercado.

Entre las nuevas funcionalidades se encuentran la simplicidad para reproducir audio y vídeo, el disponer de un lienzo de dibujo denominado Canvas,.... Además alrededor de [HTML5][HTML5] nacen una gran cantidad de especificaciones para la mejora de las Webapps como son Websockets, Geolocalización, Webstorage,..

La [W3C][W3C], en 2007, decide aparcar el trabajo realizado con XHTML 2.0 y empezar a trabajar con [HTML5][HTML5]. Si bien el grupo [WHATWG][WhatWG] sigue con su trabajo y estudio sobre diferentes API, los cuales irán cayendo en el estándar.

[La especificación de HTML5][HTML5_2014] es publicada oficialmente el 28 de octubre de 2014. Actualmente el [HTML Working Group][HTMWorkingGroup] está trabajando en [el borrador de HTML 5.1][HTML51] *(cuya última actualización es del [10 de marzo de 2016][BorradorHTML51]).*

## El futuro del HTML: HTML.next

Tanto la [W3C][W3C] como el [WHATWG][WhatWG] están trabajando sobre la evolución del [HTML5][HTML5]. Cada uno a su ritmo.

Es por ello que es posible que muchas de las cosas en las que está trabajando [WHATWG][WhatWG] no acaben dentro del estándar [HTML5][HTML5]. Así [un subconjunto del trabajo sobre HTML5 pasará a ser recomendación del W3C y la otra parte pasará para las siguientes versiones][HTMLNext_HTML5]. Esto es lo que se ha dado a conocer como [HTML.next][HTMLNext]

En [HTML.next][HTMLNext] están [propuestos elementos][HTMLNextWorkingGroup] como RECO, para el reconocimiento de voz, áreas de texto WYSIWYG, DATAGRID para representar datos tabulares, DATA para insertar elementos sólo reconocibles para máquinas,...

[HTML40]: http://www.w3.org/TR/REC-html40/
[ManualCSS]: http://www.manualweb.net/tutorial-css/
[ManualHTML]: http://www.manualweb.net/tutorial-html/
[ManualXML]: http://www.manualweb.net/tutorial-xml/
[XML1]: http://www.w3.org/TR/1998/REC-xml-19980210
[XHTML1]: http://www.w3.org/TR/xhtml1/
[W3C]: http://www.w3.org
[WhatWG]: http://www.whatwg.org/
[HTML5]: http://www.w3.org/TR/html5/
[HTML5_2014]: http://www.w3.org/TR/2014/REC-html5-20141028/
[HTMWorkingGroup]: http://www.w3.org/html/wg/
[HTML51]: https://www.w3.org/TR/2016/WD-html51-20160310/
[BorradorHTML51]: https://www.w3.org/blog/news/archives/5313
[HTMLNext_HTML5]: http://www.w3.org/QA/2012/07/html5_and_htmlnext.html
[HTMLNext]: http://www.w3.org/wiki/HTML/next
[HTMLNextWorkingGroup]: http://www.w3.org/html/wg/next/markup/
