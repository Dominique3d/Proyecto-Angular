import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  hide = true;
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router : Router) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((res: any) => {
      console.log(res);
    });

  }

}
/*
export interface Register {
  email:string;
  password:string;
}
*/
