import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';
@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {

  estudiantes: any[]=[];
  persona: Persona;

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
    this.modalEditarPersonaService.mostrarModal(this.persona);
  }
}
