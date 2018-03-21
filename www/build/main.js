webpackJsonp([0],{

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(353);
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
    function TabsPage(navCtrl, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.superTabsCtrl = superTabsCtrl;
        this.moviesRoot = __WEBPACK_IMPORTED_MODULE_2__movies_movies__["a" /* MoviesPage */];
        this.musicsRoot = __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__["a" /* CinemasPage */];
        this.offersRoot = __WEBPACK_IMPORTED_MODULE_4__offers_offers__["a" /* OffersPage */];
    }
    TabsPage.prototype.slideToIndex = function (index) {
        this.superTabs.slideTo(index);
    };
    TabsPage.prototype.hideToolbar = function () {
        this.superTabs.showToolbar(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabs */])
    ], TabsPage.prototype, "superTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\tabs\tabs.html"*/'<super-tabs selectedTabIndex="0" tabsPlacement="bottom" toolbarBackground="theme" toolbarColor="light">\n    <super-tab [root]="moviesRoot" title="Movies" icon="videocam"></super-tab>\n    <super-tab [root]="musicsRoot" title="Cinemas" icon="ios-film"></super-tab>\n    <super-tab [root]="offersRoot" title="Ticket Offers" icon="ios-card"></super-tab>\n</super-tabs>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["b" /* SuperTabsController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(105);
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
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.order = "releaseDate";
        this.loadingCtrl = loadingCtrl;
        this.getItems();
        console.log("items>>", this.items);
    }
    MoviesPage.prototype.bookNow = function (item) {
        // console.log("movie page", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__["a" /* MovieInfoPage */], {
            movieInfo: item
        });
    };
    MoviesPage.prototype.getItems = function () {
        var _this = this;
        this.http
            .get(this.configUrl + "/app/show-all-movies")
            .map(function (res) { return res.json(); })
            .subscribe(function (results) {
            if (results.status) {
                _this.items = results.movies;
                _this.items = _this.items.map(function (x) {
                    var date = x.releaseDate.split("(")[1].split("+")[0];
                    var newDate = new Date(parseInt(date)).toISOString();
                    x.releaseDate = newDate.split("T")[0];
                    var image = x.thumbnailImage.split("/");
                    if (image[0] != "http:") {
                        x.thumbnailImage = "http://uaeshowtimes.com" + x.thumbnailImage;
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
        console.log("ionViewDidLoad MoviesPage");
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-movies",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/'<!--\n  Generated template for the MoviesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Movies</ion-title> <br>\n        <ion-row class="searchSort">\n            <ion-searchbar class="search" type="text" [(ngModel)]="queryString" placeholder="Search Movies"></ion-searchbar>\n            <ion-select class="sort" [(ngModel)]="order">\n                <ion-option value="releaseDate">Date</ion-option>\n                <ion-option value="title">Title</ion-option>\n            </ion-select>\n        </ion-row>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div style="padding:2%">\n        <ion-card class="cardCurve" *ngFor="let item of items | FilterPipe: queryString | orderBy: order : order == \'title\' ? false : true ">\n            <ion-item style="padding:2%" (click)=\'bookNow(item)\'>\n                <ion-thumbnail style="margin: 5px;" item-start>\n                    <img class="imageCurve" [src]="item.thumbnailImage">\n                </ion-thumbnail>\n                <!-- <ion-row style="justify-content: space-between;">\n        <h2 item-left></h2>\n      </ion-row> -->\n                <h2>{{ item.title }}</h2>\n                <p style="margin:0;" item-end>{{ item.ratings }}</p>\n                <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n                <ion-row style="margin-top: 10%;">\n                    <p style="margin:0;padding: 1%;" item-left>\n                        <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon><br>\n                        <span style="margin: 0 0 0 14%;">Release Date</span>\n                    </p>\n                    <p style="margin:0;padding: 1%;" item-end>\n                        <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n                        <span style="margin: 0 0 0 14%;">Duration</span>\n                    </p>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </div>\n    <!-- \n    <ion-card *ngFor="let item of items">\n        \n            <ion-item>\n            <ion-thumbnail item-start item-start>\n              <img src="{{ item.thumbnailImage }}">\n            </ion-thumbnail>\n            <h3> {{ item.title }}</h3>\n            <p style="font-size: 0.6em;">{{ item.releaseDate }}</p>\n          </ion-item>\n        \n          <img src="{{item.thumbnailImage}}">        \n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="star-half"></ion-icon>\n                <div>{{ item.ratings }}</div>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left small >\n                <div (click)=\'bookNow(item)\'>Book now</div>\n              </button>\n            </ion-col>\n            <ion-col center text-center style="margin-top: 10px;">\n              <ion-note>\n                {{ item.duration }}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(54);
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
    //onClick for back button
    MovieInfoPage.prototype.goBack = function () {
        this.navCtrl.pop();
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
            selector: 'page-movie-info',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/'<!--\n  Generated template for the MovieInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n    <ion-icon class="back" ios="ios-arrow-back" md="md-arrow-back" (click)="goBack()" large></ion-icon>\n    <iframe style="width: 100%;" [src]="trustedVideoUrl ? trustedVideoUrl : \'\'" frameborder="0" allowfullscreen></iframe>\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <ion-thumbnail item-start>\n            <img class="customImg upShadow" [src]="item.thumbnailImage">\n        </ion-thumbnail>\n        <ion-card class="upShadow curve" style="padding: 0; width: 100%;margin: 0 0 14px 0;">\n            <ion-item style="padding: 2% 1% 4% 34%;">\n                <ion-row style="justify-content: space-between;">\n                    <h2 item-left>{{ item.title }}</h2>\n                    <p style="margin:0;" item-end>{{ item.ratings }}</p>\n                </ion-row>\n                <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n                <ion-row style="margin-top: 10%;">\n                    <p style="margin:0;padding: 1%;" item-left>\n                        <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon><br>\n                        <span style="margin: 0 0 0 14%;">Release Date</span>\n                    </p>\n                    <p style="margin:0;padding: 1%;" item-end>\n                        <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n                        <span style="margin: 0 0 0 14%;">Duration</span>\n                    </p>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n\n        <div>\n            <ion-segment [(ngModel)]="selectedSegment">\n                <ion-segment-button value="Info">Info</ion-segment-button>\n                <ion-segment-button value="Cast">Cast</ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <div [ngSwitch]="selectedSegment">\n            <ion-list class="iconColor" *ngSwitchCase="\'Info\'">\n                <ion-card class="infoCard">\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'videocam\' item-start></ion-icon>\n                        Synopsis\n                        <p style="white-space: pre-wrap;">{{ item.synopsis }}</p>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'eye\' item-start></ion-icon>\n                        Language\n                        <ion-note item-end>{{ item.language }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'flag\' item-start></ion-icon>\n                        Genre\n                        <ion-note item-end>{{ item.genre }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'film\' item-start></ion-icon>\n                        Director\n                        <ion-note item-end>{{ item.director }}</ion-note>\n                    </ion-item>\n                </ion-card>\n\n                <h4>Showtimes</h4>\n                <div>\n                    <ion-row>\n                        <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                            <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                        </ion-segment>\n                    </ion-row> <br>\n                </div>\n                <div *ngIf="showsLength == 0 ">\n                    <p>No Showtimes</p>\n                </div>\n                <div *ngFor="let d of cinema; let i = index" (click)="toggleDetails(d,i)">\n                    <div *ngIf="d.multiplexName !== \'\'" style="background-color: transparent;">\n                        <ion-card class="cardCurve">\n                            <ion-item style="background-color: transparent">\n                                <ion-row style="margin-top: 10px;">\n                                    <img class="cinemaImage" [src]="d.image" alt="Cinemas Image">\n                                    <ion-note style="margin:auto">{{ d.multiplexName }}</ion-note>\n                                    <ion-icon style="margin:auto" color="danger" item-right [name]="d.icon"></ion-icon>\n                                </ion-row>\n                            </ion-item>\n\n                            <div class="showtimesPadding" *ngIf="d.showDetails">\n                                <div *ngFor="let show of d.cinemaArray">\n                                    <h3> {{ show.cinemaName }} </h3><br>\n                                    <ion-row>\n                                        <div style="width:33.33%" *ngFor="let time of show.sessions">\n                                            <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                                        </div>\n                                    </ion-row><br>\n                                </div>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'Cast\'">\n                <ion-item style="background-color: transparent;">\n                    <ion-thumbnail item-start>\n                        <img [src]="item.thumbnailImage">\n                    </ion-thumbnail>\n                    <h2>Ruby</h2>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], MovieInfoPage);
    return MovieInfoPage;
}());

//# sourceMappingURL=movie-info.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(117);
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
            selector: 'page-musics',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/'<!--\n  Generated template for the MusicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="headerShadow">\n        <ion-title style="color:azure">Cinemas</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <div *ngFor="let d of data; let i = index" (click)="toggleDetails(d,i)">\n            <ion-card class="cardCurve">\n                <ion-row>\n                    <img class="cinemaImage" [src]="d.image" alt="Cinemas Image" nopadding>\n                    <h4 class="cinemaName">{{ d.multiplex }}</h4>\n                </ion-row>\n                <div *ngIf="d.showDetails">\n                    <a class="coralColor" *ngFor="let col of d.cinema;" (click)=\'cinemaPage(col._id)\'>\n                        <ul>\n                            <li>{{col.cinemaName}}</li>\n                        </ul>\n                    </a>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CinemasPage);
    return CinemasPage;
}());

//# sourceMappingURL=cinemas.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_map_google_map__ = __webpack_require__(351);
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

var marker;
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
        this.daySegment = __WEBPACK_IMPORTED_MODULE_5_moment__()
            .add(0, "days")
            .format("YYYYMMDD");
        this.http = http;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.currentTime = Date.now();
        this.cinemaId = this.navParams.get("cinemaId");
        //For getting next 3 day
        for (var i = 0; i < 4; i++) {
            this.days.push({
                day: __WEBPACK_IMPORTED_MODULE_5_moment__()
                    .add(i, "days")
                    .format("dddd")
                    .substring(0, 3),
                value: __WEBPACK_IMPORTED_MODULE_5_moment__()
                    .add(i, "days")
                    .format("YYYYMMDD")
            });
        }
        this.postItems(i);
    }
    // ionViewDidLoad() {
    //   this.initializeMap();
    // }
    // Pushing value to generate map
    CinemaInfoPage.prototype.goToGoogleMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__google_map_google_map__["a" /* GoogleMapPage */]);
    };
    CinemaInfoPage.prototype.openBookingUrl = function (url) {
        var browser = this.iab.create(url);
    };
    //Getting cinema sessions of day selected
    CinemaInfoPage.prototype.dayValue = function (value, todaysData) {
        var _this = this;
        if (value ==
            __WEBPACK_IMPORTED_MODULE_5_moment__()
                .add(0, "days")
                .format("YYYYMMDD") &&
            todaysData != null) {
            console.log("!!!!!!!!!!!!!!!!!!", todaysData);
            this.showsLength = todaysData.shows.length;
            this.postItems(todaysData);
        }
        else {
            loading = this.loadingCtrl.create({
                spinner: "hide",
                content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        "
            });
            loading.present();
            //Getting offers data from API
            var url = this.configUrl + "/app/cinemaInfoForDate/" +
                this.cinemaId +
                "?search=" +
                parseInt(value);
            console.log(url);
            this.http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (results) {
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
            spinner: "hide",
            content: "\n          <div class=\"spinner\" >\n            <div class=\"dot1\"></div>\n            <div class=\"dot2\"></div>\n          </div>\n        "
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
            _this.initializeMap(_this.cinemaInfo[0].latitude, _this.cinemaInfo[0].longitude);
            _this.latitude = _this.cinemaInfo[0].latitude;
            _this.longitude = _this.cinemaInfo[0].longitude;
            loading.dismiss();
        });
    };
    CinemaInfoPage.prototype.initializeMap = function (lat, long) {
        var _this = this;
        var myLatLng = { lat: lat, lng: long };
        var locationOptions = { timeout: 20000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var options = {
                center: new google.maps.LatLng(lat, long),
                zoom: 16,
                tilt: 20,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
            var marker = new google.maps.Marker({
                map: _this.map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: options.center,
                title: "Hello World!"
            });
            //  marker.addListener('click', this.toggleBounce);
            marker.setMap(_this.map);
        }, function (error) {
            console.log(error);
        }, locationOptions);
    };
    CinemaInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cinema-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/'<!--\n  Generated template for the CinemaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Cinema Info</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div text-center id="map_canvas"></div>\n    <ion-card>\n        <div *ngFor="let d of cinemaInfo">\n            <ion-fab right top>\n                <button ion-fab>\n                    <ion-icon (click)="goToGoogleMap()" name="pin"></ion-icon>\n                </button>\n            </ion-fab>\n            <ion-item>\n                <ion-row>\n                    <ion-icon ios="ios-navigate" md="md-navigate">\n                        <h3>{{d.cinemaName}}</h3>\n                        <p class="customFont wordBreak">{{ d.cityName }}, {{ d.stateName }}, {{ d.countryName}}</p>\n                    </ion-icon>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-icon ios="ios-call" md="md-call">\n                        <p class="text">{{ d.phoneNumber }}</p>\n                    </ion-icon>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-icon ios="ios-mail" md="md-mail" nopadding>\n                        <p class="text wordBreak">{{ d.emailId }} </p>\n                    </ion-icon>\n\n                </ion-row>\n            </ion-item>\n        </div>\n    </ion-card>\n    <!-- -------------------ShowTime------------------------------------------ -->\n    <h4>Showtimes</h4>\n    <div>\n        <ion-row>\n            <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n            </ion-segment>\n        </ion-row> <br>\n        <div *ngFor="let session of selectedDay">\n            <ion-card class="cardCurve">\n                <h4 class="showTimeHeader">{{ session.movieTitle }}</h4>\n                <ion-row>\n                    <div style="width:33.33%" *ngFor="let time of session.sessions">\n                        <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                    </div>\n                </ion-row>\n            </ion-card>\n        </div>\n    </div>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CinemaInfoPage);
    return CinemaInfoPage;
}());

//# sourceMappingURL=cinema-info.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// import { NavController, NavParams } from "ionic-angular";
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, Component } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { AgmCoreModule } from '@agm/core';
// declare var google;
// @Component({
//   selector: "page-google-map",
//template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\google-map\google-map.html"*/'<!--\n  Generated template for the GoogleMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]="lat" [longitude]="lng">\n  <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n</agm-map>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\google-map\google-map.html"*/
// })
// export class GoogleMapPage {
//   map: any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {}
//   ionViewDidLoad() {
//     this.initializeMap();
//   }
//   initializeMap() {
//     console.log(">♀♫►♫☼♀♪◄↕", )
//     let locationOptions = { timeout: 20000, enableHighAccuracy: true };
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         let options = {
//           center: new google.maps.LatLng(
//             position.coords.latitude,
//             position.coords.longitude
//           ),
//           zoom: 16,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         this.map = new google.maps.Map(
//           document.getElementById("map"),
//           options
//         );
//       },
//       error => {
//         console.log(error);
//       },
//       locationOptions
//     );
//   }
// }

var GoogleMapPage = (function () {
    function GoogleMapPage() {
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-google-map",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\google-map\google-map.html"*/'<!--\n  Generated template for the GoogleMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]="lat" [longitude]="lng">\n  <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n</agm-map>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\google-map\google-map.html"*/
        })
    ], GoogleMapPage);
    return GoogleMapPage;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(54);
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
            selector: 'page-offers',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="headerShadow">\n        <ion-title style="color: white;">Ticket Offers</ion-title> <br>\n        <!-- <input type="text" [(ngModel)]="queryString" id="search" placeholder="Search Offers"> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <div *ngFor="let item of data; let i = index" (click)="toggleDetails(item, i)" nopadding>\n            <ion-card class="cardCurve" *ngIf="item.offer.title" nopadding>\n                <div nopadding>\n                    <ion-row padding>\n                        <ion-col>\n                            <h5 *ngIf="item.offer.multiplexId == 6">VOX Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 8">NOVO Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 7">ROXY Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 9">Reel Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 10">CINESCAPE Cinemas</h5>\n                            <p class="subTitle">{{ item.offer.title }}</p>\n                        </ion-col>\n                        <ion-icon color="danger" item-right [name]="item.icon" width="100%"></ion-icon>\n                    </ion-row>\n                    <div class="lineHeight" *ngIf="item.showDetails" (click)="openOfferSite(item.offer.url)" nopadding>\n                        <object data="http://stackoverflow.com/does-not-exist.png" type="image/png">\n                  <img src="http://uaeshowtimes.com{{item.offer.image}}" alt="Offer Image">\n                </object>\n                        <div class="htmlContent" [innerHtml]="item.offer.htmlData"></div>\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_movies_movies__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cinemas_cinemas__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_movie_info_movie_info__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cinema_info_cinema_info__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_offers_offers__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_google_map_google_map__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_super_tabs__ = __webpack_require__(353);
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
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_20__pipes__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_19__pages_google_map_google_map__["a" /* GoogleMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_21_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDX8lQmy_wPtfYbP4M6KB52dIZGT5mNcY8'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_google_map_google_map__["a" /* GoogleMapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_21_ionic2_super_tabs__["b" /* SuperTabsController */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(224);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 227,
	"./af.js": 227,
	"./ar": 228,
	"./ar-dz": 229,
	"./ar-dz.js": 229,
	"./ar-kw": 230,
	"./ar-kw.js": 230,
	"./ar-ly": 231,
	"./ar-ly.js": 231,
	"./ar-ma": 232,
	"./ar-ma.js": 232,
	"./ar-sa": 233,
	"./ar-sa.js": 233,
	"./ar-tn": 234,
	"./ar-tn.js": 234,
	"./ar.js": 228,
	"./az": 235,
	"./az.js": 235,
	"./be": 236,
	"./be.js": 236,
	"./bg": 237,
	"./bg.js": 237,
	"./bm": 238,
	"./bm.js": 238,
	"./bn": 239,
	"./bn.js": 239,
	"./bo": 240,
	"./bo.js": 240,
	"./br": 241,
	"./br.js": 241,
	"./bs": 242,
	"./bs.js": 242,
	"./ca": 243,
	"./ca.js": 243,
	"./cs": 244,
	"./cs.js": 244,
	"./cv": 245,
	"./cv.js": 245,
	"./cy": 246,
	"./cy.js": 246,
	"./da": 247,
	"./da.js": 247,
	"./de": 248,
	"./de-at": 249,
	"./de-at.js": 249,
	"./de-ch": 250,
	"./de-ch.js": 250,
	"./de.js": 248,
	"./dv": 251,
	"./dv.js": 251,
	"./el": 252,
	"./el.js": 252,
	"./en-au": 253,
	"./en-au.js": 253,
	"./en-ca": 254,
	"./en-ca.js": 254,
	"./en-gb": 255,
	"./en-gb.js": 255,
	"./en-ie": 256,
	"./en-ie.js": 256,
	"./en-il": 257,
	"./en-il.js": 257,
	"./en-nz": 258,
	"./en-nz.js": 258,
	"./eo": 259,
	"./eo.js": 259,
	"./es": 260,
	"./es-do": 261,
	"./es-do.js": 261,
	"./es-us": 262,
	"./es-us.js": 262,
	"./es.js": 260,
	"./et": 263,
	"./et.js": 263,
	"./eu": 264,
	"./eu.js": 264,
	"./fa": 265,
	"./fa.js": 265,
	"./fi": 266,
	"./fi.js": 266,
	"./fo": 267,
	"./fo.js": 267,
	"./fr": 268,
	"./fr-ca": 269,
	"./fr-ca.js": 269,
	"./fr-ch": 270,
	"./fr-ch.js": 270,
	"./fr.js": 268,
	"./fy": 271,
	"./fy.js": 271,
	"./gd": 272,
	"./gd.js": 272,
	"./gl": 273,
	"./gl.js": 273,
	"./gom-latn": 274,
	"./gom-latn.js": 274,
	"./gu": 275,
	"./gu.js": 275,
	"./he": 276,
	"./he.js": 276,
	"./hi": 277,
	"./hi.js": 277,
	"./hr": 278,
	"./hr.js": 278,
	"./hu": 279,
	"./hu.js": 279,
	"./hy-am": 280,
	"./hy-am.js": 280,
	"./id": 281,
	"./id.js": 281,
	"./is": 282,
	"./is.js": 282,
	"./it": 283,
	"./it.js": 283,
	"./ja": 284,
	"./ja.js": 284,
	"./jv": 285,
	"./jv.js": 285,
	"./ka": 286,
	"./ka.js": 286,
	"./kk": 287,
	"./kk.js": 287,
	"./km": 288,
	"./km.js": 288,
	"./kn": 289,
	"./kn.js": 289,
	"./ko": 290,
	"./ko.js": 290,
	"./ky": 291,
	"./ky.js": 291,
	"./lb": 292,
	"./lb.js": 292,
	"./lo": 293,
	"./lo.js": 293,
	"./lt": 294,
	"./lt.js": 294,
	"./lv": 295,
	"./lv.js": 295,
	"./me": 296,
	"./me.js": 296,
	"./mi": 297,
	"./mi.js": 297,
	"./mk": 298,
	"./mk.js": 298,
	"./ml": 299,
	"./ml.js": 299,
	"./mr": 300,
	"./mr.js": 300,
	"./ms": 301,
	"./ms-my": 302,
	"./ms-my.js": 302,
	"./ms.js": 301,
	"./mt": 303,
	"./mt.js": 303,
	"./my": 304,
	"./my.js": 304,
	"./nb": 305,
	"./nb.js": 305,
	"./ne": 306,
	"./ne.js": 306,
	"./nl": 307,
	"./nl-be": 308,
	"./nl-be.js": 308,
	"./nl.js": 307,
	"./nn": 309,
	"./nn.js": 309,
	"./pa-in": 310,
	"./pa-in.js": 310,
	"./pl": 311,
	"./pl.js": 311,
	"./pt": 312,
	"./pt-br": 313,
	"./pt-br.js": 313,
	"./pt.js": 312,
	"./ro": 314,
	"./ro.js": 314,
	"./ru": 315,
	"./ru.js": 315,
	"./sd": 316,
	"./sd.js": 316,
	"./se": 317,
	"./se.js": 317,
	"./si": 318,
	"./si.js": 318,
	"./sk": 319,
	"./sk.js": 319,
	"./sl": 320,
	"./sl.js": 320,
	"./sq": 321,
	"./sq.js": 321,
	"./sr": 322,
	"./sr-cyrl": 323,
	"./sr-cyrl.js": 323,
	"./sr.js": 322,
	"./ss": 324,
	"./ss.js": 324,
	"./sv": 325,
	"./sv.js": 325,
	"./sw": 326,
	"./sw.js": 326,
	"./ta": 327,
	"./ta.js": 327,
	"./te": 328,
	"./te.js": 328,
	"./tet": 329,
	"./tet.js": 329,
	"./tg": 330,
	"./tg.js": 330,
	"./th": 331,
	"./th.js": 331,
	"./tl-ph": 332,
	"./tl-ph.js": 332,
	"./tlh": 333,
	"./tlh.js": 333,
	"./tr": 334,
	"./tr.js": 334,
	"./tzl": 335,
	"./tzl.js": 335,
	"./tzm": 336,
	"./tzm-latn": 337,
	"./tzm-latn.js": 337,
	"./tzm.js": 336,
	"./ug-cn": 338,
	"./ug-cn.js": 338,
	"./uk": 339,
	"./uk.js": 339,
	"./ur": 340,
	"./ur.js": 340,
	"./uz": 341,
	"./uz-latn": 342,
	"./uz-latn.js": 342,
	"./uz.js": 341,
	"./vi": 343,
	"./vi.js": 343,
	"./x-pseudo": 344,
	"./x-pseudo.js": 344,
	"./yo": 345,
	"./yo.js": 345,
	"./zh-cn": 346,
	"./zh-cn.js": 346,
	"./zh-hk": 347,
	"./zh-hk.js": 347,
	"./zh-tw": 348,
	"./zh-tw.js": 348
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
webpackContext.id = 441;

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 452:
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

},[360]);
//# sourceMappingURL=main.js.map