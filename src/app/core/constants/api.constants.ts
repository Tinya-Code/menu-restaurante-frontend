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
