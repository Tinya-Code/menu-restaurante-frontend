import { inject, Injectable, computed, Signal, effect } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Local } from './local.service';

export interface DaySchedule {
  open: string;
  close: string;
  isOpen: boolean;
}

export interface BusinessHours {
  [key: string]: DaySchedule;
}

@Injectable({
  providedIn: 'root'
})
export class BusinessHoursService {
  private readonly _restaurantService = inject(RestaurantService);
  private readonly _local = inject(Local);
  private readonly _storageKey = 'restaurant_metadata';

  // Obtener horarios reactivamente
  readonly hours = this._restaurantService.businessHours;

  constructor() {
    // Escuchar cambios en los datos del restaurante para guardar metadatos
    effect(() => {
      this.saveRestaurantMetadata();
    });
  }

  /**
   * Determina si el restaurante está abierto actualmente.
   */
  readonly isOpen = computed(() => {
    const hours = this.hours();
    if (!hours) return false;

    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[now.getDay()];
    const schedule = (hours as any)[currentDay] as DaySchedule;

    if (!schedule || !schedule.isOpen) return false;

    // Obtener hora actual en formato HH:mm
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    return currentTime >= schedule.open && currentTime < schedule.close;
  });

  /**
   * Almacena datos del restaurante en localStorage.
   */
  private saveRestaurantMetadata(): void {
    const restaurant = this._restaurantService.restaurant();
    const settings = this._restaurantService.settings();
    if (restaurant && settings) {
      const metadata = {
        id: restaurant.id,
        name: restaurant.name,
        logo: settings.logo_url,
        address: restaurant.address,
        businessHours: this.hours(),
        updatedAt: new Date().toISOString()
      };
      this._local.set(this._storageKey, metadata);
    }
  }

  /**
   * Obtiene los metadatos almacenados.
   */
  getRestaurantMetadata(): any {
    return this._local.get(this._storageKey);
  }
}
