/**
 * Constantes de configuración de la API y el Proyecto.
 */
import { environment } from '../../../environments/environment';

export const API_CONSTANTS = {
  BASE_URL: environment.apiURL,
  ENDPOINTS: {
    // Restaurant endpoints
    RESTAURANTE: '/restaurant',
    RESTAURANTS: '/restaurants',

    // Menu endpoints
    MENUS: '/menus',
    MENU_BY_BRANCH: (branchId: string) => `/menus/branch/${branchId}`,
    FULL_MENU: (menuId: string) => `/menus/${menuId}/full`,

    // Category endpoints
    CATEGORIES: '/categories',
    CATEGORY_BY_ID: (id: string) => `/categories/${id}`,
    CATEGORIES_BY_MENU: (menuId: string) => `/categories/menu/${menuId}`,

    // Legacy endpoints (for compatibility)
    MENU: '/menu-categories',
    CATEGORIAS: '/categories',

    // Contact and Auth
    CONTACTO: '/contact',
    AUTH: {
      REGISTER: '/auth/register',
    }
  },
  DEFAULT_CONFIG: {
    CURRENCY: 'PEN',
    CURRENCY_SYMBOL: 'S/',
    LANGUAGE: 'es',
    TIMEZONE: 'America/Lima',
  },
  TIMEOUT: 15000,
};
