import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/persona.interface';
import { ModalEditarPersonaService } from 'src/app/services/modal-editar-persona.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {

  usuario: Persona[]=[];
  persona: Persona;
  userEmail : string = "";

  constructor( 
    public modalEditarPersonaService: ModalEditarPersonaService,
    private personaService: PersonaService,
    public loginService : LoginService ) { }

  ngOnInit(): void {
    this.getDatos();
    if (localStorage.getItem('email') != null) {
      this.userEmail = localStorage.getItem('email')!;
    }
  }

  getDatos(){
    this.personaService.getDatosUsuario(this.userEmail).subscribe((res:any) => {
    this.usuario = res;
    console.log(this.usuario);
  });
}


  abrirModal(){
    this.modalEditarPersonaService.mostrarModal(this.persona);
  }
}
