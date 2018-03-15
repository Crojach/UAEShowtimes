import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { MovieInfoPage } from '../movie-info/movie-info';
import { OrderPipe } from 'ngx-order-pipe';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()


let loading
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})



export class MoviesPage {
  configUrl = 'http://uaeshowtimes.com:3006';
  // configUrl = 'http://192.168.1.167';
  items:any;
  loadingCtrl:any;
  order: any = 'releaseDate';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              loadingCtrl: LoadingController,
              private splashScreen: SplashScreen
              ) {
    this.loadingCtrl = loadingCtrl;
    this.getItems();
    console.log("items>>",this.items)
  }
  bookNow(item){
    console.log("movie page",item)
    this.navCtrl.push(MovieInfoPage, {
      movieInfo: item
   })
  }

  getItems(){
    // loading = this.loadingCtrl.create({
    //   spinner: 'ios',
    //   content: `
    //     <div class="custom-spinner-container"></div>
    //       <div class="custom-spinner-box">Please Wait...</div>
    //     `,
    // });

    // loading.present();

    this.http.get(`${this.configUrl}/app/show-all-movies`).map(res => res.json()).subscribe(
      results => {
      if(results.status){
        this.items = results.movies;
        this.items = this.items.map((x)=>{
          let date = x.releaseDate.split('(')[1].split('+')[0]
          let newDate = new Date(parseInt(date)).toISOString()
          x.releaseDate = newDate.split('T')[0]
          let image = x.thumbnailImage.split('/')
          if(image[0] != 'http:'){
            x.thumbnailImage = 'http://uaeshowtimes.com'+x.thumbnailImage
          }
          return x
        })

        console.log(">>>", this.items)
      }
      else{
        console.log("Sorry Try Again")
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

}
