import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { NavParams, NavController } from 'ionic-angular';
import { Store } from '@ngrx/store'
import { ViewModel } from '../view-model';
import { MapPage } from '../map/map';
import { MapRoutePage } from '../map-route/map-route';

@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html'
})
export class ScheduleDetailsPage extends BasePage {
  selectedItem: {id:string, title:string, subTitle:string, img:string, color:string};
  selectedTabId: string;
  tabList: Array<{city_code:string, id:string, title:string, detail_list:{content:string, date_time:string}[]}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: Store<{viewModel:ViewModel}>
  ) {
    super(store)
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTabId = '01';
    this.selectedItem = navParams.get('item');
    this.tabList = navParams.get('tabList');
  }

  clickMapIcon(detail: any) {
    this.navCtrl.push(MapPage, {
      'detail': detail
    });
  }

  clickRouteIcon(from: any, to:any) {
    this.navCtrl.push(MapRoutePage, {
      'from': from,
      'to': to
    });
  }
  
}
