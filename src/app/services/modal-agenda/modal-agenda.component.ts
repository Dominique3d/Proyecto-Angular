import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/persona.interface';
import { ModalAgendaService } from '../modal-agenda.service';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-modal-agenda',
  templateUrl: './modal-agenda.component.html',
  styleUrls: ['./modal-agenda.component.css']
})
export class ModalAgendaComponent implements OnInit {
  formAgenda: FormGroup;
  instructor: Persona;
  horas: string[] = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

  constructor(public modalAgendaService: ModalAgendaService,
              public personaService: PersonaService,
              private formBuilder: FormBuilder) {
    this.formAgenda = this.formBuilder.group({    })
  }

  ngOnInit(): void {
    
  }

  mostrarModal(){
    this.modalAgendaService.mostrarModal();
  }

  ocultarModal(){
    this.modalAgendaService.ocultarModal();
  }

  saveData(){
    console.log(this.formAgenda.value);
  }

  clickMethod(name: string) {
    if(confirm("Reserva realizada exitosamente")) {
     
      
    }
  }

}
