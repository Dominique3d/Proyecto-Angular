import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalEditarEstudianteService {

  public oculto: string = '';

  constructor() { }

  ocultarModal(){
    this.oculto = 'none';
    console.log('ocultar modal');
  }

  mostrarModal(){
    this.oculto = 'block';
    console.log('mostrar modal');
  }
}
