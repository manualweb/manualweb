---
title: Sintaxis PHP
permalink: /php/sintaxis-php/
---

Para poder desarrollar tus programas en [PHP][PHP] tienes que conocer la sintaxis [PHP][PHP] básica. En este caso aprenderemos a:

* Saber cómo se delimita el código que es [PHP][PHP].
* Como incrustar [PHP][PHP] dentro de nuestras páginas [HTML][HTML].
* Conocer qué es una sentencia [PHP][PHP].
* Poner comentarios dentro de nuestro código [PHP][PHP].

## Etiquetas PHP
Todo el código [PHP][PHP] que desarrollemos debe de estar dentro de dos etiquetas. `<?php` y `?>`. De esta forma siempre veremos nuestro código [PHP][PHP] de la siguiente forma:

~~~php
<?php

// código PHP
echo "Soy un programa en PHP";

?>
~~~

Aunque esta es la forma formal para definir nuestros programas en [PHP][PHP] hay que tener en cuenta que en ciertas ocasiones la etiqueta de cierre no aparece. Quedando el código de la siguiente forma:

~~~php
<?php

// código PHP
echo "Soy un programa en PHP";

~~~

También se puede encontrar código [PHP][PHP] de forma abreviada con las etiquetas `<?` y `?>`.

~~~php
<?

// código PHP
echo "Soy un programa en PHP";

?>
~~~

Siempre y cuándo se haya habilitado la opción `--enable-short-tags` en el fichero **php.ini**.

Si bien, como hemos comentado lo más normal y la recomendación es utilizar la primera opción con `<?php` y `?>`.

## PHP incrustado en HTML
Nuestros ficheros **.php** que son los que contienen el código [PHP][PHP] pueden contener únicamente código en [PHP][PHP] o pueden intercalar código [HTML][HTML] y [PHP][PHP] para poder construir una página web de una forma más sencilla y no tener que ir generando todo el código [HTML][HTML] mediante sentencias [PHP][PHP].

Así es normal que nos encontremos ficheros **.php** de la siguiente forma:

~~~php
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Código HTML y PHP</title>
</head>
<body>

<!-- Elementos HTML5 -->

<?php
  echo "Código en PHP";
?>

</body>
</html>
~~~

Además podemos intercarlar código [PHP][PHP] y [HTML][HTML] en sentencias de decisión o bucles para poder tratarlo más sencillamente y podremos encontrar estructuras de la siguiente forma:

~~~php
<?php if (validacion): ?>
<!-- Código HTML -->
<?php else: ?>
<!-- Código HTML -->
<?php endif; ?>
~~~

La sentencia `echo` nos muestra una cadena de texto. Una de las opciones que tenemos es el poner etiquetas echo abreviadas dentro de nuestras páginas [HTML][HTML] mediante la estructura `<?=`y `?>`.

~~~php
<?= "Cadena de caracteres" ?>
~~~

## Sentencias PHP
Las **sentencias en PHP** se separan mediante un punto y coma (;). Hay que saber que la última etiqueta del código [PHP][PHP] genera directamente un punto y coma, por lo que no será necesario incluirlo directamente. Si bien es buena práctica el realizarlo.

Veremos las sentencias de nuestros programas en [PHP][PHP] de la siguiente forma:

~~~php
sentencia;
~~~

Por ejemplo la sencilla sentencia que vuelca contenido por pantalla se escribirá de la siguiente forma:

~~~php
echo "Esto es una sentencia";
~~~

Vemos como termina en punto y coma.

## Comentarios PHP
Otro de los elemetos básicos que tenemos que conocer antes de empezar a escribir nuestro primer programa con [PHP][PHP] es cómo deberemos de realizar comentarios [PHP][PHP] para poder documentar el código que estamos realizando.

Tenemos tres formas de escribir comentarios en [PHP][PHP].

La primera será el crear comentarios de una sola línea. Para ello incluimos dos barras (//) antes del comentario.

~~~php
<?php
    // Comentario de una sola línea
?>
~~~

Otra forma de crear un comentario de una sola línea es mediante el carácter almohadilla (#) antes del comentario.

~~~php
<?php
    # Comentario de una sola línea
?>
~~~

Los comentarios de una sola línea se suelen poner detrás de o sobre las sentencias para poder comenta su funcionalidad.

~~~php
<?php
    // Sentencia que muestra en pantalla "Hola Mundo"
    echo "Hola Mundo"; 

    echo "Hola Mundo"; # Sentencia que muestra en pantalla "Hola Mundo"
?>
~~~

La tercera forma de generar comentarios [PHP][PHP] es con comentarios de varias líneas. En este caso los separaremos mediante los carácteres (/*) y (*/). De esta forma podemos tener un comentario de bloque de la siguiente forma:

~~~php
<?php
    /*
    Soy un comentario
    que ocupa
    varias líneas
    */
?>

Los comentarios de varias líneas suelen explicar grandes bloques de códigos o descripciones de programas.
~~~

[PHP]: {{site.url}}/php/
[HTML]: {{site.url}}/html/