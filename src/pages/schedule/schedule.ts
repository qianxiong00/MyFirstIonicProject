import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScheduleDetailsPage } from '../schedule-details/schedule-details';
import { BasePage } from '../base-page';
import { Store } from '@ngrx/store'
import { ViewModel } from '../view-model';
import { Subject } from 'rxjs'

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage extends BasePage {

  constructor(
    public navCtrl: NavController,
    public store: Store<{viewModel:ViewModel}>) {
    super(store)
  }

  itemSelected(item: any) {
    this.navCtrl.push(ScheduleDetailsPage, {
      item: item
    })
  }

  ionViewWillEnter() {
    this.unload$ = new Subject<void>()
    this.store.select('viewModel')
              .takeUntil(this.unload$)
              .subscribe(v => this.viewModel = v)
  }
}
