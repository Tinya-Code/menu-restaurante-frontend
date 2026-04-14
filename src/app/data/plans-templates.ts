export const PLANS = [
  {
    id: 'plan-free',
    name: 'Gratis',
    description: 'Perfecto para comenzar tu presencia digital.',
    price: 0,
    max_restaurants: 1,
    max_products: 20,
    max_categories: 5,
    features: {
      whatsapp_orders: true,
      qr_code: true,
      basic_analytics: true,
      custom_colors: false,
    },
    is_active: true,
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    description: 'Todo lo que necesitas para escalar tu negocio.',
    price: 22,
    max_restaurants: 3,
    max_products: 500,
    max_categories: 50,
    features: {
      whatsapp_orders: true,
      qr_code: true,
      advanced_analytics: true,
      custom_colors: true,
      priority_support: true,
      multi_user: true,
    },
    is_active: true,
  }
];

export const TEMPLATES = [
  {
    id: 'polleria',
    name: 'Pollería a la Brasa',
    description: 'Diseño optimizado para pollerías y brasas con colores cálidos.',
    preview_url: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=300&q=80',
    config: {
      primary_color: '#FF6B6B',
      layout: 'grid',
    }
  },
  {
    id: 'chifa',
    name: 'Chifa Especial',
    description: 'Estilo oriental tradicional con toques decorativos modernos.',
    preview_url: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=300&q=80',
    config: {
      primary_color: '#FFD93D',
      layout: 'list',
    }
  },
  {
    id: 'cevicheria',
    name: 'Cevichería & Pescados',
    description: 'Ambiente fresco y marino para pescados y mariscos.',
    preview_url: 'https://images.unsplash.com/photo-1534604973900-c41ab4c5d4b0?auto=format&fit=crop&w=300&q=80',
    config: {
      primary_color: '#3498DB',
      layout: 'masonry',
    }
  },
  {
    id: 'comida-rapida',
    name: 'Comida Rápida & Burgers',
    description: 'Dinámico y visual, ideal para hamburgueserías y snacks.',
    preview_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=80',
    config: {
      primary_color: '#E67E22',
      layout: 'grid',
    }
  }
];
