// Nos permite enviar el token de autenticación en cada petición
import { HttpInterceptorFn } from '@angular/common/http';
// Necesitamos importar el servicio de inicio de sesión para obtener el token
import { LoginService } from '../services/login.service';
// Necesitamos el inject para poder usar el servicio}
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // 1. inyectar el servicio
  const _loginService = inject(LoginService);

  // 2. declarar las variables que se necesiten
  // Obteneiendo el token 
  const token = _loginService.obtenerToken();

  // Ahora, envío el token a todas las peticiones que no necesiten
  const tokenReq = token ? 
    req.clone({ setHeaders: { Authorization: 'Bearer ' + token}}) //si hay token, mándelo en la petición
    : req; //Si no hay token, entonces no mande ninguna cabecera de la petición


  return next(tokenReq);
};
