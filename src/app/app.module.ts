import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMaps,GoogleMap } from '@ionic-native/google-maps';
import { LoadingController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MoviesPage } from '../pages/movies/movies';
import { CinemasPage } from '../pages/cinemas/cinemas';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { CinemaInfoPage } from '../pages/cinema-info/cinema-info';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    CinemasPage,
    MovieInfoPage,
    CinemaInfoPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    CinemasPage,
    MovieInfoPage,
    CinemaInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    GoogleMaps,
    LoadingController,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
