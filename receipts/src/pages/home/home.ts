import { NgrxReceiptsProvider } from './../../providers/ngrx-receipts/ngrx-receipts';
import { CreateReceiptPage } from './../create-receipt/create-receipt';
import { ReceiptPage } from './../receipt/receipt';
import { Observable } from 'rxjs/Observable';
import { Receipt } from './../../models/receipt';
import { ReceiptsProvider } from './../../providers/receipts/receipts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from "@ngrx/store";
import * as receiptActions from "./../../actions/receiptActions";
import { AppState } from './../../reducers/receiptReducer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  receiptPage = ReceiptPage;
  createReceiptPage = CreateReceiptPage;

  searchText: string;
  receipts: Observable<any>;
  constructor(
    public navCtrl: NavController, 
    public receiptsProvider: ReceiptsProvider, 
    public ngrxReceiptsProvider: NgrxReceiptsProvider, 
    private store: Store<AppState>) {
    this.receipts = store.select<any>("receipts");
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    // this.receipts = this.receiptsProvider.data;
    this.ngrxReceiptsProvider.index().subscribe((res: any) => {
      let receipts = res;
      this.store.dispatch(new receiptActions.StoreReceipts(receipts));
    }, (error) => {
      console.error(error);
    });
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
