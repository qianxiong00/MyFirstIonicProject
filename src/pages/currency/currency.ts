import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';

@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html'
})
export class CurrencyPage extends BasePage {

    listUrl: string = 'http://apilayer.net/api/list?access_key=474f4d10973920709171820714ce1bd4';
    rateUrl: string = 'http://apilayer.net/api/live?access_key=474f4d10973920709171820714ce1bd4&format=1'
    currencies: {cd:string, name:string}[];
    baseCurrency: any;
    selectedCurrencies: any[];
    editCurrency: any;
    addCurrencies: any[];
    countryFlags: any = {
        "JPY": "JP",
        "SEK": "SE",
        "EUR": "EU",
        "NOK": "NO",
        "DKK": "DK"
    };

    constructor(
        private storage: Storage) {
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

        let slctCrrcies = [];
        currency.amount = 100;
        slctCrrcies.push(currency);
        this.selectedCurrencies.forEach(c => {
            if (c.cd === currency.cd) return;
            slctCrrcies.push(c);
        });
        this.selectedCurrencies = slctCrrcies;
        this.changeAmount(currency);

        this.storage.ready().then(localforage => {
            localforage.setItem('baseCurrency', this.baseCurrency);
            localforage.setItem('selectedCurrencies', this.selectedCurrencies);
        });
    }

    focusAmount(cd: any) {
        this.editCurrency = cd;
    }

    flagImgSrc(cd: any): string {
        return 'https://countryflags.io/' + (cd + '').substr(0, 2) + '/flat/48.png';
    }

    addCurrencyTo(event: {
        component: SelectSearchableComponent,
        value: any
    }) {
        if (!event.value || event.value.length <= 0) return;
        event.value.forEach(v => this.selectedCurrencies.push(v));
        const currencyCdList = this.selectedCurrencies.map(c => c.cd);
        this.getRates(currencyCdList);
        this.storage.ready().then(localforage => {
            localforage.setItem('selectedCurrencies', this.selectedCurrencies);
        });
        this.addCurrencies = [];
    }

}