import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CevicheriaCardComponent } from './cevicheria-card/cevicheria-card';
import { CevicheriaHeader } from './header/header';
import { CevicheriaFooter } from './footer/footer';

@Component({
  selector: 'app-cevicheria-template',
  standalone: true,
  imports: [CommonModule, CevicheriaCardComponent, CevicheriaHeader, CevicheriaFooter],
  template: `
    <app-cevicheria-header [restaurantName]="restaurantName()"></app-cevicheria-header>
    
    <div class="space-y-12">
      @for (category of categories(); track category.id) {
        <section [id]="'category-' + category.id">
          <div class="relative mb-10 text-center">
             <h2 class="text-4xl md:text-5xl font-bungee text-secondary tracking-widest uppercase">{{ category.name }}</h2>
             <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-linear-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
            @for (product of category.products; track product.id) {
              <app-cevicheria-card 
                [product]="product"
                (click)="productClick.emit(product)">
              </app-cevicheria-card>
            }
          </div>
        </section>
      }
    </div>

    <app-cevicheria-footer class="mt-20 block"></app-cevicheria-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CevicheriaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();
}
