import { Observable } from 'rxjs/Observable';
import { ReceiptsProvider } from './../../providers/receipts/receipts';
import { Receipt } from './../../models/receipt';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from './../../models/category';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage implements OnInit {

  receipt: Receipt;
  recommendedReceipts: Observable<Receipt[]>;
  receiptPage = ReceiptPage;
  Category = Category;

  constructor(public navCtrl: NavController, public navParams: NavParams, public receiptsProvider: ReceiptsProvider) {
  }

  ngOnInit() {
    this.receipt = this.navParams.data;
    this.recommendedReceipts = this.receiptsProvider.data
      .map(receipts => receipts.filter(r => r.category === this.receipt.category && r.id !== this.receipt.id));
  }
}
