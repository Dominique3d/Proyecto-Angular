import { Component, OnInit } from '@angular/core';
import { ModalEditarEstudianteService } from '../modal-editar-estudiante.service';

@Component({
  selector: 'app-modal-editar-estudiante',
  templateUrl: './modal-editar-estudiante.component.html',
  styleUrls: ['./modal-editar-estudiante.component.css']
})
export class ModalEditarEstudianteComponent implements OnInit {

  constructor(public modalEditarEstudianteService: ModalEditarEstudianteService) { }

  ngOnInit(): void {
  }

  mostrarModal(){
    this.modalEditarEstudianteService.mostrarModal();
  }

  ocultarModal(){
    this.modalEditarEstudianteService.ocultarModal();
  }
}
