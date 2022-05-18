import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  title = 'form-reactive';
  formInscripcion: FormGroup = this.buildForm();
  hide = true;
  constructor(private formBuilder: FormBuilder) {
  }

  private buildForm(){
    return this.formInscripcion = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  public register:Register={
    email:"",
    password:"",
  };
  onRegister( $event: Event){
    $event.preventDefault();
    console.log(this.formInscripcion.get('email'))
    if(this.formInscripcion.valid){
      console.log(this.formInscripcion.value);
      this.register=this.formInscripcion.value;
    }
  }
  ngOnInit(): void {
  }

}
export interface Register {
  email:string;
  password:string;
}
