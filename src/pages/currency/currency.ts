import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Storage } from '@ionic/storage';

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

    constructor(private storage: Storage) {
        super()
        this.initDisplayData();
    }

    initDisplayData() {
        this.storage.ready().then(localforage => {
            localforage.getItem('selectedCurrencies', (err, value) => {
                if (!err && value !== null) {
                    this.selectedCurrencies = Object.keys(value).map(i => {return {cd:value[i]};});
                } else {
                    this.selectedCurrencies = [
                        {cd:"JPY"},
                        {cd:"SEK"},
                        {cd:"EUR"},
                        {cd:"NOK"},
                        {cd:"DKK"}
                    ];
                    localforage.setItem('selectedCurrencies', ["JPY","SEK","EUR","NOK","DKK"]);
                }
                localforage.getItem('baseCurrency', (err, value) => {
                    if (!err && value !== null) {
                        this.baseCurrency = value;
                    } else {
                        this.baseCurrency = "JPY";
                        localforage.setItem('baseCurrency', this.baseCurrency);
                    }
                    const currencyCdList = this.selectedCurrencies.map(c => c.cd);
                    this.getRates(currencyCdList);
                });
            });
        });
    }

    getCurrencies() {
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
        this.storage.ready().then(localforage => {
            localforage.setItem('baseCurrency', this.baseCurrency);
        });
        
        currency.amount = 100;
        this.changeAmount(currency);
    }

}