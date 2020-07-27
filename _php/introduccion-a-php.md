---
title: Introducción a PHP
permalink: /php/introduccion-a-php/
---

Si tuviésemos que realizar una introducción a [PHP][PHP] podríamos decir que [PHP][PHP] es un lenguaje **del lado del servidor** que nos permite desarrollar aplicaciones y servicios web. 

Cuando desarrollamos nuestras página web podemos realizar muchas cosas dentro del navegador, pero si necesitamos enviar el contenido de un formulario, almacenar información en una base de datos, o enviar un email,... será en estos casos cuando recurramos a lenguajes del lado del servidor como es el caso de [PHP][PHP].

Por lo tanto [PHP][PHP] es un lenguaje de programación complementario a lenguajes como [HTML][HTML], [CSS][CSS] y [Javascript][Javascript]. De los cuales sería bueno que tuvieses algún conocimiento antes de seguir aprendiendo sobre [PHP][PHP].

[PHP][PHP] se ejecuta como un módulo **CGI (Common Gateway Interface)** dentro de los servidores web para poder interpretar el código.

Estas aplicaciones podrán almacenar información en ficheros o bases de datos, así como llamar vía webservices o API Rest a otros servicios, podremos incluir modelos de seguridad sobre ellas,... siendo muy sencillo el manejo del HTML para poder acabar teniendo una aplicación web.

[PHP][PHP] es el acrónimo de **PHP: Hypertext Preprocessor**

Aunque su uso principal es en el desarrollo de aplicaciones web, también podemos utilizar [PHP][PHP] desde la línea de comandos de una computadora e incluso para el desarrollo de aplicaciones de escritorio mediante [PHP-GTK][PHP-GTK], aunque esto último no está muy extendido.

Es uso de [PHP][PHP] está muy extendido en los [**CMS (Content Management Systems)**][CMS] ya que es la base de algunos de ellos como *WordPress*, *Joomla!* o *Drupal* y de los **e-Commerce** como *Prestashop*, *Woocommerce* o *Magento*.


Para utilizar [PHP][PHP] podremos crear aplicaciones enteras en ficheros *.php* o directamente integrando código directamente en una página HTML.

En una página sería:

~~~php
<?php
  echo "¡Hola, soy un código PHP en un programa.";
?>
~~~

Y dentro de un [HTML][HTML] tendríamos lo siguiente:

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Ejemplo</title>
    </head>
    <body>

        <?php
            echo "¡Hola, soy un código PHP incrustado en una página web";
        ?>

    </body>
</html>
~~~

## Características de PHP

* Lenguaje y sintáxis muy sencilla que nos permite crear aplicaciones de forma rápida. Utiliza funciones y objetos de forma básica, por lo que nuestros programas serán fáciles de codificar y de entender.

* [PHP][PHP] es soportado por diferentes sistemas operativos *Windows*, *Linux*, *UNIX*, *MacOS*,... y sobre diferentes servidores web *Apache*, *[Nginx][Nginx]*, *Lighttpd*,...

* Podemos utilizar [PHP][PHP] de forma procedimental basado en funciones o mediante un modelo orientado a objetos.

* Hay un [amplio soporte de bases de datos][phpbd] para la persistencia de datos: *MySQL*, *[MongoDB][MongoDB]*, *SQLite*, *PostgreSQL*,... Podremos acceder a estas bases de datos mediante extensión de los drivers o utilizando una capa de abstracción general conocida como **PDO**.

* Tiene otras capacidades para el envío de email, manejo de ficheros y cadenas XML, tratamiento de expresiones regulares,...

* [PHP][PHP] se ofrece como código abierto por lo que existen múltiples frameworks que nos permiten su evolución como son: *Laravel*, *CodeIgniter*, *Symfony*, *CakePHP*, *Zend*,... 

Una vez realizada esta introducción a [PHP][PHP] ya solo queda ponerse manos a la obra y empezar a aprender a utilizar el lenguaje y realizar nuestros primeros programas con [PHP][PHP].

[PHP]: {{site.url}}/php/
[PHP-GTK]: http://gtk.php.net/
[Nginx]: http://www.arquitectoit.com/nginx
[phpbd]: https://www.php.net/manual/es/refs.database.php
[MongoDB]: {{site.url}}/mongodb/
[HTML]: {{site.url}}/html/
[CSS]: {{site.url}}/css/
[Javascript]: {{site.url}}/javascript/
[CMS]: http://www.arquitectoit.com/cms