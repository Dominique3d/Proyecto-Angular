import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-clase-b',
  templateUrl: './curso-clase-b.component.html',
  styleUrls: ['./curso-clase-b.component.css']
})
export class CursoClaseBComponent implements OnInit {
  mostrarElementos:boolean[];
  visible:boolean = true;

  desplegarPlan(codigo:number){
    for(let i=0; i<this.mostrarElementos.length; i++){
      if (i==codigo){
        this.mostrarElementos[i] = true;
      }else{
        this.mostrarElementos[i] = false;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.mostrarElementos = [true, false, false, false, false, false, false];
  }

}
