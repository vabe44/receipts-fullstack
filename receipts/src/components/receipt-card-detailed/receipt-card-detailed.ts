import { Component, Input } from '@angular/core';
import { Receipt } from './../../models/receipt';
import { Category } from './../../models/category';

@Component({
  selector: 'receipt-card-detailed',
  templateUrl: 'receipt-card-detailed.html'
})
export class ReceiptCardDetailedComponent {

  @Input() public receipt: Receipt;
  Category = Category;

  constructor() {}
}
