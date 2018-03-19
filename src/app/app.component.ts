import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";

// import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = TabsPage;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private oneSignal: OneSignal
  ) {
    platform.ready().then(() => {
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
    });
  }
}
