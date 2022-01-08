import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Constructor del Home hecho');
    this.http.get('https://restcountries.com/v3.1/lang/spa')
      .subscribe((respuesta: any) => {
        //Asignamos al array de paises la respuesta del API
        this.paises = respuesta;
        console.log(respuesta);
      })
  }

  ngOnInit() {
  }

}
