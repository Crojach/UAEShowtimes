import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CinemaInfoPage } from '../cinema-info/cinema-info';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Title } from '@angular/platform-browser';

/**
 * Generated class for the MusicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-musics',
  templateUrl: 'cinemas.html',
})
export class CinemasPage {
  data: Array<{ image: string, multiplex: string, cinema: any, icon: string, showDetails: boolean}> = [];
  configUrl = 'http://uaeshowtimes.com/app/showAllCinemas';
  cinemas:any;
  icon:any ='ios-arrow-down';
  cinemasTitles = ["/assets/imgs/novo.jpg", "/assets/imgs/reel.jpg", "/assets/imgs/roxy.png", "/assets/imgs/vox.jpg"];
  
  constructor(public http : Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getItems()
  }
  
  

  cinemaPage(id){
    console.log("!!!!!!!!!", id)
    this.navCtrl.push(CinemaInfoPage,{
      cinemaId : id
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
    this.http.get(this.configUrl).map(res => res.json()).subscribe(
      results => {
        if(results.status){
          console.log("result>>",results.cinemas)
          this.cinemas = results.cinemas;
          results.cinemas.map((x, index) => {
            console.log(this.cinemasTitles)
            this.data.push({              
              image: this.cinemasTitles[index],
              multiplex: x.multiplex,
              cinema: x.cinema,
              icon: 'ios-arrow-down',
              showDetails: false
            })
          })
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