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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(327);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(204);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(328);
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

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(200);
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
    CinemaInfoPage.prototype.openBookingUrl = function (url) {
        var browser = this.iab.create(url);
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
                console.log(">>Check", value == __WEBPACK_IMPORTED_MODULE_5_moment__().add(0, 'days').format("YYYYMMDD") && todaysData != null);
                // this.postItems(results)
                loading.dismiss();
                console.log("**********", results);
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
            console.log(_this.cinemaInfo);
            loading.dismiss();
            _this.loadMap();
        });
    };
    CinemaInfoPage.prototype.ionViewWillEnter = function () {
    };
    CinemaInfoPage.prototype.loadMap = function () {
        console.log("loadmpa");
        var mapOptions = {
            camera: {
                target: {
                    lat: this.cinemaInfo["0"].latitude,
                    lng: this.cinemaInfo["0"].longitude
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */].create("map", mapOptions);
        // Wait the MAP_READY before using any methods.
        // this.map.one(GoogleMapsEvent.MAP_READY)
        //   .then(() => {
        //     console.log('Map is ready!');
        //     // Now you can use all methods safely.
        //     this.map.addMarker({
        //         title: 'Ionic',
        //         icon: 'blue',
        //         animation: 'DROP',
        //         position: {
        //           lat: 43.0741904,
        //           lng: -89.3809802
        //         }
        //       })
        //       .then(marker => {
        //         marker.on(GoogleMapsEvent.MARKER_CLICK)
        //           .subscribe(() => {
        //             alert('clicked');
        //           });
        //       });
        //   });
        //   this.map.setDiv('map')
    };
    CinemaInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cinema-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/'<!--\n  Generated template for the CinemaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cinema Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n      <div *ngFor="let d of cinemaInfo">\n        <div #map id="map">\n          <ion-fab right top>\n            <button ion-fab>\n              <ion-icon name="pin"></ion-icon>\n            </button>\n          </ion-fab>\n        </div>\n        <ion-item>\n            <ion-row>\n              <ion-icon ios="ios-navigate" md="md-navigate">\n                <h3>{{d.cinemaName}}</h3>\n                  <p class="customFont wordBreak">{{ d.cityName }}, {{ d.stateName }}, {{ d.countryName}}</p>\n              </ion-icon>\n            </ion-row>\n        </ion-item>\n\n        <ion-item>\n          <ion-row>\n            <ion-icon ios="ios-call" md="md-call" >\n              <p class="text">{{ d.phoneNumber }}</p>\n            </ion-icon>\n          </ion-row>\n        </ion-item>\n      \n        <ion-item>\n          <ion-row>\n              <ion-icon ios="ios-mail" md="md-mail" nopadding>\n                <p class="text wordBreak">{{ d.emailId }} </p>\n              </ion-icon>\n               \n              </ion-row>\n        </ion-item>\n      </div>\n    </ion-card>  \n          <!-- -------------------ShowTime------------------------------------------ -->\n      <h4>Showtimes</h4>\n            <div>\n              <ion-row>\n                <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                    <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                </ion-segment>\n              </ion-row>  <br>\n                <div *ngFor="let session of selectedDay">\n                  <ion-card class="cardCurve">\n                    <h4 class="showTimeHeader">{{ session.movieTitle }}</h4>\n                     <ion-row>\n                      <div *ngFor="let time of session.sessions">\n                        <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                      </div>\n                     </ion-row>  \n                    </ion-card>  \n                  </div>\n                </div>\n\n       \n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], CinemaInfoPage);
    return CinemaInfoPage;
}());

//# sourceMappingURL=cinema-info.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_movies_movies__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cinemas_cinemas__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_movie_info_movie_info__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cinema_info_cinema_info__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_offers_offers__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes__ = __webpack_require__(408);
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
                __WEBPACK_IMPORTED_MODULE_18__pipes__["a" /* FilterPipe */],
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(202);
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 205,
	"./af.js": 205,
	"./ar": 206,
	"./ar-dz": 207,
	"./ar-dz.js": 207,
	"./ar-kw": 208,
	"./ar-kw.js": 208,
	"./ar-ly": 209,
	"./ar-ly.js": 209,
	"./ar-ma": 210,
	"./ar-ma.js": 210,
	"./ar-sa": 211,
	"./ar-sa.js": 211,
	"./ar-tn": 212,
	"./ar-tn.js": 212,
	"./ar.js": 206,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bm": 216,
	"./bm.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-au": 231,
	"./en-au.js": 231,
	"./en-ca": 232,
	"./en-ca.js": 232,
	"./en-gb": 233,
	"./en-gb.js": 233,
	"./en-ie": 234,
	"./en-ie.js": 234,
	"./en-il": 235,
	"./en-il.js": 235,
	"./en-nz": 236,
	"./en-nz.js": 236,
	"./eo": 237,
	"./eo.js": 237,
	"./es": 238,
	"./es-do": 239,
	"./es-do.js": 239,
	"./es-us": 240,
	"./es-us.js": 240,
	"./es.js": 238,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 246,
	"./fr-ca": 247,
	"./fr-ca.js": 247,
	"./fr-ch": 248,
	"./fr-ch.js": 248,
	"./fr.js": 246,
	"./fy": 249,
	"./fy.js": 249,
	"./gd": 250,
	"./gd.js": 250,
	"./gl": 251,
	"./gl.js": 251,
	"./gom-latn": 252,
	"./gom-latn.js": 252,
	"./gu": 253,
	"./gu.js": 253,
	"./he": 254,
	"./he.js": 254,
	"./hi": 255,
	"./hi.js": 255,
	"./hr": 256,
	"./hr.js": 256,
	"./hu": 257,
	"./hu.js": 257,
	"./hy-am": 258,
	"./hy-am.js": 258,
	"./id": 259,
	"./id.js": 259,
	"./is": 260,
	"./is.js": 260,
	"./it": 261,
	"./it.js": 261,
	"./ja": 262,
	"./ja.js": 262,
	"./jv": 263,
	"./jv.js": 263,
	"./ka": 264,
	"./ka.js": 264,
	"./kk": 265,
	"./kk.js": 265,
	"./km": 266,
	"./km.js": 266,
	"./kn": 267,
	"./kn.js": 267,
	"./ko": 268,
	"./ko.js": 268,
	"./ky": 269,
	"./ky.js": 269,
	"./lb": 270,
	"./lb.js": 270,
	"./lo": 271,
	"./lo.js": 271,
	"./lt": 272,
	"./lt.js": 272,
	"./lv": 273,
	"./lv.js": 273,
	"./me": 274,
	"./me.js": 274,
	"./mi": 275,
	"./mi.js": 275,
	"./mk": 276,
	"./mk.js": 276,
	"./ml": 277,
	"./ml.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./mt": 281,
	"./mt.js": 281,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./tg": 308,
	"./tg.js": 308,
	"./th": 309,
	"./th.js": 309,
	"./tl-ph": 310,
	"./tl-ph.js": 310,
	"./tlh": 311,
	"./tlh.js": 311,
	"./tr": 312,
	"./tr.js": 312,
	"./tzl": 313,
	"./tzl.js": 313,
	"./tzm": 314,
	"./tzm-latn": 315,
	"./tzm-latn.js": 315,
	"./tzm.js": 314,
	"./ug-cn": 316,
	"./ug-cn.js": 316,
	"./uk": 317,
	"./uk.js": 317,
	"./ur": 318,
	"./ur.js": 318,
	"./uz": 319,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 319,
	"./vi": 321,
	"./vi.js": 321,
	"./x-pseudo": 322,
	"./x-pseudo.js": 322,
	"./yo": 323,
	"./yo.js": 323,
	"./zh-cn": 324,
	"./zh-cn.js": 324,
	"./zh-hk": 325,
	"./zh-hk.js": 325,
	"./zh-tw": 326,
	"./zh-tw.js": 326
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
webpackContext.id = 406;

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 408:
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