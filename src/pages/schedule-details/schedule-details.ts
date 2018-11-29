import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store'
import { ViewModel } from '../view-model';
import { Subject } from 'rxjs'

@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html'
})
export class ScheduleDetailsPage extends BasePage {
  selectedItem: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: Store<{viewModel:ViewModel}>
  ) {
    super(store)
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ionViewWillEnter() {
    this.unload$ = new Subject<void>()
    this.store.select('viewModel')
              .takeUntil(this.unload$)
              .subscribe(v => this.viewModel = v)
  }
}
