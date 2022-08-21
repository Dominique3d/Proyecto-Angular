import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(){
  }

  //*  Reactive Forms  */
  newFormularioPago!: FormGroup;

  initNewFormularioPagoForm(): FormGroup {
    return (this.newFormularioPago = this.fb.group({
      
    }))
  }
}
