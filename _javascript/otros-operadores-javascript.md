---
				title: Otros Operadores Javascript
				permalink: /javascript/otros-operadores-javascript/
				excerpt: "Javascript cuenta con muchos operadores, además de los generales, como son el operador cadena, coma, ternario, delete, typeof, void, in e instanceof."
				tags: [operadores,operador_ternario,operador_cadena,void,instanceof,operador_delete,typeof]
				image:
  					path: /img/covers/javascript-cover.jpg
				---
			
## Operadores de Cadena


Para manipular cadenas contamos con el operador `+`. En el caso de que los dos operandos sean cadenas el operador `+` concatena el contenido de las dos cadenas.


```javascript
console.log ('Hola ' + 'Mundo'); // Hola Mundo
```


También podemos utilizarlo junto con el operador de asignación:


```javascript
let cadena1 = 'Hola ';
console.log (cadena1 += 'Mundo'); // Hola Mundo
```


## Operador ternario


El **operador ternario** en [Javascript](https://www.manualweb.net/javascript/) es una forma de acortar una estructura de condición. Es decir, nos permite el tomar una decisión sin utilizar un `if`.


El **operador ternario** tiene la siguiente estructura:


```javascript
condicion ? valor1: valor2;
```


En el caso de que la condición se cumpla se devolverá el valor1, y en el caso de que no se cumpla se devolverá el valor 2.


Por ejemplo podemos saber si un número es par o impar de la siguiente forma:


```javascript
let numero = 3;
let paroimpar = (numero %2 ==0)?'par':'impar';
```


## Operador coma


El **operador coma** es utilizado dentro de los bucles `for` para poder actualizar varias variables dentro del bucle.


```javascript
for (a=0, b=9;a<10; a++,b--)
  console.log(a + "," + b);
```


El **operador coma** devuelve siempre el valor del último operando.


## Operador delete


El operador `delete` nos permite eliminar una propiedad de un objeto. La sintaxis sería la siguiente:


```javascript
delete objeto.propiedad
```


Aunque todavía no hemos explicado qué es un objeto pensemos que **es un elemento que puede tener muchas propiedades o variables**. Así podríamos tener el siguiente objeto coche, que tiene dos propiedades _marca_ y _modelo_:


```javascript
var coche = {
    marca: "Tesla",
    modelo: "Model 3"
};

console.log(coche.marca); // Tesla
```


Podíamos eliminar una propiedad del objeto mediante el operador `delete`. Así podríamos eliminar la propiedad _modelo_ escribiendo:


```javascript
delete coche.modelo;
```


## Operador typeof


El operador `typeof` nos permite conocer el tipo de dato del operando. La sintaxis sería la siguiente:


```javascript
typeof operando;
```


Así podremos saber si el operando es una _cadena_, un _número_, una _función_, un _objeto_ o _no está definido_.


Veamos cómo se comportaría por código:


```javascript
typeof 'cadena'; //string
typeof 8; // number
typeof function suma(a,b) { return a+b }; // function
typeof ['A','B','C']; // object
typeof nodefinido; // undefined.
```


## Operador void


El operador `void` se utiliza para indicar que la expresión evaluada no da un valor de retorno. La sintaxis es:


```javascript
void (expresion)
```


Así, si escribimos lo siguiente:


```javascript
console.log(void(2+4));
```


Nos devolverá `undefined` como valor.


## Operador in


El operador `in`. Nos permite evaluar si un objeto tiene una determinada propiedad. La sintaxis es la siguiente:


```javascript
propiedad in objeto
```


De esta manera, si volvemos a nuestro objeto coche.


```javascript
var coche = {
    marca: "Tesla",
    modelo: "Model 3"
};
```


Podemos chequear si el objeto coche tiene la propiedad marca de la siguiente manera:


```javascript
'marca' in coche; //true
'km' in coche;    //false
```


## Operador instanceof


El operador `instanceof` nos permite saber si un objeto es de un tipo un otro. La sintaxis del operador `instanceof` es la siguiente:


```javascript
objeto instanceof tipoObjeto
```


Volvemos a nuestro objeto Coche, el cual ahora convertimos en clase. Una clase nos permite crear muchos objetos de ese tipo. Y creamos dos objetos `c1` y `c2` de tipo Coche.


```javascript
function Coche(marca,modelo){
    this.marca = marca;
    this.modelo = modelo;
}

c1 = new Coche('Tesla','Model 3');
c2 = new Coche('Ford','Mustang');
```


Ahora mediante el operador `instanceof` podemos comprobar si estos objetos son de tipo Coche o de otro tipo.


```javascript
console.log(c1 instanceof Coche); // true
console.log(c2 instanceof Date);  // false
```

