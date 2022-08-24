import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalAgendaService } from '../modal-agenda.service';

@Component({
  selector: 'app-modal-agenda',
  templateUrl: './modal-agenda.component.html',
  styleUrls: ['./modal-agenda.component.css']
})
export class ModalAgendaComponent implements OnInit {
  formAgenda: FormGroup;

  constructor(public modalAgendaService: ModalAgendaService,
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
}
