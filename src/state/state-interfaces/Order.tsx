import {CartItem} from "./CartItem";
import {ShippingAddress} from "./ShippingAddress";

export interface Order {
  items: CartItem[],
  total: number,
  discount: number,
  deliveryCharge: number,
  shippingAddress: ShippingAddress,
  deliver: boolean
}