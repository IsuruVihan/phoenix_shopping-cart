export interface IOrderItem {
  image: string,
  name: string,
  qty: number,
  unitPrice: number
}

export interface ICheckoutTableRow {
  key: number,
  image: JSX.Element,
  name: string,
  qty: JSX.Element,
  unitPrice: JSX.Element,
  amount: JSX.Element,
  deleteBtn: JSX.Element;
}
