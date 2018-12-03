import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { SchedulePage } from '../pages/schedule/schedule';
import { CostPage } from '../pages/cost/cost';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CurrencyPage } from '../pages/currency/currency';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make SchedulePage the root (or first) page
  rootPage = CostPage;//SchedulePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Schedule', component: SchedulePage },
      { title: 'Cost', component: CostPage },
      { title: 'Currency', component: CurrencyPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // navigate to the new page if it is not the current page
    this.rootPage = page.component
    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}
