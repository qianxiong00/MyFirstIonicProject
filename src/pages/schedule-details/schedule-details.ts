import { Component, ViewChild } from '@angular/core';
import { BasePage } from '../base-page';
import { NavParams, NavController, Content, Slides } from 'ionic-angular';
import { MapPage } from '../map/map';
import { MapRoutePage } from '../map-route/map-route';
import * as moment from 'moment';

@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html'
})
export class ScheduleDetailsPage extends BasePage {
  @ViewChild(Content) content:Content;
  @ViewChild(Slides) slides:Slides;
  @ViewChild("img") img:any;

  selectedItem: any;
  selectedTabId: string;
  tabList: any[];
  dateTime: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    super()
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTabId = '01';
    this.selectedItem = navParams.get('item');
    this.tabList = navParams.get('tabList');
    let zoneOffset = moment().utcOffset();
    this.dateTime = moment().add(this.selectedItem.zoneOffset*60-zoneOffset, "minute")
                            .format('YYYY/MM/DD HH:mm').toString();
  }

  updateDateTime() {
    let zoneOffset = moment().utcOffset();
    this.dateTime = moment().add(this.selectedItem.zoneOffset*60-zoneOffset, "minute")
                            .format('YYYY/MM/DD HH:mm').toString();
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

  slideChanged() {
    let index = this.slides.getActiveIndex();
    this.selectedTabId = this.tabList[index].id;
  }

  clickTab(i: number) {
    this.selectedTabId = this.tabList[i].id;
    this.slides.slideTo(i, 500);
  }
  
}
