import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleDetailsPage } from '../pages/schedule-details/schedule-details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CostPage } from '../pages/cost/cost';
import { MapPage } from '../pages/map/map';
import { MapRoutePage } from '../pages/map-route/map-route';
import { IonicStorageModule } from '@ionic/storage';
import { CurrencyPage } from '../pages/currency/currency';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { CostDetailsPage } from '../pages/cost-details/cost-details';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { CostDetailsAddPage } from '../pages/cost-details/cost-details-add';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    ScheduleDetailsPage,
    CostPage,
    MapPage,
    MapRoutePage,
    CurrencyPage,
    CostDetailsPage,
    CostDetailsAddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    IonicStorageModule.forRoot(),
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    ScheduleDetailsPage,
    CostPage,
    MapPage,
    MapRoutePage,
    CurrencyPage,
    CostDetailsPage,
    CostDetailsAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    ScreenOrientation,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
