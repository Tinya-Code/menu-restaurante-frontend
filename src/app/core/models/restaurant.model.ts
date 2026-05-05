export interface WhatsAppConfig {
  number: string;
  message_template: string;
}

export interface DisplayConfig {
  theme: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
  };
  currency: string;
  language: string;
  show_images: boolean;
  currency_symbol: string;
  show_categories: boolean;
  show_descriptions: boolean;
  show_availability_badge: boolean;
}

export interface OrderConfig {
  enabled: boolean;
  delivery_fee: number;
  pickup_enabled: boolean;
  payment_methods: string[];
  delivery_enabled: boolean;
  max_order_quantity: number;
  accepts_reservations: boolean;
}

export interface BusinessHours {
  open: string;
  close: string;
  isOpen: boolean;
}

export interface BusinessConfig {
  social_media: {
    tiktok: string;
    facebook: string;
    instagram: string;
  };
  business_hours: {
    [key: string]: BusinessHours;
  };
  delivery_zones: any[];
}

export interface RestaurantSettings {
  id: string;
  restaurant_id: string;
  whatsapp_config: WhatsAppConfig;
  display_config: DisplayConfig;
  order_config: OrderConfig;
  business_config: BusinessConfig;
  description: string;
  tags: string[];
  logo_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  owner_id: string;
  plan_id: string | null;
  template_id: string | null;
  phone: string | null;
  address: string | null;
  location?: {
    lat: number;
    lng: number;
  };
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface RestaurantData {
  restaurant: Restaurant;
  settings: RestaurantSettings;
  plan: any;
  template: any;
  template_response?: any; // Añadido para guardar la respuesta de la plantilla
  menus: any[]; // Will be typed in menu.model.ts
}
