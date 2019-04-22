---
title: Hola Mundo Javascript
permalink: /javascript/hola-mundo-javascript/
---

Para realizar nuestro primer programa **Hola Mundo JavaScript** necesitaremos de muy pocas cosas. Por necesitar no necesitamos ni de un editor de texto. Ya que podemos ejecutar nuestro código [JavaScript][JavaScript] directamente sobre un navegador web.

En este caso vamos a crear nuestro programa **Hola Mundo JavaScript** de dos formas. En la primera insertaremos nuestro código [JavaScript][JavaScript] en una [página HTML][HTML], en el segundo caso crearemos el códido directamente en la consola de nuestro navegador.

## Hola Mundo JavaScript en HTML

Lo primero será hacernos con un editor de textos y **crear un fichero .html**. Los ficheros .htm son aquellos que representan al [lenguaje HTML][HTML] y que visualizarán nuestras páginas web. Si necesitas conocimientos sobre HTML, no dejes de [echarle un vistazo a nuestro Manual de HTML antes de seguir adelante con este tutorial][HTML].

El código [JavaScript][JavaScript] se encuentra embebido dentro de los archivos [HTML][HTML]. La forma básica que tiene un archivo [HTML][HTML] es la siguiente:

~~~html
<html>
<head><title>Titulo de la pagina</title></head>
<body>

<!-- Cuerpo de la página HTML -->

</body>
</html>
~~~

Lo siguiente que vamos a realizar es crear nuestro código [JavaScript][JavaScript] dentro de nuestro archivo. El código [JavaScript][JavaScript] estará situado dentro de la página [HTML][HTML] mediante el elemento [`script`][script].

Quedando de la siguiente forma:

~~~html
<html>
<head><title>Titulo de la pagina</title></head>
<body>

<script>
  // Código Javascript
</script>

</body>
</html>
~~~

Aunque hemos situado el código [JavaScript][JavaScript] dentro del elemento [`body`][body] de la [página HTML][html], más adelante veremos que puede ponerse también dentro de la cabecera. Es decir, dentro del elemento [`head`][head].

La función que utilizaremos para realizar el Hola Mundo [JavaScript][JavaScript] será [`document.writeln`][document.writeln]. Lo que hará la función [`document.writeln`][document.writeln] generará el texto dentro de la página [HTML][HTML].

~~~html
<html>
<head><title>Titulo de la pagina</title></head>
<body>

<script>
  document.write("Hola Mundo");
</script>

</body>
</html>
~~~

Ya solo nos quedará salvar el fichero `HolaMundoConJavaScript.html` y abrirlo con un navegador: *Google Chrome*, *Firefox*, *Safari* o *Internet Explorer*. Lo que visualizaremos en pantalla será lo siguiente...

![Imagen Hola Mundo Javascript]({{site.url}}/javascript/img/hola-mundo.png){:class="img-responsive"}

## Hola Mundo JavaScript en Consola
En este caso vamos a ejecutar el código [JavaScript][JavaScript] dentro de la consola del navegador web. Dependiendo de cada navegador encontraremos la consola [JavaScript][JavaScript] en una opción de menú u otra. En el caso de *Google Chrome** nos bastará con pulsar *F12*.

Veremos algo parecido a lo siguiente:

![Imagen Consola Javascript]({{site.url}}/javascript/img/consola.png){:class="img-responsive"}

En la parte marcada como **Consola** podremos insertar el código [JavaScript][JavaScript]. En este caso para el **Hola Mundo Javascript** utilizaremos la función [`console.log`][console.log] a la cual pasaremos el texto.

~~~javascript
console.log("Hola Mundo");
~~~

Ya solo nos quedará insertarlo en la **consola** y pulsar intro.

[JavaScript]: {{site.url}}/javascript/
[HTML]: {{site.url}}/html/
[body]: http://w3api.com/wiki/HTML:BODY
[script]: http://w3api.com/wiki/HTML:SCRIPT
[head]: http://w3api.com/wiki/HTML:HEAD
[document.writeln]: http://w3api.com/wiki/DOM:Document.writeln()
[console.log]: http://w3api.com/wiki/DOM:Console.log()
