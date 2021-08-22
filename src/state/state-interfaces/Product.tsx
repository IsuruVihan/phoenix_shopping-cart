export interface Product {
  picSrc: string,
  name: string,
  crossedPrice: string,
  price: string,
  category: string
}

export interface ProductData {
  products: Product[]
}