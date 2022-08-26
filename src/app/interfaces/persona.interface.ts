import { Clase } from "./clase.interface"
export interface Persona {
    id: number;
    rut: string;
    nombres: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    contrasena: string;
    telefono: number;
    role: string;
    instructorAsignadoId: number;
}