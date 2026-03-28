import { Product } from './product.model';

export interface Category {
  id: string;
  restaurant_id: string;
  menu_id: string;
  name: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CategoryData {
  category: Category;
  products: Product[];
}

export interface Menu {
  id: string;
  restaurant_id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface MenuData {
  menu: Menu;
  categories: CategoryData[];
}
