import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NavController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';
import { CinemasPage } from '../cinemas/cinemas';
import { OffersPage } from '../offers/offers';
import { SuperTabsModule, SuperTabs, SuperTabsController } from 'ionic2-super-tabs';


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
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  
  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }
  
  hideToolbar() {
    this.superTabs.showToolbar(false);
  }
  moviesRoot: any = MoviesPage;
  musicsRoot: any = CinemasPage;
  offersRoot: any = OffersPage;
  
  constructor(public navCtrl: NavController, private superTabsCtrl: SuperTabsController) {}


}
