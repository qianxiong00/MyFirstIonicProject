import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Storage } from '@ionic/storage';
import { WheelSelector } from '@ionic-native/wheel-selector';

@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html'
})
export class CurrencyPage extends BasePage {

    listUrl: string = 'http://apilayer.net/api/list?access_key=474f4d10973920709171820714ce1bd4';
    rateUrl: string = 'http://apilayer.net/api/live?access_key=474f4d10973920709171820714ce1bd4&format=1'
    currencies: Array<{cd:string, name:string}>;
    baseCurrency: any;
    selectedCurrencies: any;
    editCurrency: any;
    addCurrencies: any;
    countryFlags: any = {
        "JPY": "JP",
        "SEK": "SE",
        "EUR": "EU",
        "NOK": "NO",
        "DKK": "DK"
    };

    constructor(private storage: Storage, private selector: WheelSelector) {
        super()
        this.initDisplayData();
        this.getCurrencies();
    }

    initDisplayData() {
        this.storage.ready().then(localforage => {
            localforage.getItem('selectedCurrencies', (err, value) => {
                if (!err && value !== null) {
                    this.selectedCurrencies = Object.keys(value).map(i => {return {cd:value[i].cd,name:value[i].name};});
                } else {
                    this.selectedCurrencies = [
                        {cd:"JPY",name:"Japanese Yen"},
                        {cd:"SEK",name:"Swedish Krona"},
                        {cd:"EUR",name:"Euro"},
                        {cd:"NOK",name:"Norwegian Krone"},
                        {cd:"DKK",name:"Norwegian Krone"}
                    ];
                    localforage.setItem('selectedCurrencies', this.selectedCurrencies);
                }
                localforage.getItem('baseCurrency', (err, value) => {
                    if (!err && value !== null) {
                        this.baseCurrency = value;
                        this.editCurrency = value;
                    } else {
                        this.baseCurrency = "JPY";
                        this.editCurrency = "JPY";
                        localforage.setItem('baseCurrency', this.baseCurrency);
                    }
                    const currencyCdList = this.selectedCurrencies.map(c => c.cd);
                    this.getRates(currencyCdList);
                });
            });
        });
    }

    getCurrencies() {
        this.currencies = [];
        fetch(this.listUrl, {}).then(response => {
            response.json().then(json => {
                if (!!json.currencies && typeof json.currencies === 'object') {
                    Object.keys(json.currencies).forEach(c => {
                        this.currencies.push({cd:c, name:json.currencies[c]});
                    })
                }
            })
        })
    }

    getRates(currencies: string[]) {
        if (!Array.isArray(currencies) || currencies.length === 0) return;
        const url = this.rateUrl + '&currencies='+ currencies.join(',') +'&source=USD'
        fetch(url, {}).then(response => {
            response.json().then(json => {
                if (!!json.quotes && typeof json.quotes === 'object') {
                    const baseRate = Number(json.quotes['USD' + this.baseCurrency]);
                    this.selectedCurrencies.forEach(c => {
                        const rate = Number(json.quotes['USD' + c.cd]);
                        c.rate = rate;
                        c.amount = (100*(rate/baseRate)).toFixed(2);
                    })
                }
            })
        })
    }

    changeAmount(baseCurrency: any) {
        const baseRate = Number(baseCurrency.rate);
        const baseAmount = Number(baseCurrency.amount);
        this.selectedCurrencies.forEach(c => {
            const rate = Number(c.rate);
            c.amount = (baseAmount*(rate/baseRate)).toFixed(2);
        });
    }

    setToBase(currency: any) {
        this.baseCurrency = currency.cd;
        this.editCurrency = currency.cd;
        this.storage.ready().then(localforage => {
            localforage.setItem('baseCurrency', this.baseCurrency);
        });
        
        currency.amount = 100;
        this.changeAmount(currency);
    }

    selectANumber() {
        const jsonData = {
            numbers: [
             { description: "1" },
              { description: "2" },
              { description: "3" }
            ]};

        this.selector.show({
          title: "How Many?",
          items: [jsonData.numbers],
        }).then(
          result => {
            console.log(result[0].description + ' at index: ' + result[0].index);
          },
          err => console.log('Error: ', err)
          );
      }

    focusAmount(cd: any) {
        this.editCurrency = cd;
    }

    flagImgSrc(cd: any): string {
        return 'https://countryflags.io/' + this.countryFlags[cd] + '/flat/48.png';
    }

}