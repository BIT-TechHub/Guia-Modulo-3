import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { TarjetaProductoComponent } from '../../componentes/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavBarComponent, TarjetaProductoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
