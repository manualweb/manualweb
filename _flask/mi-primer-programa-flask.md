---
title: Mi Primer Programa Flask
permalink: /flask/mi-primer-programa-flask/
excerpt: "Pasos que hay que seguir para poder desarrollar mi primer programa Flask que muestre un Hola Mundo en consola."
tags: [flask,hola mundo,python,pycharm,atom]
image:
  path: /img/covers/flask-cover.png
---

Ahora que ya conocemos los aspectos básicos sobre qué es [Flask](https://www.manualweb.net/flask/) vamos a realizar el primer programa [Flask](https://www.manualweb.net/flask/).


Lo primero que necesitamos es un editor de texto, aquel con el que te encuentres más a gusto, ya sea un completo **Pycharm** o un editor configurable como **Atom**.


### Importar Flask


Al ser un programa [Python](http://www.manualweb.net/python/) la extensión de nuestro fichero será .py. Lo primero que haremos en el programa será importar el Framework [Flask](http://www.manualweb.net/flask/), en concreto vamos a importar el objeto `Flask` que es el objeto principal del Framework.


```python
from flask import Flask
```


Ahora vamos a crear una aplicación [Flask](http://www.manualweb.net/flask/), para ello instanciamos el objeto `Flask`.


```python
app = Flask(__name__)
```


Ya tenemos la aplicación que será la que tendremos que ejecutar al final del programa.


### Definir las Rutas


El concepto principal que maneja Flask es el de las rutas. Por entendernos la ruta será un path del servidor. Lo que vamos a hacer es asociar un Path a una funcionalidad, esto lo conseguimos con las rutas.


Para definir una ruta utilizamos el método `.route()`, el cual recibirá entre paréntesis el path sobre el que queremos asociar la fucionalidad.


Así, si quereos gestionar el path o ruta raíz escribiremos lo siguiente:


```python
@app.route('/')
```


Si lo que queremos es controlar el path o ruta **/mensaje/saludo** cambiaremos el parámetro del método:


```python
@app.route('/mensaje/saludo')
```


Ahora asociamos a esa ruta un método, este será el que se encargue de controlar las peticiones o `Request` que lleguen a la ruta y de devolver el contenido mediante una `Response`.


```python
@app.route('/')def saludo():
    return 'Mi primer programa Flask!'
```


En este caso hemos asociado el método `.saludo()` a la ruta y lo que hacemos es devolver una simple cadena ‘Mi primer programa Flask!’


### El objeto Flask


Una vez que tenemos definido el esqueleto del programa y las rutas que vayamos a utilizar, solo tendremos que ejecutar el objeto [Flask](http://www.manualweb.net/flask/).


Para ello ejecutamos el método `.run()` de nuestro objeto [Flask](http://www.manualweb.net/flask/) `app`.


```python
if __name__ == '__main__':
    app.run()
```


### Fichero para la aplicación Flask


Al ser una aplicación [Python](http://www.manualweb.net/python/) deberemos de guardar el fichero con una extensión .py. Por ejemplo hola-mundo.py


### Ejecutar la aplicación Flask


Ahora pasaremos a ejecutar el programa [Flask](http://www.manualweb.net/flask/). Al ser un programa [Python](http://www.manualweb.net/python/) tendremos que ejecutar el interprete de [Python](http://www.manualweb.net/python/).


```shell
$ python hola-mundo.py
```


O bien podemos ejecutarla mediante el modulo de [Flask](http://www.manualweb.net/flask/):


```shell
$ export FLASK_APP=hola-mundo-flask.py $ python -m flask run
```


El módulo Flask también permite ejecutarla de la siguiente manera:


```shell
$ export FLASK_APP=hola-mundo-flask.py $ flask run
```


En la pantalla veremos que automáticamente se arranca el servidor que contiene las rutas.

- Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)

> La aplicación [Flask](https://www.manualweb.net/flask/) solo estará disponible desde el ordenador dónde se arranca, en el caso de que queramos que esté disponible desde otro ordenador de la red deberemos de ejecutar `flask run –host=0.0.0.0`


Simplemente tendremos que ir a esa dirección para poder ver el programa ejecutándose y la salida en el navegador donde pondrá:


```shell
Mi primer programa Flask!
```


Con esto ya habremos conseguido lanzar la aplicación [Flask](https://www.manualweb.net/flask/).

