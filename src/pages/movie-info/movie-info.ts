import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {  Http, Headers, RequestOptions } from '@angular/http';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';



let loading
@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoPage {
  configUrl = "http://uaeshowtimes.com:3006";
  // configUrl = "http://192.168.1.167";
  item:any;
  trustedVideoUrl: SafeResourceUrl;
  http: any;
  selectedSegment: String ='Info'
  movieId:any;
  loadingCtrl:any;
  iab: any;
  currentTime: any;
  icon: any = 'ios-arrow-down';
  cinema:any;
  showDetails: boolean;
  cinemaList:Array<{multiplexName: '', cinamaArray:any }> =[]
  // data: Array<{ image: string, multiplex: string, cinema: any, icon: string, showDetails: boolean}> = [];
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private domSanitizer: DomSanitizer,
    http: Http,
    iab: InAppBrowser,
    loadingCtrl: LoadingController
  ) {
    this.http = http;
    this.iab = iab;
    this.currentTime = Date.now();
    this.loadingCtrl = loadingCtrl;
    this.item = this.navParams.get('movieInfo');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.item.trailer);
    // console.log('<<<<<<<<',this.cinema)
    this.postItems()
  }

  openBookingUrl(url) {
    const browser = this.iab.create(url);
  }

  //Code for Accordin
  toggleDetails(cinema,index) {
   
    if(this.cinema[index].showDetails){
      this.cinema[index].showDetails = false;
      this.cinema[index].icon = 'ios-arrow-down';
    }
    else{
      this.cinema.map((x, _index) =>{
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

  
  postItems() {
    loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: `
        <div class="custom-spinner-container"></div>
          <div class="custom-spinner-box">Please Wait...</div>
        `,
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
    console.log(body)
  this.http
      .post(`${this.configUrl}/app/movie`, body, httpOptions)
      .map(res => res.json())
      .subscribe(results => {
        let Obj = {
          novaArray:{ multiplexName: '', cinemaArray: [], image:'/assets/imgs/novo.jpg', showDetails: false, icon: "ios-arrow-down" },
          roxyCinemas:{ multiplexName: '', cinemaArray: [], image:'/assets/imgs/roxy.png', showDetails: false, icon: "ios-arrow-down" },
          voxCinemas:{ multiplexName: '', cinemaArray: [], image:'/assets/imgs/vox.jpg', showDetails: false, icon: "ios-arrow-down" },
          reelCinemas:{ multiplexName: '', cinemaArray: [], image:'/assets/imgs/reel.jpg', showDetails: false, icon: "ios-arrow-down" }
        }
        // console.log("result",results.shows)
         let final = results.shows.reduce((acc,cv,ci,arr)=>{
          if(cv.multiplexName == 'Novo Cinemas'){
              acc.novaArray['multiplexName'] = 'Novo Cinemas';
              acc.novaArray['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions})
            }
            if(cv.multiplexName == 'Roxy Cinemas'){
              acc.roxyCinemas['multiplexName'] = 'Roxy Cinemas';
              acc.roxyCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions})
            }
            if(cv.multiplexName == 'Vox Cinemas'){
              acc.voxCinemas['multiplexName'] = 'Vox Cinemas';
              acc.voxCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions})
            }
            if(cv.multiplexName == 'Reel Cinemas'){
              acc.reelCinemas['multiplexName'] = 'Reel Cinemas';
              acc.reelCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions})
            }
            return acc;
          },Obj)
          this.cinema  = Object.keys(final).map((x)=>{
            let p = final[x]
            return p;
          })
          console.log(final,'>>>>>>>>', this.cinema)
          loading.dismiss()
      });
    }

  ionViewWillEnter(){
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieInfoPage');
  }

}
