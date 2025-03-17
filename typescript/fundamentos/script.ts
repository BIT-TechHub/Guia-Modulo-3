//------------------------------------------------- TIPOS DE DATO ---------------------------------

// Primitivos o simples
let miString: string = "abc";
let miNumber: number = 0;
let miBoolean: boolean = true;

console.log(miString, miNumber, miBoolean);

miString = "xyz";
miNumber = 1;
miBoolean = false;

console.log(miString, miNumber, miBoolean);

// Unión de tipos
let miId: string | number;
miId = "abc";
console.log(miId);
miId = 101;
console.log(miId);

//------------------------------------------------- ARREGLOS ---------------------------------

let arrNumber1: number[] = [0, 1, 2];
let arrNumber2: Array<number> = [1, 2, 3];
let arrString1: string[] = ["a", "b", "c"];
let arrAny: any[] = ["abc", 123, true];

console.log(arrNumber1, arrNumber2, arrString1, arrAny);

//------------------------------------------------- OBJETOS ---------------------------------

let objPersona = {
    nombre: "Brandon",
    hijos: 5,
    activo: true
};

console.log(objPersona);

//------------------------------------------------- INTERFACES ---------------------------------

interface Profesor {
    id: number;
    nombre: string;
    curso: string;
    activo: boolean;
    perfil: string;
}

let miProfesor: Profesor = {
    id: 1,
    nombre: "Jirafales",
    curso: "Básico 1",
    activo: true,
    perfil: "Profesor"
};

console.log(miProfesor);

//------------------------------------------------- FUNCIONES ---------------------------------

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

console.log(multiplicar(2, 4));

function saludar(nombre: string = "desconocido"): string {
    return `Hola, ${nombre}`;
}

console.log(saludar());
console.log(saludar("Pepita"));
