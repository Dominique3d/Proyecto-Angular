import { Time } from "@angular/common";

export interface Clase {
    id: number;
    tipo: String;
    fecha: Date;
    hora: Time;
    estudianteId: number;
    planId: number;
}