import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';
import { CinemasPage } from '../cinemas/cinemas';
import { OffersPage } from '../offers/offers';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
 
  moviesRoot: any = MoviesPage;
  musicsRoot: any = CinemasPage;
  offersRoot: any = OffersPage;
  
  constructor(public navCtrl: NavController) {}
  

}
