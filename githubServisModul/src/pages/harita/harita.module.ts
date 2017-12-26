import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { haritaPage } from './harita';

@NgModule({
  declarations: [
    haritaPage,
  ],
  imports: [
    IonicPageModule.forChild(haritaPage),
  ],
})
export class haritaPageModule {}
