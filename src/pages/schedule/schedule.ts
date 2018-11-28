import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScheduleDetailsPage } from '../schedule-details/schedule-details';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  items: Array<{title:string, subTitle:string, img:string}> = [
    {
      title: "Stockholm",
      subTitle: "12/22 ~ 12/24",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Turku",
      subTitle: "12/25",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Helsinki",
      subTitle: "12/26",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Tromso",
      subTitle: "12/27 ~ 12/30",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Bergen",
      subTitle: "12/31",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Flam",
      subTitle: "01/01",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Oslo",
      subTitle: "01/02",
      img: "assets/imgs/schedule-stockholm.jpg"
    },
    {
      title: "Copenhagen",
      subTitle: "01/02 ~ 01/06",
      img: "assets/imgs/schedule-stockholm.jpg"
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  itemSelected(item: any) {
    this.navCtrl.push(ScheduleDetailsPage, {
      item: item
    })
  }
}
