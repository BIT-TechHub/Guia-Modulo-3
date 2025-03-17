// Esta interface la constrímos basados en los SCHEMAS del backend -> products.model.js

export interface Productos {
    _id: string;
    image : string;         //URL o ruta de la imagen del producto (requerido)
    name : string;          //Nombre del producto (requerido)
    category? : string;     //Categoría del producto (No requerido) -> //puede que se de la info o puede que no
    price: number;          //(Requerido)
    stock: number;          //(Requerido)
    isAvailable?: boolean;  //(No Requerido)
}
