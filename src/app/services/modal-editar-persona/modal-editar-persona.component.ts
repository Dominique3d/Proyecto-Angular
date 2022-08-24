import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalEditarPersonaService } from '../modal-editar-persona.service';

@Component({
  selector: 'app-modal-editar-persona',
  templateUrl: './modal-editar-persona.component.html',
  styleUrls: ['./modal-editar-persona.component.css']
})
export class ModalEditarPersonaComponent implements OnInit {

  formEditarPersona: FormGroup;

  constructor(public modalEditarPersonaService: ModalEditarPersonaService,
              private formBuilder: FormBuilder) {
    this.formEditarPersona = this.formBuilder.group({
      rut: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      role: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  mostrarModal(){
    this.modalEditarPersonaService.mostrarModal();
  }

  ocultarModal(){
    this.modalEditarPersonaService.ocultarModal();
  }

  saveData(){
    console.log(this.formEditarPersona.value);
  }
}
