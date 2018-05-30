import { ReceiptsProvider } from './../../providers/receipts/receipts';
import { Receipt } from './../../models/receipt';
import { Category } from './../../models/category';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'receipt-card',
  templateUrl: 'receipt-card.html'
})
export class ReceiptCardComponent {

  @Input() public receipt: Receipt;
  Category = Category;

  constructor(private receiptsProvider: ReceiptsProvider) {

  }

  deleteReceipt() {
    this.receiptsProvider.deleteReceipt(this.receipt);
  }
}
