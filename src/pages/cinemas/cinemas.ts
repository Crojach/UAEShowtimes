import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { CinemaInfoPage } from "../cinema-info/cinema-info";
import { Http } from "@angular/http";
import { LoadingController } from "ionic-angular";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { Diagnostic } from '@ionic-native/diagnostic';
import "rxjs/add/operator/map";


let loading;
@Component({
  selector: "page-musics",
  templateUrl: "cinemas.html"
})
export class CinemasPage {
  data: Array<{
    image: string;
    multiplex: string;
    cinema: any;
    icon: string;
    showDetails: boolean;
  }> = [];
  // configUrl = "http://uaeshowtimes.com:3006";
  configUrl = "http://13.250.201.193:3006";
  // configUrl = 'http://192.168.1.167';
  cinemas: any;
  loadingCtrl: any;
  icon: any = "ios-arrow-down";
  rootNavCtrl: NavController;
  cinemasTitles = [
    "assets/img/cineroyal.png",
    "assets/img/cinemacity.png",
    "assets/img/novo.jpg",
    "assets/img/oscar.png",
    "assets/img/reel.jpg",
    "assets/img/roxy.png",
    "assets/img/star.png",
    "assets/img/vox.jpg"
  ];

  constructor(
    public http: Http,
    public navCtrl: NavController,
    loadingCtrl: LoadingController,
    public navParams: NavParams,
    private platform: Platform,
    private ga: GoogleAnalytics,
    private diagnostic: Diagnostic
  ) {
    this.rootNavCtrl = this.navParams.get("rootNavCtrl");
    this.loadingCtrl = loadingCtrl;
    this.getItems();

    this.platform.ready().then(() => {
      this.ga.trackEvent(
        "Cinema page",
        "Opened",
        "New Session Started",
        1,
        true
      );
      this.ga.setAllowIDFACollection(true);
      this.ga.trackView("Cinema page");
    });
  }

  cinemaPage(id, cinemaName) {
  
      //to Turn on location
      let successCallback = isAvailable => {
        console.log("Is available? " + isAvailable);
      };
      let errorCallback = e => console.error(e);
  
      // this.diagnostic.isLocationEnabled().then(successCallback, errorCallback);
  
      this.diagnostic.isGpsLocationEnabled()
      .then((state) => {
        console.log('state',state)
          if (state) {
            // do something
            console.log("gps is ON")
            //on click to push on next page
            this.rootNavCtrl.push(CinemaInfoPage, {
              cinemaId: id,
              cinemaName: cinemaName
            });
          } else {
            console.log("gps is off")
            alert("Please Turn on GPS.")
            this.diagnostic.switchToLocationSettings()
          }
        })
        .catch(e => console.error(e));
  }

  toggleDetails(data, index) {
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

  getItems() {
    loading = this.loadingCtrl.create({
      spinner: "hide",
      content: `
      <span class="spinner-double-dot-in"></span>
      `
    });

    loading.present();
    this.http
      .get(`${this.configUrl}/app/showAllCinemas`)
      .map(res => res.json())
      .subscribe(results => {
        if (results.status) {
          // console.log("result>>",results.cinemas)
          this.cinemas = results.cinemas;
          results.cinemas.map((x, index) => {
            // console.log(this.cinemasTitles)
            this.data.push({
              image: this.cinemasTitles[index],
              multiplex: x.multiplex,
              cinema: x.cinema,
              icon: "ios-arrow-down",
              showDetails: false
            });
          });
          loading.dismiss();
          console.log("result>>", this.data);
        } else {
          console.log("Sorry Try Again");
        }
      });
    // http://uaeshowtimes.com/app/show-all-movies
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MusicsPage");
  }
}
