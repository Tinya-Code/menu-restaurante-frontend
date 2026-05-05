import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { ComidaRapidaCardComponent } from './comida-rapida-card/comida-rapida-card';
import { ComidaRapidaHeader } from './header/header';
import { ComidaRapidaFooter } from './footer/footer';

@Component({
  selector: 'app-comida-rapida-template',
  standalone: true,
  imports: [ComidaRapidaCardComponent, ComidaRapidaHeader, ComidaRapidaFooter],
  template: `
    <app-comida-rapida-header [restaurantName]="restaurantName()"></app-comida-rapida-header>
    
    <div class="space-y-12">
      @for (category of categories(); track category.id) {
        <section [id]="'category-' + category.id">
          <div class="flex items-center gap-4 mb-8 transform -rotate-1">
             <div class="w-2 h-8 bg-secondary rounded-full"></div>
             <h2 class="text-3xl font-bungee text-secondary uppercase italic">{{ category.name }}</h2>
             <div class="h-0.5 flex-1 bg-secondary/10"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            @for (product of category.products; track product.id) {
              <app-comida-rapida-card 
                [product]="product"
                (click)="productClick.emit(product)">
              </app-comida-rapida-card>
            }
          </div>
        </section>
      }
    </div>

    <app-comida-rapida-footer class="mt-20 block"></app-comida-rapida-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComidaRapidaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  templateData = input<any>();
  productClick = output<Product>();
}
