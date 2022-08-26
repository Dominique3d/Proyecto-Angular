import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebpayService } from 'src/app/services/webpay.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pagoForm: FormGroup;

  constructor(private webpay: WebpayService, private formBuilder: FormBuilder) {
    this.pagoForm = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
   }
  ngOnInit(){
  }

  onSubmit() {
    console.log(this.pagoForm.value);
    // this.webpay.initTransaction(1000, this.pagoForm.value.email);
    this.webpay.callAPI();
  }
  
}