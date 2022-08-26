import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-datos-instructores',
  templateUrl: './datos-instructores.component.html',
  styleUrls: ['./datos-instructores.component.css']
})
export class DatosInstructoresComponent implements OnInit {
  instructoresCargados: boolean = false;
  instructores: any[]=[];
  
  p: number = 1;
  rol : string = "";

  constructor(
    public modalEditarPersonaService: ModalEditarPersonaService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.getInstructores();
    if (localStorage.getItem('rol') != null) {
      this.rol = localStorage.getItem('rol')!;
    }
  }
  getInstructores() {
    this.personaService.getAllInstructores().subscribe((res) => {
      this.instructores = res;
      console.log(this.instructores);
      this.instructoresCargados = true;
    });
  }

  abrirModal(instructor: Persona){
    this.modalEditarPersonaService.NotifyNewProcessPostResponse(instructor);
    this.modalEditarPersonaService.mostrarModal(instructor);
  }
}

