import { Injectable, computed, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse } from '../models/api-response.model';
import { CategoryData, Menu, MenuData } from '../models/menu.model';
import { ApiService } from './api.service';
import { DataStoreService } from './data-store.service';

// Backend returns branch_id instead of restaurant_id for Menu
interface MenuResponseDto extends Omit<Menu, 'restaurant_id'> {
  branch_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private dataStore = inject(DataStoreService);
  private apiService = inject(ApiService);

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

  /**
   * Obtiene todos los menús de una sucursal.
   * GET /menus/branch/:branchId
   */
  getMenusByBranch(branchId: string): Observable<ApiResponse<MenuResponseDto[]>> {
    return this.apiService.get<MenuResponseDto[]>(API_CONSTANTS.ENDPOINTS.MENU_BY_BRANCH(branchId));
  }

  /**
   * Obtiene el menú completo con categorías y productos anidados.
   * GET /menus/:id/full
   * Backend returns array of { category, products } which matches CategoryData[]
   */
  getFullMenu(menuId: string): Observable<ApiResponse<CategoryData[]>> {
    return this.apiService.get<CategoryData[]>(API_CONSTANTS.ENDPOINTS.FULL_MENU(menuId));
  }
}
