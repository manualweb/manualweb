---
title: Sintaxis HTML
permalink: /html/sintaxis-html/
excerpt: "La sintaxis HTML se compone de elementos, atributos y entidades. También hay que conocer cómo poner comentarios o gestionar los espacios en blanco y saltos de línea."
tags: [elemento,atributo,entidad]
image:
  path: /img/covers/html-cover.png
---

Dentro del [HTML](https://www.manualweb.net/html/) vamos a encontrar diferentes estructuras que deberemos de diferenciar. En primer lugar están **los elementos** que es la principal estructura del lenguaje y los que conforman las páginas web.


A su vez los elementos contendrán **atributos**. Los atributos dan más especificidad al comportamiento de los elementos, permitiendo parametrizarlos.


## Los elementos HTML


Los elementos [HTML](https://www.manualweb.net/html/) son los que configuran la estructura de la página. También son llamados en algunos sitios como etiquetas, derivado del tema del lenguaje de marcado. Si bien su nombre correcto es el de elementos.


Todo elemento se encierra entre los símbolos **menor que <** y **mayor que >**:


```html
<elemento>
```


Dentro de los elementos [HTML](https://www.manualweb.net/html/) encontramos dos tipos:

- Elementos que tienen un inicio y un cierre
- Elementos únicos

Los **elementos que tienen un inicio y un cierre** permiten tener a otros elementos u otro contenido anidado, es decir, a otros elementos o directamente texto. La estructura de los elementos de inicio y cierre es la siguiente:


```html
<elemento> contenido| subelementos </elemento>
```


Como podemos apreciar el elemento de cierre se precede de una barra invertida.


Algunos de estos elementos son [`p`](https://w3api.com/HTML/p/), [`div`](https://w3api.com/HTML/div/), [`ul`](https://w3api.com/HTML/ul/),…


En el caso de los elementos únicos, estos no permiten anidar contenido y aparecen de forma aislada. Su estructura es la siguiente:


```html
<elemento />
```


Como podemos apreciar la barra invertida se encuentra al final y dentro del elemento. Algún ejemplo de estos elementos es [`img`](https://w3api.com/HTML/img/), [`br`](https://w3api.com/HTML/br/),…


## Atributos en HTML


Los elementos pueden ser parametrizados mediante los atributos. Los atributos siguen la estructura nombre/valor y se deberán de poner antes del cierre del elemento.


La estructura de definición de los atributos es la siguiente:


```html
<elemento atributo="valor">
```


El valor del atributo estará delimitado mediante comillas simples o comillas dobles.


## Entidades en HTML


Otra estructura que nos podemos encontrar dentro de una página [HTML](https://www.manualweb.net/html/) son las entidades. Las entidades **empiezan por un ampersand &**, seguidas del **código de la entidad** -que puede ser numérico o alfanumérico- y **finalizan en un punto y coma ;**


La estructura de una entidad en [HTML](https://www.manualweb.net/html/) será la siguiente:


```html
&código;
```


Las entidades nos sirven para representar símbolos que son parte de la estructura del lenguaje, como es el caso de los símbolos mayor y menor. O símbolos específicos de un determinado juego de caracteres, cómo podrían ser símbolos de monedas o caracteres especiales.


```html
&lt;      representa <
&gt;      representa >
&quot;    representa '
&eur;     representa €
```


Ya hablaremos en detalle sobre ellas más adelante.


## Comentarios en HTML


Para poder insertar un comentario dentro de las páginas [HTML](https://www.manualweb.net/html/) deberemos de utilizar la siguiente estructura:


```html
<!-- comentario -->
```


El comentario puede tener varias líneas de texto.


```html
<!-- esto es
         un comentario -->
```


## Normas de codificación en un documento HTML


Existen una serie de normas de codificación que hay que conocer y seguir dentro del lenguaje [HTML](https://www.manualweb.net/html/) a la hora de crear nuestras páginas web.


### No sensible a mayúsculas


El lenguaje [HTML](https://www.manualweb.net/html/) no es sensible a mayúsculas. Es decir, que da igual que escribamos nuestros elementos y atributos en mayúsculas y/o minúsculas. Si bien, por convenio, **se recomienda que tanto los elementos como los atributos sean escritos en minúsculas**.


### Espacios en blanco


Si insertamos un espacio en blanco dentro de nuestra página se generará un espacio en blanco dentro de la visualización. Si bien si juntamos varios espacios en blancos, **estos solo generarán un único espacio en blanco**.


Lo mismo ocurre si insertamos una o varias tabulaciones. Estas solo generan un único espacio en blanco. Si queremos crear un conjunto de espacios en blanco seguidos deberemos de utilizar la entidad:


```html
&nbsp;
```


Cada vez que insertemos esta entidad generamos un espacio en blanco.


### Saltos de línea


Los saltos de línea que insertemos dentro de la página web no tienen ningún efecto de cara a la renderización del contenido. Por lo tanto, un salto de línea en el código no genera nada.


Si queremos insertar un salto de línea dentro de nuestra página web deberemos de utilizar el elemento [`br`](https://w3api.com/HTML/br/).


```html
<br/>
```

