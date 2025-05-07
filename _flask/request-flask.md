---
title: Request Flask
date: 2023-12-17
last_modified_at: 2023-12-17
permalink: /flask/request-flask/
excerpt: "Cómo utilizar el Request Flask para poder pasar parámetros vía GET y POST al servidor."
tags: [request,response,post,get]
image:
  path: /img/covers/flask-cover.png
---

El contenido que un cliente web manda al servidor siempre va almacenado en la Request. En [Flask](https://www.manualweb.net/flask/) la Request se representa mediante el objeto `request`


Para poder utilizar el objeto `request` deberemos de importarlo al principio de nuestro programa [Flask](https://www.manualweb.net/flask/):


```python
from flask import request
```


### Tipo de Request


Una de las primeras cosas para las que podemos utilizar el objeto `request` es la de saber el tipo de petición que nos hace el cliente: GET, POST, DELETE,… para ello el objeto `request` nos ofrece el atributo `.method`


Así podremos preguntar lo siguiente:


```python
if request.method == 'POST':
```


### Acceso a Parámetros


El objeto `request` nos servirá para acceder a la información que nos envíe el cliente. La principal información que nos envía son los parámetros, ya sean parámetros tipo GET o parámetros tipo POST.


### Acceso a Parámetros GET


Para accerder a un parámetro de tipo GET, que son aquellos que vienen como una lista de claves/valor dentro de la URL de petición.


?parametro1=valor1&parametro2=valor2&…&parametroN=valorN


El objeto `request` nos ofrece la colección `.args` y el método `.get()` para poder acceder a parámetros de tipo GET.


El método `.get()` recibe como parámetro el nombre del parámetro que queremos recuperar, lo que sería la clave.


La estructura sería:


```python
response.args.get('clave','')
```


Si nos invocan mediante un método GET con la cadena:


**?nombre=Victor**


Podremos acceder a dicho parámetro de la siguiente forma:


```python
nombre = request.args.get('nombre','')
```


### Acceso a Parámetros POST

