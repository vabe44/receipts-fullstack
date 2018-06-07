import { ActionReducer, Action } from "@ngrx/store";
import * as ReceiptActions from "../actions/receiptActions";

export type Action = ReceiptActions.All;

export interface Receipt {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: number;
  created_at: Date;
}
export interface AppState {
  receipts: [Receipt];
}
export function receiptReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ReceiptActions.STORE_RECEIPTS:
      return action.payload;
    case ReceiptActions.ADD_RECEIPT:
      return [...state, ...action.payload];
    case ReceiptActions.DELETE_RECEIPT:
      return state.filter(receipt => receipt.id !== action.payload.id);
    case ReceiptActions.RESET:
      return [];
    default:
      return state;
  }
}