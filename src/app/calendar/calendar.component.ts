import { Component, OnInit } from '@angular/core';
import { CalendarOptions }from '@fullcalendar/core';  // useful for typechecking



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

    views: {
      dayGridMonth: { // name of view
        titleFormat: { year: 'numeric', month: 'long' }
        // other view-specific options here
      }
    },

    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-08-01', start: "2022-08-08T09:30:00", description: "Hola Prueba" },
      { title: 'event 2', date: '2022-08-02' }
    ]

  };


  constructor() { }

  ngOnInit() {
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }


}
