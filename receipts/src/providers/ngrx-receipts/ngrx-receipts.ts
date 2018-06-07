import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NgrxReceiptsProvider {
  constructor(public http: Http) {
    console.log('Hello NgrxReceiptsProvider Provider');
  }
  
  index() {
    return this.http.get('http://localhost:8019/receipts').map(res => res.json());
  }
  
  store($receipt) {
    return this.http.post('http://localhost:8019/receipts', $receipt).map(res => res.json());
  }
  delete($receiptId) {
    return this.http.delete('http://localhost:8019/receipts/' + $receiptId).map(res => res.json());
  }
}