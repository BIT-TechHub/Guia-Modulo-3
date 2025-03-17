import { Injectable, inject } from '@angular/core';
// para yo hacer peticiones HTTP
import { HttpClient } from '@angular/common/http';
// importar la interfaz Productos
import { Productos } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  
  //1. INYECCIÓN DE DEPENDENCIAS ---------------------------------------
  private _httpClient = inject(HttpClient);

  // 2. RUTA DE CONEXIÓN CON EL BACKEND ---------------------------------
  private URL_PRODUCTOS = 'http://localhost:9000/productos';


  // 3. HACER LAS PETICIONES ---------------------------------------------

  // Petición POST
  postProducto(product:Productos){
    return this._httpClient.post(this.URL_PRODUCTOS + '/crear', product);
  }

  // Petición GET
  getProductos(){
    return this._httpClient.get(this.URL_PRODUCTOS + '/obtener');
  }

  // Petición PUT
  putProducto(productActualizado:Productos, id:string){
    // para actualizar debemos pasar el body y el id del producto a actualizar
    return this._httpClient.put(this.URL_PRODUCTOS + '/actualizar' + id, productActualizado);
  }


  // Petición DELETE
  deleteProducto(id:string){
    // la ruta esta conformada por: ruta generica + acción + id
    return this._httpClient.delete(this.URL_PRODUCTOS + '/eliminar' + id);
  }

}
