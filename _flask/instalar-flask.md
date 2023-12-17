---
title: Instalar Flask
permalink: /flask/instalar-flask/
excerpt: "Pasos que hay que realizar para poder instalar Flask y así ejecutar nuestra primera aplicación con este framework."
tags: [flask,venv,werkzeug,jinja2,virtualenv]
image:
  path: /img/covers/xml-cover.png
---

## Requisitos para utilizar el Framework Flask


[Flask](http://www.manualweb.net/flask/) depende de librerías externas como **Werkzeug** y **Jinja2**. **Werkzeug** es un toolkit para aplicaciones WSGI, que es un interface entre aplicaciones Python y servidores web. **Jinja2** es un engine para el renderizado de plantillas (o templates) web.


Para poder utilizar [Flask](http://www.manualweb.net/flask/) debes de tener, al menos, **Python 2.6** instalado. [Flask](http://www.manualweb.net/flask/) también funciona con **Python 3**.


## Realizando la instalación


Para instalar [Flask](http://www.manualweb.net/flask/) vamos a utilizar `pip`. Así que simplemente deberemos de escribir en nuestra línea de comandos lo siguiente:


> 💡 $ pip install Flask


Puede ser que para la instalación necesites ser administrador. En ese caso ejecuta:


> 💡 $ sudo pip install Flask


## Flask con virtualenv


Una buena práctica dentro del mundo Python es ejecutar el código dentro de un entorno virtual o `virtualenv`. Dentro del entorno virtual podremos trabajar con diferentes versiones de Python y de las librerías que estemos utilizando.


Para instalar `virtualenv` deberás de ejecutar lo siguiente


> 💡 $ pip install virtualenv


Una vez instalado `virtualenv` deberás de crear un directorio para tu proyecto.


> 💡 $ mkdir miproyecto $ cd miproyecto


Ahora creamos el entorno virtual del proyecto:


> 💡 $ virtualenv mientornovirtual


> Se suele utilizar venv como nombre de los entornos virtuales


Ahora tenemos que saber hacer dos cosas. Por un lado activar el entorno virtual:


> 💡 $ . mientornovirtual/bin/activate


Y desactivarlo una vez acabemos de utilizarlo


> 💡 $ deactivate


Dentro del entorno virtual realizaremos la instalación de [Flask](https://www.manualweb.net/flask/).

