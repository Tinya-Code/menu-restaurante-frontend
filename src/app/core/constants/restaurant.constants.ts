/**
 * Tipos de categorías para segmentación del menú.
 */
export const CATEGORY_TYPES = [
  'entrada',           // Entradas y Aperitivos
  'sopa',              // Sopas y Cremas
  'ensalada',          // Ensaladas
  'plato de fondo',    // Platos Principales
  'especialidad',      // Especialidades del Chef
  'piqueo',            // Para Compartir
  'guarnicion',        // Acompañamientos
  'salsa',             // Salsas y Extras
  'postre',            // Postres
  'bebida_caliente',   // Cafetería e Infusiones
  'bebida_fria',       // Refrescos y Gaseosas
  'jugo_natural',      // Jugos y Batidos
  'cerveza',           // Cervezas
  'vino',              // Vinos
  'coctel'             // Cocteles y Licores
] as const;

export type CategoryType = typeof CATEGORY_TYPES[number];

/**
 * Segmentos del menú para el renderizado (7 partes).
 */
export const MENU_SEGMENTS = [
  {
    id: 'entradas_sopas',
    name: 'Entradas y Sopas',
    types: ['entrada', 'sopa', 'ensalada']
  },
  {
    id: 'principales',
    name: 'Platos Principales',
    types: ['plato de fondo', 'especialidad']
  },
  {
    id: 'compartir',
    name: 'Para Compartir',
    types: ['piqueo']
  },
  {
    id: 'acompanamientos',
    name: 'Acompañamientos',
    types: ['guarnicion', 'salsa']
  },
  {
    id: 'postres',
    name: 'Postres',
    types: ['postre']
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    types: ['bebida_caliente', 'bebida_fria', 'jugo_natural']
  },
  {
    id: 'licores',
    name: 'Licores y Cocteles',
    types: ['cerveza', 'vino', 'coctel']
  }
];

/**
 * Tags predefinidos para los restaurantes.
 */
export const RESTAURANT_TAGS = [
  'peruano',
  'italiano',
  'japones',
  'vegano',
  'vegetariano',
  'saludable',
  'pollos a la brasa',
  'pescados y mariscos',
  'carnes y parrillas',
  'pizzeria',
  'hamburgueseria',
  'pasteleria',
  'cafe',
  'fast food',
  'gourmet',
  'familiar',
  'tradicional',
  'moderno',
  'economico',
  'delivery',
  'pet friendly',
  'zona wifi',
  'estacionamiento',
  'musica en vivo'
] as const;

export type RestaurantTag = typeof RESTAURANT_TAGS[number];
