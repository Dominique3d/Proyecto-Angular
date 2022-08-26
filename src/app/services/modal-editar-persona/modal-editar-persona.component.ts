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
export class ModalEditarPersonaComponent implements OnInit {

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
      role: ['', [Validators.required]],
      instructorAsignadoId: ['', [Validators.required]]
    }),
      this.personaSelect = modalEditarPersonaService.personaSelect;
  }

  // ngOnChanges(): void{
  //   this.setPersonaSelect();
  //   console.log("NG ON CHANGES MODAL EDITAR PERSONA COMPONENT");
  // }
  ngOnInit(): void {
    this.modalEditarPersonaService.EmitirPersonaEvent.subscribe(respuesta => {
      this.personaSelect = respuesta;
    })
    // this.setPersonaSelect();
    // console.log("NG ON INIT MODAL EDITAR PERSONA COMPONENT")
    // if (localStorage.getItem('rol') != null) {
    //   this.rol = localStorage.getItem('rol')!;
    // }
    // console.log("On init " + this.personaSelect);
  }

  // mostrarModal(persona: Persona){
  //   this.modalEditarPersonaService.mostrarModal();
  // }

  ocultarModal() {
    this.modalEditarPersonaService.ocultarModal();
    this.formEditarPersona = this.formBuilder.group({
      rut: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      role: ['', [Validators.required]],
      instructorAsignadoId: ['', [Validators.required]]
    });
  }

  saveData() {
    console.log(this.formEditarPersona.value);
    if (this.personaSelect != null) {
      this.personaSelect.rut = this.formEditarPersona.get('rut')?.value =="" ? this.personaSelect.rut : this.formEditarPersona.get('rut')?.value;
      this.personaSelect.nombres = this.formEditarPersona.get('nombres')?.value =="" ? this.personaSelect.nombres :  this.formEditarPersona.get('nombres')?.value;
      this.personaSelect.primerApellido = this.formEditarPersona.get('primerApellido')?.value =="" ? this.personaSelect.primerApellido :  this.formEditarPersona.get('primerApellido')?.value;
      this.personaSelect.segundoApellido = this.formEditarPersona.get('segundoApellido')?.value =="" ? this.personaSelect.segundoApellido :  this.formEditarPersona.get('segundoApellido')?.value;
      this.personaSelect.email = this.formEditarPersona.get('email')?.value =="" ? this.personaSelect.email :  this.formEditarPersona.get('email')?.value;
      this.personaSelect.role = this.formEditarPersona.get('role')?.value =="" ? this.personaSelect.role :  this.formEditarPersona.get('role')?.value;
      this.personaSelect.instructorAsignadoId = this.formEditarPersona.get('instructorAsignadoId')?.value =="" ? this.personaSelect.instructorAsignadoId :  this.formEditarPersona.get('instructorAsignadoId')?.value;

      this.personaService.updatePersona(this.personaSelect == undefined ? 0 : this.personaSelect?.id, this.personaSelect).subscribe((res) => {
        console.log(res)
      })
    }
  }

  setPersonaSelect() {
    // this.personaService.
    this.personaSelect = this.modalEditarPersonaService.personaSelect;
    console.log("Persona seleccionada en modal: " + this.personaSelect?.nombres);
  }
}


