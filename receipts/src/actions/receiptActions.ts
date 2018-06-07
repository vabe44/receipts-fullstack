import { Action } from "@ngrx/store";
import { Receipt } from "../reducers/receiptReducer";

export const STORE_RECEIPTS = "STORE_RECEIPTS";
export const ADD_RECEIPT = "ADD_RECEIPT";
export const DELETE_RECEIPT = "DELETE_RECEIPT";
export const RESET = "RESET";

export class StoreReceipts implements Action {
  readonly type = STORE_RECEIPTS;
  constructor(public payload: any) {}
}
export class AddReceipt implements Action {
  readonly type = ADD_RECEIPT;
  constructor(public payload: Receipt) {}
}
export class DeleteReceipt implements Action {
  readonly type = DELETE_RECEIPT;
  constructor(public payload: any) {}
}
export class ResetReceipt implements Action {
  readonly type = RESET;
  constructor(public payload: any) {}
}

export type All = StoreReceipts | AddReceipt | DeleteReceipt | ResetReceipt;