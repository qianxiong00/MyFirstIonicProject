import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { SchedulePage } from '../pages/schedule/schedule';
import { CostPage } from '../pages/cost/cost';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CurrencyPage } from '../pages/currency/currency';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make SchedulePage the root (or first) page
  rootPage = SchedulePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public document: DocumentViewer,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Schedule', component: SchedulePage },
      { title: 'Cost', component: CostPage },
      { title: 'Currency', component: CurrencyPage},
      { title: 'Northern Europe(PDF)', component: null}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock('portrait-primary');
    });
  }

  openPage(page) {
    if (page.title === 'Northern Europe(PDF)') {
      const options: DocumentViewerOptions = {
        title: 'Northern Europe(PDF)',
        documentView: {
            closeLabel: "Close"
        }
      }
      this.document.viewDocument('assets/content.pdf', 'application/pdf', options);
    }
    else {
      // navigate to the new page if it is not the current page
      this.rootPage = page.component
    }
    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}
