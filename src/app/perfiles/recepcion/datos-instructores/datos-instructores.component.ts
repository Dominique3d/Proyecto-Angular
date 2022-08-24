import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';

@Component({
  selector: 'app-datos-instructores',
  templateUrl: './datos-instructores.component.html',
  styleUrls: ['./datos-instructores.component.css']
})
export class DatosInstructoresComponent implements OnInit {
  instructores: any[]=[];

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
    this.modalEditarPersonaService.mostrarModal();
  }
}
