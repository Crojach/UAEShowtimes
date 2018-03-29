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

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(365);
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

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(240);
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

/***/ 240:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], MovieInfoPage);
    return MovieInfoPage;
}());

//# sourceMappingURL=movie-info.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(364);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], CinemasPage);
    return CinemasPage;
}());

//# sourceMappingURL=cinemas.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(236);
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

/***/ 365:
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

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_movies_movies__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cinemas_cinemas__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_movie_info_movie_info__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cinema_info_cinema_info__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_offers_offers__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes__ = __webpack_require__(458);
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
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_27__pipes__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDX8lQmy_wPtfYbP4M6KB52dIZGT5mNcY8'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_offers_offers__["a" /* OffersPage */],
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
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(238);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 241,
	"./af.js": 241,
	"./ar": 242,
	"./ar-dz": 243,
	"./ar-dz.js": 243,
	"./ar-kw": 244,
	"./ar-kw.js": 244,
	"./ar-ly": 245,
	"./ar-ly.js": 245,
	"./ar-ma": 246,
	"./ar-ma.js": 246,
	"./ar-sa": 247,
	"./ar-sa.js": 247,
	"./ar-tn": 248,
	"./ar-tn.js": 248,
	"./ar.js": 242,
	"./az": 249,
	"./az.js": 249,
	"./be": 250,
	"./be.js": 250,
	"./bg": 251,
	"./bg.js": 251,
	"./bm": 252,
	"./bm.js": 252,
	"./bn": 253,
	"./bn.js": 253,
	"./bo": 254,
	"./bo.js": 254,
	"./br": 255,
	"./br.js": 255,
	"./bs": 256,
	"./bs.js": 256,
	"./ca": 257,
	"./ca.js": 257,
	"./cs": 258,
	"./cs.js": 258,
	"./cv": 259,
	"./cv.js": 259,
	"./cy": 260,
	"./cy.js": 260,
	"./da": 261,
	"./da.js": 261,
	"./de": 262,
	"./de-at": 263,
	"./de-at.js": 263,
	"./de-ch": 264,
	"./de-ch.js": 264,
	"./de.js": 262,
	"./dv": 265,
	"./dv.js": 265,
	"./el": 266,
	"./el.js": 266,
	"./en-au": 267,
	"./en-au.js": 267,
	"./en-ca": 268,
	"./en-ca.js": 268,
	"./en-gb": 269,
	"./en-gb.js": 269,
	"./en-ie": 270,
	"./en-ie.js": 270,
	"./en-il": 271,
	"./en-il.js": 271,
	"./en-nz": 272,
	"./en-nz.js": 272,
	"./eo": 273,
	"./eo.js": 273,
	"./es": 274,
	"./es-do": 275,
	"./es-do.js": 275,
	"./es-us": 276,
	"./es-us.js": 276,
	"./es.js": 274,
	"./et": 277,
	"./et.js": 277,
	"./eu": 278,
	"./eu.js": 278,
	"./fa": 279,
	"./fa.js": 279,
	"./fi": 280,
	"./fi.js": 280,
	"./fo": 281,
	"./fo.js": 281,
	"./fr": 282,
	"./fr-ca": 283,
	"./fr-ca.js": 283,
	"./fr-ch": 284,
	"./fr-ch.js": 284,
	"./fr.js": 282,
	"./fy": 285,
	"./fy.js": 285,
	"./gd": 286,
	"./gd.js": 286,
	"./gl": 287,
	"./gl.js": 287,
	"./gom-latn": 288,
	"./gom-latn.js": 288,
	"./gu": 289,
	"./gu.js": 289,
	"./he": 290,
	"./he.js": 290,
	"./hi": 291,
	"./hi.js": 291,
	"./hr": 292,
	"./hr.js": 292,
	"./hu": 293,
	"./hu.js": 293,
	"./hy-am": 294,
	"./hy-am.js": 294,
	"./id": 295,
	"./id.js": 295,
	"./is": 296,
	"./is.js": 296,
	"./it": 297,
	"./it.js": 297,
	"./ja": 298,
	"./ja.js": 298,
	"./jv": 299,
	"./jv.js": 299,
	"./ka": 300,
	"./ka.js": 300,
	"./kk": 301,
	"./kk.js": 301,
	"./km": 302,
	"./km.js": 302,
	"./kn": 303,
	"./kn.js": 303,
	"./ko": 304,
	"./ko.js": 304,
	"./ky": 305,
	"./ky.js": 305,
	"./lb": 306,
	"./lb.js": 306,
	"./lo": 307,
	"./lo.js": 307,
	"./lt": 308,
	"./lt.js": 308,
	"./lv": 309,
	"./lv.js": 309,
	"./me": 310,
	"./me.js": 310,
	"./mi": 311,
	"./mi.js": 311,
	"./mk": 312,
	"./mk.js": 312,
	"./ml": 313,
	"./ml.js": 313,
	"./mr": 314,
	"./mr.js": 314,
	"./ms": 315,
	"./ms-my": 316,
	"./ms-my.js": 316,
	"./ms.js": 315,
	"./mt": 317,
	"./mt.js": 317,
	"./my": 318,
	"./my.js": 318,
	"./nb": 319,
	"./nb.js": 319,
	"./ne": 320,
	"./ne.js": 320,
	"./nl": 321,
	"./nl-be": 322,
	"./nl-be.js": 322,
	"./nl.js": 321,
	"./nn": 323,
	"./nn.js": 323,
	"./pa-in": 324,
	"./pa-in.js": 324,
	"./pl": 325,
	"./pl.js": 325,
	"./pt": 326,
	"./pt-br": 327,
	"./pt-br.js": 327,
	"./pt.js": 326,
	"./ro": 328,
	"./ro.js": 328,
	"./ru": 329,
	"./ru.js": 329,
	"./sd": 330,
	"./sd.js": 330,
	"./se": 331,
	"./se.js": 331,
	"./si": 332,
	"./si.js": 332,
	"./sk": 333,
	"./sk.js": 333,
	"./sl": 334,
	"./sl.js": 334,
	"./sq": 335,
	"./sq.js": 335,
	"./sr": 336,
	"./sr-cyrl": 337,
	"./sr-cyrl.js": 337,
	"./sr.js": 336,
	"./ss": 338,
	"./ss.js": 338,
	"./sv": 339,
	"./sv.js": 339,
	"./sw": 340,
	"./sw.js": 340,
	"./ta": 341,
	"./ta.js": 341,
	"./te": 342,
	"./te.js": 342,
	"./tet": 343,
	"./tet.js": 343,
	"./tg": 344,
	"./tg.js": 344,
	"./th": 345,
	"./th.js": 345,
	"./tl-ph": 346,
	"./tl-ph.js": 346,
	"./tlh": 347,
	"./tlh.js": 347,
	"./tr": 348,
	"./tr.js": 348,
	"./tzl": 349,
	"./tzl.js": 349,
	"./tzm": 350,
	"./tzm-latn": 351,
	"./tzm-latn.js": 351,
	"./tzm.js": 350,
	"./ug-cn": 352,
	"./ug-cn.js": 352,
	"./uk": 353,
	"./uk.js": 353,
	"./ur": 354,
	"./ur.js": 354,
	"./uz": 355,
	"./uz-latn": 356,
	"./uz-latn.js": 356,
	"./uz.js": 355,
	"./vi": 357,
	"./vi.js": 357,
	"./x-pseudo": 358,
	"./x-pseudo.js": 358,
	"./yo": 359,
	"./yo.js": 359,
	"./zh-cn": 360,
	"./zh-cn.js": 360,
	"./zh-hk": 361,
	"./zh-hk.js": 361,
	"./zh-tw": 362,
	"./zh-tw.js": 362
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
webpackContext.id = 456;

/***/ }),

/***/ 457:
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

/***/ 458:
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

},[366]);
//# sourceMappingURL=main.js.map