import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalEditarEstudianteService } from '../modal-editar-estudiante.service';

@Component({
  selector: 'app-modal-editar-estudiante',
  templateUrl: './modal-editar-estudiante.component.html',
  styleUrls: ['./modal-editar-estudiante.component.css']
})
export class ModalEditarEstudianteComponent implements OnInit {

  formEditarEstudiante: FormGroup;

  constructor(public modalEditarEstudianteService: ModalEditarEstudianteService,
              private formBuilder: FormBuilder) {
    this.formEditarEstudiante = this.formBuilder.group({
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
    this.modalEditarEstudianteService.mostrarModal();
  }

  ocultarModal(){
    this.modalEditarEstudianteService.ocultarModal();
  }

  saveData(){
    console.log(this.formEditarEstudiante.value);
  }
}
