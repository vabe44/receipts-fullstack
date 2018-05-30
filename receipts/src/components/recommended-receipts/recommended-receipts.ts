import { Component, OnInit, Input } from '@angular/core';
import { Receipt } from './../../models/receipt';
import { Category } from './../../models/category';
import { Observable } from 'rxjs/Observable';
import { ReceiptsProvider } from '../../providers/receipts/receipts';
import { NavController, NavParams } from 'ionic-angular';
import { ReceiptPage } from '../../pages/receipt/receipt';

@Component({
  selector: 'recommended-receipts',
  templateUrl: 'recommended-receipts.html'
})
export class RecommendedReceiptsComponent implements OnInit {

  @Input() public receipt: Receipt;
  Category = Category;
  recommendedReceipts: Observable<Receipt[]>;
  receiptPage = ReceiptPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public receiptsProvider: ReceiptsProvider) {}

  ngOnInit() {
    this.recommendedReceipts = this.receiptsProvider.data
      .map(receipts => receipts.filter(r => r.category === this.receipt.category && r.id !== this.receipt.id));
  }

  viewReceipt(receipt: Receipt) {
    this.navCtrl.push(ReceiptPage, receipt);
  }
}
