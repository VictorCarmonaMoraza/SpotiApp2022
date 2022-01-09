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
      'Authorization':'Bearer BQCsQZSjrcSXxFA3-ZvLtcKaSIJdiXt0lgZfvLKwh_traiFkYC5-zSCMM_rRrNsFy8Yry3iCJXINfybnRoc'
    });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(resp => {
        console.log(resp);
      });
   
  }
}
