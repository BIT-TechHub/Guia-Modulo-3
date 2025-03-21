import { Routes } from '@angular/router';
// Importamos cada componente página
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { NoFoundComponent } from './paginas/no-found/no-found.component';
import { InventarioComponent } from './paginas/admin/inventario/inventario.component';
import { UsuariosComponent } from './paginas/admin/usuarios/usuarios.component';
// Para proteger rutas, debemos importar el guard y usarlo
import { authGuard } from './guards/auth.guard';


// Nos creamos las rutas para cada componente página
// las rutas son SIN /
export const routes: Routes = [
    { path: '', component: InicioComponent, title: 'Inicio' }, //ruta para página inicio
    { path: 'productos', component: ProductosComponent, title: 'Productos' },
    { path: 'inicio-sesion', component: LoginComponent, title: 'Inicio de Sesión' },
    { path: 'registroUsuarios', component: RegistroComponent, title: 'Registro Usuarios' },
    {
        path: 'admin', component: AdminComponent, title: 'Panel de Administrador',
        // canActivate: [authGuard], //proteger la ruta padre
        // canActivateChild: [authGuard], //proteger las rutas hijas también
        children: [  
            //RUTAS HIJAS
            // title es opcional
            { path: '', component: InventarioComponent, title: 'Inventario' },
            { path: 'usuarios', component: UsuariosComponent, title: 'Registro de Usuarios' }
        ]
    },
    //Cualquier ruta que no exista será direccionada al componente
    { path: '**', component: NoFoundComponent, title: 'Error 404' }
];
