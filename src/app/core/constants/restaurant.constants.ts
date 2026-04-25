/**
 * Tipos de categorías para segmentación del menú.
 */
export const CATEGORY_TYPES = [
  'block-1',  // Segmento 1
  'block-2',  // Segmento 2
  'block-3',  // Segmento 3
  'block-4',  // Segmento 4
  'block-5',  // Segmento 5
  'block-6',  // Segmento 6
  'block-7'   // Segmento 7
] as const;


export type CategoryType = typeof CATEGORY_TYPES[number];


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
