import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { UsersPage } from '../users/users';
import { MapsPage } from '../maps/maps';
import { DuraksaatPage } from '../duraksaat/duraksaat';
import { GithubUsersProvider } from '../../providers/github-users/github-users';


/**
 * Generated class for the ReposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-harita',
  templateUrl: 'harita.html',
  
})
export class haritaPage {
  newinfo: any[];
  newinf: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http, haProv: GithubUsersProvider) {
    let localData = this.http.get('assets/newinfo.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.newinfo = data;
    })
  }
 
  
  goToUsers(){
    this.navCtrl.push(UsersPage);
  }
  goToMaps(a,b){
    this.navCtrl.push(MapsPage, {
      lat: a, long: b
    });
  }
  goToDuraksaat(){
    this.navCtrl.push(DuraksaatPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad haritaPage');
  }
  toggleItem(i, j) {
    this.newinfo[i].children[j].open = !this.newinfo[i].children[j].open;
  }
  toggleSection(i) {
    this.newinfo[i].open = !this.newinfo[i].open;
  }

}
