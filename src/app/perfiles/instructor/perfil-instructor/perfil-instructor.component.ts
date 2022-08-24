import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';

@Component({
  selector: 'app-perfil-instructor',
  templateUrl: './perfil-instructor.component.html',
  styleUrls: ['./perfil-instructor.component.css']
})
export class PerfilInstructorComponent implements OnInit {

  instructores: any[]=[];
  persona : Persona;

  constructor( 
    public modalEditarPersonaService: ModalEditarPersonaService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.personaService.getAllInstructores().subscribe((res:any[]) => {
      this.instructores = res;
      console.log(this.instructores);
    },
    err => console.log(err))
  }


  abrirModal(){
    this.modalEditarPersonaService.mostrarModal(this.persona);
  }
}
