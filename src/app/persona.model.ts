/**Creamos el modelo-clase Persona con sus atributos*/
export class Persona {
    nombres: string = '';
    apellidos: string = '';
    cedula: number = 0;
    edad: number = 0;
    correo:string = '';

    constructor(nombres:string, apellidos:string, cedula:number, edad:number, correo:string) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.edad = edad;
        this.correo = correo;
    }
}