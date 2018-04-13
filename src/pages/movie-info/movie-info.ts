import { Component } from "@angular/core";
import { NavController, NavParams, Platform } from "ionic-angular";
import { Http, Headers, RequestOptions } from "@angular/http";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { LoadingController } from "ionic-angular";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


import * as moment from "moment";

let loading;

@Component({
  selector: "page-movie-info",
  templateUrl: "movie-info.html"
})
export class MovieInfoPage {
  view: boolean= false;
  configUrl = "http://13.250.201.193:3006";
  // configUrl = "http://192.168.1.167";
  item: any;
  trustedVideoUrl: SafeResourceUrl;
  http: any;
  selectedSegment: String = "Info";
  daySegment: String = moment()
    .add(0, "days")
    .format(`YYYYMMDD`);
  movieId: any;
  loadingCtrl: any;
  iab: any;
  currentTime: any;
  days: Array<{ day: string; value: string }> = [];
  icon: any = "ios-arrow-down";
  cinema: any;
  showDetails: boolean;
  showsLength: any;
  cinemaList: Array<{ multiplexName: ""; cinamaArray: any }> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private domSanitizer: DomSanitizer,
    private platform: Platform,
    private ga: GoogleAnalytics,
    private youtube: YoutubeVideoPlayer,
    http: Http,
    iab: InAppBrowser,
    loadingCtrl: LoadingController
  ) {
    this.http = http;
    this.iab = iab;
    this.currentTime = Date.now();
    this.loadingCtrl = loadingCtrl;
    this.item = this.navParams.get("movieInfo");
    // console.log("%%%%%%%",this.item)
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

    // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
    //   "https://www.youtube.com/embed/" + this.item.trailer
    // );

    this.platform.ready().then(() => {
      this.ga.trackEvent(
        "Movies Info",
        "Opened",
        "New Session Started",
        1,
        true
      );
      this.ga.setAllowIDFACollection(true);
      this.ga.trackView("Movies Info");
    });
    this.postItems();
  }

  openBookingUrl(url) {
    console.log("---------", url)
    const browser = this.iab.create(url);
  }

  play(link){
    console.log("Youtube video", `https://youtu.be/${link}`)
    this.youtube.openVideo(`https://youtu.be/${link}`);
    // this.iab.create(`https://www.youtube.com/embed/${link}`);
    // const browser = this.iab.create(`https://www.youtube.com/embed/${link}`);
  }

  //onClick for back button
  goBack() {
    this.navCtrl.pop();
  }

  //Passing day value from on click
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
      this.setValues(todaysData);
    } else {
      // loading = this.loadingCtrl.create({
      //   spinner: "hide",
      //   content: `
      //     <span class="spinner-double-dot-in"></span>
      //   `
      // });
      // loading.present();
      this.view = true;
      //Getting offers data from API
      let url =
      `${this.configUrl}/app/movieInfoForDate/` +
        this.item._id +
        `?search=` +
        parseInt(value);
      // console.log(url);
      this.http
        .get(url)
        .map(res => res.json())
        .subscribe(results => {
          // console.log(
          //   ">>Check",
          //   value ==
          //     moment()
          //       .add(0, "days")
          //       .format(`YYYYMMDD`) && todaysData != null
          // );
          this.setValues(results);
          this.showsLength = results.shows.length;
          this.view = false;  
        });
        // loading.dismiss();
        // console.log('view',this.view)
      }
    }
    
  setValues(results) {
    let Obj = {
      novaArray: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/novo.jpg",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      roxyCinemas: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/roxy.png",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      voxCinemas: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/vox.jpg",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      reelCinemas: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/reel.jpg",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      cineRoyal: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/cineroyal.png",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      oscarCinemas: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/oscar.png",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      cenimaCityCinemas: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/cinemacity.png",
        showDetails: false,
        icon: "ios-arrow-down"
      },
      starCinemas: {
        multiplexName: "",
        cinemaArray: [],
        image: "assets/img/star.png",
        showDetails: false,
        icon: "ios-arrow-down"
      }
    };
    // console.log("result",results.shows)
    let final = results.shows.reduce((acc, cv, ci, arr) => {
      // console.log(final, ">>>>>>>>", this.cinema);
      if (cv.multiplexName == "Vox Cinemas") {
        acc.voxCinemas["multiplexName"] = "Vox Cinemas";
        acc.voxCinemas["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "Reel Cinemas") {
        acc.reelCinemas["multiplexName"] = "Reel Cinemas";
        acc.reelCinemas["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "CineRoyal Cinemas") {
        acc.cineRoyal["multiplexName"] = "CineRoyal";
        acc.cineRoyal["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "Oscar Cinemas") {
        acc.oscarCinemas["multiplexName"] = "Oscar Cinemas";
        acc.oscarCinemas["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "CinemaCity Cinemas") {
        acc.cenimaCityCinemas["multiplexName"] = "Cinema City Cinemas";
        acc.cenimaCityCinemas["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "Star Cinemas") {
        acc.starCinemas["multiplexName"] = "Star Cinemas";
        acc.starCinemas["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "Roxy Cinemas") {
        acc.roxyCinemas["multiplexName"] = "Roxy Cinemas";
        acc.roxyCinemas["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      if (cv.multiplexName == "Novo Cinemas") {
        acc.novaArray["multiplexName"] = "Novo Cinemas";
        acc.novaArray["cinemaArray"].push({
          cinemaName: cv.cinemaName,
          sessions: cv.sessions
        });
      }
      
      return acc;
    }, Obj);
    this.cinema = Object.keys(final).map(x => {
      let p = final[x];
      return p;
    });
    // loading.dismiss();

  }

  //Code for Accordin
  toggleDetails(cinema, index) {
    if (this.cinema[index].showDetails) {
      this.cinema[index].showDetails = false;
      this.cinema[index].icon = "ios-arrow-down";
    } else {
      this.cinema.map((x, _index) => {
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

  //Post request for getting showTimes
  postItems() {
    //Show loader till getting data
    loading = this.loadingCtrl.create({
      spinner: "hide",
      content: `
      <span class="spinner-double-dot-in"></span>
        `
    });
    loading.present();

    // console.log(">>>>>>",this.movieId);
    const httpOptions = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    let body = {
      movieId: this.item._id
    };
    // console.log(body);
    this.http
      .post(`${this.configUrl}/app/movie`, body, httpOptions)
      .map(res => res.json())
      .subscribe(results => {
        this.dayValue(
          moment()
            .add(0, "days")
            .format(`YYYYMMDD`),
          results
        );
        
      });
      loading.dismiss();
  }

  ionViewWillEnter() {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieInfoPage");
  }
}
