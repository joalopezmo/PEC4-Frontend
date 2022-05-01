- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC4-Frontend.git

**Respuestas teoricas**

***¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.***

En angular los estilos se pueden encapsular dentro del elemento padre para que no afecten el resto de la aplicacion, en @Component se pueden elegir opciones para utlizar la encapsulacion por componente:

ShadowDom utiliza la api shadowDOM para encerrar la vista del componente dentro de un host y aplicar estos estilos aisladamente

@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent { }

Emulated, angular modifica selectores para los estilos solos se aplique al componente y no a otros elementos de la aplicacion
@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent { }

None, permite que los estilos del componente afecten de forma global a la aplicacion, equivale a incluir estilos directamente al HTML
@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent { }

***¿Qué es el shadow DOM?***

El shadow DOM es un api que permite mantener separada de forma estruturada el marcado, el estilo y el comportamiento de la pagina, para que las partes no entren en conflicto y permita un mejor rendimiento. La API proporciona una forma de enlazar un DOM oculto y separado a un elemento.

***¿Qué es el changeDetection?***

Es un mecanismo que utiliza angular para detectar cambios en el componente.

***¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.***

las estrategias difieren en que por default, el mecanismo siempre realiza la revision de los cambios. Y OnPush, solo revisa cuando se solicita.

***Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados***

Una instancia de componente tiene un ciclo de vida que comienza cuando Angular crea una instancia de la clase de componente y representa la vista del componente junto con sus vistas secundarias. El ciclo de vida continúa con la detección de cambios, ya que Angular verifica cuándo cambian las propiedades vinculadas a los datos y actualiza tanto la vista como la instancia del componente según sea necesario. El ciclo de vida finaliza cuando Angular destruye la instancia del componente y elimina su plantilla renderizada del DOM. Las directivas tienen un ciclo de vida similar, ya que Angular crea, actualiza y destruye instancias en el curso de la ejecución.Los hooks brindan la oportunidad de actuar en una instancia de componente o directiva en el momento apropiado, ya que Angular crea, actualiza o destruye esa instancia.

ngOnChanges() se dispara cuando Angular establece o restablece las propiedades de entrada vinculadas a datos. El método recibe un objeto SimpleChanges de valores de propiedad actuales y anteriores

ngOnInit() Inicializa la directiva o el componente después de que Angular muestre las propiedades vinculadas a los datos y establezca las propiedades de entrada de la directiva o el componente.

ngAfterViewInit() Se dispara después de que Angular inicialice las vistas del componente y las vistas secundarias, o la vista que contiene la directiva.

ngOnDestroy() Se dispara justo antes de que Angular destruya la directiva o el componente. Anula los observables y separa los controladores de eventos para evitar pérdidas de memoria