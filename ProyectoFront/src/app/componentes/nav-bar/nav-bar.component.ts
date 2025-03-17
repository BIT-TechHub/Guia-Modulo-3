import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// para usar estructuras de control en html, debo importarlas
import { NgIf } from '@angular/common';

@Component({
  // es lo que usamos para llamar nuestro componente reutilizable en el HTML
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

// Exportamos el componente a otras paginas
export class NavBarComponent {

  // variable que busca guardar el estado del usuario como logueado o no
  // Las estructuras de control ngIf y ngFor nos permiten manejar lógica del ts
  // en el html
  isLogged  = true;

}
