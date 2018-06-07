import { ReceiptsProvider } from './../../providers/receipts/receipts';
import { Receipt } from './../../models/receipt';
import { Category } from './../../models/category';
import { Component, Input } from '@angular/core';

import { Store } from "@ngrx/store";
import * as ReceiptActions from "./../../actions/receiptActions";
import { AppState } from './../../reducers/receiptReducer';

@Component({
  selector: 'receipt-card',
  templateUrl: 'receipt-card.html'
})
export class ReceiptCardComponent {

  @Input() public receipt: Receipt;
  Category = Category;

  constructor(private receiptsProvider: ReceiptsProvider, private store: Store<AppState>) {

  }

  deleteReceipt() {
    this.receiptsProvider.deleteReceipt(this.receipt);
    // this.store.dispatch(new ReceiptActions.DeleteReceipt({ id: _receipt.id }));
  }
}
