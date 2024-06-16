import { CategoryData } from './CategoryData'

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
  category: CategoryData[]
}

