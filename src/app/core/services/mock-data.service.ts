import { Injectable, inject } from '@angular/core';
import { Observable, from, map, tap, forkJoin, of } from 'rxjs';
import { DataStoreService } from './data-store.service';
import { RootData } from '../models/data-structure.model';
import { PLANS, TEMPLATES } from '../../data/plans-templates';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private readonly dataStore = inject(DataStoreService);

  // Mapeo estático para asegurar que el bundler (esbuild/vite) incluya los archivos
  private readonly dataImports: Record<string, any> = {
    'user-1': () => import('../../data/user-1'),
    'user-2': () => import('../../data/user-2'),
    'user-3': () => import('../../data/user-3'),
    'user-4': () => import('../../data/user-4'),
  };

  /**
   * Obtiene el índice (1-10) basándose en el slug.
   */
  private getIndexBySlug(identifier: string | number): number {
    if (typeof identifier === 'number') return identifier;
    if (!isNaN(Number(identifier))) return Number(identifier);

    const match = identifier.match(/-(\d+)$/);
    return match ? Number(match[1]) : 1;
  }

  private loadModule(index: number): Promise<any> {
    const key = `user-${index}`;
    return this.dataImports[key] ? this.dataImports[key]() : this.dataImports['user-1']();
  }

  /**
   * Obtiene los datos del restaurante (Consulta Independiente).
   */
  getRestaurantData(identifier: number | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.restaurantResponse));
  }

  /**
   * Obtiene las categorías con productos (Consulta Independiente).
   */
  getMenuCategories(identifier: number | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.menuCategoriesResponse));
  }

  /**
   * Obtiene solo la lista de categorías (Consulta Independiente).
   */
  getCategoryList(identifier: number | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.categoryListResponse));
  }

  /**
   * Obtiene la configuración de la plantilla (Consulta Independiente).
   */
  getTemplateData(identifier: number | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.templateResponse));
  }

  /**
   * Obtiene los combos (Consulta Independiente).
   */
  getCombos(identifier: number | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.combosResponse));
  }

  /**
   * Obtiene las promociones (Consulta Independiente).
   */
  getPromotions(identifier: number | string): Observable<any> {
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.promotionsResponse));
  }

  /**
   * Método de conveniencia para cargar todo en el DataStore (Legacy/Initial).
   */
  loadFullUserData(identifier: number | string): Observable<RootData> {
    this.dataStore.setLoading(true);
    const index = this.getIndexBySlug(identifier);
    return from(this.loadModule(index).then(m => m.rootData)).pipe(
      tap({
        next: (data) => {
          this.dataStore.setData(data);
          this.dataStore.setLoading(false);
        },
        error: (err) => {
          console.error('Error loading modular data:', err);
          this.dataStore.setError('Error al cargar la respuesta modular');
          this.dataStore.setLoading(false);
        }
      })
    );
  }

  /**
   * Obtiene la lista simplificada de todos los restaurantes para la home.
   */
  getAllRestaurants(): Observable<any[]> {
    const requests = Array.from({ length: 4 }, (_, i) => 
      this.getRestaurantData(i + 1)
    );
    
    return forkJoin(requests).pipe(
      map(responses => responses.map((res: any, index) => ({
        userId: index + 1,
        restaurant: res.data.restaurant
      })))
    );
  }

  getPlans(): Observable<any[]> {
    return of(PLANS);
  }

  getTemplates(): Observable<any[]> {
    return of(TEMPLATES);
  }

  registerRestaurant(formData: any): Observable<any> {
    // Simular latencia de red
    return of({
      status: 'success',
      message: 'Restaurante registrado exitosamente',
      data: {
        user_id: 'new-user-uuid',
        restaurant_id: 'new-res-uuid',
        slug: formData.name.toLowerCase().replace(/ /g, '-')
      }
    }).pipe(delay(2000));
  }
}
