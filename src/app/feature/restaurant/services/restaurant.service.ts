import { Injectable, inject } from '@angular/core';
import { Observable, catchError, from, map, of } from 'rxjs';
import { RESTAURANT_ENDPOINTS } from '../../../core/constants/api.constants';
import { ApiResponse } from '../../../core/models/api-response.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiService = inject(ApiService);

  // Development flag - set to true to use local data instead of HTTP
  private readonly USE_MOCK_DATA = true;

  // Local data imports for fallback
  private readonly dataImports: Record<string, any> = {
    'user-1': () => import('../../../data/user-1'),
    'user-2': () => import('../../../data/user-2'),
    'user-3': () => import('../../../data/user-3'),
    'user-4': () => import('../../../data/user-4'),
  };

  // Slug to index mapping for local data
  private readonly slugToIndexMap: Record<string, number> = {
    'restaurante-gran-gourmet-1': 1,
    'chifa-dragon-dorado-2': 2,
    'restaurante-gran-gourmet-3': 3,
    'restaurante-gran-gourmet-4': 4,
  };

  /**
   * Gets the index (1-4) based on the slug.
   */
  private getIndexBySlug(identifier: string | number): number {
    if (typeof identifier === 'number') return identifier;
    if (!isNaN(Number(identifier))) return Number(identifier);

    // Try exact match first
    if (this.slugToIndexMap[identifier]) {
      return this.slugToIndexMap[identifier];
    }

    // Fallback to pattern matching
    const match = identifier.match(/-(\d+)$/);
    return match ? Number(match[1]) : 1;
  }

  private loadLocalData(identifier: string | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    const key = `user-${index}`;
    const loader = this.dataImports[key] || this.dataImports['user-1'];
    return from(loader());
  }

  /**
   * Gets restaurant data from API with fallback to local data.
   */
  getRestaurantData(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.restaurantResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading restaurant data',
              timestamp: new Date().toISOString(),
            };
          }
          return data.restaurantResponse;
        }),
        catchError((err) => {
          return of({
            success: false,
            data: null,
            message: 'Error loading restaurant data',
            timestamp: new Date().toISOString(),
          });
        })
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.BY_SLUG(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.restaurantResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.restaurantResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }

  /**
   * Gets menu categories from API with fallback to local data.
   */
  getMenuCategories(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.menuCategoriesResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            };
          }
          return data.menuCategoriesResponse;
        }),
        catchError(() =>
          of({
            success: false,
            data: null,
            message: 'Error loading menu categories',
            timestamp: new Date().toISOString(),
          })
        )
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.MENU(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.menuCategoriesResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.menuCategoriesResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }

  /**
   * Gets category list from API with fallback to local data.
   */
  getCategoryList(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.categoryListResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading category list',
              timestamp: new Date().toISOString(),
            };
          }
          return data.categoryListResponse;
        }),
        catchError(() =>
          of({
            success: false,
            data: null,
            message: 'Error loading menu categories',
            timestamp: new Date().toISOString(),
          })
        )
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.CATEGORIES(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.categoryListResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.categoryListResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }

  /**
   * Gets template data from API with fallback to local data.
   */
  getTemplateData(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.templateResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading template data',
              timestamp: new Date().toISOString(),
            };
          }
          return data.templateResponse;
        }),
        catchError(() =>
          of({
            success: false,
            data: null,
            message: 'Error loading menu categories',
            timestamp: new Date().toISOString(),
          })
        )
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.TEMPLATE(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.templateResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.templateResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }

  /**
   * Gets combos from API with fallback to local data.
   */
  getCombos(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.combosResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading combos',
              timestamp: new Date().toISOString(),
            };
          }
          return data.combosResponse;
        }),
        catchError(() =>
          of({
            success: false,
            data: null,
            message: 'Error loading menu categories',
            timestamp: new Date().toISOString(),
          })
        )
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.COMBOS(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.combosResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.combosResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }

  /**
   * Gets promotions from API with fallback to local data.
   */
  getPromotions(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.promotionsResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading promotions',
              timestamp: new Date().toISOString(),
            };
          }
          return data.promotionsResponse;
        }),
        catchError(() =>
          of({
            success: false,
            data: null,
            message: 'Error loading menu categories',
            timestamp: new Date().toISOString(),
          })
        )
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.PROMOTIONS(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.promotionsResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.promotionsResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }

  /**
   * Gets banners from API with fallback to local data.
   */
  getBanners(slug: string): Observable<ApiResponse<any>> {
    if (this.USE_MOCK_DATA) {
      return this.loadLocalData(slug).pipe(
        map((data) => {
          if (!data || !data.bannerResponse) {
            return {
              success: false,
              data: null,
              message: 'Error loading banners',
              timestamp: new Date().toISOString(),
            };
          }
          return data.bannerResponse;
        }),
        catchError(() =>
          of({
            success: false,
            data: null,
            message: 'Error loading menu categories',
            timestamp: new Date().toISOString(),
          })
        )
      );
    }

    return this.apiService.get<any>(RESTAURANT_ENDPOINTS.BANNERS(slug)).pipe(
      catchError((error) => {
        return this.loadLocalData(slug).pipe(
          map((data) => {
            if (!data || !data.bannerResponse) {
              return {
                success: false,
                data: null,
                message: 'Error loading menu categories',
                timestamp: new Date().toISOString(),
              };
            }
            return data.bannerResponse;
          }),
          catchError(() =>
            of({
              success: false,
              data: null,
              message: 'Error loading menu categories',
              timestamp: new Date().toISOString(),
            })
          )
        );
      })
    );
  }
}
