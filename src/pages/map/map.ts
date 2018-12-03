import { Component } from '@angular/core';
import { BasePage } from '../base-page';
import { NavParams, Platform, LoadingController } from 'ionic-angular';
import {
    GoogleMaps,
    GoogleMap,
    Marker,
    GoogleMapsAnimation
  } from '@ionic-native/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage extends BasePage {

    map: GoogleMap;
    loading: any;
    detail: any;

    constructor(
      public navParams: NavParams,
      private platform: Platform,
      public loadingCtrl: LoadingController
    ) {
        super()
        // If we navigated to this page, we will have an item available as a nav param
        this.detail = navParams.get('detail');
    }

    ionViewDidLoad() {
        this.platform.ready();
        this.loadMap();
    }

    loadMap() {
      this.map = GoogleMaps.create('map', {
        controls: {
          'compass': true,
          'myLocationButton': true,
          'mapToolbar': true
        },
        camera: {
          target: {
            lat: this.detail.position.lat,
            lng: this.detail.position.lng
          },
          zoom: 16
        }
      });

      this.map.addMarker({
        icon: 'blue',
        title: this.detail.content,
        snippet: this.detail.date_time,//'@ionic-native/google-maps',
        position: {lat: this.detail.position.lat, lng: this.detail.position.lng},
        styles: {
          'text-align': 'center',
          'font-style': 'italic',
          'font-weight': 'bold',
          'color': 'red'
        },
        animation: GoogleMapsAnimation.DROP
      }).then((marker: Marker) => {
        marker.showInfoWindow();
      });
    }
  
}
