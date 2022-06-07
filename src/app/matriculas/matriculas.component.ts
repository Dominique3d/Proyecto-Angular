import { Component, OnInit } from '@angular/core';
import { Matriculas } from '../interfaces/matriculas';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  listaDeMatriculas: Matriculas[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
