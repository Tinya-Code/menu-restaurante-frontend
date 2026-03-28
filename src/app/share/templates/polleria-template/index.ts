import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { PolleriaCardComponent } from './polleria-card/polleria-card';
import { PolleriaHeader } from './header/header';
import { PolleriaFooter } from './footer/footer';

@Component({
  selector: 'app-polleria-template',
  standalone: true,
  imports: [CommonModule, PolleriaCardComponent, PolleriaHeader, PolleriaFooter],
  template: `
    <app-polleria-header [restaurantName]="restaurantName()"></app-polleria-header>
    
    <div class="space-y-12">
      @for (category of categories(); track category.id) {
        <section [id]="'category-' + category.id">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-3xl font-bungee text-secondary tracking-tight">{{ category.name }}</h2>
            <div class="h-1 flex-1 bg-primary/10 rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (product of category.products; track product.id) {
              <app-polleria-card 
                [product]="product"
                (click)="productClick.emit(product)">
              </app-polleria-card>
            }
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
