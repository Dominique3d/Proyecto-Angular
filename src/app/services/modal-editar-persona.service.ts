import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalEditarPersonaService {

  personaSelect: Persona | undefined;
  public oculto: string = '';

  constructor() { }

  ocultarModal(){
    this.oculto = 'none';
    console.log('Ocultar modal editar persona');
  }

  mostrarModal(persona: Persona){
    this.personaSelect = persona;
    this.oculto = 'block';
    console.log('Mostrar modal editar persona ' + this.personaSelect.nombres);
  }
}
