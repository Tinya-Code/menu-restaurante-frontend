// Independent API Responses for User 10
export const restaurantResponse = {
  "status": "success",
  "data": {
    "user": {
      "id": "user-uuid-10",
      "email": "alejandroleonpedro10@gmail.com",
      "phone": null,
      "display_name": "Administrador 10",
      "photo_url": null,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00",
      "firebase_uid": "firebase-uid-10"
    },
    "restaurant": {
      "id": "res-uuid-10",
      "name": "Gran Gourmet 10",
      "slug": "restaurante-gran-gourmet-10",
      "owner_id": "user-uuid-10",
      "plan_id": null,
      "template_id": "chifa",
      "phone": "987654310",
      "address": "Av. Los Precursores 2000, Lima",
      
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    "settings": {
      "id": "settings-uuid-10",
      "restaurant_id": "res-uuid-10",
      "whatsapp_config": {
        "number": "924932128",
        "message_template": "Hola, me gustar\u00eda ordenar:"
      },
      "display_config": {
        "theme": "dark",
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
        "delivery_fee": 9.0,
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
          "tiktok": "@restaurante10_oficial",
          "facebook": "https://facebook.com/restaurante10_gastronomia",
          "instagram": "@restaurante10_chef"
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
        "id": "cat-entradas-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-tequenos-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-entradas-10",
          "name": "Teque\u00f1os Crujientes",
          "description": "Con salsa de palta especial.",
          "price": 25.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-causa-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-entradas-10",
          "name": "Causa Lime\u00f1a",
          "description": "Rellena de pollo y palta.",
          "price": 28.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-anticucho-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-entradas-10",
          "name": "Anticuchos de Coraz\u00f3n",
          "description": "Coraz\u00f3n de res marinado a la parrilla.",
          "price": 32.0,
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
        "id": "cat-sopas-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-dieta-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-sopas-10",
          "name": "Dieta de Pollo",
          "description": "Sopa reconfortante con verduras frescas.",
          "price": 30.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cesar-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-sopas-10",
          "name": "Ensalada C\u00e9sar",
          "description": "Lechuga romana, croutones y aderezo especial.",
          "price": 34.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-quinoa-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-sopas-10",
          "name": "Ensalada de Quinoa",
          "description": "Superfood con vegetales de estaci\u00f3n.",
          "price": 32.0,
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
        "id": "cat-fondos-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-lomo-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-fondos-10",
          "name": "Lomo Saltado",
          "description": "Fino lomo fino al wok con cebolla y tomate.",
          "price": 45.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-aji-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-fondos-10",
          "name": "Aj\u00ed de Gallina",
          "description": "Receta tradicional con crema de aj\u00ed amarillo.",
          "price": 38.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ceviche-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-fondos-10",
          "name": "Ceviche Cl\u00e1sico",
          "description": "Pescado fresco marinado en lim\u00f3n sutil.",
          "price": 42.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-arroz-mariscos-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-fondos-10",
          "name": "Arroz con Mariscos",
          "description": "Arroz meloso con frutos del mar.",
          "price": 44.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-tallarin-verde-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-fondos-10",
          "name": "Tallar\u00edn Verde con S\u00e1bana",
          "description": "Pasta en salsa de albahaca y espinaca con bistec.",
          "price": 40.0,
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
        "id": "cat-compartir-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-fuente-ceviche-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-compartir-10",
          "name": "Fuente de Ceviche",
          "description": "Para 4 personas. Lo mejor del mar.",
          "price": 70.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ronda-marina-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-compartir-10",
          "name": "Ronda Marina",
          "description": "Ceviche, chicharr\u00f3n, arroz y causa.",
          "price": 85.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-piqueo-criollo-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-compartir-10",
          "name": "Piqueo Criollo",
          "description": "Aj\u00ed de gallina, carapulcra y seco.",
          "price": 75.0,
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
        "id": "cat-postres-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-suspiro-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-postres-10",
          "name": "Suspiro a la Lime\u00f1a",
          "description": "Dulcemente tradicional con merengue al oporto.",
          "price": 22.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-torta-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-postres-10",
          "name": "Torta de Chocolate",
          "description": "H\u00fameda con fudge artesanal.",
          "price": 24.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-picarones-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-postres-10",
          "name": "Picarones Crujientes",
          "description": "Masa de zapallo y camote con miel de chancaca.",
          "price": 25.0,
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
        "id": "cat-bebidas-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-chicha-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-bebidas-10",
          "name": "Chicha Morada (1L)",
          "description": "Ma\u00edz morado natural y para refrescar.",
          "price": 25.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-limonada-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-bebidas-10",
          "name": "Limonada Frozen",
          "description": "Refrescante con lim\u00f3n reci\u00e9n exprimido.",
          "price": 20.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cafe-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-bebidas-10",
          "name": "Caf\u00e9 Americano",
          "description": "Grano 100% org\u00e1nico de Chanchamayo.",
          "price": 18.0,
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
        "id": "cat-cocteles-10",
        "restaurant_id": "res-uuid-10",
        "menu_id": "menu-uuid-10",
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
          "id": "prod-pisco-sour-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-cocteles-10",
          "name": "Pisco Sour",
          "description": "El cl\u00e1sico nacional equilibrado.",
          "price": 28.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": true,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-chilcano-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-cocteles-10",
          "name": "Chilcano de Pisco",
          "description": "Refrescante con ginger ale y lim\u00f3n.",
          "price": 26.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "is_recommended": false,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-maracuya-sour-10",
          "restaurant_id": "res-uuid-10",
          "category_id": "cat-cocteles-10",
          "name": "Maracuy\u00e1 Sour",
          "description": "Variante frutal con pisco de calidad.",
          "price": 30.0,
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
      "id": "cat-entradas-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
      "name": "Entradas",
      "description": null,
     "type": "entrada",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-sopas-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
      "name": "Sopas y Ensaladas",
      "description": null,
     "type": "sopa",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-fondos-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
      "name": "Platos de Fondo",
      "description": null,
     "type": "plato de fondo",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-compartir-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
      "name": "Para Compatir",
      "description": null,
     "type": "piqueo",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-postres-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
      "name": "Postres",
      "description": null,
     "type": "postre",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-bebidas-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
      "name": "Bebidas",
      "description": null,
     "type": "bebida_fria",
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-cocteles-10",
      "restaurant_id": "res-uuid-10",
      "menu_id": "menu-uuid-10",
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
        id: 'menu-uuid-10',
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
