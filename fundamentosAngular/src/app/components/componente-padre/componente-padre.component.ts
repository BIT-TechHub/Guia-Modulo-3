import { Component } from '@angular/core';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-padre',
  standalone: true,
  imports: [ComponenteHijoComponent, CommonModule],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  // CREAR VARIABLE PARA ENVIAR A HIJO
  textoEnviar:string = "Hola soy tu padre";
  colorFavorito:string = "Rojo";
  trabajos: string[] = ["Cajero", "Bombero", "Policia"];
  infoPersonal = {
    nombre:"Cesar",
    apellido:"Mendieta",
    numeroCedula:1033683621,
    edad:50
  }

  // PREPARAR AL PADRE PARA RECIBIR
  /**
   1. Crear una variable donde vamos a recibir la informacion
   2. Crear un metodo para guardar los datos recibidos
   * 
  */

  nombreRecibido : string = "";
  nombresRecibidos : string[] = [];
  // Esta funcion me recibe el parametro enviado por el hijo
  recibirNombre(nombre : string){

    this.nombreRecibido = nombre;
    // Si quiero que persista la informacion se debe llamar a la peticion post
    this.nombresRecibidos.push(nombre);

  }
}
