import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { PolleriaFooter } from './footer/footer';
import { PolleriaHeader } from './header/header';
import { PolleriaCardComponent } from './polleria-card/polleria-card';

@Component({
  selector: 'app-polleria-template',
  standalone: true,
  imports: [CommonModule, PolleriaCardComponent, PolleriaHeader, PolleriaFooter],
  template: `
    <app-polleria-header [restaurantName]="restaurantName()"></app-polleria-header>

    <div class="space-y-16">
      @for (category of categories(); track category.id) {
      <section [id]="'category-' + category.id" class="px-4 md:px-0">
        <!-- Layout responsive-->
        <div class="flex flex-col md:grid md:grid-cols-[2fr_3fr] md:gap-10 gap-6">
          <div class="order-1 md:order-1">
            <img
              src="/assets/polleria-template/polleria.png"
              alt="{{ category.name }}"
              class="w-full h-48 md:h-full md:min-h-[400px] object-cover rounded-3xl shadow-premium"
            />
          </div>

          <!-- Contenido -->
          <div class="order-2 md:order-2 flex flex-col">
            <h2 class="text-4xl md:text-5xl text-secondary mb-6 md:mb-8">
              {{ category.name }}
            </h2>

            <!-- Cards en columna vertical -->
            <div class="flex flex-col gap-4">
              @for (product of category.products; track product.id) {
              <app-polleria-card [product]="product" (click)="productClick.emit(product)">
              </app-polleria-card>
              }
            </div>
          </div>
        </div>
      </section>
      }
    </div>

    <app-polleria-footer class="mt-20 block"></app-polleria-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolleriaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();
}
