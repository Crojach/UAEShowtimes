import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { Http, RequestOptions, Headers } from "@angular/http";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingController } from "ionic-angular";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
import {
  SuperTabsModule,
  SuperTabsController,
  SuperTabs
} from "ionic2-super-tabs";
import { NetworkServiceProvider } from '../../providers/network-service/network-service';
import { ToastController } from 'ionic-angular'

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
  view: boolean= false;
  configUrl = "http://13.250.201.193:3006";
  // configUrl = 'http://192.168.1.167';
  // configUrl = "http://uaeshowtimes.com:3006";
  cinemaId: any;
  cinemaName: any = "";
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

  // Method for hiding SuperTabs (swipe)
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(
    http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private ga: GoogleAnalytics,
    iab: InAppBrowser,
    loadingCtrl: LoadingController,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
    public network : NetworkServiceProvider,
    public toastCtrl: ToastController,
  ) {
    this.http = http;
    this.iab = iab;
    this.loadingCtrl = loadingCtrl;
    this.currentTime = Date.now();
    this.cinemaId = this.navParams.get("cinemaId");
    this.cinemaName = this.navParams.get("cinemaName");
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
    this.platform.ready().then(() => {
      this.ga.trackEvent(
        "Cinema Info",
        "Opened",
        "New Session Started",
        1,
        true
      );
      this.ga.setAllowIDFACollection(true);
      this.ga.trackView("Cinema Info");
    });
  }

  // Function to launch Dailer
  launchDialer(n: string) {
    this.callNumber
      .callNumber(n, true)
      .then(() => console.log("Launched dialer!"))
      .catch(() => console.log("Error launching dialer"));
  }

  // Function to Launch EmailComoper
  launchMail(to) {
    let email = {
      to: to,
      cc: "",
      bcc: "",
      subject: "Greetings",
      body: "How are you? Nice greetings from UAE showtimes",
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  // Function to open in app browser
  openBookingUrl(url) {
    this.iab.create(url, "", "location=no,closebuttoncaption=Back");
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
      this.showsLength = todaysData.shows.length;
      this.postItems(todaysData);
    } else {
      this.view = true;
      //Getting offers data from API
      let url =
        `${this.configUrl}/app/cinemaInfoForDate/` +
        this.cinemaId +
        `?search=` +
        parseInt(value);
      // console.log(url);
      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(results => {
          loading.dismiss();
          this.selectedDay = results.finalMovies;
          console.log("!!!!!!!!!!!!!!!!!!", this.selectedDay);
          // this.showsLength = todaysData.shows.length;
          this.view = false;
        });
    }
  }

  postItems(results) {
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
        this.postItems(results);
      });
      toast.present();
    }else{
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

      console.log(this.cinemaId);
      const httpOptions = new RequestOptions({
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      let body = {
        cinemaId: this.cinemaId
      };
      this.http
        .post(`${this.configUrl}/app/cinema`, body, httpOptions)
        .map(res => res.json())
        .subscribe(results => {
          this.cinemaInfo = results.cinema;
          this.cinemaName = results.cinema[0].multiplexName;
          this.selectedDay = results.finalMovies;
          console.log(
            "POWER",
            this.cinemaInfo[0].latitude,
            this.cinemaInfo[0].longitude
          );

          this.initializeMap(
            this.cinemaInfo[0].latitude,
            this.cinemaInfo[0].longitude
          );

          this.latitude = this.cinemaInfo[0].latitude;
          this.longitude = this.cinemaInfo[0].longitude;
          loading.dismiss();
        });
    }
  }

  initializeMap(lat, long) {
    var myLatLng = { lat: lat, lng: long };
    let locationOptions = { timeout: 20000, enableHighAccuracy: true };
    let options = {
      center: new google.maps.LatLng(lat, long),
      zoom: 16,
      tilt: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(
      document.getElementById("map_canvas"),
      options
    );
    var marker = new google.maps.Marker({
      map: this.map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: options.center,
      title: "Hello World!"
    });
    marker.setMap(this.map);
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     let options = {
    //       center: new google.maps.LatLng(lat, long),
    //       zoom: 16,
    //       tilt: 20,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //
    //     this.map = new google.maps.Map(
    //       document.getElementById("map_canvas"),
    //       options
    //     );
    //     var marker = new google.maps.Marker({
    //       map: this.map,
    //       draggable: false,
    //       animation: google.maps.Animation.DROP,
    //       position: options.center,
    //       title: "Hello World!"
    //     });
    //     marker.setMap(this.map);
    //   },
    //
    //   error => {
    //     console.log(error);
    //   },
    //
    //   locationOptions
    // );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MusicsPage");

  }
}
