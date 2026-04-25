/**
 * IDs de las plantillas temáticas disponibles en el sistema.
 */
export const TEMPLATE_IDS = {
  POLLERIA: 'polleria',
  CHIFA: 'chifa',
  CEVICHERIA: 'cevicheria',
  COMIDA_RAPIDA: 'comida-rapida',
} as const;

/**
 * Metadata opcional para cada plantilla.
 */
export const TEMPLATE_CONFIG = {
  [TEMPLATE_IDS.POLLERIA]: {
    name: 'Pollería a la Brasa',
    icon: 'flame',
  },
  [TEMPLATE_IDS.CHIFA]: {
    name: 'Chifa Especial',
    icon: 'utensils',
  },
  [TEMPLATE_IDS.CEVICHERIA]: {
    name: 'Cevichería & Pescados',
    icon: 'waves',
  },
  [TEMPLATE_IDS.COMIDA_RAPIDA]: {
    name: 'Comida Rápida & Burgers',
    icon: 'zap',
  },
};
