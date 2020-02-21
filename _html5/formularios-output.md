---
title: Elemento Output
permalink: /html5/formularios-output/
---

Uno de los elementos nuevos que tenemos dentro de los formularios, a parte de los [DataList][DataList] y las [Barras de Progreso][BarrasProgreso], es el elemento `output`.

El elemento `output` nos va a servir para mostrar resultados de cálculos dentro de un formulario. Y es que muchas veces los formularios son utilizados para calcular subtotales o totales de elementos y es, en estos casos, dónde el elemento `output` entra en acción.


La estructura del elemento `output` es la siguiente:

~~~html
<output for="valores" form="id-formulario" name="nombre"></output>
~~~

## Atributos Output
Como podemos observar su estructua es muy sencilla y cuenta con tres atributos principales: *for*, *form* y *name*.


El atributo `for` nos va a servir para identificar el conjunto de elementos que contribuyen al resultado mostrado en el elemento `output`. Estos identificadores deberán de aparecer separados por espacios.

De esta forma, si tenemos dos campos de entrada *e1* y *e2* que contribuyen con el resultado, indicaríamos su dependencia de la siguiente forma:

~~~html
<input type="number" id="e1"/>
<input type="number" id="e2"/>
<output for="e1 e2"></output>
~~~

El atributo `form` nos sirve para identificar al formulario del cual depende el elemento `output` por lo que su valor será el `id` de dicho formulario.

~~~html
<form id="myform" action="#">
  <input type="number" id="e1"/>
  <input type="number" id="e2"/>
  <output for="e1 e2" form="myform"></output>
</form>
~~~

El atributo `form` es importante ya que nos permite poner el elemento `output` en cualquier parte del documento, si necesidad de estar dentro del formulario.

~~~html
<form id="myform" action="#">
  <input type="number" id="e1"/>
  <input type="number" id="e2"/>
</form>
<h2>Resultado</h2>
<output for="e1 e2" form="myform"></output>
~~~

En el caso de que no indiquemos el valor del `id` del formulario del que depende, se le asignará el `id` del formulario del que forme parte.

El último atributo es `name`, mediante este atributo simplemente estamos dando un nombre al elemento para que pueda ser enviado desde el formulario como un dato más. Es exactamente [el mismo mecanismo que el atributo `name` de los elementos `input`][CamposEntradaDatos].

~~~html
<form id="myform" action="#">
  <input type="number" id="e1"/>
  <input type="number" id="e2"/>
  <output for="e1 e2" form="myform" name="resultado"></output>
</form>
~~~

## Calculos en Output
Aunque el nombre del elemento `output` pueda dar a entender que el cálculo de los elementos que asociamos mediante el atributo `for` es automático, la realidad es que no es así.

Es decir, que si queremos realizar cálculos que se muestren en el elemento `output` deberemos de recurrir al lenguaje [Javascript][Javascript].

No es que haya que ser un experto en el lenguaje [Javascript][Javascript]. Por ejemplo podemos utilizar el evento `oninput` del formulario para asociar el cálculo.

~~~html
<form oninput="resultado.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" name="b" value="50" /> +
  <input type="number" name="a" value="10" /> =
  <output name="resultado">60</output>
</form>
~~~

En este caso vemos como le hemos asociado la suma de dos elementos del formulario al elemento `ouput` en el evento `oninput`. El valor de los campos del formulario `input` y `output` se refleja en el atributo `value`.

~~~javascript
resultado.value=parseInt(a.value)+parseInt(b.value)
~~~

[HTML]: http://www.manualweb.net/html/
[HTML5]: http://www.manualweb.net/html5/
[Javascript]: http://www.manualweb.net/javascript/
[DataList]: {{site.baseurl}}/html5/formualrios-datalist/
[BarrasProgreso]: {{site.baseurl}}/html5/formularios-barras-progreso/
[CamposEntradaDatos]: {{site.baseurl}}/html/formularios-html/#campos-de-entrada-de-datos
