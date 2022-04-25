- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC4-Frontend.git

**Respuestas teoricas**

***¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:***

-Ficheros de configuración en la raíz del proyecto:
    o tsconfing.app.json
    o angular.json
    o package.json
    o .editorconfig,
    o .gitignore

-Directorio node_modules

-Directorio src:
    o index.html
    o main.ts
    o styles.css
    o test.ts
    o polyfills.ts
    o Directorio environments
    o Directorio assets
    o Directorio app
        ▪ Ficheros app.component.*
        ▪ Fichero app.module.ts


***Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:***

    • app.module.ts - @NgModule (declarations, imports, providers, bootstrap).
    • app.component.ts - @Component (selector, templateUrl, styleUrls).


***¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?***