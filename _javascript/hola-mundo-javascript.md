---
title: Hola Mundo Javascript
permalink: /javascript/hola-mundo-javascript/
excerpt: "Un editor de texto y un navegador web será lo único que necesitemos para poder crear nuestro primer Hola Mundo en Javascript."
tags: [hola mundo,navegador,consola,console.log]
image:
  path: /img/covers/javascript-cover.jpg
---

# Hola Mundo Javascript


Para realizar nuestro primer programa **Hola Mundo JavaScript** necesitaremos de muy pocas cosas. Por necesitar no necesitamos ni de un editor de texto. Ya que podemos ejecutar nuestro código [JavaScript](https://www.manualweb.net/javascript/) directamente sobre un navegador web.


En este caso vamos a crear nuestro programa **Hola Mundo JavaScript** de dos formas. En la primera insertaremos nuestro código [JavaScript](https://www.manualweb.net/javascript/) en una [página HTML](https://www.manualweb.net/html/), en el segundo caso crearemos el código directamente en la consola de nuestro navegador.


## Hola Mundo JavaScript en HTML


Lo primero será hacernos con un editor de textos y **crear un fichero .html**. Los **ficheros .html** son aquellos que representan al [lenguaje HTML](https://www.manualweb.net/html/) y que visualizarán nuestras páginas web. Si necesitas conocimientos sobre [HTML](https://www.manualweb.net/html/), no dejes de [echarle un vistazo a nuestro Manual de HTML antes de seguir adelante con este tutorial](https://www.manualweb.net/html/).


El código [JavaScript](https://www.manualweb.net/javascript/) se encuentra embebido dentro de los archivos [HTML](https://www.manualweb.net/html/). La forma básica que tiene un archivo [HTML](https://www.manualweb.net/html/) es la siguiente:


```html
<!DOCTYPE html>
<html lang="es">
<head>
<title>Título de la pagina</title>
</head>
<body>

<!-- Cuerpo de la página HTML -->

</body>
</html>
```


Lo siguiente que vamos a realizar es crear nuestro código [JavaScript](https://www.manualweb.net/javascript/) dentro de nuestro archivo. El código [JavaScript](https://www.manualweb.net/javascript/) estará situado dentro de la página [HTML](https://www.manualweb.net/html/) mediante el elemento [`script`](https://www.w3api.com/HTML/script/).


Quedando de la siguiente forma:


```html
<!DOCTYPE html>
<html lang="es">
<head>
<title>Título de la pagina</title>
</head>
<body>

<script>
  // Código Javascript
</script>

</body>
</html>
```


Aunque hemos situado el código [JavaScript](https://www.manualweb.net/javascript/) dentro del elemento [`body`](https://www.w3api.com/HTML/body/) de la [página HTML](https://www.manualweb.net/html/), más adelante veremos qué puede ponerse también dentro de la cabecera. Es decir, dentro del elemento [`head`](https://www.w3api.com/HTML/head/).


La función que utilizaremos para realizar el Hola Mundo [JavaScript](https://www.manualweb.net/javascript/) será [`document.write`](https://www.w3api.com/DOM/Document/write/). Lo que hará la función [`document.writeln`](https://www.w3api.com/DOM/Document/write/) generará el texto dentro de la página [HTML](%7B%7Bsite.url%7D%7D/html/).


```html
<!DOCTYPE html>
<html lang="es">
<head>
<title>Titulo de la pagina</title>
</head>
<body>

<script>
  document.write("Hola Mundo");
</script>

</body>
</html>
```


Ya solo nos quedará salvar el fichero `HolaMundoConJavaScript.html` y abrirlo con un navegador: _Google Chrome_, _Firefox_, _Safari_ o _Internet Explorer_. Lo que visualizaremos en pantalla será lo siguiente…


![](https://manualweb.net/javascript/img/hola-mundo-javascript.png)


> La función [`document.writeln`](https://www.w3api.com/DOM/Document/write/) nos ayuda a crear nuestro primer programa en [JavaScript](https://www.manualweb.net/javascript/), pero no es recomendado utilizarla en programas productivos.


## Hola Mundo JavaScript en Consola


En este caso vamos a ejecutar el código [JavaScript](https://www.manualweb.net/javascript/) dentro de la consola del navegador web. Dependiendo de cada navegador encontraremos la consola [JavaScript](https://www.manualweb.net/javascript/) en una opción de menú u otra. Suele llamarse **Herramientas para desarrolladores**. En el caso de _Google Chrome_ nos bastará con pulsar _**F12**_.


Veremos algo parecido a lo siguiente:


![](https://manualweb.net/javascript/img/consola.png)


En la parte marcada como **Consola** podremos insertar el código [JavaScript](https://www.manualweb.net/javascript/). En este caso para el **Hola Mundo Javascript** utilizaremos el método [`console.log`](https://www.w3api.com/WebAPI/Console/log/) a la cual pasaremos el texto.


```javascript
console.log("Hola Mundo");
```


Ya solo nos quedará insertarlo en la **consola** y pulsar intro.


Este mismo código utilizando [`console.log`](https://www.w3api.com/WebAPI/Console/log/) lo podemos poner dentro de la página [HTML](https://www.manualweb.net/html/) que mostrará el contenido en la consola, aunque en la página web no se verá nada.


```html
<!DOCTYPE html>
<html lang="es">
<head>
<title>Titulo de la pagina</title>
</head>
<body>

<script>
  console.log("Hola Mundo");
</script>

</body>
</html>
```

