import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto-GPS';

  constructor(private router: Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        let ruta = this.router.url;
        console.log("RUTA " + ruta);
        this.cambiarFondo(ruta);
      }
    });
  }

  cambiarFondo(ruta: string){
    switch (ruta) {
      case ("/home" || "/curso-claseB"): {
        let doc = document.getElementById("home-1");
        doc?.setAttribute("style", 'background-image: url("/assets/Background-home-1.jpg");');
        break;
      }
      case ("/formulario"): {
        let doc = document.getElementById("home-1");
        doc?.setAttribute("style", 'background-image: url("/assets/fondo-formulario.png");');
        break;
      }
    }
  }

  ngOnInit(){
  }
}
