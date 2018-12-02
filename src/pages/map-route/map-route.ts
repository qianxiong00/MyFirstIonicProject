import { Component, ViewChild, ElementRef } from '@angular/core';
import { BasePage } from '../base-page';
import { NavParams, Platform, LoadingController } from 'ionic-angular';
import { Store } from '@ngrx/store'
import { ViewModel } from '../view-model';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    Environment,
    MyLocation,
    GoogleMapsAnimation,
  } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-map-route',
  templateUrl: 'map-route.html'
})
export class MapRoutePage extends BasePage {

    map: GoogleMap;
    from: any;
    to: any;
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;

    constructor(
      public navParams: NavParams,
      public store: Store<{viewModel:ViewModel}>,
      private platform: Platform,
      public loadingCtrl: LoadingController
    ) {
        super(store)
        // If we navigated to this page, we will have an item available as a nav param
        this.from = navParams.get('from');
        this.to = navParams.get('to');
    }

    ionViewDidLoad() {
        this.platform.ready();
        this.loadMap();
    }

    loadMap() {
        
        if (this.from.trafic !== 'walk' && this.from.trafic !== 'bus'
            && this.from.trafic !== 'train' && this.from.trafic !== 'car'
            && this.from.trafic !== 'bycycle') {
            this.map = GoogleMaps.create('map', {
                camera: {
                    target: {
                        lat: this.from.position.lat,
                        lng: this.from.position.lng
                    }
                }
            });

            this.map.addMarker({
                icon: 'red',
                title: this.from.content,
                snippet: this.from.date_time,
                position: {lat: this.from.position.lat, lng: this.from.position.lng},
                styles: {
                  'text-align': 'center',
                  'font-style': 'italic',
                  'font-weight': 'bold',
                  'color': 'red'
                },
                animation: GoogleMapsAnimation.DROP
              })

              this.map.addMarker({
                icon: 'green',
                title: this.to.content,
                snippet: this.to.date_time,
                position: {lat: this.to.position.lat, lng: this.to.position.lng},
                styles: {
                  'text-align': 'center',
                  'font-style': 'italic',
                  'font-weight': 'bold',
                  'color': 'red'
                },
                animation: GoogleMapsAnimation.DROP
              })
            
            this.map.addPolyline({
                points: [{
                    lat: this.from.position.lat,
                    lng: this.from.position.lng
                },{
                    lat: this.to.position.lat,
                    lng: this.to.position.lng
                }],
                color: '#AA00FF',
                width: 5,
                clickable: true
            });
        } else {
            this.map = new google.maps.Map(this.mapElement.nativeElement);
            this.startNavigating();
        }
    }

    startNavigating(){
 
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
 
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
 
        directionsService.route({
            origin: {lat: this.from.position.lat, lng: this.from.position.lng},
            destination: {lat: this.to.position.lat, lng: this.to.position.lng},
            travelMode: this.getTravelMode()
        }, (res, status) => {
 
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(res);
            } else {
                console.warn(status);
            }
 
        });
 
    }

    getTravelMode(): any {
        switch(this.from.trafic) {
            case 'walk': return google.maps.TravelMode['WALKING'];
            case 'bus': return google.maps.TravelMode['TRANSIT'];
            case 'bicycle': return google.maps.TravelMode['BICYCLING'];
            case 'car': return google.maps.TravelMode['DRIVING'];
            case 'train': return google.maps.TravelMode['TRANSIT'];
            default: return google.maps.TravelMode['WALKING'];
        }
    }
  
}
