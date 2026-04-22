import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { Border } from './border/border';
import { PolleriaFooter } from './footer/footer';
import { PolleriaHeader } from './header/header';
import { PolleriaCard } from './polleria-card/polleria-card';
import { ResponsiveImageGrid } from './responsive-image-grid/responsive-image-grid';

interface CategoryImage {
  name: string;
  image: string;
}

@Component({
  selector: 'app-polleria-template',
  imports: [
    CommonModule,
    PolleriaCard,
    PolleriaHeader,
    PolleriaFooter,
    Border,
    ResponsiveImageGrid,
  ],
  templateUrl: './index.html',
  styleUrl: './index.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();

  // Arreglo de imágenes por categoría
  private readonly categoryImages: CategoryImage[] = [
    { name: 'entrada', image: '/assets/polleria-template/categories/entradas.webp' },
    { name: 'sopa', image: '/assets/polleria-template/categories/sopasyensaladas.webp' },
    { name: 'plato de fondo', image: '/assets/polleria-template/categories/platosfondo1.webp' },
    { name: 'bebida_fria', image: '/assets/polleria-template/categories/bebidas.webp' },
    { name: 'coctel', image: '/assets/polleria-template/categories/coctel.webp' },
    { name: 'postre', image: '/assets/polleria-template/categories/postres.webp' },
  ];

  // Imagen por defecto si no hay coincidencia
  private readonly defaultImage = '/assets/polleria-template/polleria.png';

  // Método para obtener la imagen de una categoría
  getCategoryImage(categoryType: string): string {
    const normalizedName = categoryType.toLowerCase().trim();
    const match = this.categoryImages.find((ci) => normalizedName.includes(ci.name.toLowerCase()));
    return match?.image ?? this.defaultImage;
  }

  // Método para obtener el array de imágenes según el tipo de categoría
  getCategoryImages(categoryType: string): string[] {
    const baseImage = this.getCategoryImage(categoryType);
    const images = [baseImage];

    // Para "plato de fondo" agregar las imágenes adicionales
    if (categoryType?.toLowerCase().trim() === 'plato de fondo') {
      images.push(
        '/assets/polleria-template/categories/platosfondo2.webp',
        '/assets/polleria-template/categories/platosfondo3.webp'
      );
    }

    return images;
  }
}
