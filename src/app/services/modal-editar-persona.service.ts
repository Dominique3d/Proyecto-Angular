import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalEditarPersonaService {

  public oculto: string = '';

  constructor() { }

  ocultarModal(){
    this.oculto = 'none';
    console.log('Ocultar modal editar persona');
  }

  mostrarModal(){
    this.oculto = 'block';
    console.log('Mostrar modal editar persona');
  }
}
