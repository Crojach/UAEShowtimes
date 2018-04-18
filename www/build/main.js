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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_service_network_service__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MoviesPage = (function () {
    function MoviesPage(navCtrl, network, navParams, http, platform, ga) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.network = network;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.ga = ga;
        // configUrl = "https://uaeshowtimes.com";
        this.configUrl = "http://13.250.201.193:3006";
        this.order = "releaseDate";
        if (this.network.noConnection()) {
            this.network.showNetworkAlert();
        }
        this.rootNavCtrl = this.navParams.get("rootNavCtrl");
        this.getItems();
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Movies", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Movies");
        });
    }
    MoviesPage.prototype.bookNow = function (item) {
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
                        x.thumbnailImage = "http://13.250.201.193:3006" + x.thumbnailImage;
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
            selector: "page-movies",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/'<!--\n\n  Generated template for the MoviesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Movies</ion-title>\n\n        <br>\n\n        <ion-row class="searchSort">\n\n            <ion-searchbar class="search" type="text" [(ngModel)]="queryString" placeholder="Search Movies"></ion-searchbar>\n\n            <ion-icon class="funnel-icon" name="funnel"></ion-icon>\n\n            <ion-select class="sort" [(ngModel)]="order">\n\n                <ion-option value="releaseDate">Sort by Release date</ion-option>\n\n                <ion-option value="title">Sort by Title</ion-option>\n\n            </ion-select>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div style="padding:2%">\n\n        <ion-card class="cardCurve animated fadeInUp" *ngFor="let item of items | FilterPipe: queryString | orderBy: order : order == \'title\' ? false : true ">\n\n            <ion-item style="padding:2%" (click)=\'bookNow(item)\'>\n\n                <ion-thumbnail style="margin: 2%;" item-start>\n\n                    <img class="imageCurve" [src]="item.thumbnailImage">\n\n                </ion-thumbnail>\n\n\n\n                <h2 class="movieTitle">{{ item.title }}</h2> <br>\n\n                <p class="ratings" item-end>{{ item.ratings }}</p>\n\n                <!-- <p>{{ item.releaseDate.split(\'-\')[0] }}</p> -->\n\n                <ion-row style="margin-top: 10%;">\n\n                    <ion-col>\n\n                        <p style="margin:0;padding: 1%;" item-left>\n\n                            <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon>\n\n                            <br>\n\n                            <!-- <span style="margin: 0 0 0 14%;">Release Date</span> -->\n\n                        </p>\n\n                        <p style="margin:0;padding: 1%;" item-end>\n\n                            <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon>\n\n                            <br>\n\n                            <!-- <span style="margin: 0 0 0 14%;">Duration</span> -->\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movies\movies.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_network_service_network_service__["a" /* NetworkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_youtube_video_player__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var loading;
var MovieInfoPage = (function () {
    function MovieInfoPage(navCtrl, navParams, domSanitizer, platform, ga, youtube, http, iab, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.platform = platform;
        this.ga = ga;
        this.youtube = youtube;
        this.view = false;
        this.configUrl = "http://13.250.201.193:3006";
        this.selectedSegment = "Info";
        this.daySegment = __WEBPACK_IMPORTED_MODULE_7_moment__()
            .add(0, "days")
            .format("YYYYMMDD");
        this.days = [];
        this.icon = "ios-arrow-down";
        this.cinemaList = [];
        this.http = http;
        this.iab = iab;
        this.currentTime = Date.now();
        this.loadingCtrl = loadingCtrl;
        this.item = this.navParams.get("movieInfo");
        // console.log("%%%%%%%",this.item)
        for (var i = 0; i < 4; i++) {
            this.days.push({
                day: __WEBPACK_IMPORTED_MODULE_7_moment__()
                    .add(i, "days")
                    .format("dddd")
                    .substring(0, 3),
                value: __WEBPACK_IMPORTED_MODULE_7_moment__()
                    .add(i, "days")
                    .format("YYYYMMDD")
            });
        }
        // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        //   "https://www.youtube.com/embed/" + this.item.trailer
        // );
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Movies Info", "Opened", "New Session Started", 1, true);
            _this.ga.setAllowIDFACollection(true);
            _this.ga.trackView("Movies Info");
        });
        this.postItems();
    }
    MovieInfoPage.prototype.openBookingUrl = function (url) {
        console.log("---------", url);
        var browser = this.iab.create(url);
    };
    MovieInfoPage.prototype.play = function (link) {
        console.log("Youtube video", link);
        this.youtube.openVideo(link);
        // this.iab.create(`https://www.youtube.com/embed/${link}`);
        // const browser = this.iab.create(`https://www.youtube.com/embed/${link}`);
    };
    //onClick for back button
    MovieInfoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    //Passing day value from on click
    MovieInfoPage.prototype.dayValue = function (value, todaysData) {
        var _this = this;
        if (value ==
            __WEBPACK_IMPORTED_MODULE_7_moment__()
                .add(0, "days")
                .format("YYYYMMDD") &&
            todaysData != null) {
            console.log("!!!!!!!!!!!!!!!!!!", todaysData);
            this.showsLength = todaysData.shows.length;
            this.setValues(todaysData);
        }
        else {
            // loading = this.loadingCtrl.create({
            //   spinner: "hide",
            //   content: `
            //     <span class="spinner-double-dot-in"></span>
            //   `
            // });
            // loading.present();
            this.view = true;
            //Getting offers data from API
            var url = this.configUrl + "/app/movieInfoForDate/" +
                this.item._id +
                "?search=" +
                parseInt(value);
            // console.log(url);
            this.http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (results) {
                // console.log(
                //   ">>Check",
                //   value ==
                //     moment()
                //       .add(0, "days")
                //       .format(`YYYYMMDD`) && todaysData != null
                // );
                _this.setValues(results);
                _this.showsLength = results.shows.length;
                _this.view = false;
            });
            // loading.dismiss();
            // console.log('view',this.view)
        }
    };
    MovieInfoPage.prototype.setValues = function (results) {
        var Obj = {
            novaArray: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/novo.jpg",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            roxyCinemas: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/roxy.png",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            voxCinemas: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/vox.jpg",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            reelCinemas: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/reel.jpg",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            cineRoyal: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/cineroyal.png",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            oscarCinemas: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/oscar.png",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            cenimaCityCinemas: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/cinemacity.png",
                showDetails: false,
                icon: "ios-arrow-down"
            },
            starCinemas: {
                multiplexName: "",
                cinemaArray: [],
                image: "assets/img/star.png",
                showDetails: false,
                icon: "ios-arrow-down"
            }
        };
        // console.log("result",results.shows)
        var final = results.shows.reduce(function (acc, cv, ci, arr) {
            // console.log(final, ">>>>>>>>", this.cinema);
            if (cv.multiplexName == "Vox Cinemas") {
                acc.voxCinemas["multiplexName"] = "Vox Cinemas";
                acc.voxCinemas["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "Reel Cinemas") {
                acc.reelCinemas["multiplexName"] = "Reel Cinemas";
                acc.reelCinemas["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "CineRoyal Cinemas") {
                acc.cineRoyal["multiplexName"] = "CineRoyal";
                acc.cineRoyal["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "Oscar Cinemas") {
                acc.oscarCinemas["multiplexName"] = "Oscar Cinemas";
                acc.oscarCinemas["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "CinemaCity Cinemas") {
                acc.cenimaCityCinemas["multiplexName"] = "Cinema City Cinemas";
                acc.cenimaCityCinemas["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "Star Cinemas") {
                acc.starCinemas["multiplexName"] = "Star Cinemas";
                acc.starCinemas["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "Roxy Cinemas") {
                acc.roxyCinemas["multiplexName"] = "Roxy Cinemas";
                acc.roxyCinemas["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            if (cv.multiplexName == "Novo Cinemas") {
                acc.novaArray["multiplexName"] = "Novo Cinemas";
                acc.novaArray["cinemaArray"].push({
                    cinemaName: cv.cinemaName,
                    sessions: cv.sessions
                });
            }
            return acc;
        }, Obj);
        this.cinema = Object.keys(final).map(function (x) {
            var p = final[x];
            return p;
        });
        // loading.dismiss();
    };
    //Code for Accordin
    MovieInfoPage.prototype.toggleDetails = function (cinema, index) {
        if (this.cinema[index].showDetails) {
            this.cinema[index].showDetails = false;
            this.cinema[index].icon = "ios-arrow-down";
        }
        else {
            this.cinema.map(function (x, _index) {
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
    //Post request for getting showTimes
    MovieInfoPage.prototype.postItems = function () {
        var _this = this;
        //Show loader till getting data
        loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "\n      <div class=\"spinner\">\n        <div class=\"dot1\"></div>\n        <div class=\"dot2\"></div>\n      </div>\n        "
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
        // console.log(body);
        this.http
            .post(this.configUrl + "/app/movie", body, httpOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (results) {
            _this.dayValue(__WEBPACK_IMPORTED_MODULE_7_moment__()
                .add(0, "days")
                .format("YYYYMMDD"), results);
        });
        loading.dismiss();
    };
    MovieInfoPage.prototype.ionViewWillEnter = function () { };
    MovieInfoPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MovieInfoPage");
    };
    MovieInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-movie-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/'<!--\n  Generated template for the MovieInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- ---------iframe with thumbnail------------ -->\n<ion-header class="headerShadow">\n    <ion-navbar>\n        <ion-title>{{ item.title }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <!-- <ion-icon class="back" ios="ios-arrow-back" md="md-arrow-back" (click)="goBack()" large></ion-icon> -->\n    <!-- <iframe style="width: 100%;" [src]="trustedVideoUrl ? trustedVideoUrl : \'\'" frameborder="0" allowfullscreen></iframe> -->\n    <img class="play-button" src="assets/img/play.svg" alt="play" width="45px" height="40px" (click)="play(item.trailer)">\n    <img class="bannerImage" src="http://13.250.201.193:3006{{item.bannerImage}}" alt="">\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <div>\n            <img class="customImg upShadow" [src]="item.thumbnailImage" item-left>\n            <ion-card class="upShadow curve" style="padding: 0; width: 100%;margin: 0 0 8px 0;">\n                <ion-item style="padding: 2% 1% 4% 34%;">\n                    <ion-row style="justify-content: space-between;">\n                        <h2 item-left>{{ item.title }}</h2>\n                        <p item-end class="ratings">{{ item.ratings }}</p>\n                    </ion-row>\n                    <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n                    <ion-row style="margin-top:10%">\n                        <p style="margin:0;padding: 1%;" item-left *ngIf="item.imdbRating">\n                            <ion-icon style="margin-bottom: 5%;" name="star-half">&nbsp;{{ item.imdbRating }}</ion-icon>\n                            <span style="margin: 0 0 0 14%;"><b>IMDB</b></span>\n                        </p> <br>\n                    </ion-row>\n                    <ion-row>\n                        <p>\n                            <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon> <br>\n                            <!-- <span style="margin: 0 0 0 14%;">Release Date</span> -->\n                        </p>\n                    </ion-row>\n                    <ion-row>\n\n                        <p style="margin:0;padding: 1%;" item-end>\n                            <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n                            <!-- <span style="margin: 0 0 0 14%;">Duration</span> -->\n                        </p>\n                    </ion-row>\n                </ion-item>\n            </ion-card>\n        </div>\n    </div>\n\n\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <div [ngSwitch]="selectedSegment">\n            <ion-list class="iconColor" *ngSwitchCase="\'Info\'">\n                <ion-card class="infoCard">\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'videocam\' item-start></ion-icon>\n                        Synopsis\n                        <p style="white-space: pre-wrap;">{{ item.synopsis }}</p>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'eye\' item-start></ion-icon>\n                        Language\n                        <ion-note item-end>{{ item.language }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'flag\' item-start></ion-icon>\n                        Genre\n                        <ion-note item-end>{{ item.genre }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'film\' item-start></ion-icon>\n                        Director\n                        <ion-note item-end>{{ item.director }}</ion-note>\n                    </ion-item>\n                </ion-card>\n\n                <h4>Showtimes</h4>\n                <div>\n                    <ion-row>\n                        <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                            <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                        </ion-segment>\n                    </ion-row> <br>\n                </div>\n                <div *ngIf="showsLength == 0 ">\n                    <p>No Showtimes</p>\n                </div>\n                <div *ngIf="view" class="spinner-data">\n                    <div class="dot1"></div>\n                    <div class="dot2"></div>\n                </div>\n                <div *ngIf="!view">\n                    <div class="animated slideInUp" *ngFor="let d of cinema; let i = index" (click)="toggleDetails(d,i)">\n                        <div *ngIf="d.multiplexName !== \'\'" style="background-color: transparent;">\n                            <ion-card class="cardCurve">\n                                <ion-item style="background-color: transparent">\n                                    <ion-row>\n                                        <img class="cinemaImage" [src]="d.image" alt="Cinemas Image">\n                                        <p class="CinemaFont">{{ d.multiplexName }}</p>\n                                        <ion-icon class="dropDown" color="danger" item-right [name]="d.icon"></ion-icon>\n                                    </ion-row>\n                                </ion-item>\n\n                                <div class="showtimesPadding animated fadeInUp" *ngIf="d.showDetails">\n                                    <div *ngFor="let show of d.cinemaArray">\n                                        <h3 class="multipexNames"> {{ show.cinemaName }} </h3><br>\n                                        <ion-row>\n                                            <div style="width:33.33%" *ngFor="let time of show.sessions">\n                                                <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                                            </div>\n                                        </ion-row><br>\n                                    </div>\n                                </div>\n                            </ion-card>\n                        </div>\n                    </div>\n                </div>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], MovieInfoPage);
    return MovieInfoPage;
}());

//# sourceMappingURL=movie-info.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(58);
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





/*
  Generated class for the NetworkServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NetworkServiceProvider = (function () {
    function NetworkServiceProvider(http, network, toastCtrl) {
        this.http = http;
        this.network = network;
        this.toastCtrl = toastCtrl;
    }
    NetworkServiceProvider.prototype.noConnection = function () {
        // console.log("$$$$$$$$",this.network)
        return (this.network.type === 'none');
    };
    NetworkServiceProvider.prototype.showNetworkAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'Failed to connect to UAE Showtimes, check your internet connection',
            duration: 15000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Got it!',
        });
        toast.present();
    };
    NetworkServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */]])
    ], NetworkServiceProvider);
    return NetworkServiceProvider;
}());

//# sourceMappingURL=network-service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(58);
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
        // configUrl = "http://uaeshowtimes.com:3006";
        this.configUrl = "http://13.250.201.193:3006";
        this.icon = "ios-arrow-down";
        this.cinemasTitles = [
            "assets/img/cineroyal.png",
            "assets/img/cinemacity.png",
            "assets/img/novo.jpg",
            "assets/img/oscar.png",
            "assets/img/reel.jpg",
            "assets/img/roxy.png",
            "assets/img/star.png",
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
        this.rootNavCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__["a" /* CinemaInfoPage */], {
            cinemaId: id,
            cinemaName: cinemaName
        });
        //to Turn on location
        // let successCallback = isAvailable => {
        //   console.log("Is available? " + isAvailable);
        // };
        // let errorCallback = e => console.error(e);
        // // this.diagnostic.isLocationEnabled().then(successCallback, errorCallback);
        // this.diagnostic.isGpsLocationEnabled()
        // .then((state) => {
        //   console.log('state',state)
        //     if (state) {
        //       // do something
        //       console.log("gps is ON")
        //       //on click to push on next page
        //       this.rootNavCtrl.push(CinemaInfoPage, {
        //         cinemaId: id,
        //         cinemaName: cinemaName
        //       });
        //     } else {
        //       console.log("gps is off")
        //       alert("Please Turn on GPS.")
        //       this.diagnostic.switchToLocationSettings()
        //     }
        //   })
        //   .catch(e => console.error(e));
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
            content: "\n      <div class=\"spinner\">\n      <div class=\"dot1\"></div>\n      <div class=\"dot2\"></div>\n    </div>\n      "
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
            selector: "page-musics",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/'<!--\n  Generated template for the MusicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow">\n\n    <ion-navbar>\n        <ion-title style="color:azure">Cinemas</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <div class="animated fadeInUp" *ngFor="let d of data; let i = index" (click)="toggleDetails(d,i)">\n            <ion-card class="cardCurve">\n                <ion-row style="margin-right: 3%;">\n                    <img class="cinemaImage" [src]="d.image" alt="Cinemas Image" nopadding>\n                    <h4 class="cinemaName">{{ d.multiplex }}</h4>\n                    <ion-icon class="dropDown" color="danger" item-right [name]="d.icon"></ion-icon>\n                </ion-row>\n                <div class="animated fadeInUp" *ngIf="d.showDetails">\n                    <a class="coralColor" *ngFor="let col of d.cinema;" (click)=\'cinemaPage(col._id, d.multiplex)\'>\n                        <hr>\n                        <ion-row style="margin-right: 3%;">\n                            <ion-item class="item-color">\n                                {{col.cinemaName}}\n                                <ion-icon class="dropRight" item-right name="ios-arrow-forward-outline"></ion-icon>\n                            </ion-item>\n                        </ion-row>\n                    </a>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], CinemasPage);
    return CinemasPage;
}());

//# sourceMappingURL=cinemas.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__ = __webpack_require__(227);
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
        this.view = false;
        this.configUrl = "http://13.250.201.193:3006";
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
            subject: "Greetings",
            body: "How are you? Nice greetings from UAE showtimes",
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    // Function to open in app browser
    CinemaInfoPage.prototype.openBookingUrl = function (url) {
        this.iab.create(url);
    };
    //Getting cinema sessions of day selected
    CinemaInfoPage.prototype.dayValue = function (value, todaysData) {
        var _this = this;
        if (value ==
            __WEBPACK_IMPORTED_MODULE_8_moment__()
                .add(0, "days")
                .format("YYYYMMDD") &&
            todaysData != null) {
            this.showsLength = todaysData.shows.length;
            this.postItems(todaysData);
        }
        else {
            this.view = true;
            //Getting offers data from API
            var url = this.configUrl + "/app/cinemaInfoForDate/" +
                this.cinemaId +
                "?search=" +
                parseInt(value);
            // console.log(url);
            this.http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (results) {
                loading.dismiss();
                _this.selectedDay = results.finalMovies;
                console.log("!!!!!!!!!!!!!!!!!!", _this.selectedDay);
                // this.showsLength = todaysData.shows.length;
                _this.view = false;
            });
        }
    };
    CinemaInfoPage.prototype.postItems = function (results) {
        var _this = this;
        loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "\n      <div class=\"spinner\">\n        <div class=\"dot1\"></div>\n        <div class=\"dot2\"></div>\n      </div>\n      "
        });
        loading.present();
        console.log(this.cinemaId);
        var httpOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
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
            selector: "page-cinema-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/'<!--\n  Generated template for the CinemaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow">\n\n    <!-- <ion-navbar>\n        <ion-title>{{ cinemaInfo.multiplexName }}</ion-title>\n    </ion-navbar> -->\n    <ion-navbar>\n        <ion-title>{{ cinemaName }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div id="map_canvas"></div>\n    <ion-card class="cardCurve">\n        <div *ngFor="let d of cinemaInfo">\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>\n                <ion-col>\n                    <h2>{{d.cinemaName}}</h2>\n                    <p class="customFont wordBreak">{{ d.cityName }}, {{ d.stateName }}, {{ d.countryName}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-call" md="md-call"></ion-icon>\n                <p class="text" (click)="launchDialer(d.phoneNumber)">{{ d.phoneNumber }}</p>\n            </ion-row>\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-mail" md="md-mail" nopadding></ion-icon>\n                <p class="text wordBreak" (click)="launchMail(d.emailId)">{{ d.emailId }} </p>\n            </ion-row>\n        </div>\n    </ion-card>\n    <!-- -------------------ShowTime------------------------------------------ -->\n    <h3 style="color:#36454F">Showtimes</h3>\n    <div>\n        <ion-row>\n            <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n            </ion-segment>\n        </ion-row> <br>\n        <div *ngIf="selectedDay == 0 ">\n            <p>No Showtimes</p>\n        </div>\n        <div *ngIf="view" class="spinner-data">\n            <div class="dot1"></div>\n            <div class="dot2"></div>\n        </div>\n        <div *ngIf="!view">\n            <div class="animated slideInUp" *ngFor="let session of selectedDay">\n                <ion-card class="cardCurve">\n                    <h4 class="showTimeHeader">{{ session.movieTitle }}</h4>\n                    <ion-row>\n                        <div class="animated fadeInUp" style="width:33.33%" *ngFor="let time of session.sessions">\n                            <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                        </div>\n                    </ion-row>\n                </ion-card>\n            </div>\n        </div>\n    </div>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], CinemaInfoPage);
    return CinemaInfoPage;
}());

//# sourceMappingURL=cinema-info.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { AnimationService } from 'css-animator';
// import { AnimationBuilder } from 'css-animator/builder';
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
        // configUrl = "http://uaeshowtimes.com:3006";
        this.configUrl = "http://13.250.201.193:3006";
        this.icon = "ios-arrow-down";
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
    //Redirecting  to offer
    OffersPage.prototype.openOfferSite = function (url) {
        this.iab.create(url);
    };
    //Function for getting offers
    OffersPage.prototype.getOffers = function () {
        var _this = this;
        //Turn loader on till we get the data
        loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "\n      <div class=\"spinner\">\n  <div class=\"dot1\"></div>\n  <div class=\"dot2\"></div>\n</div>\n      "
        });
        loading.present();
        //Getting offers data from API
        this.http
            .get(this.configUrl + "/app/ticketOffers")
            .map(function (res) { return res.json(); })
            .subscribe(function (results) {
            if (results.status) {
                results.offers.map(function (x, index) {
                    // console.log(this.cinemasTitles)
                    _this.data.push({
                        offer: x,
                        icon: "ios-arrow-down",
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
        console.log("ionViewDidLoad OffersPage");
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-offers",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="headerShadow">\n        <ion-title style="color: white;">Ticket Offers</ion-title> <br>\n        <ion-searchbar class="search" type="text" [(ngModel)]="queryString" placeholder="Search Offers"></ion-searchbar>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <button ion-button (click)="animateElem()">Animate it!</button>\n    <ion-card #myElement>\n        <ion-card-header>My Animation Card</ion-card-header>\n        <ion-card-content>So much awesome content and animations. AMAZING!</ion-card-content>\n    </ion-card> -->\n    <ion-list>\n        <div class="animated fadeInUp" *ngFor="let item of data | FilterPipe: queryString; let i = index" (click)="toggleDetails(item, i)" nopadding>\n            <ion-card class="cardCurve" *ngIf="item.offer.title" nopadding>\n                <div nopadding>\n                    <ion-row padding>\n                        <ion-col>\n                            <h5 *ngIf="item.offer.multiplexId == 6"><strong>VOX Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 8"><strong>NOVO Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 7"><strong>ROXY Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 9"><strong>REEL Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 10"><strong>CINEROYAL Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 11"><strong>OSCAR Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 12"><strong>STAR Cinemas</strong></h5>\n                            <h5 *ngIf="item.offer.multiplexId == 13"><strong>CINEMA CITY Cinemas</strong></h5>\n                            <p class="subTitle">{{ item.offer.title }}</p>\n                        </ion-col>\n                        <ion-icon color="danger" item-right [name]="item.icon" width="100%"></ion-icon>\n                    </ion-row>\n                    <div class="lineHeight" *ngIf="item.showDetails" (click)="openOfferSite(item.offer.url)" nopadding>\n                        <object data="http://stackoverflow.com/does-not-exist.png" type="image/png">\n                  <img *ngIf="item.offer.image" src="http://uaeshowtimes.com{{item.offer.image}}" alt="Offer Image">\n                </object>\n                        <div class="htmlContent" [innerHtml]="item.offer.htmlData"></div>\n                    </div>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\offers\offers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(393);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_version__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_movies_movies__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cinemas_cinemas__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_movie_info_movie_info__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cinema_info_cinema_info__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_offers_offers__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_network_service_network_service__ = __webpack_require__(366);
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
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_29__pipes__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDX8lQmy_wPtfYbP4M6KB52dIZGT5mNcY8'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_offers_offers__["a" /* OffersPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["b" /* SuperTabsController */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_network_service_network_service__["a" /* NetworkServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(241);
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
    function MyApp(http, platform, statusBar, app, toast, splashScreen, oneSignal, alertCtrl, ga, appVersion, screenOrientation, diagnostic, network, iab) {
        var _this = this;
        this.platform = platform;
        this.app = app;
        this.toast = toast;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.ga = ga;
        this.appVersion = appVersion;
        this.screenOrientation = screenOrientation;
        this.diagnostic = diagnostic;
        this.network = network;
        this.iab = iab;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */];
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
        // App version check
        //   this.appVersion.getVersionNumber().then(
        //     data => {
        //       let app_version = data.split(".")
        //       console.log(app_version)
        //       let headers = new Headers({
        //       'Content-Type': 'application/json',
        //       // 'Authorization': this.key
        //     });
        //     let options = new RequestOptions({ headers: headers });
        //     this.http
        //       .get("http://forehotels.com:3000/api/app_versions", options)
        //       .subscribe(data =>{
        //         this.items=JSON.parse(data._body).Apps;
        //         let app_id = this.items["0"].app_id
        //         var latest_version = this.items["0"].android_latest_version
        //         latest_version = latest_version.split(".")
        //         if(app_id == 1){
        //           if((app_version[0] != latest_version[0]) || (app_version[1] != latest_version[1]) || (app_version[2] != latest_version[2])){
        //             this.updateApp();
        //           }
        //         }
        //       },
        //       error=>{
        //           console.log(error);// Error getting the data
        //         });
        //       });
        // }
        // updateApp(){
        //   let alert = this.alertCtrl.create({
        //      title: 'Update',
        //      message: 'Please update your app to enjoy better features',
        //      buttons: [
        //        {
        //          text: 'Cancel',
        //          role: 'cancel',
        //          handler: () => {
        //          }
        //        },
        //        {
        //          text: 'Update',
        //          handler: () => {
        //            let browser = this.iab.create('https://play.google.com/store','_system')
        //            browser.show();
        //          }
        //        }
        //      ]
        //    });
        //    alert.present();
        //   }
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 244,
	"./af.js": 244,
	"./ar": 245,
	"./ar-dz": 246,
	"./ar-dz.js": 246,
	"./ar-kw": 247,
	"./ar-kw.js": 247,
	"./ar-ly": 248,
	"./ar-ly.js": 248,
	"./ar-ma": 249,
	"./ar-ma.js": 249,
	"./ar-sa": 250,
	"./ar-sa.js": 250,
	"./ar-tn": 251,
	"./ar-tn.js": 251,
	"./ar.js": 245,
	"./az": 252,
	"./az.js": 252,
	"./be": 253,
	"./be.js": 253,
	"./bg": 254,
	"./bg.js": 254,
	"./bm": 255,
	"./bm.js": 255,
	"./bn": 256,
	"./bn.js": 256,
	"./bo": 257,
	"./bo.js": 257,
	"./br": 258,
	"./br.js": 258,
	"./bs": 259,
	"./bs.js": 259,
	"./ca": 260,
	"./ca.js": 260,
	"./cs": 261,
	"./cs.js": 261,
	"./cv": 262,
	"./cv.js": 262,
	"./cy": 263,
	"./cy.js": 263,
	"./da": 264,
	"./da.js": 264,
	"./de": 265,
	"./de-at": 266,
	"./de-at.js": 266,
	"./de-ch": 267,
	"./de-ch.js": 267,
	"./de.js": 265,
	"./dv": 268,
	"./dv.js": 268,
	"./el": 269,
	"./el.js": 269,
	"./en-au": 270,
	"./en-au.js": 270,
	"./en-ca": 271,
	"./en-ca.js": 271,
	"./en-gb": 272,
	"./en-gb.js": 272,
	"./en-ie": 273,
	"./en-ie.js": 273,
	"./en-il": 274,
	"./en-il.js": 274,
	"./en-nz": 275,
	"./en-nz.js": 275,
	"./eo": 276,
	"./eo.js": 276,
	"./es": 277,
	"./es-do": 278,
	"./es-do.js": 278,
	"./es-us": 279,
	"./es-us.js": 279,
	"./es.js": 277,
	"./et": 280,
	"./et.js": 280,
	"./eu": 281,
	"./eu.js": 281,
	"./fa": 282,
	"./fa.js": 282,
	"./fi": 283,
	"./fi.js": 283,
	"./fo": 284,
	"./fo.js": 284,
	"./fr": 285,
	"./fr-ca": 286,
	"./fr-ca.js": 286,
	"./fr-ch": 287,
	"./fr-ch.js": 287,
	"./fr.js": 285,
	"./fy": 288,
	"./fy.js": 288,
	"./gd": 289,
	"./gd.js": 289,
	"./gl": 290,
	"./gl.js": 290,
	"./gom-latn": 291,
	"./gom-latn.js": 291,
	"./gu": 292,
	"./gu.js": 292,
	"./he": 293,
	"./he.js": 293,
	"./hi": 294,
	"./hi.js": 294,
	"./hr": 295,
	"./hr.js": 295,
	"./hu": 296,
	"./hu.js": 296,
	"./hy-am": 297,
	"./hy-am.js": 297,
	"./id": 298,
	"./id.js": 298,
	"./is": 299,
	"./is.js": 299,
	"./it": 300,
	"./it.js": 300,
	"./ja": 301,
	"./ja.js": 301,
	"./jv": 302,
	"./jv.js": 302,
	"./ka": 303,
	"./ka.js": 303,
	"./kk": 304,
	"./kk.js": 304,
	"./km": 305,
	"./km.js": 305,
	"./kn": 306,
	"./kn.js": 306,
	"./ko": 307,
	"./ko.js": 307,
	"./ky": 308,
	"./ky.js": 308,
	"./lb": 309,
	"./lb.js": 309,
	"./lo": 310,
	"./lo.js": 310,
	"./lt": 311,
	"./lt.js": 311,
	"./lv": 312,
	"./lv.js": 312,
	"./me": 313,
	"./me.js": 313,
	"./mi": 314,
	"./mi.js": 314,
	"./mk": 315,
	"./mk.js": 315,
	"./ml": 316,
	"./ml.js": 316,
	"./mr": 317,
	"./mr.js": 317,
	"./ms": 318,
	"./ms-my": 319,
	"./ms-my.js": 319,
	"./ms.js": 318,
	"./mt": 320,
	"./mt.js": 320,
	"./my": 321,
	"./my.js": 321,
	"./nb": 322,
	"./nb.js": 322,
	"./ne": 323,
	"./ne.js": 323,
	"./nl": 324,
	"./nl-be": 325,
	"./nl-be.js": 325,
	"./nl.js": 324,
	"./nn": 326,
	"./nn.js": 326,
	"./pa-in": 327,
	"./pa-in.js": 327,
	"./pl": 328,
	"./pl.js": 328,
	"./pt": 329,
	"./pt-br": 330,
	"./pt-br.js": 330,
	"./pt.js": 329,
	"./ro": 331,
	"./ro.js": 331,
	"./ru": 332,
	"./ru.js": 332,
	"./sd": 333,
	"./sd.js": 333,
	"./se": 334,
	"./se.js": 334,
	"./si": 335,
	"./si.js": 335,
	"./sk": 336,
	"./sk.js": 336,
	"./sl": 337,
	"./sl.js": 337,
	"./sq": 338,
	"./sq.js": 338,
	"./sr": 339,
	"./sr-cyrl": 340,
	"./sr-cyrl.js": 340,
	"./sr.js": 339,
	"./ss": 341,
	"./ss.js": 341,
	"./sv": 342,
	"./sv.js": 342,
	"./sw": 343,
	"./sw.js": 343,
	"./ta": 344,
	"./ta.js": 344,
	"./te": 345,
	"./te.js": 345,
	"./tet": 346,
	"./tet.js": 346,
	"./tg": 347,
	"./tg.js": 347,
	"./th": 348,
	"./th.js": 348,
	"./tl-ph": 349,
	"./tl-ph.js": 349,
	"./tlh": 350,
	"./tlh.js": 350,
	"./tr": 351,
	"./tr.js": 351,
	"./tzl": 352,
	"./tzl.js": 352,
	"./tzm": 353,
	"./tzm-latn": 354,
	"./tzm-latn.js": 354,
	"./tzm.js": 353,
	"./ug-cn": 355,
	"./ug-cn.js": 355,
	"./uk": 356,
	"./uk.js": 356,
	"./ur": 357,
	"./ur.js": 357,
	"./uz": 358,
	"./uz-latn": 359,
	"./uz-latn.js": 359,
	"./uz.js": 358,
	"./vi": 360,
	"./vi.js": 360,
	"./x-pseudo": 361,
	"./x-pseudo.js": 361,
	"./yo": 362,
	"./yo.js": 362,
	"./zh-cn": 363,
	"./zh-cn.js": 363,
	"./zh-hk": 364,
	"./zh-hk.js": 364,
	"./zh-tw": 365,
	"./zh-tw.js": 365
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
webpackContext.id = 459;

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 461:
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
        console.log(input);
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                if (el.title) {
                    return el.title.toLowerCase().indexOf(input) > -1;
                }
                else {
                    return el.offer.title.toLowerCase().indexOf(input) > -1;
                }
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

},[370]);
//# sourceMappingURL=main.js.map