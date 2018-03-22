import { Component } from '@angular/core';
import {  NavController, NavParams, Platform } from 'ionic-angular';
import {  Http, Headers, RequestOptions } from '@angular/http';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// import moment from 'moment';
import * as moment from 'moment';

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
  daySegment: String = moment().add(0,'days').format(`YYYYMMDD`);
  movieId:any;
  loadingCtrl:any;
  iab: any;
  currentTime: any;
  days:Array<{day: string, value:string }> =[];
  icon: any = 'ios-arrow-down';
  cinema:any;
  showDetails: boolean;
  showsLength:any;
  cinemaList:Array<{multiplexName: '', cinamaArray:any }> =[];
  // data: Array<{ image: string, multiplex: string, cinema: any, icon: string, showDetails: boolean}> = [];
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private domSanitizer: DomSanitizer,
    private platform: Platform,
    private ga:GoogleAnalytics,
    http: Http,
    iab: InAppBrowser,
    loadingCtrl: LoadingController
  ) {

    this.http = http;
    this.iab = iab;
    this.currentTime = Date.now();
    this.loadingCtrl = loadingCtrl;
    this.item = this.navParams.get('movieInfo');
    // let Obj = []
    for(var i=0; i<4; i++){
      this.days.push({
        day:moment().add(i,'days').format('dddd').substring(0,3),
        value:moment().add(i, 'days').format(`YYYYMMDD`),
      })
    }
    // console.log("thidssss",this.days)
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.item.trailer);
    
    this.platform.ready().then(() => {
      this.ga.trackEvent("Movies Info", "Opened", "New Session Started", 1 , true)
      this.ga.setAllowIDFACollection(true)
      this.ga.trackView("Movies Info")
    })
    this.postItems()

  }

  openBookingUrl(url) {
    const browser = this.iab.create(url);
  }

  //onClick for back button
  goBack(){
    this.navCtrl.pop();
  }
  

  //Passing day value from on click
  dayValue(value,todaysData){
    
    if(value == moment().add(0, 'days').format(`YYYYMMDD`) && todaysData != null){
      console.log("!!!!!!!!!!!!!!!!!!", todaysData)
      this.showsLength = todaysData.shows.length;
      this.setValues(todaysData)
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
      let url = `${this.configUrl}/app/movieInfoForDate/`+this.item._id+`?search=`+parseInt(value)
      console.log(url)
      this.http.get(url).map(res => res.json()).subscribe(
        results => {
          console.log(">>Check",value == moment().add(0, 'days').format(`YYYYMMDD`) && todaysData != null)
          this.setValues(results)
          this.showsLength = results.shows.length;
        })
        }
      //   if(results.shows.length >0){
      //    // this.offers = results;
      //   console.log("=========>>",results.shows)              
      // }else{
      //   console.log("Sorry Try Again")
      // }
      //Done we fetching Data
     
      //Dismissing Loader
      // loading.dismiss()
  }
  setValues(results){
    let Obj = {
      novaArray:{ multiplexName: '', cinemaArray: [], image:'assets/img/novo.jpg', showDetails: false, icon: "ios-arrow-down" },
      roxyCinemas:{ multiplexName: '', cinemaArray: [], image:'assets/img/roxy.png', showDetails: false, icon: "ios-arrow-down" },
      voxCinemas:{ multiplexName: '', cinemaArray: [], image:'assets/img/vox.jpg', showDetails: false, icon: "ios-arrow-down" },
      reelCinemas:{ multiplexName: '', cinemaArray: [], image:'assets/img/reel.jpg', showDetails: false, icon: "ios-arrow-down" }
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
      loading.dismiss()
      
      
      console.log(final,'>>>>>>>>', this.cinema)
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

  //Post request for getting showTimes
  postItems() {
    //Show loader till getting data
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
        this.dayValue(moment().add(0, 'days').format(`YYYYMMDD`),results)
      });
    }

  ionViewWillEnter(){
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieInfoPage');
  }

}
