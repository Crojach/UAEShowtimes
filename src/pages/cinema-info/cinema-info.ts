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

// import moment from 'moment';
import * as moment from 'moment';
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
  showsLength:any;
  selectedDay:Array<{  }>;
  days:Array<{day: string, value:string }> =[];
  daySegment: String = moment().add(0, 'days').format(`YYYYMMDD`);

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
    //For getting next 3 day
    for(var i=0; i<4; i++){
      this.days.push({
        day:moment().add(i,'days').format('dddd').substring(0,3),
        value:moment().add(i, 'days').format(`YYYYMMDD`),
      })
    }
    this.postItems(i);
  }

  openBookingUrl(url) {
    const browser = this.iab.create(url);
  }

  //Getting cinema sessions of day selected
  dayValue(value,todaysData){
    if(value == moment().add(0, 'days').format(`YYYYMMDD`) && todaysData != null){
      console.log("!!!!!!!!!!!!!!!!!!", todaysData)
      this.showsLength = todaysData.shows.length;
      this.postItems(todaysData)
    }
    else{
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

      //Getting offers data from API
      let url = `${this.configUrl}/app/cinemaInfoForDate/`+this.cinemaId+`?search=`+parseInt(value)
      console.log(url)
      this.http.get(url).map(res => res.json()).subscribe(
        results => {
          console.log(">>Check",value == moment().add(0, 'days').format(`YYYYMMDD`) && todaysData != null)
          // this.postItems(results)
          loading.dismiss();
          console.log("**********", results)
          this.selectedDay = results.finalMovies; 
          // this.showsLength = results.shows.length;
        })
        }
  }

  postItems(results) {
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
        this.selectedDay = results.finalMovies;
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
