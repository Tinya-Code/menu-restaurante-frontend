/**
 * Constantes de configuración de la API.
 */
/**
 * Constantes de configuración de la API y el Proyecto.
 */
export const API_CONSTANTS = {
  BASE_URL: 'https://api.menu-smart.com/api/v1', // URL base de producción/staging
  ENDPOINTS: {
    RESTAURANTE: '/restaurant',
    MENU: '/menu-categories',
    CATEGORIAS: '/categories',
    CONTACTO: '/contact',
  },
  DEFAULT_CONFIG: {
    CURRENCY: 'PEN',
    CURRENCY_SYMBOL: 'S/',
    LANGUAGE: 'es',
    TIMEZONE: 'America/Lima',
  },
  TIMEOUT: 15000,
};
