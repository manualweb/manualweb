---
title: Request Flask
permalink: /flask/request-flask/
---

El contenido que un cliente web manda al servidor siempre va almacenado en la Request. En [Flask][ManualFlask] la Request se representa mediante el objeto <code>request</code>

Para poder utilizar el objeto <code>request</code> deberemos de importarlo al principio de nuestro programa [Flask][ManualFlask]

~~~python
from flask import request
~~~

### Tipo de Request
Una de las primeras cosas para las que podemos utilizar el objeto <code>request</code> es la de saber el tipo de petición que nos hace el cliente: GET, POST, DELETE,... para ello el objeto <code>request</code> nos ofrece el atributo <code>.method</code>

Así podremos preguntar lo siguiente:

~~~python
if request.method == 'POST':
~~~

### Acceso a Parámetros
El objeto <code>request</code> nos servirá para acceder a la información que nos envíe el cliente. La principal información que nos envía son los parámetros, ya sean parámetros tipo GET o parámeteos tipo POST.

#### Acceso a Parámetros GET
Para accerder a un parámetro de tipo GET, que son aquellos que vienen como una lista de claves/valor dentro de la URL de petición.

<samp>?parametro1=valor1&parametro2=valor2&...&parametroN=valorN</samp>

El objeto <code>request</code> nos ofrece la colección <code>.args</code> y el método <code>.get()</code> para poder acceder a parámetros de tipo GET.

El método <code>.get()</code> recibe como parámetro el nombre del parámetro que queremos recuperar, lo que sería la clave.

La estructura sería:

~~~python
response.args.get('clave','')
~~~

Si nos invocan mediante un método GET con la cadena:

<samp>?nombre=Victor</samp>

Podremos acceder a dicho parámetro de la siguiente forma:

~~~python
nombre = request.args.get('nombre','')
~~~

#### Acceso a Parámetros POST





[ManualFlask]: http://www.manualweb.net/flask/
[ManualPython]: http://www.manualweb.net/python/
[ManualHTML]: http://www.manualweb.net/html/
[ManualJavascript]: http://www.manualweb.net/javascript/
[ManualCSS]: http://www.manualweb.net/css/
