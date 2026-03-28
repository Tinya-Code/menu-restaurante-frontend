import { Injectable, signal, computed } from '@angular/core';
import { RootData } from '../models/data-structure.model';
import { RestaurantData } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  // Estado privado y mutable
  private _data = signal<RootData | null>(null);
  private _isLoading = signal(false);
  private _error = signal<string | null>(null);

  // Exposición pública solo-lectura
  readonly data = this._data.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly error = this._error.asReadonly();

  // Valores derivados globales
  readonly user = computed(() => this._data()?.user ?? null);
  readonly restaurants = computed(() => this._data()?.restaurants ?? []);
  
  // Asumimos el primer restaurante como activo por defecto
  readonly activeRestaurantData = computed<RestaurantData | null>(() => {
    const res = this.restaurants();
    return res.length > 0 ? res[0] : null;
  });

  readonly activeRestaurant = computed(() => this.activeRestaurantData()?.restaurant ?? null);
  readonly activeSettings = computed(() => this.activeRestaurantData()?.settings ?? null);

  setRestaurantResponse(response: any): void {
    const data = response.data;
    this._data.update(current => {
      const baseData = {
        restaurant: data.restaurant,
        settings: data.settings,
        menus: [] as any[],
        plan: null,
        template: null
      };

      if (!current) {
        return {
          user: data.user,
          restaurants: [baseData]
        } as RootData;
      } else {
        return {
          ...current,
          user: data.user,
          restaurants: current.restaurants.map((r, i) => i === 0 ? { ...r, ...baseData, menus: r.menus } : r)
        } as RootData;
      }
    });
  }

  /**
   * Actualiza las categorías y productos (Consulta 2).
   */
  setMenuCategoriesResponse(response: any): void {
    this._data.update(current => {
      if (!current || current.restaurants.length === 0) return current;
      
      const updatedRestaurants = [...current.restaurants];
      const firstRes = { ...updatedRestaurants[0] };
      
      const menus = [...(firstRes.menus || [])];
      
      // Normalizamos: Cada objeto será { ...category, products }
      const flattenedCategories = response.data.map((item: any) => ({
        ...item.category,
        products: item.products
      }));

      if (menus.length === 0) {
        menus.push({
          menu: { id: 'main', name: 'Principal' } as any,
          categories: flattenedCategories
        });
      } else {
        menus[0] = { ...menus[0], categories: flattenedCategories };
      }
      
      firstRes.menus = menus;
      updatedRestaurants[0] = firstRes;
      
      return { ...current, restaurants: updatedRestaurants } as RootData;
    });
  }

  /**
   * Actualiza solo la lista de categorías (Consulta 3).
   */
  setCategoryListResponse(response: any): void {
    this._data.update(current => {
      if (!current || current.restaurants.length === 0) return current;
      
      const updatedRestaurants = [...current.restaurants];
      const firstRes = { ...updatedRestaurants[0] };
      
      const menus = [...(firstRes.menus || [])];
      // Mapeamos solo las categorías del response
      const categoryList = response.data.map((cat: any) => ({
        category: cat,
        products: [] // Sin productos en esta consulta
      }));

      if (menus.length === 0) {
        menus.push({
          menu: { id: 'main', name: 'Principal' } as any,
          categories: categoryList
        });
      } else {
        menus[0] = { ...menus[0], categories: categoryList };
      }
      
      firstRes.menus = menus;
      updatedRestaurants[0] = firstRes;
      
      return { ...current, restaurants: updatedRestaurants } as RootData;
    });
  }

  // Mutaciones del estado
  setData(data: RootData): void {
    this._data.set(data);
  }

  setLoading(value: boolean): void {
    this._isLoading.set(value);
  }

  setError(message: string | null): void {
    this._error.set(message);
  }
}
