import { Receipt } from './../../models/receipt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ReceiptsProvider {

  apiUrl = 'http://localhost:8019/receipts';
  receipts: Receipt[] = [];
  subject = new BehaviorSubject([]);
  data = this.subject.asObservable();

  constructor(public http: HttpClient) {
    this.http.get(this.apiUrl).subscribe(receipts => {
      for (const receipt in receipts) {
        if (receipts.hasOwnProperty(receipt)) {
          this.receipts.push(receipts[receipt]);
        }
      }
      this.subject.next(this.receipts);
    })
  }

  createReceipt(title: string, description: string, imageUrl: string, category: number) {
    this.receipts.push(new Receipt(this.receipts.length + 1, title, description, imageUrl, category, new Date()));
    this.subject.next(this.receipts);
  }

  deleteReceipt(receiptToDelete: Receipt) {
    this.receipts = this.receipts.filter(receipt => receipt !== receiptToDelete);
    this.subject.next(this.receipts);
  }
}
