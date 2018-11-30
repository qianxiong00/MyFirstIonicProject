import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store'
import { ViewModel } from '../view-model';

@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html'
})
export class ScheduleDetailsPage extends BasePage {
  selectedItem: any;

  constructor(
    public navParams: NavParams,
    public store: Store<{viewModel:ViewModel}>
  ) {
    super(store)
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  tabClick(tabNum: number) {

  }
  
}
