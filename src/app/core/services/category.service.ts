import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse } from '../models/api-response.model';
import { Category } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiService = inject(ApiService);

  /**
   * Obtiene todas las categorías de un menú.
   * GET /categories/menu/:menuId
   */
  getCategoriesByMenu(menuId: string): Observable<Category[]> {
    return this.apiService
      .get<Category[]>(API_CONSTANTS.ENDPOINTS.CATEGORIES_BY_MENU(menuId))
      .pipe(map((response: ApiResponse<Category[]>) => response.data));
  }

  /**
   * Obtiene una categoría por su ID.
   * GET /categories/:id
   */
  getCategoryById(id: string): Observable<Category> {
    return this.apiService
      .get<Category>(API_CONSTANTS.ENDPOINTS.CATEGORY_BY_ID(id))
      .pipe(map((response: ApiResponse<Category>) => response.data));
  }
}
