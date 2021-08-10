export interface ShippingAddress {
  fullName: string,
  streetAddress: string,
  city: string,
  postalCode: string,
  country: string,
  phone: string,
  email: string,
  password: string,
  instructions?: string,
  paymentMethod: string
}