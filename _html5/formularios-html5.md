---
title: Formularios HTML5
permalink: /html5/formularios-html5/
---

# Formularios Web


Si hay un punto sobre el que se ha incrementado más su funcionalidad de [HTML 4.01][HTML] a [HTML5][HTML5] ese es los formularios. Y es que se ha mantenido la misma filosofía de desarrollo, pero se ha dotado de nuevas funcionalidades a los formularios pasando a tener unos formularios con muchas más posibilidades

Esquema final
1. Nuevo Input
2. DataList



# File
En [HTML 4.01][HTML4] ya existía un campo de texto `input` en que podíamos subir ficheros. Este era el tipo `file`. En [HTML5][HTML5] sigue existiendo dicho campo, si bien se ha añadido una serie de atributos adicionales para su manejo.


La estructura de un tipo `file` es:

~~~html


~~~



Esquema


 * file picker???
3. Progress bar & Meter?
3. Validación de datos
 * Required
 * Expresiones regulares
 * min-max longitud de las entradas
 * Constraint Validation API
 		* Cambio del mensaje de error personalizado

Esquema
4. PlaceHolder
5. Autocompletar
6. Slider ¿o es input? -> es el tipo range y que está asociado con el DataList
7. Patrones
8. Autofoco
9. Elementos requeridos
10. API de validación restringida -> controles específicos. Validación formulario
	* patrones
	* api
	* formnovalidate para evitar validaciones
	* required
	https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

11. objeto formdata
12. formularios y css
	* pseudoclases
	:required { }
:optional { }
:valid { }
:invalid { }
:default { }
:in-range { }
:out-of-range { }
:not()

* atribute selectors
[autofocus] { }
[autocomplete] { }
[list] { }
[placeholder] { }
[type=range] { and other types  }
[multiple]

* Nuevos elementos
 * DataList
 * Output
* En los input
 * color
 * date
 * datetime
 * datetime-local
 * email
 * month
 * number
 * range
 * search
 * tel
 * time
 * url
 * week

* Otros atributos
 * autocomplete
 * autofocus
 * cformaction
 * formenctype
 * formmethod
 * formnovalidate
 * formtarget
 * height and width
 * list
 * min and max
 * multiple
 * pattern (regexp)
 * placeholder
 * required
 * step







[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
