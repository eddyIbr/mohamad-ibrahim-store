export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  category: ProductCategory;
}

export type ProductCategory =
  | 'Electronics'
  | 'Accessories'
  | 'Home'
  | 'Wearables'
  | 'Clothing';
