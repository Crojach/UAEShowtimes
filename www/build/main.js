webpackJsonp([0],{

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(364);
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
            selector: 'page-tabs',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\tabs\tabs.html"*/'<super-tabs selectedTabIndex="0" tabsPlacement="bottom" toolbarBackground="theme" toolbarColor="light" indicatorColor="light">\n    <super-tab [root]="moviesRoot" title="Movies" icon="ios-videocam"></super-tab>\n    <super-tab [root]="musicsRoot" title="Cinemas" icon="ios-film"></super-tab>\n    <super-tab [root]="offersRoot" title="Ticket Offers" icon="ios-card"></super-tab>\n</super-tabs>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__ = __webpack_require__(34);
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
var MoviesPage = (function () {
    function MoviesPage(navCtrl, navParams, http, platform, ga, splashScreen) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.ga = ga;
        this.splashScreen = splashScreen;
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.order = "releaseDate";
        this.rootNavCtrl = this.navParams.get("rootNavCtrl");
        this.getItems();
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Movies", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Movies");
        });
    }
    MoviesPage.prototype.bookNow = function (item) {
        // console.log("movie page", item);
        this.rootNavCtrl.push(__WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__["a" /* MovieInfoPage */], {
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
            selector: "page-movies",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/'<!--\n  Generated template for the MoviesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Movies</ion-title>\n        <br>\n        <ion-row class="searchSort">\n            <ion-searchbar class="search" type="text" [(ngModel)]="queryString" placeholder="Search Movies"></ion-searchbar>\n            <ion-select class="sort" [(ngModel)]="order">\n                <ion-option value="releaseDate">Sort by Release date</ion-option>\n                <ion-option value="title">Sort by Title</ion-option>\n            </ion-select>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div style="padding:2%">\n        <ion-card class="cardCurve" *ngFor="let item of items | FilterPipe: queryString | orderBy: order : order == \'title\' ? false : true ">\n            <ion-item style="padding:2%" (click)=\'bookNow(item)\'>\n                <ion-thumbnail style="margin: 2%;" item-start>\n                    <img class="imageCurve" [src]="item.thumbnailImage">\n                </ion-thumbnail>\n\n                <h2>{{ item.title }}</h2>\n                <p style="margin:0;" item-end>{{ item.ratings }}</p>\n                <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n                <ion-row style="margin-top: 10%;">\n                    <p style="margin:0;padding: 1%;" item-left>\n                        <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon>\n                        <br>\n                        <span style="margin: 0 0 0 14%;">Release Date</span>\n                    </p>\n                    <p style="margin:0;padding: 1%;" item-end>\n                        <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon>\n                        <br>\n                        <span style="margin: 0 0 0 14%;">Duration</span>\n                    </p>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
    function MovieInfoPage(navCtrl, navParams, domSanitizer, platform, ga, http, iab, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.platform = platform;
        this.ga = ga;
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.selectedSegment = 'Info';
        this.daySegment = __WEBPACK_IMPORTED_MODULE_6_moment__().add(0, 'days').format("YYYYMMDD");
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
                day: __WEBPACK_IMPORTED_MODULE_6_moment__().add(i, 'days').format('dddd').substring(0, 3),
                value: __WEBPACK_IMPORTED_MODULE_6_moment__().add(i, 'days').format("YYYYMMDD"),
            });
        }
        // console.log("thidssss",this.days)
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.item.trailer);
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Movies Info", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Movies Info");
        });
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
        if (value == __WEBPACK_IMPORTED_MODULE_6_moment__().add(0, 'days').format("YYYYMMDD") && todaysData != null) {
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
                console.log(">>Check", value == __WEBPACK_IMPORTED_MODULE_6_moment__().add(0, 'days').format("YYYYMMDD") && todaysData != null);
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
            reelCinemas: { multiplexName: '', cinemaArray: [], image: 'assets/img/reel.jpg', showDetails: false, icon: "ios-arrow-down" },
            cineRoyal: { multiplexName: '', cinemaArray: [], image: 'assets/img/cineroyal.png', showDetails: false, icon: "ios-arrow-down" },
            oscarCinemas: { multiplexName: '', cinemaArray: [], image: 'assets/img/oscar.png', showDetails: false, icon: "ios-arrow-down" }
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
            if (cv.multiplexName == 'CineRoyal Cinemas') {
                acc.cineRoyal['multiplexName'] = 'CineRoyal';
                acc.cineRoyal['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions });
            }
            if (cv.multiplexName == 'Oscar Cinemas') {
                acc.oscarCinemas['multiplexName'] = 'Oscar Cinemas';
                acc.oscarCinemas['cinemaArray'].push({ cinemaName: cv.cinemaName, sessions: cv.sessions });
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
            _this.dayValue(__WEBPACK_IMPORTED_MODULE_6_moment__().add(0, 'days').format("YYYYMMDD"), results);
        });
    };
    MovieInfoPage.prototype.ionViewWillEnter = function () {
    };
    MovieInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MovieInfoPage');
    };
    MovieInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-info',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/'<!--\n  Generated template for the MovieInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- ---------iframe with thumbnail------------ -->\n<ion-header class="headerShadow">\n\n    <ion-navbar>\n        <ion-title>{{ item.title }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content>\n    <!-- <ion-icon class="back" ios="ios-arrow-back" md="md-arrow-back" (click)="goBack()" large></ion-icon> -->\n    <iframe style="width: 100%;" [src]="trustedVideoUrl ? trustedVideoUrl : \'\'" frameborder="0" allowfullscreen></iframe>\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <ion-thumbnail item-start>\n            <img class="customImg upShadow" [src]="item.thumbnailImage">\n        </ion-thumbnail>\n        <ion-card class="upShadow curve" style="padding: 0; width: 100%;margin: 0 0 14px 0;">\n            <ion-item style="padding: 2% 1% 4% 34%;">\n                <ion-row style="justify-content: space-between;">\n                    <h2 item-left>{{ item.title }}</h2>\n                    <p style="margin:0;" item-end>{{ item.ratings }}</p>\n                </ion-row>\n                <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n                <ion-row style="margin-top: 10%;">\n                    <p style="margin:0;padding: 1%;" item-left>\n                        <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon><br>\n                        <span style="margin: 0 0 0 14%;">Release Date</span>\n                    </p>\n                    <p style="margin:0;padding: 1%;" item-end>\n                        <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n                        <span style="margin: 0 0 0 14%;">Duration</span>\n                    </p>\n                </ion-row>\n            </ion-item>\n        </ion-card>\n    </div>\n    <div>\n        <ion-segment [(ngModel)]="selectedSegment">\n            <ion-segment-button value="Info">Info</ion-segment-button>\n            <ion-segment-button value="Cast">Cast</ion-segment-button>\n        </ion-segment>\n    </div>\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <div [ngSwitch]="selectedSegment">\n            <ion-list class="iconColor" *ngSwitchCase="\'Info\'">\n                <ion-card class="infoCard">\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'videocam\' item-start></ion-icon>\n                        Synopsis\n                        <p style="white-space: pre-wrap;">{{ item.synopsis }}</p>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'eye\' item-start></ion-icon>\n                        Language\n                        <ion-note item-end>{{ item.language }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'flag\' item-start></ion-icon>\n                        Genre\n                        <ion-note item-end>{{ item.genre }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'film\' item-start></ion-icon>\n                        Director\n                        <ion-note item-end>{{ item.director }}</ion-note>\n                    </ion-item>\n                </ion-card>\n\n                <h4>Showtimes</h4>\n                <div>\n                    <ion-row>\n                        <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                            <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                        </ion-segment>\n                    </ion-row> <br>\n                </div>\n                <div *ngIf="showsLength == 0 ">\n                    <p>No Showtimes</p>\n                </div>\n                <div *ngFor="let d of cinema; let i = index" (click)="toggleDetails(d,i)">\n                    <div *ngIf="d.multiplexName !== \'\'" style="background-color: transparent;">\n                        <ion-card class="cardCurve">\n                            <ion-item style="background-color: transparent">\n                                <ion-row>\n                                    <img class="cinemaImage" [src]="d.image" alt="Cinemas Image">\n                                    <p class="CinemaFont">{{ d.multiplexName }}</p>\n                                    <ion-icon class="dropDown" color="danger" item-right [name]="d.icon"></ion-icon>\n                                </ion-row>\n                            </ion-item>\n\n                            <div class="showtimesPadding" *ngIf="d.showDetails">\n                                <div *ngFor="let show of d.cinemaArray">\n                                    <h3 class="multipexNames"> {{ show.cinemaName }} </h3><br>\n                                    <ion-row>\n                                        <div style="width:33.33%" *ngFor="let time of show.sessions">\n                                            <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                                        </div>\n                                    </ion-row><br>\n                                </div>\n                            </div>\n                        </ion-card>\n                    </div>\n                </div>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'Cast\'">\n                <ion-item style="background-color: transparent;">\n                    <ion-thumbnail item-start>\n                        <img [src]="item.thumbnailImage">\n                    </ion-thumbnail>\n                    <h2>Ruby</h2>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _h || Object])
    ], MovieInfoPage);
    return MovieInfoPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=movie-info.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
    function CinemasPage(http, navCtrl, loadingCtrl, navParams, platform, ga, diagnostic) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ga = ga;
        this.diagnostic = diagnostic;
        this.data = [];
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.icon = "ios-arrow-down";
        this.cinemasTitles = [
            "assets/img/cineroyal.png",
            "assets/img/novo.jpg",
            "assets/img/oscar.png",
            "assets/img/reel.jpg",
            "assets/img/roxy.png",
            "assets/img/vox.jpg"
        ];
        this.rootNavCtrl = this.navParams.get("rootNavCtrl");
        this.loadingCtrl = loadingCtrl;
        this.getItems();
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Cinema page", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Cinema page");
        });
    }
    CinemasPage.prototype.cinemaPage = function (id, cinemaName) {
        var _this = this;
        //to Turn on location
        var successCallback = function (isAvailable) {
            console.log("Is available? " + isAvailable);
        };
        var errorCallback = function (e) { return console.error(e); };
        // this.diagnostic.isLocationEnabled().then(successCallback, errorCallback);
        this.diagnostic.isGpsLocationEnabled()
            .then(function (state) {
            console.log('state', state);
            if (state) {
                // do something
                console.log("gps is ON");
                //on click to push on next page
                _this.rootNavCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__["a" /* CinemaInfoPage */], {
                    cinemaId: id,
                    cinemaName: cinemaName
                });
            }
            else {
                console.log("gps is off");
                alert("Please Turn on GPS.");
                _this.diagnostic.switchToLocationSettings();
            }
        })
            .catch(function (e) { return console.error(e); });
    };
    CinemasPage.prototype.toggleDetails = function (data, index) {
        if (this.data[index].showDetails) {
            this.data[index].showDetails = false;
            this.data[index].icon = "ios-arrow-down";
        }
        else {
            this.data.map(function (x, _index) {
                if (_index == index) {
                    x.showDetails = true;
                    x.icon = "ios-arrow-up";
                }
                else {
                    x.showDetails = false;
                    x.icon = "ios-arrow-down";
                }
            });
        }
    };
    CinemasPage.prototype.getItems = function () {
        var _this = this;
        loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "\n        <div class=\"spinner\" >\n          <div class=\"dot1\"></div>\n          <div class=\"dot2\"></div>\n        </div>\n        "
        });
        loading.present();
        this.http
            .get(this.configUrl + "/app/showAllCinemas")
            .map(function (res) { return res.json(); })
            .subscribe(function (results) {
            if (results.status) {
                // console.log("result>>",results.cinemas)
                _this.cinemas = results.cinemas;
                results.cinemas.map(function (x, index) {
                    // console.log(this.cinemasTitles)
                    _this.data.push({
                        image: _this.cinemasTitles[index],
                        multiplex: x.multiplex,
                        cinema: x.cinema,
                        icon: "ios-arrow-down",
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
        console.log("ionViewDidLoad MusicsPage");
    };
    CinemasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-musics",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/'<!--\n  Generated template for the MusicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow">\n\n    <ion-navbar>\n        <ion-title style="color:azure">Cinemas</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <div *ngFor="let d of data; let i = index" (click)="toggleDetails(d,i)">\n            <ion-card class="cardCurve">\n                <ion-row>\n                    <img class="cinemaImage" [src]="d.image" alt="Cinemas Image" nopadding>\n                    <h4 class="cinemaName">{{ d.multiplex }}</h4>\n                </ion-row>\n                <div *ngIf="d.showDetails">\n                    <a class="coralColor" *ngFor="let col of d.cinema;" (click)=\'cinemaPage(col._id, d.multiplex)\'>\n                        <ul>\n                            <li>{{col.cinemaName}}</li>\n                        </ul>\n                    </a>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */]) === "function" && _g || Object])
    ], CinemasPage);
    return CinemasPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=cinemas.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
    function CinemaInfoPage(http, navCtrl, navParams, platform, ga, iab, loadingCtrl, callNumber, emailComposer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ga = ga;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        // configUrl = 'http://192.168.1.167';
        this.configUrl = "http://uaeshowtimes.com:3006";
        this.cinemaName = "";
        this.days = [];
        this.daySegment = __WEBPACK_IMPORTED_MODULE_8_moment__()
            .add(0, "days")
            .format("YYYYMMDD");
        this.http = http;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.currentTime = Date.now();
        this.cinemaId = this.navParams.get("cinemaId");
        this.cinemaName = this.navParams.get("cinemaName");
        //For getting next 3 day
        for (var i = 0; i < 4; i++) {
            this.days.push({
                day: __WEBPACK_IMPORTED_MODULE_8_moment__()
                    .add(i, "days")
                    .format("dddd")
                    .substring(0, 3),
                value: __WEBPACK_IMPORTED_MODULE_8_moment__()
                    .add(i, "days")
                    .format("YYYYMMDD")
            });
        }
        this.postItems(i);
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Cinema Info", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Cinema Info");
        });
    }
    // Function to launch Dailer
    CinemaInfoPage.prototype.launchDialer = function (n) {
        this.callNumber
            .callNumber(n, true)
            .then(function () { return console.log("Launched dialer!"); })
            .catch(function () { return console.log("Error launching dialer"); });
    };
    // Function to Launch EmailComoper
    CinemaInfoPage.prototype.launchMail = function (to) {
        var email = {
            to: to,
            cc: "",
            bcc: "",
            subject: "Testing",
            body: "How are you? Nice greetings from UAE showtimes",
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    // Function to open in app browser
    CinemaInfoPage.prototype.openBookingUrl = function (url) {
        var browser = this.iab.create(url);
    };
    //Getting cinema sessions of day selected
    CinemaInfoPage.prototype.dayValue = function (value, todaysData) {
        var _this = this;
        if (value ==
            __WEBPACK_IMPORTED_MODULE_8_moment__()
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
            _this.cinemaInfo = results.cinema;
            _this.cinemaName = results.cinema[0].multiplexName;
            _this.selectedDay = results.finalMovies;
            console.log("POWER", _this.cinemaInfo[0].latitude, _this.cinemaInfo[0].longitude);
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
                draggable: false,
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
    CinemaInfoPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MusicsPage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__["a" /* SuperTabs */])
    ], CinemaInfoPage.prototype, "superTabs", void 0);
    CinemaInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cinema-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/'<!--\n  Generated template for the CinemaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow">\n\n    <!-- <ion-navbar>\n        <ion-title>{{ cinemaInfo.multiplexName }}</ion-title>\n    </ion-navbar> -->\n    <ion-navbar>\n        <ion-title>{{ cinemaName }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div id="map_canvas"></div>\n    <ion-card class="cardCurve">\n        <div *ngFor="let d of cinemaInfo">\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>\n                <ion-col>\n                    <h2>{{d.cinemaName}}</h2>\n                    <p class="customFont wordBreak">{{ d.cityName }}, {{ d.stateName }}, {{ d.countryName}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-call" md="md-call"></ion-icon>\n                <p class="text" (click)="launchDialer(d.phoneNumber)">{{ d.phoneNumber }}</p>\n            </ion-row>\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-mail" md="md-mail" nopadding></ion-icon>\n                <p class="text wordBreak" (click)="launchMail(d.emailId)">{{ d.emailId }} </p>\n            </ion-row>\n        </div>\n    </ion-card>\n    <!-- -------------------ShowTime------------------------------------------ -->\n    <h3 style="color:#36454F">Showtimes</h3>\n    <div>\n        <ion-row>\n            <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n            </ion-segment>\n        </ion-row> <br>\n        <div *ngFor="let session of selectedDay">\n            <ion-card class="cardCurve">\n                <h4 class="showTimeHeader">{{ session.movieTitle }}</h4>\n                <ion-row>\n                    <div style="width:33.33%" *ngFor="let time of session.sessions">\n                        <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                    </div>\n                </ion-row>\n            </ion-card>\n        </div>\n    </div>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], CinemaInfoPage);
    return CinemaInfoPage;
}());

//# sourceMappingURL=cinema-info.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(34);
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
    function OffersPage(navCtrl, navParams, http, platform, ga, iab, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.ga = ga;
        this.configUrl = 'http://uaeshowtimes.com:3006';
        this.icon = 'ios-arrow-down';
        this.data = [];
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.getOffers();
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Offers", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Offers");
        });
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
            selector: 'page-offers',template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="headerShadow">\n        <ion-title style="color: white;">Ticket Offers</ion-title> <br>\n        <!-- <input type="text" [(ngModel)]="queryString" id="search" placeholder="Search Offers"> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <div *ngFor="let item of data; let i = index" (click)="toggleDetails(item, i)" nopadding>\n            <ion-card class="cardCurve" *ngIf="item.offer.title" nopadding>\n                <div nopadding>\n                    <ion-row padding>\n                        <ion-col>\n                            <h5 *ngIf="item.offer.multiplexId == 6">VOX Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 8">NOVO Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 7">ROXY Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 9">REEL Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 10">CINEROYAL Cinemas</h5>\n                            <h5 *ngIf="item.offer.multiplexId == 11">Oscar Cinemas</h5>\n                            <p class="subTitle">{{ item.offer.title }}</p>\n                        </ion-col>\n                        <ion-icon color="danger" item-right [name]="item.icon" width="100%"></ion-icon>\n                    </ion-row>\n                    <div class="lineHeight" *ngIf="item.showDetails" (click)="openOfferSite(item.offer.url)" nopadding>\n                        <object data="http://stackoverflow.com/does-not-exist.png" type="image/png">\n                  <img *ngIf="item.offer.image" src="http://uaeshowtimes.com{{item.offer.image}}" alt="Offer Image">\n                </object>\n                        <div class="htmlContent" [innerHtml]="item.offer.htmlData"></div>\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(388);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_movies_movies__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cinemas_cinemas__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_movie_info_movie_info__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cinema_info_cinema_info__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes__ = __webpack_require__(457);
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
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_26__pipes__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDX8lQmy_wPtfYbP4M6KB52dIZGT5mNcY8'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__["a" /* OffersPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["b" /* SuperTabsController */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(237);
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
    function MyApp(platform, statusBar, app, toast, splashScreen, oneSignal, ga, screenOrientation, diagnostic, network) {
        var _this = this;
        this.platform = platform;
        this.app = app;
        this.toast = toast;
        this.oneSignal = oneSignal;
        this.ga = ga;
        this.screenOrientation = screenOrientation;
        this.diagnostic = diagnostic;
        this.network = network;
        // @ViewChild(Nav) nav: Nav;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */];
        // Plugin for checking Network
        // watch network for a disconnect
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            console.log("network was disconnected :-(");
        });
        // stop disconnect watch
        disconnectSubscription.unsubscribe();
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log("network connected!");
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === "wifi") {
                    console.log("we got a wifi connection, woohoo!");
                }
            }, 3000);
        });
        // stop connect watch
        connectSubscription.unsubscribe();
        //Function for turning on GPS
        var successCallback = function (isAvailable) {
            console.log("Is available? " + isAvailable);
        };
        var errorCallback = function (e) { return console.error(e); };
        this.diagnostic
            .isLocationAvailable()
            .then(successCallback)
            .catch(errorCallback);
        // code for ScreenOrientation
        // get current
        console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
        // set to landscape
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.platform.ready().then(function () {
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
            //For google analytics
            _this.ga
                .startTrackerWithId("UA-116214038-1")
                .then(function () {
                console.log("Google analytics is ready now");
                _this.ga.trackView("test");
                // Tracker is ready
                // You can now track pages or set additional information such as AppVersion or UserId
            })
                .catch(function (e) { return console.log("Error starting GoogleAnalytics", e); });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */]) === "function" && _k || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 240,
	"./af.js": 240,
	"./ar": 241,
	"./ar-dz": 242,
	"./ar-dz.js": 242,
	"./ar-kw": 243,
	"./ar-kw.js": 243,
	"./ar-ly": 244,
	"./ar-ly.js": 244,
	"./ar-ma": 245,
	"./ar-ma.js": 245,
	"./ar-sa": 246,
	"./ar-sa.js": 246,
	"./ar-tn": 247,
	"./ar-tn.js": 247,
	"./ar.js": 241,
	"./az": 248,
	"./az.js": 248,
	"./be": 249,
	"./be.js": 249,
	"./bg": 250,
	"./bg.js": 250,
	"./bm": 251,
	"./bm.js": 251,
	"./bn": 252,
	"./bn.js": 252,
	"./bo": 253,
	"./bo.js": 253,
	"./br": 254,
	"./br.js": 254,
	"./bs": 255,
	"./bs.js": 255,
	"./ca": 256,
	"./ca.js": 256,
	"./cs": 257,
	"./cs.js": 257,
	"./cv": 258,
	"./cv.js": 258,
	"./cy": 259,
	"./cy.js": 259,
	"./da": 260,
	"./da.js": 260,
	"./de": 261,
	"./de-at": 262,
	"./de-at.js": 262,
	"./de-ch": 263,
	"./de-ch.js": 263,
	"./de.js": 261,
	"./dv": 264,
	"./dv.js": 264,
	"./el": 265,
	"./el.js": 265,
	"./en-au": 266,
	"./en-au.js": 266,
	"./en-ca": 267,
	"./en-ca.js": 267,
	"./en-gb": 268,
	"./en-gb.js": 268,
	"./en-ie": 269,
	"./en-ie.js": 269,
	"./en-il": 270,
	"./en-il.js": 270,
	"./en-nz": 271,
	"./en-nz.js": 271,
	"./eo": 272,
	"./eo.js": 272,
	"./es": 273,
	"./es-do": 274,
	"./es-do.js": 274,
	"./es-us": 275,
	"./es-us.js": 275,
	"./es.js": 273,
	"./et": 276,
	"./et.js": 276,
	"./eu": 277,
	"./eu.js": 277,
	"./fa": 278,
	"./fa.js": 278,
	"./fi": 279,
	"./fi.js": 279,
	"./fo": 280,
	"./fo.js": 280,
	"./fr": 281,
	"./fr-ca": 282,
	"./fr-ca.js": 282,
	"./fr-ch": 283,
	"./fr-ch.js": 283,
	"./fr.js": 281,
	"./fy": 284,
	"./fy.js": 284,
	"./gd": 285,
	"./gd.js": 285,
	"./gl": 286,
	"./gl.js": 286,
	"./gom-latn": 287,
	"./gom-latn.js": 287,
	"./gu": 288,
	"./gu.js": 288,
	"./he": 289,
	"./he.js": 289,
	"./hi": 290,
	"./hi.js": 290,
	"./hr": 291,
	"./hr.js": 291,
	"./hu": 292,
	"./hu.js": 292,
	"./hy-am": 293,
	"./hy-am.js": 293,
	"./id": 294,
	"./id.js": 294,
	"./is": 295,
	"./is.js": 295,
	"./it": 296,
	"./it.js": 296,
	"./ja": 297,
	"./ja.js": 297,
	"./jv": 298,
	"./jv.js": 298,
	"./ka": 299,
	"./ka.js": 299,
	"./kk": 300,
	"./kk.js": 300,
	"./km": 301,
	"./km.js": 301,
	"./kn": 302,
	"./kn.js": 302,
	"./ko": 303,
	"./ko.js": 303,
	"./ky": 304,
	"./ky.js": 304,
	"./lb": 305,
	"./lb.js": 305,
	"./lo": 306,
	"./lo.js": 306,
	"./lt": 307,
	"./lt.js": 307,
	"./lv": 308,
	"./lv.js": 308,
	"./me": 309,
	"./me.js": 309,
	"./mi": 310,
	"./mi.js": 310,
	"./mk": 311,
	"./mk.js": 311,
	"./ml": 312,
	"./ml.js": 312,
	"./mr": 313,
	"./mr.js": 313,
	"./ms": 314,
	"./ms-my": 315,
	"./ms-my.js": 315,
	"./ms.js": 314,
	"./mt": 316,
	"./mt.js": 316,
	"./my": 317,
	"./my.js": 317,
	"./nb": 318,
	"./nb.js": 318,
	"./ne": 319,
	"./ne.js": 319,
	"./nl": 320,
	"./nl-be": 321,
	"./nl-be.js": 321,
	"./nl.js": 320,
	"./nn": 322,
	"./nn.js": 322,
	"./pa-in": 323,
	"./pa-in.js": 323,
	"./pl": 324,
	"./pl.js": 324,
	"./pt": 325,
	"./pt-br": 326,
	"./pt-br.js": 326,
	"./pt.js": 325,
	"./ro": 327,
	"./ro.js": 327,
	"./ru": 328,
	"./ru.js": 328,
	"./sd": 329,
	"./sd.js": 329,
	"./se": 330,
	"./se.js": 330,
	"./si": 331,
	"./si.js": 331,
	"./sk": 332,
	"./sk.js": 332,
	"./sl": 333,
	"./sl.js": 333,
	"./sq": 334,
	"./sq.js": 334,
	"./sr": 335,
	"./sr-cyrl": 336,
	"./sr-cyrl.js": 336,
	"./sr.js": 335,
	"./ss": 337,
	"./ss.js": 337,
	"./sv": 338,
	"./sv.js": 338,
	"./sw": 339,
	"./sw.js": 339,
	"./ta": 340,
	"./ta.js": 340,
	"./te": 341,
	"./te.js": 341,
	"./tet": 342,
	"./tet.js": 342,
	"./tg": 343,
	"./tg.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 349,
	"./tzm-latn": 350,
	"./tzm-latn.js": 350,
	"./tzm.js": 349,
	"./ug-cn": 351,
	"./ug-cn.js": 351,
	"./uk": 352,
	"./uk.js": 352,
	"./ur": 353,
	"./ur.js": 353,
	"./uz": 354,
	"./uz-latn": 355,
	"./uz-latn.js": 355,
	"./uz.js": 354,
	"./vi": 356,
	"./vi.js": 356,
	"./x-pseudo": 357,
	"./x-pseudo.js": 357,
	"./yo": 358,
	"./yo.js": 358,
	"./zh-cn": 359,
	"./zh-cn.js": 359,
	"./zh-hk": 360,
	"./zh-hk.js": 360,
	"./zh-tw": 361,
	"./zh-tw.js": 361
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
webpackContext.id = 455;

/***/ }),

/***/ 456:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 457:
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

},[365]);
//# sourceMappingURL=main.js.map