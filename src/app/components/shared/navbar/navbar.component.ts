import { Component, HostListener, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
