// Independent API Responses for User 7
export const restaurantResponse = {
  "status": "success",
  "data": {
    "user": {
      "id": "user-uuid-7",
      "email": "alejandroleonpedro7@gmail.com",
      "phone": null,
      "display_name": "Administrador 7",
      "photo_url": null,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00",
      "firebase_uid": "firebase-uid-7"
    },
    "restaurant": {
      "id": "res-uuid-7",
      "name": "Gran Gourmet 7",
      "slug": "restaurante-gran-gourmet-7",
      "owner_id": "user-uuid-7",
      "plan_id": null,
      "template_id": "cevicheria",
      "phone": "924932128",
      "address": "Av. Los Precursores 1400, Lima",
      
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    "settings": {
      "id": "settings-uuid-7",
      "restaurant_id": "res-uuid-7",
      "whatsapp_config": {
        "number": "987654327",
        "message_template": "Hola, me gustar\u00eda ordenar:"
      },
      "display_config": {
        "theme": "light",
        "colors": {
          "primary": "#FF6B6B",
          "secondary": "#4ECDC4"
        },
        "currency": "PEN",
        "language": "es",
        "show_images": true,
        "currency_symbol": "S/",
        "show_categories": true,
        "show_descriptions": true,
        "show_availability_badge": true
      },
      "order_config": {
        "enabled": true,
        "delivery_fee": 7.5,
        "pickup_enabled": true,
        "payment_methods": [
          "cash",
          "card",
          "yape",
          "plin"
        ],
        "delivery_enabled": true,
        "max_order_quantity": 15,
        "accepts_reservations": true
      },
      "business_config": {
        "social_media": {
          "tiktok": "@restaurante7_oficial",
          "facebook": "https://facebook.com/restaurante7_gastronomia",
          "instagram": "@restaurante7_chef"
        },
        "business_hours": {
          "friday": {
            "open": "10:00",
            "close": "23:00",
            "isOpen": true
          },
          "monday": {
            "open": "09:00",
            "close": "21:00",
            "isOpen": true
          },
          "sunday": {
            "open": "10:00",
            "close": "18:00",
            "isOpen": true
          },
          "tuesday": {
            "open": "09:00",
            "close": "21:00",
            "isOpen": true
          },
          "saturday": {
            "open": "09:00",
            "close": "23:00",
            "isOpen": true
          },
          "thursday": {
            "open": "09:00",
            "close": "21:00",
            "isOpen": true
          },
          "wednesday": {
            "open": "09:00",
            "close": "21:00",
            "isOpen": true
          }
        },
        "delivery_zones": []
      },
      
      "description": "Lo mejor de la cocina local.",
      "tags": ["peruano", "tradicional", "familiar", "gourmet", "delivery", "saludable", "moderno", "economico", "pescados y mariscos", "carnes y parrillas", "pizzeria", "hamburgueseria", "pasteleria", "cafe", "fast food", "pet friendly", "zona wifi", "estacionamiento", "musica en vivo"],
      "logo_url": null,
      "created_at": "2026-03-04T16:06:13.999+00:00",
      "updated_at": "2026-03-23T05:28:43.86+00:00"
    }
  }
};
export const menuCategoriesResponse = {
  "status": "success",
  "data": [
    {
      "category": {
        "id": "cat-entradas-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Entradas",
        "description": null,
     "type": "entrada",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-tequenos-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-entradas-7",
          "name": "Teque\u00f1os Crujientes",
          "description": "Con salsa de palta especial.",
          "price": 22.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-causa-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-entradas-7",
          "name": "Causa Lime\u00f1a",
          "description": "Rellena de pollo y palta.",
          "price": 25.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-anticucho-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-entradas-7",
          "name": "Anticuchos de Coraz\u00f3n",
          "description": "Coraz\u00f3n de res marinado a la parrilla.",
          "price": 29.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-sopas-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Sopas y Ensaladas",
        "description": null,
     "type": "sopa",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-dieta-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-sopas-7",
          "name": "Dieta de Pollo",
          "description": "Sopa reconfortante con verduras frescas.",
          "price": 27.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cesar-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-sopas-7",
          "name": "Ensalada C\u00e9sar",
          "description": "Lechuga romana, croutones y aderezo especial.",
          "price": 31.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-quinoa-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-sopas-7",
          "name": "Ensalada de Quinoa",
          "description": "Superfood con vegetales de estaci\u00f3n.",
          "price": 29.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-fondos-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Platos de Fondo",
        "description": null,
     "type": "plato de fondo",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-lomo-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-fondos-7",
          "name": "Lomo Saltado",
          "description": "Fino lomo fino al wok con cebolla y tomate.",
          "price": 42.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-aji-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-fondos-7",
          "name": "Aj\u00ed de Gallina",
          "description": "Receta tradicional con crema de aj\u00ed amarillo.",
          "price": 35.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ceviche-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-fondos-7",
          "name": "Ceviche Cl\u00e1sico",
          "description": "Pescado fresco marinado en lim\u00f3n sutil.",
          "price": 39.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-arroz-mariscos-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-fondos-7",
          "name": "Arroz con Mariscos",
          "description": "Arroz meloso con frutos del mar.",
          "price": 41.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-tallarin-verde-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-fondos-7",
          "name": "Tallar\u00edn Verde con S\u00e1bana",
          "description": "Pasta en salsa de albahaca y espinaca con bistec.",
          "price": 37.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-compartir-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Para Compatir",
        "description": null,
     "type": "piqueo",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-fuente-ceviche-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-compartir-7",
          "name": "Fuente de Ceviche",
          "description": "Para 4 personas. Lo mejor del mar.",
          "price": 67.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ronda-marina-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-compartir-7",
          "name": "Ronda Marina",
          "description": "Ceviche, chicharr\u00f3n, arroz y causa.",
          "price": 82.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-piqueo-criollo-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-compartir-7",
          "name": "Piqueo Criollo",
          "description": "Aj\u00ed de gallina, carapulcra y seco.",
          "price": 72.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-postres-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Postres",
        "description": null,
     "type": "postre",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-suspiro-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-postres-7",
          "name": "Suspiro a la Lime\u00f1a",
          "description": "Dulcemente tradicional con merengue al oporto.",
          "price": 19.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-torta-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-postres-7",
          "name": "Torta de Chocolate",
          "description": "H\u00fameda con fudge artesanal.",
          "price": 21.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-picarones-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-postres-7",
          "name": "Picarones Crujientes",
          "description": "Masa de zapallo y camote con miel de chancaca.",
          "price": 22.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-bebidas-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Bebidas",
        "description": null,
     "type": "bebida_fria",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-chicha-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-bebidas-7",
          "name": "Chicha Morada (1L)",
          "description": "Ma\u00edz morado natural y para refrescar.",
          "price": 22.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-limonada-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-bebidas-7",
          "name": "Limonada Frozen",
          "description": "Refrescante con lim\u00f3n reci\u00e9n exprimido.",
          "price": 17.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cafe-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-bebidas-7",
          "name": "Caf\u00e9 Americano",
          "description": "Grano 100% org\u00e1nico de Chanchamayo.",
          "price": 15.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-cocteles-7",
        "restaurant_id": "res-uuid-7",
        "menu_id": "menu-uuid-7",
        "name": "Cocteles",
        "description": null,
     "type": "coctel",
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-pisco-sour-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-cocteles-7",
          "name": "Pisco Sour",
          "description": "El cl\u00e1sico nacional equilibrado.",
          "price": 25.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-chilcano-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-cocteles-7",
          "name": "Chilcano de Pisco",
          "description": "Refrescante con ginger ale y lim\u00f3n.",
          "price": 23.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-maracuya-sour-7",
          "restaurant_id": "res-uuid-7",
          "category_id": "cat-cocteles-7",
          "name": "Maracuy\u00e1 Sour",
          "description": "Variante frutal con pisco de calidad.",
          "price": 27.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    }
  ]
};
export const categoryListResponse = {
  "status": "success",
  "data": [
    {
      "id": "cat-entradas-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Entradas",
      "description": null,
     "type": "entrada",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-sopas-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Sopas y Ensaladas",
      "description": null,
     "type": "sopa",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-fondos-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Platos de Fondo",
      "description": null,
     "type": "plato de fondo",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-compartir-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Para Compatir",
      "description": null,
     "type": "piqueo",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-postres-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Postres",
      "description": null,
     "type": "postre",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-bebidas-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Bebidas",
      "description": null,
     "type": "bebida_fria",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-cocteles-7",
      "restaurant_id": "res-uuid-7",
      "menu_id": "menu-uuid-7",
      "name": "Cocteles",
      "description": null,
     "type": "coctel",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    }
  ]
};
// Legacy Compatibility (if needed)
export const rootData = {
  user: restaurantResponse.data.user,
  restaurants: [{
    restaurant: restaurantResponse.data.restaurant,
    settings: restaurantResponse.data.settings,
    menus: [{
      menu: {
        id: 'menu-uuid-7',
        restaurant_id: restaurantResponse.data.restaurant.id,
        name: 'Carta General',
        description: null,
        is_active: true,
        display_order: 0,
        created_at: '2026-02-28T03:28:24.097231+00:00',
        updated_at: '2026-02-28T03:28:24.097231+00:00'
      },
      categories: menuCategoriesResponse.data
    }]
  }]
};
