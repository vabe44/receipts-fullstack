import { CreateReceiptPage } from './../create-receipt/create-receipt';
import { ReceiptPage } from './../receipt/receipt';
import { Observable } from 'rxjs/Observable';
import { Receipt } from './../../models/receipt';
import { ReceiptsProvider } from './../../providers/receipts/receipts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  receiptPage = ReceiptPage;
  createReceiptPage = CreateReceiptPage;

  searchText: string;
  receipts: Observable<Receipt[]>;
  constructor(public navCtrl: NavController, public receiptsProvider: ReceiptsProvider) {
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.receipts = this.receiptsProvider.data;
  }

  filterItems(ev: any) {
    this.searchText = ev.target.value;
  }

  viewReceipt(receipt: Receipt) {
    this.navCtrl.push(this.receiptPage, receipt);
  }

  createReceipt() {
    this.navCtrl.push(this.createReceiptPage);
  }
}
