---
layout: default
---

<div class="header-container jumbotron">
    <div class="container">
        <h1>Tutoriales de programación</h1>

        <p>Te ayudamos a aprender con diferentes lenguajes de programación y frameworks para que puedas convertirte en un experto programador.</p>
        <p><a class="btn btn-primary btn-lg" href="{{ "/tutoriales/" | prepend: site.baseurl }}" role="button">Empieza a aprender</a></p>
    </div>
</div>


<div class="container">

    <div class="row">
        <div class="col-md-6">
            <h2 class="header-light regular-pad">¿Qué es Manual Web?</h2>
            <blockquote>
              <p>Manual Web es una página que contiene diferentes manuales, tutoriales o <strong>guías sobre lenguajes de programación en español</strong>.
                 Cada uno de los tutoriales de Manual Web intentan <strong>explicar paso a paso y de una forma sencilla</strong> el lenguaje de programación tratado.
                 Así, mediante <strong>ejemplos detallados</strong> vamos conociendo en detalle lenguajes como <a href="{{site.baseurl}}/java/">Java</a>, <a href="{{site.baseurl}}/html5/">HTML5</a>, <a href="{{site.baseurl}}/javascript/">Javascript</a>, <a href="{{site.baseurl}}/mongodb/">MongoDB</a>,...
              </p>
            </blockquote>
        </div>
        <div class="col-md-6 text-center">
            <img src="img/lenguajes-programacion.png" alt="" class="img-responsive">
        </div>
    </div>

    <hr>

    <div class="row">
        <div class="col-sm-4">
            <h1 class="text-center"><i class="fa fa-pencil" aria-hidden="true"></i></h1>
            <h3 class="text-center">Documentación Colaborativa</h3>
            <p>Todos los manuales están publicados en <a href="https://github.com/manualweb/manualweb">GitHub</a> y puedes contribuir mejorando su contenido o corrigiendo erratas. Ayudando a todos los usuarios que estamos aprendiendo.</p>            
        </div>
        <div class="col-sm-4">
            <h1 class="text-center"><i class="fa fa-graduation-cap" aria-hidden="true"></i></h1>
            <h3 class="text-center">Tutoriales didácticos</h3>
            <p>El material es sencillo de entender y se enfoca de forma didáctica. Los conceptos se explican de una forma sencilla que te ayuda a ir paso a paso adquiriendo nuevo conocimiento.</p>  
        </div>
        <div class="col-sm-4">
            <h1 class="text-center"><i class="fa fa-code" aria-hidden="true"></i></h1>
            <h3 class="text-center">Ejemplos ejecutables</h3>
            <p>Los manuales vienen acompañados con un <a href="https://github.com/manualweb/">repositorio de ejemplos ejecutables</a>. De esta manera puedes ir siguiendo y programando los ejemplos que acompañan al tutorial.</p>
        </div>
    </div>

    {% include ads.html %}

    <hr>

    <h2 class="header-light regular-pad">Tutoriales</h2>

    <div class="row">
        <div class="col-md-2 col-sm-4 col-xs-6">
          <a href="{{site.baseurl}}/java/"><img src="{{site.baseurl}}/img/logos/java.png" class="img-thumbnail">
          <p class="text-center">Tutorial Java</p></a>
        </div>

        <div class="col-md-2 col-sm-4 col-xs-6">
          <a href="{{site.baseurl}}/html5/"><img src="{{site.baseurl}}/img/logos/html5.png" class="img-thumbnail">
          <p class="text-center">Tutorial HTML5</p></a>
        </div>

        <div class="col-md-2 col-sm-4 col-xs-6">
          <a href="{{site.baseurl}}/emberjs/"><img src="{{site.baseurl}}/img/logos/emberjs.png" class="img-thumbnail">
          <p class="text-center">Tutorial EmberJS</p></a>
        </div>

        <div class="col-md-2 col-sm-4 col-xs-6">
            <a href="{{site.baseurl}}/mongodb/"><img src="{{site.baseurl}}/img/logos/mongodb.png" class="img-thumbnail">
          <p class="text-center">Tutorial MongoDB</p></a>
        </div>

        <div class="col-md-2 col-sm-4 col-xs-6">
            <a href="{{site.baseurl}}/javascript/"><img src="{{site.baseurl}}/img/logos/javascript.png" class="img-thumbnail">
          <p class="text-center">Tutorial Javascript</p></a>
        </div>


        <div class="col-md-2 col-sm-4 col-xs-6">
          <a href="{{site.baseurl}}/tutoriales/"><img src="{{site.baseurl}}/img/mas.png" class="img-thumbnail">
          <p class="text-center">Más tutoriales...</p></a>
        </div>

    </div>

    &nbsp;


</div>
