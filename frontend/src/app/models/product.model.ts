export class  Product{
  name: string
  stock: string
  price: string
  image: any
}

export interface ProductResponse {
  id:         number;
  name:       string;
  image:      string;
  stock:      string;
  price:      string;
  created_at: Date;
  updated_at: Date;
}
