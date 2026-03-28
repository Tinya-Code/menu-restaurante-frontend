import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { ChifaCardComponent } from './chifa-card/chifa-card';
import { ChifaHeader } from './header/header';
import { ChifaFooter } from './footer/footer';

@Component({
  selector: 'app-chifa-template',
  standalone: true,
  imports: [CommonModule, ChifaCardComponent, ChifaHeader, ChifaFooter],
  template: `
    <app-chifa-header [restaurantName]="restaurantName()"></app-chifa-header>
    
    <div class="space-y-16">
      @for (category of categories(); track category.id) {
        <section [id]="'category-' + category.id">
          <div class="flex flex-col items-center mb-10 translate-y-4">
             <h2 class="text-4xl font-bungee text-primary mb-2 tracking-tighter">{{ category.name }}</h2>
             <div class="w-24 h-1 bg-secondary rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            @for (product of category.products; track product.id) {
              <app-chifa-card 
                [product]="product"
                (click)="productClick.emit(product)">
              </app-chifa-card>
            }
          </div>
        </section>
      }
    </div>

    <app-chifa-footer class="mt-20 block"></app-chifa-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChifaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();
}
