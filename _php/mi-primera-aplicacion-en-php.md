---
title: Mi primera aplicación en PHP
permalink: /php/mi-primera-aplicacion-en-php/
---

Una vez que ya tenemos [PHP instalado en nuestro ordenador y los servidores configurados][InstallPHP] o el conocimiento del uso del [servidor web integado en PHP][PHPServidorWeb] es el momento de crear lo que denominaríamos mi primera aplicación en [PHP][PHP].

## Crear Mi Primera Aplicación en PHP

Para poder crear mi primera aplicación en [PHP][PHP] tenemos que saber tres cosas:

* La primera es que el fichero que vamos a crear con el código [PHP][PHP] es un fichero con extensión `.php`. Este fichero podremos crearlo con cualquier editor de textos que tengamos.

* La segunda es que el código [PHP][PHP] va entre las estructuras `<?php` y `?>`. Además podemos incrustarlo dentro de código [HTML][HTML] Es decir, nuestro código [PHP][PHP] sería algo así:

~~~php
<?php

  // Código PHP

?>
~~~

* La tercera cosa que tenemos que saber es que la función `echo` nos sirve para crear un texto de salida. Estaríamos mostrando una cadena que pusiese `"Mi Primera Aplicación en PHP"`. Así que escribiremos:

~~~php
<?php

  echo "Mi Primera Aplicación en PHP";

?>
~~~

Ahora lo que tenemos que hacer es crear un fichero que se llame `hola.php` con el siguiente contenido:

~~~php
<!DOCTYPE html>
<html>
    <head>
        <title>Mi Primera Aplicación en PHP</title>
    </head>
    <body>

        <?php
            echo "Mi Primera Aplicación en PHP";
        ?>

    </body>
</html>
~~~

## Probar Mi Primera Aplicación en PHP

Para poder realizar una prueba podemos [arrancar el servidor web integado en PHP][PHPServidorWeb] escribiendo lo siguiente en el directorio dónde esté el fichero `hola.php`:

~~~sh
$ php -s localhost:8000
~~~

El resultado podremos comprobarlo ejecutando en un navegador la siguiente URL.

~~~sh
http://localhost:80000/hola.php
~~~~

Y veremos que en la pantalla del navegador aparece la frase `"Mi Primera Aplicación en PHP"`. Así habrémos creado nuestro primer código con [PHP][PHP].

[PHP]: {{site.url}}/php/
[PHPServidorWeb]: {{site.url}}/php/instalar-php/
[InstallPHP]: {{site.url}}/php/servidor-web-integrado-en-php/
[HTML]: {{site.url}}/html/