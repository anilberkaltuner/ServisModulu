import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { haritaPage } from '../harita/harita';
import { UpdatePage } from '../update/update';
import { DuraksaatPage } from '../duraksaat/duraksaat';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
    

@IonicPage()
@Component({
  
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  adres:string="Kadıköy/İstanbul";
  email:string="email@email.com";
  ad:string="Anıl Berk Altuner";
  hat:string="3-Hat (Kadıköy-Umuttepe)";
  nameProvider(){
    
  }
  goToHarita(){
    this.navCtrl.push(haritaPage);
  }
  goToDuraksaat(){
    this.navCtrl.push(DuraksaatPage);
  }
  goToUpdate(){
    this.navCtrl.push(UpdatePage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  

}
