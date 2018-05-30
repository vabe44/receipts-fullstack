import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateReceiptPage } from './create-receipt';

@NgModule({
  declarations: [
    CreateReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateReceiptPage),
  ],
})
export class CreateReceiptPageModule {}
