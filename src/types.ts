export interface ProductsResponse {
  next: string;
  previous: string;
  results: Array<Product>;
}

export interface Product {
  title: string;
  description: string;
  price: number;
  image: string;
}
