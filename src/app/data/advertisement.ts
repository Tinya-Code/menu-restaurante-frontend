// Simulación de respuesta de API para publicidad
export const advertisementResponse = {
  status: 'success',
  code: 200,
  message: 'Publicidad obtenida correctamente',
  data: {
    id: 'adv-001',
    title: 'Publicidad',
    type: 'image',
    // Tamaños estándar de anuncios (IAB - Interactive Advertising Bureau)
    adStandards: {
      mobile: { width: 320, height: 113, name: 'Mobile Banner' },
      tablet: { width: 768, height: 272, name: 'Tablet Banner' },
      desktop: { width: 1536, height: 543, name: 'Desktop Banner' },
    },
    items: [
      {
        id: 'adv-item-001',
        cloudinary_id: 'cld_adv_001',
        url: '/assets/template-chifa-images/publicidad.png',
        alt: 'Publicidad 1',
        link: null,
        display_order: 0,
        is_active: true,
        // Formato y dimensiones del anuncio (dimensión real de la imagen)
        format: {
          width: 1536,
          height: 543,
          aspect_ratio: '2.83:1',
          mime_type: 'image/png',
          file_size: 1694180, // bytes
        },
      },
      {
        id: 'adv-item-002',
        cloudinary_id: 'cld_adv_002',
        url: '/assets/template-chifa-images/publicidad.png',
        alt: 'Publicidad 2',
        link: null,
        display_order: 1,
        is_active: true,
        format: {
          width: 1536,
          height: 543,
          aspect_ratio: '2.83:1',
          mime_type: 'image/png',
          file_size: 1694180,
        },
      },
      {
        id: 'adv-item-003',
        cloudinary_id: 'cld_adv_003',
        url: '/assets/template-chifa-images/publicidad.png',
        alt: 'Publicidad 3',
        link: null,
        display_order: 2,
        is_active: true,
        format: {
          width: 1536,
          height: 543,
          aspect_ratio: '2.83:1',
          mime_type: 'image/png',
          file_size: 1694180,
        },
      },
    ],
  },
};
