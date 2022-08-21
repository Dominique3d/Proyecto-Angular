import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/interfaces/estudiante.interface';

@Component({
  selector: 'app-datos-estudiantes',
  templateUrl: './datos-estudiantes.component.html',
  styleUrls: ['./datos-estudiantes.component.css']
})
export class DatosEstudiantesComponent implements OnInit {
  estudiantes: any[]=[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly estudianteService: EstudianteService
  ) { }

  ngOnInit(): void {
  }

  estudianteSelect: Estudiante | undefined;
  updateEstudianteForm!: FormGroup;
  updateEstudianteInputs: boolean[] = [];

  toggleUpdateEstudianteInputs(i: number){
    this.updateEstudianteInputs[i] = !this.updateEstudianteInputs[i];
  }

  initUpdateEstudianteForm(): FormGroup{
    return(this.updateEstudianteForm = this.fb.group({
      nombre: [this.estudianteSelect?.nombres, [Validators.required]],
      primerApellido: [this.estudianteSelect?.primerApellido, [Validators.required]],
      segundoApellido: [this.estudianteSelect?.segundoApellido, [Validators.required]],
      email: [this.estudianteSelect?.email, [Validators.required]],
      contrasena: [this.estudianteSelect?.contrasena, [Validators.required]],
      telefono: [this.estudianteSelect?.telefono, [Validators.required]],
      rut: [this.estudianteSelect?.rut, [Validators.required]]
    }))
  }

}
