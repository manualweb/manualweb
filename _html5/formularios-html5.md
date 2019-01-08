---
title: Formularios HTML5
permalink: /html5/formularios-html5/
---

Si hay un punto sobre el que se ha incrementado más su funcionalidad de [HTML 4.01][HTML] a [HTML5][HTML5] ese es los formularios. Y es que se ha mantenido la misma filosofía de desarrollo, pero se ha dotado de nuevas funcionalidades a los formularios pasando a tener unos formularios con muchas más posibilidades

## Elementos Input
El elemento principal de un formulario es el elemento de entrada de datos o `input`. Es por ello que dicho elemento en [HTML5][HTML5] ha incluido varias novedades.

Por un lado el elemento `input` ha **incluido nuevos atributos**: *placeholder*, *autocomplete* y *autofocus* que permiten de forma sencilla el ponerle información contextual, hacerle un foco y autocompletar su contendio.

Por otro **se han añadido más tipos de campos de entrada** como son: *search*, *email*, *url*, *tel*, *range*, *number*, *datetime-local*, *week*, *month*, *time* y *color*. Lo cual nos proporciona más capacidades para obtener datos y sobre todo obtener datos de calidad, ya que ciertas de estas especializaciones llevan asociadas validaciones que nos aseguran que el dato es correcto. Por ejemplo, los campos de tipo `email` validan que el contenido corresponda con un email.

Puedes leer en detalle más información sobre [las novedades de los elementos Input en HTML5][ElementosInput]

## Elemento DataList
Hasta ahora cuando manejábamos una lista de elementos en [HTML][HTML] nos teníamos que ajustar al uso del elemento `select`, mediante el cual podíamos ofrecer al usuario una lista de selección simple o múltiple.

En [HTML5][HTML5] aparece el elemento `datalist`. La idea del elemento `datalist` es la de **poder crear una lista de elementos de forma independiente a los campos de entrada**, de la misma forma que se creaban los elementos `select` para, de forma separada, asociarla a un elemento `input`de formulario que lo necesite.

Esto nos ofrece muchas posibilidades pensando en que estos datos, en ciertas ocasiones, se podrían cargar de forma ásincrona y así pueden modificarse dependiendo de la situación.

Lee más sobre [el uso del elemento DataList][ElementoDataList]

## Barras de Progreso
Otro nuevo elemento, o mejor dicho, nuevos elementos, son las barras de progreso. Y es que en este caso tenemos dos tipos de barras de progreso: `progress` y `meter`.

En el caso de la barra de progreso `progress` encontramos un **elemento sencillo dónde con un valor y un máximo se puede renderizar una barra de progreso**.

El elemento `meter` nos ofrece más posibilidades ya que nos permite definir una **barra de progreso en tramos y además indicarle cual es el valor óptimo de la barra de progreso para que el navegador sepa como renderizarla y asociarla un color**: *verde*, *rojo* o *amarillo*.

Aprende a trabajar con las [barras de progreso][ElementoBarraProgreso].

## Elemento Output
Si ya teníamos el elemento `input` para las entradas de datos, los formularios [HTML5][HTML5] han incluido el elemento `ouput` para la **salidas de datos o cálculos**. Es decir, si tenemos cálculos internos dentro del formulario, los cuales haya que enviar o no, se podrán mostrar sobre un elemento `output`.

Puedes leer más sobre [lo sencillo que es utilizar el elemento output][ElementoOutput].

## Validaciones
Posiblemente la mayor mejora que hayan sufrido los formularios [HTML5][HTML5] es que ahora incluyen validaciones de forma implícita, además de un **API de Validación de Formularios** con el que, mediante el uso de [Javascript][Javascript], podemos realizar nuestras propias validaciones personalizadas.

En el caso de las validaciones implícitas, estas van en los nuevos tipos de elementos `input`, así se validará que los emails y urls tienen un formato correcto o que cuando insertamos un número este realmente es un número.

Otros controles que se añaden son el **control de los campos obligatorios o los límites sobre mínimo y máximo** de los valores que se aceptan.

El caso más potente es **el uso de patrones**, ya que nos permitirá de forma implícita realizar una validación de un campo asociado a un patrón definido en [Javascript][Javascript] y con lo que podemos realizar casi cualquier tipo de validación.

Y si con todo esto no es suficiente, el **API de Validación de Formlarios** nos permite comprobar si hay validaciones correctas y **personalizar mensajes**.

No esperes más y [aprende a realizar validaciones de formularios con HTML5][ValidacionesFormularios].


[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[Javascript]: http://www.manualweb.net/javascript/
[ElementosInput]: {{site.baseurl}}/html5/formularios-elementos-input/
[ElementoDataList]: {{site.baseurl}}/html5/formularios-datalist/
[ElementoBarraProgreso]: {{site.baseurl}}/html5/formularios-barras-progreso/
[ElementoOutput]: {{site.baseurl}}/html5/formularios-output/
[ValidacionesFormularios]: {{site.baseurl}}/html5/formularios-validacion/
