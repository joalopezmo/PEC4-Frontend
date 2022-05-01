- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC4-Frontend.git

**Respuestas teoricas**

***Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:***

NgFor es una directiva estructural que renderiza una plantilla por cada item en la coleccion

• index: Indice del item actual en la iteracion
• even: Se renderiza cuando el item tiene un indice par en la iteracion
• odd: Se renderiza cuando el item tiene indice impar en la iteracion
• first: Se renderiza cuando es el primer item de la iteracion
• last: se renderiza cuando es el ultimo item de la iteracion

***¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.***

La opcion trackby provee la posibilidad de usar una funcion para personalizar la iteracion sobre un array de items, no renderiza el array cuando se modifica un item, sino que modifica en el item en especifico. El uso especifico es para la mejora de la renderizacion de la aplicacion.

ejemplo 
<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByItems">
    <div>({{i}}) {{item.name}}</div>
</ng-template>

en el archivo.ts

trackByItems(index:number, item:any): number{return item.id};

***¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.***

No es posible, puesto que angular previene este comportamiento. Las directivas estructurales corresponden a la modificacion de elementos del DOM, por lo que crear contradicciones en la aplicacion simultanea de directivas puede ocasionar el no renderizado del DOM, y ser bastante costoso en terminos de rendimiento.