import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Http, RequestOptions, Headers } from "@angular/http";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingController } from "ionic-angular";
import { GoogleMapPage } from "../google-map/google-map";
// import moment from 'moment';
import * as moment from "moment";
declare var google;
let marker;
/**
 * Generated class for the CinemaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let loading;
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
  map: any;
  loadingCtrl: any;
  showsLength: any;
  selectedDay: Array<{}>;
  days: Array<{ day: string; value: string }> = [];
  daySegment: String = moment()
    .add(0, "days")
    .format(`YYYYMMDD`);
  latitude: any;
  longitude: any;

  constructor(
    http: Http,
    public navCtrl: NavController,
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
    for (var i = 0; i < 4; i++) {
      this.days.push({
        day: moment()
          .add(i, "days")
          .format("dddd")
          .substring(0, 3),
        value: moment()
          .add(i, "days")
          .format(`YYYYMMDD`)
      });
    }
    this.postItems(i);
  }

  // ionViewDidLoad() {
  //   this.initializeMap();
  // }

  // Pushing value to generate map
  goToGoogleMap() {
    this.navCtrl.push(GoogleMapPage);
  }

  openBookingUrl(url) {
    const browser = this.iab.create(url);
  }

  //Getting cinema sessions of day selected
  dayValue(value, todaysData) {
    if (
      value ==
        moment()
          .add(0, "days")
          .format(`YYYYMMDD`) &&
      todaysData != null
    ) {
      console.log("!!!!!!!!!!!!!!!!!!", todaysData);
      this.showsLength = todaysData.shows.length;
      this.postItems(todaysData);
    } else {
      loading = this.loadingCtrl.create({
        spinner: "hide",
        content: `
          <div class="spinner" >
            <div class="dot1"></div>
            <div class="dot2"></div>
          </div>
        `
      });
      loading.present();

      //Getting offers data from API
      let url =
        `${this.configUrl}/app/cinemaInfoForDate/` +
        this.cinemaId +
        `?search=` +
        parseInt(value);
      console.log(url);
      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(results => {
          // console.log(">>Check",value == moment().add(0, 'days').format(`YYYYMMDD`) && todaysData != null)
          // this.postItems(results)
          loading.dismiss();
          // console.log("**********", results)
          this.selectedDay = results.finalMovies;
          // this.showsLength = results.shows.length;
        });
    }
  }

  postItems(results) {
    loading = this.loadingCtrl.create({
      spinner: "hide",
      content: `
          <div class="spinner" >
            <div class="dot1"></div>
            <div class="dot2"></div>
          </div>
        `
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
        console.log("POWER", results);
        this.cinemaInfo = results.cinema;
        this.selectedDay = results.finalMovies;

        this.initializeMap(
          this.cinemaInfo[0].latitude,
          this.cinemaInfo[0].longitude
        );

        this.latitude = this.cinemaInfo[0].latitude;
        this.longitude = this.cinemaInfo[0].longitude;
        loading.dismiss();
      });
  }

  initializeMap(lat, long) {
    var myLatLng = { lat: lat, lng: long };
    let locationOptions = { timeout: 20000, enableHighAccuracy: true };

    navigator.geolocation.getCurrentPosition(
      position => {
        let options = {
          center: new google.maps.LatLng(lat, long),
          zoom: 20,
          tilt: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
          document.getElementById("map_canvas"),
          options
        );
        var marker = new google.maps.Marker({
          map: new google.maps.Map(
            document.getElementById("map_canvas"),
            options
          ),
          draggable: true,
          animation: google.maps.Animation.DROP, 
          position: options.center,
         });
         marker.addListener('click', this.toggleBounce);
        marker.setMap(this.map);
      },

      error => {
        console.log(error);
      },

      locationOptions
    );
  }
  toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
