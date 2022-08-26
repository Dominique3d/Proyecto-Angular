import { Injectable } from '@angular/core';
import { TimeCols } from '@fullcalendar/timegrid';
import { Clase } from '../interfaces/clase.interface';
import { Persona } from '../interfaces/persona.interface';
import { ClaseService } from './clase.service';
import { PersonaService } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class ModalAgendaService {

  instructor: Persona;
  estudiantesInstructor: Persona[] = [];
  clasesInstructor: Clase[] = [];

  horas: string[] = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00", "19:00:00"]

  public oculto: string = '';

  constructor(public personaService: PersonaService, public claseService: ClaseService) { }

  ocultarModal() {
    this.oculto = 'none';
    console.log('Ocultar modal');
  }

  mostrarModal() {
    this.getDatos();

    this.oculto = 'block';
  }

  getDatos() {
    this.personaService.getPersonaById(1).subscribe((res: any) => {
      this.instructor = res;
    }, err => console.log(err));
    console.log('Mostrar modal agenda instructor: ' + this.instructor.nombres + this.instructor.primerApellido + this.instructor.segundoApellido);

    this.personaService.getAllEstudiantesByIdInstructor(this.instructor.id).subscribe((res: any[]) => {
      this.estudiantesInstructor = res;
      this.estudiantesInstructor.forEach(estudiante => {
        console.log("Estudiante " + estudiante.nombres)
        this.claseService.getAllClasesByIdEstudiante(estudiante.id).subscribe((res: any[]) => {
          let claseAux: Clase[] = res;
          console.log("Clase con ID del estudiante: " + claseAux[0].estudianteId)
          // this.clasesInstructor.concat(claseAux);
          claseAux.forEach(clase => {
            console.log("Clase con ID: " + clase.id)
            this.clasesInstructor.push(clase);
          })

        })
      });
    },
      err => console.log(err));
    this.clasesInstructor.forEach(clase => {
      console.log("Clases del instructor " + this.instructor.nombres + ": " + clase.id + ", Tipo: " + clase.tipo)
    })
    // console.log('Mostrar modal clases instructor: ' + this.clasesInstructor[0].tipo);
  }

}

