import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  listaDeMatriculas: any[] = [{estudiante: "Pablo San Martín", plan: "PLAN ESTÁNDAR", fecha: "03/06/2022", formulario: "form", comprobante: "comprobante", informe: "informe"},
    {estudiante: "Dominique Del Valle", plan: "PLAN PRO", fecha: "19/10/1997", formulario: "formD", comprobante: "compD", informe: "informeD"}]

  constructor() { }

  ngOnInit(): void {
  }

}
