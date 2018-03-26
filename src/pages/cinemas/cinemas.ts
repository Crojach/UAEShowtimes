import { Component } from '@angular/core';
import { NavController, NavParams, Platform  } from 'ionic-angular';
import { CinemaInfoPage } from '../cinema-info/cinema-info';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import 'rxjs/add/operator/map';
// import { Title } from '@angular/platform-browser';

/**
 * Generated class for the MusicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
let loading
@Component({
  selector: 'page-musics',
  templateUrl: 'cinemas.html',
})
export class CinemasPage {
  data: Array<{ image: string, multiplex: string, cinema: any, icon: string, showDetails: boolean}> = [];
  configUrl = 'http://uaeshowtimes.com:3006';
  // configUrl = 'http://192.168.1.167';
  cinemas:any;
  loadingCtrl:any;
  icon:any ='ios-arrow-down';
  cinemasTitles = ["assets/img/novo.jpg", "assets/img/reel.jpg", "assets/img/roxy.png", "assets/img/vox.jpg"];
  
  constructor(
              public http : Http, 
              public navCtrl: NavController,
              loadingCtrl: LoadingController, 
              public navParams: NavParams,
              private platform: Platform,
              private ga:GoogleAnalytics,
            ) {
    this.loadingCtrl = loadingCtrl;
    this.getItems()

    this.platform.ready().then(() => {
      this.ga.trackEvent("Cinema page", "Opened", "New Session Started", 1 , true)
      this.ga.setAllowIDFACollection(true)
      this.ga.trackView("Cinema page")
    })
  }

  cinemaPage(id, cinemaName){
    // console.log("!!!!!!!!!", id)
    this.navCtrl.push(CinemaInfoPage,{
      cinemaId : id,
      cinemaName: cinemaName
   })
  }


  toggleDetails(data,index) {
   
    if(this.data[index].showDetails){
      this.data[index].showDetails = false;
      this.data[index].icon = 'ios-arrow-down';
    }
    else{
      this.data.map((x, _index) =>{
        if(_index == index){
          x.showDetails = true;
          x.icon = 'ios-arrow-up';
        }
        else{
          x.showDetails = false;
          x.icon = 'ios-arrow-down';
        }
      })
    }
  }

  getItems(){
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
    this.http.get(`${this.configUrl}/app/showAllCinemas`).map(res => res.json()).subscribe(
      results => {
        if(results.status){
          // console.log("result>>",results.cinemas)
          this.cinemas = results.cinemas;
          results.cinemas.map((x, index) => {
            // console.log(this.cinemasTitles)
            this.data.push({              
              image: this.cinemasTitles[index],
              multiplex: x.multiplex,
              cinema: x.cinema,
              icon: 'ios-arrow-down',
              showDetails: false
            })
          })
        loading.dismiss();
        console.log("result>>",this.data)
      }
      else{
        console.log("Sorry Try Again")
      }
    })
    // http://uaeshowtimes.com/app/show-all-movies
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicsPage');
  }

}
