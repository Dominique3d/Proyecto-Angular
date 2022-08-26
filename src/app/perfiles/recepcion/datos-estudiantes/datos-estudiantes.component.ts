import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';
import { Estudiante } from 'src/app/models/IEstudiante';
import { LoginService } from '../../../services/login/login.service';



@Component({
  selector: 'app-datos-estudiantes',
  templateUrl: './datos-estudiantes.component.html',
  styleUrls: ['./datos-estudiantes.component.css']
})

export class DatosEstudiantesComponent implements OnInit {
  estudiantes: any[]=[];
  

  clientesCargados: boolean = false;
  
  p: number = 1;
  rol : string = "";

  constructor(
    public modalEditarPersonaService: ModalEditarPersonaService,
    public personaService: PersonaService,
    public loginService : LoginService) { }

  /*
  ngOnInit(): void {
    this.personaService.getAllEstudiantes().subscribe((res:any[]) => {
      this.estudiantes = res;
      console.log(this.estudiantes);
    },
    err => console.log(err))
  }
  */
  
  ngOnInit(): void {
    this.getEstudiantes();
    if (localStorage.getItem('rol') != null) {
      this.rol = localStorage.getItem('rol')!;
    }
  }

  getEstudiantes(){
      this.personaService.getAllEstudiantes().subscribe((res:any[]) => {
      this.estudiantes = res;
      console.log(this.estudiantes);
    });
  }

  abrirModal(estudiante: Persona){
    console.log("estoy en abrirModal de app.component.ts Estudiantes");
    this.modalEditarPersonaService.mostrarModal(estudiante);
  }

  cerrarSesion() {
    this.loginService.logout();
  }
}
