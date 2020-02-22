





# Objeto Command
El **objeto command** es el que Spring MVC utiliza para los bean de respuesta de formularios. Es decir, objetos que representan el modelo de campos de un formulario y un conjunto de setters y getters para acceder a dichos campos.


#Thymeleaf

1. Hola Mundo con Thymeleaf
2. Formularios




En Thymeleaf hay que especificar el **objeto command** usando un ```th:object``` en la etiqueta ```form```.


~~~
<form action="#" th:action="@{/seedstartermng}" th:object="${seedStarter}" method="post">
...
</form>
~~~
