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
  deleteBtn: JSX.Element
}

export interface ICountryObj {
  value : string,
  label : string,
  name: string,
  code : string,
  unicode : string,
  image: string
}

export interface ICountryObjSelect {
  value: string,
  label: string
}
