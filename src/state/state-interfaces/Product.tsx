export interface Product {
  picSrc: string,
  name: string,
  crossedPrice: number,
  price: number,
  category: string
}

export interface ProductData {
  products: Product[]
}