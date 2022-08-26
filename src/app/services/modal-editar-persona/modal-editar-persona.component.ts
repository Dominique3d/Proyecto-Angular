import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalEditarPersonaService } from '../modal-editar-persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-modal-editar-persona',
  templateUrl: './modal-editar-persona.component.html',
  styleUrls: ['./modal-editar-persona.component.css']
})
export class ModalEditarPersonaComponent implements OnChanges {

  personaSelect: Persona | undefined;
  formEditarPersona: FormGroup;
  rol: string;
  permisoEditar: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(public modalEditarPersonaService: ModalEditarPersonaService,
    private formBuilder: FormBuilder,
    public personaService: PersonaService) {
    this.formEditarPersona = this.formBuilder.group({
      rut: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      role: ['', [Validators.required]]
    }),
    this.personaSelect = modalEditarPersonaService.personaSelect;
  }

  ngOnChanges(): void{
    this.setPersonaSelect();
    console.log("NG ON CHANGES MODAL EDITAR PERSONA COMPONENT");
  }
  // ngOnInit(): void {
  //   this.setPersonaSelect();
  //   console.log("NG ON INIT MODAL EDITAR PERSONA COMPONENT")
    // if (localStorage.getItem('rol') != null) {
    //   this.rol = localStorage.getItem('rol')!;
    // }
    // console.log("On init " + this.personaSelect);
  //}

  // mostrarModal(persona: Persona){
  //   this.modalEditarPersonaService.mostrarModal();
  // }

  ocultarModal() {
    this.modalEditarPersonaService.ocultarModal();
  }

  saveData() {
    console.log(this.formEditarPersona.value);
  }

  setPersonaSelect() {
    // this.personaService.
    this.personaSelect = this.modalEditarPersonaService.personaSelect;
    console.log("Persona seleccionada en modal: " + this.personaSelect?.nombres);
  }
}


