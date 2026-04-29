/**
 * Constantes de configuración de la API y el Proyecto.
 */
import { environment } from '../../../environments/environment';
export const API_CONSTANTS = {
  BASE_URL: environment.apiURL,
  ENDPOINTS: {
    RESTAURANTE: '/restaurant',
    MENU: '/menu-categories',
    CATEGORIAS: '/categories',
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
