import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { LoadingController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { NetworkServiceProvider } from '../../providers/network-service/network-service';
import { ToastController } from 'ionic-angular'
// import { AnimationService } from 'css-animator';
// import { AnimationBuilder } from 'css-animator/builder';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let loading;

@Component({
  selector: "page-offers",
  templateUrl: "offers.html"
})
export class OffersPage {
  // configUrl = "http://uaeshowtimes.com:3006";
  configUrl = "http://13.250.201.193:3006";
  // configUrl = 'http://192.168.1.167';
  iab: any;
  offers: any;
  loadingCtrl: any;
  order: any;
  icon: any = "ios-arrow-down";
  data: Array<{ offer: any; icon: string; showDetails: boolean }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private platform: Platform,
    private ga: GoogleAnalytics,
    iab: InAppBrowser,
    loadingCtrl: LoadingController,
    public network : NetworkServiceProvider,
    public toastCtrl: ToastController,
  ) {
    this.loadingCtrl = loadingCtrl;
    this.iab = iab;
    this.getOffers();
    this.platform.ready().then(() => {
      this.ga.trackEvent("Offers", "Opened", "New Session Started", 1, true);
      this.ga.setAllowIDFACollection(true);
      this.ga.trackView("Offers");
    });
  }



  // Code for Accordin
  toggleDetails(data, index) {

    // console.log("toggle",index)
    if (this.data[index].showDetails) {
      this.data[index].showDetails = false;
      this.data[index].icon = "ios-arrow-down";
    } else {
      this.data.map((x, _index) => {
        if (_index == index) {
          x.showDetails = true;
          x.icon = "ios-arrow-up";
        } else {
          x.showDetails = false;
          x.icon = "ios-arrow-down";
        }
      });
    }
  }

  //Redirecting  to offer
  openOfferSite(url) {
    this.iab.create(url, "_blank");
  }
  //Function for getting offers
  getOffers() {
    if(this.network.noConnection()){
      console.log("No connection plzz try again later")
      let toast = this.toastCtrl.create({
        message: 'Failed to connect to UAE Showtimes, check your internet connection',
        duration: 15000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'Try Again',
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
        this.getOffers();
      });
      toast.present();
    }else{
      //Turn loader on till we get the data
      loading = this.loadingCtrl.create({
        spinner: "hide",
        content: `
      <div class="spinner">
  <div class="dot1"></div>
  <div class="dot2"></div>
</div>
      `
      });
      loading.present();

      //Getting offers data from API
      this.http
        .get(`${this.configUrl}/app/ticketOffers`)
        .map(res => res.json())
        .subscribe(results => {
          if (results.status) {
            results.offers.map((x, index) => {
              // console.log(this.cinemasTitles)
              this.data.push({
                offer: x,
                icon: "ios-arrow-down",
                showDetails: false
              });
            });
            console.log("###Power####", this.data);
          } else {
            console.log("Sorry Try Again");
          }
          //Done we fetching Data
          //Dismissing Loader
          loading.dismiss();
        });
    }
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad OffersPage");

  }
}
