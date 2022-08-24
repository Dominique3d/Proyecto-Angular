
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public href: string = "";


  constructor(private router: Router) { }

  ngOnInit(): void {
    
    // console.log(this.router.url);
  }
  ngAfterViewInit(): void {
    this.href = this.router.url;
    if(this.router.url == "/home?success=true"){
      alert("¡Pago realizado con éxito!");
    }
  }

}
