---
title: Primeros Pasos en CSS
permalink: /css/primeros-pasos-en-css/
---

Ahora que ya hemos visto los [conceptos inicialess del lenguaje CSS][QueEsCSS] y conocemos su [sintáxis básica][SintaxisBasica] vamos dar nuestros primeros pasos en CSS creando lo que vendría a ser un **Hola Mundo en CSS** o nuestros **Primera hoja de estilos CSS**.

## Crear documento HTML
Lo primero que haremos será crear un [documento HTML][DocumentoHTML] en un fichero que llamaremos *documento.html*.

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Documento HTML y Hoja de estilos CSS</title>
</head>
<body>
  <h1>Hola Mundo en CSS</h1>    

  <p>Este es el documento sobre el que vamos a apliar nuestra primera <em>hoja de estilos CSS.</em></p>

</body>
</html>
~~~

## Crear hoja de estilos CSS
Lo siguiente será crear la [hoja de estilos CSS][CSS] con todas las reglas que queramos aplicar. De esta manera crearemos un fichero de texto que llamaremos *estilos.css* dónde añadiremos las reglas.

~~~css
h1 {
    color: blue;
    font-size: 30px;
}

p {
    font-sizs: 12px;
}
~~~

## Asociar hoja de estilos CSS al documento HTML
Ahora pasaremos a asociar la hoja de estilos CSS que acabamos de crear al documento HTML. Para ello utilizamos el elemento [`link`][link] que nos permite realizar la asociación. Este elemento tiene un atributo [`href`][link.href] dónde indicaremos la URL del fichero con la hoja de estilos y otro atributo [`rel`][link.rel] dónde indicaremos el tipo de relación, que en este caso es **stylesheet**.

~~~html
<link ref="stylesheet" href="estilos.css">
~~~~

Este elemento lo insertaremos dentro de la cabecera [`head`][head] del documento [HTML][HTML].

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Documento HTML y Hoja de estilos CSS</title>
  <link ref="stylesheet" href="estilos.css">
</head>
<body>
  <h1>Hola Mundo en CSS</h1>    

  <p>Este es el documento sobre el que vamos a apliar nuestra primera <em>hoja de estilos CSS.</em></p>

</body>
</html>
~~~

De esta forma ya tendremos dados nuestros primeros pasos en [CSS][CSS] crenado una hoja de estilos y asociándola a un documento [HTML][HTML]. Solo nos quedará abrir el documento [HTML][HTML] para ver los efectos conseguidos sobre el contenido.






* Mediante un atributo style
* Mediante un atributo class
* Mediante un elemento style
* Mediante un fichero CSS
* Estilos en base a un estado

### Añadir estilos con un atributo style
La primera es mediante un atributo [`style`][AtributoStyle]. En este caso añadiremos el atributo [`style`][AtributoStyle] sobre el elemento y dentro del valor del atributo añadimos las propiedades de estilo que queremos configurar.

Por ejemplo, si queremos poner nuestro elemento de cabecera [`h1`][h1] en color *rojo* incluiremos el siguiente código:

~~~html
<body>
  <h1 style="color:red;">Hola Mundo en CSS</h1>   
~~~

Vemos que en este caso no es necesario el poner un selector y solo incluimos las propiedades que definan el estilo. Este mecanismo es útil cuando queremos dar un estilo concreto a un único elemento de la página y de forma aislada. Ya que este código no nos servirá para poder dar estilo a otros elementos [`h1`][h1] que puedan existir en la página o elementos [`h1`][h1] que existan en otras páginas de nuestra web. Es algo muy puntual.


### Añadir estilos con un atributo class


### Añadir estilos con un elemento style

La segunda es crear la hoja de estilos CSS dentro del elemento [`style`][ElementoStyle]. El elemento [`style][ElementoStyle] se deberá de poner dentro de [la cabecera del documento][CabeceraDocumentoHTML], es decir, entre los elementos [`head`][head].

~~~html
<head>
  <meta charset="UTF-8">
  <title>Documento HTML y Hoja de estilos CSS</title>
  <style>
      /* Aquí irá nuesta hoja de estilos */
  </style>
</head>
~~~

Para este caso, los estilos definidos dentro del elemento [`style`][ElementoStyle] pueden aplicarse a cualquier elemento de la página en la que lo hemos definido. Pero no se aplicarán en otras páginas de nuestra web.




[CSS]: {{site.url}}/css/
[HTML]: {{site.url}}/html/
[QueEsCSS]: {{site.url}}/css/que-es-css/
[SintaxisBasica]: {{site.url}}/css/sintaxis-css/
[DocumentoHTML]: {{site.url}}/html5/documento-html5/
[ElementoStyle]: https://w3api.com/HTML/style/
[head]: https://w3api.com/HTML/head/
[CabeceraDocumentoHTML]: https://www.manualweb.net/html/documento-html/#la-cabecera-del-documento
[AtributoStyle]: https://w3api.com/HTML/style/
[h1]: https://w3api.com/HTML/h1/
[link]: https://w3api.com/HTML/link/
[link.href]: https://w3api.com/HTML/link/href/
[link.rel]: https://w3api.com/HTML/link/rel/