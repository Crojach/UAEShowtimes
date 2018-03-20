import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

declare var google;
/**
 * Generated class for the GoogleMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-google-map",
  templateUrl: "google-map.html"
})
export class GoogleMapPage {
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {
    this.initializeMap();
  }
  initializeMap() {
    let locationOptions = { timeout: 20000, enableHighAccuracy: true };

    navigator.geolocation.getCurrentPosition(
      position => {
        let options = {
          center: new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          ),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
          document.getElementById("map_canvas"),
          options
        );
      },

      error => {
        console.log(error);
      },
      locationOptions
    );
  }
}
