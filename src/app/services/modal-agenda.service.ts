import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAgendaService {

  public oculto: string = '';

  constructor() { }

  ocultarModal(){
    this.oculto = 'none';
    console.log('Ocultar modal');
  }

  mostrarModal(){
    this.oculto = 'block';
    console.log('Mostrar modal agenda');
  }
}
