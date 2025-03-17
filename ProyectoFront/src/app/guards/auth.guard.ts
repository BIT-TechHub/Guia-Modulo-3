// Los guards -> protectores de las rutas del front
// CanActivateFn -> false -> NO SE MUESTRA EL CONTENIDO PRIVADO
// CanActivateFn -> true -> SI SE MUESTRA EL CONTENIDO PRIVADO

import { CanActivateFn } from '@angular/router';
// Importamos el servicio de inicio de sesión, para poder usarlo
import { LoginService } from '../services/login.service';
// Para poder usar un servicio, también necesitamos inyectarlo en este archivo
import { inject } from '@angular/core';
// Necesitamos redireccionar dependiendo de si es admin o no
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // Acá es donde definimos la lógica -> cuál es el contenido
  // que se debe mostrar al usuario si no tiene permisos para el panel de administración

  // 1. inyectar dependencias y/o servicios
  const _loginService = inject(LoginService);
  const _router = inject(Router);
  
  console.log('Verificando acceso...', {
    logueado: _loginService.estaLogueado(),
    esAdmin: _loginService.esAdmin()
  });

  // Validar si ya inició sesión o no
  // Si no está logueado 
    // Redireciona a la página de inicio de sesión
    // y retorne falso (NO SE PUEDE MOSTRAR EL CONTENIDO PRIVADO)
  if(!_loginService.estaLogueado()){
    _router.navigate(["/inicio-sesion"]);
    return false;
  }

  //  Validar si es administrador o no
  // Si no es administrador
    // Redireccionar a la página (inicio, notFound)
    // y retorno false
  if(!_loginService.esAdmin()){
    _router.navigate(["/"]);
    return false;
  }


  return true;
};
