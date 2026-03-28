// Independent API Responses for User 9
export const restaurantResponse = {
  "status": "success",
  "data": {
    "user": {
      "id": "user-uuid-9",
      "email": "alejandroleonpedro9@gmail.com",
      "phone": null,
      "display_name": "Administrador 9",
      "photo_url": null,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00",
      "firebase_uid": "firebase-uid-9"
    },
    "restaurant": {
      "id": "res-uuid-9",
      "name": "Gran Gourmet 9",
      "slug": "restaurante-gran-gourmet-9",
      "owner_id": "user-uuid-9",
      "plan_id": null,
      "template_id": "polleria",
      "phone": "924932128",
      "address": "Av. Los Precursores 1800, Lima",
      "logo_url": null,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    "settings": {
      "id": "settings-uuid-9",
      "restaurant_id": "res-uuid-9",
      "whatsapp_config": {
        "number": "987654329",
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
        "delivery_fee": 8.5,
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
          "tiktok": "@restaurante9_oficial",
          "facebook": "https://facebook.com/restaurante9_gastronomia",
          "instagram": "@restaurante9_chef"
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
        "id": "cat-entradas-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Entradas",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-tequenos-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-entradas-9",
          "name": "Teque\u00f1os Crujientes",
          "description": "Con salsa de palta especial.",
          "price": 24.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-causa-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-entradas-9",
          "name": "Causa Lime\u00f1a",
          "description": "Rellena de pollo y palta.",
          "price": 27.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-anticucho-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-entradas-9",
          "name": "Anticuchos de Coraz\u00f3n",
          "description": "Coraz\u00f3n de res marinado a la parrilla.",
          "price": 31.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-sopas-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Sopas y Ensaladas",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-dieta-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-sopas-9",
          "name": "Dieta de Pollo",
          "description": "Sopa reconfortante con verduras frescas.",
          "price": 29.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cesar-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-sopas-9",
          "name": "Ensalada C\u00e9sar",
          "description": "Lechuga romana, croutones y aderezo especial.",
          "price": 33.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-quinoa-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-sopas-9",
          "name": "Ensalada de Quinoa",
          "description": "Superfood con vegetales de estaci\u00f3n.",
          "price": 31.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-fondos-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Platos de Fondo",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-lomo-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-fondos-9",
          "name": "Lomo Saltado",
          "description": "Fino lomo fino al wok con cebolla y tomate.",
          "price": 44.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-aji-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-fondos-9",
          "name": "Aj\u00ed de Gallina",
          "description": "Receta tradicional con crema de aj\u00ed amarillo.",
          "price": 37.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ceviche-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-fondos-9",
          "name": "Ceviche Cl\u00e1sico",
          "description": "Pescado fresco marinado en lim\u00f3n sutil.",
          "price": 41.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-arroz-mariscos-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-fondos-9",
          "name": "Arroz con Mariscos",
          "description": "Arroz meloso con frutos del mar.",
          "price": 43.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-tallarin-verde-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-fondos-9",
          "name": "Tallar\u00edn Verde con S\u00e1bana",
          "description": "Pasta en salsa de albahaca y espinaca con bistec.",
          "price": 39.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-compartir-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Para Compatir",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-fuente-ceviche-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-compartir-9",
          "name": "Fuente de Ceviche",
          "description": "Para 4 personas. Lo mejor del mar.",
          "price": 69.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ronda-marina-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-compartir-9",
          "name": "Ronda Marina",
          "description": "Ceviche, chicharr\u00f3n, arroz y causa.",
          "price": 84.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-piqueo-criollo-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-compartir-9",
          "name": "Piqueo Criollo",
          "description": "Aj\u00ed de gallina, carapulcra y seco.",
          "price": 74.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-postres-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Postres",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-suspiro-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-postres-9",
          "name": "Suspiro a la Lime\u00f1a",
          "description": "Dulcemente tradicional con merengue al oporto.",
          "price": 21.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-torta-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-postres-9",
          "name": "Torta de Chocolate",
          "description": "H\u00fameda con fudge artesanal.",
          "price": 23.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-picarones-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-postres-9",
          "name": "Picarones Crujientes",
          "description": "Masa de zapallo y camote con miel de chancaca.",
          "price": 24.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-bebidas-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Bebidas",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-chicha-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-bebidas-9",
          "name": "Chicha Morada (1L)",
          "description": "Ma\u00edz morado natural y para refrescar.",
          "price": 24.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-limonada-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-bebidas-9",
          "name": "Limonada Frozen",
          "description": "Refrescante con lim\u00f3n reci\u00e9n exprimido.",
          "price": 19.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cafe-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-bebidas-9",
          "name": "Caf\u00e9 Americano",
          "description": "Grano 100% org\u00e1nico de Chanchamayo.",
          "price": 17.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        }
      ]
    },
    {
      "category": {
        "id": "cat-cocteles-9",
        "restaurant_id": "res-uuid-9",
        "menu_id": "menu-uuid-9",
        "name": "Cocteles",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-pisco-sour-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-cocteles-9",
          "name": "Pisco Sour",
          "description": "El cl\u00e1sico nacional equilibrado.",
          "price": 27.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-chilcano-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-cocteles-9",
          "name": "Chilcano de Pisco",
          "description": "Refrescante con ginger ale y lim\u00f3n.",
          "price": 25.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-maracuya-sour-9",
          "restaurant_id": "res-uuid-9",
          "category_id": "cat-cocteles-9",
          "name": "Maracuy\u00e1 Sour",
          "description": "Variante frutal con pisco de calidad.",
          "price": 29.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
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
      "id": "cat-entradas-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Entradas",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-sopas-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Sopas y Ensaladas",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-fondos-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Platos de Fondo",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-compartir-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Para Compatir",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-postres-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Postres",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-bebidas-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Bebidas",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-cocteles-9",
      "restaurant_id": "res-uuid-9",
      "menu_id": "menu-uuid-9",
      "name": "Cocteles",
      "description": null,
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
        id: 'menu-uuid-9',
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
