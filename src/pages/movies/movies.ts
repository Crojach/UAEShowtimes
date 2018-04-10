import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { MovieInfoPage } from "../movie-info/movie-info";
import { OrderPipe } from "ngx-order-pipe";
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { NetworkServiceProvider } from '../../providers/network-service/network-service';


@Component({
  selector: "page-movies",
  templateUrl: "movies.html"
})
export class MoviesPage {
  // configUrl = "https://uaeshowtimes.com";
  configUrl = "http://13.250.201.193:3006";
  // configUrl = 'http://192.168.1.167';
  items: any;
  order: any = "releaseDate";
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public network : NetworkServiceProvider,
    public navParams: NavParams,
    public http: Http,
    private platform: Platform,
    private ga:GoogleAnalytics,
  ) {
    if(this.network.noConnection()){
      this.network.showNetworkAlert()
    }
    this.rootNavCtrl = this.navParams.get("rootNavCtrl");
    this.getItems();
    
    this.platform.ready().then(() => {
      this.ga.trackEvent("Movies", "Opened", "New Session Started", 1 , true)
      this.ga.setAllowIDFACollection(true)
      this.ga.trackView("Movies")
    })
  }
  bookNow(item) {
    this.rootNavCtrl.push(MovieInfoPage, {
      movieInfo: item
    });
  }

  getItems() {
    this.http
      .get(`${this.configUrl}/app/show-all-movies`)
      .map(res => res.json())
      .subscribe(results => {
        if (results.status) {
          this.items = results.movies;
          this.items = this.items.map(x => {
            let date = x.releaseDate.split("(")[1].split("+")[0];
            let newDate = new Date(parseInt(date)).toISOString();
            x.releaseDate = newDate.split("T")[0];
            let image = x.thumbnailImage.split("/");
            if (image[0] != "http:") {
              x.thumbnailImage = "http://13.250.201.193:3006" + x.thumbnailImage;
            }
            return x;
          });
          console.log(">>>", this.items);
        } else {
          console.log("Sorry Try Again");
        }
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MoviesPage");
  }
}
