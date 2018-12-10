import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-cost',
  templateUrl: 'cost.html'
})
export class CostPage extends BasePage {

  costList: any[];
  categories: {[key:string]:any};
  iconList: string[] = [
    "add","add-circle","alarm","albums","alert","american-football","analytics","logo-android","logo-angular","aperture",
    "logo-apple","apps","appstore","archive","arrow-back","arrow-down","arrow-dropdown","arrow-dropdown-circle","arrow-dropleft",
    "arrow-dropleft-circle","arrow-dropright","arrow-dropright-circle","arrow-dropup","arrow-dropup-circle","arrow-forward",
    "arrow-round-back","arrow-round-down","arrow-round-forward","arrow-round-up","arrow-up","at","attach","backspace",
    "barcode","baseball","basket","basketball","battery-charging","battery-dead","battery-full","beaker","beer","bicycle",
    "logo-bitcoin","bluetooth","boat","body","bonfire","book","bookmark","bookmarks","bowtie","briefcase","browsers","brush",
    "logo-buffer","bug","build","bulb","bus","cafe","calculator","calendar","call","camera","car","card","cart","cash",
    "chatboxes","chatbubbles","checkbox","checkbox-outline","checkmark","checkmark-circle","checkmark-circle-outline",
    "logo-chrome","clipboard","clock","close","close-circle","closed-captioning","cloud","cloud-circle","cloud-done",
    "cloud-download","cloud-outline","cloud-upload","cloudy","cloudy-night","code","code-download","code-working",
    "logo-codepen","cog","color-fill","color-filter","color-palette","color-wand","compass","construct","contact","contacts",
    "contract","contrast","copy","create","crop","logo-css3","cube","cut","logo-designernews","desktop","disc","document",
    "done-all","download","logo-dribbble","logo-dropbox","easel","egg","logo-euro","exit","expand","eye","eye-off",
    "logo-facebook","fastforward","female","filing","film","finger-print","flag","flame","flash","flask","flower","folder",
    "folder-open","football","logo-foursquare","logo-freebsd-devil","funnel","game-controller-a","game-controller-b",
    "git-branch","git-commit","git-compare","git-merge","git-network","git-pull-request","logo-github","glasses","globe",
    "logo-google","logo-googleplus","grid","logo-hackernews","hammer","hand","happy","headset","heart","heart-outline",
    "help","help-buoy","help-circle","home","logo-html5","ice-cream","image","images","infinite","information",
    "information-circle","logo-instagram","ionic","ionitron","logo-javascript","jet","key","keypad","laptop","leaf",
    "link","logo-linkedin","list","list-box","locate","lock","log-in","log-out","magnet","mail","mail-open","male",
    "man","map","logo-markdown","medal","medical","medkit","megaphone","menu","mic","mic-off","microphone","moon",
    "more","move","musical-note","musical-notes","navigate","no-smoking","logo-nodejs","notifications","notifications-off",
    "notifications-outline","nuclear","nutrition","logo-octocat","open","options","outlet","paper","paper-plane",
    "partly-sunny","pause","paw","people","person","person-add","phone-landscape","phone-portrait","photos","pie","pin",
    "pint","logo-pinterest","pizza","plane","planet","play","logo-playstation","podium","power","pricetag","pricetags",
    "print","pulse","logo-python","qr-scanner","quote","radio","radio-button-off","radio-button-on","rainy","recording",
    "logo-reddit","redo","refresh","refresh-circle","remove","remove-circle","reorder","repeat","resize","restaurant",
    "return-left","return-right","reverse-camera","rewind","ribbon","rose","logo-rss","sad","logo-sass","school","search",
    "send","settings","share","share-alt","shirt","shuffle","skip-backward","skip-forward","logo-skype","logo-snapchat",
    "snow","speedometer","square","square-outline","star","star-half","star-outline","stats","logo-steam","stopwatch",
    "subway","sunny","swap","switch","sync","tablet-landscape","tablet-portrait","tennisball","text","thermometer",
    "thumbs-down","thumbs-up","thunderstorm","time","timer","train","transgender","trash","trending-down","trending-up",
    "trophy","logo-tumblr","tux","logo-twitch","logo-twitter","umbrella","undo","unlock","logo-usd","videocam","logo-vimeo",
    "volume-down","volume-mute","volume-off","volume-up","walk","warning","watch","water","logo-whatsapp","wifi",
    "logo-windows","wine","woman","logo-wordpress","logo-xbox","logo-yahoo","logo-yen","logo-youtube"
  ]

  constructor(private storage: Storage) {
    super()
    this.storage.ready().then(localforage => {
      localforage.getItem('costList', (err, value) => {
        if (!err && value !== null) {
          this.costList = Array.of(value)
        } else {
          this.costList = [{
            category: "hotel",
            total: 10000,
            items:[{
              name:"hotel 1",
              cost: 10000
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
            "hotel": {icon:""},
            "trafic": {icon:""}
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

}
