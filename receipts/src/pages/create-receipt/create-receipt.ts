import { ReceiptsProvider } from './../../providers/receipts/receipts';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from './../../models/category';


@IonicPage()
@Component({
  selector: 'page-create-receipt',
  templateUrl: 'create-receipt.html',
})
export class CreateReceiptPage implements OnInit {

  receiptForm: FormGroup;
  Category = Category;
  categoryKeys: number[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public receiptsProvider: ReceiptsProvider) {
    this.categoryKeys = Object.keys(this.Category)
      .filter(f => !isNaN(Number(f)))
      .map(k => parseInt(k));
  }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    const value = this.receiptForm.value;
    console.log(value);
    this.receiptsProvider.createReceipt(value.title, value.description, value.imageUrl, value.category);
    this.navCtrl.popToRoot();
  }

  private initializeForm() {
    this.receiptForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required)
    });
  }
}
