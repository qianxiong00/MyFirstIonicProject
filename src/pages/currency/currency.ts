import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html'
})
export class CurrencyPage extends BasePage {

    rate: number;

    constructor(private http: HTTP) {
        super()
    }

   /* ionViewDidLoad() {
        this.http.get('http://apilayer.net/api/live?access_key=474f4d10973920709171820714ce1bd4&currencies=JPY&source=USD&format=1', {}, {})
            .then(data => {
                this.rate = data.data.quotes["USDJPY"];
        }).catch(error => {

        });
    }*/
}