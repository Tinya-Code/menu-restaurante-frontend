import { Injectable, inject, computed } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataStore = inject(DataStoreService);

  readonly allProducts = computed<Product[]>(() => {
    const res = this.dataStore.activeRestaurantData();
    if (!res) return [];
    
    return res.menus.flatMap((menu: any) => 
      menu.categories.flatMap((cat: any) => cat.products)
    );
  });

  getProductById(id: string) {
    return computed(() => this.allProducts().find(p => p.id === id) ?? null);
  }

  getProductsByCategory(categoryId: string) {
    return computed(() => this.allProducts().filter(p => p.category_id === categoryId));
  }
}
