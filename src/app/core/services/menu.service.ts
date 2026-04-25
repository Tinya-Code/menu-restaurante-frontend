import { Injectable, inject, computed } from '@angular/core';
import { DataStoreService } from './data-store.service';
import { MenuData } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private dataStore = inject(DataStoreService);

  readonly menus = computed<MenuData[]>(() => {
    const res = this.dataStore.activeRestaurantData();
    return res?.menus ?? [];
  });

  readonly activeMenu = computed(() => {
    const menus = this.menus();
    return menus.length > 0 ? menus[0] : null;
  });

  readonly categories = computed(() => {
    return this.activeMenu()?.categories ?? [];
  });

  /**
   * Actualiza las categorías en el store.
   */
  setMenuCategories(response: any): void {
    this.dataStore.setMenuCategoriesResponse(response);
  }

  /**
   * Solo actualiza la lista de categorías (sin productos).
   */
  setCategoryList(response: any): void {
    this.dataStore.setCategoryListResponse(response);
  }
}
