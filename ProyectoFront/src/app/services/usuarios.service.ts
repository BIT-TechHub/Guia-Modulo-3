import { Injectable, inject } from '@angular/core';
// para yo hacer peticiones HTTP
import { HttpClient } from '@angular/common/http';
// importar la interfaz Usuarios
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // 1. INYECCIÓN DE DEPENDENCIAS ---------------------------------------
  private _httpClient = inject(HttpClient);

  // 2. RUTA DE CONEXIÓN CON EL BACKEND ----------------------------------
  private URL_USUARIOS = 'http://localhost:9000/usuarios/'; //ruta genérica

  // 3. HACER LAS PETICIONES ---------------------------------------------

  // Petición POST
    postUsuarios(user: Usuarios){
      // para crear un usuario, necesito la ruta y el body
      return this._httpClient.post(this.URL_USUARIOS + '/crear', user );
    }

  // Petición GET
    getUsuarios(){
      return this._httpClient.get(this.URL_USUARIOS + 'obtener');
    }
    
}
