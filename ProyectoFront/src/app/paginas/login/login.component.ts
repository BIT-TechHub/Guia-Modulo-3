import { Component } from '@angular/core';
// En Angular hay dos tipos de formularios
/*
  - formulario basado en plantillas (no tan recomendado) -> (FormModule)
  - formularios reactivos (recomendado) -> (ReactiveFormsModule, FormControl, FormGroup)
*/
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Los formularios reactivos, trabajan de forma dinámica, y me permiten
  // acceder a la información de los formularios para guardarla en variables de ts

  /*
      trabajan con grupos de formularios y esos grupos tienen cotroles -> asosiados 
      a la información que se quiere obtener de los formularios
  */

    formularioLogin = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });

    // es una función que me controla lo que suceda con el formulario al dar click en el botón submit
    handleSubmint(){
      // me muestre en consola la información que se está recibiendo del formulario
      console.log('Esta es la información obtenida del input email: ' +
        this.formularioLogin.value.email
      );
      console.log('Esta es la información obtenida del input password: ' +
        this.formularioLogin.value.password
      );
    }


}
