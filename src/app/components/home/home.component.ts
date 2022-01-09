import { ServiceSpotifyService } from './../../services/service-spotify.service';
//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  constructor(private spotify: ServiceSpotifyService) {
    this.spotify.getNewReleases();
  }



}
