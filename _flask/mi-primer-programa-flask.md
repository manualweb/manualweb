---
title: Mi Primer Programa Flask
permalink: /flask/mi-primer-programa-flask/
---

Ahora que ya conocemos los aspectos básicos sobre qué es [Flask][ManualFlask] vamos a realizar el primer programa [Flask][ManualFlask].

Lo primero que necesitamos es un editor de texto, aquel con el que te encuentres más a gusto, ya sea un completo **Pycharm** o un editor configurable como **Atom**.

### Importar Flask
Al ser un programa [Python][ManualPython] la extensión de nuestro fichero será .py. Lo primero que haremos en el programa será importar el Framework [Flask][ManualFlask], en concreto vamos a importar el objeto ```Flask``` que es el objeteo principal del Framework.

~~~python
from flask import Flask
~~~

Ahora vamos a crear una aplicación [Flask][ManualFlask], para ello instanciamos el objeto `Flask`.

~~~python
app = Flask(__name__)
~~~

Ya tenemos la aplicación que será la que tendremos que ejecutar al final del programa.

### Definir las Rutas
El concepto principal que maneja Flask es el de las rutas. Por entendernos la ruta será un path del servidor. Lo que vamos a hacer es asociar un Path a una funcionalidad, esto lo conseguimos con las rutas.

Para definir una ruta utilizamos el método ```.route()```, el cual recibirá entre paréntesis el path sobre el que queremos asociar la fucionalidad.

Así, si quereos gestionar el path o ruta raíz escribiremos lo siguiente:

~~~python
@app.route('/')
~~~

Si lo que queremos es controlar el path o ruta <samp>/mensaje/saludo</samp> cambiaremos el parámetro del método:

~~~python
@app.route('/mensaje/saludo')
~~~

Ahora asociamos a esa ruta un método, este será el que se encargue de controlar las peticiones o ```Request``` que lleguen a la ruta y de devolver el contenido mediante una ```Response```.

~~~python
@app.route('/')
def saludo():
    return 'Mi primer programa Flask!'
~~~

En este caso hemos asociado el método ```.saludo()``` a la ruta y lo que hacemos es devolver una simple cadena <samp>'Mi primer programa Flask!'</samp>

### El objeto Flask
Una vez que tenemos definido el esqueleto del programa y las rutas que vayamos a utilizar, solo tendremos que ejecutar el objeto [Flask][ManualFlask].

Para ello ejecutamos el método ```.run()``` de nuestro objeto [Flask][ManualFlask] ```app```.

~~~python
if __name__ == '__main__':
    app.run()
~~~

### Fichero para la aplicación Flask
Al ser una aplicación [Python][ManualPython] deberemos de guardar el fichero con una extensión .py. Por ejmplo <samp>hola-mundo.py</samp>


### Ejecutar la aplicación Flask
Ahora pasaremos a ejeuctar el programa [Flask][ManualFlask]. Al ser un programa [Python][ManualPython] tendremos que ejecutar el interprete de [Python][ManualPython].

<samp>$ python hola-mundo.py</samp>

O bien podemos ejecutarla mediante el modulo de [Flask][ManualFlask]:

<samp>$ export FLASK_APP=hola-mundo-flask.py
$ python -m flask run</samp>

El módulo Flask también permite ejecutarla de la siguiente manera:

<samp>$ export FLASK_APP=hola-mundo-flask.py
$ flask run</samp>

En la pantalla veremos que automáticamente se arranca el servidor que contiene las rutas.

<samp>* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)</samp>

> La aplicación [Flask][ManualFlask] solo estará disponible desde el ordenador dónde se arranca, en el caso de que queramos que esté disponible desde otro ordenador de la red deberemos de ejecutar <samp>flask run --host=0.0.0.0</samp>

Simplemente tendremos que ir a esa dirección para poder ver el programa ejecutándose y la salida en el navegador donde pondrá:

<samp>Mi primer programa Flask!</samp>


Con esto ya habremos conseguido lanzar la aplicación [Flask][ManualFlask].

[ManualFlask]: http://www.manualweb.net/flask/
[ManualPython]: http://www.manualweb.net/python/
