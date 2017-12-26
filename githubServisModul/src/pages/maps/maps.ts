
import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google:any;
var x;
var i;


@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})

export class MapsPage {
  @ViewChild('map') mapRef:ElementRef; 
  map:any;
  lat:any;
  long:any;


  constructor(public navParams: NavParams,public navCtrl: NavController) {
    this.lat=navParams.get('lat');
    this.long=navParams.get('long');
  }

  ionViewDidLoad(){
    this.showMap(i);
  }
  showMap(i:number){
  
    x= [[40.824116,29.920623]];
    const location= new google.maps.LatLng(this.lat,this.long);
    const options={
      center:location,
      zoom:17,
      mapTypeId:'hybrid'
    }
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarker(location,this.map)
  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    })
  }
  


}