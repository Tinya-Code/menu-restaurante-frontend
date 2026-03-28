// Independent API Responses for User 3
export const restaurantResponse = {
  "status": "success",
  "data": {
    "user": {
      "id": "user-uuid-3",
      "email": "alejandroleonpedro3@gmail.com",
      "phone": null,
      "display_name": "Administrador 3",
      "photo_url": null,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00",
      "firebase_uid": "firebase-uid-3"
    },
    "restaurant": {
      "id": "res-uuid-3",
      "name": "Gran Gourmet 3",
      "slug": "restaurante-gran-gourmet-3",
      "owner_id": "user-uuid-3",
      "plan_id": null,
      "template_id": "cevicheria",
      "phone": "98765433",
      "address": "Av. Los Precursores 600, Lima",
      "logo_url": null,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    "settings": {
      "id": "settings-uuid-3",
      "restaurant_id": "res-uuid-3",
      "whatsapp_config": {
        "number": "924932128",
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
        "delivery_fee": 5.5,
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
          "tiktok": "@restaurante3_oficial",
          "facebook": "https://facebook.com/restaurante3_gastronomia",
          "instagram": "@restaurante3_chef"
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
        "id": "cat-entradas-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Entradas",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-tequenos-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-entradas-3",
          "name": "Teque\u00f1os Crujientes",
          "description": "Con salsa de palta especial.",
          "price": 18.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-causa-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-entradas-3",
          "name": "Causa Lime\u00f1a",
          "description": "Rellena de pollo y palta.",
          "price": 21.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-anticucho-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-entradas-3",
          "name": "Anticuchos de Coraz\u00f3n",
          "description": "Coraz\u00f3n de res marinado a la parrilla.",
          "price": 25.0,
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
        "id": "cat-sopas-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Sopas y Ensaladas",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-dieta-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-sopas-3",
          "name": "Dieta de Pollo",
          "description": "Sopa reconfortante con verduras frescas.",
          "price": 23.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cesar-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-sopas-3",
          "name": "Ensalada C\u00e9sar",
          "description": "Lechuga romana, croutones y aderezo especial.",
          "price": 27.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-quinoa-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-sopas-3",
          "name": "Ensalada de Quinoa",
          "description": "Superfood con vegetales de estaci\u00f3n.",
          "price": 25.0,
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
        "id": "cat-fondos-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Platos de Fondo",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-lomo-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-fondos-3",
          "name": "Lomo Saltado",
          "description": "Fino lomo fino al wok con cebolla y tomate.",
          "price": 38.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-aji-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-fondos-3",
          "name": "Aj\u00ed de Gallina",
          "description": "Receta tradicional con crema de aj\u00ed amarillo.",
          "price": 31.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ceviche-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-fondos-3",
          "name": "Ceviche Cl\u00e1sico",
          "description": "Pescado fresco marinado en lim\u00f3n sutil.",
          "price": 35.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-arroz-mariscos-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-fondos-3",
          "name": "Arroz con Mariscos",
          "description": "Arroz meloso con frutos del mar.",
          "price": 37.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-tallarin-verde-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-fondos-3",
          "name": "Tallar\u00edn Verde con S\u00e1bana",
          "description": "Pasta en salsa de albahaca y espinaca con bistec.",
          "price": 33.0,
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
        "id": "cat-compartir-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Para Compatir",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-fuente-ceviche-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-compartir-3",
          "name": "Fuente de Ceviche",
          "description": "Para 4 personas. Lo mejor del mar.",
          "price": 63.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-ronda-marina-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-compartir-3",
          "name": "Ronda Marina",
          "description": "Ceviche, chicharr\u00f3n, arroz y causa.",
          "price": 78.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-piqueo-criollo-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-compartir-3",
          "name": "Piqueo Criollo",
          "description": "Aj\u00ed de gallina, carapulcra y seco.",
          "price": 68.0,
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
        "id": "cat-postres-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Postres",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-suspiro-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-postres-3",
          "name": "Suspiro a la Lime\u00f1a",
          "description": "Dulcemente tradicional con merengue al oporto.",
          "price": 15.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-torta-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-postres-3",
          "name": "Torta de Chocolate",
          "description": "H\u00fameda con fudge artesanal.",
          "price": 17.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-picarones-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-postres-3",
          "name": "Picarones Crujientes",
          "description": "Masa de zapallo y camote con miel de chancaca.",
          "price": 18.0,
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
        "id": "cat-bebidas-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Bebidas",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-chicha-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-bebidas-3",
          "name": "Chicha Morada (1L)",
          "description": "Ma\u00edz morado natural y para refrescar.",
          "price": 18.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-limonada-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-bebidas-3",
          "name": "Limonada Frozen",
          "description": "Refrescante con lim\u00f3n reci\u00e9n exprimido.",
          "price": 13.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-cafe-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-bebidas-3",
          "name": "Caf\u00e9 Americano",
          "description": "Grano 100% org\u00e1nico de Chanchamayo.",
          "price": 11.0,
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
        "id": "cat-cocteles-3",
        "restaurant_id": "res-uuid-3",
        "menu_id": "menu-uuid-3",
        "name": "Cocteles",
        "description": null,
        "display_order": 0,
        "is_active": true,
        "created_at": "2026-02-28T03:28:24.097231+00:00",
        "updated_at": "2026-02-28T03:28:24.097231+00:00"
      },
      "products": [
        {
          "id": "prod-pisco-sour-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-cocteles-3",
          "name": "Pisco Sour",
          "description": "El cl\u00e1sico nacional equilibrado.",
          "price": 21.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-chilcano-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-cocteles-3",
          "name": "Chilcano de Pisco",
          "description": "Refrescante con ginger ale y lim\u00f3n.",
          "price": 19.0,
          "image_url": null,
          "is_available": true,
          "display_order": 0,
          "created_at": "2026-02-28T03:28:24.097231+00:00",
          "updated_at": "2026-02-28T03:28:24.097231+00:00"
        },
        {
          "id": "prod-maracuya-sour-3",
          "restaurant_id": "res-uuid-3",
          "category_id": "cat-cocteles-3",
          "name": "Maracuy\u00e1 Sour",
          "description": "Variante frutal con pisco de calidad.",
          "price": 23.0,
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
      "id": "cat-entradas-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
      "name": "Entradas",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-sopas-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
      "name": "Sopas y Ensaladas",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-fondos-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
      "name": "Platos de Fondo",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-compartir-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
      "name": "Para Compatir",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-postres-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
      "name": "Postres",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-bebidas-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
      "name": "Bebidas",
      "description": null,
      "display_order": 0,
      "is_active": true,
      "created_at": "2026-02-28T03:28:24.097231+00:00",
      "updated_at": "2026-02-28T03:28:24.097231+00:00"
    },
    {
      "id": "cat-cocteles-3",
      "restaurant_id": "res-uuid-3",
      "menu_id": "menu-uuid-3",
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
        id: 'menu-uuid-3',
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
