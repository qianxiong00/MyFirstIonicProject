import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { CostDetailsPage } from '../cost-details/cost-details';

@Component({
  selector: 'page-cost',
  templateUrl: 'cost.html'
})
export class CostPage extends BasePage {

  costList: any[];
  categories: {[key:string]:any};

  constructor(public navCtrl: NavController,
    private storage: Storage) {
    super()
    this.storage.ready().then(localforage => {
      localforage.getItem('costList', (err, value) => {
        if (!err && value !== null) {
          this.costList = Object.keys(value).map(i => value[i]);
        } else {
          this.costList = [{
            category: "hotel",
            items:[{
              name:"12/22-12/23 斯德哥尔摩（瑞典）",
              cost: 9023
            },{
              name:"12/25 赫尔辛基（芬兰）",
              cost: 5294
            },{
              name:"12/26 奥斯陆（挪威）",
              cost: 4788
            },{
              name:"12/27-12/29 特罗姆瑟（挪威）",
              cost: 20725
            },{
              name:"12/30-12/31 卑尔根（挪威）",
              cost: 7338
            },{
              name:"01/01 奥斯陆（挪威）",
              cost: 5655
            },{
              name:"01/02-01/05 哥本哈根（丹麦）",
              cost: 25293
            }]
          },{
            category: "trafic",
            items:[{
              name:"东京->斯德哥尔摩->奥斯陆->哥本哈根 哥本哈根->东京",
              cost: 91870
            },{
              name:"斯德哥尔摩->图尔库",
              cost: 18083
            },{
              name:"赫尔辛基->奥斯陆->巴尔杜夫（特罗姆瑟）",
              cost: 14997
            },{
              name:"特罗姆瑟->卑尔根",
              cost: 13096
            },{
              name:"VR Train 图尔库->赫尔辛基",
              cost: 1168
            },{
              name:"NSB Train Bergen->Voss",
              cost: 2982
            },{
              name:"Nettbus Voss->Gudvangen",
              cost: 2100
            },{
              name:"Fjord Cruise Gudvangen->Flam",
              cost: 6160
            },{
              name:"NSB Train Flam->Myrdal->Oslo",
              cost: 12764
            }]
          },{
            category: "ticket",
            items: []
          },{
            category: "meal",
            items: []
          },{
            category: "shopping",
            items: []
          },{
            category: "present",
            items: []
          },{
            category: "other",
            items: [{
              name: "旅行保险",
              cost: 2730
            },{
              name: "SIM卡",
              cost: 4100
            },{
              name: "签证",
              cost: 7799
            },{
              name: "国际驾照",
              cost: 2350
            },{
              name:"租车",
              cost: 5958
            }]
          }];
          localforage.setItem('costList', this.costList);
        }
      })

      localforage.getItem('categories', (err, value) => {
        if (!err && value !== null) {
          this.categories = value;
        } else {
          this.categories = {
            "hotel": {icon:"home", name:"住宿", total: 78116},
            "trafic": {icon:"plane", name: "交通", total: 163220},
            "ticket": {icon:"document", name:"门票", total:0},
            "meal": {icon:"restaurant", name:"吃饭", total: 0},
            "shopping": {icon:"cart", name:"购物", total: 0},
            "present": {icon:"bowtie", name:"礼物", total: 0},
            "other": {icon:"flower", name:"其他", total: 22937}
          };
          localforage.setItem('categories', this.categories);
        }
      });
    })
  }

  addCostItem(category: string, name: string, cost: number) {
    const c = this.costList.filter(c => c.category === category)[0];
    if (!!c) {
      c.items.push({name: name, cost: cost});
      c.total += cost;
    } else {
      c.push({
        category:category,
        total:cost,
        items:[{
          name:name,
          cost:cost
        }]
      });
    }
    this.storage.ready().then(localforage => {
      localforage.setItem('costList', this.costList);
    });
  }

  deleteCostItem(category: string, name: string) {
    const c = this.costList.filter(c => c.category === category)[0];
    const itm = c.items.filter(i => i.name === name)[0];

    c.items = c.items.filter(i => i.name !== name);
    c.total -= itm.cost;

    if (c.items.length === 0) {
      this.costList = this.costList.filter(c => c.category !== category);
    }

    this.storage.ready().then(localforage => {
      localforage.setItem('costList', this.costList);
    });
  }

  addCategory(name: string, icon: string) {
    if (!!this.categories[name]) return;
    this.categories[name] = {icon: icon};
    this.storage.ready().then(localforage => {
      localforage.setItem('categories', this.categories);
    });
  }

  deleteCategory(name: string) {
    let newCategories = {};
    Object.keys(this.categories).forEach(k => {
      if(k === name) return;
      newCategories[k] = this.categories[k];
    });
    this.categories = newCategories;
    this.storage.ready().then(localforage => {
      localforage.setItem('categories', this.categories);
    });
  }

  get categoryList():any[] {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0
    })

    if (!this.categories) return [];
    return Object.keys(this.categories).map(key => {return {...this.categories[key], id:key, totalString: formatter.format(this.categories[key].total)};});
  }

  get totalCost():string {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0
    });
    
    let total: number = 0;
    if (!this.categories) return formatter.format(total);

    this.categoryList.forEach(ctgry => {
      total += ctgry.total;
    });

    return formatter.format(total);
  }

  itemSelected(category: any) {
    let item = this.costList.filter(cost => cost.category === category.id)[0];
    if (!item) return;

    this.navCtrl.push(CostDetailsPage, {
      categoryId: category.id,
      item: item,
      costList: this.costList,
      categories: this.categories
    })
  }

}
