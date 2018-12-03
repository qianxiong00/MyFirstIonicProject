import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScheduleDetailsPage } from '../schedule-details/schedule-details';
import { BasePage } from '../base-page';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage extends BasePage {

  constructor(
    public navCtrl: NavController) {
    super()
  }

  itemSelected(item: {id:string, title:string, subTitle:string, img:string, color:string}) {

    this.navCtrl.push(ScheduleDetailsPage, {
      item: item,
      tabList: this.viewModel.scheduleDetails.tab_list.filter(tab => tab.city_code === item.id)
    })
  }
}
