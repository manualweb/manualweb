---
title: Servidor Web integrado en PHP
permalink: /php/servidor-web-integrado-en-php/
---

Para poder probar en local el código [PHP][PHP] que vamos desarrollando tenemos una gran alternativa en el uso del servidor web integrado en [PHP][PHP]. Esto nos evitará el tener que configurar un servidor web con los módulos de [PHP][PHP] e ir más rápidos en nuestras pruebas.

Es importante saber que esto solo es útil para nuestro entorno de desarrollo y que para entornos productivos ya deberíamos de utilizar servidores web configurados con [PHP][PHP].

Para poder lanzar nuestro servidor web integrado en [PHP][PHP] simplemente deberíamos de ejecutar la siguiente sentencia desde la línea de comandos:

~~~sh
$ php -S localhost:8080
~~~

Al ejecutarlo nos mostrará algo parecido a lo siguiente:

<samp>
PHP 7.3.11 Development Server started at Mon Jul 27 19:50:28 2020
Listening on http://localhost:8080
Document root is /Users/victor/Documents/WebServer/App1
Press Ctrl-C to quit.
</samp>

La carpeta en la que o hemos ejecutado será aquella que haga de aplicación web y en la que deberemos de tener nuestro código [PHP][PHP].

De esta forma, si tenemos un fichero que se llame `index.php` que contenga algo sencillo:

~~~php
<?php
  echo 'Hola Mundo';
?>
~~~

Podremos ejecutarlo en el servidor web integrado en [PHP][PHP] de la siguiente forma:

~~~sh
http://localhost:8080/index.php
~~~

En el caso que hemos puesto antes hemos ejecutado el servidor en el puerto 8080, pero podríamos utilizar el puerto que queramos. De esta manera si queremos utilizar el puerto 4000 ejecutaríamos lo siguiente:

~~~sh
$ php -S localhost:4000
~~~

O podríamos arrancarlo en la IP de la máquina para que sea accesible en la red:

~~~sh
$ php -S 192.168.0.2:8080
~~~

Como se puede comprobar el uso del servidor web integrado en [PHP][PHP] es muy sencillo y útil para ir probando nuestro código.

[PHP]: {{site.url}}/php