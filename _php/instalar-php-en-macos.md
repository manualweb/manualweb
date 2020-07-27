---
title: Instalar PHP en MacOS
permalink: /php/instalar-php-en-macos/
---

Desde Mac OS X 10.12 (Sierra) la distribución de Mac viene con un servidor Apache 2.0 y con PHP 7.0. Es por ello que lo único que hay que hacer es configurar estos dos elementos para poder ejecutar código [PHP][PHP] en nuestro Mac.

Las versiones anteriores solían venir con PHP 5.0 o PHP 4.0.

## Homebrew

En el caso de que tu Mac no tenga [PHP][PHP] instalado o bien la versión de [PHP][PHP] sea antigua puedes recurrir al gestor de paquetes **Homebrew**. Este gestor de paquetes nos puede servir tanto para instalar [PHP][PHP] como para instalar otros módulos en el Mac.

Lo primero será instalar **Homebrew** en nuestro Mac. Para ello desde un terminal de comandos escribimos lo siguiente:

~~~sh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
~~~

Una vez que tenemos **Homebrew** instalado en el Mac simplemente deberemos de proceder a la instalación de [PHP][PHP].

~~~sh
$ brew install php
~~~

En el caso de que quieras instalarlo con el soporte de Apache deberás de escribir

~~~sh
$ brew install --with-apache php70
~~~

Ya solo nos quedará comprobar la versión de [PHP][PHP] que tenemos instalada escribiendo lo siguiente en la consola de comandos:

~~~sh
$ php --version
~~~~

Y nos mostrará algo parecido a lo siguiente:

<samp>
PHP 7.3.11 (cli) (built: Apr 17 2020 19:14:14) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.3.11, Copyright (c) 1998-2018 Zend Technologies
</samp>


[PHP]: {{site.url}}/php
