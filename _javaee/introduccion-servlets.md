---
title: Introducción a los Servlets
permalink: /javaee/introduccion-servlets/
redirect_from: /java-ee/introduccion-a-los-servlets/
---

## ¿Qué son los servlets?

Los servlets son modulos java que nos sirven para extender las capacidades de los servidores web. Aunque es una definición un poco ambigua los servlets son programas para los servidores, mientras que los applets son programas para los clientes y los middlets los programas para microdispositivos. Dentro de una evolución cronologica los servlets son la siguiente etapa de los CGI. En algunas bibliografias son referenciados como CGI de 2ª generación, la cual comparten con lenguajes como [ASP][1], [PHP][2] y [JSP][3] (que al fin y al cabo son servlets). El uso de los servlets viene a ser en un tanto por ciento elevando el del desarrollo de páginas web dinámicas (en contenido y diseño) apoyándose además en la potencia que nos proporciona el lenguaje Java.

## Para qué podemos utilizar los servlets

Podremos desarrollar desde un simple servlet que nos muestre una página web simple saludandonos hasta uno que se conecte a una base de datos utilizando un pool de conexiones, encriptando la información en su envio, accediendo a bases de datos distribuidas y manteniendo su información de forma persistente en un EJB. Todo ello para conseguir una información dinámica. A partir de aqui las posibilidades son "infinitas".

## Ciclo de vida del servlet

Describir un servlet es como describir una maquina de estados. Desde el momento que inicializamos el servlet hasta que el servlet es destruido, este, pasará por una serie de estados dependiendo de cada una de las situaciones ante las que se encuentre. Muy por encima podríamos decir que la secuencia de acciones que se producen en un servlet son las siguientes. La primera vez que realicemos una petición sobre el servlet se ejecutará un método de inicio, denominado [init][4], en el cual inicializaremos las variables generales. Una vez que nos hemos inicializado nos pondremos a la escucha en espera de peticiones. Cada una de las peticiones que recibamos serán atendidas en hilos de ejecución diferentes, a no ser que indiquemos lo contrario. Dependiendo de como llegen los datos (mediante post o get) al servlet se ejecutará un método u otro [doPost][5] o [doGet][6]. Por último el servlet tendrá un estado de finalización en el cual eliminará las variables creadas en su inicialización, conexiones a bases de datos,... este el el método destroy.

## Escribiendo un primer servlet

A la hora de codificar lo primero que debemos de saber es que nuestro servlet deberá de heredar de la clase [HttpServlet][7] la cual contendrá todos los métodos necesarios para generar un servlet. Dicha clase la podemos encontrar en el [paquete javax.servlet][8].

~~~java
import javax.servlet.*;
public class MiServlet extends HttpServlet {}
~~~

Solamente deberemos de sobrescribir aquellos métodos que consideremos oportunos a implementar en el servlet. Si por ejemplo no necesitásemos realizar ninguna inicialización, no haría falta el reescribir el método [init][4]. Así un primer servlet que mostrase la frase, como no, de "Hola Mundo" quedaría de la siguiente forma:

~~~java
import javax.servlet.*;
import javax.servlet.http.*;

public class MiPrimerServlet extends HttpServlet {
  public void doGet (HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    PrintWriter out; out = res.getWriter();
    res.setContentType("text/html");
    out.println("");
    out.println("");
    out.println("");
    out.println("Este es mi Primer Servlet");
    out.println("");
  }
}
~~~

Como se puede apreciar, la salida que se está generando es una página web (sus etiquetas). Es decir, recalcamos la idea de que generamos el contenido de una página web dinámicamente.

 [1]: http://www.manualweb.net/tutorial-asp/ "ASP"
 [2]: http://www.manualweb.net/tutorial-php/ "PHP"
 [3]: http://www.manualweb.net/tutorial-jsp/ "JSP"
 [4]: http://www.w3api.com/wiki/Java:Servlet.init() "init()"
 [5]: http://w3api.com/wiki/Java:HttpServlet.doPost() "doPost()"
 [6]: http://www.w3api.com/wiki/Java:HttpServlet.doGet() "doGet()"
 [7]: http://www.w3api.com/wiki/Java:HttpServlet "HttpServlet"
 [8]: http://w3api.com/wiki/Categor%C3%ADa:Java_Servlet "javax.servlet"
