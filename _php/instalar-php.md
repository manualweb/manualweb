---
title: Instalar PHP
permalink: /php/instalar-php/
---

Lo primero que tenemos que hacer antes de empezar a codificar nuestro primer programa es instalar [PHP][PHP] es que podemos utilizarlo desde la línea de comandos o dentro de un servidor. Dependiendo de lo que necesites deberémos de realizar una instalación u otra.

## PHP para línea de comandos
En este caso simplemente tendremos que instalar [PHP][PHP]. Una vez instalado podremos utilizarlo desde la línea de comando y ejecutar nuestros scripts en [PHP][PHP].

Para ello veremos cómo desplegar [PHP][PHP] en diferentes sistemas operativos:

* [Instalar PHP en MacOS]({{site.url}}/php/instalar-php-en-macos/)
* Instalar PHP en Windows

## PHP en un servidor
Aunque esta es la forma más compleja de instalar es la forma más normal en la que nos vamos a encontrar [PHP][PHP] desplegado.

Cuando vamos a utilizar [PHP][PHP] en un servidor necesitamos tres cosas: el servidor, el módulo de [PHP][PHP] y un navegador web para ver el resultado.

En este caso lo que necesitamos es desplegar [PHP][PHP] como un módulo dentro del servidor web, ya sea este un *Apache*, un *Internet Information Server (IIS)* o un *[Nginx][Nginx]*.

Partiremos de la situación en la cual ya tenemos instalado [PHP][PHP] en el sistema operativo, por lo que simplemente nos quedará el configurar el módulo del servidor web.

Cierto es que [PHP][PHP] lleva un servidor integrado que nos puede servir perfectamente para nuestros desarrollos en local.

Veremos como configurar los módulos de [PHP][PHP] en diferentes servidores web:

* [Servidor Web integrado en PHP]({{site.url}}/php/servidor-web-integrado-en-php/)
* [Configurar PHP en Apache]({{site.url}}/php/configurar-php-en-apache/)
* Configurar PHP en NGinx
* Configurar PHP en Lighttpd

## XAMPP
Si estamos empezando con [PHP][PHP] y no queremos complicarnos la vida en instalaciones del código y configuraciones de los módulos podemos apoyarnos en la solución **XAMPP**.

Al instalar **XAMPP** tendremos configurado por defecto un *servidor Apache*, una base de datos *MySQL (o MariaDB)*, *PHP* y *Perl*. De esta forma podremos ejecutar nuestro código fuente de una forma muy rápida.

Hay algunas variaciones atendiendo a sistemas operativos como **LAMP** para Linux, **MAMP** para MacOS o **WAMP** para Windows.

En este caso vamos a ver como instalar **XAMPP**:

* Instalar XAMPP

## PHP y Docker
Otra buena alternativa para poder utilizar [PHP][PHP] es buscar una [imágen Docker][ImagenDocker] que venga ya con la el soporte de [PHP][PHP] más los módulos configurados en un servidor de aplicaciones.

Veremos lo sencillo que es descargarse una imagen y pasarle el código fuente en [PHP][PHP] para poder ejecutar nuestro programa.

En este caso veremos:

* Usar PHP con Docker


[PHP]: {{site.url}}/php/
[Nginx]: http://www.arquitectoit.com/nginx
[ImagenDocker]: http://www.arquitectoit.com/docker/que-es-docker/