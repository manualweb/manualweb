---
title: Instalar Dart
date: 2024-02-03
last_modified_at: 2024-02-03
permalink: /dart/instalar-dart/
excerpt: "Alternativas para poder instalar Dart en Windows, Linux o Mac. O bien como poder ejecutar Dart en un contenedor Docker."
tags: [windows,mac,linux,docker,macports,brew,apt-get]
image:
  path: /img/covers/dart-cover.webp
---

## Cómo instalar Dart


Para instalar [Dart](https://www.manualweb.net/dart/) en su sistema, primero tienes que visitar su sitio web oficial en [https://dart.dev](https://dart.dev/). Ahí, encontrará [instrucciones detalladas para diferentes sistemas operativos, incluyendo Windows, MacOS y Linux](https://dart.dev/get-dart).


Lo que necesitas es **instalar el SDK de Dart** para poder crear las estructuras de código y poder compilar el código fuente. Aunque, si quieres, puedes, incluso, [compilar el SDK de Dart](https://github.com/dart-lang/sdk/wiki/Building).


### Instalar Dart en Windows


En Windows, para las versiones Windows 10 y Windows 11, tenemos que abrir una consola de comandos y ejecutar los siguientes comandos. El primero nos permitirá instalar [Dart](https://www.manualweb.net/dart/):


```shell
C:\> choco install dart-sdk
```


Y también podremos actualizar la versión de [Dart](https://www.manualweb.net/dart/):


```shell
C:\> choco upgrade dart-sdk
```


Y ya tendremos instalado las herramientas de [Dart](https://www.manualweb.net/dart/) en la ruta `C:\tools\dart-sdk`


### Instalar Dart en MacOS


En la documentación oficial nos recomiendan el utilizar [Home Brew](https://brew.sh/) como gestor de paquetes en Mac para realizar la instalación. De esta manera podremos instalar [Dart](https://www.manualweb.net/dart/) de la siguiente forma:


```shell
$ brew tap dart-lang/dart
$ brew install dart
```


También podemos instalar una versión en concreto mediante:


```shell
$ brew install dart@2.12
```


Y podremos actualizar la versión mediante el siguiente comando:


```shell
$ brew upgrade dart
```


Otra opción es utilizar [Marc Ports](https://www.macports.org/) para gestionar los paquetes del Mac. En este caso podremos instalar [Dart](https://www.manualweb.net/dart/) como sigue:


```shell
$ sudo port install dart-sdk
```


### Instalar Dart en Linux


En este caso nos apoyamos en **apt-get** para poder instalarlo. Primero necesitamos instalar el protocolo para poder acceder a los repositorios vía https.


```shell
$ sudo apt-get update
$ sudo apt-get install apt-transport-https
$ wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor -o /usr/share/keyrings/dart.gpg
$ echo 'deb [signed-by=/usr/share/keyrings/dart.gpg arch=amd64] https://storage.googleapis.com/download.dartlang.org/linux/debian stable main' | sudo tee /etc/apt/sources.list.d/dart_stable.list
```


Luego ya podemos pasar a realizar la instalación de [Dart](https://www.manualweb.net/dart/):


```shell
$ sudo apt-get update
$ sudo apt-get install dart
```


## Utilizar Dart con Docker


Si eres de los que nos les gusta instalar compiladores en tu ordenador, o porque no tienes suficientes permisos para poder instalarlos, tienes la alternativa de poder utilizar [Dart](https://www.manualweb.net/dart/) con [Docker](https://arquitectoit.com/docker/que-es-docker/). Es decir, utilizar una [imagen de Docker](https://arquitectoit.com/docker/que-es-docker/) para poder compilar con [Dart](https://www.manualweb.net/dart/).


En este caso [la imagen oficial de Dart la puedes encontrar en el Docker Hub](https://hub.docker.com/_/dart) y te la puedes descargar de la siguiente forma:


```shell
$ docker pull dart
```


Ahora podremos ejecutar la imagen y crear un contenedor en el cual podemos acceder y copiar nuestro código para poder interactuar con el código [Dart](https://www.manualweb.net/dart/).


```shell
% docker run -it -v "$PWD/":/usr/miusuario dart /bin/bash
```


De esta forma ya sabemos como podemos instalar Dart o cómo podemos utilizar Dart con Docker para poder utilizarlo.

