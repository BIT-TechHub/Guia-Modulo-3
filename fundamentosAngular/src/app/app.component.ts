// Importaciones necesarias para el componente principal de Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Para usar lógica en HTML
import { FormsModule } from '@angular/forms'; // Para formularios driven-template
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; // Formularios reactivos
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component'; // Importar componente padre

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, ComponentePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // ------------------------------
  // USO DE INTERPOLACIÓN
  nombreFramework: string = "Angular";
  horasBootcamp: number = 300;
  especialista: string = "Nombre Especialista";
  contenidoBootcamp = {
    tecnologia1 : "HTML",
    tecnologia2 : "JS",
    tecnologia3 : "CSS",
    tecnologia4 : "NODE.JS",
    tecnologia5 : "ANGULAR"
  }

  // ------------------------------
  // OBJETOS Y ARREGLOS
  objetoProducto = {
    nombre : "galletas",
    cantidad : 30,
    estado : true
  }
  
  productos: string[] = ["galletas","cupcakes","muss de maracuya"];
  
  // ------------------------------
  // MANEJO DE BOOLEANOS
  isLogged: boolean = true;
  isDelete: boolean = false;
  isShowed: boolean = false;

  // ------------------------------
  // EVENTOS DEL USUARIO
  colorFondo: string = "";

  saludo(){
    alert("HOLAAAAAA");
  }

  manejarMouseOver(){
    console.log("Evento mouse sobre caja");
    this.colorFondo = "colorRojo";
  }

  manejarMouseOut(){
    console.log("Evento mouse fuera de la cajita");
    this.colorFondo = "colorVerde";
  }

  manejarClick(){
    console.log("Evento click");
    this.colorFondo = "colorPink";
  }

  cambioShowed(){
    this.isShowed = !this.isShowed;
  }

  // ------------------------------
  // FORMULARIOS DRIVEN-TEMPLATE
  colorFavorito: string = "";
  nombre: string = "";

  manejarEnvio(){
    alert(`FORMULARIO DRIVEN-TEMPLATE\nLos datos del formulario son:\n${this.colorFavorito} - ${this.nombre}`);
  }

  // ------------------------------
  // FORMULARIOS REACTIVOS
  // 1. Crear el grupo de formulario
  login = new FormGroup({
    correo: new FormControl(""),
    contrasena: new FormControl("")
  });

  // 2. Método para manejar envío
  manejarEnvioLogin(){
    console.log("Valores ingresados:", this.login.value );
    console.log("Correo ingresado:", this.login.get("correo")?.value );
  }
}
