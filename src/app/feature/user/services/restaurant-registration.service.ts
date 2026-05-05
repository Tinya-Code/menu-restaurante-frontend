import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { API_CONSTANTS } from '../../../core/constants/api.constants';
import { ApiResponse } from '../../../core/models/api-response.model';

export interface RestaurantRegistrationData {
  display_name: string | null;
  phone?: string | null;
  restaurant_name: string | null;
  address?: string | null;
  phone_restaurant?: string | null;
  lat?: number | null;
  lng?: number | null;
  slug: string;
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantRegistrationService {
  private apiService = inject(ApiService);

  registerRestaurant(data: RestaurantRegistrationData): Observable<ApiResponse<any>> {
    return this.apiService.post<any>(API_CONSTANTS.ENDPOINTS.AUTH.REGISTER, data);
  }

  generateSlug(name: string): string {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }
}
