import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Http, RequestOptions, Headers } from "@angular/http";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
/**
 * Generated class for the CinemaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let loading
@Component({
  selector: "page-cinema-info",
  templateUrl: "cinema-info.html"
})
export class CinemaInfoPage {
  // configUrl = 'http://192.168.1.167';
  configUrl = "http://uaeshowtimes.com:3006";
  cinemaId: any;
  http: any;
  cinemaInfo: any;
  movieInfo: any;
  iab: any;
  currentTime: any;
  map: GoogleMap;
  loadingCtrl:any;

  constructor(
    http: Http,
    navCtrl: NavController,
    public navParams: NavParams,
    iab: InAppBrowser,
    loadingCtrl: LoadingController
  ) {
    this.http = http;
    this.iab = iab;
    this.loadingCtrl = loadingCtrl;
    this.currentTime = Date.now();
    this.cinemaId = this.navParams.get("cinemaId");
    this.postItems();
  }

  openBookingUrl(url) {
    const browser = this.iab.create(url);
  }

  postItems() {
    loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="spinner" >
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
        `,
    });

    loading.present();

    console.log(this.cinemaId);
    const httpOptions = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
        // 'Content-Type':  'application/x-www-form-urlencoded',
        // 'Authorization': 'my-auth-token'
      })
    });
    let body = {
      cinemaId: this.cinemaId
    };
    this.http
      .post(`${this.configUrl}/app/cinema`, body, httpOptions)
      .map(res => res.json())
      .subscribe(results => {
        console.log("POWER",results)
        this.cinemaInfo = results.cinema;
        this.movieInfo = results.finalMovies;
        console.log(this.cinemaInfo);
        loading.dismiss();
      this.loadMap();
      });
    }
    
    
    ionViewWillEnter() {
  }

  loadMap() {
    console.log("loadmpa");
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.cinemaInfo["0"].latitude,
          lng: this.cinemaInfo["0"].longitude
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create("map", mapOptions);

    // Wait the MAP_READY before using any methods.
    // this.map.one(GoogleMapsEvent.MAP_READY)
    //   .then(() => {
    //     console.log('Map is ready!');

    //     // Now you can use all methods safely.
    //     this.map.addMarker({
    //         title: 'Ionic',
    //         icon: 'blue',
    //         animation: 'DROP',
    //         position: {
    //           lat: 43.0741904,
    //           lng: -89.3809802
    //         }
    //       })
    //       .then(marker => {
    //         marker.on(GoogleMapsEvent.MARKER_CLICK)
    //           .subscribe(() => {
    //             alert('clicked');
    //           });
    //       });

    //   });
    //   this.map.setDiv('map')
  }
}
