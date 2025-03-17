// Esta interface la constrímos basados en los SCHEMAS del backend -> users.model.js

export interface Usuarios {
    fullName: string;   //(requerido)
    email: string;      //(requerido)
    password: string;   //(requerido)
    role? : string;     //(No requerido)
}
