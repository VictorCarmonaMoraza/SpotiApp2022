import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Este decorador le dice a angular que este servicio puede ser inyectado
//en cualquier componente
@Injectable({
  providedIn: 'root'
})
export class ServiceSpotifyService {

  constructor(private http: HttpClient) {
    console.log("Listo");
  }

   getNewReleases() {

    const resp: any[] = [];
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCuOkqnNOHW94NPP4Cs9d_YjfDBWhsml70b2cmZxGuELaO3BGXxGv6Ru_Q3h-ZHkHfOKEn16X9RgxlXuUg'
    });

     return this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers });


  }
}
