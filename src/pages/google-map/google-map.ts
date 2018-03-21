// import { NavController, NavParams } from "ionic-angular";
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, Component } from '@angular/core';

// import { AgmCoreModule } from '@agm/core';

// declare var google;

// @Component({
//   selector: "page-google-map",
//   templateUrl: "google-map.html"
// })
// export class GoogleMapPage {
//   map: any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {}
//   ionViewDidLoad() {
//     this.initializeMap();
//   }
//   initializeMap() {
//     console.log(">♀♫►♫☼♀♪◄↕", )
//     let locationOptions = { timeout: 20000, enableHighAccuracy: true };

//     navigator.geolocation.getCurrentPosition(
//       position => {
//         let options = {
//           center: new google.maps.LatLng(
//             position.coords.latitude,
//             position.coords.longitude
//           ),
//           zoom: 16,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         };

//         this.map = new google.maps.Map(
//           document.getElementById("map"),
//           options
//         );
//       },

//       error => {
//         console.log(error);
//       },
//       locationOptions
//     );
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: "page-google-map",
  templateUrl: "google-map.html"
})
export class GoogleMapPage {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}