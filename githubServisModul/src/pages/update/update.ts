import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { UsersPage } from '../users/users';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  goToUsers(){
    this.navCtrl.push(UsersPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Hesabı Sil',
      message: 'Hesabınızı sildiğiniz takdirde bütün verileriniz veri tabanından silinecektir. Onaylıyormusunuz?',
      buttons: [
        {
          text: 'Onayla',
          handler: () => {
            console.log('Onaylandı');
          }
        },
        {
          text: 'İptal',
          handler: () => {
            console.log('İptal Edildi');
          }
        }
      ]
    });
    confirm.present();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Kaydedildi',
      subTitle: 'Bilgi kaydı tamamlandı.',
      buttons: ['OK']
    });
    alert.present();
  }
}

  
