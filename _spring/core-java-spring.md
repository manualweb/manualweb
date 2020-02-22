---
title: Core Java Spring
permalink: /spring/core-java-spring/
---


# Core Java Spring

## Introducción al Spring IoC Container

Es un proceso por el cual los objetos definen sus dependencias únicamente mediante los argumentos del constructor. Argumentos a un método de factoría o propiedades que son establecidas en la instancia del objeto una vez construido o devuelto por un método de factoría.

El contenedor es el que inyecta las dependencias cuando crea el bean.

Este proceso es el inverso, de ahí el nombre de Inversión de Control (IoC). El propio bean controla la creación de instancias o la ubicación de sus dependencias mediante la construcción directa de clases o con mecanismos como el patrón Service Locator.

~~~java
org.springframework.beans
org.springframework.context
~~~

Son los paquetes básicos en la gestión del Contenedor IoC.

El interface ```BeanFactory``` proporciona un mecanismo de configuración avanzado capaz de manejar cualquier tipo de objeto. Y ```ApplicationContext``` es un subinterface de ```BeanFactory``` que añade las capacidades de la programación orientada a aspectos (AOP).

Así el ```BeanFactory``` proporciona la funcionalidad básica de configuración en el framework de Spring, mientras que el ```ApplicationContext``` añade capacidades más empresariales, incluyendo el propio ```BeanFactory```.


## El Contenedor

El contenedor se representa mediante la clase ```org.springframework.context.ApplicationContext```, el cual es el encargado de: instanciar, configurar y ensamblar los beans.

Para poder hacer las labores de instanciacón, configuración y ensamblado el contenedor se apoya en la metainformación de configuración asociada. La metainformación de configuración se representa mediante [XML][ManualXML], anotaciones [Java][ManualJava] o código [Java][ManualJava].

## Bean

Los objetos manejados por el contenedor Spring IoC son definidos como **beans**.
Los **beans** son creados por la metadata de configuración que se pasa al contenedor. Dentro de la metadata de configuración se tiene que reflejar:

* Cómo crear el bean.
* Los detalles del ciclo de vida del bean.
* Las dependencias del bean.

Las propiedades de un bean son:

* **class**, es la clase que se utiliza para poder crear el bean.
* **name**, es el identificador único del bean. También puede ser utilizad el atributo **id**.
* **scope**, define el ámbito de los objetos creados.
* **constructor-arg**, se utiliza para inyectar las dependencias.
* **properties**, es utilizado para inyectar las dependencias.
* **autowiring mode**, utilizado para inyectar las dependencias.
* **lazy-initialization mode**, indica al contenedor IoC que cree la instancia del bean en el primer momento que sea requerido, en vez de hacerlo en el arranque.
* **initialization mode**, es un método de callback que será invocado cuando todas las propiedades del bean han sido configuradas por el contenedor.
* **destruction method**, es un método de callback que será utilizado por el contenedor una vez que el bean sea destruido.

Las formas de proporcionar metadata de configuración al contenedor son tres:

* Configuración basada en un fichero XML
* Configuración basada en anotaciones
* Configuración basada en Java


~~~xml
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

   <!-- A simple bean definition -->
   <bean id = "..." class = "...">
      <!-- collaborators and configuration for this bean go here -->
   </bean>

   <!-- A bean definition with lazy init set on -->
   <bean id = "..." class = "..." lazy-init = "true">
      <!-- collaborators and configuration for this bean go here -->
   </bean>

   <!-- A bean definition with initialization method -->
   <bean id = "..." class = "..." init-method = "...">
      <!-- collaborators and configuration for this bean go here -->
   </bean>

   <!-- A bean definition with destruction method -->
   <bean id = "..." class = "..." destroy-method = "...">
      <!-- collaborators and configuration for this bean go here -->
   </bean>

   <!-- more bean definitions go here -->

</beans>
~~~

## Ámbitos del Bean
Cuando definimos un bean podemos definir su ámbito (scope). Por ejemplo, si queremos que el contenedor cree una instancia del bean cada vez que se necesite, el bean tendrá el atributo **scope** a un valor **prototype**.

Si por otro lado queremos que el contenedor devuelva todas las veces la misma instancia del bean cada vez que este se necesite, el atributo **scope** tendrá un valor **singleton**.

Los ámbitos que podemos definir dentro de [Java Spring][JavaSpringTutorial] son:

* **singleton**, define una única instancia del bean dentro del contenedor Spring IoC.
* **prototype**, podemos tener múltiples instancias del objeto.
* **request**, ajusta el ámbito del bean a la una petición http (Http Request).
* **session**, ajusta el ámbito del bean a una sesión http (Http Session).
* **global-session**, ajusta el ámbito a una sesión http global.


## Ciclo de Vida del Bean





[JavaSringTutorial]: http://www.manualweb.net/java-spring/
