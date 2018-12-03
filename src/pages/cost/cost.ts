import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cost',
  templateUrl: 'cost.html'
})
export class CostPage extends BasePage {

  costList: any;
  inputCost: string;

  constructor(private storage: Storage) {
    super()
    this.storage.ready().then(localforage => {
      localforage.getItem('costList', (err, value) => {
        if (!err) {
          this.costList = value
        }
      })
    })
    this.inputCost = "";
  }

  addClicked() {
    if (!!this.costList && this.costList.length > 0) {
      this.costList.push({content:this.inputCost})
    } else {
      this.costList = [];
      this.costList.push({content:this.inputCost})
    }
    this.storage.ready().then(localforage => {
      localforage.setItem('costList', this.costList);
    })
    this.inputCost = "";
  }

}
