---
title: Introducción Flask
permalink: /flask/introduccion-flask/
excerpt: "Introducción Flask que nos enseña lo sencillo que es crear una aplicación web o servicio restful con este framework."
tags: [flask,python,restful,aplicación web,werkzeug,jinja2]
image:
  path: /img/covers/flask-cover.png
---

Flask es un Microframework de [Python](https://www.manualweb.net/python/) que está basado en **Werkzeug**, **Jinja 2** y buenas intenciones. Mediante [Flask](https://www.manualweb.net/flask/) podemos construir _**aplicaciones web**_ y _**servicios Restful**_ con [Python](https://www.manualweb.net/python/) de una forma extraordinariamente sencilla. Con pocas líneas podemos llegar a tener un _**servicio Restful**_ funcionando.


La mayor virtud de [Flask](https://www.manualweb.net/flask/) es poder crear rutas web de una forma muy sencilla. Una pequeña aplicación web que nos devolviese un hola mundo sería tan sencilla como escribir:


```python
from flask import Flask
app = Flask(__name__)

@app.route("/")def hello():
    return "¡Hola Mundo!"

if __name__ == "__main__":
    app.run()
```


O crear un servicio que sumase dos números con [Flask](https://www.manualweb.net/flask/) lo podríamos hacer con el siguiente código:


```python
from flask import Flask
app = Flask(__name__)

@app.route('/suma/<int:s1>/<int:s2>',methods=['GET'])
def suma(s1,s2):
    return str(s1+s2)

if __name__ == '__main__':
    app.run()
```


En `http://localhost:5000/` se tendrá el resultado del código.


### Características de Flask

- **Micro**, es un framework pequeño, pero extensible. La idea de [Flask](http://www.manualweb.net/tutorial-flask/) es que en una sola página pueda caberte una aplicación web. Por ejemplo, por defecto [Flask](http://www.manualweb.net/tutorial-flask/) no trae una capa de abstracción de base de datos. Si bien ya existen múltiples extensiones que agregan dicha capacidad.

### Estructura de un proyecto Flask


Por convención los proyectos [Flask](http://www.manualweb.net/tutorial-flask/) tienen la siguiente estructura:

- **static**, para los ficheros estáticos.
- **templates**, para las plantillas.
