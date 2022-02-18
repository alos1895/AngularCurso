import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `<h1>Hola buenas tardes</h1>
    <h3>La base es: {{ base }}</h3>
    <button class="btn btn-primary" (click)="acumulador(base)">+ {{ base }}</button>
    <h3>{{ numero }}</h3>
    <button class="btn btn-primary" (click)="acumulador(-base)">- {{ base }}</button>`,
})
export class ContadorComponent {

    public titulo:string = 'Contador APP';
    public numero:number = 10;
    public base: number = 3;
  
    acumulador(base:number):void{
      this.numero += base;
    }
}
