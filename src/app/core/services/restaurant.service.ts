import { Injectable, inject, computed } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private dataStore = inject(DataStoreService);

  readonly restaurant = this.dataStore.activeRestaurant;
  readonly settings = this.dataStore.activeSettings;
  
  readonly whatsappConfig = computed(() => this.settings()?.whatsapp_config ?? null);
  readonly displayConfig = computed(() => this.settings()?.display_config ?? null);
  readonly businessConfig = computed(() => this.settings()?.business_config ?? null);
  readonly orderConfig = computed(() => this.settings()?.order_config ?? null);

  readonly socialMedia = computed(() => this.businessConfig()?.social_media ?? null);
  readonly businessHours = computed(() => this.businessConfig()?.business_hours ?? null);
  readonly templateData = this.dataStore.activeTemplateData;

  /**
   * Actualiza los datos del restaurante en el store.
   */
  setRestaurantData(response: any): void {
    this.dataStore.setRestaurantResponse(response);
  }

  /**
   * Actualiza los datos de la plantilla en el store.
   */
  setTemplateData(response: any): void {
    this.dataStore.setTemplateResponse(response);
  }
}
