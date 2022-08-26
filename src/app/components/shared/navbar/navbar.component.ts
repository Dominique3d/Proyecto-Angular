import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @HostListener('window:scroll', []) onWindowScroll(){
    let navbar = document.getElementById("contenido");
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      navbar?.setAttribute("class", "navbar fixed-top navbar-expand-lg navbar-dark p-md-3 scroll")
    } else {
      navbar?.setAttribute("class", "navbar fixed-top navbar-expand-lg navbar-dark p-md-3 noScroll")
    }
  } // for window scroll events

  rol : string = "";

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    if (localStorage.getItem('rol') != null) {
      this.rol = localStorage.getItem('rol')!;
    }
  }

  cerrarSesion() {
    console.log("cerrar sesion 1")
    this.loginService.logout();
    console.log("cerrar sesion 2")
  }
}
