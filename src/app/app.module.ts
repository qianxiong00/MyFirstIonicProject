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
import { ViewModel, myFunc } from '../pages/view-model';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    ScheduleDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {preloadModules: true}),
    StoreModule.forRoot(
      { viewModel: myFunc},
      { initialState: {
          viewModel: {
            schedule: ScheduleInitialState()
          }
        }
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    ScheduleDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
