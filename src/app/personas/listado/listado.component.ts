import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  personas: string [] = ['Alonso','Juan', 'Pedro', 'Maria', 'Luis', 'Jorge'];

  eliminarNombre(nombre: string){
    
  }
}
