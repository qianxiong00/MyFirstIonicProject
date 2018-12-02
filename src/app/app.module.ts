import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StoreModule } from '@ngrx/store'
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleDetailsPage } from '../pages/schedule-details/schedule-details';
import { ScheduleInitialState } from '../pages/schedule/schedule-view-model';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { myFunc } from '../pages/view-model';
import { CostPage } from '../pages/cost/cost';
import { CostInitialState } from '../pages/cost/cost-view-model';
import { ScheduleDetailsInitialState } from '../pages/schedule-details/schedule-details-view-model';
import { MapPage } from '../pages/map/map';
import { MapRoutePage } from '../pages/map-route/map-route';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    ScheduleDetailsPage,
    CostPage,
    MapPage,
    MapRoutePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {preloadModules: true}),
    StoreModule.forRoot(
      { viewModel: myFunc},
      { initialState: {
          viewModel: {
            schedule: ScheduleInitialState(),
            scheduleDetails: ScheduleDetailsInitialState(),
            cost: CostInitialState()
          }
        }
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    ScheduleDetailsPage,
    CostPage,
    MapPage,
    MapRoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
