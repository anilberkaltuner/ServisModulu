import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { haritaPage } from '../harita/harita';
import { UsersPage } from '../users/users';
@Component({
  selector: 'page-duraksaat',
  templateUrl: 'duraksaat.html'
})
export class DuraksaatPage {
  information: any[];
 
  constructor(public navCtrl: NavController, private http: Http) {
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
  goToHarita(){
    this.navCtrl.push(haritaPage);
  }
  goToUsers(){
    this.navCtrl.push(UsersPage);
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
 
}