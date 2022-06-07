import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-instructores',
  templateUrl: './datos-instructores.component.html',
  styleUrls: ['./datos-instructores.component.css']
})
export class DatosInstructoresComponent implements OnInit {
  instructores: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
