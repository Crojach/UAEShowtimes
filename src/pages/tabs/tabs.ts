import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';
import { CinemasPage } from '../cinemas/cinemas';
import { OffersPage } from '../offers/offers';


/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
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
