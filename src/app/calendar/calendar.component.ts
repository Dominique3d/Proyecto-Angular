import { Component, OnInit } from '@angular/core';
import { CalendarOptions }from '@fullcalendar/core';  // useful for typechecking
import { ModalAgendaService } from '../services/modal-agenda.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: 'today',  //CAMBIAR EL BOTON TODAY a HOY
      center: 'title',
      right: 'prev,next',

    },
    buttonText: {
      today: 'Hoy'
    },

    weekends: false,
    selectable: true,
    validRange: function(nowDate) {
      return {start: nowDate}
    },
    
    views: {
      dayGridMonth: { // name of view
        titleFormat: { year: 'numeric', month: 'long' }
        // other view-specific options here
      }
    },

    dateClick: this.handleDateClick.bind(this), // bind is important!
    

  };


  constructor(public modalAgendaService: ModalAgendaService) { }

  ngOnInit() {
  }
  handleDateClick(arg: any) {
    this.modalAgendaService.mostrarModal();

  }



}

