import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/interfaces/estudiante.interface';
import { ModalEditarEstudianteService } from 'src/app/services/modal-editar-estudiante.service';

@Component({
  selector: 'app-datos-estudiantes',
  templateUrl: './datos-estudiantes.component.html',
  styleUrls: ['./datos-estudiantes.component.css']
})
export class DatosEstudiantesComponent implements OnInit {
  estudiantes: any[]=[];

  constructor(
    public modalEditarEstudianteService: ModalEditarEstudianteService,
    private estudianteService: EstudianteService
  ) { }

  ngOnInit(): void {
    this.estudianteService.getAllEstudiantes().subscribe((res:any[]) => {
      this.estudiantes = res;
      console.log(this.estudiantes);
    },
    err => console.log(err))
  }

  abrirModal(){
    this.modalEditarEstudianteService.mostrarModal();
  }
}
