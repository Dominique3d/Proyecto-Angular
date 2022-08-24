import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Estudiante } from 'src/app/interfaces/estudiante.interface';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';

@Component({
  selector: 'app-datos-estudiantes',
  templateUrl: './datos-estudiantes.component.html',
  styleUrls: ['./datos-estudiantes.component.css']
})
export class DatosEstudiantesComponent implements OnInit {
  estudiantes: any[]=[];

  constructor(
    public modalEditarPersonaService: ModalEditarPersonaService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.personaService.getAllEstudiantes().subscribe((res:any[]) => {
      this.estudiantes = res;
      console.log(this.estudiantes);
    },
    err => console.log(err))
  }

  abrirModal(){
    this.modalEditarPersonaService.mostrarModal();
  }
}
