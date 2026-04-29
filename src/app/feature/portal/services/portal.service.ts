import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map, catchError, of, from } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { API_CONSTANTS } from '../../../core/constants/api.constants';
import { ApiResponse } from '../../../core/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
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

  private loadLocalData(index: number): Observable<any> {
    const key = `user-${index}`;
    const loader = this.dataImports[key] || this.dataImports['user-1'];
    return from(loader());
  }

  /**
   * Gets all restaurants for the portal home page.
   * Tries API first, falls back to local data on error.
   */
  getAllRestaurants(): Observable<any[]> {
    if (this.USE_MOCK_DATA) {
      return this.getLocalRestaurants();
    }

    return this.apiService.get<any>(API_CONSTANTS.ENDPOINTS.RESTAURANTE).pipe(
      map((response) => {
        // Normalize API response to match local data format
        const restaurants = response.data || [];
        return restaurants.map((r: any) => ({
          userId: r.id,
          restaurant: r,
        }));
      }),
      catchError((error) => {
        console.warn('API error, falling back to local data:', error);
        return this.getLocalRestaurants();
      }),
    );
  }

  /**
   * Gets restaurants from local data files.
   */
  private getLocalRestaurants(): Observable<any[]> {
    const requests = Array.from({ length: 4 }, (_, i) => this.loadLocalData(i + 1));

    return forkJoin(requests).pipe(
      map((responses) =>
        responses.map((res: any, index) => ({
          userId: index + 1,
          restaurant: res.restaurantResponse.data.restaurant,
        })),
      ),
    );
  }
}
