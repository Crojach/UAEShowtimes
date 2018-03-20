webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NavController } from 'ionic-angular';



/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.moviesRoot = __WEBPACK_IMPORTED_MODULE_2__movies_movies__["a" /* MoviesPage */];
        this.musicsRoot = __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__["a" /* CinemasPage */];
        this.offersRoot = __WEBPACK_IMPORTED_MODULE_4__offers_offers__["a" /* OffersPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="moviesRoot" tabTitle="Movies" tabIcon="videocam"></ion-tab>\n    <ion-tab [root]="musicsRoot" tabTitle="Cinemas" tabIcon="ios-film"></ion-tab>\n    <ion-tab [root]="offersRoot" tabTitle="Ticket-Offers" tabIcon="ios-card"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var loading;
var MoviesPage = (function () {
    function MoviesPage(navCtrl, navParams, http, loadingCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.splashScreen = splashScreen;
        this.configUrl = 'http://uaeshowtimes.com:3006';
        this.order = 'releaseDate';
        this.loadingCtrl = loadingCtrl;
        this.getItems();
        console.log("items>>", this.items);
    }
    MoviesPage.prototype.bookNow = function (item) {
        console.log("movie page", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__["a" /* MovieInfoPage */], {
            movieInfo: item
        });
    };
    MoviesPage.prototype.getItems = function () {
        // loading = this.loadingCtrl.create({
        //   spinner: "hide",
        //   content: `
        //   <div class="spinner" >
        //     <div class="dot1"></div>
        //     <div class="dot2"></div>
        //   </div>
        //     `,
        // });
        var _this = this;
        // loading.present();
        this.http.get(this.configUrl + "/app/show-all-movies").map(function (res) { return res.json(); }).subscribe(function (results) {
            if (results.status) {
                _this.items = results.movies;
                _this.items = _this.items.map(function (x) {
                    var date = x.releaseDate.split('(')[1].split('+')[0];
                    var newDate = new Date(parseInt(date)).toISOString();
                    x.releaseDate = newDate.split('T')[0];
                    var image = x.thumbnailImage.split('/');
                    if (image[0] != 'http:') {
                        x.thumbnailImage = 'http://uaeshowtimes.com' + x.thumbnailImage;
                    }
                    return x;
                });
                console.log(">>>", _this.items);
            }
            else {
                console.log("Sorry Try Again");
            }
        });
    };
    MoviesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoviesPage');
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/'<!--\n  Generated template for the MoviesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Movies</ion-title> <br>\n      <ion-row class="searchSort">\n        <ion-searchbar class="search" type="text" [(ngModel)]="queryString"  placeholder="Search Movies"></ion-searchbar>        \n        <ion-select class="sort" [(ngModel)]="order">\n          <ion-option value="releaseDate">Date</ion-option>\n          <ion-option value="title">Title</ion-option>\n        </ion-select>\n      </ion-row>  \n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <div style="padding:2%">\n  <ion-card class="cardCurve" *ngFor="let item of items | FilterPipe: queryString | orderBy: order : order == \'title\' ? false : true ">\n    <ion-item style="padding:2%" (click)=\'bookNow(item)\'>\n      <ion-thumbnail style="margin: 5px;" item-start>\n        <img class="imageCurve" [src]="item.thumbnailImage">\n      </ion-thumbnail>\n      <!-- <ion-row style="justify-content: space-between;">\n        <h2 item-left></h2>\n      </ion-row> -->\n      <h2>{{ item.title }}</h2>\n      <p style="margin:0;" item-end>{{ item.ratings }}</p>\n      <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n      <ion-row  style="margin-top: 10%;">\n        <p style="margin:0;padding: 1%;" item-left>\n            <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon><br>\n            <span style="margin: 0 0 0 14%;">Release Date</span>\n        </p>\n        <p style="margin:0;padding: 1%;" item-end>\n            <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n            <span style="margin: 0 0 0 14%;">Duration</span>\n        </p>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n</div>\n  <!-- \n    <ion-card *ngFor="let item of items">\n        \n            <ion-item>\n            <ion-thumbnail item-start item-start>\n              <img src="{{ item.thumbnailImage }}">\n            </ion-thumbnail>\n            <h3> {{ item.title }}</h3>\n            <p style="font-size: 0.6em;">{{ item.releaseDate }}</p>\n          </ion-item>\n        \n          <img src="{{item.thumbnailImage}}">        \n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="star-half"></ion-icon>\n                <div>{{ item.ratings }}</div>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left small >\n                <div (click)=\'bookNow(item)\'>Book now</div>\n              </button>\n            </ion-col>\n            <ion-col center text-center style="margin-top: 10px;">\n              <ion-note>\n                {{ item.duration }}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import moment from 'moment';

var loading;
var MovieInfoPage = (function () {
    // data: Array<{ image: string, multiplex: string, cinema: any, icon: string, showDetails: boolean}> = [];
    function MovieInfoPage(navCtrl, navParams, domSanitizer, http, iab, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.selectedSegment = 'Info';
        this.daySegment = __WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD");
        this.days = [];
        this.icon = 'ios-arrow-down';
        this.cinemaList = [];
        this.http = http;
        this.iab = iab;
        this.currentTime = Date.now();
        this.loadingCtrl = loadingCtrl;
        this.item = this.navParams.get('movieInfo');
        // let Obj = []
        for (var i = 0; i < 4; i++) {
            this.days.push({
                day: __WEBPACK_IMPORTED_MODULE_5_moment__().add(i, 'days').format('dddd').substring(0, 3),
                value: __WEBPACK_IMPORTED_MODULE_5_moment__().add(i, 'days').format("YYYYMMDD"),
            });
        }
        // console.log("thidssss",this.days)
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.item.trailer);
        this.postItems();
    }
    MovieInfoPage.prototype.openBookingUrl = function (url) {
        var browser = this.iab.create(url);
    };
    //Passing day value from on click
    MovieInfoPage.prototype.dayValue = function (value, todaysData) {
        var _this = this;
        if (value == __WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD") && todaysData != null) {
            console.log("!!!!!!!!!!!!!!!!!!", todaysData);
            this.showsLength = todaysData.shows.length;
            this.setValues(todaysData);
        }
        else {
            loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        ",
            });
            loading.present();
            //Getting offers data from API
            var url = this.configUrl + "/app/movieInfoForDate/" + this.item._id + "?search=" + parseInt(value);
            console.log(url);
            this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (results) {
                console.log(">>Check", value == __WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD") && todaysData != null);
                _this.setValues(results);
                _this.showsLength = results.shows.length;
            });
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
    };
    MovieInfoPage.prototype.setValues = function (results) {
        var Obj = {
            novaArray: { multiplexName: '', cinemaArray: [], image: 'assets/img/novo.jpg', showDetails: false, icon: "ios-arrow-down" },
            roxyCinemas: { multiplexName: '', cinemaArray: [], image: 'assets/img/roxy.png', showDetails: false, icon: "ios-arrow-down" },
            voxCinemas: { multiplexName: '', cinemaArray: [], image: 'assets/img/vox.jpg', showDetails: false, icon: "ios-arrow-down" },
            reelCinemas: { multiplexName: '', cinemaArray: [], image: 'assets/img/reel.jpg', showDetails: false, icon: "ios-arrow-down" }
        };
        // console.log("result",results.shows)
        var final = results.shows.reduce(function (acc, cv, ci, arr) {
            if (cv.multiplexName == 'Novo Cinemas') {
                acc.novaArray['multiplexName'] = 'Novo Cinemas';
                acc.novaArray['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions });
            }
            if (cv.multiplexName == 'Roxy Cinemas') {
                acc.roxyCinemas['multiplexName'] = 'Roxy Cinemas';
                acc.roxyCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions });
            }
            if (cv.multiplexName == 'Vox Cinemas') {
                acc.voxCinemas['multiplexName'] = 'Vox Cinemas';
                acc.voxCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions });
            }
            if (cv.multiplexName == 'Reel Cinemas') {
                acc.reelCinemas['multiplexName'] = 'Reel Cinemas';
                acc.reelCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions });
            }
            return acc;
        }, Obj);
        this.cinema = Object.keys(final).map(function (x) {
            var p = final[x];
            return p;
        });
        loading.dismiss();
        console.log(final, '>>>>>>>>', this.cinema);
    };
    //Code for Accordin
    MovieInfoPage.prototype.toggleDetails = function (cinema, index) {
        if (this.cinema[index].showDetails) {
            this.cinema[index].showDetails = false;
            this.cinema[index].icon = 'ios-arrow-down';
        }
        else {
            this.cinema.map(function (x, _index) {
                if (_index == index) {
                    x.showDetails = true;
                    x.icon = 'ios-arrow-up';
                }
                else {
                    x.showDetails = false;
                    x.icon = 'ios-arrow-down';
                }
            });
        }
    };
    //Post request for getting showTimes
    MovieInfoPage.prototype.postItems = function () {
        var _this = this;
        //Show loader till getting data
        loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        ",
        });
        loading.present();
        // console.log(">>>>>>",this.movieId);
        var httpOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
        var body = {
            movieId: this.item._id
        };
        console.log(body);
        this.http
            .post(this.configUrl + "/app/movie", body, httpOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (results) {
            _this.dayValue(__WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD"), results);
        });
    };
    MovieInfoPage.prototype.ionViewWillEnter = function () {
    };
    MovieInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieInfoPage');
    };
    MovieInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-info',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/'<!--\n  Generated template for the MovieInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n    <iframe style="width: 100%;" [src]="trustedVideoUrl ? trustedVideoUrl : \'\'" frameborder="0" allowfullscreen></iframe>\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n  <ion-thumbnail item-start>\n    <img class="customImg upShadow" [src]="item.thumbnailImage">\n  </ion-thumbnail>\n    <ion-card class="upShadow curve" style="padding: 0; width: 100%;margin: 0 0 14px 0;">\n        <ion-item style="padding: 2% 1% 4% 34%;">\n          <ion-row style="justify-content: space-between;">\n            <h2 item-left>{{ item.title }}</h2>\n            <p style="margin:0;" item-end>{{ item.ratings }}</p>\n          </ion-row>\n          <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n          <ion-row  style="margin-top: 10%;">\n            <p style="margin:0;padding: 1%;" item-left>\n                <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon><br>\n                <span style="margin: 0 0 0 14%;">Release Date</span>\n            </p>\n            <p style="margin:0;padding: 1%;" item-end>\n                <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n                <span style="margin: 0 0 0 14%;">Duration</span>\n            </p>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n        <div>\n          <ion-segment [(ngModel)]="selectedSegment">\n              <ion-segment-button value="Info">Info</ion-segment-button>\n            <ion-segment-button value="Cast">Cast</ion-segment-button>\n          </ion-segment>\n        </div>\n        \n        <div [ngSwitch]="selectedSegment">\n          <ion-list class="iconColor" *ngSwitchCase="\'Info\'">\n            <ion-card class="infoCard">\n                  <ion-item class="iconColor">\n                    <ion-icon name=\'videocam\' item-start></ion-icon>\n                    Synopsis\n                    <p style="white-space: pre-wrap;">{{ item.synopsis }}</p>\n                  </ion-item>\n                <ion-item class="iconColor">\n                  <ion-icon name=\'eye\' item-start></ion-icon>\n                  Language\n                  <ion-note item-end>{{ item.language }}</ion-note>\n                </ion-item>\n                <ion-item class="iconColor">\n                  <ion-icon name=\'flag\' item-start></ion-icon>\n                  Genre\n                  <ion-note item-end>{{ item.genre }}</ion-note>\n                </ion-item>\n                <ion-item class="iconColor">\n                  <ion-icon name=\'film\' item-start></ion-icon>\n                  Director\n                  <ion-note item-end>{{ item.director }}</ion-note>\n                </ion-item> \n              </ion-card>  \n\n            <h4>Showtimes</h4>\n            <div>\n              <ion-row>\n                <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                    <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                </ion-segment>\n              </ion-row>  <br>\n              </div>\n              <div *ngIf = "showsLength == 0 "><p>No Showtimes</p></div>\n              <div *ngFor="let d of cinema; let i = index" (click)="toggleDetails(d,i)">\n                <div *ngIf="d.multiplexName !== \'\'" style="background-color: transparent;" >\n                    <ion-card class="cardCurve">\n                      <ion-item style="background-color: transparent">\n                          <ion-row style="margin-top: 10px;"> \n                            <img class="cinemaImage" [src]="d.image" alt="Cinemas Image">\n                            <ion-note style="margin:auto">{{ d.multiplexName }}</ion-note>\n                            <ion-icon style="margin:auto" color="danger" item-right [name]="d.icon"></ion-icon> \n                          </ion-row>\n                        </ion-item> \n                      \n                      <div class="showtimesPadding" *ngIf="d.showDetails">\n                        <div *ngFor="let show of d.cinemaArray">\n                          <h3> {{ show.cinemaName }} </h3><br>\n                          <ion-row>\n                            <div style="width:33.33%" *ngFor="let time of show.sessions">\n                            <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                          </div>\n                          </ion-row><br>\n                        </div> \n                      </div> \n                    </ion-card>  \n                  </div>             \n                </div>\n            </ion-list>\n\n          <ion-list *ngSwitchCase="\'Cast\'">\n            <ion-item style="background-color: transparent;">\n              <ion-thumbnail item-start>\n                <img [src]="item.thumbnailImage">\n              </ion-thumbnail>\n              <h2>Ruby</h2>\n            </ion-item>\n          </ion-list>\n        </div>\n    </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], MovieInfoPage);
    return MovieInfoPage;
}());

//# sourceMappingURL=movie-info.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Title } from '@angular/platform-browser';
/**
 * Generated class for the MusicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var loading;
var CinemasPage = (function () {
    function CinemasPage(http, navCtrl, loadingCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.configUrl = 'http://uaeshowtimes.com:3006';
        this.icon = 'ios-arrow-down';
        this.cinemasTitles = ["assets/img/cinescape.png", "assets/img/novo.jpg", "assets/img/reel.jpg", "assets/img/roxy.png", "assets/img/vox.jpg"];
        this.loadingCtrl = loadingCtrl;
        this.getItems();
    }
    CinemasPage.prototype.cinemaPage = function (id) {
        // console.log("!!!!!!!!!", id)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__["a" /* CinemaInfoPage */], {
            cinemaId: id
        });
    };
    CinemasPage.prototype.toggleDetails = function (data, index) {
        if (this.data[index].showDetails) {
            this.data[index].showDetails = false;
            this.data[index].icon = 'ios-arrow-down';
        }
        else {
            this.data.map(function (x, _index) {
                if (_index == index) {
                    x.showDetails = true;
                    x.icon = 'ios-arrow-up';
                }
                else {
                    x.showDetails = false;
                    x.icon = 'ios-arrow-down';
                }
            });
        }
    };
    CinemasPage.prototype.getItems = function () {
        var _this = this;
        loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"spinner\" >\n          <div class=\"dot1\"></div>\n          <div class=\"dot2\"></div>\n        </div>\n        ",
        });
        loading.present();
        this.http.get(this.configUrl + "/app/showAllCinemas").map(function (res) { return res.json(); }).subscribe(function (results) {
            if (results.status) {
                // console.log("result>>",results.cinemas)
                _this.cinemas = results.cinemas;
                results.cinemas.map(function (x, index) {
                    // console.log(this.cinemasTitles)
                    _this.data.push({
                        image: _this.cinemasTitles[index],
                        multiplex: x.multiplex,
                        cinema: x.cinema,
                        icon: 'ios-arrow-down',
                        showDetails: false
                    });
                });
                loading.dismiss();
                console.log("result>>", _this.data);
            }
            else {
                console.log("Sorry Try Again");
            }
        });
        // http://uaeshowtimes.com/app/show-all-movies
    };
    CinemasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicsPage');
    };
    CinemasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musics',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/'<!--\n  Generated template for the MusicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="headerShadow">\n    <ion-title style= "color:azure">Cinemas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-list>\n      <div *ngFor="let d of data; let i = index" (click)="toggleDetails(d,i)">\n        <ion-card class="cardCurve">\n          <ion-row>  \n            <img class="cinemaImage"  [src]="d.image" alt="Cinemas Image" nopadding>  \n            <h4 style="margin: auto; color:#928C89">{{ d.multiplex }}</h4>\n          </ion-row>\n          <div *ngIf="d.showDetails">\n            <a class="coralColor" *ngFor="let col of d.cinema;" (click)=\'cinemaPage(col._id)\'>\n              <ul>\n                <li>{{col.cinemaName}}</li>\n              </ul>\n            </a>\n          </div>\n        </ion-card>\n      </div>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CinemasPage);
    return CinemasPage;
}());

//# sourceMappingURL=cinemas.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_map_google_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import moment from 'moment';

/**
 * Generated class for the CinemaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var loading;
var CinemaInfoPage = (function () {
    function CinemaInfoPage(http, navCtrl, navParams, iab, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // configUrl = 'http://192.168.1.167';
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.days = [];
        this.daySegment = __WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD");
        this.http = http;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.currentTime = Date.now();
        this.cinemaId = this.navParams.get("cinemaId");
        //For getting next 3 day
        for (var i = 0; i < 4; i++) {
            this.days.push({
                day: __WEBPACK_IMPORTED_MODULE_5_moment__().add(i, 'days').format('dddd').substring(0, 3),
                value: __WEBPACK_IMPORTED_MODULE_5_moment__().add(i, 'days').format("YYYYMMDD"),
            });
        }
        this.postItems(i);
    }
    // ionViewDidLoad() {
    //   this.initializeMap();
    // }
    CinemaInfoPage.prototype.openBookingUrl = function (url) {
        var browser = this.iab.create(url);
    };
    CinemaInfoPage.prototype.goToGoogleMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__google_map_google_map__["a" /* GoogleMapPage */]);
    };
    //Getting cinema sessions of day selected
    CinemaInfoPage.prototype.dayValue = function (value, todaysData) {
        var _this = this;
        if (value == __WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD") && todaysData != null) {
            console.log("!!!!!!!!!!!!!!!!!!", todaysData);
            this.showsLength = todaysData.shows.length;
            this.postItems(todaysData);
        }
        else {
            loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        ",
            });
            loading.present();
            //Getting offers data from API
            var url = this.configUrl + "/app/cinemaInfoForDate/" + this.cinemaId + "?search=" + parseInt(value);
            console.log(url);
            this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (results) {
                // console.log(">>Check",value == moment().add(0, 'days').format(`YYYYMMDD`) && todaysData != null)
                // this.postItems(results)
                loading.dismiss();
                // console.log("**********", results)
                _this.selectedDay = results.finalMovies;
                // this.showsLength = results.shows.length;
            });
        }
    };
    CinemaInfoPage.prototype.postItems = function (results) {
        var _this = this;
        loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        ",
        });
        loading.present();
        console.log(this.cinemaId);
        var httpOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
                // 'Content-Type':  'application/x-www-form-urlencoded',
                // 'Authorization': 'my-auth-token'
            })
        });
        var body = {
            cinemaId: this.cinemaId
        };
        this.http
            .post(this.configUrl + "/app/cinema", body, httpOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (results) {
            console.log("POWER", results);
            _this.cinemaInfo = results.cinema;
            _this.selectedDay = results.finalMovies;
            console.log("######ÆôÄzäs", _this.cinemaInfo);
            console.log("######", _this.cinemaInfo[0].latitude, _this.cinemaInfo[0].longitude);
            _this.initializeMap(_this.cinemaInfo[0].latitude, _this.cinemaInfo[0].longitude);
            loading.dismiss();
            // this.loadMap();
        });
    };
    CinemaInfoPage.prototype.initializeMap = function (lat, long) {
        var _this = this;
        var locationOptions = { timeout: 20000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var options = {
                center: new google.maps.LatLng(lat, long
                // position.coords.latitude,
                // position.coords.longitude
                ),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
        }, function (error) {
            console.log(error);
        }, locationOptions);
    };
    CinemaInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cinema-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/'<!--\n  Generated template for the CinemaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cinema Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div id="map_canvas"></div>\n  <ion-card>\n      <div *ngFor="let d of cinemaInfo">\n          <ion-fab right top>\n            <button ion-fab>\n              <ion-icon (click)="goToGoogleMap()" name="pin"></ion-icon>\n            </button>\n          </ion-fab>\n        <ion-item>\n            <ion-row>\n              <ion-icon ios="ios-navigate" md="md-navigate">\n                <h3>{{d.cinemaName}}</h3>\n                  <p class="customFont wordBreak">{{ d.cityName }}, {{ d.stateName }}, {{ d.countryName}}</p>\n              </ion-icon>\n            </ion-row>\n        </ion-item>\n\n        <ion-item>\n          <ion-row>\n            <ion-icon ios="ios-call" md="md-call" >\n              <p class="text">{{ d.phoneNumber }}</p>\n            </ion-icon>\n          </ion-row>\n        </ion-item>\n      \n        <ion-item>\n          <ion-row>\n              <ion-icon ios="ios-mail" md="md-mail" nopadding>\n                <p class="text wordBreak">{{ d.emailId }} </p>\n              </ion-icon>\n               \n              </ion-row>\n        </ion-item>\n      </div>\n    </ion-card>  \n          <!-- -------------------ShowTime------------------------------------------ -->\n      <h4>Showtimes</h4>\n            <div>\n              <ion-row>\n                <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                    <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                </ion-segment>\n              </ion-row>  <br>\n                <div *ngFor="let session of selectedDay">\n                  <ion-card class="cardCurve">\n                    <h4 class="showTimeHeader">{{ session.movieTitle }}</h4>\n                     <ion-row>\n                      <div style="width:33.33%" *ngFor="let time of session.sessions">\n                        <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                      </div>\n                     </ion-row>  \n                    </ion-card>  \n                  </div>\n                </div>\n\n       \n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _e || Object])
    ], CinemaInfoPage);
    return CinemaInfoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cinema-info.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GoogleMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GoogleMapPage = (function () {
    function GoogleMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GoogleMapPage.prototype.ionViewDidLoad = function () {
        this.initializeMap();
    };
    GoogleMapPage.prototype.initializeMap = function () {
        var _this = this;
        var locationOptions = { timeout: 20000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var options = {
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
        }, function (error) {
            console.log(error);
        }, locationOptions);
    };
    GoogleMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-google-map",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\google-map\google-map.html"*/'<!--\n  Generated template for the GoogleMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Cinema Location \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n    <div id="map_canvas"></div>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\google-map\google-map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GoogleMapPage);
    return GoogleMapPage;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var loading;
var OffersPage = (function () {
    function OffersPage(navCtrl, navParams, http, iab, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.configUrl = 'http://uaeshowtimes.com:3006';
        this.icon = 'ios-arrow-down';
        this.data = [];
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.getOffers();
    }
    // Code for Accordin
    OffersPage.prototype.toggleDetails = function (data, index) {
        // console.log("toggle",index)
        if (this.data[index].showDetails) {
            this.data[index].showDetails = false;
            this.data[index].icon = 'ios-arrow-down';
        }
        else {
            this.data.map(function (x, _index) {
                if (_index == index) {
                    x.showDetails = true;
                    x.icon = 'ios-arrow-up';
                }
                else {
                    x.showDetails = false;
                    x.icon = 'ios-arrow-down';
                }
            });
        }
    };
    //Redirecting  to offer
    OffersPage.prototype.openOfferSite = function (url) {
        var browser = this.iab.create(url);
    };
    //Function for getting offers
    OffersPage.prototype.getOffers = function () {
        var _this = this;
        //Turn loader on till we get the data
        loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        ",
        });
        loading.present();
        //Getting offers data from API
        this.http.get(this.configUrl + "/app/ticketOffers").map(function (res) { return res.json(); }).subscribe(function (results) {
            if (results.status) {
                results.offers.map(function (x, index) {
                    // console.log(this.cinemasTitles)
                    _this.data.push({
                        offer: x,
                        icon: 'ios-arrow-down',
                        showDetails: false
                    });
                });
                console.log("###Power####", _this.data);
            }
            else {
                console.log("Sorry Try Again");
            }
            //Done we fetching Data
            //Dismissing Loader
            loading.dismiss();
        });
    };
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="headerShadow">\n    <ion-title  style="color: white;">Ticket Offers</ion-title> <br>\n    <!-- <input type="text" [(ngModel)]="queryString" id="search" placeholder="Search Offers"> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <div *ngFor="let item of data; let i = index" (click)="toggleDetails(item, i)" nopadding>\n      <ion-card class="cardCurve" *ngIf="item.offer.title" nopadding>\n       <div nopadding>\n            <ion-row padding> \n              <ion-col>\n                <h5 *ngIf="item.offer.multiplexId == 6">VOX Cinemas</h5>\n                <h5 *ngIf="item.offer.multiplexId == 8">NOVO Cinemas</h5>\n                <h5 *ngIf="item.offer.multiplexId == 7">ROXY Cinemas</h5>\n                <h5 *ngIf="item.offer.multiplexId == 9">Reel Cinemas</h5>\n                <h5 *ngIf="item.offer.multiplexId == 10">CINESCAPE Cinemas</h5>\n                <p class="subTitle">{{ item.offer.title }}</p>\n              </ion-col> \n                <ion-icon color="danger" item-right [name]="item.icon" width="100%"></ion-icon> \n             </ion-row>\n            <div  class="lineHeight" *ngIf="item.showDetails" (click)="openOfferSite(item.offer.url)" nopadding>\n                <object data="http://stackoverflow.com/does-not-exist.png" type="image/png">\n                  <img src="http://uaeshowtimes.com{{item.offer.image}}" alt="Offer Image">\n                </object>\n             <div class="htmlContent" [innerHtml]="item.offer.htmlData"></div>\n           </div>\n          </div>\n        </ion-card>\n      </div>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cinemas_cinemas__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_movie_info_movie_info__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cinema_info_cinema_info__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_offers_offers__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_google_map_google_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pipes__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pages_google_map_google_map__["a" /* GoogleMapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_google_map_google_map__["a" /* GoogleMapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* LoadingController */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.oneSignal.startInit("d840b75f-705d-4dcd-bb76-dc46fa6fc1f7", "269153372159");
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
            });
            _this.oneSignal.endInit();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 204,
	"./af.js": 204,
	"./ar": 205,
	"./ar-dz": 206,
	"./ar-dz.js": 206,
	"./ar-kw": 207,
	"./ar-kw.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 205,
	"./az": 212,
	"./az.js": 212,
	"./be": 213,
	"./be.js": 213,
	"./bg": 214,
	"./bg.js": 214,
	"./bm": 215,
	"./bm.js": 215,
	"./bn": 216,
	"./bn.js": 216,
	"./bo": 217,
	"./bo.js": 217,
	"./br": 218,
	"./br.js": 218,
	"./bs": 219,
	"./bs.js": 219,
	"./ca": 220,
	"./ca.js": 220,
	"./cs": 221,
	"./cs.js": 221,
	"./cv": 222,
	"./cv.js": 222,
	"./cy": 223,
	"./cy.js": 223,
	"./da": 224,
	"./da.js": 224,
	"./de": 225,
	"./de-at": 226,
	"./de-at.js": 226,
	"./de-ch": 227,
	"./de-ch.js": 227,
	"./de.js": 225,
	"./dv": 228,
	"./dv.js": 228,
	"./el": 229,
	"./el.js": 229,
	"./en-au": 230,
	"./en-au.js": 230,
	"./en-ca": 231,
	"./en-ca.js": 231,
	"./en-gb": 232,
	"./en-gb.js": 232,
	"./en-ie": 233,
	"./en-ie.js": 233,
	"./en-il": 234,
	"./en-il.js": 234,
	"./en-nz": 235,
	"./en-nz.js": 235,
	"./eo": 236,
	"./eo.js": 236,
	"./es": 237,
	"./es-do": 238,
	"./es-do.js": 238,
	"./es-us": 239,
	"./es-us.js": 239,
	"./es.js": 237,
	"./et": 240,
	"./et.js": 240,
	"./eu": 241,
	"./eu.js": 241,
	"./fa": 242,
	"./fa.js": 242,
	"./fi": 243,
	"./fi.js": 243,
	"./fo": 244,
	"./fo.js": 244,
	"./fr": 245,
	"./fr-ca": 246,
	"./fr-ca.js": 246,
	"./fr-ch": 247,
	"./fr-ch.js": 247,
	"./fr.js": 245,
	"./fy": 248,
	"./fy.js": 248,
	"./gd": 249,
	"./gd.js": 249,
	"./gl": 250,
	"./gl.js": 250,
	"./gom-latn": 251,
	"./gom-latn.js": 251,
	"./gu": 252,
	"./gu.js": 252,
	"./he": 253,
	"./he.js": 253,
	"./hi": 254,
	"./hi.js": 254,
	"./hr": 255,
	"./hr.js": 255,
	"./hu": 256,
	"./hu.js": 256,
	"./hy-am": 257,
	"./hy-am.js": 257,
	"./id": 258,
	"./id.js": 258,
	"./is": 259,
	"./is.js": 259,
	"./it": 260,
	"./it.js": 260,
	"./ja": 261,
	"./ja.js": 261,
	"./jv": 262,
	"./jv.js": 262,
	"./ka": 263,
	"./ka.js": 263,
	"./kk": 264,
	"./kk.js": 264,
	"./km": 265,
	"./km.js": 265,
	"./kn": 266,
	"./kn.js": 266,
	"./ko": 267,
	"./ko.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mr": 277,
	"./mr.js": 277,
	"./ms": 278,
	"./ms-my": 279,
	"./ms-my.js": 279,
	"./ms.js": 278,
	"./mt": 280,
	"./mt.js": 280,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./tg": 307,
	"./tg.js": 307,
	"./th": 308,
	"./th.js": 308,
	"./tl-ph": 309,
	"./tl-ph.js": 309,
	"./tlh": 310,
	"./tlh.js": 310,
	"./tr": 311,
	"./tr.js": 311,
	"./tzl": 312,
	"./tzl.js": 312,
	"./tzm": 313,
	"./tzm-latn": 314,
	"./tzm-latn.js": 314,
	"./tzm.js": 313,
	"./ug-cn": 315,
	"./ug-cn.js": 315,
	"./uk": 316,
	"./uk.js": 316,
	"./ur": 317,
	"./ur.js": 317,
	"./uz": 318,
	"./uz-latn": 319,
	"./uz-latn.js": 319,
	"./uz.js": 318,
	"./vi": 320,
	"./vi.js": 320,
	"./x-pseudo": 321,
	"./x-pseudo.js": 321,
	"./yo": 322,
	"./yo.js": 322,
	"./zh-cn": 323,
	"./zh-cn.js": 323,
	"./zh-hk": 324,
	"./zh-hk.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 407;

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.title.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'FilterPipe',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=pipes.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map