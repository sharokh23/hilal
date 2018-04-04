import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSightingPage } from './newsighting';

@NgModule({
  declarations: [
    NewSightingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSightingPage),
  ],
})
export class NewSightingPageModule {}
