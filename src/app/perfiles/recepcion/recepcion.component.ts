import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {
  pestanaActual: boolean[] = [false, false];

  solicitudes: Solicitud[] = [];

  cambiarPestanaActual(indice: number){
    for (let i=0; i<this.pestanaActual.length; i++){
      if(i!=indice){
        this.pestanaActual[i] = false;
      }else{
        this.pestanaActual[i] = true;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
