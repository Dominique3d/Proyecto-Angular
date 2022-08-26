import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  rol : string = "";

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('rol') != null) {
      this.rol = localStorage.getItem('rol')!;
    }
  }

}
