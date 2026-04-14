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

    <main class="space-y-12">
      @for (category of categories(); track category.id) {
        <section [id]="'category-' + category.id" class="space-y-8">
          <header class="relative text-center">
            <h2 class="text-4xl md:text-5xl font-bungee text-secondary tracking-widest uppercase">
              {{ category.name }}
            </h2>
            <span
              class="block mx-auto mt-2 w-40 h-1 bg-linear-to-r from-transparent via-primary to-transparent"
            ></span>
          </header>
          <!-- Lista de productos -->
          <ul class=" grid gap-y-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 ">
            @for (product of category.products; track product.id) {
              <li>
                <app-cevicheria-card [product]="product" (click)="productClick.emit(product)">
                </app-cevicheria-card>
              </li>
            }
          </ul>
        </section>
      }
    </main>

    <app-cevicheria-footer class="mt-20 block"></app-cevicheria-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CevicheriaTemplate {
  categories = input.required<any[]>();
  restaurantName = input.required<string>();
  productClick = output<Product>();
}
