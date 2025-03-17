// El ts es el que maneja la lógica específica del componente
import { Component } from '@angular/core';
// la petición GET para mostrar los productos de mi base de datos -> para esto necesito el servicio de mis productos
import { ProductosService } from '../../services/productos.service';
// para poder usar dependencias y servicios, necesito el método inject
import { inject, OnInit } from '@angular/core';
// importamos ngx-troast para mensajitos de respuesta
import { ToastrService } from 'ngx-toastr';
// Me permite mantener la estructura de mis productos
import { Productos } from '../../interfaces/productos';
// importar el NGFOR -> Para poder usar ciclo for en html
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent implements OnInit {
    // 1. inyección de dependencias y/o servicios
    _productosService = inject(ProductosService);
    _toastrService = inject(ToastrService);

    // 2. declarar las variables que necesite para recibir la información de la base de datos
    allProductos : Productos[] = []; //es un arreglo de productos, y su estructura me la da la interface

    // 3. Crearse los métodos para recibir las respuestas de cada pettición

    // respuesta de la petición GET
    obtenerProductos(){
      this._productosService.getProductos().subscribe(
        {
          // gestionar la respuesta de esa petición
          // manejo de errores

          next: (res: any) => {
            // acá es cuando todo salió bien
            this.allProductos = res.datos;
            console.log(this.allProductos);

          },
          error: (error : any) => {
            // acá es cuando algo salió mal
            console.log(error);
          }

        }
      );
    }

    // Si yo quiero que se muestre al cargar el contenido de mi página -> debemos usar un método que se llama -> ngOnInit()
    ngOnInit(){
      this.obtenerProductos();
    }


    // respuesta de la petición POST
    crearProducto(){
      // Lógica para obtener la respuesta
    }
    // respuesta de la petición PUT
    actualizarProductos(){
      // Lógica para obtener la respuesta
    }
    // respuesta de la petición DELETE
    eliminarProductos(){
      // Lógica para obtener la respuesta
    }

}
