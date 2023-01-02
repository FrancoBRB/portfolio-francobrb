const $list = document.querySelector(".learning__items");
const $subtitle = document.querySelector(".learning__subtitle");
const $argp = document.querySelector("#argp");
const $one = document.querySelector("#one");
const $fich = document.querySelector("#fich");

$argp.addEventListener("click", function () {
  $subtitle.innerHTML = "Argentina Programa";
  $list.innerHTML = `
    <li class="learning__item">
        Introducción a desarrollo web y aplicaciones: Metodologías ágiles, gestión de proyectos y el uso de Github. Conceptos, actividades y herramientas que requiere un programador Front End y Back End.
    </li>
    <li class="learning__item">
        Frontend Estático:  HTML, CSS, y Javascript. Comprendiendo los conceptos claves, sus estructuras, estilos y funciones.
    </li>
    <li class="learning__item">
        Desarrollo Web Dinámico con Angular.
    </li>
    <li class="learning__item">
        Bases de datos: Instalar, diseñar y programar bases de datos aplicando conceptos de normalización e integridad para la persistencia de datos y generar relaciones complejas de acuerdo con diversos modelos de negocio.
    </li>
    <li class="learning__item">
        Buenas prácticas de programación: Conceptos y paradigmas de Programación Orientada a Objetos.
    </li>
    <li class="learning__item">
        Backend - Java EE parte I: Desarrollar programas a partir de algoritmos diseñados para generar o manipular estructuras complejas a nivel lógico y escalable de un proyecto de software.
    </li>
    <li class="learning__item">
        Backend - Java EE parte II: Desarrollo web con Java utilizando JSP, Servlets, Sockets y conexión con base de datos. Deploy de servicios y aplicaciones.
    </li>
    <li class="learning__item">
        Backend - Java Spring boot: Generar aplicaciones, conectar con base de datos y crear APIs para interconectar las funcionalidades a internet.
    </li>
    <li class="learning__item">
        Devops: Desarrollo y despliegue continuo en el desarrollo de software, profundizando en conceptos de ciberseguridad. Testing de software para aumentar la calidad de tus trabajos, apoyados en los estándares de la industria.
    </li>
    <li>
        <a class="learning_certified" target="”_blank”" href="#">
            Ver certificado.
        </a>
    </li>
    `;
    $one.classList.remove("activated");
    $fich.classList.remove("activated");
    $argp.classList.add("activated");
});

$one.addEventListener("click", function () {
  $subtitle.innerHTML = "Oracle Next Education";
  $list.innerHTML = `
    <li class="learning__item">
        Lógica de programación parte 1: Primeros pasos de manera práctica con el lenguaje JavaScript. Variables , funciones y para qué sirven. Automatizando actividades repetitivas.
    </li>
    <li class="learning__item">
        Lógica de programación parte 2: Usar condiciones dentro de programas, iteraciones con ciclos for y while, interacción con el usuario y el concepto de arrays, cuando y como usarlos.
    </li>
    <li class="learning__item">
        Lógica de programación parte 3: Practicando con juegos y animaciones, uso de canvas para generar diagramas y animaciones.
    </li>
    <li class="learning__item">
        HTML5 y CSS3 parte 1:  Que es HTML y CSS, estructura básica de un archivo HTML, definir estilos para elementos usando CSS, desarrollar una página web desde cero.
    </li>
    <li class="learning__item">
        HTML5 y CSS3 parte 2: Posicionamiento por CSS, inline-block, lidiar con bordes y capturar eventos con CSS. Crear encabezado, cuerpo y pié de página de una página web.
    </li>
    <li class="learning__item">
        HTML5 y CSS3 parte 3: Crear formularios, campos para dispositivos móviles, presentar información en tablas. Trabajar con transiciones y transformaciones CSS.
    </li>
    <li class="learning__item">
        HTML y CSS3 Avanzado: Contenido externo a tu página HTML, como fuentes, videos y mapas. Pseudoclases y los pseudoelementos. Selectores avanzados, unidades CSS y diseño responsivo.
    </li>
    <li class="learning__item">
        CSS Grid: Utilizar grid para calcular y alinear elementos, simplificar la creación de layouts complejos.
    </li>
    <li class="learning__item">
        Flexbox: Utilizar flexbox para posicionar tus elementos en la página, diversas propiedades del flexbox y como utilizalas, elaborar un sitio web responsivo con flexbox.
    </li>
    <li class="learning__item">
        Git y GitHub: Qué es un sistema de control de versión, guardar y recuperar código en diferentes versiones. Uso de GitHub.
    </li>
    <li class="learning__item">
        LinkedIn: Como hacer que tu perfil trabaje por ti
    </li>
    <li class="learning__item">
        Foco: Enfocarse trae más resultados para el día a día
    </li>
    <li class="learning__item">
        Hábitos: Ser productivo para cumplir sus metas personales
    </li>
    <li class="learning__item">
        Productividad: Estrategias para actividades diarias
    </li>
    <li class="learning__item">
        Y mucho mas...
    </li>
    <li>
        <a class="learning_certified" target="”_blank”" href="https://app.aluracursos.com/user/francojb5/fullCertificate/2f80054df942f9aed09bf9b0efcb3ff8">
            Ver certificado completo.
        </a>
    </li>
    
    `;
    $one.classList.add("activated");
    $fich.classList.remove("activated");
    $argp.classList.remove("activated");
});

$fich.addEventListener("click", function () {
  $subtitle.innerHTML = "UNL Fich";
  $list.innerHTML = `
    <li class="learning__item">
        Introducción al Lenguaje C++: Constantes y variables, tipos de datos simples, ambito de validez de las variables. Flujos de entrada y salida, edición, prueba y depuración de programas.
    </li>
      <li class="learning__item">
        Estructuras de control C++: If, switch, while, do-whles, for, break, continue.
    </li>
    <li class="learning__item">
        Funciones: Prototipo e implementación, pasaje de parámetros por valor y por referencia. Funciones predefinidas y archivos de inclusión o encabezado, sobrecarga de funciones y recursividad. 
    </li>
    <li class="learning__item">
        Estructuras de datos en C++: Arreglos lineales y multidimensionales, structs y la clase vector de la STL.
    </li>
    <li class="learning__item">
        Aritmética de punteros en C++: Arreglos, funciones y punteros.
    </li>
    <li class="learning__item">
        Conceptos de la POO: Clases, instancias, mensajes, herencia, encapsulamiento,  polimorfismo.  El modelo de Objetos en C++, clases y encapsulamiento.
    </li>
    <li class="learning__item">
        Sobrecarga de operadores, operadores miembro y operadores de funciones amigas. Restricciones de la sobrecarga de operadores en C++ y operaciones con objetos.
    </li>
    <li class="learning__item">
        La clase string:  Descripción y aplicaciones de los métodos de la clase string. Flujos de entrada y salida en C++. Procesamiento de un archivo de textos.
    </li>
    <li class="learning__item">
        Elementos de programación genérica:  Templates, plantillas de clase y de función.
    </li>
    <li class="learning__item">
        STL: Contenedores, iteradores y algoritmos. Clases vector, list, deque, map.
    </li>
    <li class="learning__item">
        Diseño de interfaces gráficas: Herramientas para Windows y para Software libre, componentes visuales.
    </li>    
    `;
    $one.classList.remove("activated");
    $fich.classList.add("activated");
    $argp.classList.remove("activated");
});
