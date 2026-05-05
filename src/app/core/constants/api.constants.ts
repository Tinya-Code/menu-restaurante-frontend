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
    },
  },
  DEFAULT_CONFIG: {
    CURRENCY: 'PEN',
    CURRENCY_SYMBOL: 'S/',
    LANGUAGE: 'es',
    TIMEZONE: 'America/Lima',
  },
  TIMEOUT: 15000,
};

// Helper methods for dynamic endpoint generation
export const RESTAURANT_ENDPOINTS = {
  BY_SLUG: (slug: string) => `/restaurant/${slug}`,
  MENU: (slug: string) => `/restaurant/${slug}/menu`,
  CATEGORIES: (slug: string) => `/restaurant/${slug}/categories`,
  TEMPLATE: (slug: string) => `/restaurant/${slug}/template`,
  COMBOS: (slug: string) => `/restaurant/${slug}/combos`,
  PROMOTIONS: (slug: string) => `/restaurant/${slug}/promotions`,
  BANNERS: (slug: string) => `/restaurant/${slug}/banners`,
};
