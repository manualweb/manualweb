---
				title: Conversiones con Números Javascript
				permalink: /javascript/conversiones-con-numeros-javascript/
				excerpt: "El objeto Number nos permite hacer conversiones con números Javascript y obtener enteros, decimales, exponenciales,…"
				tags: [number,parseint,parsefloat,toexponential,tofixed,toprecision,tostring]
				image:
  					path: /img/covers/javascript-cover.jpg
				---
			
Una de las utilidades del objeto [`Number`](https://www.w3api.com/Javascript/Number/) es el poder realizar conversiones com números [Javascript](https://www.manualweb.net/javascript). Entre estas conversiones encontramos:

- Convertir a Número Enter
- Convertir a Número Decimal
- Convertir a Notación Exponencial
- Fijar Número de Decimales
- Ajustar Decimales con Precisión
- Convertir un Número a Cadena

## Convertir a Número Entero


Además podemos cambiar las cadenas de valores a diferentes formatos. Así mediante [`Number.parseInt()`](https://www.w3api.com/Javascript/Number/parseInt) podemos convertir un valor en un número entero.


Lo más normal es convertir una cadena que tenga un número en un entero. Para ello tendremos el siguiente código:


```javascript
let numero = '12';
console.log(numero + 4); // Devuelve 124

let numero_convertido = Number.parseInt(numero);
console.log(numero_convertido + 4); // Devuelve 16
```


Cuando tenemos un número en una cadena deberemos de saber la base en la que está codificado. Ya que no es lo mismo ‘10’ en base decimal que ‘110’ en base binaria, dónde es un 2. El método [`Number.parseInt()`](https://www.w3api.com/Javascript/Number/parseInt) puede recibir la base en la que queremos convertir un número como segundo parámetro.


Esto nos permitirá tener este código:


```javascript
let numero = '10';

let numero_convertido = Number.parseInt(numero);
console.log(numero_convertido + 1);

let numero_convertido_base = Number.parseInt(numero,2);
console.log(numero_convertido_base + 1);
```


En el caso de que el valor que le pasemos a [`Number.parseInt()`](https://www.w3api.com/Javascript/Number/parseInt)  no pueda ser convertido a un número, devolverá el valor `NaN`.


## Convertir a Número Decimal


Lo mismo que hemos hecho con los números enteros y el método [`Number.parseInt()`](https://www.w3api.com/Javascript/Number/parseInt) podemos hacerlo con números decimales y el método [`Number.parseFloat()`](https://www.w3api.com/Javascript/Number/parseFloat).


```javascript
let decimal = '12.6';
console.log(decimal + 4);

let decimal_convertido = Number.parseInt(decimal);
console.log(decimal_convertido + 4);
```


Y, al igual que lo que sucedía con [`Number.parseInt()`](https://www.w3api.com/Javascript/Number/parseInt), si el método [`Number.parseFloat()`](https://www.w3api.com/Javascript/Number/parseFloat) no consigue convertir el valor en un número decimal, devolverá un valor de `NaN`. Lo puedes comprobar mediante el siguiente código:


```javascript
let decimal = 'no soy un numero';
console.log(Number.parseFloat(decimal));
```


## Convertir a Notación Exponencial


Otra conversión que podemos realizar es la conversión de un número que hayamos creado con el objeto [`Number`](https://www.w3api.com/Javascript/Number/) a un número exponencial. Para ello tenemos el método [`.toExponential()`](https://www.w3api.com/Javascript/Number/toExponential) que nos devuelve el número en un formato con notación exponencial.


> Como vimos en el [apartado de literales en Javascript](https://manualweb.net/javascript/numeros-javascript/#n%C3%BAmeros-exponenciales) la notación de exponencial es aquella que incluye la letra e minúscula o E mayúscula.


El código utilizando el método [`.toExponential()`](https://www.w3api.com/Javascript/Number/toExponential) podría quedar de la siguiente manera:


```javascript
let numero = new Number('1000');
console.log(numero.toExponential());
```


## Fijar el Número de Decimales


De igual manera podemos indicar cuántos valores decimales queremos que tenga un número mediante el método [`.toFixed()`](https://www.w3api.com/Javascript/Number/toFixed). El método [`.toFixed()`](https://www.w3api.com/Javascript/Number/toFixed) recibe como parámetro el número de decimales que queremos manejar en el número.


```javascript
let numero = 123.4567;
console.log (numero.toFixed(2)); // Muestra 2 decimales 123.46
```


En este caso se eliminan los decimales que no se quieren mostrar, si bien no se redondea el número, solo se eliminan los despreciados.


## Ajustar Decimales con Precisión


Pero, si queremos eliminar los decimales sin perder la precisión, es decir, que se redondee el decimal, disponemos dentro del objeto [`Number`](https://www.w3api.com/Javascript/Number/) el método [`.toPrecision()`](https://www.w3api.com/Javascript/Number/toPrecision).


Es importante saber que el valor que se le pasa al método [`.toPrecision()`](https://www.w3api.com/Javascript/Number/toPrecision) es el total de números tanto enteros como decimales que queremos que muestre el número.


Por lo cual el código puede quedar de la siguiente forma:


```javascript
let numero = 123.4567;
console.log (numero.toPrecision(4));
// Muestra una precisión de 4 dígitos y un valor de 123.5

let otroNumero = 4.32;
console.log (otroNumero.toPrecision(4));
// Muestra una precisión de 4 dígitos y un valor de 4.320
```


## Convertir un número a cadena


Hasta ahora hemos visto cómo convertir valores a números o números a diferentes formatos. En este caso vamos a ver cómo realizar la operación inversa que es la de convertir un número a una cadena.


Para ello tenemos el método [`.toString()`](https://w3api.com/Javascript/Number/toString), el cual se aplica directamente sobre el valor numérico.


```javascript
let numero = 12;
console.log (numero + 4);
console.log(numero.toString() + 4);
```

