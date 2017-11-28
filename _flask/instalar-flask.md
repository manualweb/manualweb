---
title: Instalar Flask
permalink: /flask/instalar-flask/
---

## Requisitos para utilizar el Framework Flask
[Flask][ManualFlask] depende de librerías externas como **Werkzeug** y **Jinja2**. **Werkzeug** es un toolkit para aplicaciones WSGI, que es un interface entre aplicaciones Python y servidores web. **Jinja2** es un engine para el renderizado de plantillas (o templates) web.

Para poder utilizar [Flask][ManualFlask] debes de tener, al menos, **Python 2.6** instalado. [Flask][ManualFlask] también funciona con **Python 3**.


## Realizando la instalación
Para instalar [Flask][ManualFlask] vamos a utilizar <code>pip</code>. Así que simplemente deberemos de escribir en nuestra línea de comandos lo siguiente:

<kbd>$ pip install Flask</kbd>

Puede ser que para la instalación necesites ser administrador. En ese caso ejecuta:

<kbd>$ sudo pip install Flask</kbd>

## Flask con virtualenv
Una buena práctica dentro del mundo Python es ejecutar el código dentro de un entorno virtual o <code>virtualenv</code>. Dentro del entorno virtual podremos trabajar con diferentes versiones de Python y de las librerías que estemos utilizando.

Para instalar <code>virtualenv</code> deberás de ejecutar lo siguiente

<kbd>$ pip install virtualenv</kbd>

Una vez instalado <code>virtualenv</code> deberás de crear un directorio para tu proyecto.

<kbd>$ mkdir miproyecto
$ cd miproyecto</kbd>

Ahora creamos el entorno virtual del proyecto:

<kbd>$ virtualenv mientornovirtual</kbd>

> Se suele utilizar <code>venv</code> como nombre de los entornos virtuales

Ahora tenemos que saber hacer dos cosas. Por un lado activar el entorno virtual:

<kbd>$ . mientornovirtual/bin/activate</kbd>

Y desactivarlo una vez acabemos de utilizarlo

<kbd>$ deactivate</kbd>  

Dentro del entorno virtual realizaremos la instalación de [Flask][ManualFlask].

[ManualFlask]: http://www.manualweb.net/flask/
