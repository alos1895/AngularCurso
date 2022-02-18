import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
  nombre: string = 'Alonso';
  edad: number = 25;

  obtenerNombre(): string{
    return this.nombre;
  }

  cambiarNombre(): void{
    this.nombre = 'Juan';
  }

  cambiarEdad(): void{
    this.edad = 30;
  }
}
