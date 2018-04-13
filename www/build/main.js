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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cinemas_cinemas__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(368);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_info_movie_info__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_service_network_service__ = __webpack_require__(365);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_network_service_network_service__["a" /* NetworkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(55);
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
        console.log("Youtube video", "https://www.youtube.com/watch?v=" + link);
        this.youtube.openVideo("https://www.youtube.com/watch?v=" + link);
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
            content: "\n      <span class=\"spinner-double-dot-in\"></span>\n        "
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
            selector: "page-movie-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/'<!--\n  Generated template for the MovieInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- ---------iframe with thumbnail------------ -->\n<ion-header class="headerShadow">\n    <ion-navbar>\n        <ion-title>{{ item.title }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <!-- <ion-icon class="back" ios="ios-arrow-back" md="md-arrow-back" (click)="goBack()" large></ion-icon> -->\n    <!-- <iframe style="width: 100%;" [src]="trustedVideoUrl ? trustedVideoUrl : \'\'" frameborder="0" allowfullscreen></iframe> -->\n    <img class="play-button" src="assets/img/play.svg" alt="play" width="45px" height="40px" (click)="play(item.trailer)">\n    <img class="bannerImage" src="http://13.250.201.193:3006{{item.bannerImage}}" alt="">\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <div>\n            <img class="customImg upShadow" [src]="item.thumbnailImage" item-left>\n            <ion-card class="upShadow curve" style="padding: 0; width: 100%;margin: 0 0 8px 0;">\n                <ion-item style="padding: 2% 1% 4% 34%;">\n                    <ion-row style="justify-content: space-between;">\n                        <h2 item-left>{{ item.title }}</h2>\n                        <p style="margin:0;" item-end>{{ item.ratings }}</p>\n                    </ion-row>\n                    <p>{{ item.releaseDate.split(\'-\')[0] }}</p>\n                    <ion-row style="margin-top: 10%;">\n                        <p style="margin:0;padding: 1%;" item-left>\n                            <ion-icon style="margin-bottom: 5%;" name="calendar">&nbsp;{{ item.releaseDate }}</ion-icon><br>\n                            <span style="margin: 0 0 0 14%;">Release Date</span>\n                        </p>\n                        <p style="margin:0;padding: 1%;" item-end>\n                            <ion-icon style="margin-bottom: 5%;" name="time">&nbsp;{{ item.duration }}</ion-icon><br>\n                            <span style="margin: 0 0 0 14%;">Duration</span>\n                        </p>\n                    </ion-row>\n                </ion-item>\n            </ion-card>\n        </div>\n    </div>\n\n    <div>\n        <ion-segment [(ngModel)]="selectedSegment">\n            <ion-segment-button value="Info">Info</ion-segment-button>\n            <ion-segment-button value="Cast">Cast</ion-segment-button>\n        </ion-segment>\n    </div>\n    <div style="padding: 0 16px 16px 16px; margin-top: -3px;">\n        <div [ngSwitch]="selectedSegment">\n            <ion-list class="iconColor" *ngSwitchCase="\'Info\'">\n                <ion-card class="infoCard">\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'videocam\' item-start></ion-icon>\n                        Synopsis\n                        <p style="white-space: pre-wrap;">{{ item.synopsis }}</p>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'eye\' item-start></ion-icon>\n                        Language\n                        <ion-note item-end>{{ item.language }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'flag\' item-start></ion-icon>\n                        Genre\n                        <ion-note item-end>{{ item.genre }}</ion-note>\n                    </ion-item>\n                    <ion-item class="iconColor">\n                        <ion-icon name=\'film\' item-start></ion-icon>\n                        Director\n                        <ion-note item-end>{{ item.director }}</ion-note>\n                    </ion-item>\n                </ion-card>\n\n                <h4>Showtimes</h4>\n                <div>\n                    <ion-row>\n                        <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                            <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n                        </ion-segment>\n                    </ion-row> <br>\n                </div>\n                <div *ngIf="showsLength == 0 ">\n                    <p>No Showtimes</p>\n                </div>\n                <div *ngIf="view" class="spinner-data">\n                    <div class="dot1"></div>\n                    <div class="dot2"></div>\n                </div>\n                <div *ngIf="!view">\n                    <div class="animated slideInUp" *ngFor="let d of cinema; let i = index" (click)="toggleDetails(d,i)">\n                        <div *ngIf="d.multiplexName !== \'\'" style="background-color: transparent;">\n                            <ion-card class="cardCurve">\n                                <ion-item style="background-color: transparent">\n                                    <ion-row>\n                                        <img class="cinemaImage" [src]="d.image" alt="Cinemas Image">\n                                        <p class="CinemaFont">{{ d.multiplexName }}</p>\n                                        <ion-icon class="dropDown" color="danger" item-right [name]="d.icon"></ion-icon>\n                                    </ion-row>\n                                </ion-item>\n\n                                <div class="showtimesPadding animated fadeInUp" *ngIf="d.showDetails">\n                                    <div *ngFor="let show of d.cinemaArray">\n                                        <h3 class="multipexNames"> {{ show.cinemaName }} </h3><br>\n                                        <ion-row>\n                                            <div style="width:33.33%" *ngFor="let time of show.sessions">\n                                                <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                                            </div>\n                                        </ion-row><br>\n                                    </div>\n                                </div>\n                            </ion-card>\n                        </div>\n                    </div>\n                </div>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'Cast\'">\n                <ion-item style="background-color: transparent;">\n                    <ion-thumbnail item-start>\n                        <img [src]="item.thumbnailImage">\n                    </ion-thumbnail>\n                    <h2>Ruby</h2>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\movie-info\movie-info.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _j || Object])
    ], MovieInfoPage);
    return MovieInfoPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=movie-info.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
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
            message: 'Failed to connect to Forehotels, check your internet connection',
            duration: 15000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Got it!',
        });
        toast.present();
    };
    NetworkServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], NetworkServiceProvider);
    return NetworkServiceProvider;
}());

//# sourceMappingURL=network-service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cinema_info_cinema_info__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
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
        //  this.rootNavCtrl.push(CinemaInfoPage, {
        //           cinemaId: id,
        //           cinemaName: cinemaName
        //         });
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
            content: "\n      <span class=\"spinner-double-dot-in\"></span>\n      "
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
            selector: "page-musics",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/'<!--\n  Generated template for the MusicsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow">\n\n    <ion-navbar>\n        <ion-title style="color:azure">Cinemas</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <div class="animated fadeInUp" *ngFor="let d of data; let i = index" (click)="toggleDetails(d,i)">\n            <ion-card class="cardCurve">\n                <ion-row>\n                    <img class="cinemaImage" [src]="d.image" alt="Cinemas Image" nopadding>\n                    <h4 class="cinemaName">{{ d.multiplex }}</h4>\n                    <ion-icon class="dropDown" color="danger" item-right [name]="d.icon"></ion-icon>\n                </ion-row>\n                <div class="animated fadeInUp" *ngIf="d.showDetails">\n                    <a class="coralColor" *ngFor="let col of d.cinema;" (click)=\'cinemaPage(col._id, d.multiplex)\'>\n                        <ul>\n                            <li>\n                                <ion-row>\n                                    <ion-item class="item-color">\n                                        {{col.cinemaName}}\n                                        <ion-icon class="dropRight" item-right name="ios-arrow-forward-outline"></ion-icon>\n                                    </ion-item>\n                                </ion-row>\n                            </li>\n                        </ul>\n                    </a>\n                </div>\n            </ion-card>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinemas\cinemas.html"*/
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

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(55);
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
            subject: "Testing",
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
            console.log("!!!!!!!!!!!!!!!!!!", todaysData);
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
            console.log(url);
            this.http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (results) {
                loading.dismiss();
                _this.selectedDay = results.finalMovies;
                _this.view = false;
            });
        }
    };
    CinemaInfoPage.prototype.postItems = function (results) {
        var _this = this;
        loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "\n      <span class=\"spinner-double-dot-in\"></span>\n      "
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
            selector: "page-cinema-info",template:/*ion-inline-start:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/'<!--\n  Generated template for the CinemaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="headerShadow">\n\n    <!-- <ion-navbar>\n        <ion-title>{{ cinemaInfo.multiplexName }}</ion-title>\n    </ion-navbar> -->\n    <ion-navbar>\n        <ion-title>{{ cinemaName }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div id="map_canvas"></div>\n    <ion-card class="cardCurve">\n        <div *ngFor="let d of cinemaInfo">\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-navigate" md="md-navigate"></ion-icon>\n                <ion-col>\n                    <h2>{{d.cinemaName}}</h2>\n                    <p class="customFont wordBreak">{{ d.cityName }}, {{ d.stateName }}, {{ d.countryName}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-call" md="md-call"></ion-icon>\n                <p class="text" (click)="launchDialer(d.phoneNumber)">{{ d.phoneNumber }}</p>\n            </ion-row>\n            <ion-row class="rowMargin">\n                <ion-icon ios="ios-mail" md="md-mail" nopadding></ion-icon>\n                <p class="text wordBreak" (click)="launchMail(d.emailId)">{{ d.emailId }} </p>\n            </ion-row>\n        </div>\n    </ion-card>\n    <!-- -------------------ShowTime------------------------------------------ -->\n    <h3 style="color:#36454F">Showtimes</h3>\n    <div>\n        <ion-row>\n            <ion-segment *ngFor="let day of days" [(ngModel)]="daySegment">\n                <ion-segment-button (click)="dayValue(day.value,null)" [value]="day.value">{{ day.day }}</ion-segment-button>\n            </ion-segment>\n        </ion-row> <br>\n        <div *ngIf="view" class="spinner-data">\n            <div class="dot1"></div>\n            <div class="dot2"></div>\n        </div>\n        <div *ngIf="!view">\n            <div class="animated slideInUp" *ngFor="let session of selectedDay">\n                <ion-card class="cardCurve">\n                    <h4 class="showTimeHeader">{{ session.movieTitle }}</h4>\n                    <ion-row>\n                        <div class="animated fadeInUp" style="width:33.33%" *ngFor="let time of session.sessions">\n                            <button [disabled]="currentTime > time.showTime * 1000" class="costumButton" (click)="openBookingUrl(time.bookingUrl)">{{ time.showTime * 1000 - 5400000 | date:\'h:mm a\'}}</button>\n                        </div>\n                    </ion-row>\n                </ion-card>\n            </div>\n        </div>\n    </div>'/*ion-inline-end:"D:\sybms\StrongDC++\downloads\Raw Codes\binary numbers\ionic\uaeshowtimesapp\src\pages\cinema-info\cinema-info.html"*/
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(55);
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
            content: "\n      <span class=\"spinner-double-dot-in\"></span>\n      "
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_call_number__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_movies_movies__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cinemas_cinemas__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_movie_info_movie_info__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cinema_info_cinema_info__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_offers_offers__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_network_service_network_service__ = __webpack_require__(365);
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
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_28__pipes__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDX8lQmy_wPtfYbP4M6KB52dIZGT5mNcY8'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cinemas_cinemas__["a" /* CinemasPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_movie_info_movie_info__["a" /* MovieInfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cinema_info_cinema_info__["a" /* CinemaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_offers_offers__["a" /* OffersPage */],
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
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_11_ionic2_super_tabs__["b" /* SuperTabsController */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_network_service_network_service__["a" /* NetworkServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(240);
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

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 243,
	"./af.js": 243,
	"./ar": 244,
	"./ar-dz": 245,
	"./ar-dz.js": 245,
	"./ar-kw": 246,
	"./ar-kw.js": 246,
	"./ar-ly": 247,
	"./ar-ly.js": 247,
	"./ar-ma": 248,
	"./ar-ma.js": 248,
	"./ar-sa": 249,
	"./ar-sa.js": 249,
	"./ar-tn": 250,
	"./ar-tn.js": 250,
	"./ar.js": 244,
	"./az": 251,
	"./az.js": 251,
	"./be": 252,
	"./be.js": 252,
	"./bg": 253,
	"./bg.js": 253,
	"./bm": 254,
	"./bm.js": 254,
	"./bn": 255,
	"./bn.js": 255,
	"./bo": 256,
	"./bo.js": 256,
	"./br": 257,
	"./br.js": 257,
	"./bs": 258,
	"./bs.js": 258,
	"./ca": 259,
	"./ca.js": 259,
	"./cs": 260,
	"./cs.js": 260,
	"./cv": 261,
	"./cv.js": 261,
	"./cy": 262,
	"./cy.js": 262,
	"./da": 263,
	"./da.js": 263,
	"./de": 264,
	"./de-at": 265,
	"./de-at.js": 265,
	"./de-ch": 266,
	"./de-ch.js": 266,
	"./de.js": 264,
	"./dv": 267,
	"./dv.js": 267,
	"./el": 268,
	"./el.js": 268,
	"./en-au": 269,
	"./en-au.js": 269,
	"./en-ca": 270,
	"./en-ca.js": 270,
	"./en-gb": 271,
	"./en-gb.js": 271,
	"./en-ie": 272,
	"./en-ie.js": 272,
	"./en-il": 273,
	"./en-il.js": 273,
	"./en-nz": 274,
	"./en-nz.js": 274,
	"./eo": 275,
	"./eo.js": 275,
	"./es": 276,
	"./es-do": 277,
	"./es-do.js": 277,
	"./es-us": 278,
	"./es-us.js": 278,
	"./es.js": 276,
	"./et": 279,
	"./et.js": 279,
	"./eu": 280,
	"./eu.js": 280,
	"./fa": 281,
	"./fa.js": 281,
	"./fi": 282,
	"./fi.js": 282,
	"./fo": 283,
	"./fo.js": 283,
	"./fr": 284,
	"./fr-ca": 285,
	"./fr-ca.js": 285,
	"./fr-ch": 286,
	"./fr-ch.js": 286,
	"./fr.js": 284,
	"./fy": 287,
	"./fy.js": 287,
	"./gd": 288,
	"./gd.js": 288,
	"./gl": 289,
	"./gl.js": 289,
	"./gom-latn": 290,
	"./gom-latn.js": 290,
	"./gu": 291,
	"./gu.js": 291,
	"./he": 292,
	"./he.js": 292,
	"./hi": 293,
	"./hi.js": 293,
	"./hr": 294,
	"./hr.js": 294,
	"./hu": 295,
	"./hu.js": 295,
	"./hy-am": 296,
	"./hy-am.js": 296,
	"./id": 297,
	"./id.js": 297,
	"./is": 298,
	"./is.js": 298,
	"./it": 299,
	"./it.js": 299,
	"./ja": 300,
	"./ja.js": 300,
	"./jv": 301,
	"./jv.js": 301,
	"./ka": 302,
	"./ka.js": 302,
	"./kk": 303,
	"./kk.js": 303,
	"./km": 304,
	"./km.js": 304,
	"./kn": 305,
	"./kn.js": 305,
	"./ko": 306,
	"./ko.js": 306,
	"./ky": 307,
	"./ky.js": 307,
	"./lb": 308,
	"./lb.js": 308,
	"./lo": 309,
	"./lo.js": 309,
	"./lt": 310,
	"./lt.js": 310,
	"./lv": 311,
	"./lv.js": 311,
	"./me": 312,
	"./me.js": 312,
	"./mi": 313,
	"./mi.js": 313,
	"./mk": 314,
	"./mk.js": 314,
	"./ml": 315,
	"./ml.js": 315,
	"./mr": 316,
	"./mr.js": 316,
	"./ms": 317,
	"./ms-my": 318,
	"./ms-my.js": 318,
	"./ms.js": 317,
	"./mt": 319,
	"./mt.js": 319,
	"./my": 320,
	"./my.js": 320,
	"./nb": 321,
	"./nb.js": 321,
	"./ne": 322,
	"./ne.js": 322,
	"./nl": 323,
	"./nl-be": 324,
	"./nl-be.js": 324,
	"./nl.js": 323,
	"./nn": 325,
	"./nn.js": 325,
	"./pa-in": 326,
	"./pa-in.js": 326,
	"./pl": 327,
	"./pl.js": 327,
	"./pt": 328,
	"./pt-br": 329,
	"./pt-br.js": 329,
	"./pt.js": 328,
	"./ro": 330,
	"./ro.js": 330,
	"./ru": 331,
	"./ru.js": 331,
	"./sd": 332,
	"./sd.js": 332,
	"./se": 333,
	"./se.js": 333,
	"./si": 334,
	"./si.js": 334,
	"./sk": 335,
	"./sk.js": 335,
	"./sl": 336,
	"./sl.js": 336,
	"./sq": 337,
	"./sq.js": 337,
	"./sr": 338,
	"./sr-cyrl": 339,
	"./sr-cyrl.js": 339,
	"./sr.js": 338,
	"./ss": 340,
	"./ss.js": 340,
	"./sv": 341,
	"./sv.js": 341,
	"./sw": 342,
	"./sw.js": 342,
	"./ta": 343,
	"./ta.js": 343,
	"./te": 344,
	"./te.js": 344,
	"./tet": 345,
	"./tet.js": 345,
	"./tg": 346,
	"./tg.js": 346,
	"./th": 347,
	"./th.js": 347,
	"./tl-ph": 348,
	"./tl-ph.js": 348,
	"./tlh": 349,
	"./tlh.js": 349,
	"./tr": 350,
	"./tr.js": 350,
	"./tzl": 351,
	"./tzl.js": 351,
	"./tzm": 352,
	"./tzm-latn": 353,
	"./tzm-latn.js": 353,
	"./tzm.js": 352,
	"./ug-cn": 354,
	"./ug-cn.js": 354,
	"./uk": 355,
	"./uk.js": 355,
	"./ur": 356,
	"./ur.js": 356,
	"./uz": 357,
	"./uz-latn": 358,
	"./uz-latn.js": 358,
	"./uz.js": 357,
	"./vi": 359,
	"./vi.js": 359,
	"./x-pseudo": 360,
	"./x-pseudo.js": 360,
	"./yo": 361,
	"./yo.js": 361,
	"./zh-cn": 362,
	"./zh-cn.js": 362,
	"./zh-hk": 363,
	"./zh-hk.js": 363,
	"./zh-tw": 364,
	"./zh-tw.js": 364
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
webpackContext.id = 458;

/***/ }),

/***/ 459:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 460:
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

},[369]);
//# sourceMappingURL=main.js.map