import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMaps,GoogleMap } from '@ionic-native/google-maps';
import { LoadingController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { OneSignal } from "@ionic-native/onesignal";
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SuperTabsModule, SuperTabsController } from 'ionic2-super-tabs';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Toast} from '@ionic-native/toast';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MoviesPage } from '../pages/movies/movies';
import { CinemasPage } from '../pages/cinemas/cinemas';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { CinemaInfoPage } from '../pages/cinema-info/cinema-info';
import { OffersPage } from '../pages/offers/offers';
import { FilterPipe } from './pipes'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    CinemasPage,
    MovieInfoPage,
    CinemaInfoPage,
    OffersPage,
    FilterPipe,
    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpModule,
    OrderModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDX8lQmy_wPtfYbP4M6KB52dIZGT5mNcY8'
    })
  ],
  bootstrap: [IonicApp, MyApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MoviesPage,
    CinemasPage,
    MovieInfoPage,
    CinemaInfoPage,
    OffersPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    GoogleMaps,
    LoadingController,
    OneSignal,
    CallNumber,
    Diagnostic,
    GoogleAnalytics,
    ScreenOrientation,
    EmailComposer,
    SuperTabsController,
    Toast,
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
