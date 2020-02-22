---
title: ¿Qué es Java Spring?
permalink: /spring/que-es-java-spring/
---


Java Spring es un framework Java basado en la **Inversión de Control (IoC)** creado por Rod Johnson. Java Spring facilita el desarrollo de aplicaciones Java EE.

En algunos casos se le conoce como un framework de frameworks ya que da soporte para otros frameworks como Struts, Hibernate, Tapestry,...


## ¿Qué es la Inversión de Control (IoC)?
También conocido como inyección de dependencias.

La inversión de control (IoC) es un patrón de diseño el cual intenta eliminar las dependencias dentro del código fuente. De esta manera el código es más fácil de mantener y testear.

En el siguiente código los objetos Persona y Domicilio están "fuertemente acoplados"

```
class Persona {
  Domicilio domicilio;

  Persona() {
    this.domicilio = new Domicilio();
  }
}
```

Si queremos tener los objetos "débilmente acoplados" mediante una inversión de control escribiremos lo siguiente:

```
class Persona {
  Domicilio domicilio;

  Persona(Domicilio domicilio) {
    this.domicilio = domicilio;
  }
}
```

## ¿Qué nos ofrece el Spring Framework?

### Templates Predefinidos
Spring proporciona plantillas para JDBC, Hibernate, JPA,... Lo cual nos permite reducir la cantidad de código a escribir para poder resolver nuestro código.

Por ejemplo, mediante el *JdbcTemplate* no es necesario escribir la creación de conexión, gestión de excepciones, ejecutar una sentencia, cerrar la conexión,...

### Débilmente Acoplado
Las aplicaciones son débilmente acoplados mediante la inyección de dependencias.

### Fácil de testear
La inyección de dependencias facilita la ejecución de los test. No se requiere de un servidor para poder ejecutar los test.

### Framework Ligero
El framework está implementado mediante POJO lo que hace que sea un framework ligero. El framework Spring no requiere utilizar herencia o implementar interfaces.

### Desarrollo Rápido
La inyección de dependencias y el soporte de varios frameworks hace que el desarrollo de aplicaciones Java EE con Spring Framework sea muy rápido.

### Potente Abstracción
Java Spring proporciona abstracción de especificaciones como JMS, JDBC, JPA,...

### Soporte Declarativo
Proporciona soporte declarativo para caché, validación, transacciones y formateo.
