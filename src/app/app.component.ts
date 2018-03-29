import { Component, ViewChild } from "@angular/core";
import { Platform, App } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { CallNumber } from "@ionic-native/call-number";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Toast } from "@ionic-native/toast";
import { Network } from "@ionic-native/network";

// import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
import { MoviesPage } from "../pages/movies/movies";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    public app: App,
    public toast: Toast,
    splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    private ga: GoogleAnalytics,
    private screenOrientation: ScreenOrientation,
    private diagnostic: Diagnostic,
    private network: Network
  ) {

    // Plugin for checking Network
    // watch network for a disconnect
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log("network was disconnected :-(");
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log("network connected!");
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === "wifi") {
          console.log("we got a wifi connection, woohoo!");
        }
      }, 3000);
    });

    // stop connect watch
    connectSubscription.unsubscribe();


    //Function for turning on GPS
    let successCallback = isAvailable => {
      console.log("Is available? " + isAvailable);
    };
    let errorCallback = e => console.error(e);

    this.diagnostic
      .isLocationAvailable()
      .then(successCallback)
      .catch(errorCallback);

      
    // code for ScreenOrientation
    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);


    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.oneSignal.startInit(
        "d840b75f-705d-4dcd-bb76-dc46fa6fc1f7",
        "269153372159"
      );
      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.InAppAlert
      );
      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

      //For google analytics
      this.ga
        .startTrackerWithId("UA-116214038-1")
        .then(() => {
          console.log("Google analytics is ready now");
          this.ga.trackView("test");
          // Tracker is ready
          // You can now track pages or set additional information such as AppVersion or UserId
        })
        .catch(e => console.log("Error starting GoogleAnalytics", e));
    });
  }
}
