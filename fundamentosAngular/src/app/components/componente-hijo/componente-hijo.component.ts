// AQUI SE IMPORTA INPUT (ENTRADA) Y OUTPUT (SALIDA), EventEmitter (Para escuchar eventos)
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
  // PREPARAR PARA RECIBIR
  // Con @Input en el hijo se prepara para recibir informacion de la parte del padre
  @Input() textoRecibir : string = "";
  @Input() colorFavoritoPadre : string = "";
  @Input() trabajosPadre : string[] = [];
  @Input() infoPadre = {
    nombre : "",
    apellido : "",
    numeroCedula : 0,
    edad : 0
  }

  // ENVIAR INFORMACION DESDE EL HIJO
  // SIEMPRE QUE SE PASE INFORMACION AL PADRE SE MANEJAN EVENTOS
  /*
    1. Crear el manejador de evento
  */
  //  ESTO ES UN CONSTRUCTOR
  @Output() eventoEnviarNombre: EventEmitter<string> = new EventEmitter<string> ();

  // 2. Creamos una funcion que use eventoEnviarNombre para emitir lo que mandaremos al padre

  enviarNombre(){
    this.eventoEnviarNombre.emit("Laura Sofia");
  }

}

// EJERCICIO DE PRACTICA

/**
 
  - Desde el componente hijo mande al padre un objeto de datos
  1.  El objeto debe tener nombre, caterogia e imagen
  2. En el componente padre debe escuchar el objeto que se mande y mostrarlo
  como una tarjeta.

 */
