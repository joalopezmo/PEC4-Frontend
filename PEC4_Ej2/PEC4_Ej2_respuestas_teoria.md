- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC4-Frontend.git

**Respuestas teoricas**

***¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:***

El comando para crear un nuevo proyecto es el de ng new <vinoteca>

-Ficheros de configuración en la raíz del proyecto:
    o tsconfing.app.json : archivo de configuracion de typescript
    o angular.json :  archivo raiz que provee el espacion de trabajo para aplicacion y su configuracion por defecto     
    o package.json: archivo donde que crean los registros de las instalaciones de los paquetes que se adicionan en el poyecto.
    o .editorconfig: archivo que define el formato de estilos del codigo a aplicar 
    o .gitignore: archivo que especifica intencionadamente los archivos que git deberia ignorar en el control de versiones

-Directorio node_modules: directorio que contiene los paquetes que se instalan para el uso correcto de angular

-Directorio src:
    o index.html: archivo raiz html donde se crear la aplicacion de unica pagina
    o main.ts: archivo que es la entrada que complila la web.app, bootstrap y el appmodule para correr en el navegador
    o styles.css: archivo que contiene estilos globales a aplicarse en la aplicacion
    o test.ts: es un archivo que inicializa el ambiente de testeo y pruebas de angular 
    o polyfills.ts : archivo que permite espcificar compatibilidades en diferentes navegadores
    o Directorio environments: contiene ambietes para desarrollo default provistos por angular
    o Directorio assets: contiene cualquier tipo de archivo que el desarrollador crea para que sea accedido desde la SPA
    o Directorio app: contiene los archivos con el codigo principal relacionado con la aplicacion
        ▪ Ficheros app.component.* ficheros que contienen los bloques de creacion de la spa
        ▪ Fichero app.module.ts : fichero que le comunica a angular como las partes de la aplicacion deben relacionarse


***Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:***

    • app.module.ts - @NgModule (declarations, imports, providers, bootstrap).

    NgModule es una clase que toma un objeto que describe como complilar las plantillas de los componentes

    Declarations: Declara componentes, directivas y rutas publicas y otras plantillas para que puedan ser utilizadas en otros modulos
    import: Importa otros modulos con sus componentes y directivas segun sea necesitado
    providers: da servicio para que otros componentes puedan utilizarlos 


    • app.component.ts - @Component (selector, templateUrl, styleUrls).

    Permite al usuario utilizar etiquetas para una clase de un componente.

    Selector: identifiva la directiva y su plantilla para la instanciacion
    templateURL: relativo a su direccion y la plantilla del componente en angular
    styleURL: relativo la direccion de los archivos CSS



***¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?***

Si es posible, sin embargo por defecto angular previene este tipo de comportamiento por el uso de la vista encapsulada, que evita adicionar clases al HTML fuera del componente. No es recomendable ya que el puede producir comportamientos extraños en los componentes y posibilidad la filtracion y modificacion de estilos y datos fuera de la SPA.