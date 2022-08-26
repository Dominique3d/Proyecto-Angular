import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';

@Component({
  selector: 'app-datos-estudiantes',
  templateUrl: './datos-estudiantes.component.html',
  styleUrls: ['./datos-estudiantes.component.css']
})

export class DatosEstudiantesComponent implements OnInit {
  estudiantesCargados: boolean = false;
  estudiantes: any[]=[];
  
  p: number = 1;
  rol : string = "";

  constructor(
    public modalEditarPersonaService: ModalEditarPersonaService,
    private personaService: PersonaService
    ) { }
  
  ngOnInit(): void {
    this.getEstudiantes();
    if (localStorage.getItem('rol') != null) {
      this.rol = localStorage.getItem('rol')!;
    }
  }
  getEstudiantes(){
      this.personaService.getAllEstudiantes().subscribe((res) => {
      this.estudiantes = res;
      console.log(this.estudiantes);
      this.estudiantesCargados = true;
    });
  }

  abrirModal(estudiante: Persona){
    this.modalEditarPersonaService.NotifyNewProcessPostResponse(estudiante);
    console.log("estoy en abrirModal de app.component.ts Estudiantes");
    this.modalEditarPersonaService.mostrarModal(estudiante);
  }
}


 /*
  ngOnInit(): void {
    this.personaService.getAllEstudiantes().subscribe((res:any[]) => {
      this.estudiantes = res;
      console.log(this.estudiantes);
    },
    err => console.log(err))
  }
  */