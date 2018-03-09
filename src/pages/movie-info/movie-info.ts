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
  cinema:any;
  cinemaList:Array<{multiplexName: '', cinamaArray:any }> =[]
  data: Array<{ image: string, multiplex: string, cinema: any, icon: string, showDetails: boolean}> = [];
 
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
  
  postItems() {
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
        // console.log("result",results.shows)
         let final = results.shows.reduce((acc,cv,ci,arr)=>{
          if(cv.multiplexName == 'Novo Cinemas'){
              acc.novaArray['multiplexName'] = 'Novo Cinemas';
              acc.novaArray['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
            }
            if(cv.multiplexName == 'Roxy Cinemas'){
              acc.roxyCinemas['multiplexName'] = 'Roxy Cinemas';
              acc.roxyCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
            }
            if(cv.multiplexName == 'Vox Cinemas'){
              acc.voxCinemas['multiplexName'] = 'Vox Cinemas';
              acc.voxCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
            }
            if(cv.multiplexName == 'Reel Cinemas'){
              acc.reelCinemas['multiplexName'] = 'Reel Cinemas';
              acc.reelCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
            }
            return acc;
          },{novaArray:{ multiplexName: '', cinemaArray: [] },roxyCinemas:{ multiplexName: '', cinemaArray: [] },voxCinemas:{ multiplexName: '', cinemaArray: [] },reelCinemas:{ multiplexName: '', cinemaArray: [] }})
          this.cinema  = Object.keys(final).map((x)=>{
            let p = final[x]
            return p;
          })
          console.log(final,'>>>>>>>>', this.cinema)

        // let final2 = results.shows.reduce((acc,cv,ci,arr)=>{
        //   console.log((cv.multiplexName),">>>",typeof cv.multiplexName);console.log(acc[(cv.multiplexName).trim()].multiplexName);
        //   if(cv.multiplexName == acc[cv.multiplexName.trim()].multiplexName){
        //     acc[cv.multiplexName.trim()].multiplexName = cv.multiplexName;
        //     acc[cv.multiplexName.trim()].cinemaArray.push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
        //     }

        //     // if(cv.multiplexName == 'Roxy Cinemas'){
        //     //   acc.roxyCinemas['multiplexName'] = 'Roxy Cinemas';
        //     //   acc.roxyCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
        //     // }
        //     // if(cv.multiplexName == 'Vox Cinemas'){
        //     //   acc.voxCinemas['multiplexName'] = 'Vox Cinemas';
        //     //   acc.voxCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
        //     // }
        //     // if(cv.multiplexName == 'Reel Cinemas'){
        //     //   acc.reelCinemas['multiplexName'] = 'Reel Cinemas';
        //     //   acc.reelCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions })
        //     // }
        //     return acc;
        // },{NovoCinemas:{ multiplexName: 'Novo Cinemas', cinemaArray: [] },RoxyCinemas:{ multiplexName: 'Roxy Cinemas', cinemaArray: [] },VoxCinemas:{ multiplexName: 'Vox Cinemas', cinemaArray: [] },ReelCinemas:{ multiplexName: 'Reel Cinemas', cinemaArray: [] }})
        loading.dismiss()
      });
    }

  ionViewWillEnter(){
    loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: `
        <div class="custom-spinner-container"></div>
          <div class="custom-spinner-box">Please Wait...</div>
        `,
    });

    loading.present();
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieInfoPage');
  }

}
